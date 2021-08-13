import React, {useState, useEffect} from 'react';
import Editor from './Editor';
import FileExplorer from './FileExplorer';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `)            
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])  
  
  return (
    <>
      <div class = "pane top-pane">
        <FileExplorer
        />
        <div id = "html">
        <Editor 
          language = "xml" 
          displayName = "HTML CODE EDITOR"
          value = {html}
          onChange = {setHtml}
        />    
        </div>
        <div id = "css">  
        <Editor 
          language = "css" 
          displayName = " CSS CODE EDITOR"
          value = {css}
          onChange = {setCss}
        />
        </div>
        <div id = "js">
        <Editor
          language = "javascript" 
          displayName = "JS CODE EDITOR"
          value = {js}
          onChange = {setJs}
        />
        </div>
        
      </div>
      <div class = "pane">
        <iframe
          srcDoc = {srcDoc}
          title = "output"
          sandbox = "allow-scripts"
          frameBorder = "0"
          width = "100%"
          height = "100%"
          />
      </div>
    </>
  )
}

export default App;
