import { EpisodType } from "../types/types"

export const episodes: EpisodType[] = [
	{
		id: 1,
		number: 1,
		title: 'The best microphone under $200',
		category: 'gear',
		description: 'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.',
		img: '/img/episodes/bestMic.jpg'
	},
	{
		id: 2,
		number: 2,
		title: 'Mic tricks to take you to the next level',
		category: 'tips & tricks',
		description: 'Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.',
		img: '/img/episodes/mic.jpg'
	},
	{
		id: 3,
		number: 3,
		title: 'Should you get outboard audio gear?',
		category: 'gear',
		description: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
		img: '/img/episodes/outboard.jpg'
	}
]