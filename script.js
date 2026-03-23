const quote = document.querySelector("blockquote");
const author = document.querySelector("span");

const api_url = "https://dummyjson.com/quotes/random";

async function getQuote() {
    try {
        const response = await fetch(api_url);
        const data = await response.json();

        quote.innerText = data.quote;
        author.innerText = "- " + data.author;

    } catch (error) {
        quote.innerText = "Failed to load quote";
        author.innerText = "";
    }
}

// Better: Copy instead of Tweet (no login issue)
function copyQuote() {
    const text = quote.innerText + " " + author.innerText;

    navigator.clipboard.writeText(text);
    alert("Quote copied!");
}

// load first quote
getQuote();
