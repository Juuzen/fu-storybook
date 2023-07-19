import { EAffinity } from '../enums/EAffinity'
import {
  EProjectArea,
  EProjectEffect,
  EProjectPotency,
  EProjectTinkererLevel,
  EProjectUseType,
} from '../enums/projects.enum'
import { IProjectArea, IProjectPotency, IProjectUseType } from '../models/projects.model'

export const CProjectPotencyOptions: IProjectPotency[] = [
  {
    id: 1,
    label: EProjectPotency.MINOR,
    zenithCost: 100,
    effect: EProjectEffect.NONE,
    affinity: [{ type: EAffinity.RESISTANCE, number: 1 }],
  },
  {
    id: 2,
    label: EProjectPotency.MEDIUM,
    zenithCost: 200,
    effect: EProjectEffect.MINOR,
    affinity: [{ type: EAffinity.RESISTANCE, number: 2 }],
  },
  {
    id: 3,
    label: EProjectPotency.MAJOR,
    zenithCost: 400,
    effect: EProjectEffect.HEAVY,
    affinity: [
      { type: EAffinity.RESISTANCE, number: 2 },
      { type: EAffinity.IMMUNITY, number: 1 },
    ],
  },
  {
    id: 4,
    label: EProjectPotency.EXTREME,
    zenithCost: 800,
    effect: EProjectEffect.MASSIVE,
    affinity: [
      { type: EAffinity.RESISTANCE, number: 3 },
      { type: EAffinity.IMMUNITY, number: 2 },
    ],
  },
]

export const CProjectAreaOptions: IProjectArea[] = [
  {
    id: 1,
    label: EProjectArea.SELF,
    zenithCostMultiplier: 1,
  },
  {
    id: 2,
    label: EProjectArea.SMALL,
    zenithCostMultiplier: 2,
  },
  {
    id: 3,
    label: EProjectArea.BIG,
    zenithCostMultiplier: 3,
  },
  {
    id: 4,
    label: EProjectArea.HUGE,
    zenithCostMultiplier: 4,
  },
]

export const CProjectUseTypeOptions: IProjectUseType[] = [
  {
    id: 1,
    label: EProjectUseType.CONSUMABLE,
    zenithCostMultiplier: 1,
  },
  {
    id: 2,
    label: EProjectUseType.PERMANENT,
    zenithCostMultiplier: 5,
  },
]

export const calcProjectEffectHPValue = (
  tinkererLevel: EProjectTinkererLevel,
  projectEffect: EProjectEffect,
): number | null => {
  if (projectEffect === EProjectEffect.NONE) return null

  switch (tinkererLevel) {
    case EProjectTinkererLevel.LOW:
      switch (projectEffect) {
        case EProjectEffect.MINOR:
          return 10

        case EProjectEffect.HEAVY:
          return 20

        case EProjectEffect.MASSIVE:
          return 30
      }

    case EProjectTinkererLevel.MEDIUM:
      switch (projectEffect) {
        case EProjectEffect.MINOR:
          return 20

        case EProjectEffect.HEAVY:
          return 40

        case EProjectEffect.MASSIVE:
          return 60
      }

    case EProjectTinkererLevel.HIGH:
      switch (projectEffect) {
        case EProjectEffect.MINOR:
          return 30

        case EProjectEffect.HEAVY:
          return 50

        case EProjectEffect.MASSIVE:
          return 80
      }
  }
}
