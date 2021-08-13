import React from 'react'

export default function fileExplorer() {
    function htmlClick() {
        document.getElementById("html").style.visibility = "visible";
        document.getElementById("css").style.visibility = "hidden";
        document.getElementById("js").style.visibility = "hidden";        
    }

    function cssClick() {
        document.getElementById("html").style.visibility = "hidden";
        document.getElementById("css").style.visibility = "visible";
        document.getElementById("js").style.visibility = "hidden";
    }

    function jsClick() {
        document.getElementById("html").style.visibility = "hidden";
        document.getElementById("css").style.visibility = "hidden";
        document.getElementById("js").style.visibility = "visible";
    }

    return (
        <div class = "filename">
            <h3 id = "fileHead">FILE EXPLORER</h3>
            <h2>
                <ol>
                    <li><a class = "link" onClick = {htmlClick}>index.html</a></li>
                    <li><a class = "link" onClick = {cssClick}>index.css</a></li>
                    <li><a class = "link" onClick = {jsClick}>index.js</a></li>
                </ol>
            </h2>
        </div>
    )
}
