import React, {useEffect, useState} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {Fade} from 'react-awesome-reveal';
import Button from './button';

const Blog = () => {
  const pageSize = 3;

  const [loadedPosts, setLoadedPosts] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);

  const { markdown } = useStaticQuery(graphql`{
  markdown: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "^/(\/blog)/"}}
    sort: {frontmatter: {date: DESC}}
  ) {
    posts: nodes {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      excerpt(pruneLength: 200)
    }
  }
}`);

  useEffect(() => {
    if (markdown && markdown.posts) {
      setLoadedPosts(markdown.posts.slice(0, pageSize));
    }
  }, [markdown]);

  useEffect(() => {
    if (loadedPosts && markdown && markdown.posts && loadedPosts.length < markdown.posts.length) {
      setShowLoadMore(true);
    }
    else {
      setShowLoadMore(false);
    }
  }, [markdown, loadedPosts]);

  const loadMorePosts = () => {
    setLoadedPosts(markdown.posts.slice(0, loadedPosts.length + pageSize));
  };

  const blogMarkup = loadedPosts.map((post, i) => {
    return (
      <div key={`post-${i}`} className='p-7 bg-zinc-700 rounded-3xl flex flex-col justify-between border-box'>
        <a href={`blog` + post.fields.slug} className='no-underline'>
          <h4 className='mt-0'>{post.frontmatter.title}</h4>
        </a>
        <div className='text-sm font-light'>{post.frontmatter.date}</div>
        <p className='text-base leading-relaxed'>{post.excerpt}...</p>
        <div className='flex justify-end'>
          <Button href={`blog` + post.fields.slug}>
            Read More
          </Button>
        </div>
      </div>
    );
  });

  const loadMoreMarkup = showLoadMore && (
    <div className='mt-10 flex justify-center'>
      <Button onClick={() => loadMorePosts()}>
        Load Older Posts
      </Button>
    </div>
  );

  return (
    <>
      <Fade triggerOnce>
        <h2>Blog</h2>
      </Fade>
      <Fade cascade triggerOnce>
        <div className='flex flex-col gap-7'>
          {blogMarkup}
        </div>
      </Fade>
      {loadMoreMarkup}
    </>
  );
};

export default Blog;