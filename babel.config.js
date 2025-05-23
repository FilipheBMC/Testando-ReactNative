// babel.config.js
module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        ["module-resolver",{
            "root" : ["./src"],
            "extensions" : [".js", ".jsx", ".ts", ".tsx"],
            "alias" : {
                "@assets" : "./src/assets",
                "@components" : "./src/components",
                "@config" : "./src/config",
                "@hooks" : "./src/hooks",
                "@routes" : "./src/routes",
                "@screens" : "./src/screens",
                "@service" : "./src/service",
                "@styles" : "./src/styles",
                "@utils" : "./src/utils",
            }
        } 

        ]
      ]
    };
  };
  