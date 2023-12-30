import { Navigate, useParams, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { getById } from '../../utils/subjects';

function Result() {
    const score = sessionStorage.getItem('SCORE');
    const total = sessionStorage.getItem('QUESTIONS');

    
    if (score === null || total === null) {
        return (
            <Navigate to='/' replace />
        );
    }

    const { subject: subjectId } = useParams();
    const subject = getById(subjectId as string);
    
    if (subject === null) {
        return (
            <Navigate to='/' replace />
        );
    }

    const navigate = useNavigate();

    function retry() {
        sessionStorage.clear();
        navigate('/');
    }

    return (
        <div className={`page ${styles.container}`}>
            <header className={styles.header}>
                <article className={styles.subject}>
                    <div>
                        <img src={subject.iconSrc} />
                    </div>

                    <p>{subject.name}</p>
                </article>
            </header>

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
