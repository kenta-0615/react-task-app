import React from "react";

type Props = {
	changeTel: (event: any) => void;
	telephoneNumber: number | string;
	telephoneNumberErrorMessage?: string;
};

export const TelephoneNumberInput: React.FC<Props> = (p) => {
	return (
		<form>
			<label>Number:</label>
			<input
				name="telephoneNumber"
				type="tel"
				onChange={p.changeTel}
				value={p.telephoneNumber}
			/>
			{p.telephoneNumberErrorMessage && <p>{p.telephoneNumberErrorMessage}</p>}
		</form>
	);
};
