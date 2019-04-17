import {expectType} from 'tsd';
import envEditor = require('.');

expectType<envEditor.Editor>(envEditor.get('sublime'));
expectType<envEditor.Editor>(envEditor.default());
expectType<envEditor.Editor[]>(envEditor.all());
