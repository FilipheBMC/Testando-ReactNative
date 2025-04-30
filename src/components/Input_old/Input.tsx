import React, { 
       forwardRef,
       useCallback,
       useState,
       useImperativeHandle,
       useRef,
       useEffect
 } from 'react';

 import { useField } from "@unform/core";
import { Container, IConContainer, InputText } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

interface InputRef{
  focus(): void;
}

interface InputValueReference{
  Value: String;
}

interface InputProps extends TextInputProps{
  name: string;
  value?: string;
  iconName?: React.ComponentProps<typeof Ionicons>["name"];
  containerStyle?: {[key: string]: string | number};
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({
  iconName,
  name,
  value,
  containerStyle,
  ...rest
}, ref) => {

  const theme = useTheme();
  const inputElementRef = useRef<any>(null)

  const [ hasErro, setHasErro] = useState(false);
  const [ isFocused, setIsFocused] = useState(false);
  const [ isFilled, setIsFilled] = useState(false);

  const {
    registerField,
    fieldName,
    defaultValue = "",
    error,
   } = useField(name);

  const InputValueRef = useRef<InputValueReference>({Value: defaultValue});

  useEffect(() => {
    return () =>{
      setHasErro(!error)
    }
  }, [error])

  const handleFocus = useCallback(() => {
      setIsFocused(true);
      setHasErro(false);
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!InputValueRef.current.Value);
  }, [])

  useImperativeHandle(ref, () => ({
    focus(){
      inputElementRef.current.focus();
    }
  }));

  const handleChangeText = useCallback((value: string) => {
    InputValueRef.current.Value = value;
  }, []);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: InputValueRef.current,
      path: "value",
      setValue(_, value){
        InputValueRef.current.Value = value,
        inputElementRef.current.setNativeProps({ text: value })
      },
      clearValue(){
        InputValueRef.current.Value = "",
        inputElementRef.current.clear();
      },
    })
  }, [registerField, fieldName]) 
  

  return (
    <Container style={containerStyle} >
      <IConContainer
        isFilled={isFilled}
        hasErro={hasErro}
        isFocused={isFocused}
      >
        <Ionicons
          name={iconName}
          size={25}
          color={isFocused || hasErro || isFilled
                                ? theme.COLORS.BLUE1
                                : theme.COLORS.GRAY}
        />
      </IConContainer>


      <InputText
        ref={inputElementRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFilled={isFilled}
        defaultValue={defaultValue}
        onChangeText={handleChangeText}
        {...rest}

        hasErro={hasErro} // ✅ agora sim!
        isFocused={isFocused}
      />

    </Container>
  )
};

export { Input };