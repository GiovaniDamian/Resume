import React from 'react';
import useAppData from '../../data/hook/useAppData';

interface CardWelcomeProps {
	title: string;
	enTitle: string
	content: any;
	enContent: any;
	isVisible: boolean;
}

export default function CardWelcome({ title, enTitle, content, enContent, isVisible }: CardWelcomeProps) {
	const { language } = useAppData()

	return (
		<div className={`bg-white shadow-md p-1 m-2 m-1 rounded-lg transition duration-300 text-xs rounded shadow-lg hover:shadow-gray-900 w-full 300:${'absolute top-80 left-0 w-full container overscroll-contain text-[0.6rem] text-black'} ${isVisible ? 'opacity-100 ' : 'opacity-0 hidden'}`}>
			{
				language == 'pt' ?
					<>
						<h2 className="text-xl font-bold mb-2">{title}</h2>
						{content}
					</> :
					<>
						<h2 className="text-xl font-bold mb-2">{enTitle}</h2>
						{enContent}
					</>
			}
		</div>
	);
}

