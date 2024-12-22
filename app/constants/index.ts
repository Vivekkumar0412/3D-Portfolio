export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Front end developer",
		icon: "/backend.webp",
	},
	{
		title: "Backend Developer",
		icon: "/web.webp",
	},
	{
		title: "Full Stck Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Node.JS",
		icon: "/tech/nodejs.svg",
	},
	{
		name: "Express.JS",
		icon: "/tech/Express.svg",
	},
	{
		name: "MongoDb",
		icon: "/tech/mongodb-original-wordmark.svg",
	},
	{
		name: "C++",
		icon: "/tech/c_6132222.png",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Full Stack Developer Intern",
		company_name: "J K Webcom",
		icon: "/company/logo3.jpg",
		iconBg: "#383E56",
		date: "FEB 2022 -  SEPT 2022",
		points: ["Utilized React.js to develop dynamic and responsive user interfaces, enhancing overall user experience.",
			"Demonstrated proficiency in DOM manipulation techniques to efficiently manage and update webpage content.",
			" Gained hands-on experience with RESTful API integration, facilitating seamless communication between client and server-side components.",
			" Successfully contributed to debugging efforts, identifying and resolving issues to ensure smooth functioning of web applications."
		],
	},
	{
		title: "Full Stack Developer",
		company_name: "Ebslon Infotech",
		icon: "/company/Ebslon.webp",
		iconBg: "#E6DEDD",
		date: "MAY 2024 - NOV 2024",
		points: [
			" Developed both frontend and backend for a comprehensive admin project enabling users to modify frontend elements directly from an admin panel.",
			"Implemented NextAuth for enhanced security, ensuring secure user authentication and authorization.",
			"Designed and developed multiple features for Excel download, import, and bulk upload, improving data handling efficiency.",
			" Created and managed CRUD functionalities for various features, including dynamic graphs and user-specific filters, enhancing user experience and data visualization.",
			],
	},
];

const testimonials = [
	// {
	// 	id: 1,
	// 	testimonial:
	// 		"Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
	// 	name: "Om Patel",
	// 	image: "/socialmedia/behance.svg",
	// 	link: "https://www.behance.net/omthecreator",
	// },
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Vivek Kumar",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/vivek-kumar59/",
	},
	// {
	// 	id: 3,
	// 	testimonial:
	// 		"Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
	// 	name: "Om Patel",
	// 	image: "/socialmedia/dribble.svg",
	// 	link: "https://dribbble.com/om2121",
	// },
	{
		id: 4,
		testimonial:
			"Also do check out my X account you can follow me here.",
		name: "Vivek Kumar",
		image: "/socialmedia/x.png",
		link: "https://x.com/vivek_sing49959",
	},
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Vivek Kumar",
		image: "/tech/github.webp",
		link: "https://github.com/Vivekkumar0412",
	},
];


const projects: {
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web" | "company"
}[] = [
		{
			name: "TSA Portfolio",
			description:
				"A Full stack website with a dynamic admin panel having multiple form, filters, and pages",
			tags: [
				{
					name: "Full Stack website",
					color: "blue-text-gradient",
				},
				{
					name: "Next.js",
					color: "green-text-gradient",
				},
				{
					name: "Node.js",
					color: "orange-text-gradient",
				},
			],
			image: "/projectimg/tsa.png",
			platform: "company",
			deploy_link: "https://tilakstonearts.com/",
		},
		{
			name: "360 Admin",
			description:
				" Devloped a ERP admin panel where they can add multilevel things",
			tags: [
				{
					name: "next",
					color: "red-text-gradient",
				},
				{
					name: "Next UI",
					color: "orange-text-gradient",
				},
				{
					name: "tailwind",
					color: "blue-text-gradient",
				},
			],
			image: "/projectimg/360.png",
			source_code_link: "",
			platform: "company",
			deploy_link: "",
		},
		{
			name: "Bequest Lending",
			description:
				"Bequest Lending is a complete full stack website, I have devloped all front-end, admin, and backend and done all the integrations, Bequest Lending Customized Solutions for Your Business and Lending Needs",
			tags: [
				{
					name: "next",
					color: "green-text-gradient",
				},
				{
					name: "tailwind",
					color: "blue-text-gradient",
				},
			],
			image: "/projectimg/bequest.png",
			source_code_link: "",
			platform: "company",
			deploy_link: "https://bequestlending.com/",
		},
	];

export { services, technologies, experiences, testimonials, projects };
