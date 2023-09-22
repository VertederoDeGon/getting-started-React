import { Form } from 'react-bootstrap'
// FC : Functional  Component
import React, { type FC } from 'react'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import { FromLanguage, Language, SectionType } from '../types.d'

type Props =
  | {
      type: SectionType.From
      value: FromLanguage
      onChange: (language: FromLanguage) => void
    }
  | {
      type: SectionType.To
      value: Language
      onChange: (language: Language) => void
    }

export const LanguageSelector: FC<Props> = ({ type, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log({ onChangeLanguage: event.target.value })
    onChange(event.target.value as Language)
  }
  return (
    <Form.Select
      aria-label='Select the language'
      value={value}
      onChange={handleChange}
    >
      {type === SectionType.From && (
        <option value={AUTO_LANGUAGE}>Detect Language</option>
      )}
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}
