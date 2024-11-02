import {Rule} from 'antd/es/form';

import {PasswordData} from '@/typings/common';

export const compareValidator: Rule = ({getFieldsValue}) => ({
    validator() {
        const {password, confirmPassword}: PasswordData = getFieldsValue(['password', 'confirm_password']);

        return new Promise((resolve, reject) => {
            if (confirmPassword && password !== confirmPassword) {
                reject(new Error('Пароли не совпадают'));
            } else {
                resolve('');
            }
        });
    },
});

export const passwordValidator: Rule = {
    validator(rule, value: string) {
        return new Promise((resolve, reject) => {
            if (value) {
                const regexp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
                if (regexp.test(value)) {
                    resolve('');
                } else {
                    reject(
                        new Error(
                            `Пароль должен содержать минимум 1 цифру, 1 спецсимвол (!@#$%^&*) и 1 букву латинского алфавита в верхнем и нижнем регистре`,
                        ),
                    );
                }
            } else {
                resolve('');
            }
        });
    },
};
