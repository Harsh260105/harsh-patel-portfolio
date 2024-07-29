import React from "react";
import "src/assets/Resume/HARSH-PATEL-Resume.pdf";

const Resume = () => {
    return (
        <section className="cta">
            <p className="cta-text">
                Take a look at my resume!
            </p>
            <a
                href={"src/assets/Resume/HARSH-PATEL-Resume.pdf"}
                download={"HARSH-PATEL-Resume.pdf"}
                className="btn"
            > Download </a>
        </section>
    );
};

export default Resume;
