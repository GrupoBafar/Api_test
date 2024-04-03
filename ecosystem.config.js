module.exports = {
  apps : [{
    name: 'API Test',
    script: 'index.js',
    watch: 'false',
    cron_restart: '0 22 * * *',
  }]
};
