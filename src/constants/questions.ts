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
        {
            answer: 'a',
            id: 4,
            options: {
                a: 'Retorna todas as chaves de um objeto',
                b: 'Retorna todos os valores de um objeto',
                c: 'Retorna um novo objeto vazio',
                d: 'Retorna a soma de todas as chaves em um objeto',
            },
            text: 'O que o método "Object.keys()" faz em JavaScript?',
        },
        {
            answer: 'd',
            id: 5,
            options: {
                a: 'HTML, Markdown e TypeScript',
                b: 'HTML, CSS e JavaScript',
                c: 'Markdown e Kotlin',
                d: 'XML, HTML e Markdown',
            },
            text: 'Quais dessas tecnologias são linguagens de marcação?',
        },
    ],
    biologia: [
        {
            answer: 'd',
            id: 1,
            options: {
                a: 'Pteridófitas',
                b: 'Gimnospermas',
                c: 'Angiospermas',
                d: 'Briófitas',
            },
            text: 'Quais plantas não possuem vasos condutores?',
        },
        {
            answer: 'b',
            id: 2,
            options: {
                a: 'não possui a envoltura nuclear',
                b: 'possui a envoltura nuclear ',
                c: 'possui ribossomos',
                d: 'está presente nas bactérias',
            },
            text: 'Podemos dizer que uma célula é eucarionte, pois...',
        },
        {
            answer: 'd',
            id: 3,
            options: {
                a: 'as características desenvolvidas por um ser vivo no decorrer de sua existência serão passadas para seus descendentes',
                b: 'o homem evoluiu do macaco',
                c: 'os seres vivos são imutáveis',
                d: 'os indivíduos mais adaptados irão sobreviver',
            },
            text: 'O evolucionista Charles Darwin defendia a ideia de que...',
        },
        {
            answer: 'c',
            id: 4,
            options: {
                a: 'Needham era um dos defensores dessa teoria',
                b: 'seres vivos surgem da matéria bruta',
                c: 'os seres vivos surgem de outros seres vivos',
                d: 'é conhecida como geração espontânea',
            },
            text: 'Sobre a biogênese, podemos afirmar que...',
        },
        {
            answer: 'a',
            id: 5,
            options: {
                a: 'uma espécie que vive à custa da outra podendo prejudicá-la, mas sem matá-la',
                b: 'a beneficiação entre duas espécies, sendo que uma não depende da outra para sobreviver',
                c: 'quando uma espécie mata a outra para se alimentar',
                d: 'a relação entre duas espécies, em que uma prejudica a outra',
            },
            text: 'Sobre as relações ecológicas, o parasitismo é...',
        },
    ],
    historia: [
        {
            answer: 'c',
            id: 1,
            options: {
                a: 'Inglaterra',
                b: 'Holanda',
                c: 'Brasil',
                d: 'Itália',
            },
            text: 'De onde é a invenção do chuveiro elétrico?',
        },
        {
            answer: 'c',
            id: 2,
            options: {
                a: 'Platão',
                b: 'Seu pai',
                c: 'Aristóteles',
                d: 'Tales de mileto',
            },
            text: 'Quem foi o mentor de Alexandre o Grande?',
        },
        {
            answer: 'a',
            id: 3,
            options: {
                a: 'A Revolução Francesa',
                b: 'A Primeira Guerra Mundial',
                c: 'A Revolução Americana',
                d: 'Guerra da Independência do Brasil',
            },
            text: 'Qual é considerado o marco inicial da Idade Contemporânea?',
        },
        {
            answer: 'd',
            id: 4,
            options: {
                a: 'Gizé',
                b: 'Miquerinos',
                c: 'Quéfren',
                d: 'Quéops',
            },
            text: 'Das três pirâmides do Egito, qual é a maior?',
        },
        {
            answer: 'b',
            id: 5,
            options: {
                a: '100 anos',
                b: '116 anos',
                c: '99 anos',
                d: '101 anos',
            },
            text: 'Quanto tempo durou a Guerra dos Cem Anos?',
        },
    ],
    matematica: [
        {
            answer: 'a',
            id: 1,
            options: {
                a: '86.400',
                b: '90.000',
                c: '60',
                d: '1000',
            },
            text: 'Quantos segundos há em um dia?',
        },
        {
            answer: 'c',
            id: 2,
            options: {
                a: 'R$ 301,00',
                b: 'R$ 779,00',
                c: '-R$ 301,00',
                d: '-R$ 260,00',
            },
            text: 'Seu João depositou R$ 239,00 em sua conta que estava com o saldo devedor de R$ 540,00. Com quanto ele ficou?',
        },
        {
            answer: 'c',
            id: 3,
            options: {
                a: '-15',
                b: '25',
                c: '-25',
                d: '15',
            },
            text: 'Uma comida congelada estava sendo mantida à temperatura de -20°C e sofreu uma variação de -5°C.A qual temperatura mínima essa comida chegou?',
        },
        {
            answer: 'a',
            id: 4,
            options: {
                a: '-83 e -85',
                b: '-83 e +85',
                c: '-85 e -83',
                d: '+85 e -83',
            },
            text: 'Qual o sucessor e o antecessor de -84?',
        },
        {
            answer: 'b',
            id: 5,
            options: {
                a: '4 faces',
                b: '6 faces',
                c: '8 faces',
                d: '10 faces',
            },
            text: 'Quantas faces tem um paralelepípedo?',
        },
    ],
};
