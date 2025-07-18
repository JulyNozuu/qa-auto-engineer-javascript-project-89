import { expect } from 'vitest'
import textConst from '../__fixtures__/textsConst'

// pages/widgetPage.js
import '@testing-library/jest-dom'

export class WidgetPage {
  constructor(screen) {
    this.screen = screen
  }

  checkOpenChatButton() {
    expect(this.screen.getByRole('button', { name: textConst.openChatButton }))
  }

  async clickOpenChatButton(user) {
    await user.click(
      this.screen.getByRole('button', { name: textConst.openChatButton }),
    )
  }

  checkStartConversationButton() {
    expect(
      this.screen.getByRole('button', {
        name: textConst.startConversationButton,
      }),
    )
  }

  async clickStartConversationButton(user) {
    await user.click(
      this.screen.getByRole('button', {
        name: textConst.startConversationButton,
      }),
    )
  }

  checkChangeProfessionButton() {
    expect(
      this.screen.getByRole('button', {
        name: textConst.changeProfessionButton,
      }),
    )
  }

  async clickChangeProfessionButton(user) {
    await user.click(
      this.screen.getByRole('button', {
        name: textConst.changeProfessionButton,
      }),
    )
  }

  checkTryITButton() {
    expect(this.screen.getByRole('button', { name: textConst.tryITButton }))
  }

  async clickTryITButton(user) {
    await user.click(
      this.screen.getByRole('button', { name: textConst.tryITButton }),
    )
  }

  checkDeveloperButton() {
    expect(
      this.screen.getByRole('button', {
        name: textConst.developerButton,
      }),
    )
  }

  async clickDeveloperButton(user) {
    await user.click(
      this.screen.getByRole('button', {
        name: textConst.developerButton,
      }),
    )
  }

  checkTellMoreButton() {
    expect(this.screen.getByRole('button', { name: textConst.tellMoreButton }))
  }

  async clickTellMoreButton(user) {
    await user.click(
      this.screen.getByRole('button', { name: textConst.tellMoreButton }),
    )
  }

  checkSimplerButton() {
    expect(
      this.screen.getByRole('button', { name: 'А есть что-нибудь попроще' }),
    )
  }

  async clickSimplerButton(user) {
    await user.click(
      this.screen.getByRole('button', { name: textConst.simplerButton }),
    )
  }

  checkBackButton() {
    expect(this.screen.getByRole('button', { name: textConst.backButton }))
  }

  async clickBackButton(user) {
    await user.click(
      this.screen.getByRole('button', { name: textConst.backButton }),
    )
  }

  checkInterestingButton() {
    expect(
      this.screen.getByRole('button', { name: textConst.interestingButton }),
    )
  }

  async clickInterestingButton(user) {
    await user.click(
      this.screen.getByRole('button', { name: textConst.interestingButton }),
    )
  }

  checkAboutChangingProfessionsButton() {
    expect(
      this.screen.getByRole('button', {
        name: textConst.aboutChangingProfessionsButton,
      }),
    )
  }

  async clickAboutChangingProfessionsButton(user) {
    await user.click(
      this.screen.getByRole('button', {
        name: textConst.aboutChangingProfessionsButton,
      }),
    )
  }

  checkGoBackButton() {
    expect(this.screen.getByRole('button', { name: textConst.goBackButton }))
  }

  async clickGoBackButton(user) {
    await user.click(
      this.screen.getByRole('button', { name: textConst.goBackButton }),
    )
  }

  checkTakeMeBackButton() {
    expect(
      this.screen.getByRole('button', { name: textConst.takeMeBackButton }),
    )
  }

  async clickTakeMeBackButton(user) {
    await user.click(
      this.screen.getByRole('button', { name: textConst.takeMeBackButton }),
    )
  }

  checkStayHereButton() {
    expect(
      this.screen.getByRole('button', {
        name: textConst.stayHereButton,
      }),
    )
  }

  async clickStayHereButton(user) {
    await user.click(
      this.screen.getByRole('button', {
        name: textConst.stayHereButton,
      }),
    )
  }

  async clickCloseButton(user) {
    await user.click(this.screen.getByLabelText(textConst.closeButton))
  }
}
