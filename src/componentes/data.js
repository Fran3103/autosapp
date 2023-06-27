import data from '../datos2.json';

const datos = () =>{

    return new Promise ( (resolve, reject) => {
        {
            resolve(data);
        }
    })
}

export default datos


