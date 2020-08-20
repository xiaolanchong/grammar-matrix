import React from "react"
import './BasicList.css'

const Mode = Object.freeze({
      ShowAll: 1,
      ShowExample: 2,
      ShowTranslation: 3
   })


const ModeControls = ({setMode, mode}) => {
  const onActivate = () => {}
  const ModeButton = ({buttonMode, name, title, id}) => {
           const style = 'secondary';
           return <label className={`btn btn-sm btn-outline-${style}  ` + ((mode === buttonMode)? 'active' : '')}
                      title={title}>
                      <input type="radio" name={"option"+id} id={"option"+id}
                      autoComplete="off" checked={mode === buttonMode}
                      onChange={() => { onActivate(); setMode(buttonMode) }} />
                      {name}
                 </label>
 }
 
  return (
        <div className="sticky-top  bg-light btn-group btn-group-toggle p-0 " data-toggle="buttons">
          <ModeButton buttonMode={Mode.ShowAll}          name="Показать всё"     title='Показать слово и перевод' id="0"/>
          <ModeButton buttonMode={Mode.ShowExample}      name="Только пример"    title='Проверить перевод' id="1"/>
          <ModeButton buttonMode={Mode.ShowTranslation}  name="Только перевод"   title='Проверит слово' id="2"/>
        </div>)
 }

const Hilite = ({children}) =>
  <span className='text-expr'>{children}</span>

const Expr = ({children}) =>
  <div className='col'>{children}</div>
  
const Example = ({mode, children}) =>
  <div className={`col ${mode === Mode.ShowTranslation ? "hidden" : ""}`}>{children}</div>

const Translation = ({mode, children}) =>
  <div className={`col ${mode === Mode.ShowExample ? "hidden" : ""}`}>{children}</div>

export {Translation, Example, Expr, Hilite, ModeControls, Mode}