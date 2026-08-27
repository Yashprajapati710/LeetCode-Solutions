/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let mapST = new Map(); // s -> t
    let mapTS = new Map(); // t -> s

    for (let i = 0; i < s.length; i++) {
        let a = s[i];
        let b = t[i];

        // Check s -> t mapping
        if (mapST.has(a) && mapST.get(a) !== b) {
            return false;
        }

        // Check t -> s mapping
        if (mapTS.has(b) && mapTS.get(b) !== a) {
            return false;
        }

        // Create mappings
        mapST.set(a, b);
        mapTS.set(b, a);
    }

    return true;
};