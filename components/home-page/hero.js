import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/gargantua.png"
          alt="An image showing myself"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello, I'm Edson Marcelo</h1>
      <p>I blog about web development - especially frontend development.</p>
    </section>
  );
}

export default Hero;
