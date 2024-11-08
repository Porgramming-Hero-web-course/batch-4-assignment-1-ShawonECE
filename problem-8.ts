const validateKeys = <T extends object>(obj: T, keys: string[]): boolean => {
    const objKeys = Object.keys(obj);
    for (const key of keys) {
        if (objKeys.indexOf(key) < 0) {
            return false;
        }
    }
    return true;
};