export interface Editor {
	id: string;
	name: string;
	bin: string;
	isTerminalEditor: boolean;
	paths: string[];
	keywords: string[];
}

/**
Get info about the default editor.

The user is expected to have the `$EDITOR` environment variable set, and if not, a user-friendly error is thrown.

@returns Info about the default editor.
*/
export default function(): Editor;

/**
Get info about a specific editor.

@param editor - This can be pretty flexible. It matches against all the data it has.

For example, to get Sublime Text, you could write either of the following: `sublime`, `Sublime Text`, `subl`.
@returns Info about the specified editor.

@example
```
import * as envEditor from 'env-editor';

envEditor.get('sublime');
// {
// 	id: 'sublime',
// 	name: 'Sublime Text',
// 	bin: 'subl',
// 	isTerminalEditor: false,
// 	paths: [
// 		'/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl',
// 		'/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl'
// 	],
// 	keywords: []
// }
```
*/
export function get(editor: string): Editor;

/**
@returns Info on all the editors.
*/
export function all(): Editor[];
