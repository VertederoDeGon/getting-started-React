// @ts-check
import { test, expect } from '@playwright/test'

const PREFIX_RANDOM_CAT_IMAGE = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('App shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const initialImageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(
    initialImageSrc?.startsWith(PREFIX_RANDOM_CAT_IMAGE)
  ).toBeTruthy()

  console.log(initialImageSrc)

  const button = await page.getByRole('button')
  await button.click()

  const newImageSrc = await image.getAttribute('src')
  console.log(newImageSrc)

  await expect(initialImageSrc).toEqual(newImageSrc)
})
