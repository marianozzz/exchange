const sendHttpRequest = (method, url,) => {
    const promise = new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = 'json';
    
        xhr.onload = () => {
            resolve(xhr.response);
        }
        xhr.send();
    });
    return promise;
};

const getDolar = () => {

    sendHttpRequest('GET','https://dolarapi.com/v1/dolares/contadoconliqui').then(responseData => {
      //  console.log(responseData);
        tablaMonedas(responseData);
    });
    
};

const getEuro = () => {}


function tablaMonedas(responseData) {
  
    // console.log(datos);
    const $cuerpoTabla = document.querySelector("#cuerpoTabla");

    for (const clave in responseData) {
        if (responseData.hasOwnProperty(clave)) {
            const fila = document.createElement('tr');
            fila.innerHTML = `<td>${clave}</td><td>${responseData[clave]}</td>`;
            // si quiero acceder a un solo dato comento el for y habilito la linea de abajo //
           // fila.innerHTML = `<td>Casa</td><td>${responseData.nombre}</td>`;
            $cuerpoTabla.appendChild(fila);
        }
    }

}




getDolar();