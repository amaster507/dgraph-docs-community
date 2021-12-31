import Link from "@docusaurus/Link";
import React from "react";
import styles from "./BlogLink.module.css";

export interface BlogLinkProps {
  imageUrl?: string;
  title: string;
  subtitle?: string;
  url: string;
}

const BlogLink: React.FC<BlogLinkProps> = ({
  imageUrl,
  title,
  subtitle,
  url,
}) => {
  return (
    <Link className={styles.BlogLink} href={url}>
      {Boolean(imageUrl) && (
        <img className={styles.background} src={imageUrl} />
      )}
      <div className={styles.content}>
        <div>
          <p className={styles.title}>{title}</p>
        </div>
        {Boolean(subtitle) && (
          <div>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default BlogLink;
