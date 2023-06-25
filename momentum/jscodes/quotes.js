const quotes = [
    {
        quote: "L'avenir est ce qu'il y a de pire dans le présent.",
        author: "Gustave Flaubert",
    },
    {
        quote: "L'avenir est un lieu commode pour y mettre des songes.",
        author: "Anatole France, Les Opinions de Jérôme Coignard.",
    },
    {
        quote: "L'avenir n'est interdit à personne.",
        author: "Léon Gambetta",
    },
    {
        quote: "Non, l'avenir n'est à personne! Sire! l'avenir est à Dieu !",
        author: "Alphonse de Lamartine, Les Méditations.",
    },
    {
        quote: "Peut-être l'avenir me gardait-il encore Un retour de bonheur dont l'espoir est perdu! Peut-être, dans la foule, une âme que j'ignore Aurait compris mon âme, et m'aurait répondu!.",
        author: "Victor Hugo, Les Chants du crépuscule.",
    },
    {
        quote: "Ma foi! sur l'avenir bien fou qui se fiera : Tel qui rit vendredi, dimanche pleurera.",
        author: "Jean Racine, Les Plaideurs.",
    },
    {
        quote: "Nous entrons dans l'avenir à reculons.",
        author: "Paul Valéry",
    },
    {
        quote: "La joie ne peut éclater que parmi des gens qui se sentent égaux.",
        author: "Honoré de Balzac, La Vendetta.",
    },
    {
        quote: "Souvent une fausse joie vaut mieux qu'une tristesse dont la cause est vraie.",
        author: "Descartes",
    },
    {
        quote: "Bénie soit la Providence qui a donné à chacun un joujou : la poupée à l'enfant, l'enfant à la femme, la femme à l'homme, et l'homme au diable.",
        author: "Victor Hugo",
    },


]
const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteText.innerText = todaysQuote.quote;
quoteAuthor.innerText = todaysQuote.author;

quoteText.classList.add("quote-text-style");
quoteAuthor.classList.add("quote-author-style");