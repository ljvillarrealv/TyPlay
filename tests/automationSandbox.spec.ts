import { test, Browser, Page, expect } from '@playwright/test';

(async () => {
    let browser: Browser;
    let page: Page;

    test.describe('Acciones en el Automation', () => {

        test('entrar en la pagina de automation', async ({ page }) => {
            await test.step('Dado que navego al sandbox de Automation', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')

            })
            await test.step('Puedo hacer click en el ID Dinamico', async () => {
                await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click();
                
                //Segunda forma de hacer click
                const botonDinamicoId = page.getByRole('button', { name: 'Hacé click para generar un ID' });
                await botonDinamicoId.click();
                //Forzar click en botondinamicoID
                await botonDinamicoId.click({ force: true});
                //hacer doble click botondinamicoID
                await botonDinamicoId.dblclick();
                //hacer click derecho botondinamicoID
                await botonDinamicoId.click({ button: 'right' });
                //click hover sobre botondinamicoID
                await botonDinamicoId.hover();


                //Funcion que recorra el click
            })


        })


    })
    test.describe('Llenar un campo de texto', () => {

        test('navegar a la pagina de sandbox', async ({ page }) => {
            await test.step('Dado que navego al sandbox de Automation', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')

            })
            await test.step('Ingreso texto a un campo', async () => {
                await page.getByRole('textbox', { name: 'Un aburrido texto' }).fill('Estoy aprendiendo Playwright');
            })
        })
    })


})();