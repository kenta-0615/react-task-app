import { memo } from "react"

export const PasswordReInput = memo(() => {
    return(
        <form>
            <label>
                RePass:
            </label>
            <input type="password" name="passwordReInput" />
        </form>
    );
});