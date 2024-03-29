import styles from './styles.module.css';

import {IProps} from './index.d';

function Card({
    text,
    iconFallback,
    icon,
    onClick,
    hidden,
}: IProps) {
    const classes = hidden === true
        ? `${styles.container} ${styles.hidden}`
        : styles.container;

    return (
        <button onClick={onClick} className={classes}>
            <div className={styles.icon}>
                {icon !== undefined && (
                    <img src={icon} />
                )}

                {(icon === undefined && iconFallback !== undefined) && (
                    <span className={styles.fallback}>
                        {iconFallback}
                    </span>
                )}
            </div>

            <span className={styles.text}>
                {text}
            </span>
        </button>
    );
}

export default Card;
