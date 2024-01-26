import {createContext, useContext, useState} from 'react';

import type {IProps, IStore, IStoreContext} from './index.d';
import type { ISubject } from '../../models/subject/index.d';

const INITIAL_STORE: IStore = {
    fetched: false,
    subjectsById: {},
};

export const StoreContext = createContext({} as IStoreContext);

export default function StoreProvider({children}: IProps): JSX.Element {
    const [store, setStore] = useState(INITIAL_STORE);

    function addSubject(id: string, value: ISubject) {
        setStore(prevState => ({
            ...prevState,
            subjectsById: {
                ...prevState.subjectsById,
                [id]: value,
            },
        }));
    }

    function setFetched() {
        setStore(prevState => ({
            ...prevState,
            fetched: true,
        }));
    }

    return (
        <StoreContext.Provider value={{
            addSubject,
            setFetched,
            store,
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export function useStore() {
    const context = useContext(StoreContext);

    if (context === undefined) {
        throw new Error('useStore must be used within a StoreContext');
    }

    return context;
}
