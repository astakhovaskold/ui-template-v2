// eslint-disable-next-line import/named
import {ConfigProviderProps} from 'antd/es/config-provider';

type ValidateMessages = Required<Required<ConfigProviderProps>['form']>['validateMessages'];

const validateMessages: ValidateMessages = {
    required: 'Обязательное поле',
    whitespace: 'Пробелы недопустимы',

    string: {
        min: "'${label}' не менее ${min} символов",
        max: "'${label}' не более ${max} символов",
        range: "'${label}' от ${min} до ${max} символов",
        len: "'${label}' состоит из ${len} символов",
    },

    number: {
        min: "Значение '${label}' не менее ${min}",
        max: "Значение '${label}' не более ${max}",
        range: "Значение '${label}' от ${min} до ${max}",
    },

    types: {
        string: "Поле '${label}' должно быть строкой",
        number: "Поле '${label}' должно быть числом",
        email: "Поле '${label}' должно быть в формате электронной почты",
        url: "Поле '${label}' должно быть в формате URL",
        array: "Поле '${label}' должно быть перечислением",
    },
};

export default validateMessages;
