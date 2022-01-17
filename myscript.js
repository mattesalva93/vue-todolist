let app = new Vue ({
    el: '#miapp',
    data: {
        inputUtente: "",
        listatodo : [
            {
               text: "Spesa",
               done: false, 
            },
            {
                text: "Farmacia",
                done: false, 
            },
            {
                text: "Lezione",
                done: true, 
            },

            

        ]

    },
    methods: {

        aggiungiMansione : function(inputUtente){

            nuovoOggetto = {
                text: inputUtente,
                done: false,            
            };
            this.listatodo.push(nuovoOggetto);
        }
    }
});