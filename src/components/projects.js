import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Fade} from 'react-awesome-reveal';
import Button from './button';

const Projects = () => {
  const { site } = useStaticQuery(graphql`{
  site: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(projects)/"}}
    sort: {frontmatter: {sort: ASC}}
  ) {
    projects: nodes {
      fields {
        slug
      }
      frontmatter {
        title
        stack
        icon
        blurb
      }
      excerpt(pruneLength: 300)
    }
  }
}`);

  const projectsMarkup = site.projects.map((project, i) => {
    return (
      <div key={`project-${i}`} className='p-7 bg-zinc-700 rounded-3xl flex flex-col justify-between border-box'>
        <div className='flex flex-row gap-3 items-center'>
          <FontAwesomeIcon icon={project.frontmatter.icon}/>
          <h4 className='m-0'>{project.frontmatter.title}</h4>
        </div>
        <p className='text-base'>{project.frontmatter.blurb}</p>
        <div className='flex justify-end mt-5'>
          <Button href={`projects` + project.fields.slug}>
            Learn More
          </Button>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className='flex flex-row'>
        <Fade>
          <h2>Projects</h2>
        </Fade>
      </div>
      <Fade cascade>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
          {projectsMarkup}
        </div>
      </Fade>
    </>
  );
};

export default Projects;