/* eslint-disable @typescript-eslint/no-explicit-any */
type AnyObject<T = any> = Record<string, T>
type AnyFunction = (...args: any[]) => any
type AnyAsyncFunction = (...args: any[]) => Promise<any>
type DateISOString = `${number}-${number}-${number}T${number}:${number}:${number}Z`
type PhoneNumber = `+${number}`

type Modify<T, R extends PartialAny<T>> = Omit<T, keyof R> & R

type ValuesOf<T> = T[keyof T]
