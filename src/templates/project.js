import React from 'react';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import {Fade} from 'react-awesome-reveal';

const ProjectTemplate = ({ data: { markdownRemark } }) => {
  const project = markdownRemark;
  const image = getImage(project.featuredImage);

  return (
    <>
      <Fade>
        <h1 className='text-center'>{project.frontmatter.title}</h1>
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