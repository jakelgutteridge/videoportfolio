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
      <table cellpadding="3px 0px 3px 0px" cellspacing="0px" style="width: 100%; max-width: 950px; padding-top: 10px;">
        <tr>
          <td>
            <a href="https://goo.gl/maps/qGNjaJsKsYP7dyQz8" target="_blank" style="color: #ffffff;">Cedars Park, Theobalds Lane, Cheshunt EN8 8RU</a>
          </td>
          <td>
            <span style="float: right;">
              <small>2019&ndash;2023</small>
            </span>
          </td>
        </tr>
      </table>
    </center>
  </footer>
`;

// Inject the HTML content into the header and footer divs
headerDiv.innerHTML = headerHTML;
footerDiv.innerHTML = footerHTML;
