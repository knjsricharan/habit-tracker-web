import { useState, useEffect } from 'react'
import HabitInput from './components/HabitInput'
import HabitList from './components/HabitList'

const STORAGE_KEY = 'habits'

function App() {
  const [habits, setHabits] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  // Save habits to LocalStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits))
  }, [habits])

  function handleAddHabit(name) {
    const newHabit = {
      id: Date.now().toString(),
      name,
      history: {},
    }
    setHabits((prev) => [...prev, newHabit])
  }

  function handleToggleHabit(id, date) {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id === id) {
          return {
            ...habit,
            history: {
              ...habit.history,
              [date]: !habit.history[date],
            },
          }
        }
        return habit
      })
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white shadow rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Habit Tracker
        </h1>

        <HabitInput onAddHabit={handleAddHabit} />
        <HabitList habits={habits} onToggle={handleToggleHabit} />
      </div>
    </div>
  )
}

export default App
