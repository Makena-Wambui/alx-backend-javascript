const obj = { 
    engineering: [ 'Bob', 'Jane' ], 
    marketing: [ 'Sylvie' ],
    intro() {
        console.log('Welcome!');
    } 
};


const { engineering, marketing, intro } = obj;
console.log(engineering); // [ 'Bob', 'Jane' ]
console.log(marketing); // [ 'Sylvie' ]
intro(); // Welcome!
