/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = {};

for(let ch of magazine){
    map[ch] = (map[ch] || 0) + 1;
}

for(let ch of ransomNote){
    if(!map[ch]){
        return false;
    }

    map[ch]--;
}
return true;

};