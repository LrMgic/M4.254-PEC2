function findOne(list, { key, value }) {

    const element = list.find(element => element[key] === value);
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

// Se anidan las dos llamadas a "findOne" dentro de una nueva funcion "tots", y se le aplica el async.
async function tots(users) {
    console.log('findOne success');
    // Se aplica el await a cada una de las fórmulas "findOne", hacendo que se separe su proceso deejecución y que la siguiente no empiece a ejecutarse hasta que la primera sea resuelta.
    await findOne(users, { key: 'name', value: 'Carlos' })
        .then(onSuccess)
        .catch(onError);

    console.log('findOne error');
    await findOne(users, { key: 'name', value: 'Fermin' })
        .then(onSuccess)
        .catch(onError);
};

tots(users);



/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
