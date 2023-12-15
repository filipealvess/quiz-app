import Welcome from '../../components/HomePage/Welcome';
import styles from './styles.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.content}>
                <Welcome />
            </main>
        </div>
    );
}

export default Home;
