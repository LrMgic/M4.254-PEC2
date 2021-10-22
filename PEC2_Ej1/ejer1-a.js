// Se crea una constante "valor" llamado findOnedonde.
// Esta constante contendra el valor de una funcion en la cual se pasan los paramentros "list (Que es una matriz)" y dos array, el primero con los valores "key(nombre de parametro dentro de list)" y "value(valor buscado)". El segundo array segunda, "onSucces(formula en el caso de encontrarse)" y "onError(formula en el caso de no encontrarse)".
const findOne = (list, { key, value }, { onSuccess, onError }) => {
    //  setTimeout, genera una acción al finalizar el tiempo especificado. En este caso, 2s.
    setTimeout(() => {
        // La accion que se realizada pasados dos segundos es crear una constante llamada "element" la cual recoge el valor/array buscado por "find" dentro de "list". La condicion buscada es que el valor de "key" sea estrictamente igual a "value".
        const element = list.find(element => element[key] === value);
        // Posterior a obtener "eleement", se pasa por un condicional (? = if) del valor "element", en el cual si es positivo se ejecuta la función "onSuccess" con el valor "element". Si no se cumple, se ejecuta "onError" el cual contiene un mensaje de error.
        element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
        // Los 2s.
    }, 2000);
};

// Del valor/array "element" se extrae el valor del parámetro "name" y se muestra en el terminal con el texto delante "user: "
const onSuccess = ({ name }) => console.log(`user: ${name}`);
// Del array se extrae el valor del parámetro "msg" y se muestra por el terminal.
const onError = ({ msg }) => console.log(msg);

// La matriz de datos que se utiliza para buscar.
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

// Se muestra por el terminal la frase "findOne success" y posteriormente se ejecuta findOne, buscando el valor "Carlos"
console.log('findOne success');
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });

// Se muestra por el terminal la frase "findOne error" y posteriormente se ejecuta findOne, buscando el valor "Fermin"
console.log('findOne error');
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
