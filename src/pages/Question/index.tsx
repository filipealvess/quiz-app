import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import Card from '../../components/Card';
import { useEffect, useState } from 'react';
import { getBySubject as getQuestions } from '../../models/question';
import { SUBJECT_ICONS } from '../../constants/icons';
import spinnerIcon from '../../assets/icons/spinner.svg';
import { useStore } from '../../contexts/Store';

import { ISubject } from '../../models/subject/index.d';
import { IQuestion } from '../../models/question/index.d';

function Question() {
    const [hasErrors, setHasErrors] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [subject, setSubject] = useState<ISubject>();
    const [questions, setQuestions] = useState<IQuestion[]>([]);

    const { subject: subjectId } = useParams();

    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState('');
    const [score, setScore] = useState(0);
    const [progress, setProgress] = useState(100);
    const [timerId, setTimerId] = useState(0);
    const navigate = useNavigate();
    const {addSubject, store} = useStore();

    function getNextQuestion() {
        const finished = (current + 1) === questions.length;

        if (finished === true) {
            navigate(`/resultado/${subjectId}`);
            return;
        }

        setSelected('');
        setCurrent(prevState => prevState + 1);

        setProgress(100);
        startTimer();
    }

    function handleSend() {
        const isCorrect = questions[current]?.answer === selected;

        if (isCorrect === true) {
            sessionStorage.setItem('SCORE', String(score + 1));
            setScore(prevState => prevState + 1);
        }

        getNextQuestion();
    }

    function startTimer() {
        const timer = setInterval(() => {
            setProgress(prevState => prevState - 1);
        }, 100);

        setTimerId(prevState => {
            clearInterval(prevState);

            return timer;
        });
    }

    async function startGame() {
        setIsLoading(true);

        const response = await getQuestions(String(subjectId));

        setIsLoading(false);

        if (response === null) {
            setHasErrors(true);
            return;
        }

        const {questions: questionsData, ...subjectData} = response;

        setSubject(subjectData);
        setQuestions(questionsData);

        sessionStorage.setItem('SCORE', '0');
        sessionStorage.setItem('QUESTIONS', String(questionsData.length));

        startTimer();

        const storedData = store.subjectsById[String(subjectId)];

        if (storedData === undefined) {
            addSubject(subjectData.id, {
                ...subjectData,
                icon: SUBJECT_ICONS[subjectData.icon],
            });
        }
    }

    useEffect(() => {
        startGame();

        () => clearInterval(timerId);
    }, []);

    useEffect(() => {
        if (progress <= 0) {
            getNextQuestion();
        }
    }, [progress]);

    if (isLoading === true && hasErrors === false) {
        return (
            <div className={`page ${styles.container}`}>
                <div className={styles.feedback}>
                    <img src={spinnerIcon} />
                    <p>Carregando...</p>
                </div>
            </div>
        );
    }

    if (isLoading === false && hasErrors === true) {
        return (
            <div className={`page ${styles.container}`}>
                <div className={styles.feedback}>
                    <p>Ocorreu um erro ao carregar as perguntas</p>
                    <button onClick={() => navigate('/')}>
                        Voltar para o início
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={`page ${styles.container}`}>
            <header className={styles.header}>
                <article className={styles.subject}>
                    <div>
                        <img src={SUBJECT_ICONS[subject?.icon ?? '']} />
                    </div>

                    <p>
                        {subject?.name}
                    </p>
                </article>
            </header>

            <main className={styles.content}>
                <section className={styles.question}>
                    <p className={styles.counter}>
                        Pergunta {current + 1} de {questions.length}
                    </p>

                    <p className={styles.text}>
                        {questions[current]?.text}
                    </p>

                    <div className={styles.progress}>
                        <div style={{width: `${progress}%`}} />
                    </div>
                </section>

                <section className={styles.options}>
                    <Card
                        text={questions[current]?.options?.a}
                        iconFallback='A'
                        hidden={selected !== '' && selected !== 'a'}
                        onClick={() => setSelected('a')}
                    />

                    <Card
                        text={questions[current]?.options?.b}
                        iconFallback='B'
                        hidden={selected !== '' && selected !== 'b'}
                        onClick={() => setSelected('b')}
                    />

                    <Card
                        text={questions[current]?.options?.c}
                        iconFallback='C'
                        hidden={selected !== '' && selected !== 'c'}
                        onClick={() => setSelected('c')}
                    />

                    <Card
                        text={questions[current]?.options?.d}
                        iconFallback='D'
                        hidden={selected !== '' && selected !== 'd'}
                        onClick={() => setSelected('d')}
                    />

                    <button
                        className={styles.button}
                        disabled={selected === ''}
                        onClick={handleSend}
                    >
                        Enviar resposta
                    </button>
                </section>
            </main>
        </div>
    );
}

export default Question;
