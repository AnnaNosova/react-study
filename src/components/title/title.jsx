import styles from "./title.module.sass"

export const Title = ({ title }) => {
    return (
        <div className={styles["page-title"]}>
            <h1>{title}</h1>
        </div>
    );
};