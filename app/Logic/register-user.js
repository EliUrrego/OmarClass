/**
 * Registers a user in the database
 * 
 * @param {string} name The user full name
 * @param {string} email The user email
 * @param {string} password The user password
 */
function registerUser(name, age, email, password) {

    if (age < 18) throw new Error('User is under 18 years old')

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) throw new Error("user already registered");
    }

    var user = {
        name,
        age,
        email,
        password,
    };

    users.push(user);
}