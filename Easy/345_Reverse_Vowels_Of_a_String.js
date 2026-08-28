/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let chars = s.split("");

    let left = 0;
    let right = chars.length - 1;

    let vowels = "aeiouAEIOU";

    while (left < right) {

        // Find vowel from left
        while (left < right && !vowels.includes(chars[left])) {
            left++;
        }

        // Find vowel from right
        while (left < right && !vowels.includes(chars[right])) {
            right--;
        }

        // Swap vowels
        let temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;

        left++;
        right--;
    }

    return chars.join("");
};