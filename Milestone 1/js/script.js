// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il
// testo del todo sbarrato.

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            toDoS: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Preparare la cena',
                    done: false
                }
            ],
        },
    },
)