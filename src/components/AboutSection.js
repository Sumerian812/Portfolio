import React from "react";
import { StyledAbout, StyledImage, StyledHide, StyledDescription } from "../styles";
import Wave from "./Wave";
import { Link } from "react-router-dom";
// Images
import home1 from "../img/home1.png";
// Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <motion.div className="title">
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>
                            We work to make
                    </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span></motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}> come true.</motion.h2>
                    </StyledHide>
                </motion.div>
                <motion.p variants={fade}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec hendrerit sodales augue, ac aliquam ligula varius vel.
                </motion.p>
                <Link to="/contact"><motion.button variants={fade}>Contact us</motion.button></Link>
            </StyledDescription>
            <StyledImage>
                <motion.img
                    variants={photoAnimation}
                    src={home1}
                    alt="home1"
                />
            </StyledImage>
            <Wave />
        </StyledAbout>
    )
}

export default AboutSection;