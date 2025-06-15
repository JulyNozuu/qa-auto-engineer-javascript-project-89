import '@hexlet/chatbot-v2/styles'
import Widget from '@hexlet/chatbot-v2';
import steps from '@hexlet/chatbot-v2/example-steps';
import '@hexlet/chatbot-v2/styles';
import { test, expect } from 'vitest'
import '@testing-library/jest-dom'
import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('renders a message', () => {
  const {getByRole} = render(Widget(steps))
  expect(getByRole('button', {name: 'Открыть Чат'})
  ).toBeVisible()
  screen.debug()
})

test('Button Open Chat', async() => {
  const user = userEvent.setup()
  render(Widget(steps))
  await user.click(screen.getByRole('button', {name: 'Открыть Чат'}))
  screen.debug()
})