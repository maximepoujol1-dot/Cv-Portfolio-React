import type { ReactNode } from 'react'

export type TypeProjet = 1 | 2 | 3

export type Filtre = 'time' | 'type'

export type Theme = 'light' | 'dark'

export interface projet {
  id: number
  type: TypeProjet
  title: string
  date: string
  message: string
  github?: string
  role?:string
  technology?:string[]
}

export interface insideDivider {
  id: number
  name: string
  image?: string
  logo?: ReactNode
}