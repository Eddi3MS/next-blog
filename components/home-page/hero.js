import Image from "next/image";
import { HeroStyled } from "./hero.styled";

function Hero() {
  return (
    <HeroStyled>
      <div className="image">
        <Image
          src="/images/site/gargantua.png"
          alt="An image showing myself"
          width={350}
          height={350}
        />
      </div>
      <h1>Bem-vindos!!</h1>
      <p>
        Eu me chamo <span>Edson Marcelo</span>, sou desenvolvedor front-end e
        escrevo, aqui, informações relacionadas.
      </p>
    </HeroStyled>
  );
}

export default Hero;
