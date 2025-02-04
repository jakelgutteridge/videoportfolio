// Get references to the header and footer divs
const headerDiv = document.getElementById('header');
const footerDiv = document.getElementById('footer');

// Define the injected HTML content for header and footer
const headerHTML = `
  <header>
    <center>
      <a href="./index.html">
        <img src="home.png" style="width: 30px; height: 30px;">
      </a>
    </center>
  </header>
`;



const footerHTML = `
  <footer>
    <center>
      <small>
        &copy; Jake Gutteridge 2025
      </small>
    </center>
  </footer>
`;

// Inject the HTML content into the header and footer divs
headerDiv.innerHTML = headerHTML;
footerDiv.innerHTML = footerHTML;
