module.exports = {
  apps : [{
    name: 'API Test',
    script: 'app.js',
    watch: 'false',
    cron_restart: '0 22 * * *',
  }]
};
