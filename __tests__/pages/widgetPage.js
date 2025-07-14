/* eslint-disable no-undef */

// pages/widgetPage.js
import '@testing-library/jest-dom'

export class WidgetPage {
  constructor(screen) {
    this.screen = screen
  }

  // Проверить наличие кнопки "Открыть Чат"
  async checkOpenChatButton() {
    await expect(this.screen.getByRole('button', { name: 'Открыть Чат' }))
  }

  // Кликнуть на кнопку "Открыть Чат"
  async clickOpenChatButton(user) {
    await user.click(this.screen.getByRole('button', { name: 'Открыть Чат' }))
  }

  // Проверить наличие кнопки "Начать разговор"
  async checkStartСonversationButton() {
    await expect(this.screen.getByRole('button', { name: 'Начать разговор' }))
  }

  // Кликнуть на кнопку "Начать разговор"
  async clickStartСonversationButton(user) {
    await user.click(
      this.screen.getByRole('button', { name: 'Начать разговор' }),
    )
  }

  // Проверить наличие кнопки "Сменить профессию или трудоустроиться"
  async checkChangeProfessionButton() {
    await expect(
      this.screen.getByRole('button', {
        name: 'Сменить профессию или трудоустроиться',
      }),
    )
  }

  // Кликнуть на кнопку "Сменить профессию или трудоустроиться"
  async clickChangeProfessionButton(user) {
    await user.click(
      this.screen.getByRole('button', {
        name: 'Сменить профессию или трудоустроиться',
      }),
    )
  }

  // Проверить наличие кнопки "Попробовать себя в IT"
  async checkTryITButton() {
    await expect(
      this.screen.getByRole('button', { name: 'Попробовать себя в IT' }),
    )
  }

  // Кликнуть на кнопку "Попробовать себя в IT"
  async clickTryITButton(user) {
    await user.click(
      this.screen.getByRole('button', {
        name: 'Попробовать себя в IT',
      }),
    )
  }

  // Проверить наличие кнопки "Я разработчик, хочу углубить свои знания"
  async checkDeveloperButton() {
    await expect(
      this.screen.getByRole('button', {
        name: 'Я разработчик, хочу углубить свои знания',
      }),
    )
  }

  // Кликнуть на кнопку "Я разработчик, хочу углубить свои знания"
  async clickDeveloperButton(user) {
    await user.click(
      this.screen.getByRole('button', {
        name: 'Я разработчик, хочу углубить свои знания',
      }),
    )
  }

  // Проверить наличие кнопки "Расскажи подробнее"
  async checkTellMoreButton() {
    await expect(
      this.screen.getByRole('button', {
        name: 'Расскажи подробнее',
      }),
    )
  }

  // Кликнуть на кнопку "Расскажи подробнее"
  async clickTellMoreButton(user) {
    await user.click(
      this.screen.getByRole('button', {
        name: 'Расскажи подробнее',
      }),
    )
  }

  // Проверить наличие кнопки "А есть что-нибудь попроще"
  async checkSimplerButton() {
    await expect(
      this.screen.getByRole('button', {
        name: 'А есть что-нибудь попроще',
      }),
    )
  }

  // Кликнуть на кнопку "А есть что-нибудь попроще"
  async clickSimplerButton(user) {
    await user.click(
      this.screen.getByRole('button', {
        name: 'А есть что-нибудь попроще',
      }),
    )
  }

  // Проверить наличие кнопки "Вернуться в начало"
  async checkBackButton() {
    await expect(
      this.screen.getByRole('button', {
        name: 'Вернуться в начало',
      }),
    )
  }

  // Кликнуть на кнопку "Вернуться в начало"
  async clickBackButton(user) {
    await user.click(
      this.screen.getByRole('button', {
        name: 'Вернуться в начало',
      }),
    )
  }

  // Проверить наличие кнопки "Интересно"
  async checkInterstingButton() {
    await expect(
      this.screen.getByRole('button', {
        name: 'Интересно',
      }),
    )
  }

  // Кликнуть на кнопку "Интересно"
  async clickInterstingButton(user) {
    await user.click(
      this.screen.getByRole('button', {
        name: 'Интересно',
      }),
    )
  }

  // Проверить наличие кнопки "А что по поводу смены профессии?"
  async checkAboutChangingProfessionsButton() {
    await expect(
      this.screen.getByRole('button', {
        name: 'А что по поводу смены профессии?',
      }),
    )
  }

  // Кликнуть на кнопку "А что по поводу смены профессии?"
  async clickAboutChangingProfessionsButton(user) {
    await user.click(
      this.screen.getByRole('button', {
        name: 'А что по поводу смены профессии?',
      }),
    )
  }

  // Проверить наличие кнопки "Вернуться назад"
  async checkGoBackButton() {
    await expect(
      this.screen.getByRole('button', {
        name: 'Вернуться назад',
      }),
    )
  }

  // Кликнуть на кнопку "Вернуться назад"
  async clickGoBackButton(user) {
    await user.click(
      this.screen.getByRole('button', {
        name: 'Вернуться назад',
      }),
    )
  }

  // Проверить наличие кнопки "Верни меня в начало"
  async checTakeMeBackButton() {
    await expect(
      this.screen.getByRole('button', {
        name: 'Верни меня в начало',
      }),
    )
  }

  // Кликнуть на кнопку "Верни меня в начало"
  async clickTakeMeBackButton(user) {
    await user.click(
      this.screen.getByRole('button', {
        name: 'Верни меня в начало',
      }),
    )
  }

  // Проверить наличие кнопки "Останусь здесь, запишусь на курс"
  async checStayHereButton() {
    await expect(
      this.screen.getByRole('button', {
        name: 'Останусь здесь, запишусь на курс',
      }),
    )
  }

  // Кликнуть на кнопку "Останусь здесь, запишусь на курс"
  async clickStayHereButton(user) {
    await user.click(
      this.screen.getByRole('button', {
        name: 'Останусь здесь, запишусь на курс',
      }),
    )
  }

  // Кликнуть на кнопку "Close"
  async clickCloseButton(user) {
    await user.click(this.screen.getByLabelText('Close'))
  }
}
