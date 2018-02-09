import {tileKey} from 'Helpers'

export const Message = [
	{
		word: 'Hello,',
		color: 'clr1',
		category: 'BASS'
	},
	{
		word: 'My',
		color: 'clr2',
		category: 'VOICE'
	},
	{
		word: 'name',
		color: 'clr3',
		category: 'DRUM'
	},
	{
		word: 'is',
		color: 'clr4',
		category: 'FX'
	},
	{
		word: 'Mitch',
		color: 'clr5',
		category: 'SYNTH'
	}
]

export const TileKeys = Message.map(({word}) => word)
						.reduce((acc, word) => 
							acc.concat(word.split("").map((letter, i) => tileKey(word, i))), 
						[])

/*
SamplesConfig = {
	'Hello_H' : 'samples/${CATEGORY}_1', <- samples/ folder under the public/ folder
	'Hello_e' : `samples/${CATEGORY}_2`,
	...and so on
}
*/

export const SamplesConfig = Message.reduce((config, {word, category}) => {
	const wordConfig = {}
	console.log(process.env.NODE_ENV)
	for(let i = 0; i < word.length; i++) {
		
		if (process.env.NODE_ENV === 'production') {
			wordConfig[tileKey(word, i)] = `https://d28c0euu4rzwtx.cloudfront.net/${category}_${i+1}.wav.gz`
		} else {
			wordConfig[tileKey(word, i)] = `samples/${category}_${i+1}.wav`
		}
		console.log(wordConfig[tileKey(word, i)])
	}
	return {
		...config,
		...wordConfig
	}
}, {})