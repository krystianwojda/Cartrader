import cars from '@/data/cars.json';
export default defineEventHandler((event) => {
    return cars;
});