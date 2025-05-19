const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/api/weather', async (req, res) => {
  try {
    const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=37.5&longitude=127&hourly=temperature_2m');
    res.json(response.data);
  } catch (error) {
    res.status(500).send("API 오류");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('서버 실행 중');
});
