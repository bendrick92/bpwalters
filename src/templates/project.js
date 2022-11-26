import React from 'react';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import {Fade} from 'react-awesome-reveal';

const ProjectTemplate = ({ data: { markdownRemark } }) => {
  const project = markdownRemark;
  const image = getImage(project.featuredImage);

  const stackMarkup = project.frontmatter.stack?.map((s) => {
    return (
      <div key={`stack-${s}`} className='px-4 py-1 bg-zinc-700 rounded-3xl whitespace-nowrap'>
        {s}
      </div>
    );
  });

  return (
    <>
      <Fade>
        <div className='my-16 flex flex-col gap-10'>
          <h1 className='m-0 text-center'>{project.frontmatter.title}</h1>
          <div className='flex flex-row flex-wrap gap-3 justify-center'>
            {stackMarkup}
          </div>
          <div className='text-center'>
            <GatsbyImage
              image={image}
              alt={project.frontmatter.title}
            />
          </div>
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
          gatsbyImageData(width: 750)
        }
      }
    }
  }
`;

export default ProjectTemplate;