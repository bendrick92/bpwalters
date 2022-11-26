import React from 'react';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import {Fade} from 'react-awesome-reveal';

const BlogPostTemplate = ({ data: { markdownRemark } }) => {
  const post = markdownRemark;
  const image = getImage(post.featuredImage);

  return (
    <>
      <Fade>
        <div className='my-16 flex flex-col gap-10'>
          <h1 className='m-0 text-center'>{post.frontmatter.title}</h1>
          <span className='text-center'>{post.frontmatter.date}</span>
          <div className='text-center'>
            <GatsbyImage
              image={image}
              alt={post.frontmatter.title}
            />
          </div>
        </div>
      </Fade>
      <Fade>
        <div dangerouslySetInnerHTML={{ __html: post.html }}>
        </div>
      </Fade>
    </>
  );
};

export const postQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      featuredImage {
        childImageSharp {
          gatsbyImageData(width: 750)
        }
      }
    }
  }
`;

export default BlogPostTemplate;