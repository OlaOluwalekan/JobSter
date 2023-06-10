const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        onChange={handleChange}
        className='form-input'
        autoComplete='true'
      />
    </div>
  )
}
export default FormRow
