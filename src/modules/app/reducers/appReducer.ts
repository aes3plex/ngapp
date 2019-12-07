import { Action, ActionReducer, ActionReducerMap } from '@ngrx/store';
import { IRootState } from '../interfaces/IRootState';
import { IAppState } from '../interfaces/IAppState';
import reduceReducers, { Reducer } from 'reduce-reducers';
import { sidebarReducer } from '../../sidebar/reducers/sidebarReducer';
import { notesReducer } from '../../notes/reducers/notesReducer';

const reducers = [sidebarReducer, notesReducer] as Reducer<IAppState>[];

export const appReducer: ActionReducerMap<IRootState> = {
    app: reduceReducers(...reducers) as ActionReducer<IAppState, Action>,
};
