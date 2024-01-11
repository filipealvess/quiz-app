import api from '../../services/api';
import code from '../../assets/icons/code.svg';
import biology from '../../assets/icons/biology.svg';
import history from '../../assets/icons/history.svg';
import math from '../../assets/icons/math.svg';

import {ISubject} from './index.d';
import {ISubjectResponse} from './index.d';

const ICONS_SOURCE: Record<string, string> = {
    code,
    biology,
    history,
    math,
};

async function getAll(): Promise<ISubject[] | null> {
    await new Promise((res) => {
        setTimeout(() => {
            res('');
        }, 1000);
    });

    try {
        const {data} = await api.get<ISubjectResponse[]>('/subjects');

        return data.map(subject => ({
            iconSrc: ICONS_SOURCE[subject.icon],
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

export {
    getAll
};