import datacarrete from '../../datos/datosCarrete.json'




const  datosCarrete = ()=> {

    return new Promise((resolve, reject) => {
        {
            resolve(datacarrete);
        }
    });
}

export default datosCarrete