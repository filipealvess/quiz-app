import Welcome from '../../components/HomePage/Welcome';
import styles from './styles.module.css';
import Card from '../../components/Card';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import spinnerIcon from '../../assets/icons/spinner.svg';
import { getAll } from '../../models/subject';

import { ISubject } from '../../constants/subjects.d';

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [hasLoadError, setHasLoadError] = useState(false);
    const [subjects, setSubjects] = useState<ISubject[]>([]);
    const navigate = useNavigate();

    async function fetchSubjects() {
        setHasLoadError(false);
        setIsLoading(true);

        const data = await getAll();

        if (data !== null) {
            setSubjects(data);
        }

        else {
            setHasLoadError(true);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        fetchSubjects();
    }, []);

    return (
        <div className={`page ${styles.container}`}>
            <main className={styles.content}>
                <Welcome />

                <section className={styles.subjects}>
                    {(hasLoadError === false && isLoading === true) && (
                        <div className={styles.feedback}>
                            <img src={spinnerIcon} />
                            <p>Carregando...</p>
                        </div>
                    )}

                    {(hasLoadError === true && isLoading === false) && (
                        <div className={styles.feedback}>
                            <p>Ocorreu um erro ao carregar os assuntos</p>
                            <button onClick={fetchSubjects}>
                                Tentar novamente
                            </button>
                        </div>
                    )}

                    {((hasLoadError === false && isLoading === false)) && (
                        subjects.map(subject => (
                            <Card
                                text={subject.name}
                                iconSrc={subject.iconSrc}
                                key={subject.id}
                                onClick={() => navigate(`/${subject.id}`)}
                            />
                        ))
                    )}
                </section>
            </main>
        </div>
    );
}

export default Home;
