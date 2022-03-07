Vue.createApp({
    data () {
        return {
            dogs: [
                {
                name: "Bichon Frise",
                weight: "12-18 lbs",
                lifespan: "14-15 years",
                personality: "happy-go-lucky",
                 quote: "They are lovers, not fighters, and operate under the assumption that there are no strangers, just friends they haven't met yet."
                },
                {
                name: "Brussels Griffon",
                weight: "8-10 lbs",
                lifespan: "12-15 years",
                personality: "comically self-important, yet sensitive",
                quote: "This humanlike toy of complex character has enough personality for 10 ordinary dogs."
                },
                {
                name: "Coton de Tulear",
                weight: "8-15 lbs",
                lifespan: "15-19 years",
                personality: "naturally clownish and lighthearted",
                quote: "The Coton de Tulear, 'Royal Dog of Madagscar', is a bright, happy-go-lucky companion dog whose favorite activities include clowning, cavorting, and following their special human around the house."
                },
                {
                name: "Havanese",
                weight: "7-13 lbs",
                lifespan: "14-16 years",
                personality: "cheerful, vivacious, and sociable",
                quote: "Havanese, smart and trainable extroverts with the comic instincts of a born clown, are natural trick dogs."
                },
                {
                name: "Lowchen",
                weight: "15 lbs",
                lifespan: "13-15 years",
                personality: "affectionate, lively, and brave as a lion",
                quote: "A companion dog whose name is German for 'little lion', the Lowchen has been a popular pet among Continental Europeans for more than 500 years."
                }
                ]
            }
        }
}).mount("#dogWishes");
