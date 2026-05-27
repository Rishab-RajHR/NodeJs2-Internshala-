const fetch = require('node-fetch');
console.clear();

// fetch('https://api.github.com/users/github')
// .then(res => res.json())
// .then(json => console.log(json));

fetch('https://google.com')
.then(res => res.text())
.then(data => console.log(data));

fetch('https://randomuser.me/api/?results=5')
.then(res => res.json())
.then(json => {
    // console.log(json.results);
    json.results.forEach(person => {
        // console.log(person.name);
        const temp = person.anme;
        console.log(`${temp.first} ${temp.last}`);
    });
})