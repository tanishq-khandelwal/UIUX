import React from "react";

const practicals = [
  {
    title: "Practical 1: User Persona Template",
    url: "https://www.figma.com/design/RleemDbC4CehjqlMz5FYym/User-Persona-Template-(Community)?node-id=1-8&node-type=symbol&t=pIGvgwRW7TNrRHDe-0",
  },
  {
    title: "Practical 2: Online Learning Platform",
    url: "https://www.figma.com/design/vS73m4vs8C1DXFsu4mJolQ/Online-Learning-Platform-(Community)?t=tDwwOIfFEWV9RkGt-0",
  },
  {
    title: "Practical 3: UI/UX Practical 3",
    url: "https://www.figma.com/community/file/1134379406586739829",
  },
  {
    title: "Practical 4: UI/UX Practical 4",
    url: "https://www.figma.com/design/V3iMkE5xZDId3YwOSjjWgN/UI%2FUX-4?node-id=0-1&node-type=canvas&t=rIMIMcz3kS3FOp70-0",
  },
  {
    title: "Practical 5: UI/UX Practical 5",
    url: "https://www.figma.com/design/cis0NOSA92odM8pD4evnv2/UI%2FUX-5?node-id=0-1&node-type=canvas&t=WXBvKkQbnjIBo51C-0",
  },
  {
    title: "EAC Practicals",
    url: "https://drive.google.com/drive/folders/1i52hFGMftnu2h2VJBdTcjGaMGXYV8FjP?usp=sharing",
  },
];

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>UI/UX Practicals</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {practicals.map((practical, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <a href={practical.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#3498db" }}>
              {practical.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
