/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// import '@hexlet/chatbot-v2/styles'
import Widget from '@hexlet/chatbot-v2'
// import steps from '@hexlet/chatbot-v2/example-steps';
// import '@hexlet/chatbot-v2/styles';
import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import steps from './__fixtures__/steps'

test('renders a message', () => {
  const { getByRole } = render(Widget(steps))
  expect(getByRole('button', { name: 'Открыть Чат' }),
  ).toBeVisible()
})

test('Button Open Chat', async () => {
  const user = userEvent.setup()
  render(Widget(steps))
  let mockScroll = Element.prototype.scrollIntoView = vi.fn()
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await expect(screen.getByText('Привет! Я ваш виртуальный помощник. Нажмите "Начать разговор", чтобы открыть чат')).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Начать разговор' })).toBeVisible()
})

test('Start a conversation', async () => {
  const user = userEvent.setup()
  render(Widget(steps))
  let mockScroll = Element.prototype.scrollIntoView = vi.fn()
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await user.click(screen.getByRole('button', { name: 'Начать разговор' }))
  await expect(screen.getByText('Помогу вам выбрать подходящий курс. Выбирайте категорию вопроса, и буквально через пару шагов я смогу рассказать вам то, что нужно.')).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Сменить профессию или трудоустроиться' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Попробовать себя в IT' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Я разработчик, хочу углубить свои знания' })).toBeVisible()
})

test('Change profession or find employment', async () => {
  const user = userEvent.setup()
  render(Widget(steps))
  let mockScroll = Element.prototype.scrollIntoView = vi.fn()
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await user.click(screen.getByRole('button', { name: 'Начать разговор' }))
  await user.click(screen.getByRole('button', { name: 'Сменить профессию или трудоустроиться' }))
  await expect(screen.getByText('У нас есть программы обучения новой профессии. Мы постоянно мониторим, какие компетенции востребованы на рынке, а учебные программы строим в соответствии ними. Учиться можно онлайн в удобном темпе без дедлайнов. К концу обучения у вас будет портфолио на GitHub. А к трудоустройству поможет подготовиться Карьерный трек')).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Расскажи подробнее' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'А есть что-нибудь попроще' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Вернуться в начало' })).toBeVisible()
})

test('Try yourself in IT', async () => {
  const user = userEvent.setup()
  render(Widget(steps))
  let mockScroll = Element.prototype.scrollIntoView = vi.fn()
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await user.click(screen.getByRole('button', { name: 'Начать разговор' }))
  await user.click(screen.getByRole('button', { name: 'Попробовать себя в IT' }))
  await expect(screen.getByText('У нас есть подготовительные курсы, которые длятся всего 2 недели.За это время вы знакомитесь с основами программирвоания, пробуете его на практике и плавной подойдете к старту обучения в основной программе. Все это под руководством опытного программиста. Он поможет, если будут сложности. Курс стоит всего 990 рублей')).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Интересно' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'А что по поводу смены профессии?' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Вернуться назад' })).toBeVisible()
})

test('I am a developer, I want to deepen my knowledge', async () => {
  const user = userEvent.setup()
  render(Widget(steps))
  let mockScroll = Element.prototype.scrollIntoView = vi.fn()
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await user.click(screen.getByRole('button', { name: 'Начать разговор' }))
  await user.click(screen.getByRole('button', { name: 'Я разработчик, хочу углубить свои знания' }))
  await expect(screen.getByText('Отлично! Есть несколько вариантов обучения для тех, кто хочет углубить знания. Во-первых, курсы повышения квалификации. Часто их оплачивает работодатель. Если вам кажется, что такой вариант возможен, поделитесь с ним этой ссылкой: https://b2b.hexlet.io/.')).toBeVisible()
  await expect(screen.getByText('Во-вторых, возможно индивидуальное обучение. Вы с наставником-разработчиком составляете план и углубляетесь в темы, которые хотите изучить подробнее.')).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Расскажи подробнее' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Верни меня в начало' })).toBeVisible()
})

test('Tell me more', async () => {
  const user = userEvent.setup()
  render(Widget(steps))
  let mockScroll = Element.prototype.scrollIntoView = vi.fn()
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await user.click(screen.getByRole('button', { name: 'Начать разговор' }))
  await user.click(screen.getByRole('button', { name: 'Сменить профессию или трудоустроиться' }))
  await user.click(screen.getByRole('button', { name: 'Расскажи подробнее' }))
  await expect(screen.getByText('В Хекслете можно освоить JavaScript, Python, PHP, верстку, Java, DevOps и Ruby on Rails. Также есть программы обучения по тестированию веб-приложений и аналитике данных. https://ru.hexlet.io/courses#preparatory')).toBeVisible()
  await expect(screen.getByText(/Только не тратьте много времени на выбор языка*/)).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Останусь здесь, запишусь на курс' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Вернуться в начало' })).toBeVisible()
})

test('something simpler', async () => {
  const user = userEvent.setup()
  render(Widget(steps))
  let mockScroll = Element.prototype.scrollIntoView = vi.fn()
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await user.click(screen.getByRole('button', { name: 'Начать разговор' }))
  await user.click(screen.getByRole('button', { name: 'Сменить профессию или трудоустроиться' }))
  await user.click(screen.getByRole('button', { name: 'А есть что-нибудь попроще' }))
  await expect(screen.getByText('У нас есть подготовительные курсы, которые длятся всего 2 недели.За это время вы знакомитесь с основами программирвоания, пробуете его на практике и плавной подойдете к старту обучения в основной программе. Все это под руководством опытного программиста. Он поможет, если будут сложности. Курс стоит всего 990 рублей')).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Интересно' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'А что по поводу смены профессии?' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Вернуться назад' })).toBeVisible()
})

test('Return to top', async () => {
  const user = userEvent.setup()
  render(Widget(steps))
  let mockScroll = Element.prototype.scrollIntoView = vi.fn()
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await user.click(screen.getByRole('button', { name: 'Начать разговор' }))
  await user.click(screen.getByRole('button', { name: 'Сменить профессию или трудоустроиться' }))
  await user.click(screen.getByRole('button', { name: 'Вернуться в начало' }))
  // await expect(screen.getByText('Помогу вам выбрать подходящий курс. Выбирайте категорию вопроса, и буквально через пару шагов я смогу рассказать вам то, что нужно.')[1]).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Сменить профессию или трудоустроиться' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Попробовать себя в IT' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Я разработчик, хочу углубить свои знания' })).toBeVisible()
})

test('stay here and sign up for the course.', async () => {
  const user = userEvent.setup()
  render(Widget(steps))
  let mockScroll = Element.prototype.scrollIntoView = vi.fn()
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await user.click(screen.getByRole('button', { name: 'Начать разговор' }))
  await user.click(screen.getByRole('button', { name: 'Сменить профессию или трудоустроиться' }))
  await user.click(screen.getByRole('button', { name: 'Расскажи подробнее' }))
  await user.click(screen.getByRole('button', { name: 'Останусь здесь, запишусь на курс' }))
  await expect(screen.getByText('Ага, дублирую ссылку https://ru.hexlet.io/courses#preparatory')).toBeVisible()
  await expect(screen.getByText(/Был рад знакомству! Увидимся */)).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Останусь здесь, запишусь на курс' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Верни меня в начало' })).toBeVisible()
})

test('intersting', async () => {
  const user = userEvent.setup()
  render(Widget(steps))
  let mockScroll = Element.prototype.scrollIntoView = vi.fn()
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await user.click(screen.getByRole('button', { name: 'Начать разговор' }))
  await user.click(screen.getByRole('button', { name: 'Попробовать себя в IT' }))
  await user.click(screen.getByRole('button', { name: 'Интересно' }))
  await expect(screen.getByText('В Хекслете можно освоить JavaScript, Python, PHP, верстку, Java, DevOps и Ruby on Rails. Также есть программы обучения по тестированию веб-приложений и аналитике данных. https://ru.hexlet.io/courses#preparatory')).toBeVisible()
  await expect(screen.getByText(/Только не тратьте много времени на выбор языка*/)).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Останусь здесь, запишусь на курс' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Вернуться в начало' })).toBeVisible()
})

test('intersting', async () => {
  const user = userEvent.setup()
  render(Widget(steps))
  let mockScroll = Element.prototype.scrollIntoView = vi.fn()
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await user.click(screen.getByRole('button', { name: 'Начать разговор' }))
  await user.click(screen.getByRole('button', { name: 'Попробовать себя в IT' }))
  await user.click(screen.getByRole('button', { name: 'А что по поводу смены профессии?' }))
  await expect(screen.getByText('У нас есть программы обучения новой профессии. Мы постоянно мониторим, какие компетенции востребованы на рынке, а учебные программы строим в соответствии ними. Учиться можно онлайн в удобном темпе без дедлайнов. К концу обучения у вас будет портфолио на GitHub. А к трудоустройству поможет подготовиться Карьерный трек')).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Расскажи подробнее' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'А есть что-нибудь попроще' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Вернуться в начало' })).toBeVisible()
})

test('Go back', async () => {
  const user = userEvent.setup()
  render(Widget(steps))
  let mockScroll = Element.prototype.scrollIntoView = vi.fn()
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await user.click(screen.getByRole('button', { name: 'Начать разговор' }))
  await user.click(screen.getByRole('button', { name: 'Попробовать себя в IT' }))
  await user.click(screen.getByRole('button', { name: 'Вернуться назад' }))
  await expect(screen.getByRole('button', { name: 'Сменить профессию или трудоустроиться' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Попробовать себя в IT' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Я разработчик, хочу углубить свои знания' })).toBeVisible()
})

test('I am a developer, I want to deepen my knowledge - tell me more', async () => {
  const user = userEvent.setup()
  render(Widget(steps))
  let mockScroll = Element.prototype.scrollIntoView = vi.fn()
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await user.click(screen.getByRole('button', { name: 'Начать разговор' }))
  await user.click(screen.getByRole('button', { name: 'Я разработчик, хочу углубить свои знания' }))
  await user.click(screen.getByRole('button', { name: 'Расскажи подробнее' }))
  await expect(screen.getByRole('button', { name: 'Начать разговор' })).toBeVisible()
})

test('I am a developer, I want to deepen my knowledge - go back', async () => {
  const user = userEvent.setup()
  render(Widget(steps))
  let mockScroll = Element.prototype.scrollIntoView = vi.fn()
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await user.click(screen.getByRole('button', { name: 'Начать разговор' }))
  await user.click(screen.getByRole('button', { name: 'Я разработчик, хочу углубить свои знания' }))
  await user.click(screen.getByRole('button', { name: 'Верни меня в начало' }))
  await expect(screen.getByRole('button', { name: 'Сменить профессию или трудоустроиться' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Попробовать себя в IT' })).toBeVisible()
  await expect(screen.getByRole('button', { name: 'Я разработчик, хочу углубить свои знания' })).toBeVisible()
})

test('close', async () => {
  const user = userEvent.setup()
  render(Widget(steps))
  let mockScroll = Element.prototype.scrollIntoView = vi.fn()
  await user.click(screen.getByRole('button', { name: 'Открыть Чат' }))
  await user.click(screen.getByLabelText('Close'))
  await expect(screen.getByRole('button', { name: 'Открыть Чат' })).toBeVisible()
})
