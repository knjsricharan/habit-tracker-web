import { useState } from 'react'

function HabitInput({ onAddHabit }) {
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const trimmed = value.trim()
    if (!trimmed) return

    onAddHabit(trimmed)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        id="habit-name-input"
        type="text"
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter a new habit..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
      />
      <button
        id="habit-add-btn"
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg
                   hover:bg-blue-600 active:scale-95 transition-all"
      >
        Add
      </button>
    </form>
  )
}

export default HabitInput
