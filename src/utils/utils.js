/**
 * This is intended to create a list of maps which map a specified key in the object to the object itself. 
 * The reasoning behind this is to create fast lookup
 * @param {*} list 
 * @param {*} key 
 */ 
async function inflate(list, key) {
    return list.reduce(function(map, obj) {
            map[obj[key]] = obj;
            return map;
        }, {});        
};

export { inflate };