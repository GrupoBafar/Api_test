module.exports = {
  apps : [{
    name: 'API Test',
    script: 'npm run start',
    watch: 'false',
    cron_restart: '0 22 * * *',
  }]
};
