const axios = require('axios');
const moment = require('moment');
const generarDatosAleatorios = require('./transacciones')

let transaccionesxSegundo = 0 ; 
// const peticiones = generarDatosAleatorios(50);
// const datosPersona = [{
//     "numberTransaction": "622030" ,

//     "prodIndicator": "02",
//     "tranCode": "00",
//     "cardNumber": "5063450300101901",
//     "transactionAmount": `20.00`,
//     "cashbackAmount": "0.0",
//     "additionalAmounts": "0.0",
//     "surchargeAmounts": "0.0",
//     "transactionDate": "2024-03-26",
//     "merchantType": "5422",
//     "reference": "338222835244",
//     "terminalID": "00001001",
//     "terminalName": "M018 CMT CHIHUAHUA 2000 01",
//     "terminalLocation": "CHIHUAHUA CHI",
//     "authorizationNumber": "",
//     "draftCapture": " ",
//     "entryMode": "051",
//     "postDate": "0111",
//     "logicalOriginID": "CI",
//     "FIID": "EGLO",
//     "accessMode": "04",
//     "ATC": "0014",
//     "currency": "484"
// },{
//     "numberTransaction": "692144" ,
//     "prodIndicator": "02",
//     "tranCode": "00",
//     "cardNumber": "5063450300103302",
//     "transactionAmount": `30.50`,
//     "cashbackAmount": "0.0",
//     "additionalAmounts": "0.0",
//     "surchargeAmounts": "0.0",
//     "transactionDate": "2024-03-26",
//     "merchantType": "5422",
//     "reference": "338222835238",
//     "terminalID": "00002001",
//     "terminalName": "M017 CMT CHIHUAHUA ABASTOS 01",
//     "terminalLocation": "CHIHUAHUA CHI",
//     "authorizationNumber": "",
//     "draftCapture": " ",
//     "entryMode": "051",
//     "postDate": "0111",
//     "logicalOriginID": "CI",
//     "FIID": "EGLO",
//     "accessMode": "04",
//     "ATC": "0009",
//     "currency": "484"
// },{
//     "numberTransaction": "622134" ,
//     "prodIndicator": "02",
//     "tranCode": "00",
//     "cardNumber": "5063450300109501",
//     "transactionAmount": `18.00`,
//     "cashbackAmount": "0.0",
//     "additionalAmounts": "0.0",
//     "surchargeAmounts": "0.0",
//     "transactionDate": "2024-03-26",
//     "merchantType": "5422",
//     "reference": "338222835230",
//     "terminalID": "00005001",
//     "terminalName": "M020 CMT JUAN ESCUTIA 01",
//     "terminalLocation": "CHIHUAHUA CHI",
//     "authorizationNumber": "",
//     "draftCapture": " ",
//     "entryMode": "051",
//     "postDate": "0111",
//     "logicalOriginID": "CI",
//     "FIID": "EGLO",
//     "accessMode": "04",
//     "ATC": "0007",
//     "currency": "484"
// },{
//     "numberTransaction": "622137" ,
//     "prodIndicator": "02",
//     "tranCode": "00",
//     "cardNumber": "5063450300789865",
//     "transactionAmount": `17.99`,
//     "cashbackAmount": "0.0",
//     "additionalAmounts": "0.0",
//     "surchargeAmounts": "0.0",
//     "transactionDate": "2024-03-26",
//     "merchantType": "5422",
//     "reference": "338222835239",
//     "terminalID": "00006001",
//     "terminalName": "M025 CMT NUEVA ESPAÑA 01",
//     "terminalLocation": "CHIHUAHUA CHI",
//     "authorizationNumber": "",
//     "draftCapture": " ",
//     "entryMode": "051",
//     "postDate": "0111",
//     "logicalOriginID": "CI",
//     "FIID": "EGLO",
//     "accessMode": "04",
//     "ATC": "0001",
//     "currency": "484"
// },{
//     "numberTransaction": "622034" ,
//     "prodIndicator": "02",
//     "tranCode": "00",
//     "cardNumber": "5544121212121212",
//     "transactionAmount": `40.00`,
//     "cashbackAmount": "0.0",
//     "additionalAmounts": "0.0",
//     "surchargeAmounts": "0.0",
//     "transactionDate": "2024-03-26",
//     "merchantType": "5422",
//     "reference": "338222835247",
//     "terminalID": "00008001",
//     "terminalName": "M030 CMT ZARAGOZA 01",
//     "terminalLocation": "CHIHUAHUA CHI",
//     "authorizationNumber": "",
//     "draftCapture": " ",
//     "entryMode": "051",
//     "postDate": "0111",
//     "logicalOriginID": "CI",
//     "FIID": "EGLO",
//     "accessMode": "04",
//     "ATC": "0011",
//     "currency": "484"
// },{
//     "numberTransaction": "622132" ,
//     "prodIndicator": "02",
//     "tranCode": "00",
//     "cardNumber": "5063450300101822",
//     "transactionAmount": `32.05`,
//     "cashbackAmount": "0.0",
//     "additionalAmounts": "0.0",
//     "surchargeAmounts": "0.0",
//     "transactionDate": "2024-03-26",
//     "merchantType": "5422",
//     "reference": "338222835240",
//     "terminalID": "00009001",
//     "terminalName": "M021 CMT MEGA 20 DE NOVIEMB 01",
//     "terminalLocation": "CHIHUAHUA CHI",
//     "authorizationNumber": "",
//     "draftCapture": " ",
//     "entryMode": "051",
//     "postDate": "0111",
//     "logicalOriginID": "CI",
//     "FIID": "EGLO",
//     "accessMode": "04",
//     "ATC": "0010",
//     "currency": "484"
// },{
//     "numberTransaction": "622039" ,
//     "prodIndicator": "02",
//     "tranCode": "00",
//     "cardNumber": "5063450300101833",
//     "transactionAmount": `53.50`,
//     "cashbackAmount": "0.0",
//     "additionalAmounts": "0.0",
//     "surchargeAmounts": "0.0",
//     "transactionDate": "2024-03-26",
//     "merchantType": "5422",
//     "reference": "338222835242",
//     "terminalID": "00218001",
//     "terminalName": "CARNEMART PLANTA",
//     "terminalLocation": "CHIHUAHUA CHI",
//     "authorizationNumber": "",
//     "draftCapture": " ",
//     "entryMode": "051",
//     "postDate": "0111",
//     "logicalOriginID": "CI",
//     "FIID": "EGLO",
//     "accessMode": "04",
//     "ATC": "0013",
//     "currency": "484"
// },{
//     "numberTransaction": "622038" ,
//     "prodIndicator": "02",
//     "tranCode": "00",
//     "cardNumber": "5063450300101855",
//     "transactionAmount": `54.00`,
//     "cashbackAmount": "0.0",
//     "additionalAmounts": "0.0",
//     "surchargeAmounts": "0.0",
//     "transactionDate": "2024-03-26",
//     "merchantType": "5422",
//     "reference": "338222835234",
//     "terminalID": "00001002",
//     "terminalName": "M018 CMT CHIHUAHUA 2000 02",
//     "terminalLocation": "CHIHUAHUA CHI",
//     "authorizationNumber": "",
//     "draftCapture": " ",
//     "entryMode": "051",
//     "postDate": "0111",
//     "logicalOriginID": "CI",
//     "FIID": "EGLO",
//     "accessMode": "04",
//     "ATC": "0006",
//     "currency": "484"
// },{
//     "numberTransaction": "622031" ,
//     "prodIndicator": "02",
//     "tranCode": "00",
//     "cardNumber": "5063450300021995",
//     "transactionAmount": `11.00`,
//     "cashbackAmount": "0.0",
//     "additionalAmounts": "0.0",
//     "surchargeAmounts": "0.0",
//     "transactionDate": "2024-03-26",
//     "merchantType": "5422",
//     "reference": "338222835234",
//     "terminalID": "00002002",
//     "terminalName": "M017 CMT CHIHUAHUA ABASTOS 02",
//     "terminalLocation": "CHIHUAHUA CHI",
//     "authorizationNumber": "",
//     "draftCapture": " ",
//     "entryMode": "051",
//     "postDate": "0111",
//     "logicalOriginID": "CI",
//     "FIID": "EGLO",
//     "accessMode": "04",
//     "ATC": "0008",
//     "currency": "484"
// },{
//     "numberTransaction": "692045" ,
//     "prodIndicator": "02",
//     "tranCode": "00",
//     "cardNumber": "5063450300024932",
//     "transactionAmount": `15.00`,
//     "cashbackAmount": "0.0",
//     "additionalAmounts": "0.0",
//     "surchargeAmounts": "0.0",
//     "transactionDate": "2024-03-26",
//     "merchantType": "5422",
//     "reference": "338222835234",
//     "terminalID": "00003002",
//     "terminalName": "M019 CMT BOMBERO 02",
//     "terminalLocation": "CHIHUAHUA CHI",
//     "authorizationNumber": "",
//     "draftCapture": " ",
//     "entryMode": "051",
//     "postDate": "0111",
//     "logicalOriginID": "CI",
//     "FIID": "EGLO",
//     "accessMode": "04",
//     "ATC": "0012",
//     "currency": "484"
// },{
//     "numberTransaction": "692046" ,
//     "prodIndicator": "02",
//     "tranCode": "00",
//     "cardNumber": "5063450300101896",
//     "transactionAmount": `10.00`,
//     "cashbackAmount": "0.0",
//     "additionalAmounts": "0.0",
//     "surchargeAmounts": "0.0",
//     "transactionDate": "2024-03-26",
//     "merchantType": "5422",
//     "reference": "338222835234",
//     "terminalID": "00005002",
//     "terminalName": "M020 CMT JUAN ESCUTIA 02",
//     "terminalLocation": "CHIHUAHUA CHI",
//     "authorizationNumber": "",
//     "draftCapture": " ",
//     "entryMode": "051",
//     "postDate": "0111",
//     "logicalOriginID": "CI",
//     "FIID": "EGLO",
//     "accessMode": "04",
//     "ATC": "0015",
//     "currency": "484"
// }];


// let peticionesAll = peticiones.concat(datosPersona)
// let peticionesAll = datosPersona.concat(peticiones)

// Función para realizar una llamada al API

let count = 1;
async function consumirAPI(data) {
    
    try {
        const url = 'http://10.250.101.11:8000/v1/chargeToCard';
        const headers = {
            'Content-Type': 'text/plain'
        };

        const respuesta = await axios.post(url, data, { headers });
        // console.log('Respuesta del API:', respuesta.data,data['numberTransaction']);
        console.info('Success', data['numberTransaction']);
        logs.push({msj:'Success', trans:data['numberTransaction']})
    } catch (error) {
        // console.error('Error al realizar la solicitud:', error);
        console.error('Error', data['numberTransaction']);
        logs.push({msj:'Error', trans:data['numberTransaction']})
    }

}

// Función para ejecutar una prueba de estrés
async function ejecutarPruebaDeEstres() {
    
    // Generar un tiempo de espera aleatorio entre 1 y 2 segundos
    // const tiempoEspera = Math.floor(Math.random() * 2) + 1;
    const tiempoEspera = 1;
    
    // Esperar el tiempo aleatorio antes de hacer la llamada al API
    await new Promise(resolve => setTimeout(resolve, tiempoEspera * 1000));
    
    // Realizar la llamada al API después del tiempo de espera
    const cantidadPeticiones = Math.floor(Math.random() * transaccionesxSegundo) + 1;

    for (let index = 0; index < cantidadPeticiones; index++) {
        
        if(peticionesAll.length == 0){
            return
        }

        console.log("lanzar petición número:" + count);
        count++;

        consumirAPI(peticionesAll.shift());
    }
}

let peticionesAll = [];
let logs = []
// Ejecutar la prueba de estrés de manera continua
function ejecutarPruebasContinuas(peticionesTest,txs = 2) {
    transaccionesxSegundo = txs
    logs = []
    return new Promise(async res => {
        peticionesAll = [...peticionesTest];
        while (peticionesAll.length > 0) {
            console.log('peticiones pendientes:',peticionesAll.length)
            await ejecutarPruebaDeEstres();
       }

       const revisar = () => {
        console.log('revisando....',logs.length)
        setTimeout(() => { 
           if(logs.length == peticionesTest.length){
                res(logs);
                return;
           }else{
            revisar();
           }
        }, 100);
       }

       revisar();
    });
}

module.exports = ejecutarPruebasContinuas;