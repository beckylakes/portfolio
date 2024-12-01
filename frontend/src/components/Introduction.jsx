import Profile from "./Profile";

const Introduction = () => {
  return (
    <div id="top" className="Introduction">
      <p>Hi, it's nice to e-meet you!</p>
      <h1>My name is Rebecca Lake.</h1>
      <h2> I'm a Software Developer. 👩‍💻</h2>
      <p>
        A software developer with an international, bilingual (ENG/JP) background in IT recruitment, 
        sales & education. I recently completed a coding bootcamp
        at Northcoders where I acquired experience in Node.JS,
        React, PostgreSQL, and many, many more.
      </p>
      <Profile />
    </div>
  );
};

export default Introduction;