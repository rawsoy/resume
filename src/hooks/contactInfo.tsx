import { ContactInfo } from '../types/contact';

export const useContactCards = (): ContactInfo[] => {
	const cards = [
		{
			icon: <img src='/assets/email.png' />,
			text: 'yrawson96@gmail.com',
			link: 'mailto:yrawson96@gmail.com',
		},
		{ icon: <img src='/assets/github.png' />, text: 'rawsoy', link: 'http://www.github.com/rawsoy' },
		{ icon: <img src='/assets/linkedin.png' />, text: '@yonirawson', link: 'http://www.linkedin.com/in/yrawson' },
		{ icon: <img src='/assets/phone.png' />, link: 'tel:053 847 0041', text: '(053) 847-0041' },
	];

	return cards;
};
