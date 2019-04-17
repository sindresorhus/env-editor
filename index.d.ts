declare namespace envEditor {
	export interface Editor {
		id: string;
		name: string;
		binary: string;
		isTerminalEditor: boolean;
		paths: string[];
		keywords: string[];
	}
}

declare const envEditor: {
	/**
	Get info about the default editor.

	The user is expected to have the `$EDITOR` environment variable set, and if not, a user-friendly error is thrown.

	@returns Metadata on the default editor.
	*/
	default(): envEditor.Editor;

	/**
	Get info about a specific editor.

	@param editor - This can be pretty flexible. It matches against all the data it has. For example, to get Sublime Text, you could write either of the following: `sublime`, `Sublime Text`, `subl`.
	@returns Metadata on the specified editor.

	@example
	```
	import envEditor = require('env-editor');

	envEditor.get('sublime');
	// {
	// 	id: 'sublime',
	// 	name: 'Sublime Text',
	// 	binary: 'subl',
	// 	isTerminalEditor: false,
	// 	paths: [
	// 		'/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl',
	// 		'/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl'
	// 	],
	// 	keywords: []
	// }
	```
	*/
	get(editor: string): envEditor.Editor;

	/**
	@returns Metadata on all the editors.
	*/
	all(): envEditor.Editor[];
};

export = envEditor;
