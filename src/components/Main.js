import React, { Component } from 'react';
import './css/main.css'

  const Main =(props) => {
    return (
        <main class = "biography">
        <p><strong>Grace Brewster Murray Hopper</strong> (née <strong>Murray</strong>; December 9, 1906 – January 1, 1992) was an American <a href="https://en.wikipedia.org/wiki/Computer_scientist" target="_blank" >computer scientist</a> and United States Navy rear admiral. <mark>One of the first programmers of the Harvard Mark I computer</mark>, she was a pioneer of computer programming who invented one of the first compiler related tools. She popularized the idea of machine-independent programming languages, which led to the development of COBOL, an early <a href="https://en.wikipedia.org/wiki/High-level_programming_language" target = "_blank">high-level programming language</a> still in use today.</p>

        <p>Hopper had attempted to enlist in the Navy during <a href="https://en.wikipedia.org/wiki/World_War_II" target="_blank">World War II</a>, but she was rejected by the military because she was 34 years of age and too old to enlist. She instead joined the Navy Reserves. Hopper began her computing career when she worked on the Harvard Mark I team that was led by Howard H. Aiken. In 1949, she joined the <a href="https://en.wikipedia.org/wiki/Eckert%E2%80%93Mauchly_Computer_Corporation" target="_blank">Eckert–Mauchly Computer Corporation</a> and was part of the development team that designed the <a href="https://en.wikipedia.org/wiki/UNIVAC_I" target="_blank">UNIVAC I</a> computer in 1944. It was at Eckert–Mauchly that she began developing the compiler. She believed that computer code could be written in English by using a programming language that was based on English words. The compiler would convert that code into machine code that would be understood by computers. By 1952, Hopper finished her compiler, which was written for the <a href="https://en.wikipedia.org/wiki/A-0_System" target="_blank">A-0 System</a> programming language.</p>

        <h2>Career</h2>
        <ol>
            <li>World War II</li>
            <li>UNIVAC</li>
            <li>COBOL</li>
            <li>Standards</li>
        </ol>

        <h2>Phrase</h2>
        <blockquote cite="http://http://www.azquotes.com/quote/553883">
            "Humans are allergic to change. They love to say, 'We've always done it this way.' I try to fight that. That's why I have a clock on my wall that runs counter-clockwise."
        </blockquote>

        <a href="information.html" target="_blank">See more</a>
    </main>
    );
  }
 

export default Main;