import NeftlixPng from "../assets/netflix.png";
import PayPalPng from "../assets/paypal.png";
import EntradaPgn from "../assets/entrada.png";

export const transaction = [
    {
        id: "1",
        name: "Netflix",
        subtitle: "Pagamento referente a Neftlix",
        price: 49.99,
        icon: NeftlixPng
    },
    {
        id: "2",
        name: "PayPal",
        subtitle: "Pagamento referente a PayPal",
        price: 61.60,
        icon: PayPalPng
    },
    {
        id: "3",
        name: "Entrada",
        subtitle: "Depósito bancário",
        price: 200,
        icon: EntradaPgn
    },
]