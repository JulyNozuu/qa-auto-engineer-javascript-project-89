/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import Widget from '@hexlet/chatbot-v2'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import steps from './__fixtures__/steps'
import text from './__fixtures__/texts'
import { WidgetPage } from './pages/widgetPage'
import errorSteps from './__fixtures__/errorSteps'

describe('Widget positive', () => {
  beforeEach(() => {
    render(Widget(steps))
    let mockScroll = (Element.prototype.scrollIntoView = vi.fn())
  })

  test('renders a message', async () => {
    const widgetPage = new WidgetPage(screen)
    await widgetPage.checkOpenChatButton()
  })

  test('Button Open Chat', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await expect(screen.getByText(text.openChat)).toBeVisible()
    await widgetPage.checkStartСonversationButton()
  })

  test('Start a conversation', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartСonversationButton(user)
    await expect(screen.getByText(text.startConversation)).toBeVisible()
    await widgetPage.checkChangeProfessionButton
    await widgetPage.checkTryITButton
    await widgetPage.checkDeveloperButton
  })

  test('Change profession or find employment', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartСonversationButton(user)
    await widgetPage.clickChangeProfessionButton(user)
    await expect(screen.getByText(text.changeProfession)).toBeVisible()
    await widgetPage.checkTellMoreButton
    await widgetPage.checkSimplerButton
    await widgetPage.checkBackButton
  })

  test('Try yourself in IT', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartСonversationButton(user)
    await widgetPage.clickTryITButton(user)
    await expect(screen.getByText(text.tryIT)).toBeVisible()
    await widgetPage.checkInterstingButton
    await widgetPage.checkAboutChangingProfessionsButton
    await widgetPage.checkGoBackButton
  })

  test('I am a developer, I want to deepen my knowledge', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartСonversationButton(user)
    await widgetPage.clickDeveloperButton(user)
    await expect(screen.getByText(text.developerTextFirst)).toBeVisible()
    await expect(screen.getByText(text.developerTextSecond)).toBeVisible()
    await widgetPage.checkTellMoreButton
    await widgetPage.checTakeMeBackButton
  })

  test('Tell me more', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartСonversationButton(user)
    await widgetPage.clickChangeProfessionButton(user)
    await widgetPage.clickTellMoreButton(user)
    await expect(screen.getByText(text.tellMoreTextFirst)).toBeVisible()
    await expect(screen.getByText(text.tellMoreTextSecond)).toBeVisible()
    await widgetPage.checStayHereButton
    await widgetPage.checkBackButton
  })

  test('something simpler', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartСonversationButton(user)
    await widgetPage.clickChangeProfessionButton(user)
    await widgetPage.clickSimplerButton(user)
    await expect(screen.getByText(text.simpler)).toBeVisible()
    await widgetPage.checkInterstingButton
    await widgetPage.checkAboutChangingProfessionsButton
    await widgetPage.checkGoBackButton
  })

  test('Return to top', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartСonversationButton(user)
    await widgetPage.clickChangeProfessionButton(user)
    await widgetPage.clickBackButton(user)
    await widgetPage.checkChangeProfessionButton
    await widgetPage.checkTryITButton
    await widgetPage.checkDeveloperButton
  })

  test('stay here and sign up for the course.', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartСonversationButton(user)
    await widgetPage.clickChangeProfessionButton(user)
    await widgetPage.clickTellMoreButton(user)
    await widgetPage.clickStayHereButton(user)
    await expect(screen.getByText(text.stayHereTextFirst)).toBeVisible()
    await expect(screen.getByText(text.stayHereTextSecond)).toBeVisible()
    await widgetPage.checStayHereButton
    await widgetPage.checTakeMeBackButton
  })

  test('intersting', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartСonversationButton(user)
    await widgetPage.clickTryITButton(user)
    await widgetPage.clickInterstingButton(user)
    await expect(screen.getByText(text.interstingTextFirst)).toBeVisible()
    await expect(screen.getByText(text.interstingTextSecond)).toBeVisible()
    await widgetPage.checStayHereButton
    await widgetPage.checkBackButton
  })

  test('What about changing professions?', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartСonversationButton(user)
    await widgetPage.clickTryITButton(user)
    await widgetPage.clickAboutChangingProfessionsButton(user)
    await expect(screen.getByText(text.aboutChangingProfessions)).toBeVisible()
    await widgetPage.checkTellMoreButton
    await widgetPage.checkSimplerButton
    await widgetPage.checkBackButton
  })

  test('Go back', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartСonversationButton(user)
    await widgetPage.clickTryITButton(user)
    await widgetPage.clickGoBackButton(user)
    await widgetPage.checkChangeProfessionButton
    await widgetPage.checkTryITButton
    await widgetPage.checkDeveloperButton
  })

  test('I am a developer, I want to deepen my knowledge - tell me more', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartСonversationButton(user)
    await widgetPage.clickDeveloperButton(user)
    await widgetPage.clickTellMoreButton(user)
    await widgetPage.checkStartСonversationButton
  })

  test('I am a developer, I want to deepen my knowledge - go back', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartСonversationButton(user)
    await widgetPage.clickDeveloperButton(user)
    await widgetPage.clickTakeMeBackButton(user)
    await widgetPage.checkChangeProfessionButton
    await widgetPage.checkTryITButton
    await widgetPage.checkDeveloperButton
  })

  test('close', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickCloseButton(user)
    await widgetPage.checkOpenChatButton
  })
})

describe('Widget negative', () => {
  test('Button Open Chat', async () => {
    const user = userEvent.setup()
    render(Widget(errorSteps))
    let mockScroll = (Element.prototype.scrollIntoView = vi.fn())
    await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
    await user.click(screen.getByRole('button', { name: 'Начать разговор' }))
    await user.click(
      screen.getByRole('button', { name: 'Попробовать себя в IT' }),
    )
    await user.click(screen.getByRole('button', { name: '' }))
    await user.click(
      screen.getByRole('button', {
        name: 'Сменить профессию или трудоустроиться',
      }),
    )
    await user.click(screen.getByLabelText('Close'))
    await expect(
      screen.getByRole('button', { name: 'Открыть Чат' }),
    ).toBeVisible()
  })
})
