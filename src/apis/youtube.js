import axios from 'axios';

const KEY = 'AIzaSyDfpHWsYHYwfauirqW35L_CxJIW3kG-u8Q';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});