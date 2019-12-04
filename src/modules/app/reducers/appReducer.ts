import { Action, ActionReducer, ActionReducerMap } from '@ngrx/store';
import { IRootState } from '../interfaces/IRootState';
import { IAppState } from '../interfaces/IAppState';
import reduceReducers, { Reducer } from 'reduce-reducers';

const reducers = [] as Reducer<IAppState>[];

export const appReducer: ActionReducerMap<IRootState> = {
    app: reduceReducers(...reducers) as ActionReducer<IAppState, Action>,
};
