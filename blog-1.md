# The significance of union and intersection types in Typescript

Typescript is a powerful superset of JavaScript. It provides us strict type checking, which allows us to find type errors in compiling time. Typescript gives us some extra powerful features to define types with flexibility besides the common types of JavaScript. Union and intersection are such two features that allow us to define types with ease.

## Union Types

Union types are a combination of different types. Like numbers, strings, booleans, etc. In union types, we join multiple types together with '|', and the variable can be any of those types present in the union type.

```typescript
type CombinedType = string | number;

function combine(input1: CombinedType, input2: CombinedType) {
  if (typeof input1 === 'string' && typeof input2 === 'string') {
    return input1 + input2;
  } else {
    return input1 + input2;
  }
}

console.log(combine('Max', 'Master')); // Output: MaxMaster
console.log(combine(23, 33)); // Output: 56
```

In the above example, the CombinedType type can be either a string or a number. The combine function can take two values of this type and perform addition or concatenation based on their types.

## Intersection Types

Intersection types are another powerful feature to define complex types. Here, multiple types are joined with '&' and the variable must satisfy every type in the intersection.

```typescript
type Person = {
  name: string;
  age: number;
};

type Student = {
  id: string;
};

type PersonWhoIsStudent = Person & Student;

const newStudent: PersonWhoIsStudent = {
    name: "Shawon",
    age: 28,
    id: "170925"
}; 
```

Here, the PersonWhoIsStudent type combines the properties of both Person and Student. The newStudent object of type PersonWhoIsStudent must have all properties of the Person and Student types.

By understanding and effectively using union and intersection types, we can elevate our TypeScript skills and build more robust and type-safe applications.