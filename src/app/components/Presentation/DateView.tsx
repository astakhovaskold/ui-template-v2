import {Typography} from 'antd';
import dayjs, {Dayjs} from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {memo, useMemo} from 'react';

import {INVALID_DATE, NO_DATA_SHORT} from '@/libs/text';
import {CommonDate} from '@/typings/common';

export type valueDateView = CommonDate;

export interface DateViewProps {
    date: valueDateView | null;
    parse?: string;
    format?: string;
    fromNow?: boolean;
}

dayjs.extend(relativeTime);

export const BASE_FORMAT = 'DD/MMM/YYYY';

export function toDayjs(date: valueDateView, parse?: string): Dayjs | null {
    if (typeof date === 'string') return dayjs(date, parse);

    if (dayjs.isDayjs(date)) return date;

    if (date instanceof Date) return dayjs(date);

    return null;
}

const {Text} = Typography;

const DateView = memo<DateViewProps>(({date, parse, format = BASE_FORMAT, fromNow = false}) => {
    const d = useMemo(() => (date ? toDayjs(date, parse) : null), [date, parse]);

    const isValid = useMemo(() => d?.isValid() ?? true, [d]);

    const res = useMemo<string>(() => {
        return d && isValid ? d.format(format) : NO_DATA_SHORT;
    }, [isValid, d, format]);

    const fromNowText = useMemo<string | null>(() => {
        return fromNow && d && isValid ? d.fromNow() : null;
    }, [isValid, d, fromNow]);

    if (!isValid)
        return (
            <Text type="danger">
                <span role="img" aria-label="Bad date">
                    ⚠️
                </span>
                &nbsp;
                {INVALID_DATE}
            </Text>
        );

    return (
        <>
            {res}
            &nbsp;
            {fromNowText ? <Text type="secondary">({fromNowText})</Text> : null}
        </>
    );
});

export default DateView;
