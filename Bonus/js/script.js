// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il
// testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una
// "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante
// "aggiungi": cliccando sul pulsante, il testo digitato
// viene letto e utilizzato per creare un nuovo todo,
// che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- oltre al click sul pulsante, intercettare
//  anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item,
// invertire il valore della proprietà done
// del todo corrispondente (se done era uguale a false,
// impostare true e viceversa)


Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            newToDo: '',
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
            },
            deletedSpaceNewText: function() {
                const deletedSpaceNewTextToDo = this.newToDo.trim();
                if (deletedSpaceNewTextToDo.length > 2 ) {
                    this.toDoS.push(
                        {
                            text: deletedSpaceNewTextToDo,
                            done: false
                        }
                    )
                    this.newToDo = ''
                }
            },
            toggleDone: function(index) {
               this.toDoS[index].done = !this.toDoS[index].done;
            }
        }
    },
)