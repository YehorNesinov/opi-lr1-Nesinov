// Функція для обчислення відстані між двома точками (x1, y1) та (x2, y2)
function getDistance(x1, y1, x2, y2) {
    // Формула: d = √((x2 - x1)² + (y2 - y1)²)
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    
    return distance;
}

// Приклад використання:
const pointA = { x: 0, y: 0 };
const pointB = { x: 3, y: 4 };

const result = getDistance(pointA.x, pointA.y, pointB.x, pointB.y);

console.log(`Відстань між точками: ${result}`); 
// Для точок (0,0) та (3,4) результат буде 5