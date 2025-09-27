import fs from "fs";
import path from "path";
import BlogListClient from "./BlogListClient";

export default function BlogListPage() {
  // The Server Component simply fetches the data and passes it down.
  // The client component will handle the interactive UI, including pagination.
  return <BlogListClient />;
}
