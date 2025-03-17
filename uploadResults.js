const axios = require('axios');
const fs = require('fs');
const path = require('path');

const apiKey = '60fc7c49869b5619ba9d97b93e24b7e91bd74b92b290397ed0cd85aa91cfbc7d0ad08545a7b0bb783929a0448a6438ba308969731c58f1f91823276e1438f634ec3ef76a95afa590e60cc70c8f24466d';
const qmetryUrl = 'https://qtmcloud.qmetry.com/rest/api/automation/importresult';
const filePath = path.join(__dirname, 'test-results', 'result.xml'); // Ruta del XML

async function uploadResults() {
    try {
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
