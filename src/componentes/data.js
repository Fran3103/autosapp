import data from '../datos2.json';

export const datos = () =>{

    return new Promise ( (resolve, reject) => {
        {
            resolve(data);
        }
    })
}


