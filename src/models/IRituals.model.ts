import IOption from './IOption.model'

export interface IRitualPotency extends IOption {
  mpCost: number
  difficultyLevel: number
  clockSections: number
}

export interface IRitualArea extends IOption {
  mpMultiplier: number
}