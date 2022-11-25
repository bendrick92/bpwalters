import React, {useEffect, useState} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {Fade} from 'react-awesome-reveal';

const Blog = () => {
  const pageSize = 3;

  const [loadedPosts, setLoadedPosts] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);

  const { markdown } = useStaticQuery(graphql`{
  markdown: allMarkdownRemark(
    filter: {frontmatter: {type: {eq: "blog"}}}
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
      excerpt(pruneLength: 300)
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
      <div key={`post-${i}`}>
        <a href={`blog` + post.fields.slug} className='no-underline'>
          <h4 className='mt-0'>{post.frontmatter.title}</h4>
        </a>
        <div className='text-sm'>{post.frontmatter.date}</div>
        <p className='text-base'>{post.excerpt}...</p>
        <div className='flex justify-end'>
          <a href={`blog` + post.fields.slug} className='text-sm text-slate-300 no-underline'>
            Read More <FontAwesomeIcon icon={faChevronRight} className='ml-1'/>
          </a>
        </div>
      </div>
    );
  });

  const loadMoreMarkup = showLoadMore && (
    <div className='flex justify-center'>
      <button className='max-w-3xl mx-auto px-10 py-3 mt-10 bg-slate-600 hover:bg-slate-500 rounded-3xl text-slate-200 text-center text-sm hover:cursor-pointer' onClick={() => loadMorePosts()}>
        Load Older Posts
      </button>
    </div>
  );

  return (
    <>
      <Fade>
        <h2>Blog</h2>
      </Fade>
      <Fade cascade>
        <div className='flex flex-col gap-12'>
          {blogMarkup}
        </div>
      </Fade>
      {loadMoreMarkup}
    </>
  );
};

export default Blog;