import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Fade} from 'react-awesome-reveal';

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
      <div key={`project-${i}`} className='p-5 border-2 border-slate-200 rounded-3xl flex flex-col justify-between border-box'>
        <div className='flex flex-row gap-4 items-center'>
          <FontAwesomeIcon icon={project.frontmatter.icon} size='lg'/>
          <h4 className='m-0'>{project.frontmatter.title}</h4>
        </div>
        <p className='text-base'>{project.frontmatter.blurb}</p>
        <div className='flex justify-end mt-5'>
          <a href={`projects` + project.fields.slug} className='px-5 py-3 bg-slate-600 hover:bg-slate-500 text-slate-200 rounded-3xl text-sm no-underline'>
            Learn More
          </a>
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
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {projectsMarkup}
        </div>
      </Fade>
    </>
  );
};

export default Projects;