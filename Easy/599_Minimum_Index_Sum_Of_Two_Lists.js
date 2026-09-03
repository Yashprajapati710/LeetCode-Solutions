/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let map = new Map();

    for (let i = 0; i < list1.length; i++) {

        map.set(list1[i], i);
    }

    let result = [];
    let minSum = Infinity;

    for (let j = 0; j < list2.length; j++) {
        let restaurant = list2[j];

        if (map.has(restaurant)) {
            let sum = map.get(restaurant) + j;

            if (sum < minSum) {
                minSum = sum;
                result = [restaurant];
            } else if (sum === minSum) {
                result.push(restaurant);
            }
        }
    }
    return result;

};