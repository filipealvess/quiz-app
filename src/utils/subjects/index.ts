import { SUBJECTS } from '../../constants/subjects';

import { ISubject } from '../../constants/subjects.d';

/**
 * Get the subject data
 *
 * @param id subject id
 *
 * @returns subject data or null
 */
function getById(id: string | number): ISubject | null {
    const subject = SUBJECTS.find(subject => subject.id === id);

    return subject ?? null;
}

export {
    getById,
};
