import {RefObject, useEffect, useRef} from 'react';

import Utils from '@/libs/Utils';

const defaultEvents = ['mousedown', 'touchstart'];

const useClickAway = <E extends Event = Event>(
    ref: RefObject<HTMLElement | null>,
    onClickAway: (event: E) => void,
    events: Array<string> = defaultEvents,
    timeout = 0,
) => {
    const savedCallback = useRef(onClickAway);

    useEffect(() => {
        savedCallback.current = onClickAway;
    }, [onClickAway]);

    useEffect(() => {
        const handler = (event: E) => {
            const {current: el} = ref;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            el && !el.contains(event.target) && savedCallback.current(event);
        };
        for (const eventName of events) {
            setTimeout(() => Utils.on(document, eventName, handler), timeout);
        }
        return () => {
            for (const eventName of events) {
                setTimeout(() => Utils.off(document, eventName, handler), timeout);
            }
        };
    }, [events, ref, timeout]);
};

export default useClickAway;
