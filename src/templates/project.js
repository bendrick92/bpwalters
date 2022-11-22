import React from 'react';
import {graphql} from 'gatsby';
import Fade from 'react-reveal/Fade';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const ProjectTemplate = ({ data: { markdownRemark } }) => {
  const project = markdownRemark;
  const image = getImage(project.featuredImage);

  const stackMarkup = project.frontmatter.stack.map((tech, i) => {
    return (
      <div className='px-5 py-3 bg-emerald-300 text-slate-600 text-xs rounded-3xl'>
        {tech}
      </div>
    );
  });

  return (
    <>
      <Fade>
        <div className='mb-14'>
          <h1 className='text-center'>{project.frontmatter.title}</h1>
          <div className='flex flex-row justify-center gap-3'>
            {stackMarkup}
          </div>
          <GatsbyImage
            image={image}
            alt={project.frontmatter.title}
            className='max-w-3xl mx-auto'
          />
        </div>
      </Fade>
      <Fade>
        <div dangerouslySetInnerHTML={{ __html: project.html }}>
        </div>
      </Fade>
    </>
  );
};

export const projectQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
      }
      featuredImage {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

export default ProjectTemplate;