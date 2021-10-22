// Se utiliza el async / await directamente en la Promise, haciendo que sea la función "findOne" sea una funcion asincrona, pudiendo tener varias funciones "findOne" esperando a la vez, pero sin detener el resto de flujo de trabajo.
async function findOne(list, { key, value }) {

    // El await hará que toda la formula se pare hasta que no se obtenga el valor de "element".
    const element = await list.find(element => element[key] === value);
    return new Promise((resolve, reject) => {

        setTimeout(
            () => element
                ? resolve(element)
                : reject({ msg: 'ERROR: Element Not Found' }),
            2000
        );
    })
};



const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ msg }) => console.log(msg);

const users = [
    {
        name: 'Carlos',
        rol: 'Teacher'
    },
    {
        name: 'Ana',
        rol: 'Boss'
    }
];

console.log('findOne success');

findOne(users, { key: 'name', value: 'Carlos' })
    .then(onSuccess)
    .catch(onError);

console.log('findOne error');
findOne(users, { key: 'name', value: 'Fermin' })
    .then(onSuccess)
    .catch(onError);

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
