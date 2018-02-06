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

/*
SamplesConfig = {
	'Hello_H' : 'samples/${CATEGORY}_1', <- samples/ folder under the public/ folder
	'Hello_e' : `samples/${CATEGORY}_2`,
	...and so on
}
*/

export const SamplesConfig = Message.reduce((config, {word, category}) => {
	const wordConfig = {}
	for(let i = 0; i < word.length; i++) {
		const letter = word.charAt(i)
		wordConfig[tileKey(word, letter)] = `samples/${category}_${i+1}.wav`
	}
	return {
		...config,
		...wordConfig
	}
}, {})