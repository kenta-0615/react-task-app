import * as React from "react";

type Props = {
	name: string;
	onChange: (event) => void;
	errorMessage?: string;
};

export const TextName: React.FC<Props> = (p) => {
	return (
		<div>
			<form action="/name" method="post">
				<label>
					Name:
					<input
						type="text"
						name="name"
						placeholder="Enter your name"
						value={p.name}
						onChange={p.onChange}
					/>
					{p.errorMessage && <p>{p.errorMessage}</p>}
				</label>
			</form>
		</div>
	);
};
