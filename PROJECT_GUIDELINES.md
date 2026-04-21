# Habit Tracker (PWA) — Project Guidelines

## 1. Project Overview

This project is a React-based Habit Tracker web application that will later be converted into a Progressive Web App (PWA) and then into a Flutter mobile application.

The goal is to build a simple, scalable system to help users track daily habits, monitor streaks, and improve consistency.

---

## 2. Current Development Stage

**Stage: Phase 1 — Core MVP (In Progress)**

Completed:

* Project initialized using React (Vite)

In Progress:

* UI structure
* Habit input and listing

Pending:

* LocalStorage integration
* Streak calculation
* Daily summary

Future:

* Firebase integration (Auth + Firestore)
* PWA conversion
* Flutter mobile version

---

## 3. Tech Stack

Frontend:

* React (Vite)
* CSS (basic styling, no heavy UI libraries)

Storage (Current):

* LocalStorage

Storage (Future):

* Firebase Firestore

Authentication (Future):

* Firebase Authentication (Google Sign-In)

---

## 4. Core Features (MVP Scope)

Must implement:

1. Add Habit
2. Display Habit List
3. Mark Habit as Completed (per day)
4. Persist Data using LocalStorage
5. Streak Calculation

Do NOT add extra features beyond this scope in MVP.

---

## 5. Data Structure

Each habit should follow this structure:

```json
{
  "id": "unique_id",
  "name": "Habit Name",
  "history": {
    "YYYY-MM-DD": true
  }
}
```

---

## 6. Component Structure

src/

* components/

  * HabitInput.jsx
  * HabitList.jsx
  * HabitItem.jsx
* App.jsx

Each component must have a single responsibility.

---

## 7. Coding Guidelines

* Keep code simple and readable
* Avoid unnecessary complexity
* Use functional components only
* Use React hooks (useState, useEffect)
* Do not introduce external libraries unless approved

---

## 8. Development Rules

* Do not modify existing structure without reason
* Do not break existing functionality
* Test before committing
* Maintain consistent naming

---

## 9. Current Task (Immediate Priority)

* Build HabitInput component
* Build HabitList component
* Connect state between components
* Display habits dynamically

---

## 10. Future Roadmap

Phase 2:

* LocalStorage integration
* Streak logic

Phase 3:

* Firebase integration

Phase 4:

* PWA (manifest + service worker)

Phase 5:

* Flutter mobile app

---

## 11. Key Principle

Focus on:
Build → Test → Improve

Avoid:
Overengineering, unnecessary features, and delays.

---
