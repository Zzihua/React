import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrement,increment, decrement2,increment2,incrementByAmount,decrementByAmount,multiByAmount,divideByAmount,mul} from './counterSlice';

export function Counter(){
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount,setIncrementAmount] = useState('2')
  const [decrementAmount,setDecrementAmount] = useState('2')
  const [multiAmount,setMultiAmount] = useState('2')
  const [divideAmount,setDivideAmount] = useState('2')
  const [multiplier,setMultiplier] = useState(0);
  const [multiplicand,setMultiplicand] = useState(0);
  const [multiplicand1,setMultiplicand1] = useState(0);

  return(
    <div>
      <div>
      <button 
          aria-label='Increment2 value'
          onClick={()=> dispatch(increment2())}
        >
          Increment+2
        </button>
        <button 
          aria-label='Increment1 value'
          onClick={()=> dispatch(increment())}
        >
          Increment+1
        </button>
        <span>{count}</span>
        <button 
          aria-label='Decrement1 value'
          onClick={()=> dispatch(decrement())}
        >
          Decrement-1
        </button>
        <button 
          aria-label='Decrement2 value'
          onClick={()=> dispatch(decrement2())}
        >
          Decrement-2
        </button>
      </div>
      <div>
        <input
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={e=>setIncrementAmount(e.target.value)}
        />
        <button
          onClick={()=>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>

      </div>

      <div>
        <input
          aria-label='Set decrement amount'
          value={decrementAmount}
          onChange={e=>setDecrementAmount(e.target.value)}
        />
        <button
          onClick={()=>
            dispatch(decrementByAmount(Number(decrementAmount) || 0))
          }
        >
          Reduce Amount
        </button>

      </div>

      <div>
        <input
          aria-label='Set multi amount'
          value={multiAmount}
          onChange={e=>setMultiAmount(e.target.value)}
        />
        <button
          onClick={()=>
            dispatch(multiByAmount(Number(multiAmount) || 0))
          }
        >
          Multi Amount
        </button>

      </div>

      <div>
        <input
          aria-label='Set divide amount'
          value={divideAmount}
          onChange={e=>setDivideAmount(e.target.value)}
        />
        <button
          onClick={()=>
            dispatch(divideByAmount(Number(divideAmount) || 0))
          }
        >
          Devide Amount
        </button>

      </div>
      <br></br>
      <div>
        <div>
          <input
            value={multiplier}
            onChange={e=>setMultiplier(e.target.value)}
          />
          X
          <input
            value={multiplicand}
            onChange={e=>setMultiplicand(e.target.value)}
          />
          X
          <input
            value={multiplicand1}
            onChange={e=>setMultiplicand1(e.target.value)}
          />
          ={count}
          <br></br>
          <button
            onClick={()=>
              dispatch(mul({"multiplier":multiplier , "multiplicand":multiplicand, "multiplicand1":multiplicand1}))
            }
          >
            Count
          </button>

        </div>
      </div>


    </div>
  )
}