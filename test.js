import test from 'ava';
import {defaultEditor, getEditor, allEditors} from '.';

test.serial('defaultEditor()', t => {
	const editor = process.env.EDITOR;
	process.env.EDITOR = 'subl';
	t.is(defaultEditor().id, 'sublime');
	process.env.EDITOR = editor;
});

test('getEditor() - generic (no match)', t => {
	const result = getEditor('Generic Editor');
	t.is(result.id, 'generic-editor');
	t.is(result.name, 'Generic Editor');
	t.is(result.binary, 'generic');
});

test('getEditor() - Sublime', t => {
	t.is(getEditor('sublime').id, 'sublime');
	t.is(getEditor('Sublime').id, 'sublime');
	t.is(getEditor('subl').id, 'sublime');
	t.is(getEditor('Sublime Text').id, 'sublime');
	t.is(getEditor('/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl').id, 'sublime');
});

test('getEditor() - Atom', t => {
	t.is(getEditor('atom').id, 'atom');
	t.is(getEditor('Atom').id, 'atom');
});

test('getEditor() - Visual Studio Code', t => {
	t.is(getEditor('vscode').id, 'vscode');
	t.is(getEditor('code').id, 'vscode');
	t.is(getEditor('vs code').id, 'vscode');
	t.is(getEditor('Visual Studio Code').id, 'vscode');
});

test('getEditor() - WebStorm', t => {
	t.is(getEditor('webstorm').id, 'webstorm');
	t.is(getEditor('wstorm').id, 'webstorm');
	t.is(getEditor('WebStorm').id, 'webstorm');
});

test('getEditor() - TextMate', t => {
	t.is(getEditor('textmate').id, 'textmate');
	t.is(getEditor('mate').id, 'textmate');
	t.is(getEditor('TextMate').id, 'textmate');
});

test('getEditor() - Vim', t => {
	t.is(getEditor('vim').id, 'vim');
	t.is(getEditor('Vim').id, 'vim');
});

test('getEditor() - NeoVim', t => {
	t.is(getEditor('neovim').id, 'neovim');
	t.is(getEditor('nvim').id, 'neovim');
	t.is(getEditor('NeoVim').id, 'neovim');
});

test('getEditor() - IntelliJ IDEA', t => {
	t.is(getEditor('intellij').id, 'intellij');
	t.is(getEditor('idea').id, 'intellij');
	t.is(getEditor('IntelliJ').id, 'intellij');
	t.is(getEditor('IntelliJ IDEA').id, 'intellij');
});

test('getEditor() - GNU nano', t => {
	t.is(getEditor('nano').id, 'nano');
	t.is(getEditor('GNU nano').id, 'nano');
});

test('getEditor() - GNU Emacs', t => {
	t.is(getEditor('emacs').id, 'emacs');
	t.is(getEditor('GNU Emacs').id, 'emacs');
});

test('getEditor() - GNU Emacs for Mac OS X', t => {
	t.is(getEditor('emacsforosx').id, 'emacsforosx');
	t.is(getEditor('GNU Emacs for Mac OS X').id, 'emacsforosx');
});

test('all()', t => {
	const all = allEditors();
	t.true(Array.isArray(all));
	t.true(all.length > 0);
	t.is(all[0].id, 'sublime');
});
