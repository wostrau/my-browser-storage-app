const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
    const userId = 'u2';
    const user = { name: 'Alex', age: 35 };

    document.cookie = `uId=${userId}`;
    document.cookie = `user=${JSON.stringify(user)}`;

});

retrieveBtn.addEventListener('click', () => {
    const cookieData = document.cookie.split(';');
    const trimmedData = cookieData.map(i => i.trim());
    console.log(trimmedData);
});