import React from "react";

type Props = {
	submitName: string;
	onClick: (event: any) => void;
	disabled: boolean;
};

export const SubmitButton: React.FC<Props> = (p) => {
	return (
		<div>
			<button type="submit" onClick={p.onClick} disabled={p.disabled}>
				{p.submitName}
			</button>
		</div>
	);
};
