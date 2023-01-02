import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import Image from "next/image";

const BlogCards = (props) => {
  const { title, description, image, date, slug } = props;

  return (
    <div>
      <Link href={slug}>
        <div className={styles.cardContainer}>
          <div className={styles.cardImage}>
            <Image
              priority
              src={image}
              alt="Tech trends"
              width={1200}
              height={800}
            />
          </div>
          <div className={styles.cardBody}>
            <span>{date}</span>
            <h3>{title}</h3>
            <p>{description}...</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCards;
