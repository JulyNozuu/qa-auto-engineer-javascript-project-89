/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// pages/appPage.js
export class AppPage {
  constructor(screen) {
    this.screen = screen
    this.inputEmail = this.screen.getByPlaceholderText('Email')
    this.inputPass = this.screen.getByPlaceholderText('Пароль')
    this.inputAdres = this.screen.getByPlaceholderText('Невский проспект, 12')
    this.inputCity = this.screen.getByLabelText('Город')
    this.selectCountry = this.screen.getByLabelText('Страна')
    this.checkbox = this.screen.getByRole('checkbox', {
      name: 'Принять правила',
    })
  }

  // Заполнить Email
  async inputEmailField(user, query) {
    await user.type(this.inputEmail, query)
  }

  // Заполнить Пароль
  async inputPassField(user, query) {
    await user.type(this.inputPass, query)
  }

  // Заполнить Адрес
  async inputAdresField(user, query) {
    await user.type(this.inputAdres, query)
  }

  // Заполнить Город
  async inputCityField(user, query) {
    await user.type(this.inputCity, query)
  }

  // Выбрать Страна
  async selectCountryField(user, query) {
    await user.selectOptions(this.selectCountry, query)
  }

  // Проставить чек-бокс "Принять правила"
  async selectcheckboxField(user, query) {
    await user.click(this.checkbox)
  }

  // Проверить наличие кнопки "Зарегистрироваться"
  async checkRegisterButton() {
    await expect(
      this.screen.getByRole('button', { name: 'Зарегистрироваться' }),
    )
  }

  // Нажать кнопку "Зарегистрироваться"
  async clickRegisterButton(user) {
    await user.click(
      this.screen.getByRole('button', { name: 'Зарегистрироваться' }),
    )
  }

  // Проверить наличие кнопки "Назад"
  async checkBackButton() {
    await expect(this.screen.getByRole('button', { name: 'Назад' }))
  }

  // Кликнуть на кнопку "Назад"
  async clickBackButton(user) {
    await user.click(this.screen.getByRole('button', { name: 'Назад' }))
  }
}
