import { Button } from "../button/button";
import { useAuthorization } from "../auth-context/auth-context";
import styles from "../header/header.module.sass";

export const AuthButton = () => {

    const { value, toggleAuth } = useAuthorization();

    return (
        <div>
            { value === "loggedOut" ? (
                <Button
                    text={"Log in"}
                    onClick={toggleAuth}
                />
            ) : (
                <div>
                    <span className={styles.greeting}>Hello, UserName</span>
                    <Button
                        text={"Log out"}
                        onClick={toggleAuth}
                    />
                </div>
            )}
        </div>
    );
};