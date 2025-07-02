/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// import '@hexlet/chatbot-v2/styles'
// import '@hexlet/chatbot-v2/styles';
import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import App from '../src/App'
import '@testing-library/jest-dom'

test('chat integration', async () => {
  const user = userEvent.setup()
  render(<App />)
  let mockScroll = Element.prototype.scrollIntoView = vi.fn()
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await user.click(screen.getByRole('button', { name: 'Начать разговор' }))
  await expect(screen.getByText('Помогу вам выбрать подходящий курс. Выбирайте категорию вопроса, и буквально через пару шагов я смогу рассказать вам то, что нужно.')).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Сменить профессию или трудоустроиться' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Попробовать себя в IT' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Я разработчик, хочу углубить свои знания' })).toBeVisible()
  await user.click(screen.getByLabelText('Close'))
  await expect(screen.getByRole('button', { name: 'Открыть Чат' })).toBeVisible()
})
