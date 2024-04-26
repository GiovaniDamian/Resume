import React from 'react';

interface ButtonWelcomeProps {
	onClick: () => void;
	label: string;
	isActive: boolean;
}

export default function ButtonWelcome({ onClick, label, isActive }: ButtonWelcomeProps) {
	return (
		<div className={`border-button bg-gradient-to-b from-mainGrayBlue to-mainBlue ${isActive ? "opacity-25 lg:opacity-85" : "opacity-90"}`}>
			<button className={`hex-button relative text-303841 h-24 w-32 text-base px-6 py-2 cursor-pointer outline-none transition-all duration-300 ease-in clip-path-polygon hover:bg-gradient-to-b from-mainGrayBlue to-mainBlue hover:text-white hover:transform-scale-105 ${isActive ? 'bg-mainBlue' : 'bg-white'}`} onClick={onClick}>
				<span>{label}</span>
			</button>
		</div>

	);
}

