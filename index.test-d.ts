import {expectType} from 'tsd';
import * as envEditor from '.';

expectType<envEditor.Editor>(envEditor.get('sublime'));
expectType<envEditor.Editor>(envEditor.default());
expectType<envEditor.Editor[]>(envEditor.all());
