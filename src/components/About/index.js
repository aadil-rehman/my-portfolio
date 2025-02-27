/* eslint-disable global-require */
/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '@common/styles';
import { skills } from '@config';
import { srConfig } from '@config/sr';
import { StyledAboutSection, StyledText } from './styles';
import { Column } from '../../common/styles';

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <NumberedHeading>About Me</NumberedHeading>
      {/* <div className="inner"> */}
      <StyledText>
        <Column gap={6}>
          <p>
            Hello! I&apos;m Aadil, a Full Stack Software Engineer with 3 years of experience
            building scalable, high-impact web applications that drive business growth.
          </p>

          <p>
            I specialize in crafting performant, user-centric solutions using modern technologies
            like React, Next.js, Node.js, and MongoDB. At Kamyab, developed a React-based job
            application platform, and at TCS, enhanced multilingual product websites for Lloyds
            Banking Group
          </p>
          <p>
            Skilled in performance optimization, cloud solutions, and reusable UI components, with a
            strong portfolio of projects like The Wild Oasis and Worldwise. Passionate about solving
            complex problems and delivering impactful solutions.
          </p>
          <br />
          <p>Here are a few technologies I&apos;ve been working with recently:</p>
        </Column>

        <ul className="skills-list">
          {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </StyledText>

      {/* <StyledPic>
          <div className="wrapper">
            <Image width={300} height={300} blu src="/avatar.JPG" alt="Avatar" className="img" />
          </div>
        </StyledPic> */}
      {/* </div> */}
    </StyledAboutSection>
  );
};

export default About;
