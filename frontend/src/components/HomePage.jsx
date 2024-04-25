import React from 'react';

const HomePage = () => {
    const exampleText = "Hi there! I'm Becky, a Software Developer on the lookout for a new career opportunity. Since very young, I've been amazed by the concept of coding, & was always looking to pick up new tricks. After soaking up the culture in Japan for four years and meeting many engineers through my work, I decided to challenge one of the UK's best coding bootcamps - a challenge I'm proud to say was both incredibly successful & immensely fun. I'm all about growth and learning, ready to bring some fresh ideas to the table. I'd love the opportunity to speak with companies who celebrate diversity and keep things positive. If you're open to chatting about how we could team up, please don't hesitate to reach out!"

    return (
        <div className='introduction'>
        <h1>Hello & Welcome!</h1>
        <p>{exampleText}</p>
        </div>
    );
}

export default HomePage;
