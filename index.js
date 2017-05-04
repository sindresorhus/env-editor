'use strict';
const path = require('path');

const editors = () => [{
	id: 'sublime',
	name: 'Sublime Text',
	bin: 'subl',
	paths: [
		'/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl',
		'/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl'
	],
	keywords: []
}, {
	id: 'atom',
	name: 'Atom',
	bin: 'atom',
	paths: [
		'/Applications/Atom.app/Contents/Resources/app/atom.sh'
	],
	keywords: []
}, {
	id: 'vscode',
	name: 'Visual Studio Code',
	bin: 'code',
	paths: [
		'/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code'
	],
	keywords: [
		'vs code'
	]
}, {
	id: 'webstorm',
	name: 'WebStorm',
	bin: 'wstorm',
	paths: [],
	keywords: []
}, {
	id: 'textmate',
	name: 'TextMate',
	bin: 'mate',
	paths: [],
	keywords: []
}, {
	id: 'vim',
	name: 'Vim',
	bin: 'vim',
	paths: [],
	keywords: []
}];

const get = input => {
	input = input.toLowerCase().trim();
	const bin = input.split(path.sep).pop();

	for (const editor of editors()) {
		// TODO: Maybe use `leven` module for more flexible matching
		if (
			input === editor.id ||
			input === editor.name.toLowerCase() ||
			bin === editor.bin
		) {
			return editor;
		}

		for (const p of editor.paths) {
			if (path.normalize(input) === path.normalize(p)) {
				return editor;
			}
		}

		for (const keyword of editor.keywords) {
			if (input === keyword) {
				return editor;
			}
		}
	}

	return {
		id: input,
		name: input,
		bin: input,
		paths: []
	};
};

module.exports.default = () => {
	const editor = process.env.EDITOR || process.env.VISUAL;

	if (!editor) {
		throw new Error(
`
Your $EDITOR environment variable is not set.
Set it to the command/path of your editor in ~/.zshenv or ~/.bashrc:

  export EDITOR=atom
`
		);
	}

	return get(editor);
};

module.exports.get = get;
module.exports.all = editors;
