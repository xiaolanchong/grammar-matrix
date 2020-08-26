import React from 'react'
import { useLocation } from "react-router-dom";

import BasicList from './ko/BasicList.js'
import IntermediateList from './ko/IntermediateList.js'
import Assimilation from './ko/Assimilation.js'
import StyleTable from './ko/StyleTable.js'


function getLocationParams(urlLine) {
    const params = {}
    const query = urlLine.substring(1)
    const vars = query.split('&')
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=')
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return params
}

const TableOfContents = () =>
  <>
    <h1>Грамматические матрицы</h1>
    <h4>Корейский язык</h4>
    <ul>
      <li><a href={`${process.env.PUBLIC_URL}/?lang=ko&level=beg`}>Начальный уровень</a></li>
      <li><a href={`${process.env.PUBLIC_URL}/?lang=ko&level=int`}>Средний уровень</a></li>
      <li><a href={`${process.env.PUBLIC_URL}/?lang=ko&level=adv`}>Продвинутый уровень</a></li>
      <li><a href={`${process.env.PUBLIC_URL}/?lang=ko&level=assimilation`}>Ассимиляция согласных</a></li>
      <li><a href={`${process.env.PUBLIC_URL}/?lang=ko&level=styles`}>Стили речи</a></li>
    </ul>
  </>


const NotFound = () =>
  <h1 className='text-center'>Ничего не найдено</h1>

const Korean = ({level}) => {
  switch(level) {
    case 'beg':
      return <BasicList />
    case 'int':
      return <IntermediateList />
    case 'adv':
      return <NotFound />
      
    case 'assimilation':
      return <Assimilation />
    case 'styles':
      return <StyleTable />
    default:
      return <NotFound />
  }
}

const MainPage = () =>  {
  const params = getLocationParams(useLocation().search)
  console.log(params)
  const Contents = ({lang, level}) => {
    switch (lang) {
      case 'ko': return <Korean level={level} />
      case undefined:
      default:
        return <TableOfContents />
    }
  }
  return (
    <div className='container-md'>
      <Contents lang={params['lang']} level={params['level']} />
    </div>
  )
}

export default MainPage;