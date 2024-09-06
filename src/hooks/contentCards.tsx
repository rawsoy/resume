import { ContentCardData } from '../types/content';

export const useEducationCards = (): ContentCardData[] => {
	const cards: ContentCardData[] = [
		{
			iconPath: '/assets/umd.png',
			jobs: [{ title: 'B.S Computer Science, Focus in Data Science' }],
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
						'Led a team of full stack developers and QA.',
						'Managed the daily workflow of the team to ensure timely delivery of features.',
						'Developed two full stack applications from scratch, along with maintaining and seperating a complex backend into multiple services.',
						'Aided the Product and UI teams in designing and implementing an optimized user experience.',
						'Built with ReactJS, NodeJS, Express, PostgreSQL, AWS.',
					],
				},
				{
					title: 'Full Stack Team Lead',
					bullets: ['hey there esti'],
				},
				{
					title: 'Full Stack Developer',
					bullets: ['its me yoni'],
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
						'Creating a site for students to host, plan and attend pot luck meals on campus.',
						'Built with ReactJS and Firebase',
					],
				},
			],
			duration: 'July 2020 - Present',
		},
		{
			iconPath: '/assets/leapfrog.png',
			jobs: [
				{
					title: 'Intern, Developer',
					bullets: [
						'Implemented Chrome extension with JS/JQuery that automatically compared client and company task assignments and presented tasks in a concise and user-friendly manner for quick review.',
						"Extension utilized weekly to prepare for the next week's sprint.",
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
						'Created automated solution for quality assurance using Selenium and Python to click through the company’s website, comment on threads and manage workflow. Unit tests run checks in the background while also allowing a QA member to watch the visual elements of the website.',
						'Successfully replaced manual daily checks of the company’s site, saving hours of time.',
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
						'Built for web with ReactJS, MySQL and NodeJS.',
						'Version 1 built with Express, Handlebars and JS/JQuery.',
					],
				},
			],
		},
		{
			iconPath: '/assets/calendar.png',
			duration: 'Shared on Github',
			jobs: [{ bullets: ['Developed cross platform desktop application using Electron, NodeJS and Google Calendar API.', 'Deployed on a Raspberry Pi.'] }],
		},
	];

	return cards;
};
