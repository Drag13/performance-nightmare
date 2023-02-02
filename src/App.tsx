import React from "react";

export const App = () => (
  <>
    <header className="page-header grid-container">
      <div className="grid-content header-content">
        <svg height="40" width="87" className="logo">
          <use href="./icons/logo.svg#logo" />
        </svg>

        <nav className="main-nav heading-xs">
          <a href="#">Start</a>
          <a href="#">Our history</a>
          <a href="#">Contact us</a>
        </nav>

        <div className="social">
          <a href="#">
            <svg width="24" height="24">
              <use href="./icons/fb.svg#icon"></use>
            </svg>
          </a>

          <a href="#">
            <svg width="24" height="24">
              <use href="./icons/ig.svg#icon"></use>
            </svg>
          </a>

          <a href="#">
            <svg width="24" height="24">
              <use href="./icons/pn.svg#icon"></use>
            </svg>
          </a>
        </div>
      </div>
    </header>
    <main className="grid-container">
      <section className="grid-content-full grid-container hero cover">
        <div className="grid-content">
          <p className="heading-md gutter">
            Experience the perfect combination of modern housing & natural
            scenery
          </p>
          <button className="btn solid call-to-action">Book now</button>
        </div>
      </section>

      <section className="grid-content-full grid-container tint">
        <div className="grid-content section-content about-section">
          <img src="./lake.webp" alt="Lake" />
          <div className="about-description body-md">
            <p className="gutter">
              LAKE HOUSE is an authentic spa hotel lost in the middle of the
              forest. The dreamy landscape promises a peaceful journey away from
              the noisy world. Visiting LAKE HOUSE is a true experience of a
              private secluded space. Everything is organic and natural. A guest
              who has visited our hotel at least once dreams of returning to the
              unparalleled, soothing, attractive atmosphere of LAKE HOUSE.
            </p>

            <p className="gutter">
              We have created a design that is one hundred percent integrated
              into the existing landscape, and in no way harms the natural
              environment.
            </p>

            <p className="gutter">
              We are very proud that we did not cut down a single tree during
              the construction period. Careful attitude towards the existing
              environment is one of the most important missions of our project.
            </p>

            <p className="gutter">
              We offer our guests a concept of hospitality that is much more
              than the standard bed and board approach. The concept of our
              project has clear real goals:
            </p>

            <ul className="gutter">
              <li>Environmental Protection</li>
              <li>Preservation of forests</li>
              <li>Growing organic vegetables, etc.</li>
            </ul>

            <p>
              We created a feeling of transparency and freshness, filled the
              space with light and complemented the unforgettable natural
              atmosphere with wooden accents, soft comfortable floors and modern
              design. Impressive views from the windows will capture your
              imagination, provide inspiration and create a feeling of complete
              unity with nature.
            </p>
          </div>
          <hr className="divider" />
        </div>
      </section>

      <section className="grid-content section-content">
        <p className="heading-lg align-center">
          The Lake House is the perfect weekend getaway cabin
        </p>
      </section>

      <img
        src="./interior.webp"
        className="grid-content-full illustration"
      />

      <section className="grid-content-full grid-container tint">
        <div className="grid-content section-content">
          <header className="section-header sm placement-center">
            <hr className="divider" />
            <h2 className="heading-sm">Sleeping arrangements</h2>
            <p className="body-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerie aliquam odio et faucibus. Nulla rhoncus feugiat eros quis
              consectetur.
            </p>
          </header>

          <ul className="grid-list arrangements-list">
            <li className="grid-list-item body-md">
              <svg className="icon">
                <use href="./icons/facilities.svg#icon"></use>
              </svg>

              <p>Facilities</p>
              <p>
                The cabin is equipped with dishes, fridge, coffee machine and
                microwave.
              </p>
            </li>
            <li className="grid-list-item body-md">
              <svg className="icon">
                <use href="./icons/bedrooms.svg#icon"></use>
              </svg>
              <p>Bedrooms</p>
              <p>
                Spread out over two floors, the cabin offers 4 bedrooms. Ranging
                from 2 to 4 beds per room.
              </p>
            </li>
            <li className="grid-list-item body-md">
              <svg className="icon">
                <use href="./icons/bathrooms.svg#icon"></use>
              </svg>
              <p>Bathrooms</p>
              <p>
                The cabin has three bathrooms, all equipped with showers and one
                with a bath tub,
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="grid-content section-content">
        <header className="section-header sm">
          <hr className="divider" />
          <h2 className="heading-sm">The perfect escape</h2>
          <p className="body-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
            quis consectetur.
          </p>
        </header>

        <ul className="grid-list premises-list">
          <li className="grid-list-item">
            <svg className="icon">
              <use href="./icons/appliances.svg#icon"></use>
            </svg>
            <p className="body-md">Modern Kitchen Appliances</p>
            <p className="body-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </li>

          <li className="grid-list-item">
            <svg className="icon">
              <use href="./icons/air-conditioner.svg#icon"></use>
            </svg>
            <p className="body-md">Air Conditioner</p>
            <p className="body-md">
              Nullam scelerisque aliquam odio et faucibus.
            </p>
          </li>

          <li className="grid-list-item">
            <svg className="icon">
              <use href="./icons/outdoor-paths.svg#icon"></use>
            </svg>
            <p className="body-md">Outdoor Paths</p>
            <p className="body-md">
              Nulla rhoncus feugiat eros quis consectetur.
            </p>
          </li>

          <li className="grid-list-item">
            <svg className="icon">
              <use href="./icons/storage.svg#icon"></use>
            </svg>
            <p className="body-md">Storage Solutions</p>
            <p className="body-md">
              Morbi neque ex, condimentum dapibus congue et, vulputate ut
              ligula.
            </p>
          </li>

          <li className="grid-list-item">
            <svg className="icon">
              <use href="./icons/coffee-maker.svg#icon"></use>
            </svg>
            <p className="body-md">Coffee Maker</p>
            <p className="body-md">Vestibulum sit amet urna turpis.</p>
          </li>

          <li className="grid-list-item">
            <svg className="icon">
              <use href="./icons/cutlery.svg#icon"></use>
            </svg>
            <p className="body-md">Cutlery Selection</p>
            <p className="body-md">
              Mauris euismod elit et nisi ultrices. Duis tristique sed lorem a
              vestibulum.
            </p>
          </li>

          <li className="grid-list-item">
            <svg className="icon">
              <use href="./icons/scenery.svg#icon"></use>
            </svg>
            <p className="body-md">Natural Scenery</p>
            <p className="body-md">Cras commodo consequat orci, in</p>
          </li>

          <li className="grid-list-item">
            <svg className="icon">
              <use href="./icons/take-away.svg#icon"></use>
            </svg>
            <p className="body-md">Take-away Options</p>
            <p className="body-md">
              convallis risus egestas non. Nulla efficitur auctor hendrerit.
              Etiam ut orci varius, faucibus libero ac.
            </p>
          </li>
        </ul>
      </section>

      <section className="grid-content-full grid-container tint feedbacks-section">
        <div className="grid-content-full section-content">
          <header className="section-header sm placement-center">
            <hr className="divider" />
            <h2 className="heading-sm">Past guests</h2>
            <p className="bo body-lg align-center">
              Don't take our word for it! Have a look at what our previous
              guests say about their stay at the Guest House.
            </p>
          </header>

          <div className="cards">
            <div className="card">
              <p className="heading-xs">
                We had an amazing stay at the Guest House!
              </p>
              <p className="body-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
              <p className="body-md feedback-author">Nate Davidsson</p>
            </div>
            <div className="card focus">
              <p className="heading-xs">
                We had an amazing stay at the Guest House!
              </p>
              <p className="body-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
              <p className="body-md feedback-author">Nate Davidsson</p>
            </div>
            <div className="card">
              <p className="heading-xs">
                We had an amazing stay at the Guest House!
              </p>
              <p className="body-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
              <p className="body-md feedback-author">Nate Davidsson</p>
            </div>
          </div>
        </div>
      </section>

      <img
        src="./fireplace.webp"
        className="grid-content-full illustration"
      />

      <section className="grid-content section-content benefits-section">
        <header className="section-header">
          <hr className="divider" />
          <h2 className="heading-sm">Come together</h2>
          <p className="body-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque aliquam odio et faucibus.
          </p>
        </header>

        <ul className="grid-list benefits-list">
          <li className="grid-list-item">
            <svg className="icon">
              <use href="./icons/wifi.svg#icon"></use>
            </svg>
            <p className="body-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </li>
          <li className="grid-list-item">
            <svg className="icon">
              <use href="./icons/bread.svg#icon"></use>
            </svg>
            <p className="body-md">
              Nullam scelerisque aliquam odio et faucibus.
            </p>
          </li>
          <li className="grid-list-item">
            <svg className="icon">
              <use href="./icons/comfort.svg#icon"></use>
            </svg>
            <p className="body-md">
              Nulla rhoncus feugiat eros quis consectetur.
            </p>
          </li>
          <li className="grid-list-item">
            <svg className="icon">
              <use href="./icons/wine.svg#icon"></use>
            </svg>
            <p className="body-md">Morbi neque ex, condimentum.</p>
          </li>
        </ul>
      </section>

      <section className="grid-content-full grid-container tint">
        <div className="grid-content section-content hurry-up-section">
          <header className="section-header md placement-center">
            <hr className="divider" />
            <p className="heading-sm">
              We're already booked up for the spring — hurry up & secure your
              stay for the summer.
            </p>
            <p className="body-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nullam scelerisque aliquam odio et
              faucibus.
            </p>
          </header>
          <div className="placement-center">
            <button className="btn outlined">Contact us</button>
            <button className="btn solid call-to-action">Book now</button>
          </div>
        </div>
      </section>
    </main>
    <footer className="grid-container">
      <div className="grid-content footer-content">
        <ul className="contacts">
          <li className="body-md">
            <p className="caption gutter">Social media</p>
            <div className="social">
              <a href="#">
                <svg width="24" height="24">
                  <use href="./icons/fb.svg#icon"></use>
                </svg>
              </a>
              <a href="#">
                <svg width="24" height="24">
                  <use href="./icons/ig.svg#icon"></use>
                </svg>
              </a>
              <a href="#">
                <svg width="24" height="24">
                  <use href="./icons/pn.svg#icon"></use>
                </svg>
              </a>
            </div>
          </li>
          <li>
            <h2 className="body-md caption">Address</h2>
            <address className="body-md">
              Klubbvika 12, 8310 Kabelvag, Norway
            </address>
          </li>
          <li>
            <h2 className="body-md caption">Phone:</h2>
            <p className="body-md">
              <a href="tel:+470702881234" className="phone">
                +47 (0) 702 88 12 34
              </a>
            </p>
          </li>
        </ul>
        <form action="POST">
          <div className="form-header">
            <h3 className="body-md caption">Newsletter</h3>
            <p className="body-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="email-box">
            <input type="text" className="input" placeholder="Email" />
            <button className="btn solid small">Submit</button>
          </div>
        </form>
        <div className="legal">
          <svg height="40" width="91">
            <use href="./icons/logo.svg#logo" />
          </svg>
          <p className="body-md">
            © Lake House, LLC. All rights reserved. Powered by Example Company
          </p>
          <p className="body-md">
            +47 (0) 702 88 12 34 - example@example.io - Klubbvika 12, 8310
            Kabelvag, Norway
          </p>
        </div>
      </div>
    </footer>
  </>
);
