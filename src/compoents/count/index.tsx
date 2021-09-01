import React, { useMemo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { ICountProps } from "./count.interface";
import { onDownNumber, onUpNumber, setNumber } from "./count.reducer";
import { IRootState } from "../../shared/reducer";

const Count = (props: ICountProps) => {

    const dispatch = useDispatch()

    const {count} = useSelector((state: IRootState) => {
        return {
            count: state.count.number.data
        }
    }, shallowEqual)

    const toPlus = () => {
        dispatch(onUpNumber())
    }

    const toMinus = () => {
        dispatch(onDownNumber())
    }

    const toReset = () => {
        dispatch(setNumber(0))
    }

    const number = useMemo(() => {
        return count
    }, [count])

    useEffect(() => {
        dispatch(setNumber(0))
        return () => {
            dispatch(setNumber(0))
        }
    }, [dispatch])

    return (
        <div>
            <React.Fragment>
                <button onClick={toMinus}>-</button>
                <span>
               {number}
            </span>
                <button onClick={toPlus}>+</button>
            </React.Fragment>
            <div>
                <button onClick={toReset}>react</button>
            </div>
        </div>
    )

}

export default React.memo(Count)
