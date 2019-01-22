/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {

    // Loop through each key-value in the Object and print it out
    for (const key in someObj) {
        console.log(`Object key: ${key} and Object value: ${someObj[key]}`);
    }
}

let obj1 = {
    name: 'Dom',
    age: 24
};

let obj2 = {
    material: "Steel", 
    price: 150,
    owned: true
};

let obj3 = {
    friendly: false, 
    family: 5,
    kids: 2
};

/**
 * Testing objectProperties function
 */
objectProperties(obj1);
objectProperties(obj2);
objectProperties(obj3);