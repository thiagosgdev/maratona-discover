const Modal = {
    open(){
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close(){
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: 23/01/2021
    },
    {
        id: 2,
        description: 'Website',
        amount: 050000,
        date: 23/01/2021
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: 23/01/2021
    }
]

const Transaction = {
    
    income(){

    },

    expense(){

    },

    total(){

    }

}