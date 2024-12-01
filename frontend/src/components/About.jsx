const About = () => {
    return (
      <div id="about">
        <h1>About Me.</h1>
        <p>
          As a long-time tech enthusiast & advocate for a more diverse tech-space, I 
          have been amazed by coding & what can be accomplished with it.
          Since becoming an IT recruiter and speaking to some amazing talents,
          I realised that instead of admiring what software engineers do, I wanted to
          get involved myself and be a part of the amazing world of tech. In January 2024,
          I began my  13-week journey to becoming a software developer at the
          Northcoders’ coding bootcamp.
        </p>
        <p>
          Through the bootcamp, not only did I meet some amazing tutors and fellow students,
          I also gained invaluable hands-on experience in web and mobile development, learnt key computer science concepts, and applied industry best practices such as Test-Driven Development (TDD). I also had the chance to present alongside my team a progressive web-app that we created from scratch whilst applying what we'd learnt during Northcoders projects to an entirely new tech-stack - a tricky yet extremely fun experience{" "}
          <a
            className="video-link"
            href="https://northcoders.com/project-phase/leap"
            target="_blank"
          >
            (You can see more here!)
          </a>{" "}
          My overall experience has further inspired me to learn more
          about technology and its role in society.
        </p>
        <br></br>
        <div className="About-Lists">
          <div id="tech-list">
            <h2> Here Are The Technologies I've Worked With:</h2>
            <ul>
              <li>Node.js (JavaScript ES6)</li>
              <li>React</li>
              <li>Express.js</li>
              <li>PostgreSQL</li>
              <li>Jest</li>
              <li>HTML & CSS</li>
              <li>Python</li>
              <li>Typescript</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div id="practices-list">
            <h2>Using Industry Best Practices:</h2>
            <ul>
              <li>Test-Driven Development (TDD)</li>
              <li>Agile Methodologies (e.g. Daily Stand-Up & Trello)</li>
              <li>Version Control with Git & GitHub</li>
              <li>Pair Programming</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
