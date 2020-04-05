//first run 

const { Application, genesisBlockDevnet, configDevnet  } = require('lisk-sdk');

const app = new Application(genesisBlockDevnet, configDevnet);

app

.run()
.then(() => app.logger.info('Yahtzee!....'))
.catch(error => {
    console.error('Somethings wrong', error);
    process.exit(1);
});



