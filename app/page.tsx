"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faHeart } from "@fortawesome/free-solid-svg-icons";
const messages = [
  "You are my sunshine.",
  "You light up my life.",
  "I cherish every moment with you.",
  "You are the reason I smile.",
  "You make my heart skip a beat.",
  "Your love is all I need.",
  "You complete me.",
  "I can't imagine my life without you.",
  "You are my everything.",
  "You mean the world to me.",
  "I am so lucky to have you in my life.",
  "You make every day better.",
  "I am in love with your smile.",
  "You are the one I've been waiting for.",
  "Your love is like a beautiful melody.",
  "I love you more than words can say.",
  "You are my dream come true.",
  "You are the love of my life.",
  "I am forever grateful for your love.",
  "Am in love with you in scary proportions, seeing you turn from a girl to a lady as I watch is one of the most fulfilling things in our relationship.💖",
  "Your love lights up my world.",
  "You are my one and only.",
  "I am so in love with you.",
  "You are the best thing that ever happened to me.",
];

const images = ["/baddie.jpg", "/chum.jpg", "/Chumchum.jpg"];

const IndexPage = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [currentLove, setCurrentLove] = useState("");

  useEffect(() => {
    const birthday: Date = new Date("2024-06-16");
    const today: Date = new Date();
    const timeDifference = birthday.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    setDaysLeft(daysLeft);

    const messageIndex = daysLeft;
    const imageIndex = images.length - 1;

    if (messageIndex >= 0 && messageIndex < messages.length) {
      setCurrentMessage(messages[messageIndex]);
      setCurrentImage(images[imageIndex]);
      setCurrentLove(`I love your ${messageIndex + 1}th trait`);
    }
  }, []);

  return (
    <div className={styles.container}>
      {/* <div className={styles.bg}>
      <Image
          className={styles.backgroundimage}
          width={800}
          height={1000}
          src={"/bg.jpg"}
          alt="background-img"
        />
      </div> */}
      <div className={styles.flowers}>
        <Image
          className={styles.flowerimage}
          width={800}
          height={1000}
          src={"/flowers.png"}
          alt="flower"
        />
        <Image
          className={styles.flowerimage}
          width={800}
          height={1000}
          src={"/flowers.png"}
          alt="flower"
        />
      </div>
      <div className={styles.countdown}>
        <h1>
          {daysLeft} days until your birthday!
          <FontAwesomeIcon icon={faHeart} />
        </h1>
        <p className={styles.message}>{currentMessage}</p>
        <Image
          className={styles.image}
          width={800}
          height={1000}
          src={currentImage}
          alt="Thoughtful"
        />
        {/* <div className={styles.flipCard}>
          <motion.div whileHover={{ rotateY: 180 }} whileTap={{ scale: 0.9 }}>
            <div className={styles.cardFront}>Click Me!</div>
            <div className={styles.cardBack}>{currentLove}</div>
          </motion.div>
        </div> */}
        <div className={styles.musicPlayer}>
          <audio controls>
            <source src="/path/to/your/music.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
