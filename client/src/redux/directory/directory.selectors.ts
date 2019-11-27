import { createSelector } from 'reselect';
import { AppState } from '../root-reducer';

const selectDirectory = (state: AppState) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
