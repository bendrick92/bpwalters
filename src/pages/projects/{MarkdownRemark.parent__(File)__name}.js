import React from 'react';
import {graphql} from 'gatsby';

const ProjectPageTemplate = ({ data: { markdownRemark } }) => {
  const project = markdownRemark;

  const stackMarkup = project.frontmatter.stack.map((tech, i) => {
    return (
      <div className='px-5 py-3 bg-emerald-300 text-slate-600 text-xs rounded-3xl'>
        {tech}
      </div>
    );
  });

  return (
    <>
      <div className='mb-14'>
        <h1 className='text-center'>{project.frontmatter.title}</h1>
        <div className='flex flex-row justify-center gap-3'>
          {stackMarkup}
        </div>
        <img src={project.frontmatter.image} alt={project.frontmatter.title} className='max-w-3xl mx-auto'/>
      </div>
      <div dangerouslySetInnerHTML={{ __html: project.html }}>
      </div>
    </>
  );
};

export const projectQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
        stack
      }
    }
  }
`;

export default ProjectPageTemplate;

