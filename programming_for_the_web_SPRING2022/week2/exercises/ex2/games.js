const games = [
    { title: 'Yahtzee', type: 'dice', players: '2 or more', rating: 10, description: 'a highly addictive dice game that perfectly blends chance and skill' },
    {title: 'Gin', type: 'card', players: '2 or 3', rating: 8, description: 'a strategic card game where you sit in near silence with friends, saving triplets or straights in your hand, until your cards total 11 or less' },
    { title: 'My Little Pony Memory', type: 'matching memory game', players: '2 or more', rating: 7, description: 'a perfect game for sharpening your dull short-term memory with your nieces and nephews' }
]
console.log(games);
promptResponse = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game");
if (promptResponse === '1') {
   window.alert('You have selected ' + games[0].title + ' which is a ' + games[0].type + ' game. It is played with ' + games[0].players + ' players, and I rate it ' + games[0].rating + ' out of 10 stars. It is ' + games[0].description + '.');
}
else if (promptResponse === '2') {
    window.alert('You have selected ' + games[1].title + ' which is a ' + games[1].type + ' game. It is played with ' + games[1].players + ' players, and I rate it ' + games[1].rating + ' out of 10 stars. It is ' + games[1].description + '.');
}
else if (promptResponse === '3') {
    window.alert('You have selected ' + games[2].title + ' which is a ' + games[2].type + ' game. It is played with ' + games[2].players + ' players, and I rate it ' + games[2].rating + ' out of 10 stars. It is ' + games[2].description + '.');
}
