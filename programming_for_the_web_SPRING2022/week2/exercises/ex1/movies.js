const myMovies = ['Anchorman', 'When Harry Met Sally', 'I Heart Huckabees', 'The Life Aquatic with Steve Zissou', 'The Holiday'];
console.log(myMovies);
const userMovie = window.prompt('What is a movie that you own?');
myMovies.push(userMovie);
window.alert(myMovies.toString());
