import type { ISubject } from '../../models/subject/index.d';

export interface IProps {
    children: React.ReactNode;
}

export interface IStore {
    fetched: boolean;
    subjectsById: Record<string, ISubject>;
}

export interface IStoreContext {
    addSubject: (id: string, value: ISubject) => void;
    setFetched: () => void;
    store: IStore;
}
