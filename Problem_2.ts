const removeDuplicates = (nums: number[]): number[] => {
    const numSet: Set<number> = new Set(nums);
    return Array.from(numSet);
};