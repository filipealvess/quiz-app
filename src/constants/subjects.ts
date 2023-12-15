import code from '../assets/icons/code.svg';
import biology from '../assets/icons/biology.svg';
import history from '../assets/icons/history.svg';
import math from '../assets/icons/math.svg';

import {ISubject} from './subjects.d';

export const SUBJECTS: ISubject[] = [
    {
        id: 'programacao',
        name: 'Programação',
        iconSrc: code,
    },
    {
        id: 'biologia',
        name: 'Biologia',
        iconSrc: biology,
    },
    {
        id: 'historia',
        name: 'História',
        iconSrc: history,
    },
    {
        id: 'matematica',
        name: 'Matemática',
        iconSrc: math,
    },
];
