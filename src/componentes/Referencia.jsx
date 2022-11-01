import React ,{useRef} from 'react'

const Referencia = () => {

const inputRef=useRef();
console.log(inputRef);

  return (
    <div>
        <h1>Referencia</h1>
        <input type="text" ref={inputRef}/>
        <input type="text"  />
        <button onClick={()=>inputRef.current.focus()} >Focus</button>
    </div>
  )
}

export default Referencia 