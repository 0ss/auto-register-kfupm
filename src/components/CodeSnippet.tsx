import React, { useEffect } from "react"
import Prism from "prismjs"
import { minScript } from "../utils/min_script"

interface CodeSnippetProps {
  crns: string[]
}
export const CodeSnippet: React.FC<CodeSnippetProps> = ({ crns }) => {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll() // <--- prepare Prism
    }
    highlight() // <--- call the async function
  }, [crns]) //
  return <textarea value={minScript(crns)}></textarea>
}
