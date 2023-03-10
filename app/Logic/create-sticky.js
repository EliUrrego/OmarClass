/**
 * Creates a new sticky in the database
 * 
 * @param {string} user The user the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 */
function createSticky(user, text, visibility) {
    for (var i = 0; i < users.length; i++) {
        var userInDb = users[i];

        if (userInDb.email === user) {
            var newSticky = {
                user,
                text,
                visibility,
            };

            stickies.push(newSticky);

            return;
        }
    }
    throw new Error("user not found");
}
