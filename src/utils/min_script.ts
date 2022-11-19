export const minScript = (crns: string[]) => {
  //   return `<div>
  //     <h1> PrismJS Tutorial </h1>
  //     <p>
  //     Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.
  //     </p>
  //   </div>`
  return `const CRNS=[${crns}];async function wait(t){return new Promise(e=>{setTimeout(e,t)})}async function getCrns(t){const e=window.document;if(e.getElementById("addAnotherCRN")){for(var n=0;n<t.length;n++)e.getElementById("addAnotherCRN").click();for(var c=0;c<t.length;c++)e.getElementById(\`txt_crn\${c+1}\`).value=t[c];e.getElementById("addCRNbutton").click(),await wait(500),e.getElementById("saveButton").click()}}const run=()=>{getCrns(CRNS)};getCrns(CRNS);`
}
