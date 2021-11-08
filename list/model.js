import googleJson from './config.js';

export default class Model {
  loadGoogle = async () => {
    const resp = await fetch(googleJson);
    const data = await resp.json();
    return data;
  };
}
