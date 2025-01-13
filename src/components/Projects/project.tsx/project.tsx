

import ProjectsData from "../../../database/api/projectsData.json"
import { useState, useEffect } from "react"
import styles from "../projects.module.scss"
import {motion} from "framer-motion"
import Github from "../../../../public/images/projectsImages/ButtonImage/github.svg"
import View from "../../../../public/images/projectsImages/ButtonImage/view.svg"

interface TecsProps{
  name?: string
  logo?: string
}

interface ProjectsProps{
  name?: string
  description?: string
  tecs?: TecsProps[]
  path?: string
  linkView?: string
  linkGithub?: string
}

export const Project = () =>{

  const [projects, setProjects] = useState<ProjectsProps[]>([])

  useEffect(() => {
    setProjects(ProjectsData)
  }, [])

  return(
    <div className={styles.projects}>
      {projects.map((project, index) => (
        <motion.div
        className={styles.project}
        initial = {{y: 40, opacity:0}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.3 +(index * 0.1), ease: "linear" }}
        >
          <img 
          className={styles.projectImage}
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAADAgQFBgABBwj/xABLEAACAQMCAwMIBQYLBwUAAAABAgMABBEFIQYSMRNBUQcUIjJhcYGRFVJTodEjQpKiscEkMzViY3JzgrLh8CU0Q0RUdLMWZKPC0v/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACERAQEAAgMBAAIDAQAAAAAAAAABAhEDEiExQVETMmEi/9oADAMBAAIRAxEAPwBrp29sinoBilSWsTpEQvVCD8zUTf30tjpaSW6gyc6pg+00E8TKkdv21u6kxnONx6zD91VTM+MJmWewMkvpcjKoPcObGK1pYaS3nEWeYoFcswCgH9owPu9lRnFF6l5c6TLD0ZCxz/aH8Kl+GrNNRvbm3kZlSGDtCUO59nSpZY7uyZYmyuY2HcT0B6k1IRWl1ydpKERW/Obc1Fzu1p2cqnnc9B3n3VjXtxd+jPJgg+gCxwBUqTSVa3t1Q89wWfwFIh54vTj5cE4GetRtwZI35ufmz1xR0Mrrz+HtqdhpKsNtavOvpPyg+sR3VG6tD5jOAZOcOPjQLS8l7ORGmZB0wKLJerhOZDIwGAzb0tNPDIzc42Wlxnl3p19IGa3ZXCqBtihW+GxhdqGlOzOZqUHajycqR7LvTMy1Ow+OR9bO4PMoIYdCvWrZwrb3Ek4uWd8d/O/X4VSreZ+0HZrvVz4XnnBIblXPj30snqmF9WwDac/0iD76u1vtEvuFUaI+lg9WdavFsfyQ91ejj/VPL6NUdrcyRWLh/wA6n5bAJ8BVb1S786Zoiuymnxx3S5XURl1JAlr+U9TFS2mm2Fkjw9CNs0xkgjaJQy1IdhEdMKqeVlXIpccOudtV5OWZYSRTvKFE5tO0ZMRg+up3FUB5Iuy264qa4i4hnu4JdNnX04pChPjg9arDttXNz5S5F4/ILz1lNeesrm6qbPdZ20uIf0yVEXhXlth4o4/Xb8aldY/k2P8Atk/xVC3b4lth4GYdB7/317FciL1Nsy6Uf/bj/wAr1cfJ8p8/1Xb/AJMYPvzVMvv47SfZbx/42NXnydDN9rH/AGsY/wAVAao9peBVVnLvIVxzN3fHwo9zdNG/ZDlxjOaj7Ubx/wBWnF16V1j2Ck6TYaiQndo9VaBXyiIp5T4lQT99OisiSL2nQ+HSmco/25MfDA/VFO5eaSYJ4ClywjeDGQI/o0deadSfCmiwfzqNGMKRzdKjlClcihTnrW4ZGQ7dKEz71ictLodpHtlaPfrigx8pk5fGtD0Y8+ysikXNbpaMp/FH5u4k5akbTVOyl5y2BUOkufRLbGskKqwXmpbxjMrtcrHiFXvohI3oFgK65YSdrao47xXneJ1UFc9R8a6RwDxYxUabekswH5N/Grcf6Hv766HcyrDEXbuFVGS4S4uZGXxqZ1jUoBasvN6wqsWcltGOYMuTXXx46JyZSpCYMYfRbpTLUtR8306Q8+H5elMNZ1iO2Q9k+Se6qNrurz3o5Oi94peW4wMMt+Iu6n84uZJW9ZzTZ28etDY0hmrz7juujHyNk1lI7SsrdTbSmsfycn9un+IVA3rsLuLCseWWcD2+gpqe1f8Ak5f7eP8AxCoG7/lEf28v/jH4V6Nc0Rl6eeXT/Zbxj7zV88nY5bnWG8YI/wD7VQZ95LA+ECftNdA4DHJ9It9aBD9xrQa55bdY/wCqKdSDN578fsoNumJEH8ynBDLdEr4CgJyf5Wl/13U9mfs2Xl6kVHKT582euKcSn015ulC/AHkbxranmiIp5Y6ct2yEycoIpGo2Ys5uwWTmpZg3T8mSD0R76M/oOpXqaw27LCreJoktjc80biCRk8QNqNxja22xYCkKkjHmXupyyN2oQDBxR9OhcM4ZaH8cH/DeAEAs9ad8tkU9Ni0jnB5eapaHg+aa2WRZeppena6i2WGOGO6r6yNzCpSymZHRkz2mdsVbNJ4DhdR5y/M2PlTy/wBC0/h5Uu3KhU6k91NOKz1zXWSK7TUbqAmTtAMdDWW2natcQk2tvM4XqdqFqXEyz3McWlcsqn1qunCurXFvZ4vLbl2yCKt/aE1pzeax1W5upYVtZmmiAMgxjlz069fhUW1vcSRNcC3lMKEhmC7DGxBrq8trFr99Nc295JbyoORo0x09u1J+gHskRcyyRqdyuM/fUbx5bVwvHr1yCW351Lr3Uymhk5BJy99dd4i4TuNSgC6ZJbo5JI7Tqcj2Zqp3PAfFAtmj83tJCOhjm6/MCheM8yn7U0QSkZ8ayrDFpWqxxhLnTbuOVdmURhgPj31lD+JTX+xEcUTSQ6VGYm5Wace/YE/tFRk4LXkZJJJlbc+2MU+4tP8As2Af02f1TTSUN51Efax/+Or1BEXP+8WX/br+01N6jBjTLWcMwOVGB0xULKnNdWY/oVH7as9lBJr1jb2sR5OXYn3Gh+B/Ku/80MUuQ/wn4CrWvAsuf95b5Cjw8GpEGaZ2cgbH3UraU7P8L9Hc+A3p1NFKMTNEwjz1Iq68P6NaG3EhjUvkjJ8BRuLIYY9KxGq9aLfEHYXXLYpmLb61IZ4ZrpSe+pKK3MvD6BVHNjuqNsNJujcKxiYqTuTRrJZbSLsi/L6hzUva6pbtadkVXIFObbToLaHM7KMjpQ/NLdyVhi2+tSzdG2RCNaQedrIuN/zRvT23tSCeSILkfnVLw2CRgLHFv9ansOnn86rTj/aV5f0ibHSImXM/UHNT0LiGERp0HSix2DbYXalG05KeY4xO5ZVuK/kRxy0jVbc6xCEnGVHUUaGFVOafwleWtZBlqk3XDqWrrLYQYkXceBqT0DXOa7aw1dUgxHlfS9c99WNhv8K5vxroV5rOtQR2ZAx1Lf5VDkl6+XSmFky9dC4IUXN3qz20sbWsdwEUg5YkorEH5ipjWL+KxVkuZFX0dt9q5zwzoXFnBLzXlitpdwTKO3t5JGXmxnBB7jvjp39+xEZxBo/G/E81xqk8cENu4Ci1jnOAq9w23J38KTHvPpsumXyaXHh3iFbvVri3idDHEQRjvq7x3HMAOZa88cJ8SNp+pXBaxuXKtysI4yxBHuq9ReUnTYiqXEV5CxOMSW7D91W/slqyujS9kZGLGPOfqisrnVxxzpzTMweTB6eg1ZW1E91S/KPoaabp1ottM07tMeZcZ7j4UrTuFIpoobi5nbPIWKg43IqzagF7eJWVWwafW5Rtli7qFXjkWq6bLa34FpDI6oOVDjuqzcFwzRyKJo2QgHuq3LbF5/SiULnripOK0gh9NVpdCa9i1Au15Ld/caleV5T6FZJaxdn/AAtlA8K3U3ZW+G97T4n9tOtW0s6hEqMeROuaf9raQ+hZx5bpkUKWGS5IM0rKPqrtmjMaFyx0Z20Fvp8C26v2zL0HWn1lp97qE4it4eXxx3D2060nTPOLpba1QB23aTHqjxNXW8udO4V0G4vLg9na2yc8j/nO37yTgD34rZax8CXsoPG6WnBejQ3+o89xPNJ2aQpnBOCfW7q59w55TJ01mJdYt7Y6bLIFk7OPDwrn1ge/Hgc1ddV4d1DyhcITa7rFwYLuY9ppVqCRFBHtgED1i2OvuPsqk8D+Tq/vNaR9YgeCCB+YxkjLY+PSk7Wfk3XF6ATh+0IBLPk9Cu1YdAhVs9s2PDAJqVhYhAG7hW5CcHl8KHfJpjjp5Zl461iLjVtXaSZFimZBZyc3Ike45CmRvj7xXomDzO8s4bqE5jmjWRCRjIIyKpOveS7S+I+J7i9ubq4tHmXmZYAPTbxyc74q0WNpHpen29hbhhBaxiJFY5OFHefGrY3ZM9T4epa22aW9vbY9amobesZqbSey2hizs21MZtNiabte05WzkYo3NWE0NCb3JlCcnnDMvStRPItu0IlwhGMVk653psNjimhSNJ0220yR3SGMu7cxJHUmnk3YPuYI+fr0puaDLKsalm7qOm2x535jiCLHuFZTH6VtO8799ZW6t2Ka0jZg0g5j3UdIwPVTFDvdR0zTkL3txHGR4tv8qhzxZPdnk0LS5LhT/wAeUckfz76nJs+9LCICfSIVQOuaaXerabYNySSrJN3RxjmJ+FQr2up33pavqZVDv5vaeio956mnNpaWtmv8Et0j8WIyxqk4/wBlvJ+hn1PUrva2thbRfWl6491IW2LnmuZ2mbw7qNljvSlWqTCRO52tIEGyJ0oorccWTThIMsPb0rXUDaz8J2yw2ZmI9Odj+iOg/bXNfL1rD3moabwzbyHlJWacKCSWY8sY2649I479vZXT7CXs17IkAIoXfwxXmzjvWDqXGd/qRIYecjk3yCiHA3+H31yZT/rbpw+PTFykVrYxW8QAjjQIoHcAMCmmk26q5k9Eb5z0qJu9fivLC2uoH5reeMOrb9Pjv/oeIqP4m1q7t9Cu4tIcC7aBjG4I2bHt2z7/ANlJldVSLU3EGnyXs9jbXkEl1AR20aOCU8M1t9bt7USTXcixwopZ3Y4CqNyTnwrivkQ4Tl1XWrnXb95lisZOTHMQZpjuQ3fgbEg9eYe2uk+Vjh1dc4OvPNAUurRfOEWPOZAoyykDrkdB4gU25ot+rVdSIeyu4XV1YBlZDkMp6EHvFNNQVVnEg9WUc3xqg+TKfVLfgeC11UMMyE2YY5YRMAQPZvkjPcRVrstWt73ULzRlYvc6fFG7gZ2LZyM+7lPxrYT0M5s5LJSGdaU60EiuhFssta51pDUg8tZhmKshpowpZ5aA/U0ZGK5lFJkjjkHK3fSCNvWoZ5vrUQAfRrVnLFBknwrKNzN9asraBWLTh7TbSQTSI9zOP+Lcemc+zuFSoLMMDAHgK0qURUaqahCQlLC0oK1LVGrMSqUaOKlIjU4SNqFotRxU6hiwVPgc1qNKdxRs21TtNIi9d1saLpt/elwpiiYrvjLHp99ea7iZpWZnJLEkknqTXVvLJqL26RafzMGkbmYA/mj/AEK5ETXPlXVhPFz4W4rNrZx6ZfNm1Hqk49HfJ3PwHh7Nt5b/ANR3MaCC8kWW1P8AFY6hcfM1zWjedTCPlErYxjHs8KjfVI9LcN8Q2ScKS3GnTLcebxNI0cQyzkbnAG+cbe+ojRfKzYarqcFnb2l75xdSJEsTRqRkkhmyG6AYO/trgmn6hd6bcLcWU0kEqnPMjlTjw2qQk12eSVp1keO5dSDIiIrHP8/HN9+fbVJnJE7x+7dE4145udGvbyyhgAvsFI7hccoUnZh47dB09+N4jyJ6g8fHCxSOWF1DIrliTk45vH2VzuWVppTJKxdid2PfVi8n96un8Y6Pcv6q3KhhsMA+ifDx60cb6Nnj0vKvtzTZhT24G599NWFXlcwDihN0oz0NuaswRobqtFLNSXbamgAELQnXejE/zaQ/9WjGNyi5rKJlayiBiFpYWtolFVKcpCpRUjpapRUjobZpEo6JW0jo6LSbHTca06hoaLR4hvSnch8vdoy32k3oZQjwvGVHXIOfvB+6uTcua7B5fpfQ0WA+Mrdf6o6Zrnmgdklte3fm8V1cqI4LWKVA6iSQ45ip2OAGwDtkjrio5fXTj8QLLy70mp+407QopniGvSsqMVyLIsDjwPP0otpb8NIJhcapJKZIikbGzZeybIPPs+/QjB23pen6HsreK1irB9GcPd/EUufbYN/+qe6LFw/puoxXv048zRZMaCyZTz4IU55tiDg59lDo3aKolWPgaza/4r0q2T1muUPuwebuI8M9R76TxHenU9O0q+upDLqXLLBdSvu0vIRyMx72w2Mn6oq7+QfRDc6vda1Mn5GzTs07syMPdvgfLIpsfAyvjtNyc5Ptpkxp5L302YVWOfRu4oLU5YLQmVaLaAaht0o7JQmWmhaC3NQyaMVpBWiAJrKWU3rKzBAUtRWgkn2Un6BpY5h+Y3yNNspaijIKCrUVXWlpoMtGSgK1FVqFE4WjRnemqtREalGfXO/Lzp7TaLp2oooIgmMbnHcw2yc+I++uK2881uxaFuRtuns3H3jPvr0tx7p30vwTqtqI+eVYTNGB15k9IY+WK8xHrtUeSeujjvjR61b+BrK1tb+x1LXLW3l0+ZmWKO46SlXQPt3+i5wN8lfdVXtLaa7uYre3TnlldURfEsQAPmRXVeK7ZdA0vhnRba0W81e0h5o4Vw68zsskrbbtkoVx4Mx7hU4et8b+RptF0++1bStTWWztkMrQXCYkVBvsw2Y9e4VyiYcnKF9rf6+VemOLuLdNu/JnfajLbSFbhfNpbN2MckcrHDI22VK7npuB7a80XSuso51weVSPcQCD8q3xo1JNJNyhzso9EdMV6Y8mOj/QfBdjFIFFxcr5xKRjOW3A+Ax99ca8l/Bb8T6qLm8BTSrRwZ2I/jD1CDx9vgPeK9DySDuAA7gKpxy/lPkv4JdtqCxpTGhGrJVpjQjS2NDY1iktQ2pTHahtTRiTSDSiaQaINGtVhrVYFoH96lr/AHqAl1B9vH8xRkuIPtY/0xUrtSWCqP63zogX+bSFkR/VdfnRRSna7KM+tGvxApJtLY79hD+iKKKVmh63gHmVp9hF8FxWxYW32XyJ/Gj81bBobragB0+2ZWVk2YFSM9xrx1qNlJaaldWZGWgmeI+9SR+6vZwzzD5mvKHH1tJp3GOswTo8Re+mkQMpyUZyVI94IpPv0+Pnw78kyStxvYWwjiaORiZVlUMMRgyZ9hygwe471bfKFMYNavL+wVTfp+TWfIkyBgjlBGOrfPb21zzh7XH0PW7XUrS1Mk9uSfyznDAgqwwBsCCfH49961OUahrNnyAhZ76MkHrymcfuFUwk9DO3xFXt7qHEnD9/aTtdXOp6Kyy9rEiqDyM4bpjOAxIypI5CcjOKr+n6xpl9c26cWWktxAhCm5tHCThR45HKw9mAfbVu8hNwz8ZzyMTmUM7foua6rxD5M+FuIJHmubA2t1JktPaN2ZJ8SPVJ9pGalbafciS4Ts+H5OHrT/024bTAn5Ls5Ce/JzncNnrnepRtMh+tJ8x+FV7gXgS04LN55hfXVxHdcv5OcjClc77d5z91WzFNMqSybMG0uD7ST5j8KQ2lRfayfd+FSBFapu1LqIw6TH9u3yFDbR1/6n9X/OpY0kij2rdYh20Zu65XH9T/ADpB0Vv+pX9A/jUyRSSKPah1iEOiSfbx/omkHRLjunhx7z+FTbKtCKLR7UOsQ/0Jd/XhPxP4VqpjkWso9qHWK6BSxQxSwasmWKIkhT1Wb4E0IUoULB2cpdTfaSfpZo8V3clwolb2bCmSqxYKvfUra26wpl92buqdkGU4SdyBHn0u80dZWAGKDGvICCvWkTv2UfMRv3VOzanost4ysVXc461C6to2la52X01p1vedl6jSLuvsBG/wo3Pk5PfS1ej1ban8XcHaekVpc6RpunWkUbMk/YwYlYupjX0h1GW6eOD3VQtLnFxxDafVEuR/djd/2iuo8a65b6To6CZDJcTyDzWEKSZJEPOqjbqWUAe/x2PE+B7tp9cgEzJ2jNMQM4zmCToPecfKjLrwdW+pjyCDPGLH6sLH9Vvxr0HLMUHo15/8g/KnFFxK89tEEg3WWQKzg59Xx3xn2V3WeXnap4zZsymu5vrUjzub7Sgs29IJp9E2cG9n+v8AdSTfz/zflTYmhmmkgbOzqM4/NX7/AMa19KS/VX76ZGkmj1gbp99Kt9mvzNYdW/oP1/8AKo40k0esLupA6sv2H6/+VJOrr9k36QqOakEUesbdSn0wv2Un3Vqoqso9YHalClCsrKYGx1pQNZWVmp5ZIu8rdRsopzzNk4basrKSmjZYkes23tpnLKZJSW7jWVlAzXPvShJWVlCsRc2tnqUJg1CISwght8gow6MpG6sO4g5Fco4q4K0zRfKXounQmeS1vgs8qzyczZ52yOYb/mjvzud6ysqeX1XAHyK3aWrasz2E9yCsHpxLERH65352B3H1c9/TauxxT9rEJCjx7kEORkH4E/trKyjx/Az+tk0kmsrKchJNJJrKyjAIJpJNbrKaBQya0TWVlEpBpBNbrKLEZrKysrA//9k="
          alt={project.name} />

          <div className={styles.projectContent}>
            <h2 className={styles.projectTitle}>
              {project.name}
            </h2>
            <div className={styles.projectTecs}>
              {project.tecs?.map((tec) => (
                <div>
                  <img src={tec.logo} alt="" />
                </div>
              ))}
            </div>

            <p className={styles.aboutProject}>
              {project.description}
            </p>

            <div className={styles.projectButtons}>
              <a href={project.linkGithub}
              rel="noopener noreferrer"
              className={styles.targetButton}
              target="blank"
              >
                <button className={styles.gitRepository}>
                  <img src={Github} alt="Website Image"
                  className={styles.githubImage}
                  />
                  <span className={styles.gitTextButton}>
                    Github
                  </span>
                </button>
              </a>

              <a href={project.linkView}
              rel="noopener noreferrer"
              className={styles.targetButton}
              target="blank">
                <button className={styles.viewWeb}>
                  <img src={View} alt="Botão Web"
                  className={styles.webImage}
                  />
                  <span className={styles.webButtonText}>
                    View
                  </span>
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}