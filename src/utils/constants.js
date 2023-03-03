import vector from "../assets/images/vector.svg";
import yaroslav from "../assets/images/yaroslav.jpeg"
import volodymyr from "../assets/images/volodymyr.jpeg"

export const navLinks = [{
  title: "Home",
  link: "#Home",
},
{
  title: "Principles",
  link: "#Principles",
},
{
  title: "Products",
  link: "#Products",
},
{
  title: "Team",
  link: "#Team",
}
]

export const mainSections = [
  {
    title: <>We are glad you visited
      <div className="d-inlblock margin-left-20">
        <div className="flex flex-column-reverse">

          <span>
            G1Core
          </span>
          <img src={vector}
            className="pos-abs"
            alt="Headliner of the G1Core" />
        </div>
      </div>
    </>,
    id: "Home",
    children: <div
      className="w-70"
    >
      <p>
        Our passion is creating engaging mobile apps and games that bring value to you. If you are a game designer, a developer, or a potential partner, please reach out to us to discuss collaboration.
      </p>
    </div>

  },
  {
    title: "Our Principles",
    id: "Principles",
    children: <div>
      <p>
        We build simple yet engaging games and value people who have fun building games that improve memory and vital cognitive functions of the brain (scientifically proven fact). Reach out to us if you have some cool hyper casual game ideas, already developed games and want to better monetize those, or simply want to collaborate. Our guiding principles are:
      </p>
    </div>

  },
  {
    title: "Our Products",
    id: "Products",

  },
  {
    title: "Our Team",
    id: "Team",
  },
  {
    title: "Contact Us",
    id: "Contact",
  }
]

export const team = [
  {
    name: "Yaroslav",
    title: "CEO",
    description: "Advised to tech companies. Managed operations, business development, and sales in mobile apps, games, e-commerce and fintech.",
    photo: yaroslav
  },
  {
    name: "Tatiana",
    title: "CMO",
    description: "Marketing genius and a strong will lady.",
    photo: yaroslav
  },
  {
    name: "Volodymyr",
    title: "CTO",
    description: "Senior full-stack developer. Love code and startups. Founder of MMNT - platform to book photographrs online.",
    photo: volodymyr
  }
]

export const principles = [
  "Be honest",
  "Respect others",
  "Deliver result",
  "Make the world a better place",
  "Have fun playing",
]