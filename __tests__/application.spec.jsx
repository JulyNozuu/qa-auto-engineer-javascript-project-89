/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import App from '../src/App'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { AuthorizationPage } from './pages/authorizationPage'
import React from 'react'
import { ChatPage } from './pages/chatPage'
import text from './__fixtures__/texts'

beforeEach(() => {
  render(<App />)
})

test('renders a form', async () => {
  const user = userEvent.setup()
  const authorizationPage = new AuthorizationPage(screen)
  await authorizationPage.checkRegisterButton
})

test('fill a form', async () => {
  const user = userEvent.setup()
  const authorizationPage = new AuthorizationPage(screen)
  // Проверить заполение поля Email
  await authorizationPage.inputEmailField(user, 'test@mail.ru')
  expect(authorizationPage.inputEmail).toHaveValue('test@mail.ru')
  // Проверить заполение поля Пароль
  await authorizationPage.inputPassField(user, 'passport')
  expect(authorizationPage.inputPass).toHaveValue('passport')
  // Проверить заполение поля Пароль
  await authorizationPage.inputAdresField(user, 'Тест')
  expect(authorizationPage.inputAdres).toHaveValue('Тест')
  // Проверить заполение поля Город
  await authorizationPage.inputCityField(user, 'Город')
  expect(authorizationPage.inputCity).toHaveValue('Город')
  // Проверить заполение поля Страна
  await authorizationPage.selectCountryField(user, ['Россия'])
  expect(authorizationPage.selectCountry).toHaveValue('Россия')
  // Проверить выбор чек-бокса "Принять правила"
  expect(authorizationPage.checkbox).toBeInTheDocument()
  await authorizationPage.selectcheckboxField(user)
  // Проверить клик по кнопке "Зарегистрироваться"
  await authorizationPage.clickRegisterButton(user)
  // Проверить наличие кнопки "Назад"
  await authorizationPage.checkBackButton
  // Кликнуть на кнопку "Назад"
  await authorizationPage.clickBackButton(user)
  // Проверить наличие кнопки "Зарегистрироваться"
  await authorizationPage.checkRegisterButton
})

test('chat integration', async () => {
  const user = userEvent.setup()
  let mockScroll = (Element.prototype.scrollIntoView = vi.fn())
  const chatPage = new ChatPage(screen)
  // Кликнуть на кнопку "Открыть Чат"
  await chatPage.clickOpenChatButton(user)
  // Кликнуть на кнопку "Начать разговор"
  await chatPage.clickStartСonversationButton(user)
  // Проверить наличие текста
  await expect(screen.getByText(text.startConversation)).toBeVisible()
  // Проверить наличие кнопки "Сменить профессию или трудоустроиться"
  await chatPage.checkChangeProfessionButton
  // Проверить наличие кнопки "Попробовать себя в IT"
  await chatPage.checkTryITButton
  // Проверить наличие кнопки "Я разработчик, хочу углубить свои знания"
  await chatPage.checkDeveloperButton
  // Кликнуть на кнопку "Close"
  await chatPage.clickCloseButton(user)
  // Проверить наличие кнопки "Открыть Чат"
  await chatPage.checkOpenChatButton
})
