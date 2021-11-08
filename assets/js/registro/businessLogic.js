let friendList = [];

function addFriendToSystem(pId, pName, pLastName, pBirth, pEmail, pPassword, pRol2) {
    let newFriend = {
        id: pId,
        name: pName,
        lastName: pLastName,
        birth: pBirth,
        email: pEmail,
        password: pPassword,
        rol2: pRol2,
    };

    friendList.push(newFriend);
    localStorageFriendList(friendList);
    alert('usuario registrado');
    console.log('Array newFriend', newFriend);
}

function getFriendList() {
    let storedList = localStorage.getItem('localFriendList');

    if (storedList == null) {
        friendList = [];
    } else {
        friendList = JSON.parse(storedList);
    }
    return friendList;
}

function localStorageFriendList(pList) {
    localStorage.setItem('localFriendList', JSON.stringify(pList));
}

function findFriend(pId) {
    let friendObj;
    for (let i = 0; i < friendList.length; i++) {
        if (friendList[i].id == pId) {
            friendObj = friendList[i];
        }
    }
    return friendObj;
}