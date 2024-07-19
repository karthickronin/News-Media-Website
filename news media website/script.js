// Simulated data for news articles
const articles = {
    world: [
        { headline: "World News Headline 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { headline: "World News Headline 2", content: "Nulla facilisi. Mauris scelerisque lorem vel scelerisque congue." }
    ],
    business: [
        { headline: "Business News Headline 1", content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
        { headline: "Business News Headline 2", content: "Integer tempus lectus non odio tincidunt, vitae ultrices est lobortis." }
    ],
    tech: [
        { headline: "Technology News Headline 1", content: "Vestibulum malesuada velit id elit molestie, a scelerisque eros tristique." },
        { headline: "Technology News Headline 2", content: "Curabitur fringilla velit eget purus consequat, ac tempor odio tincidunt." }
    ],
    sports: [
        { headline: "Sports News Headline 1", content: "Donec vel mauris vitae mauris dictum fermentum." },
        { headline: "Sports News Headline 2", content: "Suspendisse rutrum libero non sapien commodo, vel feugiat mi malesuada." }
    ]
};

// Function to display news articles for a specific category
function displayArticles(category) {
    const newsContainer = document.getElementById(category);
    newsContainer.innerHTML = ""; // Clear existing content
    
    articles[category].forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('news-article');
        articleElement.innerHTML = `
            <h3>${article.headline}</h3>
            <p>${article.content}</p>
        `;
        newsContainer.appendChild(articleElement);
    });
}

// Event listeners for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const category = link.getAttribute('href').substring(1); // Get category from href
            displayArticles(category);
        });
    });
});
