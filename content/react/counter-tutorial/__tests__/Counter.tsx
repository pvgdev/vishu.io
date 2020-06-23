import {queries} from '@testing-library/dom'
import React from 'react'
import ReactDOM from 'react-dom'

import Counter from '../Counter'

test('render the Counter component', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Counter />, div)
})
