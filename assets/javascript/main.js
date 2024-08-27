function loadProjects() {
  const url = 'https://raw.githubusercontent.com/YannGabriel/portfolio/main/assets/data/projects.json'
  fetch(url)
    .then(response => response.json())
    .then(projetos => {
      const container = document.getElementById('projects-view');

      projetos.map(projeto => {
        const project = document.createElement("div");
        const projectContent = document.createElement("div")
        projectContent.classList.add("project-content")
        project.classList.add("project");

        const img = document.createElement("img");
        img.classList.add("project-image")
        img.src = projeto.image;  
        img.alt = projeto.name;    

        const title = document.createElement("h2");
        title.classList.add("project-name")
        title.textContent = projeto.name; 

        const description = document.createElement("p")
        description.classList.add("project-description")
        description.textContent = projeto.description

        const techContainer = document.createElement("div")
        techContainer.classList.add("project-tecs")

        projeto.tecs.forEach(tec => {
          const techImage = document.createElement("img")
          techImage.classList.add("tech-image");
          techImage.src = tec;
          techImage.alt = `${tec} logo`; 
          techContainer.appendChild(techImage);
        })

        container.appendChild(project); 
        project.appendChild(img);
        project.appendChild(projectContent)
        projectContent.appendChild(title);
        projectContent.appendChild(description)
        projectContent.appendChild(techContainer);

      });
    })
    .catch(error => console.error('Erro ao carregar os projetos:', error));
}

loadProjects();
