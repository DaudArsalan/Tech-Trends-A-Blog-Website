import React, { useState } from "react";
import styles from "../../styles/BlogPosts.module.css";
import Image from "next/image";
import * as fs from "fs";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  function createMarkup(c) {
    return;{__html: c;}
  }

  return (
    <>
      <div className={styles.blogPosts}>
        <div className={styles.blogInfo}>
          <h3>{blog && blog.title}</h3>
          <Image
            priority
            className={styles.blogImage}
            src={blog && blog.image}
            alt="Tech trends"
            width={1000}
            height={600}
          />
          {blog && (
            <p
              className={styles.cardSubtitle}
              dangerouslySetInnerHTML={{__html: blog.content}}
            ></p>
          )}
        </div>
      </div>
    </>
  );
};
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "5G" } },
      { params: { slug: "Artificial-intelligence-and-machine-learning" } },
      { params: { slug: "Blockchain-technology" } },
      { params: { slug: "Cybersecurity" } },
      { params: { slug: "Internet-of-Things" } },
      { params: { slug: "Robotics-and-automation" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogData/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}

export default Slug;
