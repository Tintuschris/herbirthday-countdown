"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faHeart } from "@fortawesome/free-solid-svg-icons";
import MusicPlayer from "./_components/musicplayer";

const messages = [
  "Happy Birthday! 🎉🌸 Today is all about celebrating you and the incredible person you are. Your kindness, strength, and beautiful spirit shine so brightly. I hope your day is filled with joy, love, and everything that makes you happy. You deserve all the wonderful things life has to offer. Enjoy every moment to the fullest! 🎂❤️...😉💫🧡💯",
  "You're a true definition of goddess Aphrodite💯💗",
  "Pearl❤️...sexy fingers😍",
  "You fit and look pretty in almost everything love💯💖💐",
  "Your first day at work, I remember it was one of your happiest days yet this year and I was happy for you too as much I was scared but this phase as seen you grow to a whole new person a more confident version of yourself. I pray that the future opportunities make you a better version of yourself and make you realize the prayers of your heart.🤞🍀",
  "Your dimple makes your smile even more heartwarming😍😊",
  "Baddie vibes...🤗",
  "Your eyes always sell you off❤️, Wang'e dongo(Luo)😂",
  "I'll admit, you're not the easiest persons to deal with but everytime when I look at you I see a beautiful story that I wanna be part of till the end.",
  "Kisses to you...😘😘😘",
  "This is a unique one, a throwback. Reminding you of how far we've come from and to tell you that the journey has been worth it for me and that with patience everything is possible. Not even myself thought that we could come this far, the story has taken twists and turns but how I feel about you has never changed.♾️💯",
  "Hello Pearl, your beauty still leaves me dumbfounded. I'll always choose you my love.",
  "Hey beautiful, the intensity of your gaze makes me feel like the luckiest person in the world.💟",
  "Glowing like a marble...🤗",
  "Two people from different worlds, brought together by one true love💖. Remember, am always here to lend a hand. 💞",
  "Am in love with you in scary proportions, seeing you turn from a girl to a lady as I watch 🤭 is one of the most fulfilling things in our relationship.💖",
];

const images = [
  "/chum.jpg",
  "/Diva.jpg",
  "/Pearl.jpg",
  "/Dinner.jpg",
  "/office.jpg",
  "/dimple.jpg",
  "/Baddie.jpg",
  "/shiie.jpg",
  "/baddie-II.jpg",
  "/Loves.jpg",
  "/TBT.jpg",
  "/hello.jpg",
  "/hey.jpg",
  "/sunshine.jpg",
  "/MenU.jpg",
  "/Dinner.jpg"
];
const musicFiles = ["/music1.mp3", "/music2.mp3", "/music3.mp3"];

const IndexPage = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [currentLove, setCurrentLove] = useState("");
  const [currentMusic, setCurrentMusic] = useState("");

  useEffect(() => {
    const birthday = new Date("2024-06-16");
    const today = new Date();
    const timeDifference = birthday.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    setDaysLeft(daysLeft);

    const messageIndex = daysLeft % messages.length;
    const imageIndex = daysLeft % images.length;
    const musicIndex = musicFiles.length - 1;

    setCurrentMessage(messages[messageIndex]);
    setCurrentImage(images[imageIndex]);
    setCurrentLove(`I love your ${messageIndex + 1}th trait`);
    setCurrentMusic(musicFiles[musicIndex]);

    // Add confetti
    addConfetti();
  }, []);

  const addConfetti = () => {
    const confettiContainer = document.createElement("div");
    confettiContainer.className = styles.confetti;
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
      const confettiPiece = document.createElement("div");
      confettiPiece.className = styles.confettiPiece;
      confettiPiece.style.left = `${Math.random() * 100}vw`;
      confettiPiece.style.animationDelay = `${Math.random() * 3}s`;
      confettiContainer.appendChild(confettiPiece);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.flowers}>
        <Image
          className={styles.flowerimage}
          width={800}
          height={1000}
          src={"/baloons.png"}
          alt="balloon"
        />
        <Image
          className={styles.flowerimage}
          width={800}
          height={1000}
          src={"/baloons.png"}
          alt="balloon"
        />
      </div>
      <div className={styles.countdown}>
        <h1>
          {daysLeft === 0 ? "It's finally your birthday Love! Happy Birthday..." : `${daysLeft} days until your birthday!`}
         <br />
          <FontAwesomeIcon icon={faHeart} />
        </h1>
        <p className={styles.message}>{currentMessage}</p>
        <Image
          className={styles.image}
          width={800}
          height={1000}
          src={currentImage}
          alt="pearl"
          priority
        />
        <div className={styles.musicplayer}>
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
