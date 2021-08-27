import {expectType} from 'tsd';
import {getEditor, defaultEditor, allEditors, Editor} from './index.js';

expectType<Editor>(getEditor('sublime'));
expectType<Editor>(defaultEditor());
expectType<Editor[]>(allEditors());
