function Input({labelName, inputType, id, name, value, onChange, validationError}) {

  return (
    <>
      <div className={`m-2 bg-gray-200 border-2 rounded ${validationError ? 'border-rose-700' : 'border-gray-300'}`}>
        <div className='w-full m-auto'>
          <label className='text-xs ml-2 text-slate-500'>{labelName}</label>
          <input type={inputType} id={id} name={name} value={value} onChange={onChange} className='w-full p-2 outline-0 bg-gray-200 text-s'></input>
        </div>
      </div>
      <div className="text-rose-600 text-xs ml-2">{validationError}</div>
    </>
  )
}

export default Input