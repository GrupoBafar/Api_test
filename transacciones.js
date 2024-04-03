const moment = require('moment');

function generarDatosAleatorios(cantidadDatos) {

  const cardNumbers = ["5063450300101901","5063450300103302","5063450300104303","5063450300109501","5063450300789865","5544121212121212","5063450300101822","5063450300101833","5063450300101855"];
  let reference = 5003491324122;
  let numberTransaction = 632037;
  let ATC = 1000;
  const terminalArr = [
    ["00001001",	"M018 CMT CHIHUAHUA 2000 01"    ,	"CHIHUAHUA CHI"],
    ["00002001",	"M017 CMT CHIHUAHUA ABASTOS 01" ,	"CHIHUAHUA CHI"],
    ["00003001",	"M019 CMT BOMBERO 01"           ,	"CHIHUAHUA CHI"],
    ["00005001",	"M020 CMT JUAN ESCUTIA 01"      ,	"CHIHUAHUA CHI"],
    ["00006001",	"M025 CMT NUEVA ESPAÑA 01"      ,	"CHIHUAHUA CHI"],
    ["00008001",	"M030 CMT ZARAGOZA 01"          ,	"CHIHUAHUA CHI"],
    ["00009001",	"M021 CMT MEGA 20 DE NOVIEMB 01",	"CHIHUAHUA CHI"],
    ["00218001",	"CARNEMART PLANTA"              ,	"CHIHUAHUA CHI"],
    ["00001002",	"M018 CMT CHIHUAHUA 2000 02"    ,	"CHIHUAHUA CHI"]
  ];

  // Generar un número aleatorio de datos

  const datos = [];

  for (let i = 0; i < cantidadDatos; i++) {
        // const cardNumber = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
        let cardNumber = Math.floor(Math.random() * 8999999999999999);
    
        cardNumber = cardNumber + 1000000000000000
    const transAmount = Math.floor(Math.random() * 50); // Número aleatorio de teléfono español
    const terminal = Math.floor(Math.random() * 5) + 1;
      ++numberTransaction;
      ++reference;
      ++ATC;
       const datosPersona = {
            "numberTransaction": numberTransaction.toString() ,
            "prodIndicator": "02",
            "tranCode": "00",
            "cardNumber": cardNumber.toString(),
            "transactionAmount": `${transAmount.toString()}.00`,
            "cashbackAmount": "0.0",
            "additionalAmounts": "0.0",
            "surchargeAmounts": "0.0",
            "transactionDate": moment().format('YYYY-MM-DD HH:mm:ss'),
            "merchantType": "5422",
            "reference": reference.toString(),
            "terminalID": terminalArr[terminal][0],
            "terminalName": terminalArr[terminal][1],
            "terminalLocation": terminalArr[terminal][2],
            "authorizationNumber": "",
            "draftCapture": " ",
            "entryMode": "051",
            "postDate": "0111",
            "logicalOriginID": "CI",
            "FIID": "EGLO",
            "accessMode": "04",
            "ATC": ATC.toString(),
            "currency": "484"
        };

    datos.push(datosPersona);
  }

  return datos;
}

module.exports = generarDatosAleatorios;