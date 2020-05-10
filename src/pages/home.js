import { h } from 'preact'

const Home = () => (
  <div>
    <section>
      <div>
        <h1>
          <span>Educator</span>
          <span>Engineer</span>
          <span>Explorer</span>
        </h1>

        <p>
          Haidar is a seasoned tech educator and engineer who mentor people in
          software engineering, web development, and industrial career. Beyond
          that, he’s exploring various experiments to solve world problems.
          Especially helping people’s career in the software industry. Normally
          he doesn’t talk in a 3rd person view.
        </p>

        <div>
          <a href='/projects'>Check His Projects</a>
          <a href='/contact'>Contact Haidar</a>
        </div>
      </div>

      <div>
        <img src='/assets/mhaidarhanif-photo.jpg' alt='Photo of Haidar' />
      </div>
    </section>

    <section>
      <div>
        <h2>Solving world problems, together</h2>
        <p>
          Earth and human have many problems. Including ours. We just have to
          get more people to solve them. If you are one of the people who care
          to make a difference, let’s collaborate together.
        </p>
        <a href='/collaborate'>Collaborate with Haidar</a>
      </div>

      <div>
        <ul>
          <li>
            <img src='' alt='' /> <span>Item</span>
          </li>
        </ul>
      </div>
    </section>

    <section>
      <ul>
        <li>
          <a href='https://example.com'>Item</a>
        </li>
      </ul>
    </section>

    <footer>
      <p>© 2020 M Haidar Hanif</p>
    </footer>
  </div>
)

export default Home
