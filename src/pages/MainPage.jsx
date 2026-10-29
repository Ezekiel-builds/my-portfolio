import Banner from '../components/Banner';
import './MainPage.css';

function Main() {
    return (
        <main className="main__container">
            <Banner />
            
            <section className="about__section">
                    <h4 className="header__text">
                        About
                    </h4>

                <div className="about__section--text">
                    <p className="about__section--writeup">
                        I'm  <span className="writeup__highlight">Ezekiel,</span>, a software developer with about a year of experience building web applications.

                        I work primarily with JavaScript and React, using tools like Supabase, APIs, and databases to bring ideas to life. I've built applications involving authentication, data management, and developer-focused tools, and I'm continuing to deepen my understanding of how software works beyond the surface.
                    </p>   

                    <p className="about__section--writeup">
                        Outside software, I'm drawn to creating things people can connect with. I'm also fascinated by psychology, human behaviour, and complicated concepts that leave me with more questions than I started with. <i className="fi fi-rs-grin-tears"></i>

                        I'm still exploring where all these interests will take me, but one thing stays constant: I like understanding things, making things, and seeing an idea become something real.
                    </p>
                </div>

                <div className="profile__snapshot">
                    <span className="profile__snapshot--eyebrow">
                        <i className="fi fi-rs-brain"></i> DEVELOPER SNAPSHOT
                    </span>

                    <div className="snapshot__box">
                        <div className="snapshot">
                            <p className="snapshot__text">
                               <i class="fi fi-rs-terminal"></i> Building web applications
                            </p>
                            
                            <span className="snapshot__subtext">
                                Creating interactive interfaces with JavaScript and React.
                            </span>
                        </div>
                    
                        <div className="snapshot">
                            <p className="snapshot__text">
                                <i className="fi fi-rs-database-cloud-circle"></i> Connecting the pieces
                            </p>

                            <span className="snapshot__subtext">
                                Creating interactive interfaces with JavaScript and React.
                            </span>
                        </div>

                        <div className="snapshot">
                            <p className="snapshot__text">
                                <i className="fi fi-rs-code-branch"></i> Building in public
                            </p>

                            <span className="snapshot__subtext">
                                Practising Git and continuously improving through hands-on projects.
                            </span>
                        </div>

                        <div className="snapshot">
                            <p className="snapshot__text">
                                <i className="fi fi-rs-bulb"></i> Curiosity beyond code
                            </p>

                            <span className="snapshot__subtext">
                                Exploring psychology, creative work, and how people interact with technology.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tech__stack">
                <h4 className="header__text">
                    Tech Stack
                </h4>

                <div className="stacks">
                    <div className="stack">
                        <i className="devicon-react-original colored language__icon"></i>

                        <p className="stack__name">
                        React
                        </p>
                    </div>

                    <div className="stack">
                        <i className="devicon-javascript-plain colored language__icon"></i>

                        <p className="stack__name">
                            JavaScript
                        </p>
                    </div>

                    <div className="stack">
                        <i class="devicon-supabase-plain colored language__icon"></i>

                        <p className="stack__name">
                            Supabase
                        </p>
                    </div>

                    <div className="stack">
                        <i class="devicon-html5-plain colored language__icon"></i>

                        <p className="stack__name">
                            HTML
                        </p>    
                    </div>

                    <div className="stack">
                        <i className="devicon-css3-plain colored language__icon"></i>
          
                        <p className="stack__name">
                            CSS
                        </p>
                    </div>

                    <div className="stack">
                        <i className="devicon-git-plain colored language__icon"></i>
          
                        <p className="stack__name">
                            Git
                        </p>
                    </div>
                </div>
            </section>

            <section className="profile__contact">
                <h4 className="profile__contact--header">
                    Contact
                </h4>

                <div className="contact__links">
                    <div className="contact__link">
                        <i className="fi fi-brands-github contact__platform"></i>
                        <i className="fi fi-tr-arrow-up-right arrow__icon"></i>
                    </div>

                    <div className="contact__link">
                        <i className="fi fi-brands-linkedin contact__platform"></i>
                        <i className="fi fi-tr-arrow-up-right arrow__icon"></i>
                    </div>

                    <div className="contact__link">
                        <i className="fi fi-rs-envelope contact__platform"></i>
                       <i className="fi fi-tr-arrow-up-right arrow__icon"></i>
                    </div>

                    <div className="contact__link">
                        <i className="fi fi-brands-twitter-alt contact__platform"></i>
                        <i className="fi fi-tr-arrow-up-right arrow__icon"></i>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;