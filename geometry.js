// Функція для обчислення об'єму циліндра
function getCylinderVolume(radius, height) {
    // Формула: V = π * r² * h
    const volume = Math.PI * Math.pow(radius, 2) * height;
    
    return volume;
}

// Приклад використання:
const r = 5;
const h = 10;
const volume = getCylinderVolume(r, h);

console.log(`Радіус: ${r}, Висота: ${h}`);
console.log(`Об'єм циліндра: ${volume.toFixed(2)}`);