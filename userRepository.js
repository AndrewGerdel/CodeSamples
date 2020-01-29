//Normally this would be in a database.  But this is just sample code.
const staticUserData = {
    users: [
        { id: 1, name: 'Ajay', courses: ['Math', 'Social Studies'] },
        { id: 2, name: 'Hillary', courses: ['Math', 'Science'] },
        { id: 3, name: 'Sanjai', courses: ['Reading', 'Writing'] },
        { id: 4, name: 'Ben', courses: ['Computers', 'Geography', 'Life Coaching'] },
        { id: 5, name: 'Jeff', courses: ['Ancient Art'] },
        { id: 6, name: 'Adam', courses: ['Meaning Beyond Self', 'Singing From Your Heart'] },
        { id: 7, name: 'Eric', courses: ['Homemade Sushi', 'Believing In Yourself'] },
    ]
};


var GetUserById = ((id) => {
    var foundUser = FindUserById(id);
    if(!foundUser){
        return { result: -1, error: 'User not found' };
    }
    return foundUser;
});

var UpdateUser = ((user) => {
    var userId = parseInt(user.id);
    if (isNaN(userId)) {
        return { result: -1, error: 'UserId must be numeric' };
    }
    var foundUser = FindUserById(userId);
    if (!foundUser) {
        return { result: -1, error: "User not found" }
    }
    foundUser.name = user.name;
    foundUser.courses = user.courses;
    return { result: 1 };
});

var AddUser = ((user) => {
    var userId = parseInt(user.id);
    if (isNaN(userId)) {
        return { result: -1, error: 'UserId must be numeric' };
    }
    var foundUser = FindUserById(userId);
    if (foundUser) {
        return { result: -1, error: "This user already exists" }
    }
    staticUserData.users[staticUserData.users.length] = user;
    return { result: 1 };
});

var FindUserById = ((id) => {
    let foundUser;
    staticUserData.users.filter(function (item) {
        if (item.id == id)
            foundUser = item;
    });
    return foundUser;
})

module.exports = {
    GetUserById,
    UpdateUser,
    AddUser
}
