let config = {
  local: {
    mysql: {
      url: process.env.DB_URL
    },
    prod: {
        mysql:{
            url: process.env.JAWSDB_URL
        },
        apiKeys:{}
    }
  }
};
module.exports = config[process.env.APP_ENV || "local"];
