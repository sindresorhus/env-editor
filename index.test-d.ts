import {expectType} from 'tsd';
import {Editor, getEditor, defaultEditor, allEditors} from './index.js';

expectType<Editor>(getEditor('sublime'));
expectType<Editor>(defaultEditor());
expectType<Editor[]>(allEditors());
