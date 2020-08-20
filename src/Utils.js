import React from "react";

import { ReactComponent as Chevron3} from './Chevron3.svg'
import { ReactComponent as Chevron2} from './Chevron2.svg'


const IntLevelIcon = () => 
  <span title='Выражение среднего уровня'>
    < Chevron2 width='1.5em' height='1.5em' />
  </span>

const AdvLevelIcon = () => 
  <span title='Выражение продвинутого уровня'>
    < Chevron3 width='1.5em' height='1.5em' />
   </span>


export {IntLevelIcon, AdvLevelIcon}
