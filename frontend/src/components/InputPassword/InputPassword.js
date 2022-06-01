export default function InputPassword ({ inputName, labelName, onChange, value, onBlur = { function () {} } }) {
  return (
    <label className='form-label'>
      <span>{labelName}</span>
      <input type='password' name={inputName} autoComplete='new-text' className='form-input' onChange={onChange} value={value} onBlur={onBlur} />
    </label>
  )
}
