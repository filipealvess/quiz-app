import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import styles from './styles.module.css';
import { getById } from '../../utils/subjects';
import { list } from '../../utils/questions';
import Card from '../../components/Card';
import { useEffect, useState } from 'react';

function Question() {
    const { subject: subjectId } = useParams();
    const subject = getById(subjectId as string);

    if (subject === null) {
        return (
            <Navigate to='/' replace />
        );
    }

    const questions = list(subjectId as string);

    // TODO: show a feedback message and allow retry
    if (questions === null || questions?.length === 0) {
        return (
            <Navigate to='/' replace />
        );
    }

    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState('');
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    function getNextQuestion() {
        const finished = (current + 1) === questions!.length;

        if (finished === true) {
            navigate(`/resultado/${subjectId}`);
            return;
        }

        setSelected('');
        setCurrent(prevState => prevState + 1);
    }

    function handleSend() {
        const isCorrect = questions![current].answer === selected;

        if (isCorrect === true) {
            sessionStorage.setItem('SCORE', String(score + 1));
            setScore(prevState => prevState + 1);
        }

        getNextQuestion();
    }

    useEffect(() => {
        sessionStorage.setItem('SCORE', '0');
        sessionStorage.setItem('QUESTIONS', String(questions!.length));
    }, []);

    return (
        <div className={`page ${styles.container}`}>
            <header className={styles.header}>
                <article className={styles.subject}>
                    <div>
                        <img src={subject.iconSrc} />
                    </div>

                    <p>
                        {subject.name}
                    </p>
                </article>
            </header>

            <main className={styles.content}>
                <section className={styles.question}>
                    <p className={styles.counter}>
                        Pergunta {current + 1} de {questions.length}
                    </p>

                    <p className={styles.text}>
                        {questions[current].text}
                    </p>
                </section>

                <section className={styles.options}>
                    <Card
                        text={questions[current].options.a}
                        iconFallback='A'
                        hidden={selected !== '' && selected !== 'a'}
                        onClick={() => setSelected('a')}
                    />

                    <Card
                        text={questions[current].options.b}
                        iconFallback='B'
                        hidden={selected !== '' && selected !== 'b'}
                        onClick={() => setSelected('b')}
                    />

                    <Card
                        text={questions[current].options.c}
                        iconFallback='C'
                        hidden={selected !== '' && selected !== 'c'}
                        onClick={() => setSelected('c')}
                    />

                    <Card
                        text={questions[current].options.d}
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
