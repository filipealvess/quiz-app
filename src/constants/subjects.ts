import code from '../assets/icons/code.svg';
import biology from '../assets/icons/biology.svg';
import history from '../assets/icons/history.svg';
import math from '../assets/icons/math.svg';

import {ISubject} from './subjects.d';

export const SUBJECTS: ISubject[] = [
    {
        id: 'programacao',
        name: 'Programação',
        icon: code,
    },
    {
        id: 'biologia',
        name: 'Biologia',
        icon: biology,
    },
    {
        id: 'historia',
        name: 'História',
        icon: history,
    },
    {
        id: 'matematica',
        name: 'Matemática',
        icon: math,
    },
];
