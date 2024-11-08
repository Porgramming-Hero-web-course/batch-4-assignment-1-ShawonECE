const getProperty = <T>(object: T, property: keyof T): T[keyof T] => {
    return object[property];
};