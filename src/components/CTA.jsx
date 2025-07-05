import React from "react";
import { Link } from "react-router-dom";

const CTA = ({ variant }) => {
  // Define different text messages based on the variant
  const ctaContent = {
    default: {
      text: "Have a project in mind? <br /> Let's build something together!",
      btnText: "Contact",
    },
    about: {
      text: "Want to know more about me? <br /> Let's connect and have a chat!",
      btnText: "Get In Touch",
    },
    projects: {
      text: "Have a project in mind? <br /> Let's build something together!",
      btnText: "Contact Me",
    },
  };

  const content = ctaContent[variant] || ctaContent.default;

  return (
    <section className="cta">
      <p
        className="cta-text"
        dangerouslySetInnerHTML={{
          __html: content.text.replace(
            "<br />",
            '<br class="sm:block hidden" />'
          ),
        }}
      />
      <Link to="/contact" className="btn">
        {content.btnText}
      </Link>
    </section>
  );
};

export default CTA;
