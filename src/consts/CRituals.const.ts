import { ERitualArea } from '../enums/ERitualArea.enum'
import { ERitualPotency } from '../enums/ERitualPotency.enum'
import { IRitualArea, IRitualPotency } from '../models/IRituals.model'

export const CRitualPotencyOptions: IRitualPotency[] = [
  { id: 1, label: ERitualPotency.MINOR, mpCost: 20, difficultyLevel: 7, clockSections: 4 },
  { id: 2, label: ERitualPotency.MEDIUM, mpCost: 30, difficultyLevel: 10, clockSections: 6 },
  { id: 3, label: ERitualPotency.MAJOR, mpCost: 40, difficultyLevel: 13, clockSections: 6 },
  { id: 4, label: ERitualPotency.EXTREME, mpCost: 50, difficultyLevel: 16, clockSections: 8 },
]

export const CRitualAreaOptions: IRitualArea[] = [
  { id: 1, label: ERitualArea.SELF, mpMultiplier: 1 },
  { id: 2, label: ERitualArea.SMALL, mpMultiplier: 2 },
  { id: 3, label: ERitualArea.BIG, mpMultiplier: 3 },
  { id: 4, label: ERitualArea.HUGE, mpMultiplier: 4 },
]
