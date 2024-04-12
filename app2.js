const axios = require('axios');
const moment = require('moment');

let transaccionesxSegundo = 0 ; 

let count = 1;
async function consumirAPI(data) {
    
    try {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://svgwqap0.grupobafar.com:8000/neptune/api/SMVT/ClientesTPM?vkorg=4000',
            headers: { 
            'Authorization': 'Basic U1lfU01WVDpTaXN0ZW1hczEw', 
            'Cookie': 'SAP_SESSIONID_GWP_100=YzpQJgM5baX7090qhTizG29abuHx1xHuiL_zJWP_cCY%3d; sap-usercontext=sap-client=100'
            }
        };
        const url = 'http://10.250.101.11:8000/v1/chargeToCard';
        const headers = {
            'Content-Type': 'text/plain'
        };

        const respuesta = await   axios.request(config);

        console.info('Success', data);
        logs.push({msj:'Success', trans:data})
    } catch (error) {

        console.error('Error', data);
        logs.push({msj:'Error', trans:data})
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
function ejecutarPruebasContinuas(txs = 2) {
    transaccionesxSegundo = txs
    logs = [];
    peticionesAll = [];
    for (let index = 0; index < txs; index++) {
        peticionesAll.push ('request: ' + (index+1));
    }
    return new Promise(async res => {
        const revisar = () => {
            // console.log('revisando....',logs.length)
            setTimeout(() => { 
               if(logs.length == txs){
                    res(logs);
                    return;
               }else{
                revisar();
               }
            }, 100);
           }
        revisar();

        while (peticionesAll.length > 0) {
            console.log('peticiones pendientes:',peticionesAll.length)
            await ejecutarPruebaDeEstres();
       }


    });
}

module.exports = ejecutarPruebasContinuas;