// Se crea una nueva promesa a la cual se le pasan los paramentros "list (Que es una matriz)" y el array con los valores "key(nombre de parametro dentro de list)" y "value(valor buscado)".
const findOne = (list, { key, value }) => {
    // La promesa devuelve un valor "resolve" si se resuelve o un "reject" si no se resuelve.
    return new Promise((resolve, reject) => {

        const element = list.find(element => element[key] === value);

        // Una vez pasados dos segundos, si el valor de "element" es verdad, se devuelve el "resolve". Si no se resuelve, "reject".
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

// Si desde la promesa se cumple, se devuelve el "resolve" y se aplica el "then". Si surje algun error, se aplica el "catch".
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
