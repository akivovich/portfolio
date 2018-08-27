
import delay from './delay.mjs';

delay(2000)
    .then(result => console.log('Done', result))
    .catch(() => console.log('Error'));



