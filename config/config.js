let config = {
  local: {
    mysql: {
      url: process.env.DB_URL
    },
    prod: {
        mysql:{
            url: process.env.JAWSDB_URL
        },
        //Edamam-api.js api keys
        apiKeys:{
          apiId: "be446581",
          apiKey: "358c0fd05ef1cfd3bae813759c1efaf1"
        }
    }
};

module.exports = config[process.env.APP_ENV || "local"];
