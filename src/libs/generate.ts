import dayjs from 'dayjs';
import {customAlphabet} from 'nanoid';

export function randomInt(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomFloat(min = 20, max = 1000) {
    return Math.random() * (max - min) + min;
}

export function randomColor(): string {
    return `#${randomInt(0, 255).toString(16)}${randomInt(0, 255).toString(16)}${randomInt(0, 255).toString(16)}`;
}

// const randomLowercase = customAlphabet('abcdefghijklmnopqrstuvwxyz', 10);
export const randomUppercase = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 10);

export const randomDate = () => dayjs().subtract(randomInt(0, 90), 'd').toDate();
