import { createClient } from "@/prismicio";
import React from "react";

const FetchProjects = async () => {
  //await 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const client = createClient();
  const projects = await client.getAllByType("project");
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.data.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default FetchProjects;
