type Circle = {
    shape: 'circle';
    radius: number;
};

type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
};

type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape): number => {
    if (shape.shape === 'rectangle') {
        return shape.width * shape.height;
    } else {
        return Math.PI * shape.radius * shape.radius;
    }
};