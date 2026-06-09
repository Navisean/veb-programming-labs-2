import React from 'react';

const menuData = {
  developer: [
    { text: "GitHub", url: "https://github.com" },
    { text: "Stack Overflow", url: "https://stackoverflow.com" },
    { text: "LeetCode", url: "https://leetcode.com" },
    { text: "MDN Web Docs", url: "https://developer.mozilla.org" },
    { text: "Habr", url: "https://habr.com" },
    { text: "Dev.to", url: "https://dev.to" },
    { text: "React Docs", url: "https://react.dev" }
  ],
  designer: [
    { text: "Behance", url: "https://behance.net" },
    { text: "Dribbble", url: "https://dribbble.com" },
    { text: "Figma Community", url: "https://figma.com/community" },
    { text: "Awwwards", url: "https://awwwards.com" },
    { text: "Pinterest", url: "https://pinterest.com" },
    { text: "UI8", url: "https://ui8.net" },
    { text: "Lapa.ninja", url: "https://lapa.ninja" }
  ],
  marketer: [
    { text: "HubSpot", url: "https://hubspot.com" },
    { text: "Marketing Land", url: "https://marketingland.com" },
    { text: "Neil Patel", url: "https://neilpatel.com" },
    { text: "SimilarWeb", url: "https://similarweb.com" },
    { text: "Google Trends", url: "https://trends.google.com" },
    { text: "Ahrefs Blog", url: "https://ahrefs.com/blog" },
    { text: "Semrush", url: "https://semrush.com" }
  ],
  analyst: [
    { text: "Kaggle", url: "https://kaggle.com" },
    { text: "Tableau Public", url: "https://public.tableau.com" },
    { text: "DataCamp", url: "https://datacamp.com" },
    { text: "Towards Data Science", url: "https://towardsdatascience.com" },
    { text: "SQLZoo", url: "https://sqlzoo.net" },
    { text: "Mode Analytics", url: "https://mode.com" },
    { text: "Google Data Analytics", url: "https://grow.google/certificates/data-analytics" }
  ],
  manager: [
    { text: "Harvard Business Review", url: "https://hbr.org" },
    { text: "Trello", url: "https://trello.com" },
    { text: "Notion", url: "https://notion.so" },
    { text: "Asana", url: "https://asana.com" },
    { text: "Product Hunt", url: "https://producthunt.com" },
    { text: "McKinsey Insights", url: "https://mckinsey.com/insights" },
    { text: "PMI", url: "https://pmi.org" }
  ]
};

function JobMenu({ profession }) {
  const links = menuData[profession] || menuData.developer;

  return (
    <div style={{ margin: '20px 0' }}>
      <h3>Полезные ресурсы для {profession}:</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {links.map((item, index) => (
          <li key={index} style={{ margin: '8px 0' }}>
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#0066cc', textDecoration: 'none' }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobMenu;