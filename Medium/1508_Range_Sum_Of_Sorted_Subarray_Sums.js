var rangeSum = function (nums, n, left, right) {
    let sums = [];

    for (let i = 0; i < n; i++) {
        let sum = 0;

        for (let j = i; j < n; j++) {
            sum += nums[j];
            sums.push(sum);
        }
    }


    sums.sort((a, b) => a - b);

    const MOD = 1000000007;
    let answer = 0;

    for (let i = left - 1; i < right; i++) {
        answer += sums[i];
        answer %= MOD;
    }

    return answer;
};