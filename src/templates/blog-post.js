import React from 'react';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import {Fade} from 'react-awesome-reveal';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const BlogPostTemplate = ({ data: { markdownRemark } }) => {
  const post = markdownRemark;
  const image = getImage(post.featuredImage);

  const affiliatesMarkup = post.html.includes('') && (
    <div className='p-5 bg-zinc-600 rounded-3xl flex flex-row gap-4 items-center'>
      <FontAwesomeIcon icon={faInfoCircle}/>
      <div className='m-0'>Some of the Amazon links in this page may provide me with a small kickback via the Amazon Associates Program</div>
    </div>
  );

  return (
    <>
      <Fade>
        <div className='mb-16 flex flex-col gap-10'>
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
        <div className='max-w-full flex flex-col items-center'>
          {affiliatesMarkup}
          <div dangerouslySetInnerHTML={{ __html: post.html }} className='max-w-full'>
          </div>
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