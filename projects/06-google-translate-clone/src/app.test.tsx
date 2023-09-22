import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'
import App from './App'

//todo LEARN HOW TO DO MOCKS IN A TEST
test('The App works as expected', async () => {
  const user = userEvent.setup()
  const app = render(<App />)

  const textAreaFrom = app.getByPlaceholderText('Enter text...')

  await user.type(textAreaFrom, 'Hola mundo')
  const result = await app.findByDisplayValue(
    /Hola mundo/i,
    {},
    { timeout: 5000 }
  )

  expect(result).toBeTruthy()
})
