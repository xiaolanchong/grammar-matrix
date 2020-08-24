import React from "react"
import {Play} from 'react-bootstrap-icons'

import './Assimilation.css'

function playAudio(url) {
  console.log('clicked')
  //new Audio(url).play();
}

const Example = ({children}) =>
  <span>
    <small>{children}</small>
  </span>

const Sound = ({name}) =>
  <Play onClick={playAudio} style={{'cursor': 'pointer'}}  />

const Emp = ({children}) =>
  <span className='emphasis'>{children}</span>
/*
  <img src={{Play}} />*/
  
  /*
  <a onclick="this.firstChild.play()">
    <audio src="http://upload.wikimedia.org/wikipedia/commons/a/a9/Tromboon-sample.ogg"></audio><Play />
  </a>*/

const Assimilation = () =>
  <>
    <table className='m-3'>
      <thead></thead>
      <tbody>
        <tr>
          <td className='split'>
            <div className='c1'>2-я буква</div>
            <div className='c2'>1-я буква</div>
          </td>
          <td className='hdr'>ㄱ</td>
          <td className='hdr'>ㅂ</td>
          <td className='hdr'>ㄷ</td>
          <td className='hdr'>ㅈ</td>
          <td className='hdr'>ㅅ</td>
          <td className='hdr'>ㅋ</td>
          <td className='hdr'>ㅌ</td>
          <td className='hdr'>ㅊ</td>
          <td className='hdr'>ㅍ</td>
          <td className='hdr'>ㅁ</td>
          <td className='hdr'>ㄴ</td>
          <td className='hdr'>ㄹ</td>
          <td className='hdr'>ㅎ</td>
          <td className='hdr'>ㅣ</td>
        </tr>
        <tr>
          <td className='hdr'>ㄱ,ㅋ,ㄲ</td>
          <td className='duplication'><Emp>ㄱㄲ</Emp><br/><Example>학교 [학꾜]</Example><Sound /></td>
          <td className='duplication'><Emp>ㄱㅃ</Emp><br/><Example>학비 [학삐]</Example><Sound /></td>
          <td className='duplication'><Emp>ㄱㄸ</Emp><br/><Example>학당 [학땅]</Example><Sound /></td>
          <td className='duplication'><Emp>ㄱㅉ</Emp><br/><Example>학제 [학쩨]</Example><Sound /></td>
          <td className='duplication'><Emp>ㄱㅆ</Emp><br/><Example>학생 [학쌩]</Example><Sound /></td>

          <td>ㄱㅋ</td>
          <td>ㄱㅌ</td>
          <td>ㄱㅊ</td>
          <td>ㄱㅍ</td>
          
          <td className='vocalization'><Emp>ㅇㅁ</Emp><br/><Example>국민 [궁민]</Example><Sound /> </td>
          <td className='vocalization'><Emp>ㅇㄴ</Emp><br/><Example>국내 [궁내]</Example><Sound /></td>
          <td className='vocalization'><Emp>ㅇㄴ</Emp><br/><Example>국립 [궁닙]</Example><Sound /></td>
          <td><Emp>ㅋ</Emp></td>
          <td className='vocalization'><Emp>ㅇㄴ</Emp><br/><Example>색연필 [생년필]</Example><Sound /></td>
        </tr>
        
        <tr>
          <td className='hdr'>ㅂ,ㅍ</td>
          <td className='duplication'><Emp>ㅂㄲ</Emp></td>
          <td className='duplication'><Emp>ㅂㅃ</Emp></td>
          <td className='duplication'><Emp>ㅂㄸ</Emp></td>
          <td className='duplication'><Emp>ㅂㅉ</Emp></td>
          <td className='duplication'><Emp>ㅂㅆ</Emp></td>
          
          <td>ㅂㅋ</td>
          <td>ㅂㅌ</td>
          <td>ㅂㅊ</td>
          <td>ㅂㅍ</td>
          
          <td className='vocalization'><Emp>ㅁㅁ</Emp>십만 [심만]</td>
          <td className='vocalization'><Emp>ㅁㄴ</Emp>갑니다 [감니다]</td>
          <td className='vocalization'><Emp>ㅁㄴ</Emp>급류 [금뉴]</td>
          <td><Emp>ㅍ</Emp></td>
          <td className='vocalization'><Emp>ㅁㄴ</Emp>십욕 [심뉵]</td>
        </tr>

        <tr>
          <td className='hdr'>ㄷ,ㅈ,ㅌ,ㅊ</td>
          <td className='duplication'><Emp>ㄷㄲ</Emp><br/><Example>듣기 [듣끼]</Example></td>
          <td className='duplication'><Emp>ㄷㅃ</Emp><br/><Example>맏배 [맏빼]</Example></td>
          <td className='duplication'><Emp>ㄷㄸ</Emp><br/><Example>받다 [받따]</Example></td>
          <td className='duplication'><Emp>ㄷㅉ</Emp><br/><Example>닫집 [닫찝]</Example></td>
          <td className='duplication'><Emp>ㄷㅆ</Emp><br/><Example>굳세다 [굳쎄다]</Example></td>
          
          <td>ㄷㅋ</td>
          <td>ㄷㅌ</td>
          <td>ㄷㅊ</td>
          <td>ㄷㅍ</td>
          
          <td className='vocalization'><Emp>ㄴㅁ</Emp><br/><Example>맏물 [만물]</Example></td>
          <td className='vocalization'><Emp>ㄴㄴ</Emp><br/><Example>이튿날 [이튼날]</Example></td>
          <td className='vocalization'><Emp>ㄴㄴ</Emp><br/><Example>몇리 [면니]</Example></td>
          <td><Emp>ㅌ</Emp></td>
          <td className='vocalization'><Emp>ㄴㄴ</Emp><br/><Example></Example></td>
        </tr>
        
        <tr>
          <td className='hdr'>ㅅ,ㅆ</td>
          <td className='duplication'><Emp>ㄲ/ㄷㄲ</Emp><br/><Example>찻감 [차깜/찯깜]</Example></td>
          <td className='duplication'><Emp>ㅃ/ㄷㅃ</Emp><br/><Example>귓불 [귀뿔/귇뿔]</Example></td>
          <td className='duplication'><Emp>ㄷㄸ</Emp><br/><Example>있다 [읻따]</Example></td>
          <td className='duplication'><Emp>ㅉ/ㄷㅉ</Emp><br/><Example>찻집 [차찝/찯찝]</Example></td>
          <td className='duplication'><Emp>ㄷㅆ(ㅆ)</Emp><br/><Example>있서 [이써]</Example></td>
          
          <td>ㄷㅋ</td>
          <td>ㄷㅌ</td>
          <td>ㄷㅊ</td>
          <td>ㄷㅍ</td>
          
          <td className='vocalization'><Emp>ㄴㅁ</Emp><br/><Example></Example></td>
          <td className='vocalization'><Emp>ㄴㄴ</Emp><br/><Example></Example></td>
          <td className='vocalization'><Emp>ㄴㄴ</Emp><br/><Example></Example></td>
          <td><Emp>ㅌ</Emp><br/><Example></Example></td>
          <td className='vocalization'><Emp>ㄴㄴ</Emp><br/><Example>나뭇잎 [나문닙]</Example></td>
        </tr>
        
        <tr>
          <td className='hdr'>ㅁ</td>
          <td><Emp>мг</Emp></td>
          <td><Emp>мб/ㅁㅃ</Emp><br/><Example>맘보 [맘뽀]</Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
        </tr>
        
        <tr>
          <td className='hdr'>ㄴ</td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
        </tr>
        
        <tr>
          <td className='hdr'>ㄹ</td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
        </tr>
        
        <tr>
          <td className='hdr'>ㅇ</td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
          <td><Emp></Emp><br/><Example></Example></td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li><span className='duplication'>Удвоение следующей согласной после глухой согласной, reinforcement ("tensification")</span></li>
      <li><span className='vocalization'>Звонкие согласные и переход глухих согласных в звонкие</span></li>
    </ul>
  </>


const AssimilationPage = () =>
  <>
    <div className='container'>
      <div className='m3'>
        <Assimilation/>
      </div>
    </div>
  </>

export default AssimilationPage