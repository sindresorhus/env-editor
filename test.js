import test from 'ava';
import envEditor from '.';

test.serial('.default()', t => {
	const editor = process.env.EDITOR;
	process.env.EDITOR = 'subl';
	t.is(envEditor.default().id, 'sublime');
	process.env.EDITOR = editor;
});

test('.get() - generic (no match)', t => {
	const result = envEditor.get('Generic Editor');
	t.is(result.id, 'generic-editor');
	t.is(result.name, 'Generic Editor');
	t.is(result.bin, 'generic');
});

test('.get() - Sublime', t => {
	t.is(envEditor.get('sublime').id, 'sublime');
	t.is(envEditor.get('Sublime').id, 'sublime');
	t.is(envEditor.get('subl').id, 'sublime');
	t.is(envEditor.get('Sublime Text').id, 'sublime');
	t.is(envEditor.get('/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl').id, 'sublime');
});

test('.get() - Atom', t => {
	t.is(envEditor.get('atom').id, 'atom');
	t.is(envEditor.get('Atom').id, 'atom');
});

test('.get() - Visual Studio Code', t => {
	t.is(envEditor.get('vscode').id, 'vscode');
	t.is(envEditor.get('code').id, 'vscode');
	t.is(envEditor.get('vs code').id, 'vscode');
	t.is(envEditor.get('Visual Studio Code').id, 'vscode');
});

test('.get() - WebStorm', t => {
	t.is(envEditor.get('webstorm').id, 'webstorm');
	t.is(envEditor.get('wstorm').id, 'webstorm');
	t.is(envEditor.get('WebStorm').id, 'webstorm');
});

test('.get() - TextMate', t => {
	t.is(envEditor.get('textmate').id, 'textmate');
	t.is(envEditor.get('mate').id, 'textmate');
	t.is(envEditor.get('TextMate').id, 'textmate');
});

test('.get() - Vim', t => {
	t.is(envEditor.get('vim').id, 'vim');
	t.is(envEditor.get('Vim').id, 'vim');
});

test('.get() - NeoVim', t => {
	t.is(envEditor.get('neovim').id, 'neovim');
	t.is(envEditor.get('nvim').id, 'neovim');
	t.is(envEditor.get('NeoVim').id, 'neovim');
});

test('.get() - IntelliJ IDEA', t => {
	t.is(envEditor.get('intellij').id, 'intellij');
	t.is(envEditor.get('idea').id, 'intellij');
	t.is(envEditor.get('IntelliJ').id, 'intellij');
	t.is(envEditor.get('IntelliJ IDEA').id, 'intellij');
});

test('.get() - GNU nano', t => {
	t.is(envEditor.get('nano').id, 'nano');
	t.is(envEditor.get('GNU nano').id, 'nano');
});

test('.get() - GNU Emacs', t => {
	t.is(envEditor.get('emacs').id, 'emacs');
	t.is(envEditor.get('GNU Emacs').id, 'emacs');
});

test('.get() - GNU Emacs for Mac OS X', t => {
	t.is(envEditor.get('emacsforosx').id, 'emacsforosx');
	t.is(envEditor.get('GNU Emacs for Mac OS X').id, 'emacsforosx');
});

test('.all()', t => {
	const all = envEditor.all();
	t.true(Array.isArray(all));
	t.true(all.length > 0);
	t.is(all[0].id, 'sublime');
});
