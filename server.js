const express = require('express');
const cors = require('cors');
const { youtube } = require('btch-downloader');

// const { Youtube } = require("nodetube");
 
const getFBInfo = require('@xaviabot/fb-downloader');
const { search } = require('npms-search');
const ytdl = require('ytdl-core-enhanced');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("YouTube & Facebook Downloader API");
});

// ✅ POST: YouTube Thumbnail Info
app.post('/yt-thumbnail', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({
      data: {
        developer: '@prm2.0',
        status: false,
        message: 'Missing YouTube video URL in body'
      }
    });
  }

  try {
    const Data = await youtube(url);
    
    res.json({
      data: Data
    });
  } catch (error) {
    res.status(500).json({
      data: {
        developer: '@prm2.0',
        status: false,
        message: 'Failed to fetch YouTube data',
        error: error.message
      }
    });
  }
});


// ✅ POST: Facebook Downloader
app.post('/fb-down', async (req, res) => {
  const { url } = req.body;


  if (!url) {
    return res.status(400).json({
      success: false,
      message: 'Missing Facebook video URL in body'
    });
  }

  try {
    const result = await getFBInfo(url);
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch Facebook video data',
      error: error.message
    });
  }
});


// ✅ POST: Package Search
app.post('/search', async (req, res) => {
  const {SearchQuery}  = req.body;

  if (!SearchQuery) {
    return res.status(400).json({
      success: false,
      message: 'Missing SearchQuery in body'
    });
  }

  try {
    const result = await search(SearchQuery);
    res.json({
      success: result.status,
      data: result.results
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});


app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});
