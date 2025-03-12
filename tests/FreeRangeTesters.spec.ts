import { test, expect } from '@playwright/test';

test.describe('Navegación Free Range Testers', () => {
    test('Los links principales redirigen correctamente', async ({ page }) => {
        // Navegar a la página principal
        await page.goto('https://www.freerangetesters.com/');

        // Paso 1: Click en Cursos
        await test.step('Click en Cursos', async () => {
            await page.locator('#page_header').getByRole('link', { name: 'Cursos', exact: true }).click();
            await page.waitForURL('**/cursos');
        });

        // Paso 2: Verificación de redirección
        await test.step('Soy redirigido a la subpágina', async () => {
            await expect(page).toHaveTitle('Cursos');
        });

        // Paso 3: 
    });
});

