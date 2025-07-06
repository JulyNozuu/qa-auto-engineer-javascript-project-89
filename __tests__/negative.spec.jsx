/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import Widget from '@hexlet/chatbot-v2'
import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import errorSteps from './__fixtures__/errorSteps'

test('Button Open Chat', async () => {
  const user = userEvent.setup()
  render(Widget(errorSteps))
  let mockScroll = (Element.prototype.scrollIntoView = vi.fn())
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await user.click(screen.getByRole('button', { name: 'Начать разговор' }))
  await user.click(screen.getByRole('button', { name: 'Попробовать себя в IT' }))
  await user.click(screen.getByRole('button', { name: '' }))
  await user.click(screen.getByRole('button', { name: 'Сменить профессию или трудоустроиться' }))
  await user.click(screen.getByLabelText('Close'))
  await expect(screen.getByRole('button', { name: 'Открыть Чат' })).toBeVisible()
})
