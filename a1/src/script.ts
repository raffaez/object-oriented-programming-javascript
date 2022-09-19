import { Client } from "./Client";

const client = new Client({
    clientName: 'Deolane',
    gender: 'F',
    dateOfBrith: '27/06/1999',
    cpf: 12345678909,
    phone: 991929394,
    email: 'dradeolane@gmail.com'
});

client.purchase('Smartphone');
client.purchase('Dress');
client.purchase('Headset');
client.listPurchases();
client.return(2);
client.listPurchases();