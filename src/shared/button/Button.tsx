import React from 'react';

import "./Button.scss";

interface Props {
	handleAction?: () => void;
	name: string;
	disabled?: boolean;
	title: string;
}

export const Button = (props: Props) => {
	const { name, disabled = false, handleAction, title } = props;
	return (
		<button className='button' name={name} disabled={disabled} onClick={handleAction}>{title}</button>
	)
}
