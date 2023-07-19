import { EAffinity } from '../enums/EAffinity'
import { EProjectEffect } from '../enums/projects.enum'
import IOption from './IOption'

export interface IProjectPotency extends IOption {
  zenithCost: number
  effect: EProjectEffect
  affinity: IProjectAffinity[]
}

export interface IProjectArea extends IOption {
  zenithCostMultiplier: number
}

export interface IProjectUseType extends IOption {
  zenithCostMultiplier: number
}

export interface IProjectAffinity {
  type: EAffinity
  number: number
}
