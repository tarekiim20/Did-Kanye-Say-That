import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import https from "https";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
const agent = new https.Agent({
  rejectUnauthorized: false,
});
app.get("/", async (req, res) => {
  try {
    const quote = [];
    const kanyeResponse = await axios.get("https://api.kanye.rest", {
      httpsAgent: agent,
    });
    quote.push(JSON.stringify(kanyeResponse.data.quote));
    const randomResponse = await axios.get("https://api.quotable.io/random", {
      httpsAgent: agent,
    });
    quote.push(JSON.stringify(randomResponse.data.content));
    quote.push(JSON.stringify(randomResponse.data.author));
    console.log(quote);
    var randomization = Math.floor(Math.random() * (quote.length - 1));

    res.render("index.ejs", {
      quote: quote[randomization],
      randomization: randomization,
    });
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});
app.listen(port, () => {
  console.log(`Your server is listening to port:${port}`);
});
