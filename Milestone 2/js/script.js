// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il
// testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una
// "x": cliccando su di essa, il todo viene rimosso dalla lista.

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
        methods: {
            deleteToDo: function(index) {
                this.toDoS.splice(index, 1);
            }
        }
    },
)