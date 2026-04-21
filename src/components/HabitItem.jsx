/** Returns today's date as "YYYY-MM-DD" */
function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

/**
 * Calculates the current streak: consecutive completed days
 * counting backwards from today.
 */
function calcStreak(history) {
  let streak = 0
  const date = new Date()
  const today = date.toISOString().slice(0, 10)

  // If today isn't done yet, start from yesterday
  if (!history[today]) {
    date.setDate(date.getDate() - 1)
  }

  while (true) {
    const key = date.toISOString().slice(0, 10)
    if (history[key]) {
      streak++
      date.setDate(date.getDate() - 1)
    } else {
      break
    }
  }

  return streak
}

function HabitItem({ habit, onToggle }) {
  const today = todayKey()
  const doneToday = !!habit.history[today]
  const streak = calcStreak(habit.history)

  return (
    <li
      id={`habit-${habit.id}`}
      className="flex items-center justify-between bg-gray-50 rounded-lg p-3 shadow-sm"
    >
      {/* Left side: checkbox + name */}
      <div className="flex items-center gap-3">
        <input
          id={`checkbox-${habit.id}`}
          type="checkbox"
          checked={doneToday}
          onChange={() => onToggle(habit.id, today)}
          className="w-4 h-4 accent-blue-500 cursor-pointer"
        />
        <span
          className={`text-sm font-medium ${
            doneToday ? 'line-through opacity-50 text-gray-500' : 'text-gray-800'
          }`}
        >
          {habit.name}
        </span>
      </div>

      {/* Right side: streak badge */}
      <span className="text-xs text-orange-500 font-semibold whitespace-nowrap">
        🔥 {streak} day{streak !== 1 ? 's' : ''}
      </span>
    </li>
  )
}

export default HabitItem
