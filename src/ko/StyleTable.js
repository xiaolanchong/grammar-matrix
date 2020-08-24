import React from "react"
import './StyleTable.css'

const RootForm = () =>
  <span className='px-1 border text-white border-primary bg-primary  rounded'>
    Ф1
  </span>

const AdvForm = () =>
  <span className='px-1 border text-white border-success bg-success rounded'>
    Ф2
  </span>

const DeclExample = ({children}) =>
  <span className='text-info'>
    <small>{children}</small>
  </span>

const StyleTable = () =>
  <>
    <ul>
      <li><RootForm /> - 1-я форма глагола (-다): 가다 -> 가, 먹다 -> 먹, 열다 -> 여</li>
      <li><AdvForm /> - 2-я (деепричастная) форма глагола (-다) + 아/어/여</li>
    </ul>
    <table className='style-table'>
      <caption>Стили речи корейского языка</caption>
      <thead>
        <tr>
          <th rowspan='2'>Наклонение</th>
          <th colspan='2' className="text-center">Официальный</th>
          <th colspan='2' className="text-center">Неофициальный</th>
        </tr>
        <tr >
          <th>Вежливый официальный<br/>하십시오체</th>
          <th>Простой<br/>해라체</th>
          <th>Вежливый неофициальный<br/>해요체</th>
          <th>Панмаль<br/>해체</th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td colspan='5' className='bg-dark text-white'>
            Повествовательное наклонение 평서형
          </td>
        </tr>
        <tr>
          <td>Настоящее время</td>
          <td>
            <table className='nested-table'>
              <tr className=''>
                <td className=''><small>гл:</small></td>
                <td className=''><RootForm/>+ㅂ니다</td>
                <td className=''><DeclExample>가다→갑니다</DeclExample></td>
              </tr>
              <tr className=''>
                <td className=''><small>согл:</small></td>
                <td className=''><RootForm/>+습니다</td>
                <td className=''><DeclExample>먹다→먹습니다</DeclExample></td>
              </tr>
            </table>
          </td>
          <td className='align-middle'>
            <table className='nested-table'>
              <tr className=''>
                <td className=''><small>Прил-ное:</small></td>
                <td className=''><RootForm/>+다<br/></td>
                <td className=''><DeclExample>많다→많다</DeclExample></td>
              </tr>
              <tr className=''>
                <td className=''><small>Глагол, гл:</small></td>
                <td className=''><RootForm/>+ㄴ다</td>
                <td className=''><DeclExample>가다→간다</DeclExample></td>
              </tr>
              <tr className=''>
                <td className=''><small>Глагол, согл:</small></td>
                <td className=''><RootForm/>+는다</td>
                <td className=''><DeclExample>먹다→먹는다</DeclExample></td>
              </tr>
            </table>
          </td>
          <td className='align-middle'>
            <AdvForm/> + 요&nbsp;
            <DeclExample>먹다→먹어요</DeclExample>
          </td>
          <td className='align-middle'>
            <AdvForm/>&nbsp;
            <DeclExample>먹다→먹어</DeclExample>
          </td>
        </tr>
        <tr>
          <td>Прошлое</td>
          <td>
            <AdvForm/>+ᄊ습니다
            &nbsp;
            <DeclExample>먹다→먹었습니다</DeclExample>
          </td>
          <td>
            <AdvForm/>+ᄊ다
            &nbsp;
            <DeclExample>먹다→먹었다</DeclExample>
          </td>
          <td>
            <AdvForm/> + ᄊ어요
            &nbsp;
            <DeclExample>먹다→먹었어요</DeclExample>
          </td>
          <td>
            <AdvForm/> + ᄊ어
            &nbsp;
            <DeclExample>먹다→먹었어요</DeclExample>
          </td>
        </tr>
        <tr>
          <td>Будущее</td>
          <td><RootForm/> + (ᆯ/을) 겁니다</td>
          <td><RootForm/> + (ᆯ/을) 거다</td>
          <td><RootForm/> + (ᆯ/을) 거예요</td>
          <td><RootForm/> + (ᆯ/을) 거야</td>
        </tr>
        
        <tr>
          <td colspan='5' className='bg-dark text-white'>
            Вопросительное наклонение 의문형
          </td>
        </tr>

        <tr>
          <td>Настоящее время</td>
          <td><RootForm/> + (ㅂ/습)니까</td>
          <td>
            <table className='nested-table'>
              <tr>
                <td><small>Глагол:</small></td>
                <td><RootForm/> + 느냐<br/></td>
                <td></td>
              </tr>
              <tr>
                <td><small>Глагол, сокр. форма:</small></td>
                <td><RootForm/> + 냐</td>
                <td></td>
             </tr>
              <tr>
                <td><small>Прил-ное:</small></td>
                <td><RootForm/> + (으)냐</td>
                <td></td>
              </tr>
              <tr>
                <td><small>Мягче</small></td>
                <td><RootForm/> + 니</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </td>
          <td>
            <AdvForm/> + 요<br/>
            Прил-ное <RootForm/> + ᆫ가요<br/>
            Прил-ное <RootForm/> + 은가요<br/>
            Глагол <RootForm/> + 는가요<br/>
            <RootForm/> + (으)ㄹ까요<br/>
            <RootForm/> + 나요
          </td>
          <td>
            <AdvForm/><br/>
            Прил-ное <RootForm/> + ᆫ가<br/>
            Прил-ное <RootForm/> + 은가<br/>
            Глагол <RootForm/> + 는가<br/>
            <RootForm/> + (으)ㄹ까
          </td>
        </tr>

        <tr>
          <td>Прошлое время</td>
          <td><AdvForm/> + ᄊ습니까</td>
          <td>
            <table className='nested-table'>
              <tr>
                <td><small>Глагол:</small></td>
                <td><AdvForm/>+ᄊ느냐<br/></td>
                <td></td>
              </tr>
              <tr>
                <td><small>Глагол, сокр. форма:</small></td>
                <td><AdvForm/>+ᄊ냐</td>
                <td></td>
             </tr>
              <tr>
                <td><small>Прил-ное:</small></td>
                <td><AdvForm/>+ᄊ냐</td>
                <td></td>
              </tr>
              <tr>
                <td><small>Мягче</small></td>
                <td><AdvForm/>+ᄊ니</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </td>
          <td>
            <AdvForm/> + ㅆ어요<br/>
            <AdvForm/> + ㅆ는가요<br/>
            <AdvForm/> + ㅆ을까요<br/>
            <AdvForm/> + ㅆ나요
          </td>
          <td>
            <AdvForm/> + ㅆ어<br/>
            <AdvForm/> + ㅆ는가<br/>
            <AdvForm/> + ㅆ을까
          </td>
        </tr>
        
        <tr>
          <td colspan='5' className='bg-dark text-white'>
            Остальные
          </td>
        </tr>
        
        <tr>
          <td>
            Повелительное 명령형
          </td>
          <td>
            <RootForm/>+(으)십시오
          </td>
          <td>
            <AdvForm/>+라
          </td>
          <td>
            <RootForm/> + (으)세요
          </td>
          <td>
            <AdvForm/>
          </td>
        </tr>
        
        <tr>
          <td>
            Пригласительное 청유형
          </td>
          <td>
            <RootForm/>+(ㅂ/읍)시다
          </td>
          <td>
            <RootForm/>+자
          </td>
          <td>
            <AdvForm/> + 요<br/>
            <RootForm/>+지요/죠
          </td>
          <td>
            <AdvForm/><br/>
            <RootForm/>+지
          </td>
        </tr>
        
        <tr>
          <td>
            Восклицательное 감탄형
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
            <RootForm/>+군요
          </td>
          <td>
            <RootForm/>+군
          </td>
        </tr>
        
      </tbody>
    </table>
    
    <table className='style-table'>
      <caption>Стили речи корейского языка</caption>
      <thead>
        <tr>
          <th>Наклонение</th>
          <th>하소서체</th>
          <th>하오체</th>
          <th>하게체</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>평서형</td>
          <td>
            
          </td>
          <td>Глас. + 오  согл. 소, иногда 으오, -리다, -(스)ㅂ디다
          </td>
          <td>-네, связки ㄹ세
          </td>
        </tr>
        
        <tr>
          <td>의문형</td>
          <td>
            
          </td>
          <td>Глас. + 오  согл. 소, иногда 으오
          </td>
          <td>-나?, глагол 는가? прил-е (으)ㄴ가
          </td>
        </tr>
        
        <tr>
          <td>명령형</td>
          <td>
            
          </td>
          <td>Глас. + 오, (으)오  согл. 소, часто (으)시오
          </td>
          <td>-게
          </td>
        </tr>
        
        <tr>
          <td>청유형</td>
          <td>
            
          </td>
          <td>-(으)ㅂ시다
          </td>
          <td>-세
          </td>
        </tr>
        
        <tr>
          <td>감탄형</td>
          <td>
            
          </td>
          <td> прил 구려, глагол 는구려, связка (이)구려
          </td>
          <td> прил 구먼, глагол 는구먼, связка (이)구먼
          </td>
        </tr>
        
      </tbody>
    </table>
    
    <div>하소서체>>합쇼체*>해요체*>하오체>하게체>해체*>해라체</div>
  </>


export default StyleTable
