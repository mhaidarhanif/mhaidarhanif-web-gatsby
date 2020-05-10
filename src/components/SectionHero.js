import { h } from 'preact'

const SectionHero = () => (
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
        Especially helping people’s career in the software industry. Normally he
        doesn’t talk in a 3rd person view.
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
)

export default SectionHero
