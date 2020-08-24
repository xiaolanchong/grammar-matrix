import React, { useState } from "react"

import {IntLevelIcon} from '../Utils.js'
import {Translation, Example, Expr, Hilite, ModeControls, Mode} from '../Ui.js'
import '../Ui.css'


const Basic = ({ mode }) => {
  return (
  <>
      <div className='container'>
      
      <h2>Базовая грамматика</h2>

      На основе <a href='https://sayhikorean.blogspot.com/2018/10/korean-grammar-in-use-beginner.html'>"Korean Grammar in Use"</a>.
      
      <h3>1. 이다 To be</h3>
        <div className="row">
          <strong>веж. офиц</strong>
        </div>
        <div className="row">
          <Expr>입니다</Expr>
          <Example mode={mode}>한국 사람<Hilite>입니다</Hilite></Example>
          <Translation mode={mode}>Кореец.</Translation>
        </div>
        <div className="row">
          <Expr>입니까?</Expr>
          <Example mode={mode}>한국 사람<Hilite>입니까</Hilite>?</Example>
          <Translation mode={mode}>Кореец?</Translation>
        </div>
        <div className="row">
          <Expr>무엇</Expr>
          <Example mode={mode}>무엇<Hilite>입니까</Hilite>?</Example>
          <Translation mode={mode}>Что?</Translation>
        </div>
        
        <div className="row">
          <strong>веж. неофиц</strong>
        </div>
        <div className="row">
          <Expr>이에요.	после согласных</Expr>	
          <Example mode={mode}>한국 사람<Hilite>이에요</Hilite>?</Example>	
          <Translation mode={mode}>(Вы) кореец? (веж неформ)</Translation>
        </div>
        <div className="row">
          <Expr>예요.	после гласных</Expr>
          <Example mode={mode}>의자<Hilite>예요</Hilite>.</Example>
          <Translation mode={mode}>(Это) стул (веж неформ)</Translation>
        </div>
        
        <div className="row">
          <strong>панмаль</strong>
        </div>
        <div className="row">
          <Expr>이야 после согласных</Expr>
          <Example mode={mode}>한국 사람<Hilite>이야</Hilite>?</Example>
          <Translation mode={mode}>(Вы) кореец?</Translation>
        </div>
        <div className="row">
          <Expr>야 после гласных</Expr>
          <Example mode={mode}>의자<Hilite>야</Hilite></Example>
          <Translation mode={mode}>стул</Translation>
        </div>

        <h3>2. 있다 находиться, иметь</h3>
        <div className="row">
          <Expr>быть, находится</Expr>
          <Example mode={mode}>개가 의자 위에 있어요</Example>
          <Translation mode={mode}>Собака на стуле</Translation>
        </div>
        <div className="row">
          <Expr>иметь</Expr>
          <Example mode={mode}>나는 언니가 있어요</Example>
          <Translation mode={mode}>У меня (женщина) есть старшая сестра</Translation>
        </div>

        <h3>3. Китайские и корейские числительные.</h3>

        <h3>4. Дни недели</h3>
        <div className="row">
          <Expr></Expr>
          <Example mode={mode}>몇 년</Example>	
          <Translation mode={mode}>Какой год</Translation>
        </div>
        
        <div className="row">
        <Expr></Expr>
          <Example mode={mode}>몇 월</Example>	
          <Translation mode={mode}>Какой месяц</Translation>
        </div>
        
        <div className="row">
        <Expr></Expr>
          <Example mode={mode}>며칠</Example>	
          <Translation mode={mode}>Какой день месяца</Translation>
        </div>
        
        <div className="row">
        <Expr></Expr>
          <Example mode={mode}>무슨 요일</Example>
          <Translation mode={mode}>Какой день недели</Translation>
        </div>

        <h3>5. Времы по-корейски 오전, 오후, 새벽, 아침, 점심, 저녁, 낮, 밤...</h3>
        
        <h3>Ур.1 Времена</h3>
        <h3>1. Verb/ Adj + ㅂ니다/습니다: Наст. время офиц. вежливого стиля.</h3>
        <div className="row">
          <Expr>ㅂ니다</Expr>
          <Example mode={mode}>갑니다</Example>
          <Translation mode={mode}>Иду</Translation>
        </div>

        <div className="row">
          <Expr>습니다</Expr>
          <Example mode={mode}>좋습니다</Example>
          <Translation mode={mode}>Хорошо</Translation>
        </div>

        <div className="row">
          <Expr>ㄹ глаголы</Expr>
          <Example mode={mode}>엽니다</Example>
          <Translation mode={mode}>Открываю</Translation>
        </div>

        <h3>2. Verb/ Adj + 아/어요 настоящее время, неформ офиц стиль. Деепричастная (2-я) форма</h3>
        <div className="row">
          <strong>Патчим</strong>
        </div>
        <div className="row">
          <Expr>아 в пред. слоге () -> 아</Expr>
          <Example mode={mode}>앉아요</Example>
          <Translation mode={mode}>Сижу</Translation>
        </div>
        
        <div className="row">
          <Expr>오 в пред. слоге (патчим) -> 아</Expr>
          <Example mode={mode}>돌아요</Example>
          <Translation mode={mode}>Кружась</Translation>
        </div>

        <div className="row">
          <Expr>Остальные в пред. слоге (патчим) -> 어</Expr>
          <Example mode={mode}>굳어</Example>
          <Translation mode={mode}>Будучи твердым</Translation>
        </div>
        
        <div className="row">
          <Expr>어 в пред. слоге (патчим)</Expr>
          <Example mode={mode}>먹어요</Example>
          <Translation mode={mode}>Ем</Translation>
        </div>

        <div className="row">
          <strong>Без патчима</strong>
        </div>

        <div className="row">
          <Expr>오 -> 와 (опционально)</Expr>
          <Example mode={mode}>봐</Example>
          <Translation mode={mode}>Смотрю</Translation>
        </div>

        <div className="row">
          <Expr>아 поглощает</Expr>
          <Example mode={mode}>가</Example>
          <Translation mode={mode}>Иди</Translation>
        </div>

        <h5>все остальные</h5>
        <div className="row">
          <Expr>ㅓ поглощает</Expr>
          <Example mode={mode}>서요</Example>
          <Translation mode={mode}>Стою</Translation>
        </div>

        <div className="row">
          <Expr>ㅐ</Expr>
          <Example mode={mode}>보내 => 보내요</Example>
          <Translation mode={mode}>Посылаю</Translation>
        </div>

        <div className="row">
          <Expr>외</Expr>
          <Example mode={mode}>돼요</Example>
          <Translation mode={mode}>Становится</Translation>
        </div>

        <div className="row">
          <Expr>우 -> 워</Expr>
          <Example mode={mode}>배우다 => 배워요</Example>
          <Translation mode={mode}>Изучаю</Translation>
        </div>

        <div className="row">
          <Expr>이 -> 여</Expr>
          <Example mode={mode}>마셔요</Example>
          <Translation mode={mode}>Пью</Translation>
        </div>
        <div className="row">
          <Expr>이 один слог без патчима -> 이어</Expr>
          <Example mode={mode}>끼어</Example>
          <Translation mode={mode}>Надеваю (кольцо)</Translation>
        </div>

        <div className="row">
          <Expr>여 поглощает </Expr>
          <Example mode={mode}>켜요</Example>
          <Translation mode={mode}>Включаю</Translation>
        </div>

        <div className="row">
          <Expr>하다</Expr>
          <Example mode={mode}>하여</Example>
          <Translation mode={mode}>Делаю</Translation>
        </div>

        <div className="row">
          <Expr>하다 +слияние</Expr>
          <Example mode={mode}>말해요</Example>
          <Translation mode={mode}>Говорю (слитно)</Translation>
        </div>

        <h3>Verb/ Adj + 았/었어요 прошедшее время</h3>

        <div className="row">
          <Expr>2-я форма + ㅆ + 어 (всегда) + 요 </Expr>
          <Example mode={mode}>갔어요</Example>
          <Translation mode={mode}>Шел</Translation>
        </div>
        <div className="row">
          <Expr>Связка после гласной = слияние -> 였다 </Expr>
          <Example mode={mode}>의사였다</Example>
          <Translation mode={mode}>(Это) был врач</Translation>
        </div>

        <h3>V-(으)ㄹ 거예요 будущее время</h3>
        <div className="row">
          <Expr>거 + 이다 + 요</Expr>
          <Example mode={mode}>2년 후에 차를 살 거예요</Example>
          <Translation mode={mode}>Через 2 года куплю машину</Translation>
        </div>

        <h3>Verb/ Adj 았/었었어요 прошлое совершенное</h3>
        <div className="row">
          <Expr></Expr>
          <Example mode={mode}>중국에서 살았었어요</Example>
          <Translation mode={mode}>Жил в Китае (сейчас нет)</Translation>
        </div>

        <h3>V-고 있다 продолженное время</h3>
        <div className="row">
          <Expr></Expr>
          <Example mode={mode}>민우 씨가 지금 집에 가고 있어요</Example>
          <Translation mode={mode}>Мину сейчас идет домой</Translation>
        </div>

        <h3>2. Отрицание</h3>
        <h3>Глаголы с отрицательным смыслом</h3>
        <div className="row">
          <Expr>아니에요 (нет, отрицание связки)</Expr>
          <Example mode={mode}>한국 사람이 아니에요</Example>
          <Translation mode={mode}>Не кореец</Translation>
        </div>

        <div className="row">
          <Expr>몰라요 не знаю</Expr>
          <Example mode={mode}>한국말을 몰라요</Example>
          <Translation mode={mode}>Не знаю корейского</Translation>
        </div>

        <div className="row">
          <Expr>없어요 не иметь</Expr>
          <Example mode={mode}>돈이 없어요</Example>
          <Translation mode={mode}>Нет денег</Translation>
        </div>

        <h3>Negative Expressions - 안/못</h3>
        <div><em>Не используется для приказов и предложений</em></div>
        <div className="row">
          <Expr>안 A/V</Expr>
          <Example mode={mode}>밥을 안 먹어요</Example>
          <Translation mode={mode}>Не ем (краткая форма)</Translation>
        </div>

        <div className="row">
          <Expr>A/V-지 않다</Expr>
          <Example mode={mode}>밥을 먹지 않아요</Example>
          <Translation mode={mode}>Не ем</Translation>
        </div>

        <div className="row">
          <Expr>안 прил-е</Expr>
          <Example mode={mode}>안 불편해요</Example>
          <Translation mode={mode}>Не неудобно (краткая форма)</Translation>
        </div>

        <div className="row">
          <Expr>A + 지 않다</Expr>
          <Example mode={mode}>불편하지 않아요</Example>
          <Translation mode={mode}>Не неудобно</Translation>
        </div>

        <div className="row">
          <Expr>못 V (+ассимиляция ㄷ)</Expr>
          <Example mode={mode}>술을 못 마셔요</Example>
          <Translation mode={mode}>Алкоголь не пью (не могу, краткая)</Translation>
        </div>

        <div className="row">
          <Expr>V-지 못해요</Expr>
          <Example mode={mode}>술을 마시지 못해요</Example>
          <Translation mode={mode}>Алкоголь не пью (не могу)</Translation>
        </div>

        <div className="row">
          <Expr>A/V하다 -> V(울/를) 못해요</Expr>
          <Example mode={mode}>저는 수영을 못해요</Example>
          <Translation mode={mode}>Не умею плавать (краткая)</Translation>
        </div>

        <div className="row">
          <Expr>A/V하다 -> -지 못해요</Expr>
          <Example mode={mode}>저는 수영하지 못해요</Example>
          <Translation mode={mode}>Не умею плавать</Translation>
        </div>

        <div className="row">
          <Expr>Неразделяемые 하다</Expr>
          <Example mode={mode}>안/못 일하다</Example>
          <Translation mode={mode}>Не работать</Translation>
        </div>

        <h3>3 Particle</h3>
        <h3>N이/가 частица именительного падежа</h3>
        <div className="row">
          <Expr>Рема после гласной</Expr>
          <Example mode={mode}>날씨가 종아요</Example>
          <Translation mode={mode}>Погода хорошая</Translation>
        </div>

        <div className="row">
          <Expr>Рема после согласной</Expr>
          <Example mode={mode}>과일이 너무 비싸요</Example>
          <Translation mode={mode}>Фрукты очень дорогие</Translation>
        </div>

        <h3>N은/는 Particle</h3>
        <div className="row">
          <Expr>Тема</Expr>
          <Example mode={mode}>도서관은 지수와 내가 처음 만난 장소이다</Example>
          <Translation mode={mode}>Библиотека - место, где впервые я встретил Джису</Translation>
        </div>

        <div className="row">
          <Expr>Контраст</Expr>
          <Example mode={mode}>동생은 부산에 살고 나는 서울에 살고 있다</Example>
          <Translation mode={mode}>Мл. брат живет в Пусане, а я - в Сеуле</Translation>
        </div>

        <h3>N을/를 - частица прямого дополнения</h3>
        <div className="row">
          <Expr>Прямое дополнение</Expr>
          <Example mode={mode}>아침에는 빵을 먹는다.</Example>
          <Translation mode={mode}>По утрам ем хлеб</Translation>
        </div>

        <div className="row">
          <Expr><IntLevelIcon />Влияние на объект</Expr>
          <Example mode={mode}>쓰다 남은 물은 화분을 줘요 <span className='text-warning'>(не 에)</span></Example>
          <Translation mode={mode}>Остаток воды вылил в горшок</Translation>
        </div>

        <div className="row">
          <Expr>C 오다 и 가다/конечная точка</Expr>
          <Example mode={mode}>채소를 사러 시장을 가야 한다</Example>
          <Translation mode={mode}>Надо пойти на рынок купить овощи</Translation>
        </div>

        <div className="row">
          <Expr>Отправная точка</Expr>
          <Example mode={mode}>지난 달 사건을 시작으로 비슷한 범죄가 늘고 있어요</Example>
          <Translation mode={mode}>Начиная со случая в прошлом месяце, число похожих преступлений увеличилось</Translation>
        </div>

        <div className="row">
          <Expr><IntLevelIcon />Кол-во действия, времени при непереходном глаголе</Expr>
          <Example mode={mode}>몸살이 나서 열 시간을 누워 있었다</Example>
          <Translation mode={mode}>Устал, провалялся 10 часов</Translation>
        </div>

        <div className="row">
          <Expr><IntLevelIcon />Усиление</Expr>
          <Example mode={mode}>승규는 잃어버린 열쇠를 아직도 찾지를 못했다</Example>
          <Translation mode={mode}>Сынгю все никак не находит потерянный ключ</Translation>
        </div>

        <h3>N와/과 (официальный, литературный)</h3>
        <div className="row">
          <Expr>Критерий, стандарт сравнения</Expr>
          <Example mode={mode}>미국은 우리나라와 달리 6월에 졸업식을 한다.</Example>
          <Translation mode={mode}>В США в отличии от нашей Кореи выпускные проводятся в июне.</Translation>
        </div>

        <div className="row">
          <Expr>Вместе с </Expr>
          <Example mode={mode}>나는 친구와 수영을 배우기로 했다</Example>
          <Translation mode={mode}>Я решил учиться плаванию вместе с другом</Translation>
        </div>

        <h3>N하고 (разговорный)</h3>
        <div className="row">
          <Expr>Критерий, стандарт сравнения</Expr>
          <Example mode={mode}>준하는 어느덧 아버지하고 키가 비슷해졌다.</Example>
          <Translation mode={mode}>Джуна неожиданно стала одного роста с отцом</Translation>
        </div>

        <div className="row">
          <Expr>Вместе с/и</Expr>
          <Example mode={mode}>승규는 게임을 하다 동생하고 크게 다투었다</Example>
          <Translation mode={mode}>Сынгю играл в игру и повздорил с мл. братом</Translation>
        </div>

        <h3>N(이)랑 (неформальный)</h3>
        <div className="row">
          <Expr>Критерий, стандарт сравнения</Expr>
          <Example mode={mode}>내 모자는 네 모자랑 사이즈가 같다</Example>
          <Translation mode={mode}>Моя шляпа с твоей шляпой одного размера</Translation>
        </div>

        <div className="row">
          <Expr>Вместе с/и</Expr>
          <Example mode={mode}>나는 친구랑 일찍 헤어지고 집으로 왔다</Example>
          <Translation mode={mode}>Я уже расстался с другом и пришел домой.</Translation>
        </div>

        <h3>N의 частица атрибутного падежа</h3>
        <div className="row">
          <Expr>Принадлежность</Expr>
          <Example mode={mode}>친구의 가방</Example>
          <Translation mode={mode}>Сумка друга</Translation>
        </div>

        <div className="row">
          <Expr>Атрибут, свойство</Expr>
          <Example mode={mode}>비둘기는 평화의 상징이다</Example>
          <Translation mode={mode}>Голубь - символ мира</Translation>
        </div>

        <div className="row">
          <Expr>Отношение целое-часть</Expr>
          <Example mode={mode}>하루의 대부분을 학교에서 보낸다</Example>
          <Translation mode={mode}>Большую часть дня провожу в школе</Translation>
        </div>

        <div className="row">
          <Expr>Совместна с другими частицами</Expr>
          <Example mode={mode}>부모로서의 역할은 바다에서의 등대와 같다</Example>
          <Translation mode={mode}>Роль родителей как маяк в море.</Translation>
        </div>

        <h3>N에</h3>
        <div className="row">
          <Expr>Место (ассоциация, неподвижность, сравнить с 에서)</Expr>
          <Example mode={mode}>문에 서 있다</Example>
          <Translation mode={mode}>Стоять в двери.</Translation>
        </div>

        <div className="row">
          <Expr>Направление (сравнить с 로)</Expr>
          <Example mode={mode}>싸움터에 나가다 </Example>
          <Translation mode={mode}>Идти на фронт</Translation>
        </div>

        <div className="row">
          <Expr>Определенный момент времени (час, день, месяц, год, возраст, период, эпоху, ...)</Expr>
          <Example mode={mode}>우호 1시에</Example>
          <Translation mode={mode}>В 1ч. дня</Translation>
        </div>

        <div className="row">
          <Expr>День недели</Expr>
          <Example mode={mode}>일요일에</Example>
          <Translation mode={mode}>В воскресенье.</Translation>
        </div>

        <div className="row">
          <Expr>Отрезок времени</Expr>
          <Example mode={mode}>3년 후에</Example>
          <Translation mode={mode}>Через 3 года</Translation>
        </div>

        <div className="row">
          <Expr>Дата</Expr>
          <Example mode={mode}>7월 2일 아침에</Example>
          <Translation mode={mode}>Утром 2-го июля.</Translation>
        </div>

        <div className="row">
          <Expr>Частота (раз за промежуток времени), доли, части.</Expr>
          <Example mode={mode}>이 잡지는 1년에 4번 발행된다</Example>
          <Translation mode={mode}>Этот журнал издается 4 раз за год.</Translation>
        </div>

        <div className="row">
          <Expr>Цена (штук за денежную единицу)</Expr>
          <Example mode={mode}>사과는 5개에 2000원이었다 </Example>
          <Translation mode={mode}>5 яблок за 2000 вон.</Translation>
        </div>

        <div className="row">
          <Expr>Критерий, стандарт сравнения, отношение.</Expr>
          <Example mode={mode}>건강에 좋다</Example>
          <Translation mode={mode}>хорошо для здоровья.</Translation>
        </div>

        <div className="row">
          <Expr></Expr>
          <Example mode={mode}>질문에 대답하다</Example>
          <Translation mode={mode}>Ответить на вопрос.</Translation>
        </div>

        <div className="row">
          <Expr></Expr>
          <Example mode={mode}>값은 크기에 따라 다르다</Example>
          <Translation mode={mode}>Цена разнится по размеру.</Translation>
        </div>

        <div className="row">
          <Expr>Причина физического, психического состояния, слабая причина (сравнить с 로).</Expr>
          <Example mode={mode}>더위에 시달리다</Example>
          <Translation mode={mode}>Страдать от жары.</Translation>
        </div>

        <h3>N에서</h3>
        <div className="row">
          <Expr>Место действия</Expr>
          <Example mode={mode}>슈퍼마켓에서 산 쇠고기</Example>
          <Translation mode={mode}>Говядина, купленная в супермаркете.</Translation>
        </div>

        <div className="row">
          <Expr>Отправной пункт, из места</Expr>
          <Example mode={mode}>그는 부산에서  왔다</Example>
          <Translation mode={mode}>Он приехал из Пусана.</Translation>
        </div>

        <div className="row">
          <Expr></Expr>
          <Example mode={mode}>기차에서 내리다</Example>
          <Translation mode={mode}>Сойти с поезда.</Translation>
        </div>

        <div className="row">
          <Expr></Expr>
          <Example mode={mode}>해는 동쪽에서 뜬다 </Example>
          <Translation mode={mode}>Солнце встает на востоке.</Translation>
        </div>

        <div className="row">
          <Expr>Вычитание (из)</Expr>
          <Example mode={mode}>5에서 3을 빼다</Example>
          <Translation mode={mode}>Вычесть 3 из 5.</Translation>
        </div>

        <div className="row">
          <Expr>Повод, мотив, стимул (чувство)</Expr>
          <Example mode={mode}>그는 호기심에서  방안을 들여다보았다</Example>
          <Translation mode={mode}>Он заглянул в комнату из любопытства.</Translation>
        </div>

        <div className="row">
          <Expr>Согласно, с точки зрения.</Expr>
          <Example mode={mode}>교육적 견지에서</Example>
          <Translation mode={mode}>С точки зрения образования.</Translation>
        </div>

        <h3><IntLevelIcon/>서</h3>
        <div className="row">
          <Expr>Сокращенное 에서</Expr>
          <Example mode={mode}>그는 부산<Hilite>서</Hilite> 왔다.</Example>
          <Translation mode={mode}>Он из Пусана.</Translation>
        </div>
        <div className="row">
          <Expr>Уселение</Expr>
          <Example mode={mode}>숙제를 다하고<Hilite>서</Hilite> 잠자리에 들었다</Example>
          <Translation mode={mode}>Закончив (только) д/з, пошел спать.</Translation>
        </div>

        <h3>까지</h3>
        <div className="row">
          <Expr>Конечная точка</Expr>
          <Example mode={mode}>2월 말까지</Example>
          <Translation mode={mode}>До конца февраля</Translation>
        </div>

        <div className="row">
          <Expr><IntLevelIcon/>Степень, вплоть до, даже</Expr>
          <Example mode={mode}>최근 노트북 컴퓨터는 가볍고 얇아진 데다 성능까지 좋아졌다</Example>
          <Translation mode={mode}>Сегодняшние ноутбуки легкие, стали тонкими, и к тому же даже функциональные</Translation>
        </div>

        <div className="row">
          <Expr><IntLevelIcon/>Выше/больше обычного</Expr>
          <Example mode={mode}>유민이는 그렇게 자세하게까지 말하고 싶지는 않았다</Example>
          <Translation mode={mode}>Не хочу, чтобы Юмин-И настолько подробно говорила</Translation>
        </div>

        <h3>N에서 N까지</h3>
        <div className="row">
          <Expr>от до (место)</Expr>
          <Example mode={mode}>서울에서 부산까지</Example>
          <Translation mode={mode}>от Сеула до Пусана.</Translation>
        </div>

        <div className="row">
          <Expr>N부터 N까지 от до (время)</Expr>
          <Example mode={mode}></Example>
          <Translation mode={mode}></Translation>
        </div>

        <div className="row">
          <Expr>От до (нематериальный диапазон)</Expr>
          <Example mode={mode}>나는 오늘 일본어로 일부터 십까지 세는 법을 배웠다</Example>
          <Translation mode={mode}>Я сегодня научился способу считать от 1 до 10 по-японски.</Translation>
        </div>

        <h3>N에게</h3>

        <div className="row">
          <Expr>Цель, направление как одушевленное понятие (кому)</Expr>
          <Example mode={mode}>나는 아들∼ 책을 주었다</Example>
          <Translation mode={mode}>Я купил книгу сыну.</Translation>
        </div>

        <div className="row">
          <Expr><IntLevelIcon/>Отношение к одушевленному понятию</Expr>
          <Example mode={mode}>그∼ 의지하지 마라</Example>
          <Translation mode={mode}>Не надейся на него</Translation>
        </div>

        <div className="row">
          <Expr><IntLevelIcon/>Субъект действия (производитель действия) в страдательном залоге</Expr>
          <Example mode={mode}>나는 그∼ 속았다</Example>
          <Translation mode={mode}>Я был обманут им.</Translation>
        </div>

        <div className="row">
          <Expr>Принадлежность</Expr>
          <Example mode={mode}>나에게 공부할 시간만 더 있었다면 시험을 더 잘 봤을 텐데</Example>
          <Translation mode={mode}>Было бы у меня время для занятий, сдал бы экзамен лучше</Translation>
        </div>

        <div className="row">
          <Expr><IntLevelIcon/>Субъект, испытывающий влияние действия</Expr>
          <Example mode={mode}>?</Example>
          <Translation mode={mode}>?</Translation>
        </div>

        <h3>N한테</h3>
        <div className="row">
          <Expr>"К", получатель (более разговорный)</Expr>
          <Example mode={mode}>누구한테 편지를 써요?</Example>
          <Translation mode={mode}>Кому пишешь письмо?</Translation>
        </div>

        <h3>N에게서</h3>
        <div className="row">
          <Expr>Одушевленный ысточник получения объекта (материальный и нематериальный), обстоятельство "от"</Expr>
          <Example mode={mode}>나는 오랜만에 친구<Hilite>에게서</Hilite> 편지를 받고 매우 기뻤다.</Example>
          <Translation mode={mode}>Очень рад был получить письмо от друга после продолжительного времени.</Translation>
        </div>
        
        <h3>N한테서</h3>
        <div className="row">
          <Expr>Разговорный 에게서</Expr>
          <Example mode={mode}>그 소문은 누구<Hilite>한테서</Hilite> 들었어?</Example>
          <Translation mode={mode}>От кого слышал эту новость?</Translation>
        </div>
        
        
        <h3>N도</h3>
        <div className="row">
          <Expr>Тоже</Expr>
          <Example mode={mode}>나<Hilite>도</Hilite> 그를 알고 있다</Example>
          <Translation mode={mode}>Я тоже знаю его.</Translation>
        </div>

        <div className="row">
          <Expr>Ни это, ни то (сущ-е, с отрицанием)</Expr>
          <Example mode={mode}>그것은 이득<Hilite>도</Hilite> 해악<Hilite>도</Hilite> 되지 않는다</Example>
          <Translation mode={mode}>Это не станет ни пользой, ни вредом.</Translation>
        </div>

        <div className="row">
          <Expr>Ни это, ни то (глаголы, с отрицанием)</Expr>
          <Example mode={mode}>그는 프랑스어를 읽지<Hilite>도</Hilite> 쓰지<Hilite>도</Hilite> 말하지<Hilite>도</Hilite> 못한다</Example>
          <Translation mode={mode}>Он не может ни читать, ни писать, ни говорить по-французски.</Translation>
        </div>

        <div className="row">
          <Expr>И то, и то (прил-е) </Expr>
          <Example mode={mode}>그녀는 똑똑하기<Hilite>도</Hilite> 하고 친절하기<Hilite>도</Hilite> 하다</Example>
          <Translation mode={mode}>Она и умная, и добрая</Translation>
        </div>

        <div className="row">
          <Expr>Даже (крайняя степень)</Expr>
          <Example mode={mode}>한 사람<Hilite>도</Hilite> 그를 구해 주려고 하는 사람이 없었다</Example>
          <Translation mode={mode}>Не было никого, кто помог ему.</Translation>
        </div>

        <div className="row">
          <Expr>Даже если (котраст)</Expr>
          <Example mode={mode}>적어<Hilite>도</Hilite>, 많아<Hilite>도</Hilite></Example>
          <Translation mode={mode}>По меньшей мере; в крайнем случае</Translation>
        </div>

        <h3>N만</h3>
        <div className="row">
          <Expr>Только; лишь, минимум</Expr>
          <Example mode={mode}>너<Hilite>도</Hilite>이 이것을 할 수 있다</Example>
          <Translation mode={mode}>Только ты можешь сделать это.</Translation>
        </div>

        <h3>N밖에</h3>
        <div className="row">
          <Expr>Ничего кроме (всегда с отрицанием)</Expr>
          <Example mode={mode}>냉장고에 우유<Hilite>밖에</Hilite> 없어요</Example>
          <Translation mode={mode}>В холодильнике только молоко</Translation>
        </div>

        <h3>N(으)로</h3>
        <div className="row">
          <Expr>Способ</Expr>
          <Example mode={mode}>영어<Hilite>로</Hilite> 이야기하다</Example>
          <Translation mode={mode}>Говорить на английском.</Translation>
        </div>

        <div className="row">
          <Expr>Средство, инструмент</Expr>
          <Example mode={mode}>내 시계<Hilite>로</Hilite> 3시</Example>
          <Translation mode={mode}>По моим часам 3ч.</Translation>
        </div>

        <div className="row">
          <Expr>Исходный материал</Expr>
          <Example mode={mode}>나무<Hilite>로</Hilite> 만든 상자</Example>
          <Translation mode={mode}>Ящик, сделанный из дерева.</Translation>
        </div>

        <div className="row">
          <Expr>Конечное направление (сравнить с 에)</Expr>
          <Example mode={mode}>교회<Hilite>로</Hilite> 들어오다</Example>
          <Translation mode={mode}>Войти в церковь.</Translation>
        </div>

        <div className="row">
          <Expr>Конечная дата</Expr>
          <Example mode={mode}>내일<Hilite>로</Hilite> 원서 접수가 마감된다</Example>
          <Translation mode={mode}>Крайний срок для заявок - завтра.</Translation>
        </div>

        <div className="row">
          <Expr>Конечное состояние</Expr>
          <Example mode={mode}>우리말을 영어<Hilite>로</Hilite> 번역하다</Example>
          <Translation mode={mode}>Перевести корейский на английский</Translation>
        </div>

        <div className="row">
          <Expr>Причина</Expr>
          <Example mode={mode}>그는 과로<Hilite>로</Hilite> 병이 났다</Example>
          <Translation mode={mode}>Он заболел от переработки.</Translation>
        </div>

        <h3>(이)나</h3>
        <div className="row">
          <Expr>Или (с сущ и мест)</Expr>
          <Example mode={mode}>아침에 빵<Hilite>이나</Hilite> 밥을 먹어요.</Example>
          <Translation mode={mode}>По утром ем хлеб или рис</Translation>
        </div>

        <div className="row">
          <Expr>Примерно, что-то такое</Expr>
          <Example mode={mode}>친구를 두 시간<Hilite>이나</Hilite> 기다렸어요.</Example>
          <Translation mode={mode}>Ждал друга часа 2</Translation>
        </div>

        <h3>Другие частицы</h3>
        <div className="row">
          <Expr>N쯤 около</Expr>
          <Example mode={mode}>파티에 20명<Hilite>쯤</Hilite> 왔어요.</Example>
          <Translation mode={mode}>На вечеринку пришло около 20 человек</Translation>
        </div>

        <div className="row">
          <Expr>N처럼 словно, как</Expr>
          <Example mode={mode}>가수<Hilite>처럼</Hilite> 노래를 잘 불러요</Example>
          <Translation mode={mode}>Поет хорошо, словно певец.</Translation>
        </div>

        <div className="row">
          <Expr>N같이 словно, как (не "вместе")</Expr>
          <Example mode={mode}>하영 씨는 천사<Hilite>같이</Hilite> 착해요</Example>
          <Translation mode={mode}>Хаён добра словно ангел.</Translation>
        </div>

        <div className="row">
          <Expr>N보다 чем (критерий сравнения)</Expr>
          <Example mode={mode}>비행기가 기차<Hilite>보다</Hilite> 빨라요</Example>
          <Translation mode={mode}>Самолет быстрее поезда.</Translation>
        </div>

        <div className="row">
          <Expr>N마다 каждый</Expr>
          <Example mode={mode}>웨슬리 씨는 일요일<Hilite>마다</Hilite> 교회에 가요</Example>
          <Translation mode={mode}>Уэсли ходит каждое воскресенье в церковь.</Translation>
        </div>

        <h3>4. Перечисление и контраст</h3>
        <div className="row">
          <Expr>A/V-고 соединительный суффикс для глаголов, при-х, время нельзя</Expr>
          <Example mode={mode}>캐럴 씨는 키가 크<Hilite>고</Hilite> 날씬해요</Example>
          <Translation mode={mode}>Кэрол высокая и стройная</Translation>
        </div>

        <div className="row">
          <Expr>A/V-거나 или, альтернатива, суффикс</Expr>
          <Example mode={mode}>아침에 빵을 먹<Hilite>거나</Hilite> 우유를 마셔요</Example>
          <Translation mode={mode}>На завтрак ем хлеб или пью молоко.</Translation>
        </div>

        <div className="row">
          <Expr>A/V-지만 противительный суффикс</Expr>
          <Example mode={mode}>한국말은 어렵<Hilite>지만</Hilite> 재미있어요</Example>
          <Translation mode={mode}>Корейский трудной, но интересный.</Translation>
        </div>

        <div className="row">
          <Expr>A/V-(으)ㄴ/는데 "хотя", "но" (не контекст для 2-й части)</Expr>
          <Example mode={mode}>낮에는 차가 많<Hilite>은데</Hilite> 밤에는 차가 없어요</Example>
          <Translation mode={mode}>Днем машин много, но ночью машин нет.</Translation>
        </div>

        <h3>5. Выражение времени</h3>
        <div className="row">
          <Expr>N 전에 перед, до</Expr>
          <Example mode={mode}>2년 전에 한국에 왔습니다</Example>
          <Translation mode={mode}>2 года назад приехал в Корею.</Translation>
        </div>

        <div className="row">
          <Expr>V-기 전에 перед действием</Expr>
          <Example mode={mode}>수영하기 전에 준비운동을 해요</Example>
          <Translation mode={mode}>Перед плаванием разминаюсь.</Translation>
        </div>

        <div className="row">
          <Expr>N 후에 "после", "спустя"</Expr>
          <Example mode={mode}>한 달 후에 아기가 태어나요</Example>
          <Translation mode={mode}>Через месяц родится ребенок.</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)ㄴ 후에 Time после действия</Expr>
          <Example mode={mode}>밥을 먹은 후에 이를 닦아요</Example>
          <Translation mode={mode}>Поев, почищу зубы.</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)ㄴ 다음에 аналог 후</Expr>
          <Example mode={mode}>승규는 대학을 졸업한 다음에 군대에 갔다.</Example>
          <Translation mode={mode}>Сынгю, закончив университет, пошел в армию.</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)ㄴ 뒤에 аналог 후</Expr>
          <Example mode={mode}>홍보를 한 뒤에 사람들이 점차 많이 오기 시작했다.</Example>
          <Translation mode={mode}>После объявления люди постепенно начали приходить.</Translation>
        </div>

        <div className="row">
          <Expr>V-고 나서 закончив, потом</Expr>
          <Example mode={mode}>일을 하고 나서 쉽니다</Example>
          <Translation mode={mode}>Сделав дело, отдыхаю (веж).</Translation>
        </div>

        <div className="row">
          <Expr>V-아/어서 (без прош времени)</Expr>
          <Example mode={mode}>바나나를 까서 먹었어요</Example>
          <Translation mode={mode}>Почистил банан и съел.</Translation>
        </div>

        <div className="row">
          <Expr>N 때 когда, во время</Expr>
          <Example mode={mode}>방학 때 아르바이트를 해요</Example>
          <Translation mode={mode}>Во время каникул подрабатывал.</Translation>
        </div>

        <div className="row">
          <Expr>A/V-(으)ㄹ 때 можно в прош. времени</Expr>
          <Example mode={mode}>시험 볼 때 옆 사람의 시험지를 보지 마세요</Example>
          <Translation mode={mode}>Во время экзамена не смотрите в бумаги соседа.</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)면서параллельное дей-е</Expr>
          <Example mode={mode}>밥을 먹으면서 TV를 봅니다</Example>
          <Translation mode={mode}>В время еды смотрю ТВ.</Translation>
        </div>

        <div className="row">
          <Expr>N 중пока</Expr>
          <Example mode={mode}>지하철 공사 중 입니다</Example>
          <Translation mode={mode}>Метро в процессе постройки</Translation>
        </div>

        <div className="row">
          <Expr>V-는 중пока</Expr>
          <Example mode={mode}>지금 집에 가는 중이에요</Example>
          <Translation mode={mode}>Сейчас иду домой.</Translation>
        </div>

        <div className="row">
          <Expr>V-자마자  сразу после</Expr>
          <Example mode={mode}>너무 피곤해서 집에 오자마자 잤어요.</Example>
          <Translation mode={mode}>Очень устал, пришел домой, тут же заснул.</Translation>
        </div>

        <div className="row">
          <Expr>N 동안в течение</Expr>
          <Example mode={mode}>어제 4시간 동안 공부했어요.</Example>
          <Translation mode={mode}>Вчера 4 часа учился.</Translation>
        </div>

        <div className="row">
          <Expr>V-는 동안пока</Expr>
          <Example mode={mode}>친구들이 점심을 먹는 동안 나는 숙제를 했어요</Example>
          <Translation mode={mode}>Когда друзья ели, я делал д/з.</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)ㄴ 지 период после события</Expr>
          <Example mode={mode}>저는 힌국에 온 지 2년이 되었습니다.</Example>
          <Translation mode={mode}>Стало 2 года, как я приехал в Корею.</Translation>
        </div>

        <h3>6. Способность и возможность</h3>
        <div className="row">
          <Expr>V-(으)ㄹ 수 있다 мочь</Expr>
          <Example mode={mode}>영어를 말할 수 있는 사람</Example>
          <Translation mode={mode}>Тот, кто может говорит по-английски.</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)ㄹ 수 없다 не мочь</Expr>
          <Example mode={mode}>이 시계는 고칠 수가 없다 </Example>
          <Translation mode={mode}>Эти часы невозможно починить</Translation>
        </div>

        <div className="row">
          <Expr>Наречная (деепричастная) форма</Expr>
          <Example mode={mode}>그는 하는 수 없이 떠났다</Example>
          <Translation mode={mode}>Вынужден был уйти</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)ㄹ 줄 알다 уметь делать</Expr>
          <Example mode={mode}>각도를 잴 줄 알아요</Example>
          <Translation mode={mode}>Знаю, как измерять углы</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)ㄹ 줄 모르다 не уметь делать</Expr>
          <Example mode={mode}>김밥을 만들 줄 몰라요</Example>
          <Translation mode={mode}>Не знаю, как делать кимбап</Translation>
        </div>

        <h3>7. Требования, просьба</h3>
        <div className="row">
          <Expr>V-(으)세요 сделайте, после согласной</Expr>
          <Example mode={mode}>여기 앉으세요. </Example>
          <Translation mode={mode}>Сядьте здесь.</Translation>
        </div>

        <div className="row">
          <Expr>Сделайте, после гласной</Expr>
          <Example mode={mode}>책 15쪽을 보세요. </Example>
          <Translation mode={mode}>Смотрите странице 15 книги.</Translation>
        </div>

        <div className="row">
          <Expr>ㄹ глаголы</Expr>
          <Example mode={mode}>오래 사세요</Example>
          <Translation mode={mode}>Живите долго.</Translation>
        </div>

        <div className="row">
          <Expr>V-지 마세요 не делайте</Expr>
          <Example mode={mode}>전화하지 마세요. </Example>
          <Translation mode={mode}>Не звоните.</Translation>
        </div>

        <div className="row">
          <Expr>A/V-아/어야 되다 нужно</Expr>
          <Example mode={mode}>여자 친구 생일이라서 선물을사야 돼요</Example>
          <Translation mode={mode}>У подруги д/р, нужно купить подарок</Translation>
        </div>

        <div className="row">
          <Expr>A/V-아/어야 하다 нужно</Expr>
          <Example mode={mode}>먹기 전에 돈을 내야 해요</Example>
          <Translation mode={mode}>Перед едой нужно заплатить.</Translation>
        </div>

        <div className="row">
          <Expr>-지 않으면 안 되다 нужно</Expr>
          <Example mode={mode}>8월은 휴가철이니까 비행기 표를 미리 사지 않으면 안 돼요</Example>
          <Translation mode={mode}>8-го часа выходной, нужно купить билет на самолет заранее.</Translation>
        </div>

        <div className="row">
          <Expr>A/V-지 않아도 되다 можно не</Expr>
          <Example mode={mode}>내일은 휴가라서 회사에 가지 않아도 돼요.</Example>
          <Translation mode={mode}>Завтра выходной, приходить на работу не нужно.</Translation>
        </div>

        <div className="row">
          <Expr>A/V-지 않아도 하다 можно не</Expr>
          <Example mode={mode}>?</Example>
          <Translation mode={mode}>?</Translation>
        </div>

        <div className="row">
          <Expr>안 A/V-아/어도 되다 не нужно</Expr>
          <Example mode={mode}>?</Example>
          <Translation mode={mode}>?</Translation>
        </div>

        <div className="row">
          <Expr>A/V-아/어도 되다 можно</Expr>
          <Example mode={mode}>?</Example>
          <Translation mode={mode}>?</Translation>
        </div>

        <div className="row">
          <Expr>A/V-(으)면 안 되다 нельзя</Expr>
          <Example mode={mode}>?</Example>
          <Translation mode={mode}>?</Translation>
        </div>

        <h3>8. Expressions of Hope</h3>
        <div className="row">
          <Expr>V-고 싶다 я хочу делать</Expr>
          <Example mode={mode}>한국말을 잘하고 싶어요.</Example>
          <Translation mode={mode}>Хочу говорит по-корейский</Translation>
        </div>

        <div className="row">
          <Expr>V-고 싶어하다 про 3-х лиц</Expr>
          <Example mode={mode}>에릭 씨는 자동차를 사고 싶어해요</Example>
          <Translation mode={mode}>Эрик хочет купить авто</Translation>
        </div>

        <div className="row">
          <Expr>A/V-았/었으면 좋겠다 хотелось бы (в противовес текущей ситуации)</Expr>
          <Example mode={mode}>30살 전에 결혼했으면 좋겠어요.</Example>
          <Translation mode={mode}>Хотелось бы жениться до 30.</Translation>
        </div>

        <div className="row">
          <Expr>-았/었으면 하다 хотелось бы (но меньше)</Expr>
          <Example mode={mode}>제 전공이 경제학이니까 경제와 관련된 일을 했으면 합니다.</Example>
          <Translation mode={mode}>Моя специальность - экономика, поэтому хотелось бы делать работу, связанную с экономикой.</Translation>
        </div>

        <h3>9. Причина и повод</h3>
        <div className="row">
          <Expr>A/V-아/어서 не в командах и предложениях, нет суф-са прошлого времени</Expr>
          <Example mode={mode}>그 옷은 작아서 못 입어요</Example>
          <Translation mode={mode}>Эта одежда мала, не надеть</Translation>
        </div>

        <div className="row">
          <Expr>Связка (이)라(서)</Expr>
          <Example mode={mode}>여자 친구 생일이라서 선물을사야 돼요.</Example>
          <Translation mode={mode}>У подруги д/р, поэтому нужно купить подарок.</Translation>
        </div>

        <div className="row">
          <Expr>A/V-(으)니까</Expr>
          <Example mode={mode}>길이 막히니까 지하철을 탑시다.</Example>
          <Translation mode={mode}>Дороги забиты, поедем на метро</Translation>
        </div>

        <div className="row">
          <Expr>N 때문에</Expr>
          <Example mode={mode}>눈 때문에 길이 미끄러워요.</Example>
          <Translation mode={mode}>Из-за снега дороги скользкие.</Translation>
        </div>

        <div className="row">
          <Expr>A/V-기 때문에</Expr>
          <Example mode={mode}>가고 싶지만 아르바이트를 하기 때문에 못 가요.</Example>
          <Translation mode={mode}>Хочу пойти, но работую, пойти не могу.</Translation>
        </div>

        <h3>10. Просьба и помощь</h3>
        <div className="row">
          <Expr>V-아/어 주세요? (+좀) услуга говорящему</Expr>
          <Example mode={mode}>문 좀 닫아 주세요.</Example>
          <Translation mode={mode}>Закройте окно.</Translation>
        </div>

        <div className="row">
          <Expr>V-아/어 주시겠어요? услуга говорящему</Expr>
          <Example mode={mode}>사진 좀 찍어 주시겠어요?</Example>
          <Translation mode={mode}>Сделайте фото (для меня)</Translation>
        </div>

        <div className="row">
          <Expr>V-아/어 줄게요 (드릴게)? предложение услуги</Expr>
          <Example mode={mode}>제가 도와 드릴게요.</Example>
          <Translation mode={mode}>Позволь помочь тебе.</Translation>
        </div>

        <div className="row">
          <Expr>V-아/어 줄까요? предложение услуги</Expr>
          <Example mode={mode}>우산이 두 개 있는데 빌려 줄까요?</Example>
          <Translation mode={mode}>Здесь 2 зонта, отдолжить вам?</Translation>
        </div>

        <h3>11. Попытка нового и проба</h3>
        <div className="row">
          <Expr>V-아/어 보다 Пробовать</Expr>
          <Example mode={mode}>아/어 보다  갈비를 먹어 봤어요?</Example>
          <Translation mode={mode}>Пробовали кальби (когда-нибудь)?</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)ㄴ 적이 있다/없다 Иметь опыт ...</Expr>
          <Example mode={mode}>인도 영화를 본 적이 있어요.</Example>
          <Translation mode={mode}>Я видел индийское кино (как-то).</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)ㄴ 적이 없다 Никогда не ...</Expr>
          <Example mode={mode}>회사에 지각한 적이 없어요.</Example>
          <Translation mode={mode}>Никогда не опаздывал на работу.</Translation>
        </div>

        <h3>12. Запрос мнения и делание предложения.</h3>
        <div className="row">
          <Expr>V-(으)ㄹ까요? предложение к слушателю сделать вместе</Expr>
          <Example mode={mode}>같이 농구할까요? </Example>
          <Translation mode={mode}>Поиграем в баскетбол</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)ㄹ까요? спросить мнение слушателя (делает говорящий)</Expr>
          <Example mode={mode}>창문을 열까요?</Example>
          <Translation mode={mode}>Мне открыть окно?</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)ㅂ시다 предложение сделать/не делать вместе</Expr>
          <Example mode={mode}>한식을 먹읍시다. </Example>
          <Translation mode={mode}>Давай поедим корейской еды</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)시겠어요? вопрос о предпочтении служателя</Expr>
          <Example mode={mode}>도넛 좀 드시겠어요?</Example>
          <Translation mode={mode}>Будете (есть) пончик?</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)ㄹ래요? вопрос о желании слушателя</Expr>
          <Example mode={mode}>등산 같이 갈래요?</Example>
          <Translation mode={mode}>Do you want to go hiking?</Translation>
        </div>

        <h3>13. Намерения и планы</h3>
        <div className="row">
          <Expr>A/V-겠어요 ① планы говорящего</Expr>
          <Example mode={mode}>제가 출장을 가겠습니다.</Example>
          <Translation mode={mode}>Поеду в командировку</Translation>
        </div>

        <div className="row">
          <Expr>что-то скоро случится</Expr>
          <Example mode={mode}>내일은 비가 오겠습니다. </Example>
          <Translation mode={mode}>Завтра будет дождь</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)ㄹ게요 действие касательно слушаетля, обещание</Expr>
          <Example mode={mode}>일이 있어서 먼저 갈게요. </Example>
          <Translation mode={mode}>I have work to do, so I’ll be leaving now.</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)ㄹ래요 Желание говорящего</Expr>
          <Example mode={mode}>커피 마실래요.</Example>
          <Translation mode={mode}>Буду (хочу) кофе.</Translation>
        </div>

        <h3>14. Контекст и объяснение</h3>
        <div className="row">
          <Expr>A/V-(으)ㄴ/는데</Expr>
          <Example mode={mode}>추운데 창문을 닫을까요?</Example>
          <Translation mode={mode}>холодно, я закрою окно?</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)니까</Expr>
          <Example mode={mode}>아침에 일어나니까 선물이 있었어요. </Example>
          <Translation mode={mode}>Утро, проснувшись, был подарок.</Translation>
        </div>

        <h3>15. Цель и намерение</h3>
        <div className="row">
          <Expr>V-(으)러 가다/오다 с глаголами движения</Expr>
          <Example mode={mode}>옷을 사러 동대문 시장에 가요.</Example>
          <Translation mode={mode}>Идем на Тондэмун купить одежду.</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)려고 не в буд. времени, не с призываом</Expr>
          <Example mode={mode}>살을 빼려고 매일 세 시간씩 운동을 해요.</Example>
          <Translation mode={mode}>Чтобы похудеть, упражняюсь 3 часа каждый день.</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)려고 하다 планы</Expr>
          <Example mode={mode}>여름휴가 때 여행을 하려고 해요.</Example>
          <Translation mode={mode}>Планирую в летний отпуск поехать в путешествие.</Translation>
        </div>

        <div className="row">
          <Expr>N을/를 위해(서) цель, "для"</Expr>
          <Example mode={mode}>건강을 위해서 매일 비타민을 먹고 있습니다. </Example>
          <Translation mode={mode}>Для здоровья принимаю витамины каждый день.</Translation>
        </div>

        <div className="row">
          <Expr>V-기 위해(서) цель, "для"</Expr>
          <Example mode={mode}>훌륭한 스케이트 선수가 되기 위해 열심히 연습을 합니다. </Example>
          <Translation mode={mode}>Практикуюсь, чтобы стать великим конькобежцем.</Translation>
        </div>

        <div className="row">
          <Expr>V-기로 하다 обещание себе/другим</Expr>
          <Example mode={mode}>우리는 3년 후에 결혼하 기로 했습니다.</Example>
          <Translation mode={mode}>Решили пожениться через 3 года.</Translation>
        </div>

        <h3>16. Условие</h3>
        <div className="row">
          <Expr>A/V-(으)면 условие</Expr>
          <Example mode={mode}>컴퓨터를 많이 하면 눈이 아파요. </Example>
          <Translation mode={mode}>Если использовть компьютер много, то болят глаза.</Translation>
        </div>

        <div className="row">
          <Expr>V-(으)려면 сознательное действие как условие</Expr>
          <Example mode={mode}>농구를 잘하려면 점프를 잘해야 돼요. </Example>
          <Translation mode={mode}>Хочешь играть в баскетбол хорошо, нужно умень хорошо прыгать.</Translation>
        </div>

        <div className="row">
          <Expr>A/V-아/어도 контраст</Expr>
          <Example mode={mode}>크게 말해도 할머니가 못 들어요. </Example>
          <Translation mode={mode}>Даже если говорить громче, бабушка не услышит.</Translation>
        </div>

        <h3>17. Предположение</h3>
        <div className="row">
          <Expr>A/V-겠어요 предположение о ситуации (можно в прошлом)</Expr>
          <Example mode={mode}>와, 맛있겠어요. </Example>
          <Translation mode={mode}>Ух, выглядит вкусным.</Translation>
        </div>

        <div className="row">
          <Expr>A/V-(으)ㄹ 거예요 предположение о ситуации (слушателе). можно в прошлом</Expr>
          <Example mode={mode}>그 옷을 입으면 더울 거예요. </Example>
          <Translation mode={mode}>В этой одежде будет жарко.</Translation>
        </div>

        <div className="row">
          <Expr>A/V-(으)ㄹ까요? вопрос о предположении слушателю</Expr>
          <Example mode={mode}>주말에 날씨가 더울까요? </Example>
          <Translation mode={mode}>Думаешь, на выходных будет жарко?</Translation>
        </div>

        <div className="row">
          <Expr>A/V-(으)ㄴ/는/(으)ㄹ 것 같다 предположение о событии (любое время)</Expr>
          <Example mode={mode}>어제 비가 온 것 같아요. </Example>
          <Translation mode={mode}>Похоже, вчера шел дождь.</Translation>
        </div>

        <h3>18. Изменение части речи</h3>
        <div className="row">
          <Expr>Прил-е -(으)ㄴ/-는/-(으)ㄹ N</Expr>
          <Example mode={mode}>예쁜 가방을 사고 싶어요.</Example>
          <Translation mode={mode}>Хочу купить красивую сумку</Translation>
        </div>

        <div className="row">
          <Expr></Expr>
          <Example mode={mode}>소파에서 자는 사람이 누구예요?</Example>
          <Translation mode={mode}>Спящий на диване - кто?</Translation>
        </div>

        <div className="row">
          <Expr></Expr>
          <Example mode={mode}>오늘 저녁에먹을 한국 음식이 뭐예요? </Example>
          <Translation mode={mode}>Сегодня вечером какая еда, что будем есть?</Translation>
        </div>

        <div className="row">
          <Expr>A/V-기 номинализация, гл/прил - сущ-е</Expr>
          <Example mode={mode}>한국말을 공부하기 가 어려워요.</Example>
          <Translation mode={mode}>Учит корейский трудно</Translation>
        </div>

        <div className="row">
          <Expr>A-게 прил -> наречие</Expr>
          <Example mode={mode}>머리를 짧게 잘랐어요.</Example>
          <Translation mode={mode}>Постригла коротко волосы</Translation>
        </div>

        <div className="row">
          <Expr>A-아/어하다 прил -> глагол сост-я</Expr>
          <Example mode={mode}>아이들이 배고파해요</Example>
          <Translation mode={mode}>Дети проголодались</Translation>
        </div>

        <h3>19. Состояние</h3>
        <div className="row">
          <Expr>V-고 있다 Текущее состояние</Expr>
          <Example mode={mode}>치마를 입고 있어요. </Example>
          <Translation mode={mode}>Ношу юбку.</Translation>
        </div>

        <div className="row">
          <Expr></Expr>
          <Example mode={mode}>V-아/어 있다</Example>
          <Translation mode={mode}>Текущее состояние, неперех. глаголы</Translation>
        </div>

        <div className="row">
          <Expr>A-아/어지다 Стать + прил-е</Expr>
          <Example mode={mode}>풍선이커졌어요.</Example>
          <Translation mode={mode}>Шар стал больше</Translation>
        </div>

        <div className="row">
          <Expr>V-게 되다 Изменение без воли говорящего</Expr>
          <Example mode={mode}>요리를 잘하게 되었어요. </Example>
          <Translation mode={mode}>Стал хорошо готовить.</Translation>
        </div>

        <h3>Unit 20. Подтверждение инф-и</h3>
        <div className="row">
          <Expr>A/V (으)ㄴ/는지 косв. вопрос, глаг</Expr>
          <Example mode={mode}>명동에 어떻게 가는지 알아요?</Example>
          <Translation mode={mode}>Как пройти на Мёндон</Translation>
        </div>

        <div className="row">
          <Expr>прил, гласная</Expr>
          <Example mode={mode}>저 분이 누구인지 모르겠어요</Example>
          <Translation mode={mode}>Не знаю, кто этот человек</Translation>
        </div>

        <div className="row">
          <Expr>прил, согласная</Expr>
          <Example mode={mode}>내일 날씨가 좋은지 나쁜지 알아요</Example>
          <Translation mode={mode}>Знаю, завтра погода хорошая или плохая</Translation>
        </div>

        <div className="row">
          <Expr>V-는 데 걸리다 займет времени</Expr>
          <Example mode={mode}>운전을 배우는 데 두 달 걸렸어요.</Example>
          <Translation mode={mode}>Научиться водить заняло 2 месяца.</Translation>
        </div>

        <div className="row">
          <Expr>V-는 데 들다 займет времени</Expr>
          <Example mode={mode}>차를 고치는 데 30만 원 들었어요.</Example>
          <Translation mode={mode}>Починить машину заняло 300 тыс вон</Translation>
        </div>

        <div className="row">
          <Expr>A/V-지요? не так ли?</Expr>
          <Example mode={mode}>중국 사람이지요? </Example>
          <Translation mode={mode}>Ты - китаец?</Translation>
        </div>

        <h3>Unit 21. Открытие и удивление</h3>
        <div className="row">
          <Expr>A/V-군요/는군요 вижу, услышал</Expr>
          <Example mode={mode}>아이스크림을 좋아하는군요.</Example>
          <Translation mode={mode}>ты действительно любишь мороженное</Translation>
        </div>

        <div className="row">
          <Expr>A/V-네요</Expr>
          <Example mode={mode}>벌써 여름이네요.</Example>
          <Translation mode={mode}>Действительно уже лето.</Translation>
        </div>

        <h3>Unit 22. Доп-е окончания</h3>
        <div className="row">
          <Expr>A-(으)ㄴ가요? вежливый вопрос</Expr>
          <Example mode={mode}>출발할 건가요?</Example>
          <Translation mode={mode}>отправляемся?</Translation>
        </div>

        <div className="row">
          <Expr>V-나요? с глаголами</Expr>
          <Example mode={mode}>시간이 있나요?</Example>
          <Translation mode={mode}>есть время?</Translation>
        </div>

        <div className="row">
          <Expr>A/V-(으)ㄴ/는데요 1) ответ/замечание на сказанное, 2) ожидание продолжения диалога 3) удивление</Expr>
          <Example mode={mode}>저는 재미있는데요!</Example>
          <Translation mode={mode}>интересно</Translation>
        </div>

        <h3>Unit 23. Цитирование</h3>
        <div className="row">
          <Expr>하고 Прямое цитирование передает эмоции сказанного</Expr>
          <Example mode={mode}>준호 씨가 벨을 누르니까 “딩동”하고 소리가 났어요. </Example>
          <Translation mode={mode}>Джун-О нажала на звонок и раздалось "динь-дон"</Translation>
        </div>

        <div className="row">
          <Expr>라고 Прямое цитирование</Expr>
          <Example mode={mode}>если 하다 внутри, обычный разговор</Example>
          <Translation mode={mode}>민우 씨는 "운동하세요."라고 (말)했어요</Translation>
        </div>

        <h3>Indirect Quotations</h3>
        <div className="row">
          <Expr>простой стиль + 고 глагол речи/мысли</Expr>
          <Example mode={mode}>하영 씨가 저에게 사랑한다고 그랬어요.</Example>
          <Translation mode={mode}>Хаён сказала мне, что любит</Translation>
        </div>

        <div className="row">
          <Expr>связка -> 이라+고</Expr>
          <Example mode={mode}>뉴욕이라고 말했어요.</Example>
          <Translation mode={mode}>Сказал, что Нью-Йорк</Translation>
        </div>

        <div className="row">
          <Expr>-지 말자+고  предложение не делать</Expr>
          <Example mode={mode}>민우 씨는 내일 산에 가지 말자고 했어요. </Example>
          <Translation mode={mode}>Minu said we shouldn't go to the mountain tomorrow.</Translation>
        </div>

        <div className="row">
          <Expr>라+고  команда</Expr>
          <Example mode={mode}>왕징 씨가 자기한테 말하라고 했어요. </Example>
          <Translation mode={mode}>Ван Джин сказал, чтобы рассказал мне.</Translation>
        </div>

        <div className="row">
          <Expr>-아/어 달라고 하다 говорящему</Expr>
          <Example mode={mode}>?</Example>
          <Translation mode={mode}>?</Translation>
        </div>

        <div className="row">
          <Expr>-아/어 주라고 하다 другим</Expr>
          <Example mode={mode}>?</Example>
          <Translation mode={mode}>?</Translation>
        </div>

        <h3>Indirect Quotation Contracted Forms</h3>
        <div className="row">
          <Expr>다 + 해</Expr>
          <Example mode={mode}>재미있대요</Example>
          <Translation mode={mode}>сказал, интересное</Translation>
        </div>

        <div className="row">
          <Expr>라 + 해</Expr>
          <Example mode={mode}>전화하래요</Example>
          <Translation mode={mode}>сказал, позвони</Translation>
        </div>

        <div className="row">
          <Expr>자 + 해</Expr>
          <Example mode={mode}>테니스를 치재요</Example>
          <Translation mode={mode}>поиграем в теннис</Translation>
        </div>

        <div className="row">
          <Expr>니 + 해</Expr>
          <Example mode={mode}>뭐 먹고 싶냬요</Example>
          <Translation mode={mode}>что хочешь поесть?</Translation>
        </div>

        <h3>Unit 24 Irregular Verbs</h3>
        <h3>ㅡ</h3>
        <div className="row">
          <Expr>пред. слог с 아/오</Expr>
          <Example mode={mode}>바빠요</Example>
          <Translation mode={mode}>занят</Translation>
        </div>

        <div className="row">
          <Expr>остальные гласные</Expr>
          <Example mode={mode}>슬퍼요</Example>
          <Translation mode={mode}>грустно</Translation>
        </div>

        <div className="row">
          <Expr>1-слоговые слова</Expr>
          <Example mode={mode}>꺼 주세요</Example>
          <Translation mode={mode}>включи, пожалуйста</Translation>
        </div>

        <h3>ㄹ</h3>
        <div className="row">
          <Expr>2-я форма глагола</Expr>
          <Example mode={mode}>열어</Example>
          <Translation mode={mode}>открываю (веж. неофиц.)</Translation>
        </div>

        <div className="row">
          <Expr>Веж.-офиц. стиль</Expr>
          <Example mode={mode}>엽니다</Example>
          <Translation mode={mode}>окрываю (веж. офиц)</Translation>
        </div>

        <div className="row">
          <Expr>으(세)</Expr>
          <Example mode={mode}>여세요</Example>
          <Translation mode={mode}>откройте, пжл</Translation>
        </div>

        <div className="row">
          <Expr>Не 으(면), 으(려)</Expr>
          <Example mode={mode}>알려고</Example>
          <Translation mode={mode}>дать знать и</Translation>
        </div>

        <div className="row">
          <Expr>Простой стиль</Expr>
          <Example mode={mode}>열라</Example>
          <Translation mode={mode}>открой</Translation>
        </div>

        <h3>ㅂ</h3>
        <div className="row">
          <Expr>деепр ㅂ -> 우</Expr>
          <Example mode={mode}>추워</Example>
          <Translation mode={mode}>холодно</Translation>
        </div>

        <div className="row">
          <Expr>прич-е прош. вр</Expr>
          <Example mode={mode}>매운</Example>
          <Translation mode={mode}>перченый</Translation>
        </div>

        <div className="row">
          <Expr>если суфф (перед 으 связкой: 으(세), 으(면), (으)오)</Expr>
          <Example mode={mode}>쉬우면</Example>
          <Translation mode={mode}>если легкий</Translation>
        </div>

        <div className="row">
          <Expr>돕다 곱다: ㅂ -> 오</Expr>
          <Example mode={mode}>도와</Example>
          <Translation mode={mode}>помогая</Translation>
        </div>

        <h3>ㄷ</h3>
        <div className="row">
          <Expr>ㄷ->ㄹ перед гласными</Expr>
          <Example mode={mode}>걸어</Example>
          <Translation mode={mode}>идя пешком</Translation>
        </div>

        <div className="row">
          <Expr>아</Expr>
          <Example mode={mode}>빨라</Example>
          <Translation mode={mode}>быстрый (деепр)</Translation>
        </div>

        <div className="row">
          <Expr>другие гласные</Expr>
          <Example mode={mode}>불러</Example>
          <Translation mode={mode}>зовя</Translation>
        </div>

        <h3>ㅎ</h3>
        <div className="row">
          <Expr>деепр -ㅎ, ㅓ -> ㅐ</Expr>
          <Example mode={mode}>그래</Example>
          <Translation mode={mode}>Таким образом</Translation>
        </div>

        <div className="row">
          <Expr>если суфф (перед 으 связкой)</Expr>
          <Example mode={mode}>노라면</Example>
          <Translation mode={mode}>Если желтый</Translation>
        </div>

        <h3>ㅅ</h3>
        <div className="row">
          <Expr>-ㅅ</Expr>
          <Example mode={mode}>나아</Example>
          <Translation mode={mode}>быть лучше</Translation>
        </div>

        <div className="row">
          <Expr>ㅓ</Expr>
          <Example mode={mode}>저어</Example>
          <Translation mode={mode}>перемешивать</Translation>
        </div>

        <div className="row">
          <Expr>Перед (으)</Expr>
          <Example mode={mode}>저으면</Example>
          <Translation mode={mode}>если перемешивать</Translation>
        </div>

        <div className="row">
          <Expr>Прич-е прошлое</Expr>
          <Example mode={mode}>저은</Example>
          <Translation mode={mode}>перемешенный</Translation>
        </div>

      </div>
  </>
  )
}


const BasicList =() => {
  const [mode, setMode] = useState(Mode.ShowAll)
  return (
  <>
    <div className='container'>
      <ModeControls setMode = {setMode} mode = {mode} />
      <div id='Page' className='m-3'>
        <Basic mode = {mode}/>
      </div>
    </div>
  </>
  )
}

export default BasicList