import React from 'react'
import '../styles/Home.scss';
import logoDC from '../assets/logos/logoDC.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';
import img6 from '../assets/images/img6.png';
import img7 from '../assets/images/img7.png';
import img8 from '../assets/images/img8.png';
import img9 from '../assets/images/img9.png';
import img10 from '../assets/images/img10.png';
import Polygon from '../assets/icones/Polygon.png';
import Polygon1 from '../assets/icones/Polygon1.png';
import guillemets1 from '../assets/logos/guillemets1.png';
import guillemets2 from '../assets/logos/guillemets2.png';
import img12 from '../assets/images/img12.png';
import img15 from '../assets/images/img15.png';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <main>
    

       {/* Header en tete  */}

      <section id="hero">
        <div className="container">
          <div className="content">
          
            <img
              className=""
              src={logoDC}
              alt=""
              />
            <p className="intro"> SUPERMAN</p>
              
            
          </div>
          <p className="titre">L’HOMME D’ACIER</p>
          
          {/* <img
            className="fleche"
            src={flèche_down_header}
            alt=""
          /> */}
        </div>
      </section>

      {/* Batman au cinéma */}

      <section id="batman-cinema">
        <div className="container">
          <div className="head-personnage">
            <h1 className="titre">SUPERMAN AU CINÉMA</h1>
            <p className="description">
            Dans la version actuelle de son histoire, Superman est né sur la planète Krypton sous le
            nom de « Kal-El ». Encore bébé, il fut placé dans un vaisseau spatial par son père, le
            scientifique Jor-El, et sa mère, Lara, car la planète était sous la menace d'une destruction
            totale.Le vaisseau quitta Krypton juste avant l'explosion fatidique... Au terme d'un très long
            voyage, il atterrit sur la planète Terre. Kal-El est trouvé par un couple de fermiers de
            Smallville, (Kansas). Jonathan et Martha Kent, qui n'ont pas d'enfant, décident alors de
            l'adopter et de garder le secret sur son origine.
            Kal-El est rebaptisé « Clark Joseph Kent » et grandit entouré de ses amis Lana Lang (son
            premier amour) et Pete Ross jusqu'à ce que ses pouvoirs se révèlent à lui au moment de
            son adolescence.Jeune adulte, Clark décide de s'installer à Metropolis pour devenir
            . Il y est engagé par Perry White, le rédacteur en chef du Daily Planet. Pour
            sauver les personnes qui lui sont chers ainsi que les habitants de la Terre, Clark revêt son
            costume et devient Superman, l’homme d’acier aux yeux du monde.
            </p>
          </div>
          <div className="batman-personnage">
            <div>
              <img src={img2} alt="" />
              {/* <div className="personnage-info">
                <h3 className="nom">Robert Pattinson</h3>
                <p className="annee">2022</p>
              </div> */}
            </div>
            <div>
              <img height="494" width="304" src={img3} alt="" />
              {/* <div className="personnage-info">
                <h3 className="nom">Christian Bale</h3>
                <p className="annee">2006-2008-2012</p>
              </div> */}
            </div>
            <div>
              <img height="494" width="304" src={img4} alt="" />
              {/* <div className="personnage-info">
                <h3 className="nom">Ben Affleck</h3>
                <p className="annee">2016-2017/2020-2023</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section id="batman-nemesis">
        <div className="container">
          <div className="head-personnage">
        
              <h1 className="titre">NÉMÉSIS</h1>
             
            <p className="description">
            Superman mène une lutte sans fin contre de nombreux adversaires, son adversaire le plus
            connu étant le milliardaire Lex Luthor, fils de Lionel Luthor, qui déteste tout ce qu'incarne
            Superman et finira notamment par devenir président des États-Unis, ce qui participera à
            faire de lui le pire ennemi de Clark. Doomsday, une abomination génétique qui souhaite tout
            détruire sur son passage, sera celui qui réussira à tuer Superman. Zod est un kryptonien qui
            fut condamné à l'emprisonnement dans la Zone Fantôme pour s'être insurgé contre les
            autorités. Il est libéré et vient sur Terre pour la conquérir mais est arrêté par Superman.
            Étant kryptonien, Zod possède les mêmes pouvoirs que Superman, et constitue donc l'un de
            ses plus dangereux adversaires.
            </p>
          </div>
          <div className="batman-personnage">
            <div>
              <img src={img5} alt="" />
              {/* <div className="personnage-info">
                <h3>The Riddler - Paul Dano</h3>
                <p>2022</p>
              </div> */}
            </div>
            <div>
              <img src={img6} alt="" />
              {/* <div className="personnage-info">
                <h3>Le Joker - Heath Ledger</h3>
                <p>2008</p>
              </div> */}
            </div>
            <div>
              <img src={img7} alt="" />
              {/* <div className="personnage-info">
                <h3>Darkseid - Ray Porter</h3>
                <p>2022</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

       {/* Section allies */}

      <section id="batman-allies">
        <div className="container">
          <div className="head-personnage">
            <h1 className="titre">ALLIÉS</h1>
            <p className="description">
            Jor-El était le père biologique de Kal-El, ainsi que le savant le plus célèbre de Krypton et un
            membre influent du Conseil des Sciences. Lorsque Krypton s’effondre il place une version
            impuissante de lui même dans le vaisseau emportant Kal-El vers la Terre afin de lui apporter
            les réponses à ses questions quand il grandira. Sur Terre Clark est pris en charge par
            Jonathan et Martha Kent qui l’élèvent comme leur propre fils. Lorsque John sera mort, Clark
            pourra compter sur le soutien indéféctible de sa mère. Une fois engagé au Daily Planet, il
            rencontrera Loïs Lane qui deviendra sa partenaire et son seul “véritable amour”
            </p>
          </div>
          <div className="batman-personnage">
            <div>
              <img src={img8} alt="" />
              {/* <div className="personnage-info">
                <h3>Alfred Pennyworth - Michael Cain</h3>
                <p>2006 - 2008 - 2012</p>
              </div> */}
            </div>
            <div>
              <img src={img9} alt="" />
              {/* <div className="personnage-info">
                <h3>Catwoman - Zoé Kravitz</h3>
                <p>2008</p>
              </div> */}
            </div>
            <div>
              <img src={img10} alt="" />
              {/* <div className="personnage-info">
                <h3>James Gordon</h3>
                <p>2014-2019</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Section Justice League */}

      <section id="batman-justice-league">
        <div className="container">
          <div className="head-personnage">
            <h1 className="titre">BATMAN V SUPERMAN</h1>
            <p className="description">
            Le monde n’est pas assez grand pour deux super héros. Alors que Superman se battait
            contre Zod, l’affrontement fait des dégats et détruit partiellement la ville de Métropolis. Bruce
            Wayne alors présent dans la ville assiste, impuissant, à l’effondrement de la ville qui fait
            beaucoup de victimes. Wayne est alors persuadé que Superman causera un jour la perte de
            l'Humanité et qu'il est inévitable de se préparer à l'éliminer. Devenu méfiant il se demande si
            l'homme de fer, cet extraterrestre de Krypton, qui peut à lui seul détruire le monde d'une
            simple pichenette, décidera un jour de ne plus défendre la Terre, voire même de causer sa
            perte.
              
            </p>
            <p className="description">
            De son côté Superman d’une part cherche à se défendre mais retourne l’offensive contre
            Batman. Ce dernier n'est plus que l'ombre de lui-même. Devenu un justicier impitoyable,
            mégalomane et cruel à la suite du meurtre de son ancien partenaire Robin par le Joker, il
            n'hésite plus à violer son code moral en éliminant et marquant au fer les criminels.
            Superman souhaite simplement lui rappeler le code moral des “justicier” en usant de la force
            s’il le faut pour que Batman cesse son comportement abusif.
              
            </p>
          </div>

          <h1 className="titre">MULTIMEDIA</h1>
        </div>

        
      </section>
  
      {/* Multimedia */}
  
      <section id="multimedia">
        <div className="container">
          <button className="left">
            <img src={Polygon1} alt="" />
          </button>
          <button className="right">
            <img src={Polygon} alt="" />
          </button>
          <div className="slider-multimedia">
            <div className="slider-image">
              <img src={img12} alt="" />
            </div>
            <div className="slider-content">
              <h4>ACTION, ADVENTURE</h4>
              <span>Superman Man of Steel</span><br />
              <span>IMDB:<span className="yellow">7.1</span></span>
              <p>
              Clark Kent, malgré son apparence humaine normale, est l'un des derniers membres d'une
              race éteinte. Il se retrouve forcé de révéler son identité lorsque la Terre est envahie par une
             armée de survivants qui menacent détruire la planète.
              </p>
            </div>
          </div>
          <div className="video">
            <NavLink
              href="https://www.youtube.com/watch?v=yP7J0rlFkrg "
              target="_blank"
              ><img
                className="my-5"
                width="100%"
                src={img15}
                alt=""
            /></NavLink>
          </div>
        </div>
      </section>

      {/* formulaire */}

      <section id="contact">
        <div className="form">
          <h2>PRENONS CONTACT</h2>
          <form action="" id="myform">
            <label className="title">ADRESSE EMAIL</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Adresse email"
            />
            <span id="invalid"></span>
            <label className="title">NEWSLETTER</label>
            <label className="form-check-label" for="check">
              En cochant cette case vous acceptez de recevoir l’actualité
              concernant les aventures de Superman :
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              name="check"
              id="check"
              value="checkedValue"
            />
            <div className="menu">
              <div className="menu-btn">
                 {/* <span
                  >Choisissez la fréquence à laquelle vous souhaitez recevoir
                  votre newsletter</span
                >
                <span className="icon"
                  ><img src="./assets/Logos/icon_flèche_2.png" alt=""
                /></span>  */}
                <select id="dropdownlist" name="dropdownlist">
                  <option selected="selected">
                    Choisissez la fréquence à laquelle vous souhaitez recevoir
                    votre newsletter
                  </option>
                  <option className="c-bg" value="Quotidiennement">
                    Quotidienne
                  </option>
                  <option className="c-bg" value="hebdomadaire">Hebdomadaire</option>
                  <option className="c-bg" value="Mensuel">Tous les mois</option>
                  <option className="c-bg" value="annuel">Tous les an</option>
                </select>
              </div>
              <br />
            </div>
            <div className="news">Souhaitez vous recevoir des news</div>
            <div className="btn-group">
              <input type="radio" name="choix" id="film" /><label
                className="btnform"
                for="film"
                >Des films</label
              >
              <input type="radio" name="choix" id="comics" /><label
                className="btnform"
                for="comics"
                >Des comics</label
              >
              <input type="radio" name="choix" id="tout" /><label
                className="btnform"
                for="tout"
                >De tout</label
              >
            </div>
            <span className="title">MESSAGE</span>
            <textarea
              rows="1"
              name="msg"
              id="msg"
              placeholder="Laissez un commentaire pour la communauté"
            ></textarea>
            <input  className="btn" type="submit" value="CONFIRMER" />
          </form>
        </div>
      </section>

      {/* Section pour les citations */}

      <section id="citations">
        <div className="container">
          <div className="guillemet-open">
            <img
              className="guillemet"
              src={guillemets1}
              alt=""
            />
          </div>
          <div>
            <div className="citation-carte">
              <div className="carte-texte">
              - Que représente le S ?
              </div>
              <div className="carte-auteur">
              - Ce n’est pas un S. Sur ma planète cela signifie espoir.
                <div className="sep"></div>
                Man Of Steel, Lois Lane et Clark Kent.
              </div>
            </div>
          </div>
          <div className="guillemet-close">
            <img
              className="guillemet"
              src={guillemets2}
              alt=""
            />
          </div>
        </div>
      </section>

</main>

  )
}

export default Home