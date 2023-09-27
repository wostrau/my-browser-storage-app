const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

const userId = 'u1';
const user = {
    name: 'Alex',
    age: 35,
    hobbies: ['Sports', 'Cooking']
};

storeBtn.addEventListener('click', () => {
    sessionStorage.setItem('uId', userId);
    localStorage.setItem('user', JSON.stringify(user));
});

retrieveBtn.addEventListener('click', () => {
    const extractedId = sessionStorage.getItem('uId');
    const extractedUser = JSON.parse(localStorage.getItem('user'));
    console.log(extractedUser);
    if (extractedId) {
        console.log(`Got the Id - ${extractedId}`);
    } else {
        console.log('Could not find Id!');
    }
});