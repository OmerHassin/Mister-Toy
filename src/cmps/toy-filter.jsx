import { useEffect, useRef, useState } from 'react'
import { utilService } from '../services/util.service.js'
// import { toyService } from '../services/toy.service.js'

export function ToyFilter({ onSetFilter, filterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
  const elInputRef = useRef(null)
  onSetFilter = useRef(utilService.debounce(onSetFilter))

  useEffect(() => {
    elInputRef.current.focus()
  }, [])

  useEffect(() => {
    // update father cmp that filters change very type
    onSetFilter.current(filterByToEdit)

    // eslint-disable-next-line
  }, [filterByToEdit])

  function handleChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? (+target.value || '') : target.value
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
  }

  function onSubmitFilter(ev) {
    // update father cmp that filters change on submit
    ev.preventDefault()
    onSetFilter(filterByToEdit)
  }

  return (
    <section className="toy-filter full main-layout">
      <h2>Toys filter</h2>
      <form onSubmit={onSubmitFilter}>
        <label htmlFor="name">Name:</label>
        <input type="text"
            id="name"
            name="txt"
            placeholder="Name"
            value={filterByToEdit.txt}
            onChange={handleChange}
            ref={elInputRef}
        />

        <label htmlFor="maxPrice">Max price:</label>
        <input type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="Max price"
            value={filterByToEdit.maxPrice}
            onChange={handleChange}
        />
        <button hidden>Filter</button>
      </form>
    </section>
  )
}