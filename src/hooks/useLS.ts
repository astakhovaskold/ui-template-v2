import {useEffect, useRef, useState, useMemo} from 'react';

function useLS<T>(defaultName: string, fn: (data?: T) => void): [T | undefined] {
    const name = useMemo(() => {
        return `${__UNIQUE_STATE__}_${defaultName}`;
    }, [defaultName]);

    const [storage, setStorage] = useState<T | undefined>(() => {
        try {
            const data = localStorage.getItem(name);
            return data ? (JSON.parse(data) as T) : undefined;
        } catch (e) {
            // noop
        }

        return undefined;
    });

    const callback = useRef(fn);

    useEffect(() => {
        callback.current = fn;
    });

    useEffect(() => {
        const handler = ({key, newValue}: StorageEvent) => {
            if (key === name) {
                if (newValue) {
                    try {
                        const data = JSON.parse(newValue) as T;
                        setStorage(data);
                        if (typeof callback.current === 'function') callback.current(data);
                    } catch (e) {
                        // noop
                    }
                } else {
                    setStorage(undefined);
                    if (typeof callback.current === 'function') callback.current(undefined);
                }
            }
        };

        window.addEventListener('storage', handler);

        return () => window.removeEventListener('storage', handler);
    }, [name]);

    return [storage];
}

export default useLS;
