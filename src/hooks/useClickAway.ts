import {RefObject, useEffect, useRef} from 'react';
import Utils from '@/libs/Utils';

const defaultEvents = ['mousedown', 'touchstart'];

const useClickAway = <E extends Event = Event>(
    ref: RefObject<HTMLElement | null>,
    onClickAway: (event: E) => void,
    events: string[] = defaultEvents,
) => {
    const savedCallback = useRef(onClickAway);

    useEffect(() => {
        savedCallback.current = onClickAway;
    }, [onClickAway]);

    useEffect(() => {
        const handler = (event: E) => {
            const {current: el} = ref;
            // @ts-ignore
            el && !el.contains(event.target) && savedCallback.current(event);
        };
        for (const eventName of events) {
            Utils.on(document, eventName, handler);
        }
        return () => {
            for (const eventName of events) {
                Utils.off(document, eventName, handler);
            }
        };
    }, [events, ref]);
};

export default useClickAway;
