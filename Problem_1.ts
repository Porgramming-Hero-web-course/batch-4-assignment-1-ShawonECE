const sumArray = (nums: number[]): number => {
    const sum = nums.reduce((a, b) => a + b, 0);
    return sum;
};