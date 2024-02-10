import express from "express";
import axios from "axios";
import https from "https";
const app = express();
const port = 3000;
// using express static middleware for defining the public folder for the styles, scripts, images, and videos.
app.use(express.static("public"));

// this line of code to prevent an error from axios setting up an https agent.
const agent = new https.Agent({
  rejectUnauthorized: false,
});


app.get("/", async (req, res) => {
  // try catch block for the async function using axios.
  try {
    // I will create an empty array that I will push things into 
    const quote = [];
    // Using kanye.rest public API to generate the kanye quote.
    const kanyeResponse = await axios.get("https://api.kanye.rest", {
      httpsAgent: agent,
    });
    // Getting the response and pushing it to the quotes array
    quote.push(JSON.stringify(kanyeResponse.data.quote));
    // Using quotable public API to generate another random quote
    const randomResponse = await axios.get("https://api.quotable.io/random", {
      httpsAgent: agent,
    });
    // Also pushing it into the same array
    quote.push(JSON.stringify(randomResponse.data.content));
    console.log(quote);
    // Randomizing which quote will appear by using Math.random().
    var randomization = Math.floor(Math.random() * (quote.length));
    // Rendering the page and passing the quote array and randomization number to know the result i.e if randomization= 0 then its a kanye quote if randomization=1 its not.
    res.render("index.ejs", {
      quote: quote[randomization],
      randomization: randomization,
    });
    // Handling error
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

// Listening to the port
app.listen(port, () => {
  console.log(`Your server is listening to port:${port}`);
});
