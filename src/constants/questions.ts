import {IQuestion} from './questions.d';

export const QUESTIONS: Record<string, IQuestion[]> = {
    programacao: [
        {
            answer: 'b',
            id: 1,
            options: {
                a: 'PHP',
                b: 'JavaScript',
                c: 'HTML',
                d: 'CSS',
            },
            text: 'Qual a única linguagem de programação que os navegadores interpretam?',
        },
        {
            answer: 'c',
            id: 2,
            options: {
                a: 'Não existe',
                b: '<titulo></titulo>',
                c: '<title></title>',
                d: '<page></page>',
            },
            text: 'Qual elemento HTML define o título da página?',
        },
        {
            answer: 'a',
            id: 3,
            options: {
                a: '<input type="checkbox" />',
                b: '<input type="select" />',
                c: '<checkbox />',
                d: 'Não existe',
            },
            text: 'Qual a maneira correta de criar uma caixa de seleção com HTML?',
        },
    ],
    biologia: [
        {
            answer: 'd',
            id: 2,
            options: {
                a: 'Pteridófitas',
                b: 'Gimnospermas',
                c: 'Angiospermas',
                d: 'Briófitas',
            },
            text: 'Quais plantas não possuem vasos condutores?',
        },
    ],
    historia: [
        {
            answer: 'c',
            id: 3,
            options: {
                a: 'Inglaterra',
                b: 'Holanda',
                c: 'Brasil',
                d: 'Itália',
            },
            text: 'De onde é a invenção do chuveiro elétrico?',
        },
    ],
    matematica: [
        {
            answer: 'a',
            id: 4,
            options: {
                a: '86.400',
                b: '90.000',
                c: '60',
                d: '1000',
            },
            text: 'Quantos segundos há em um dia?',
        },
    ],
};
