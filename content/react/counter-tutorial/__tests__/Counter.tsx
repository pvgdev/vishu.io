import {fireEvent, render} from '@testing-library/react'
import {axe} from 'jest-axe'
import React from 'react'

import {Counter} from '../Counter'

test('Counter component is accessible', async () => {
  const {container} = render(<Counter />)
  expect(await axe(container)).toHaveNoViolations()
})

test('increment and decrement should work properly', () => {
  const {getByLabelText, getByText} = render(<Counter />)

  const counter = getByLabelText(/counter/i)
  expect(counter).toHaveTextContent('0')

  fireEvent.click(getByText('+'))
  expect(counter).toHaveTextContent('1')

  fireEvent.click(getByText('-'))
  expect(counter).toHaveTextContent('0')
})
