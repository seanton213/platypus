export const inflate = (list, key) => {
    return list.reduce(function(map, obj) {
            map[obj[key]] = obj;
            return map;
        }, {});        
}