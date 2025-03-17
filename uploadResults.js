const axios = require('axios');
const fs = require('fs');
const path = require('path');

const apiKey = 'TU_CLAVE_API_AQUÍ';
const qmetryUrl = 'https://qtmcloud.qmetry.com/rest/api/automation/importresult';
const filePath = path.join(process.cwd(), 'test-results', 'results.xml'); // Ruta relativa en GitHub Actions


// 🔍 Listar archivos en test-results para depuración
console.log('📂 Archivos en test-results:', fs.readdirSync(path.join(process.cwd(), 'test-results')));

async function uploadResults() {
    try {
        if (!fs.existsSync(filePath)) {
            console.error(`❌ Archivo no encontrado: ${filePath}`);
            process.exit(1); // Salir con error si el archivo no existe
        }

        const fileData = fs.readFileSync(filePath);

        const response = await axios.post(qmetryUrl, fileData, {
            headers: {
                'Content-Type': 'application/xml',
                'apiKey': apiKey
            }
        });

        console.log('✅ Resultados subidos con éxito:', response.data);
    } catch (error) {
        console.error('❌ Error subiendo los resultados:', error.response ? error.response.data : error.message);
    }
}

uploadResults();
