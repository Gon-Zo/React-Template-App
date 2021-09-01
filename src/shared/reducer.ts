import { combineReducers } from 'redux'
import count, { CountState } from '../compoents/count/count.reducer'

export interface IRootState {
    readonly count: CountState
}

const rootReducer = combineReducers<IRootState>({
    count
})

export default rootReducer
