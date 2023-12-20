export interface IQuestion {
    id: string | number;
    text: string;
    options: IOptions;
    answer: 'a' | 'b' | 'c' | 'd';
}

export interface IOptions {
    a: string;
    b: string;
    c: string;
    d: string;
}
