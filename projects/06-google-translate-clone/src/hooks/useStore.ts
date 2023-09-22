import { useReducer } from 'react'
import { AUTO_LANGUAGE } from '../constants'
import {
  Action,
  FromLanguage,
  Language,
  StoreActionTypes as SAT,
  type State
} from './../types.d'

// 1. Initial State
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2. Reducer
function reducer (state: State, action: Action) {
  const { type } = action
  if (type === SAT.INTERCHANGE_LANGUAGES) {
    // Avoid the logic inside the Component
    if (state.fromLanguage === AUTO_LANGUAGE) return state
    const loading = state.fromText !== ''
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
      result: '',
      loading
    }
  }
  if (type === SAT.SET_FROM_LANGUAGE) {
    if (state.fromLanguage === action.payload) return state
    const loading = state.fromText !== ''
    return {
      ...state,
      fromLanguage: action.payload,
      result: '',
      loading
    }
  }
  if (type === SAT.SET_TO_LANGUAGE) {
    if (state.toLanguage === action.payload) return state
    const loading = state.fromText !== ''
    return {
      ...state,
      toLanguage: action.payload,
      result: '',
      loading
    }
  }
  if (type === SAT.SET_FROM_TEXT) {
    const loading = action.payload !== ''
    return {
      ...state,
      //todo the comment below fix the quick paste words bug.
      //result: '',
      fromText: action.payload,
      loading
    }
  }
  if (type === SAT.SET_RESULT) {
    //if(state.result === action.payload) return
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state
}

export function useStore () {
  // 3. Using useReducer hook
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState)

  const interchangeLanguage = () => {
    dispatch({ type: SAT.INTERCHANGE_LANGUAGES })
  }
  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: SAT.SET_FROM_LANGUAGE, payload })
  }
  const setToLanguage = (payload: Language) => {
    dispatch({ type: SAT.SET_TO_LANGUAGE, payload })
  }
  const setFromText = (payload: string) => {
    dispatch({ type: SAT.SET_FROM_TEXT, payload })
  }
  const setResult = (payload: string) => {
    dispatch({ type: SAT.SET_RESULT, payload })
  }
  return {
    fromLanguage,
    toLanguage,
    fromText,
    loading,
    result,
    interchangeLanguage,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
