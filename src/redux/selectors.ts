import { IGlobalState} from './state';

interface IRootState extends IGlobalState {}

export const selectAllValues = (state: IRootState) => state.currency;
export const selectCurrentCurency = (state: IRootState) => state.currency.currentCurrency;