import HabitItem from './HabitItem'

function HabitList({ habits, onToggle }) {
  if (habits.length === 0) {
    return (
      <p className="text-center text-gray-400 text-sm mt-8">
        No habits added yet
      </p>
    )
  }

  return (
    <ul className="flex flex-col gap-3">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} onToggle={onToggle} />
      ))}
    </ul>
  )
}

export default HabitList
