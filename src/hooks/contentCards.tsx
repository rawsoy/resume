import { getHTMLBullet } from '../tools/html';
import { ContentCardData } from '../types/content';

export const useEducationCards = (): ContentCardData[] => {
	const cards: ContentCardData[] = [
		{
			iconPath: '/assets/umd.png',
			jobs: [
				{
					title: `B.S Computer Science ${getHTMLBullet()} Focus in Data Science`,
				},
			],
			duration: 'Graduated Dec 2019',
		},
	];

	return cards;
};

export const useExperienceCards = (): ContentCardData[] => {
	const cards: ContentCardData[] = [
		{
			iconPath: '/assets/mdi.png',
			duration: 'Nov 2020 - Present',
			jobs: [
				{
					title: 'Head of Front End Development',
					bullets: [
						'Aided the Product and UI teams in designing a streamlined design library.',
						'Refactored the Front End, adding custom hooks, fully typed components, Zod, React Query and more.',
						'Managed a reusable component library that was accessible and easy for our backend focused developers to use.',
					],
				},
				{
					title: 'Full Stack Team Lead',
					bullets: [
						'Led a team of three full stack developers and managed the QA department.',
						'Managed the daily workflow of the team to ensure timely delivery of features.',
						'Worked with the team to make the product more scaleable, optimize performance and improve code quality, reducing algorithm time from thirty seconds to less than five.',
						"Improved my team's skills through code reviews, pair programming and mentorship.",
					],
				},
				{
					title: 'Full Stack Developer',
					bullets: [
						'Developed two full stack applications from scratch, both front and back ends. Built with ReactJS, NodeJS, Express, PostgreSQL, AWS.',
						'Worked directly with the UX team to design and implement a custom user experience.',
						'Split a complex backend into individual servers and services', // THIS NEEDS WORK
					],
				},
			],
		},
		{
			iconPath: '/assets/hillel.png',
			jobs: [
				{
					title: 'Freelance Full Stack Developer',
					bullets: [
						'Developed POS system to manage students meal plans at the University of Maryland Hillel.',
						'Built with ReactJS and Firebase.',
					],
				},
			],
			duration: 'July 2020 - Present',
		},
		{
			iconPath: '/assets/leapfrog.png',
			jobs: [
				{
					title: `Intern ${getHTMLBullet()} Developer`,
					bullets: [
						'Implemented Chrome extension with JS/JQuery to automatically compar client and company task assignments and present tasks in a concise, user-friendly manner.',
						'Scripted with Bash and Python to migrate company’s services to Atlassian cloud.',
					],
				},
			],
			duration: 'Sep 2019 - April 2020',
		},
		{
			iconPath: '/assets/insights.png',
			jobs: [
				{
					title: 'QA Automations Intern',
					bullets: [
						'Created automated solution for quality assurance using Selenium and Python to fully replace manual quality checks, saving hours of time.',
					],
				},
			],
			duration: 'Dec 2017 - Feb 2018',
		},
	];

	return cards;
};

export const useProjectsCards = (): ContentCardData[] => {
	const cards: ContentCardData[] = [
		{
			iconPath: '/assets/scheduler.png',
			duration: 'Available Soon',
			jobs: [
				{
					bullets: [
						'Optimized scheduling for summer programs using Gale Shapley algorithm.',
						'Built for web with ReactJS, MySQL and NodeJS. Previously with Express, Handlebars and JS/JQuery',
					],
				},
			],
		},
		{
			iconPath: '/assets/calendar.png',
			duration: 'Shared on Github',
			jobs: [
				{
					bullets: [
						'Developed cross platform desktop application using Electron, NodeJS and Google Calendar API.',
						'Deployed on a Raspberry Pi.',
					],
				},
			],
		},
	];

	return cards;
};

export const useSkills = () => {
	const skills = [
		'ReactJS',
		'NodeJS',
		'TypeScript',
		'NoSQL',
		'SQL',
		'Electron',
		'AWS',
		'Selenium',
		'Data Science',
	];

	return skills;
};
