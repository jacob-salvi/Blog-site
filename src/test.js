import fs from 'fs';          // Node.js file system module (To read files)
import path from 'path';      // Node.js path module (To handle file paths) 
import matter from 'gray-matter'; // gray-matter module (To parse front matter from markdown files)
import { serialize } from 'next-mdx-remote/serialize'; // next-mdx-remote module (To serialize MDX content)


export async function getAllBlogs(slug) {
  const blogsPath = path.join(process.cwd(), 'Content');
  const categories = fs.readdirSync(blogsPath);

  let BlogData = [];

  for (const category of categories) {
    const categoryPath = path.join(blogsPath, category);
    const files = fs
      .readdirSync(categoryPath)
      .filter((file) => file.endsWith('.mdx'));

    for (const file of files) {
      const cleanSlug = file.replace('.mdx', '');

      console.log(`Checking file: ${file} in ${category}`);
      if (cleanSlug === slug) {
        const filePath = path.join(categoryPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);
        const mdxSource = await serialize(content);

        BlogData.push({
          slug: cleanSlug,
          frontmatter: data,
          mdxSource,
        });
      }
    }
  }

  return BlogData;
}


async function test() {
    const slug = 'my-first-code'; // adjust based on your actual file
    const blogData = await getAllBlogs(slug);
  
    console.log('--- Raw blog data ---');
    console.log(blogData);
  
    if (blogData.length > 0) {
      const { frontmatter, mdxSource } = blogData[0];
      console.log('✅ Frontmatter:', frontmatter);
      console.log('✅ Serialized MDX:', mdxSource);
    } else {
      console.log('❌ No blog found with the given slug.');
    }
  }
  
  test();
  