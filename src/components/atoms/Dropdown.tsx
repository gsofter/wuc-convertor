import React from 'react'

interface DropdownPropsType {
  name: string
  options: Array<string>
  onChange: (val: string) => void
}

const Dropdown: React.FC<DropdownPropsType> = ({ name, options, onChange }) => {
  return (
    <select
      name={name}
      className='block w-[200px] rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
      onChange={(e) => onChange(e.target.value)}
      defaultValue='usd'
    >
      {options.map((cur, curId) => (
        <option key={curId} value={cur}>
          {cur}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
