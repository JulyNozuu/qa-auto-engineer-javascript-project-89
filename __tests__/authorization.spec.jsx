/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
// import '@hexlet/chatbot-v2/styles';
import App from '../src/App'
// import '@hexlet/chatbot-v2/styles';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'

test('renders a form', async () => {
  const user = userEvent.setup()
  render(<App />)
  await expect(screen.getByText('Зарегистрироваться')).toBeVisible()
})

test('fill a form', async () => {
  const user = userEvent.setup()
  render(<App />)
  const inputEmail = screen.getByPlaceholderText('Email')
  await userEvent.type(inputEmail, 'test@mail.ru')
  expect(inputEmail).toHaveValue('test@mail.ru')
  const inputPass = screen.getByPlaceholderText('Пароль')
  await userEvent.type(inputPass, 'passport')
  expect(inputPass).toHaveValue('passport')
  const inputAdres = screen.getByPlaceholderText('Невский проспект, 12')
  await userEvent.type(inputAdres, 'Тест')
  expect(inputAdres).toHaveValue('Тест')
  const inputCity = screen.getByLabelText('Город')
  await userEvent.type(inputCity, 'Город')
  expect(inputCity).toHaveValue('Город')
  const selectCountry = screen.getByLabelText('Страна')
  await userEvent.selectOptions(selectCountry, ['Россия'])
  const checkbox = screen.getByRole('checkbox', { name: 'Принять правила' })
  expect(checkbox).toBeInTheDocument()
  userEvent.click(checkbox)
  await user.click(screen.getByRole('button', { name: 'Зарегистрироваться' }))
  await expect(screen.getByRole('button', { name: 'Назад' })).toBeVisible()
  await user.click(screen.getByRole('button', { name: 'Назад' }))
  await expect(screen.getByRole('button', { name: 'Зарегистрироваться' })).toBeVisible()
})
