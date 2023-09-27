const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

let db;

const dbRequest = indexedDB.open('StorageDummy', 1);

dbRequest.onupgradeneeded = event => {
    db = event.target.result;

    const objStore = db.createObjectStore('products', { autoIncrement: true });

    objStore.transaction.oncomplete = event => {
        const productsStore = db
            .transaction('products', 'readwrite')
            .objectStore('products');

        productsStore.add({
            //id: 'p1',
            title: 'New product',
            price: 12.99,
            tags: [
                'Expensive',
                'Luxury'
            ]
        });
    };
};

dbRequest.onsuccess = event => {
    db = event.target.result;
};

dbRequest.onerror = event => {
    console.log('ERROR!');
};

storeBtn.addEventListener('click', () => {
    if (!db) return;

    const productsStore = db
        .transaction('products', 'readwrite')
        .objectStore('products');

    productsStore.add({
        //id: 'p1',
        title: 'Second product',
        price: 99.99,
        tags: [
            'Expensive',
            'Luxury'
        ]
    });
});

retrieveBtn.addEventListener('click', () => {
    const productsStore = db
        .transaction('products', 'readwrite')
        .objectStore('products');

    const request = productsStore.get(2);

    request.onsuccess = () => {
        console.log(request.result);
    };
});