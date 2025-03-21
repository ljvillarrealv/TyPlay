const axios = require('axios');
const fs = require('fs');
const path = require('path');

const apiKey = 'c8fe5e4b7309bc2db46bd41ebc5aa66778955be7c4a259f609afed9823ac4210f87e5082a9023d788aa2782b32dcbcc93c506417e9b121950d15be2b545f9fc3730bab3ae516ade0b5e6704a525de590';
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
