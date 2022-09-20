// Interpolation

const app =Vue.createApp({
    data(){
        return{
            courseGoal: "Revolutionary idea in theoretical physics",
            vueLink:'https://vuejs.org/',
        }
    },
    methods: {
        outputGoal(){
            const randomNumber=Math.random();
            if(randomNumber<0.5)
            {
                return "Learn Vue";
            }
            else{
                return "master vue";
            }

        }
    }
});
app.mount("#user-goal");





