export interface Project {
	slug: string;
	title: string;
	summary: string;
	description: string;
	tags: string[];
	images: { src: string; alt: string }[];
	links?: { label: string; url: string }[];
}

// Add your projects here. The first image is used as the thumbnail on the grid.
export const projects: Project[] = [
	{
		slug: 'recipe-manager',
		title: 'Social Recipe Manager',
		summary: 'A social platform for sharing, discovering, and organizing recipes.',
		description:
			'A full-featured recipe management app with a social twist. Users can create and organize their own recipes, follow other home cooks, and discover new dishes through a curated feed. Includes features like ingredient-based search, meal planning, and the ability to fork and remix other users\' recipes.',
		tags: ["Go", "Swift", "Postgres", "Terraform", "GenAI", "Google Cloud Platform"],
		images: [
			{ src: '/images/recipe-manager/feed-1.png', alt: 'Recipe feed' },
			{ src: '/images/recipe-manager/recipe-detail-1.png', alt: 'Recipe detail view' },
			{ src: '/images/recipe-manager/profile-1.png', alt: 'User profile and collections' },
		],
		links: [],
	},
	{
		slug: 'birdhouse-camera',
		title: 'Birdhouse Camera',
		summary: 'A Raspberry Pi-powered birdhouse with live camera and motion detection.',
		description:
			'A smart birdhouse built around a Raspberry Pi with a camera module. Captures photos and video when motion is detected, streams a live feed, and logs bird activity over time. The enclosure is weather-sealed and solar-powered for hands-off outdoor deployment.',
		tags: ['Raspberry Pi', 'Python'],
		images: [
			{ src: '/images/birdhouse/house-1.jpeg', alt: 'Birdhouse Exterior 1' },
			{ src: '/images/birdhouse/pi-setup-1.jpeg', alt: 'Raspberry Pi Setup' },
			{ src: '/images/birdhouse/house-2.jpeg', alt: 'Raspberry Pi Water Proof Housing' },
		],
		links: [],
	},
];
