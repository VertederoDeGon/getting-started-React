import { FromLanguage, Language } from '../types'

const apiKey = import.meta.env.VITE_RAPID_API_Key
const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2'
const method = 'POST'
const DEFAULT_HEADER_PARAMS = {
  'X-RapidAPI-Key': apiKey,
  'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
  'content-type': 'application/json'
}
const options = {
  method: method,
  headers: DEFAULT_HEADER_PARAMS
}
export async function translate ({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}) {
  if (fromLanguage === toLanguage) return text
  const requestBody = JSON.stringify({
    q: text,
    source: fromLanguage,
    target: toLanguage
  })

  try {
    const response = await fetch(url, {
      ...options,
      body: requestBody
    })
    const result = await response.json()
    return result.data.translations.translatedText
  } catch (error) {
    console.log(error)
  }
}
