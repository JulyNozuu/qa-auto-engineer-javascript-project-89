import '@hexlet/chatbot-v2/styles'
import {screen} from '@testing-library/dom'
import Widget from '@hexlet/chatbot-v2';
import steps from '@hexlet/chatbot-v2/example-steps';
import '@hexlet/chatbot-v2/styles';
import { test, expect } from 'vitest'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import { debug } from "vitest-preview";

test('renders a message', () => {
  const {getByRole} = render(Widget(steps))
  expect(getByRole('button', {name: 'Открыть Чат'})
  ).toBeVisible()
  screen.debug()
  debug();
})