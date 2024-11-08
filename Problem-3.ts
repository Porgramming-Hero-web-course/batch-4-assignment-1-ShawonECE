const countWordOccurrences = (sentence: string, word: string): number => {
    const words = sentence.split(" ");
    let count = 0;
    for (const splitWord of words) {
        if (word.toLowerCase() === splitWord.toLowerCase()) {
            count++;
        }
    }

    return count;
};