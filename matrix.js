let people = [ 
     { name: 'Angelina Jolie', age: 80 },
     { name: 'Eric Jones', age: 2 },
     { name: 'Paris Hilton', age: 5 },
     { name: 'Kanye West', age: 10 },
     { name: 'Bob Ziroll', age: 100 }
]

const matrix = people.map(
    person => person.age > 18 ? `${person.name} can go to The Matrix` : `${person.name} is under age`
)
console.log(matrix)
