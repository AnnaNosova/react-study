import { Button } from '../button/button';
import { useAuthorization } from '../auth-context/hooks';
import styles from '../header/header.module.sass';

export const UserSection = () => {

    const {
        auth: { isAuthorized, userName },
        login,
        logout,
    } = useAuthorization();

    return (
        <div>
            {isAuthorized && userName && <span className={styles.greeting}>Hello, {userName}</span>}
            <Button
                text={isAuthorized ? 'Log out' : 'Log in'}
                onClick={isAuthorized ? logout : login}
            />
        </div>
    );
};