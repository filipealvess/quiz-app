import styles from './styles.module.css';
import arrowRight from '../../../assets/icons/arrow-right.svg';

function Welcome() {
    return (
        <section>
            <header className={styles.header}>
                <p>
                    Bem-vindo(a) ao
                </p>

                <strong>
                    Quiz App!
                </strong>
            </header>

            <p className={styles.description}>
                <span>
                    Escolha um assunto para começar
                </span>

                <img src={arrowRight} alt="Seta para a direita" />
            </p>
        </section>
    );
}

export default Welcome;
