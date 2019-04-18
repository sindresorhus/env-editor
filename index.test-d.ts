import {expectType} from 'tsd';
import {Editor, getEditor, defaultEditor, allEditors} from '.';

expectType<Editor>(getEditor('sublime'));
expectType<Editor>(defaultEditor());
expectType<Editor[]>(allEditors());
