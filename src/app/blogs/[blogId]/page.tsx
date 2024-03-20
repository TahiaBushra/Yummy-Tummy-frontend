"use client";

type BlogDetailsPageProps = {
  params: { blogId: string };
};

const BlogDetailsPage = ({ params }: BlogDetailsPageProps) => {
  return <div>Blog Details Page{params.blogId}</div>;
};

export default BlogDetailsPage;
