import styles from './styles.module.css';

import {IProps} from './index.d';

function Card({
    text,
    iconFallback,
    iconSrc,
    onClick
}: IProps) {
    return (
        <button onClick={onClick} className={styles.container}>
            <div className={styles.icon}>
                {iconSrc !== undefined && (
                    <img src={iconSrc} />
                )}

                {(iconSrc === undefined && iconFallback !== undefined) && (
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
