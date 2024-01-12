import { Navigate, useParams, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { getById } from '../../models/subject';
import { useEffect, useState } from 'react';

import { ISubject } from '../../models/subject/index.d';

function Result() {
    const [subject, setSubject] = useState<ISubject>();

    const { subject: subjectId } = useParams();

    const navigate = useNavigate();

    const score = sessionStorage.getItem('SCORE');
    const total = sessionStorage.getItem('QUESTIONS');

    if (score === null || total === null) {
        return (
            <Navigate to='/' replace />
        );
    }

    async function loadSubject() {
        const response = await getById(String(subjectId));

        if (response !== null) {
            setSubject(response);
        }
    }

    function retry() {
        sessionStorage.clear();
        navigate('/');
    }

    useEffect(() => {
        loadSubject();
    }, []);

    return (
        <div className={`page ${styles.container}`}>
            {subject?.id !== undefined && (
                <header className={styles.header}>
                    <article className={styles.subject}>
                        <div>
                            <img src={subject?.icon} />
                        </div>

                        <p>{subject?.name}</p>
                    </article>
                </header>
            )}

            <main className={styles.content}>
                <section className={styles.feedback}>
                    <p>Acabou...</p>
                    <strong>E este é o seu resultado:</strong>
                </section>

                <section className={styles.result}>
                    <p>
                        {score}
                        <span>{Number(score) !== 1 ? 'acertos' : 'acerto'}</span>
                    </p>

                    <span>
                        de <strong>{total} </strong>
                        {Number(total) !== 1 ? 'perguntas' : 'pergunta'}
                    </span>
                </section>

                <button className={styles.button} onClick={retry}>
                    Jogar novamente
                </button>
            </main>
        </div>
    );
}

export default Result;
