import Widget from '@hexlet/chatbot-v2'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect, describe, beforeEach } from 'vitest'
import { WidgetPage } from './pages/widgetPage'
import steps from './__fixtures__/steps'
import textConst from './__fixtures__/textsConst'
import errorSteps from './__fixtures__/errorSteps'

describe('Widget positive', () => {
  beforeEach(() => {
    render(Widget(steps))
    // eslint-disable-next-line no-undef
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  test('renders a message', () => {
    const widgetPage = new WidgetPage(screen)
    widgetPage.checkOpenChatButton()
  })

  test('Button Open Chat', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    expect(screen.getByText(textConst.openChat)).toBeVisible()
    widgetPage.checkStartConversationButton()
  })

  test('Start a conversation', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    expect(screen.getByText(textConst.startConversation)).toBeVisible()
    widgetPage.checkChangeProfessionButton()
    widgetPage.checkTryITButton()
    widgetPage.checkDeveloperButton()
  })

  test('Change profession or find employment', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickChangeProfessionButton(user)
    expect(screen.getByText(textConst.changeProfession)).toBeVisible()
    widgetPage.checkTellMoreButton()
    widgetPage.checkSimplerButton()
    widgetPage.checkBackButton()
  })

  test('Try yourself in IT', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickTryITButton(user)
    expect(screen.getByText(textConst.tryIT)).toBeVisible()
    widgetPage.checkInterestingButton()
    widgetPage.checkAboutChangingProfessionsButton()
    widgetPage.checkGoBackButton()
  })

  test('I am a developer, I want to deepen my knowledge', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickDeveloperButton(user)
    expect(screen.getByText(textConst.developerTextFirst)).toBeVisible()
    expect(screen.getByText(textConst.developerTextSecond)).toBeVisible()
    widgetPage.checkTellMoreButton()
    widgetPage.checkTakeMeBackButton()
  })

  test('Tell me more', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickChangeProfessionButton(user)
    await widgetPage.clickTellMoreButton(user)
    expect(screen.getByText(textConst.tellMoreTextFirst)).toBeVisible()
    expect(screen.getByText(textConst.tellMoreTextSecond)).toBeVisible()
    widgetPage.checkStayHereButton()
    widgetPage.checkBackButton()
  })

  test('Something simpler', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickChangeProfessionButton(user)
    await widgetPage.clickSimplerButton(user)
    expect(screen.getByText(textConst.simpler)).toBeVisible()
    widgetPage.checkInterestingButton()
    widgetPage.checkAboutChangingProfessionsButton()
    widgetPage.checkGoBackButton()
  })

  test('Return to top', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickChangeProfessionButton(user)
    await widgetPage.clickBackButton(user)
    widgetPage.checkChangeProfessionButton()
    widgetPage.checkTryITButton()
    widgetPage.checkDeveloperButton()
  })

  test('Stay here and sign up for the course', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickChangeProfessionButton(user)
    await widgetPage.clickTellMoreButton(user)
    await widgetPage.clickStayHereButton(user)
    expect(screen.getByText(textConst.stayHereTextFirst)).toBeVisible()
    expect(screen.getByText(textConst.stayHereTextSecond)).toBeVisible()
    widgetPage.checkStayHereButton()
    widgetPage.checkTakeMeBackButton()
  })

  test('Interesting', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickTryITButton(user)
    await widgetPage.clickInterestingButton(user)
    expect(screen.getByText(textConst.interstingTextFirst)).toBeVisible()
    expect(screen.getByText(textConst.interstingTextSecond)).toBeVisible()
    widgetPage.checkStayHereButton()
    widgetPage.checkBackButton()
  })

  test('What about changing professions?', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickTryITButton(user)
    await widgetPage.clickAboutChangingProfessionsButton(user)
    expect(screen.getByText(textConst.aboutChangingProfessions)).toBeVisible()
    widgetPage.checkTellMoreButton()
    widgetPage.checkSimplerButton()
    widgetPage.checkBackButton()
  })

  test('Go back', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickTryITButton(user)
    await widgetPage.clickGoBackButton(user)
    widgetPage.checkChangeProfessionButton()
    widgetPage.checkTryITButton()
    widgetPage.checkDeveloperButton()
  })

  test('I am a developer, I want to deepen my knowledge - tell me more', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickDeveloperButton(user)
    await widgetPage.clickTellMoreButton(user)
    widgetPage.checkStartConversationButton()
  })

  test('I am a developer, I want to deepen my knowledge - go back', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickDeveloperButton(user)
    await widgetPage.clickTakeMeBackButton(user)
    widgetPage.checkChangeProfessionButton()
    widgetPage.checkTryITButton()
    widgetPage.checkDeveloperButton()
  })

  test('close', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickCloseButton(user)
    widgetPage.checkOpenChatButton()
  })
})

describe('Widget negative', () => {
  test('Button Open Chat', async () => {
    const user = userEvent.setup()
    render(Widget(errorSteps))
    // eslint-disable-next-line no-undef
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
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
    expect(screen.getByRole('button', { name: 'Открыть Чат' })).toBeVisible()
  })
})
