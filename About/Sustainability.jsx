import React from "react";
import { motion } from "framer-motion";
import "./Sustainability.css";

/* ===== IMAGES ===== */
import heroImg from "../../assets/Images/VLT-image-1.webp";
import sustainImg from "../../assets/Images/VLT-image-1.webp";

/* ================= ANIMATION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const imageZoom = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const hoverLift = {
  whileHover: {
    y: -6,
    boxShadow: "0 30px 70px rgba(0,0,0,0.18)",
    transition: { duration: 0.3 },
  },
};

const Sustainability = () => {
  return (
    <div className="sustainability-page">
      {/* ================= HERO ================= */}
      <section
        className="sustainability-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Sustainability
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Building a greener future through responsible innovation and
            eco-friendly practices.
          </motion.p>
        </div>
      </section>

      {/* ================= TITLE ================= */}
      <motion.div
        className="commitment-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>SUSTAINABILITY: MANAGEMENT COMMITMENT</h2>
      </motion.div>

      {/* ================= CONTENT ================= */}
      <section className="sustainability-content">
        <motion.div
          className="content-wrapper"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* IMAGE */}
          <motion.div
            className="content-image"
            variants={imageZoom}
          >
            <img src={sustainImg} alt="Sustainability Practices" />
          </motion.div>

          {/* TEXT BLOCKS */}
          <motion.div className="commitment-text" variants={stagger}>
            <motion.div
              className="commitment-item"
              variants={fadeUp}
              {...hoverLift}
            >
              <p><strong>Zero work-related accidents</strong></p>
            </motion.div>

            <motion.div
              className="commitment-item"
              variants={fadeUp}
              {...hoverLift}
            >
              <p><strong>Zero occupational illness</strong></p>
            </motion.div>

            <motion.div
              className="commitment-item"
              variants={fadeUp}
              {...hoverLift}
            >
              <p><strong>Zero non-recovered waste</strong></p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Sustainability;
