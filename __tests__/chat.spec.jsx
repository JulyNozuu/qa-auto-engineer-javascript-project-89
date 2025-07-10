/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import Widget from '@hexlet/chatbot-v2'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import steps from './__fixtures__/steps'
import text from './__fixtures__/texts'
import { ChatPage } from './pages/chatPage'

beforeEach(() => {
  render(Widget(steps))
  let mockScroll = (Element.prototype.scrollIntoView = vi.fn())
})

test('renders a message', async () => {
  const chatPage = new ChatPage(screen)
  // Проверить наличие кнопки "Открыть Чат"
  await chatPage.checkOpenChatButton()
})

test('Button Open Chat', async () => {
  const user = userEvent.setup()
  const chatPage = new ChatPage(screen)
  // Кликнуть на кнопку "Открыть Чат"
  await chatPage.clickOpenChatButton(user)
  // Проверить наличие текста
  await expect(screen.getByText(text.openChat)).toBeVisible()
  // Проверить наличие кнопки "Начать разговор"
  await chatPage.checkStartСonversationButton()
})

test('Start a conversation', async () => {
  const user = userEvent.setup()
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
})

test('Change profession or find employment', async () => {
  const user = userEvent.setup()
  const chatPage = new ChatPage(screen)
  // Кликнуть на кнопку "Открыть Чат"
  await chatPage.clickOpenChatButton(user)
  // Кликнуть на кнопку "Начать разговор"
  await chatPage.clickStartСonversationButton(user)
  // Кликнуть на кнопку "Сменить профессию или трудоустроиться"
  await chatPage.clickChangeProfessionButton(user)
  // Проверить наличие текста
  await expect(screen.getByText(text.changeProfession)).toBeVisible()
  // Проверить наличие кнопки "Попробовать себя в IT"
  await chatPage.checkTellMoreButton
  // Проверить наличие кнопки "А есть что-нибудь попроще"
  await chatPage.checkSimplerButton
  // Проверить наличие кнопки "Вернуться в начало"
  await chatPage.checkBackButton
})

test('Try yourself in IT', async () => {
  const user = userEvent.setup()
  const chatPage = new ChatPage(screen)
  // Кликнуть на кнопку "Открыть Чат"
  await chatPage.clickOpenChatButton(user)
  // Кликнуть на кнопку "Начать разговор"
  await chatPage.clickStartСonversationButton(user)
  // Кликнуть на кнопку "Попробовать себя в IT"
  await chatPage.clickTryITButton(user)
  // Проверить наличие текста
  await expect(screen.getByText(text.tryIT)).toBeVisible()
  // Проверить наличие кнопки "Интересно"
  await chatPage.checkInterstingButton
  // Проверить наличие кнопки "А что по поводу смены профессии?"
  await chatPage.checkAboutChangingProfessionsButton
  // Проверить наличие кнопки "Вернуться назад"
  await chatPage.checkGoBackButton
})

test('I am a developer, I want to deepen my knowledge', async () => {
  const user = userEvent.setup()
  const chatPage = new ChatPage(screen)
  // Кликнуть на кнопку "Открыть Чат"
  await chatPage.clickOpenChatButton(user)
  // Кликнуть на кнопку "Начать разговор"
  await chatPage.clickStartСonversationButton(user)
  // Кликнуть на кнопку "Я разработчик, хочу углубить свои знания"
  await chatPage.clickDeveloperButton(user)
  // Проверить наличие текста
  await expect(screen.getByText(text.developerTextFirst)).toBeVisible()
  await expect(screen.getByText(text.developerTextSecond)).toBeVisible()
  // Проверить наличие кнопки "Вернуться назад"
  await chatPage.checkTellMoreButton
  // Проверить наличие кнопки "Верни меня в начало"
  await chatPage.checTakeMeBackButton
})

test('Tell me more', async () => {
  const user = userEvent.setup()
  const chatPage = new ChatPage(screen)
  // Кликнуть на кнопку "Открыть Чат"
  await chatPage.clickOpenChatButton(user)
  // Кликнуть на кнопку "Начать разговор"
  await chatPage.clickStartСonversationButton(user)
  // Кликнуть на кнопку "Сменить профессию или трудоустроиться"
  await chatPage.clickChangeProfessionButton(user)
  // Кликнуть на кнопку "Расскажи подробнее"
  await chatPage.clickTellMoreButton(user)
  // Проверить наличие текста
  await expect(screen.getByText(text.tellMoreTextFirst)).toBeVisible()
  await expect(screen.getByText(text.tellMoreTextSecond)).toBeVisible()
  // Проверить наличие кнопки "Останусь здесь, запишусь на курс"
  await chatPage.checStayHereButton
  // Проверить наличие кнопки "Вернуться в начало"
  await chatPage.checkBackButton
})

test('something simpler', async () => {
  const user = userEvent.setup()
  const chatPage = new ChatPage(screen)
  // Кликнуть на кнопку "Открыть Чат"
  await chatPage.clickOpenChatButton(user)
  // Кликнуть на кнопку "Начать разговор"
  await chatPage.clickStartСonversationButton(user)
  // Кликнуть на кнопку "Сменить профессию или трудоустроиться"
  await chatPage.clickChangeProfessionButton(user)
  // Кликнуть на кнопку "А есть что-нибудь попроще"
  await chatPage.clickSimplerButton(user)
  // Проверить наличие текста
  await expect(screen.getByText(text.simpler)).toBeVisible()
  // Проверить наличие кнопки "Интересно"
  await chatPage.checkInterstingButton
  // Проверить наличие кнопки "А что по поводу смены профессии?"
  await chatPage.checkAboutChangingProfessionsButton
  // Проверить наличие кнопки "Вернуться назад"
  await chatPage.checkGoBackButton
})

test('Return to top', async () => {
  const user = userEvent.setup()
  const chatPage = new ChatPage(screen)
  // Кликнуть на кнопку "Открыть Чат"
  await chatPage.clickOpenChatButton(user)
  // Кликнуть на кнопку "Начать разговор"
  await chatPage.clickStartСonversationButton(user)
  // Кликнуть на кнопку "Сменить профессию или трудоустроиться"
  await chatPage.clickChangeProfessionButton(user)
  // Кликнуть на кнопку "Вернуться в начало"
  await chatPage.clickBackButton(user)
  // Проверить наличие кнопки "Сменить профессию или трудоустроиться"
  await chatPage.checkChangeProfessionButton
  // Проверить наличие кнопки "Попробовать себя в IT"
  await chatPage.checkTryITButton
  // Проверить наличие кнопки "Я разработчик, хочу углубить свои знания"
  await chatPage.checkDeveloperButton
})

test('stay here and sign up for the course.', async () => {
  const user = userEvent.setup()
  const chatPage = new ChatPage(screen)
  // Кликнуть на кнопку "Открыть Чат"
  await chatPage.clickOpenChatButton(user)
  // Кликнуть на кнопку "Начать разговор"
  await chatPage.clickStartСonversationButton(user)
  // Кликнуть на кнопку "Сменить профессию или трудоустроиться"
  await chatPage.clickChangeProfessionButton(user)
  // Кликнуть на кнопку "Расскажи подробнее"
  await chatPage.clickTellMoreButton(user)
  // Кликнуть на кнопку "Останусь здесь, запишусь на курс"
  await chatPage.clickStayHereButton(user)
  // Проверить наличие текста
  await expect(screen.getByText(text.stayHereTextFirst)).toBeVisible()
  await expect(screen.getByText(text.stayHereTextSecond)).toBeVisible()
  // Проверить наличие кнопки "Останусь здесь, запишусь на курс"
  await chatPage.checStayHereButton
  // Проверить наличие кнопки "Верни меня в начало"
  await chatPage.checTakeMeBackButton
})

test('intersting', async () => {
  const user = userEvent.setup()
  const chatPage = new ChatPage(screen)
  // Кликнуть на кнопку "Открыть Чат"
  await chatPage.clickOpenChatButton(user)
  // Кликнуть на кнопку "Начать разговор"
  await chatPage.clickStartСonversationButton(user)
  // Кликнуть на кнопку "Попробовать себя в IT"
  await chatPage.clickTryITButton(user)
  // Кликнуть на кнопку "Интересно"
  await chatPage.clickInterstingButton(user)
  // Проверить наличие текста
  await expect(screen.getByText(text.interstingTextFirst)).toBeVisible()
  await expect(screen.getByText(text.interstingTextSecond)).toBeVisible()
  // Проверить наличие кнопки "Останусь здесь, запишусь на курс"
  await chatPage.checStayHereButton
  // Проверить наличие кнопки "Вернуться в начало"
  await chatPage.checkBackButton
})

test('What about changing professions?', async () => {
  const user = userEvent.setup()
  const chatPage = new ChatPage(screen)
  // Кликнуть на кнопку "Открыть Чат"
  await chatPage.clickOpenChatButton(user)
  // Кликнуть на кнопку "Начать разговор"
  await chatPage.clickStartСonversationButton(user)
  // Кликнуть на кнопку "Попробовать себя в IT"
  await chatPage.clickTryITButton(user)
  // Кликнуть на кнопку "А что по поводу смены профессии?"
  await chatPage.clickAboutChangingProfessionsButton(user)
  // Проверить наличие текста
  await expect(screen.getByText(text.aboutChangingProfessions)).toBeVisible()
  // Проверить наличие кнопки "Расскажи подробнее"
  await chatPage.checkTellMoreButton
  // Проверить наличие кнопки "А есть что-нибудь попроще"
  await chatPage.checkSimplerButton
  // Проверить наличие кнопки "Вернуться в начало"
  await chatPage.checkBackButton
})

test('Go back', async () => {
  const user = userEvent.setup()
  const chatPage = new ChatPage(screen)
  // Кликнуть на кнопку "Открыть Чат"
  await chatPage.clickOpenChatButton(user)
  // Кликнуть на кнопку "Начать разговор"
  await chatPage.clickStartСonversationButton(user)
  // Кликнуть на кнопку "Попробовать себя в IT"
  await chatPage.clickTryITButton(user)
  // Кликнуть на кнопку "Вернуться назад"
  await chatPage.clickGoBackButton(user)
  // Проверить наличие кнопки "Сменить профессию или трудоустроиться"
  await chatPage.checkChangeProfessionButton
  // Проверить наличие кнопки "Попробовать себя в IT"
  await chatPage.checkTryITButton
  // Проверить наличие кнопки "Я разработчик, хочу углубить свои знания"
  await chatPage.checkDeveloperButton
})

test('I am a developer, I want to deepen my knowledge - tell me more', async () => {
  const user = userEvent.setup()
  const chatPage = new ChatPage(screen)
  // Кликнуть на кнопку "Открыть Чат"
  await chatPage.clickOpenChatButton(user)
  // Кликнуть на кнопку "Начать разговор"
  await chatPage.clickStartСonversationButton(user)
  // Проверить наличие кнопки "Я разработчик, хочу углубить свои знания"
  await chatPage.clickDeveloperButton(user)
  // Кликнуть на кнопку "Расскажи подробнее"
  await chatPage.clickTellMoreButton(user)
  // Проверить наличие кнопки "Начать разговор"
  await chatPage.checkStartСonversationButton
})

test('I am a developer, I want to deepen my knowledge - go back', async () => {
  const user = userEvent.setup()
  const chatPage = new ChatPage(screen)
  // Кликнуть на кнопку "Открыть Чат"
  await chatPage.clickOpenChatButton(user)
  // Кликнуть на кнопку "Начать разговор"
  await chatPage.clickStartСonversationButton(user)
  // Проверить наличие кнопки "Я разработчик, хочу углубить свои знания"
  await chatPage.clickDeveloperButton(user)
  // Кликнуть на кнопку "Верни меня в начало"
  await chatPage.clickTakeMeBackButton(user)
  // Проверить наличие кнопки "Сменить профессию или трудоустроиться"
  await chatPage.checkChangeProfessionButton
  // Проверить наличие кнопки "Попробовать себя в IT"
  await chatPage.checkTryITButton
  // Проверить наличие кнопки "Я разработчик, хочу углубить свои знания"
  await chatPage.checkDeveloperButton
})

test('close', async () => {
  const user = userEvent.setup()
  const chatPage = new ChatPage(screen)
  // Кликнуть на кнопку "Открыть Чат"
  await chatPage.clickOpenChatButton(user)
  // Кликнуть на кнопку "Close"
  await chatPage.clickCloseButton(user)
  // Проверить наличие кнопки "Открыть Чат"
  await chatPage.checkOpenChatButton
})
