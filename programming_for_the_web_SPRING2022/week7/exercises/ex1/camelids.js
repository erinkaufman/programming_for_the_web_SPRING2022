Vue.createApp({
    data () {
        return {
            title: 'Alpaca or Llama?',
            titleAlpaca: 'Alpaca',
            titleLlama: 'Llama',
            featuredAnimal: 'Alpaca',
            sizeAlpaca: '35 inches high at the shoulder',
            sizeLlama: '47 inches high at the shoulder',
            weightAlpaca: '150 lbs',
            weightLlama: '250 to 400 lbs',
            faceAlpaca: 'Similar to a Llama face, but “smooshed in” and blunt',
            faceLlama: 'Long snout that sticks out',
            earsAlpaca: 'Short, spear-shaped ears',
            earsLlama: 'Long, banana-shaped ears',
            fleeceAlpaca: 'Finer, softer and thicker fleece in larger quantities and in more colors than llamas',
            fleeceLlama: 'More like hair, less coverage on their heads and faces than alpacas',
            ancestorAlpaca: 'Vicuña',
            ancestorLlama: 'Guanaco',
            personalityAlpaca: 'Herd animals, shy and polite',
            personalityLlama: 'Independent-minded, sassy and sometimes rude',
            purposeAlpaca: 'Fiber',
            purposeLlama: 'Pack animal, guard animal, or meat',
            webInfo1Name: 'Modern Farmer',
            webInfo2Name: 'Heifer International',
            webInfo1: "https://modernfarmer.com/2015/09/difference-between-llama-and-alpaca/",
            webInfo2: "https://www.heifer.org/blog/alpacas-vs-llamas-how-to-tell-the-difference.html"
        }
    }
}).mount('#myApp');
