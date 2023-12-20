import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import styles from './styles.module.css';
import { getById } from '../../utils/subjects';
import { list } from '../../utils/questions';
import Card from '../../components/Card';

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
                        Pergunta 1 de 10
                    </p>

                    <p className={styles.text}>
                        Texto da pergunta
                    </p>
                </section>

                <section className={styles.options}>
                    <Card text='Opção 1' iconFallback='A' />
                    <Card text='Opção 2' iconFallback='B' />
                    <Card text='Opção 3' iconFallback='C' />
                    <Card text='Opção 4' iconFallback='D' />

                    <button className={styles.button}>
                        Enviar resposta
                    </button>
                </section>
            </main>
        </div>
    );
}

export default Question;
