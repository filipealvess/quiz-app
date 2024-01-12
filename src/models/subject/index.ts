import api from '../../services/api';
import { SUBJECT_ICONS } from '../../constants/icons';

import {ISubject} from './index.d';

async function getAll(): Promise<ISubject[] | null> {
    try {
        const {data} = await api.get<ISubject[]>('/subjects');

        return data.map(subject => ({
            icon: SUBJECT_ICONS[subject.icon],
            id: subject.id,
            name: subject.name,
        }));
    }
    
    catch (error) {
        console.warn('Context: get all subjects');
        console.error(error);
        return null;
    }
}

async function getById(id: string): Promise<ISubject | null> {
    try {
        const {data} = await api.get<ISubject>(`/subjects/${id}`);

        return {
            icon: SUBJECT_ICONS[data.icon],
            id: data.id,
            name: data.name,
        };
    }
    
    catch (error) {
        console.warn('Context: get subject by id');
        console.error(error);
        return null;
    }
}

export {
    getAll,
    getById,
};
