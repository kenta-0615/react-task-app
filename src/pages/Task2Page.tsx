import React from "react";

type Props = {
	message: string;
};

export const Task2Page: React.FC<Props> = (p) => {
	return (
		<div>
			<h1>{p.message}</h1>
		</div>
	);
};
