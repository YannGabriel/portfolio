function loadProjects() {
  fetch('../assets/data/projects.json')
    .then(response => response.json())
    .then(projetos => {
      const container = document.getElementById('projects-view');

      projetos.map(projeto => {
        const project = document.createElement("div");
        const projectContent = document.createElement("div")
        projectContent.classList.add("project-content")
        project.classList.add("project");

        const img = document.createElement("img");
        img.classList.add("proect-image")
        img.src = projeto.image;  
        img.alt = projeto.name;    

        const title = document.createElement("h2");
        title.classList.add("project-name")
        title.textContent = projeto.name; 

        const description = document.createElement("p")
        description.classList.add("project-description")
        description.textContent = projeto.description

        container.appendChild(project); 
        project.appendChild(img);
        project.appendChild(projectContent)
        projectContent.appendChild(title);
        projectContent.appendChild(description)

      });
    })
    .catch(error => console.error('Erro ao carregar os projetos:', error));
}

loadProjects();
