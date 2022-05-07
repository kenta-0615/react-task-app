import React from "react";

type Props = {
	email: string;
	onChange: (event) => void;
	errorMessage?: string;
};

export const EmailAddressInput: React.FC<Props> = (p) => {
	return (
		<div>
			<label>Email:</label>
			<input
				type="email"
				required
				value={p.email}
				onChange={p.onChange}
				onClick={() => {}}
			/>
			{p.errorMessage && <p>{p.errorMessage}</p>}
		</div>
	);
};
