import React, { useState } from "react";
import BlogCards from "../components/blogCards";
import styles from "../styles/Blog.module.css";
import * as fs from "fs";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  return (
    <>
      <div>
        <h2 className={styles.blogHeading}>All Blogs</h2>
      </div>
      <div className={styles.blog}>
        <div className={styles.blogCardSection}>
          {blogs &&
            blogs.map((item) => {
              return (
                <BlogCards
                  key={item.slug}
                  title={item.title}
                  description={item.description.substr(0, 200)}
                  image={item.image}
                  date={item.date}
                  slug={`/blogposts/${item.slug}`}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogData");
  let myFile;
  let allBlogs = [];

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    myFile = await fs.promises.readFile("blogData/" + element, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }
  return {
    props: { allBlogs },
  };
}

export default Blog;
