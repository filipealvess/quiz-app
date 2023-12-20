import { QUESTIONS } from '../../constants/questions';

import { IQuestion } from '../../constants/questions.d';

/**
 * Get the questions of a subject
 *
 * @param id subject id
 *
 * @returns questions or null
 */
function list(id: string | number): IQuestion[] | null {
    return QUESTIONS[id];
}

export {
    list,
};
