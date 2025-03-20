const axios = require('axios');
const fs = require('fs');
const path = require('path');

const apiKey = 'a8b43526dfa0c9cdf88af962f15474c6747f4322fc4a7a7ee95cd64fa7f85174e4a40441ac55fa527faba83a9e73040d3615af541144404c557e274323395593f5ba84b3980e80d8434e8ac98b8b65ec';
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
