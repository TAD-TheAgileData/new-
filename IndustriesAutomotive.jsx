import React from "react";
import { motion } from "framer-motion";
import {
  MdPrecisionManufacturing,
  MdVerifiedUser,
  MdLayers,
} from "react-icons/md";
import "./IndustriesAutomotive.css";

import heroImg from "../../assets/Images/VLT-image-1.webp";
import OEM from "../../assets/Images/VLT-image-1.webp";
import glass1 from "../../assets/Images/VLT-image-1.webp";
import glass2 from "../../assets/Images/VLT-image-1.webp";
import glass3 from "../../assets/Images/VLT-image-1.webp";

/* ================= ANIMATION SYSTEM ================= */

const heroReveal = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const textUp = {
  hidden: { opacity: 0, y: 80, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const floatCard = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};
{/* ===== PREMIUM BACKGROUND LIGHT EFFECTS ===== */}
<div className="bg-light-layer">
  <span className="light-orb orb-a"></span>
  <span className="light-orb orb-b"></span>
  <span className="light-orb orb-c"></span>
</div>

export default function AutomotiveIndustryPremium() {
  return (
    <div className="auto-root">

      {/* ================= CINEMATIC HERO ================= */}
      <section className="auto-hero">
        <motion.div
          className="auto-hero-bg"
          style={{ backgroundImage: `url(${heroImg})` }}
          variants={heroReveal}
          initial="hidden"
          animate="visible"
        />

        <motion.div
          className="auto-hero-content"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={textUp} className="auto-chip">
            INDUSTRIES
          </motion.span>

          <motion.h1 variants={textUp}>
            Automotive Glass Engineering
          </motion.h1>

          <motion.p variants={textUp}>
            Precision-engineered glazing systems powering
            next-generation mobility platforms.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= IMAGE + TEXT STORY ================= */}
      <section className="auto-story">

        <motion.div
          className="auto-story-image"
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <img src={OEM} alt="OEM Automotive Glass" />
        </motion.div>

        <motion.div
          className="auto-story-text"
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <h2>OEM & Aftermarket Solutions</h2>
          <p>
            From mass-production OEM supply to high-precision
            aftermarket systems, our glazing solutions deliver
            durability, clarity, and safety without compromise.
          </p>

          <ul>
            <li>Windshields</li>
            <li>Sidelites & Backlites</li>
            <li>Sunroofs</li>
            <li>Quarter Glasses</li>
          </ul>
        </motion.div>

      </section>

      {/* ================= FLOATING GLASS CARDS ================= */}
      <section className="auto-cards">
<div className="bg-gradient-wave" />

        <motion.div
          className="auto-card"
          variants={floatCard}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={glass2} alt="Capabilities" />
          <MdPrecisionManufacturing />
          <h3>Advanced Capabilities</h3>
          <p>
            Ceramic printing, lamination, bending, tempering,
            sensor cut-outs and ADAS-ready integration.
          </p>
        </motion.div>

        <motion.div
          className="auto-card glass"
          variants={floatCard}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={glass3} alt="Compliance" />
          <MdVerifiedUser />
          <h3>Global Compliance</h3>
          <p>
            ECE R43, DOT, ISO and IATF 16949 certified
            automotive quality systems.
          </p>
        </motion.div>

        <motion.div
          className="auto-card"
          variants={floatCard}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={glass1} alt="Applications" />
          <MdLayers />
          <h3>Applications</h3>
          <p>
            Passenger vehicles, commercial fleets,
            buses, and specialty automotive platforms.
          </p>
        </motion.div>

      </section>
    </div>
  );
}
