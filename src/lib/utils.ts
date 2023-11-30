import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = (num: number, decimals: number = 2) => {
  return num.toFixed(decimals)
}
