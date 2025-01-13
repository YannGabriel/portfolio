
import { Intro } from "../../components/Intro/intro";
import { About} from "../../components/About/about";
import { Skills } from "../../components/Skills/skills";
import { Projects } from "../../components/Projects/projects";
import { Contacts } from "../../components/Contacts/contacts";

export const Layout = () =>{
  return(
    <>
    <Intro/>
    <About/>
    <Skills/>
    <Projects/>
    <Contacts/>
    </>
  )
}