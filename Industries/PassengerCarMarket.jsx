import React from "react";
import { motion } from "framer-motion";
import {
  FaCar,
  FaCogs,
  FaShieldAlt,
  FaCheckCircle,
  FaGlobe
} from "react-icons/fa";
import "./PassengerCarMarket.css";

import carImg from "../assets/Images/VLT-image-1.webp";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

const cardAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9 }
  }
};

export default function PassengerCarMarket() {
  return (
    <div className="pcm-root">

      {/* ================= HERO ================= */}
      <section className="pcm-hero">
        <div
          className="pcm-hero-bg"
          style={{ backgroundImage: `url(${carImg})` }}
        />
        <div className="pcm-hero-overlay" />

        <motion.div
          className="pcm-hero-content"
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeUp} className="pcm-eyebrow">
            PASSENGER CAR MARKET
          </motion.span>

          <motion.h1 variants={fadeUp}>
            Advanced Automotive Glass
            <span> for Passenger Vehicles</span>
          </motion.h1>

          <motion.p variants={fadeUp}>
            OEM-grade automotive glazing solutions engineered for
            safety, precision, high-volume production, and global
            regulatory compliance.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="pcm-section">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Applications
        </motion.h2>

        <div className="pcm-card-grid">
          {[
            {
              icon: <FaCar />,
              title: "Automotive Glazing",
              desc: "Windshields, sidelites, and backlites manufactured to OEM optical and safety standards."
            },
            {
              icon: <FaCogs />,
              title: "Primer & Bonding Solutions",
              desc: "Advanced primer application and bonding systems ensuring durability and fitment accuracy."
            },
            {
              icon: <FaCheckCircle />,
              title: "Fitment Applications",
              desc: "Precision-fit solutions supporting automated and manual installation processes."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="pcm-card"
              variants={cardAnim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="pcm-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= KEY STRENGTHS ================= */}
<section className="pcm-strengths">

  <motion.div
    className="pcm-strengths-header"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <span className="pcm-eyebrow">WHY CHOOSE US</span>
    <h2>Key Strengths</h2>
    <p>
      Engineered excellence backed by certified processes, scalable
      manufacturing, and OEM-approved quality systems.
    </p>
  </motion.div>

  <div className="pcm-strength-grid">
    {[
      {
        icon: <FaShieldAlt />,
        title: "High-Volume Capability",
        desc: "Scalable production systems delivering consistent quality for mass-market automotive programs."
      },
      {
        icon: <FaCheckCircle />,
        title: "QMS & ECE R43 Compliance",
        desc: "Fully aligned with OEM quality management systems and ECE R43 regulatory standards."
      },
      {
        icon: <FaCogs />,
        title: "OEM-Approved Processes",
        desc: "Manufacturing, inspection, and validation methods approved by global automotive OEMs."
      }
    ].map((item, i) => (
      <motion.div
        key={i}
        className="pcm-strength-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15, duration: 0.7 }}
      >
        <div className="pcm-strength-icon">
          {item.icon}
        </div>
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </motion.div>
    ))}
  </div>

</section>


<section className="pcm-markets-premium">

  {/* HEADER */}
  <motion.div
    className="pcm-markets-header"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <span className="pcm-eyebrow">GLOBAL PRESENCE</span>
    <h2>Markets & Customers</h2>
    <p className="pcm-markets-sub">
      Supporting global automotive ecosystems with certified glass
      solutions across OEM, aftermarket, and international export markets.
    </p>
  </motion.div>

  {/* GRID */}
  <motion.div
    className="pcm-market-premium-grid"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.12 }
      }
    }}
  >
    {[
      {
        title: "Automotive OEMs",
        desc: "Supplying OEM-certified glass systems for global vehicle manufacturers."
      },
      {
        title: "After Sales Market",
        desc: "Reliable replacement and service solutions for aftermarket networks."
      },
      {
        title: "Authorized Dealers",
        desc: "OEM-aligned products delivered through certified dealer channels."
      },
      {
        title: "Export Market – GCC",
        desc: "Meeting regional standards across Gulf Cooperation Council markets."
      },
      {
        title: "Europe, Asia & USA",
        desc: "Export-compliant solutions meeting global regulatory requirements."
      }
    ].map((item, i) => (
      <motion.div
        key={i}
        className="pcm-market-card"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div className="pcm-market-accent" />

        <div className="pcm-market-icon">
          <FaGlobe />
        </div>

        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </motion.div>
    ))}
  </motion.div>

</section>


    </div>
  );
}
