import https from "http";

//* GET

const configGET = {
  hostname: "mongodb://localhost:27017",
  port: 8080,
  path: "/api/products",
  method: "GET",
};

const req = https.request(configGET, (res) => {
  res.on("data", (data) => {
    console.log(data);
  });
  res.on("error", (error) => {
    console.log(error);
  });
});
req.on("error", (error) => {
  console.log(error);
});
req.end();

//* POST

const configPOST = {
  hostname: "mongodb://localhost:27017",
  port: 8080,
  path: "/api/products",
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
};

const post = https.request(configPOST, (res) => {
  res.on("data", (data) => {
    console.log(data);
  });
  res.on("error", (error) => {
    console.log(error);
  });
});
post.write(JSON.stringify(data))
post.end()

