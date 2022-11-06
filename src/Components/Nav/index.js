import React from "react";

function Nav({ handleClick }) {
  return (
    <header class="hidden-mobile">
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <span
              data-testid="About"
              href="#About"
              onClick={() => handleClick("About")}
            >
              <h3>
                <a data-testid="link" href="#About">
                  <span>
                    <h3>About-Me</h3>
                  </span>
                </a>
              </h3>
            </span>
          </li>
          <li className="mx-2">
            <span
              data-testid="Catering"
              href="#Catering"
              onClick={() => handleClick("Catering")}
            >
              <h3>
                <a data-testid="link" href="#Catering">
                  <span>
                    <h3>Catering</h3>
                  </span>
                </a>
              </h3>
            </span>
          </li>
          <li className="mx-2">
            <span
              data-testid="Landing"
              href="#Landing"
              onClick={() => handleClick("Landing")}
            >
              <h3>
                <a data-testid="link" href="#Landing">
                  <span>
                    <h3>Landing</h3>
                  </span>
                </a>
              </h3>
            </span>
          </li>
          <li className="mx-2">
            <span
              data-testid="Menu"
              href="#Menu"
              onClick={() => handleClick("Menu")}
            >
              <h3>
                <a data-testid="link" href="#Menu">
                  <span>
                    <h3>Menu</h3>
                  </span>
                </a>
              </h3>
            </span>
          </li>
          <li className="mx-2">
            <span
              data-testid="OrderContact"
              href="#OrderContact"
              onClick={() => handleClick("OrderContact")}
            >
              <h3>
                <a data-testid="link" href="#OrderContact">
                  <span>
                    <h3>OrderContact</h3>
                  </span>
                </a>
              </h3>
            </span>
          </li>
          <li className="mx-2">
            <span
              data-testid="ContactForm"
              href="#ContactForm"
              onClick={() => handleClick("ContactForm")}
            >
              <h3>
                <a data-testid="link" href="#ContactForm">
                  <span>
                    <h3>Contact Us</h3>
                  </span>
                </a>
              </h3>
            </span>
          </li>
          <li className="mx-2">
            <span
            >
              <h3>
                <a target="_blank" data-testid="link" href="https://branchburgsbest.square.site/s/order">
                  <span>
                    <h3>Order Now</h3>
                  </span>
                </a>
              </h3>
            </span>
          </li>

         
         
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
