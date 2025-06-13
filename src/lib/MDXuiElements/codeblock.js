'use client'
import React from 'react'
import {Copy, copy, Replace} from 'lucide-react'
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { language } from 'gray-matter'


const tabs = [
    {
        filename: 'example.js',
        language: 'javascript',
        code: `const example = () => {
    console.log('Hello, World!') jgajijwelnknaxfpijkansdlknlkansdldvpihjsjdgpknasknvlknasfvnspofjvnsflvknklsfvknpojjlkjslkdfnvlknslkjfjdljvpksns;       
};`
    },
    {
        filename: 'example.py', 
        language: 'python',
        code: `def example():   
    print('Hello, World!')`
    },
    {
        filename: 'example.java',
        language: 'java',
        code: `System.out.println("Hello, World!");`
        
    }
]
export default function CodeBlock({tab = tabs}) {
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const currentTab = tab[activeTab] 

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(currentTab.code);
            setCopied(true);
            setTimeout(()=>{
                setCopied(false);
            }, 1000)
        }
    catch (error) {
        console.log('Failed to copy code:', error);
    }}

    
    return(
        <div className='w-full h-full relative flex flex-col rounded-2xl overflow-hidden bg-[#2a2a2a] boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)'>
            <div className=' tabs w-full bg-[#2a2a2a] flex justify-between items-center px-6 py-3 border-b-1 border-b-[#E1DDCC]/10'>
                <div className='flex items-center gap-2'>
                    {tab.map((filetab, index)=>(
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`text-sm text-[#FFFAE7] hover:bg-amber-50/2 p-2 py-1  rounded-sm flex gap-3
                                ${activeTab === index ? 'bg-[#FFFAE7]/10' : ''}`}>

                            {filetab.filename}
                        </button>
                    ))}
                </div>
                <div 
                className=' relative rounded-sm hover:bg-amber-50/2  p-2 text-[#FFFAE7] flex items-center gap-2 cursor-pointer'
                onClick={(handleCopy)}
                >
                    {copied ? <Tooltip message={'Copied!'}/> : '' 
                    }
                    <Copy size={16} className='text-[#FFFAE7]'/>
                </div>
            </div>
            <div className='w-full h-fit p-4 '>
            <SyntaxHighlighter
            language= {currentTab.language}
            style={dracula}
            customStyle={{
                 background: 'transparent',
                 fontSize: '0.9rem',
                 borderRadius: '0.5rem',
                 padding: '1rem',
            }}
            wrapLines={true}
            showLineNumbers={true}
            >
                {currentTab.code}

            </SyntaxHighlighter>

            </div>

            
        </div>
    )
}

const Tooltip = ({ message }) => {
    return (
        <div className='absolute -top-[80%] right-0'>
            
            <p>{message}</p>
        </div>
    );
}