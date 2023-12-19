import Welcome from '../../components/HomePage/Welcome';
import styles from './styles.module.css';
import {SUBJECTS} from '../../constants/subjects';
import Card from '../../components/Card';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className={`page ${styles.container}`}>
            <main className={styles.content}>
                <Welcome />

                <section className={styles.subjects}>
                    {SUBJECTS.map(subject => (
                        <Card
                            text={subject.name}
                            iconSrc={subject.iconSrc}
                            key={subject.id}
                            onClick={() => navigate(`/${subject.id}`)}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}

export default Home;
