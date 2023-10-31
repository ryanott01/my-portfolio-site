// Consumed by the `/lib/Social/Social.svelte component
// Font Awesome Icons via https://fontawesome.com/

interface SocialLink {
	/** Provide the title. */
	title: string;
	/** Provide the url. */
	url: string;
	/** Provide the Font Awesome icon information. */
	icon: string;
	/** Provide the anchor target attribute. */
	target: string;
	


}

export const socialLinks: SocialLink[] = [
	{
		title: 'Github',
		url: 'https://github.com/ryanott01',
		icon: 'fa-brands fa-github',
		target: '_blank'
	},

	{
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/in/ryan-ott-2237951ab/',
		icon: 'fa-brands fa-linkedin',
		target: '_blank'
	},
	{
		title: 'Email',
		url: 'officialryanott@gmail.com',
		icon: 'fa-solid fa-envelope',
		target: ''
	}
];
