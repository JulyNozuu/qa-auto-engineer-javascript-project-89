/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import Widget from "@hexlet/chatbot-v2";
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";
import steps from "./__fixtures__/steps";
import text from "./__fixtures__/texts";

beforeEach(() => {
  let mockScroll = (Element.prototype.scrollIntoView = vi.fn());
});

test("renders a message", () => {
  const { getByRole } = render(Widget(steps));
  expect(getByRole("button", { name: "Открыть Чат" })).toBeVisible();
});

test("Button Open Chat", async () => {
  const user = userEvent.setup();
  render(Widget(steps));
  await user.click(screen.getByRole("button", { name: "Открыть Чат" }));
  await expect(screen.getByText(text.openChat)).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Начать разговор" })
  ).toBeVisible();
});

test("Start a conversation", async () => {
  const user = userEvent.setup();
  render(Widget(steps));
  await user.click(screen.getByRole("button", { name: "Открыть Чат" }));
  await user.click(screen.getByRole("button", { name: "Начать разговор" }));
  await expect(screen.getByText(text.startConversation)).toBeVisible();
  await expect(
    screen.getByRole("button", {
      name: "Сменить профессию или трудоустроиться",
    })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Попробовать себя в IT" })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", {
      name: "Я разработчик, хочу углубить свои знания",
    })
  ).toBeVisible();
});

test("Change profession or find employment", async () => {
  const user = userEvent.setup();
  render(Widget(steps));
  await user.click(screen.getByRole("button", { name: "Открыть Чат" }));
  await user.click(screen.getByRole("button", { name: "Начать разговор" }));
  await user.click(
    screen.getByRole("button", {
      name: "Сменить профессию или трудоустроиться",
    })
  );
  await expect(screen.getByText(text.changeProfession)).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Расскажи подробнее" })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "А есть что-нибудь попроще" })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Вернуться в начало" })
  ).toBeVisible();
});

test("Try yourself in IT", async () => {
  const user = userEvent.setup();
  render(Widget(steps));
  await user.click(screen.getByRole("button", { name: "Открыть Чат" }));
  await user.click(screen.getByRole("button", { name: "Начать разговор" }));
  await user.click(
    screen.getByRole("button", { name: "Попробовать себя в IT" })
  );
  await expect(screen.getByText(text.tryIT)).toBeVisible();
  await expect(screen.getByRole("button", { name: "Интересно" })).toBeVisible();
  await expect(screen.getByRole("button", { name: "А что по поводу смены профессии?" })).toBeVisible();
  await expect(screen.getByRole("button", { name: "Вернуться назад" })).toBeVisible();
});

test("I am a developer, I want to deepen my knowledge", async () => {
  const user = userEvent.setup();
  render(Widget(steps));
  await user.click(screen.getByRole("button", { name: "Открыть Чат" }));
  await user.click(screen.getByRole("button", { name: "Начать разговор" }));
  await user.click(
    screen.getByRole("button", {
      name: "Я разработчик, хочу углубить свои знания",
    })
  );
  await expect(screen.getByText(text.developerTextFirst)).toBeVisible();
  await expect(screen.getByText(text.developerTextSecond)).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Расскажи подробнее" })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Верни меня в начало" })
  ).toBeVisible();
});

test("Tell me more", async () => {
  const user = userEvent.setup();
  render(Widget(steps));
  await user.click(screen.getByRole("button", { name: "Открыть Чат" }));
  await user.click(screen.getByRole("button", { name: "Начать разговор" }));
  await user.click(
    screen.getByRole("button", {
      name: "Сменить профессию или трудоустроиться",
    })
  );
  await user.click(screen.getByRole("button", { name: "Расскажи подробнее" }));
  await expect(screen.getByText(text.tellMoreTextFirst)).toBeVisible();
  await expect(screen.getByText(text.tellMoreTextSecond)).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Останусь здесь, запишусь на курс" })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Вернуться в начало" })
  ).toBeVisible();
});

test("something simpler", async () => {
  const user = userEvent.setup();
  render(Widget(steps));
  await user.click(screen.getByRole("button", { name: "Открыть Чат" }));
  await user.click(screen.getByRole("button", { name: "Начать разговор" }));
  await user.click(
    screen.getByRole("button", {
      name: "Сменить профессию или трудоустроиться",
    })
  );
  await user.click(
    screen.getByRole("button", { name: "А есть что-нибудь попроще" })
  );
  await expect(screen.getByText(text.simpler)).toBeVisible();
  await expect(screen.getByRole("button", { name: "Интересно" })).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "А что по поводу смены профессии?" })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Вернуться назад" })
  ).toBeVisible();
});

test("Return to top", async () => {
  const user = userEvent.setup();
  render(Widget(steps));
  await user.click(screen.getByRole("button", { name: "Открыть Чат" }));
  await user.click(screen.getByRole("button", { name: "Начать разговор" }));
  await user.click(
    screen.getByRole("button", {
      name: "Сменить профессию или трудоустроиться",
    })
  );
  await user.click(screen.getByRole("button", { name: "Вернуться в начало" }));
  await expect(
    screen.getByRole("button", {
      name: "Сменить профессию или трудоустроиться",
    })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Попробовать себя в IT" })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", {
      name: "Я разработчик, хочу углубить свои знания",
    })
  ).toBeVisible();
});

test("stay here and sign up for the course.", async () => {
  const user = userEvent.setup();
  render(Widget(steps));
  await user.click(screen.getByRole("button", { name: "Открыть Чат" }));
  await user.click(screen.getByRole("button", { name: "Начать разговор" }));
  await user.click(
    screen.getByRole("button", {
      name: "Сменить профессию или трудоустроиться",
    })
  );
  await user.click(screen.getByRole("button", { name: "Расскажи подробнее" }));
  await user.click(
    screen.getByRole("button", { name: "Останусь здесь, запишусь на курс" })
  );
  await expect(screen.getByText(text.stayHereTextFirst)).toBeVisible();
  await expect(screen.getByText(text.stayHereTextSecond)).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Останусь здесь, запишусь на курс" })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Верни меня в начало" })
  ).toBeVisible();
});

test("intersting", async () => {
  const user = userEvent.setup();
  render(Widget(steps));
  await user.click(screen.getByRole("button", { name: "Открыть Чат" }));
  await user.click(screen.getByRole("button", { name: "Начать разговор" }));
  await user.click(
    screen.getByRole("button", { name: "Попробовать себя в IT" })
  );
  await user.click(screen.getByRole("button", { name: "Интересно" }));
  await expect(screen.getByText(text.interstingTextFirst)).toBeVisible();
  await expect(screen.getByText(text.interstingTextSecond)).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Останусь здесь, запишусь на курс" })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Вернуться в начало" })
  ).toBeVisible();
});

test("What about changing professions?", async () => {
  const user = userEvent.setup();
  render(Widget(steps));
  await user.click(screen.getByRole("button", { name: "Открыть Чат" }));
  await user.click(screen.getByRole("button", { name: "Начать разговор" }));
  await user.click(
    screen.getByRole("button", { name: "Попробовать себя в IT" })
  );
  await user.click(
    screen.getByRole("button", { name: "А что по поводу смены профессии?" })
  );
  await expect(screen.getByText(text.aboutChangingProfessions)).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Расскажи подробнее" })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "А есть что-нибудь попроще" })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Вернуться в начало" })
  ).toBeVisible();
});

test("Go back", async () => {
  const user = userEvent.setup();
  render(Widget(steps));
  await user.click(screen.getByRole("button", { name: "Открыть Чат" }));
  await user.click(screen.getByRole("button", { name: "Начать разговор" }));
  await user.click(
    screen.getByRole("button", { name: "Попробовать себя в IT" })
  );
  await user.click(screen.getByRole("button", { name: "Вернуться назад" }));
  await expect(
    screen.getByRole("button", {
      name: "Сменить профессию или трудоустроиться",
    })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Попробовать себя в IT" })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", {
      name: "Я разработчик, хочу углубить свои знания",
    })
  ).toBeVisible();
});

test("I am a developer, I want to deepen my knowledge - tell me more", async () => {
  const user = userEvent.setup();
  render(Widget(steps));
  await user.click(screen.getByRole("button", { name: "Открыть Чат" }));
  await user.click(screen.getByRole("button", { name: "Начать разговор" }));
  await user.click(
    screen.getByRole("button", {
      name: "Я разработчик, хочу углубить свои знания",
    })
  );
  await user.click(screen.getByRole("button", { name: "Расскажи подробнее" }));
  await expect(
    screen.getByRole("button", { name: "Начать разговор" })
  ).toBeVisible();
});

test("I am a developer, I want to deepen my knowledge - go back", async () => {
  const user = userEvent.setup();
  render(Widget(steps));
  await user.click(screen.getByRole("button", { name: "Открыть Чат" }));
  await user.click(screen.getByRole("button", { name: "Начать разговор" }));
  await user.click(
    screen.getByRole("button", {
      name: "Я разработчик, хочу углубить свои знания",
    })
  );
  await user.click(screen.getByRole("button", { name: "Верни меня в начало" }));
  await expect(
    screen.getByRole("button", {
      name: "Сменить профессию или трудоустроиться",
    })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", { name: "Попробовать себя в IT" })
  ).toBeVisible();
  await expect(
    screen.getByRole("button", {
      name: "Я разработчик, хочу углубить свои знания",
    })
  ).toBeVisible();
});

test("close", async () => {
  const user = userEvent.setup();
  render(Widget(steps));
  await user.click(screen.getByRole("button", { name: "Открыть Чат" }));
  await user.click(screen.getByLabelText("Close"));
  await expect(
    screen.getByRole("button", { name: "Открыть Чат" })
  ).toBeVisible();
});
