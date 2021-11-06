const development = {
  name: "development",
  PORT: 8000,
  asset_path: "public",
  //mongodb_URI: "mongodb://localhost/issue-tracker",
  mongodb_URI:
    "mongodb+srv://sambitn20:TY8y5UIKeOnA3eZd@cluster0.rwhme.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
};

const environment = development;
module.exports = environment;
