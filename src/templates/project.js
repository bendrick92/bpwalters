import React from 'react';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import {Fade} from 'react-awesome-reveal';

const ProjectTemplate = ({ data: { markdownRemark } }) => {
  const project = markdownRemark;
  const image = getImage(project.featuredImage);

  const stackMarkup = project.frontmatter.stack.map((tech, i) => {
    return (
      <div
        key={`stack-${tech}`}
        className='px-5 py-3 bg-slate-600 text-slate-200 text-sm rounded-3xl'
      >
        {tech}
      </div>
    );
  });

  return (
    <>
      <Fade>
        <h1 className='text-center'>{project.frontmatter.title}</h1>
        <p className='flex flex-row gap-4 justify-center'>
          {stackMarkup}
        </p>
        <div className='max-w-3xl mx-auto'>
          <GatsbyImage
            image={image}
            alt={project.frontmatter.title}
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