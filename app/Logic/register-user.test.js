//case 0

registerUser('John Doe', 25, 'john@doe.com', '123123123')
//console.log(users)

//case 1 

registerUser('Jane Doe', 24, 'jane@doe.com', '123123123')
//console.log(users)//

//case 2 

try {
    registerUser('John Doe', 25, 'john@doe.com', '123123123')
    //console.log(users)
} catch (error) {
    //console.error(error.message)
}

//case 3 
try {
    registerUser('Andy Garcia', 15, 'andy@garcia.com', '123123123')
} catch (error) {
    //console.error(error.message)
}