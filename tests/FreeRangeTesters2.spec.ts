/*import { test, expect } from '@playwright/test';

test.describe('Navegación Free Range Testers', () => {
    const secciones = [
        { nombre: 'Cursos', url: '/cursos', tituloEsperado: 'Cursos' },
        { nombre: 'Udemy', url: '/udemy', tituloEsperado: 'Udemy' },
        { nombre: 'Recursos', url: '/recursos', tituloEsperado: 'Recursos' },
        { nombre: 'Blog', url: '/login', tituloEsperado: 'Acceder a Free Range Testers' },
    ];

    for (const seccion of secciones) {
        test(`Validar los links principales redirigen correctamente a ${seccion.nombre}`, async ({ page }) => {
            // Definir umbral máximo en milisegundos
            const MAX_TIME = 1000;

            // Navegar a la página principal
            await test.step('Estando en la web principal de Free Range Testers', async () => {
                await page.goto('https://www.freerangetesters.com/');
                await expect(page).toHaveTitle('Free Range Testers');
            });

            // Paso 1: Hacer clic en la sección
            await test.step(`Cuando hago Click en ${seccion.nombre}`, async () => {
                const start = Date.now(); // Inicia el tiempo

                await page.locator('#page_header').getByRole('link', { name: seccion.nombre, exact: true }).click();
                await page.waitForURL(`**${seccion.url}`);

                // Validación de tiempo de respuesta
                const duration = Date.now() - start; // Calcula el tiempo
                console.log(`Tiempo de ejecución: ${duration}ms`);
                expect(duration).toBeLessThan(MAX_TIME); // Validación
            });

            // Paso 2: Validar que estamos en la página correcta
            await test.step(`Soy redirigido a la subpágina de ${seccion.tituloEsperado}`, async () => {
                await expect(page).toHaveTitle(seccion.tituloEsperado);
                await page.getByRole('button', { name: 'Empieza ya' }).click();
                //validacion de texto
                await expect(page.getByText('Programa desde cero, domina')).toHaveText('Empieza ya');
              
                
            await test.step('', async () => {
                
            })
                
            });
        });
    }
});*/