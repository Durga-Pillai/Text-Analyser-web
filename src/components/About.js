import React from 'react';
import './About.css'
// import './About.css';
export default function About() {
    return  (
        <div className="about-container">
            <h1 className="about-header"> About Us</h1>
            <p className="about-text">
            The Creative Thinking website is a versatile tool designed to enhance your writing experience. It allows users to convert any text into both uppercase and lowercase formats with ease, providing quick and convenient text transformations. Not only does it give you control over the case of your words, but it also tracks the time it takes to read through the converted text, offering insightful feedback on reading speed. This feature is particularly useful for those looking to improve their reading efficiency or measure their performance over time. Whether you're editing a document or just experimenting with different text styles, the Creative Thinking website serves as a valuable resource for refining your writing and enhancing your reading capabilities.
            </p>
            <p className="about-team">
            This project demonstrates my commitment to design and functionality by
            incorporating modern technologies like React and Bootstrap.
            </p>
        </div>
    );
}
