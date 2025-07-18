import App from '../src/App'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect, beforeEach } from 'vitest'
import { AppPage } from './pages/appPage'
import { WidgetPage } from './pages/widgetPage'
import textConst from './__fixtures__/textsConst'

beforeEach(() => {
  render(<App />)
})

test('renders a form', () => {
  const appPage = new AppPage(screen)
  appPage.checkRegisterButton()
})

test('fill a form', async () => {
  const user = userEvent.setup()
  const appPage = new AppPage(screen)
  await appPage.inputEmailField(user, 'test@mail.ru')
  expect(appPage.inputEmail).toHaveValue('test@mail.ru')
  await appPage.inputPassField(user, 'passport')
  expect(appPage.inputPassword).toHaveValue('passport')
  await appPage.inputAdresField(user, 'Test')
  expect(appPage.inputAddress).toHaveValue('Test')
  await appPage.inputCityField(user, 'City')
  expect(appPage.inputCity).toHaveValue('City')
  await appPage.selectCountryField(user, ['Россия'])
  expect(appPage.selectCountry).toHaveValue('Россия')
  expect(appPage.checkbox).toBeInTheDocument()
  await appPage.selectCheckboxField(user)
  await appPage.clickRegisterButton(user)
  appPage.checkBackButton()
  await appPage.clickBackButton(user)
  appPage.checkRegisterButton()
})

test('chat integration', async () => {
  const user = userEvent.setup()
  // eslint-disable-next-line no-undef
  window.HTMLElement.prototype.scrollIntoView = vi.fn()
  const widgetPage = new WidgetPage(screen)
  await widgetPage.clickOpenChatButton(user)
  await widgetPage.clickStartConversationButton(user)
  expect(screen.getByText(textConst.startConversation)).toBeVisible()
  widgetPage.checkChangeProfessionButton()
  widgetPage.checkTryITButton()
  widgetPage.checkDeveloperButton()
  await widgetPage.clickCloseButton(user)
  widgetPage.checkOpenChatButton()
})
