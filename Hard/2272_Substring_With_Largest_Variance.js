/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {

    let answer = 0;

    for (let major = 0; major < 26; major++) {

        for (let minor = 0; minor < 26; minor++) {

            if (major === minor) continue;

            // Forward pass
            let majorCount = 0;
            let minorCount = 0;
            let hasMinor = false;

            for (let i = 0; i < s.length; i++) {

                let current = s.charCodeAt(i) - 97;

                if (current === major) {
                    majorCount++;
                } 
                else if (current === minor) {
                    minorCount++;
                    hasMinor = true;
                }

                if (hasMinor) {
                    answer = Math.max(
                        answer,
                        majorCount - minorCount
                    );
                }

                if (minorCount > majorCount) {
                    majorCount = 0;
                    minorCount = 0;
                    hasMinor = false;
                }
            }

            // Reverse pass
            majorCount = 0;
            minorCount = 0;
            hasMinor = false;

            for (let i = s.length - 1; i >= 0; i--) {

                let current = s.charCodeAt(i) - 97;

                if (current === major) {
                    majorCount++;
                } 
                else if (current === minor) {
                    minorCount++;
                    hasMinor = true;
                }

                if (hasMinor) {
                    answer = Math.max(
                        answer,
                        majorCount - minorCount
                    );
                }

                if (minorCount > majorCount) {
                    majorCount = 0;
                    minorCount = 0;
                    hasMinor = false;
                }
            }
        }
    }

    return answer;
};