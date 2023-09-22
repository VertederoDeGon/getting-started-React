import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

type Props = {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const commonStyles = { border: 0, height: '200px', resize: 'none' }

const getPlaceholder = ({
  type,
  loading
}: {
  type: SectionType
  loading?: boolean
}) => {
  if (type === SectionType.From) return 'Enter text...'
  if (loading === true) return 'Loading...'
  return 'Translation.'
}

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const styles =
    type === SectionType.From
      ? commonStyles
      : { ...commonStyles, backgroundColor: '#f2f2f2' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as='textarea' //<- What element should it render
      placeholder={getPlaceholder({ type, loading })}
      onChange={handleChange}
      style={styles}
      value={value}
    />
  )
}
