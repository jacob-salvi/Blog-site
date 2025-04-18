import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

export default async function BlogPage({params}) {
    params = await params
    const {slug} = params

    const rootdir = path.join(process.cwd(), 'src', 'Content')
    const categories =  await fs.readdir(rootdir)

    let fileContent = null;

    for(const category of categories){
        const categoryPath = path.join(rootdir, category)
        const files = await fs.readdir(categoryPath)

        if(files.includes(`${slug}.mdx`)){
            const filepath = path.join(categoryPath,  `${slug}.mdx`)
            fileContent = await fs.readFile(filepath, 'utf-8')
            break;
        }
    }

    if(!fileContent){
        return  <div>file data not found</div>
    }

    const {content, frontmatter} = await compileMDX({
        source: fileContent,
        options:{
            parseFrontmatter: true
        }
    }) 

    return (
        <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-2">{frontmatter.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          By {frontmatter.author} on {frontmatter.date}
        </p>
        <div className="prose dark:prose-invert">{content}</div>
      </div>
      );
}