import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from './constants'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE

export type FromLanguage = Language | AutoLanguage

export interface State {
  fromLanguage: FromLanguage // FromLanguage doesn't works
  toLanguage: Language // Language doesn't works
  fromText: string
  result: string
  loading: boolean
}

export enum StoreActionTypes {
  INTERCHANGE_LANGUAGES = 'INTERCHANGE_LANGUAGES',
  SET_FROM_LANGUAGE = 'SET_FROM_LANGUAGE',
  SET_TO_LANGUAGE = 'SET_TO_LANGUAGE',
  SET_FROM_TEXT = 'SET_FROM_TEXT',
  SET_RESULT = 'SET_RESULT'
}

export type Action =
  | { type: StoreActionTypes.INTERCHANGE_LANGUAGES }
  | { type: StoreActionTypes.SET_FROM_LANGUAGE; payload: FromLanguage }
  | { type: StoreActionTypes.SET_TO_LANGUAGE; payload: Language }
  | { type: StoreActionTypes.SET_FROM_TEXT; payload: string }
  | { type: StoreActionTypes.SET_RESULT; payload: string }

export enum SectionType {
  From = 'from',
  To = 'to'
}
