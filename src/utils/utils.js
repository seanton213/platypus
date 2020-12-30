/**
 * This is intended to create a list of maps which map a specified key in the object to the object itself. 
 * The reasoning behind this is to create fast lookup
 * @param {*} list 
 * @param {*} key 
 */
const inflate = (list, key) => {
    return list.reduce(function(map, obj) {
            map[obj[key]] = obj;
            return map;
        }, {});        
};

/**
 * This function will take the keys of a Map and create a Set
 * It will return an error if we cannot create a Set
 * @param {*} map 
 */
const keysToSet = (map) => {
    let mySet = new Set();
    const keys = map.keys();

    let key;
    for(key in keys) {
        if (mySet.has(key)) {
            throw new Error("Key Set is not unique!");
        }
        mySet.add(key);
    }

    return mySet;
};

export { inflate, keysToSet };