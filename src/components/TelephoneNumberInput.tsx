import React from "react";

type Props = {
	onChange: (event: any) => void;
	value: number | string;
	errorMessage?: string;
};

export const TelephoneNumberInput: React.FC<Props> = (p) => {
	return (
		<form>
			<label>Number:</label>
			<input
				name="telephoneNumber"
				type="tel"
				onChange={p.onChange}
				value={p.value}
			/>
			{p.errorMessage && <p>{p.errorMessage}</p>}
		</form>
	);
};
