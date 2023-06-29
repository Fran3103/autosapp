import data from '../../datos/datos2.json';



const datos = () =>{

    return new Promise ( (resolve, reject) => {
        {
            resolve(data);
        }
    })
}

export default datos


export const detalleid = (id) =>{

    return new Promise ((resolve, reject) => {

        const detalle = data.find((elem) => elem.id === id)

        if (detalle){
            resolve(detalle)
        }
       
    })


}




