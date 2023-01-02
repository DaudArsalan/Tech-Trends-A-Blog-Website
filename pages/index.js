import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React, { useState } from "react";
import BlogCards from "../components/blogCards";
import * as fs from "fs";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const [blogs, setBlogs] = useState(props.allBlogs);
  return (
    <>
      <Head>
        <title>Tech Trends</title>
        <meta
          name="description"
          content="Tech trends blog website is a platform that covers the latest and most innovative developments in the world of technology. From emerging trends in artificial intelligence and machine learning to the latest advancements in cybersecurity and the Internet of Things, our blog is your go-to source for staying up-to-date on the most exciting and relevant tech trends. Our team of experts and industry insiders provide in-depth analysis and commentary on the trends that are shaping the future of technology, giving you the insights and knowledge you need to stay ahead of the curve. So whether you're a tech enthusiast or a business professional looking to stay informed, Tech trends blog website is the place to be."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Carousel showThumbs={false} className={styles.carousel}>
          <div>
            <Image
              className={styles.carouselImage}
              src="/Blockchain.jpg"
              alt="Tech trends"
              width={1200}
              height={800}
            />
            <p className="legend">Blockchain Technology</p>
          </div>
          <div>
            <Image
              className={styles.carouselImage}
              src="/Robotics.jpg"
              alt="Tech trends"
              width={1200}
              height={800}
            />
            <p className="legend">Robotics and Automation</p>
          </div>
          <div>
            <Image
              className={styles.carouselImage}
              src="/AI.jpg"
              alt="Tech trends"
              width={1200}
              height={800}
            />
            <p className="legend">Artificial intelligence (AI)</p>
          </div>

          <div>
            <Image
              className={styles.carouselImage}
              src="/5G.jpg"
              alt="Tech trends"
              width={1200}
              height={800}
            />
            <p className="legend">5G Technology</p>
          </div>
          <div>
            <Image
              className={styles.carouselImage}
              src="/Cybersecurity.jpg"
              alt="Tech trends"
              width={1200}
              height={800}
            />
            <p className="legend">Cybersecurity</p>
          </div>
          <div>
            <Image
              className={styles.carouselImage}
              src="/IOT.jpg"
              alt="Tech trends"
              width={1200}
              height={800}
            />
            <p className="legend">Internet of Things (IoT)</p>
          </div>
        </Carousel>

        <h1 className={styles.mainHeading}>Latest Blogs</h1>

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
      </main>
    </>
  );
}

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
