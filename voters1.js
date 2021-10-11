let voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
]

const getAgeRange = (voter, ageStart, ageEnd) => voter.age >= ageStart && voter.age <= ageEnd
const getVoterResults = (arr) =>
     arr.reduce(
         (total, voter) => ({
             youngVotes: 
                getAgeRange(voter,18,25) && voter.voted 
                    ? total.youngVotes += 1 
                    : total.youngVotes,
             youngPeople: 
                getAgeRange(voter,18,25) 
                    ? total.youngPeople += 1 
                    : total.youngPeople,
             midVotes: 
                getAgeRange(voter,26,35) && voter.voted 
                    ? total.midVotes += 1 
                    : total.midVotes,
             midPeople:
                getAgeRange(voter,26,35) 
                     ? total.midPeople += 1 
                     : total.midPeople,
             oldVotes: 
                getAgeRange(voter,36,55) && voter.voted 
                     ? total.oldVotes += 1 
                     : total.oldVotes,
             oldPeople: 
                getAgeRange(voter,36,55)
                     ? total.oldPeople += 1 
                     : total.oldPeople,
         }),
                {
                    youngVotes: 0,
                    youngPeople: 0,
                    midVotes: 0,
                    midPeople: 0,
                    oldVotes: 0,
                    oldPeople: 0,
     }
)

console.log(getVoterResults(voters))