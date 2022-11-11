import React from 'react';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const BlogPostTemplate = ({ data: { markdownRemark } }) => {
  const post = markdownRemark;
  const image = getImage(post.image);

  return (
    <>
      <div className='mb-14'>
        <p className='text-center'>{post.frontmatter.date}</p>
        <h1 className='text-center'>{post.frontmatter.title}</h1>
        <div className='max-w-3xl mx-auto flex justify-center'>
          <GatsbyImage
            image={image}
            alt={post.frontmatter.title}
          />
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }}>
      </div>
    </>
  );
};

export const postQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

export default BlogPostTemplate;

