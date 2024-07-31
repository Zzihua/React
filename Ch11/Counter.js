import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { mul} from '../src/mulSlice';
import { divide} from './divideSlice';
import { add} from '../src/addSlice';
import { decrese} from './decreseSlice';



export function Counter(){
  const count = useSelector((state)=>state.mul.value)
  const count2 = useSelector((state)=>state.add.value2)
  const count3 = useSelector((state)=>state.divide.value3)
  const count4 = useSelector((state)=>state.decrese.value4)
  const dispatch = useDispatch()
  
  const [multiplier,setMultiplier] = useState(0);
  const [multiplicand,setMultiplicand] = useState(0);
  const [multiplicand1,setMultiplicand1] = useState(0);

  const [div1,setDiv1] = useState(0);
  const [div2,setDiv2] = useState(0);

  const [addend,setAddend] = useState(0);
  const [summand,setSummand] = useState(0);

  const [deend,setDeend] = useState(0);
  const [demand,setDemand] = useState(0);

  return(
    <div>
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
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={()=>
              dispatch(mul({"multiplier":multiplier , "multiplicand":multiplicand, "multiplicand1":multiplicand1}))
            }
          >
            Count
          </button>

          <br></br>
          <input
            value={div1}
            onChange={e=>setDiv1(e.target.value)}
          />
          /
          <input
            value={div2}
            onChange={e=>setDiv2(e.target.value)}
          />
          ={count3}
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={()=>
              dispatch(divide({"div1":div1 , "div2":div2}))
            }
          >
            Count
          </button>

          <br></br>
          <input
            value={addend}
            onChange={e=>setAddend(e.target.value)}
          />
          +
          <input
            value={summand}
            onChange={e=>setSummand(e.target.value)}
          />
          ={count2}
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={()=>
              dispatch(add({"addend":addend , "summand":summand}))
            }
          >
            Count
          </button>

          <br></br>
          <input
            value={deend}
            onChange={e=>setDeend(e.target.value)}
          />
          -
          <input
            value={demand}
            onChange={e=>setDemand(e.target.value)}
          />
          ={count4}
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={()=>
              dispatch(decrese({"deend":deend , "demand":demand}))
            }
          >
            Count
          </button>

          
        </div>

        
      </div>


    </div>
  )
}