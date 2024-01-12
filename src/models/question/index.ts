import api from '../../services/api';

import {ISubjectResponse} from './index.d';

async function getBySubject(subject: string): Promise<ISubjectResponse | null> {
    try {
        const route = `/subjects/${subject}/questions`;
        const {data} = await api.get<ISubjectResponse>(route);

        return data;
    }
    
    catch (error) {
        console.warn('Context: get questions by subject');
        console.error(error);
        return null;
    }
}

export {
    getBySubject
};
