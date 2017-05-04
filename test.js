import test from 'ava';
import m from '.';

test.serial('.default()', t => {
	const editor = process.env.EDITOR;
	process.env.EDITOR = 'subl';
	t.is(m.default().id, 'sublime');
	process.env.EDITOR = editor;
});

test('.get() - Sublime', t => {
	t.is(m.get('sublime').id, 'sublime');
	t.is(m.get('Sublime').id, 'sublime');
	t.is(m.get('subl').id, 'sublime');
	t.is(m.get('Sublime Text').id, 'sublime');
	t.is(m.get('/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl').id, 'sublime');
});

test('.get() - Atom', t => {
	t.is(m.get('atom').id, 'atom');
	t.is(m.get('Atom').id, 'atom');
});

test('.get() - Visual Studio Code', t => {
	t.is(m.get('vscode').id, 'vscode');
	t.is(m.get('code').id, 'vscode');
	t.is(m.get('vs code').id, 'vscode');
	t.is(m.get('Visual Studio Code').id, 'vscode');
});

test('.get() - WebStorm', t => {
	t.is(m.get('webstorm').id, 'webstorm');
	t.is(m.get('wstorm').id, 'webstorm');
	t.is(m.get('WebStorm').id, 'webstorm');
});

test('.get() - TextMate', t => {
	t.is(m.get('textmate').id, 'textmate');
	t.is(m.get('mate').id, 'textmate');
	t.is(m.get('TextMate').id, 'textmate');
});

test('.get() - vim', t => {
	t.is(m.get('vim').id, 'vim');
});

test('.all()', t => {
	const all = m.all();
	t.true(Array.isArray(all));
	t.true(all.length > 0);
	t.is(all[0].id, 'sublime');
});
