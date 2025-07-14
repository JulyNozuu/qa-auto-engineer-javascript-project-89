/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import App from '../src/App'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { AppPage } from './pages/appPage'
import React from 'react'
import { WidgetPage } from './pages/widgetPage'
import text from './__fixtures__/texts'

beforeEach(() => {
  render(<App />)
})

test('renders a form', async () => {
  const user = userEvent.setup()
  const appPage = new AppPage(screen)
  await appPage.checkRegisterButton
})

test('fill a form', async () => {
  const user = userEvent.setup()
  const appPage = new AppPage(screen)
  await appPage.inputEmailField(user, 'test@mail.ru')
  expect(appPage.inputEmail).toHaveValue('test@mail.ru')
  await appPage.inputPassField(user, 'passport')
  expect(appPage.inputPass).toHaveValue('passport')
  await appPage.inputAdresField(user, 'Тест')
  expect(appPage.inputAdres).toHaveValue('Тест')
  await appPage.inputCityField(user, 'Город')
  expect(appPage.inputCity).toHaveValue('Город')
  await appPage.selectCountryField(user, ['Россия'])
  expect(appPage.selectCountry).toHaveValue('Россия')
  expect(appPage.checkbox).toBeInTheDocument()
  await appPage.selectcheckboxField(user)
  await appPage.clickRegisterButton(user)
  await appPage.checkBackButton
  await appPage.clickBackButton(user)
  await appPage.checkRegisterButton
})

test('chat integration', async () => {
  const user = userEvent.setup()
  let mockScroll = (Element.prototype.scrollIntoView = vi.fn())
  const widgetPage = new WidgetPage(screen)
  await widgetPage.clickOpenChatButton(user)
  await widgetPage.clickStartСonversationButton(user)
  await expect(screen.getByText(text.startConversation)).toBeVisible()
  await widgetPage.checkChangeProfessionButton
  await widgetPage.checkTryITButton
  await widgetPage.checkDeveloperButton
  await widgetPage.clickCloseButton(user)
  await widgetPage.checkOpenChatButton
})
