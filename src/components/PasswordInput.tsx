import React from "react";

type Props = {
	password: string | number;
	confirmPassword: string | number;
	onChangePass: (event: any) => void;
	onChangeConfirm: (event: any) => void;
	errorMessage: string;
};

export const PasswordInput: React.FC<Props> = (p) => {
	return (
		<div>
			<form>
				<label>PASS:</label>
				<input
					type="password"
					name="password"
					value={p.password}
					onChange={p.onChangePass}
				/>
			</form>
			<form>
				<label>REPASS:</label>
				<input
					type="password"
					name="confirm"
					value={p.confirmPassword}
					onChange={p.onChangeConfirm}
				/>
				{p.errorMessage && <p>{p.errorMessage}</p>}
			</form>
		</div>
	);
};
