import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import heroBg from "../assets/video/hero_section.mp4";
import mobileHeroBg from "../assets/video/mobile_hero.mp4";
import "../style/home.css";

const Home = () => {
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if (width < 766) {
      setIsMobileWidth(true);
    } else {
      setIsMobileWidth(false);
    }
  }, [width]);
  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <video
          className={`hero-bg ${isMobileWidth ? "top-14" : "top-0"}`}
          src={isMobileWidth ? mobileHeroBg : heroBg}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <p>Hello</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ad culpa
        delectus perspiciatis quos, consectetur, maxime modi tempora temporibus
        est excepturi voluptate natus aspernatur vitae ea rerum veniam, quas
        saepe optio nam eaque! Inventore repellendus nemo maiores hic quisquam
        officia facere, id laboriosam? Cum voluptas minus accusantium possimus
        deserunt corrupti quisquam tempora ipsa non quam quas, magnam sit.
        Architecto veniam omnis culpa excepturi distinctio voluptatem recusandae
        fugiat vitae necessitatibus quo est enim ex, ducimus, facilis
        consectetur nostrum. Sit maiores, ipsa corrupti ex, consequuntur nemo
        soluta quas tenetur minima consequatur dolores saepe. Tenetur explicabo
        corporis hic vero impedit blanditiis architecto excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ad culpa
        delectus perspiciatis quos, consectetur, maxime modi tempora temporibus
        est excepturi voluptate natus aspernatur vitae ea rerum veniam, quas
        saepe optio nam eaque! Inventore repellendus nemo maiores hic quisquam
        officia facere, id laboriosam? Cum voluptas minus accusantium possimus
        deserunt corrupti quisquam tempora ipsa non quam quas, magnam sit.
        Architecto veniam omnis culpa excepturi distinctio voluptatem recusandae
        fugiat vitae necessitatibus quo est enim ex, ducimus, facilis
        consectetur nostrum. Sit maiores, ipsa corrupti ex, consequuntur nemo
        soluta quas tenetur minima consequatur dolores saepe. Tenetur explicabo
        corporis hic vero impedit blanditiis architecto excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ad culpa
        delectus perspiciatis quos, consectetur, maxime modi tempora temporibus
        est excepturi voluptate natus aspernatur vitae ea rerum veniam, quas
        saepe optio nam eaque! Inventore repellendus nemo maiores hic quisquam
        officia facere, id laboriosam? Cum voluptas minus accusantium possimus
        deserunt corrupti quisquam tempora ipsa non quam quas, magnam sit.
        Architecto veniam omnis culpa excepturi distinctio voluptatem recusandae
        fugiat vitae necessitatibus quo est enim ex, ducimus, facilis
        consectetur nostrum. Sit maiores, ipsa corrupti ex, consequuntur nemo
        soluta quas tenetur minima consequatur dolores saepe. Tenetur explicabo
        corporis hic vero impedit blanditiis architecto excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ad culpa
        delectus perspiciatis quos, consectetur, maxime modi tempora temporibus
        est excepturi voluptate natus aspernatur vitae ea rerum veniam, quas
        saepe optio nam eaque! Inventore repellendus nemo maiores hic quisquam
        officia facere, id laboriosam? Cum voluptas minus accusantium possimus
        deserunt corrupti quisquam tempora ipsa non quam quas, magnam sit.
        Architecto veniam omnis culpa excepturi distinctio voluptatem recusandae
        fugiat vitae necessitatibus quo est enim ex, ducimus, facilis
        consectetur nostrum. Sit maiores, ipsa corrupti ex, consequuntur nemo
        soluta quas tenetur minima consequatur dolores saepe. Tenetur explicabo
        corporis hic vero impedit blanditiis architecto excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ad culpa
        delectus perspiciatis quos, consectetur, maxime modi tempora temporibus
        est excepturi voluptate natus aspernatur vitae ea rerum veniam, quas
        saepe optio nam eaque! Inventore repellendus nemo maiores hic quisquam
        officia facere, id laboriosam? Cum voluptas minus accusantium possimus
        deserunt corrupti quisquam tempora ipsa non quam quas, magnam sit.
        Architecto veniam omnis culpa excepturi distinctio voluptatem recusandae
        fugiat vitae necessitatibus quo est enim ex, ducimus, facilis
        consectetur nostrum. Sit maiores, ipsa corrupti ex, consequuntur nemo
        soluta quas tenetur minima consequatur dolores saepe. Tenetur explicabo
        corporis hic vero impedit blanditiis architecto excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ad culpa
        delectus perspiciatis quos, consectetur, maxime modi tempora temporibus
        est excepturi voluptate natus aspernatur vitae ea rerum veniam, quas
        saepe optio nam eaque! Inventore repellendus nemo maiores hic quisquam
        officia facere, id laboriosam? Cum voluptas minus accusantium possimus
        deserunt corrupti quisquam tempora ipsa non quam quas, magnam sit.
        Architecto veniam omnis culpa excepturi distinctio voluptatem recusandae
        fugiat vitae necessitatibus quo est enim ex, ducimus, facilis
        consectetur nostrum. Sit maiores, ipsa corrupti ex, consequuntur nemo
        soluta quas tenetur minima consequatur dolores saepe. Tenetur explicabo
        corporis hic vero impedit blanditiis architecto excepturi.
      </p>
    </div>
  );
};

export default Home;
