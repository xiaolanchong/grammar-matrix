import React, { useState } from "react"

import {} from '../Utils.js'
import {Translation, Example, Expr, Hilite, ModeControls, Mode} from '../Ui.js'
import '../Ui.css'

const Intermediate = ({ mode }) =>
  <>
    <h2>Средний уровень</h2>
    
    На основе <a href='https://sayhikorean.blogspot.com/2018/09/korean-grammar-in-use-intermediate.html'>"Korean Grammar in Use"</a>.
    
    <h3>1. Предположение и догадка</h3>
    <h4>1.1 -아/어 보이다</h4>
    
    <div className="row">
      <Expr>Прилагательное</Expr>
      <Example mode={mode}>마크 씨, 얼굴이 피곤<Hilite>해 보여</Hilite>요. 무슨 일 있어요?</Example>
      <Translation mode={mode}>Марк, у тебя лицо уставшее, что-то случилось?</Translation>
    </div>
    
    <div className="row">
      <Expr>Результативный глагол</Expr>
      <Example mode={mode}>너 갑자기 살 빠져 보여!</Example>
      <Translation mode={mode}>Ты кажется внезапно похудела!</Translation>
    </div>
    
    <div className="row">
      <Expr>Аналог -게 보이다</Expr>
      <Example mode={mode}>그 옷을 입으니까 날씬하게 보여요</Example>
      <Translation mode={mode}>Надев эту одежду, кажешься стройной</Translation>
    </div>
    
    <h4>1.2 -(으)ㄴ/는 모양이다</h4>

    <div className="row">
      <Expr>Прилагательное</Expr>
      <Example mode={mode}>?</Example>
      <Translation mode={mode}>?</Translation>
    </div>
    <div className="row">
      <Expr>Глагол</Expr>
      <Example mode={mode}>등산복을 입은 걸 보니까 산에 가는 모양이에요.</Example>
      <Translation mode={mode}>Судя по одежде для походов в горы, похоже, она идет в горы.</Translation>
    </div>
    <div className="row">
      <Expr>Прошедшее время</Expr>
      <Example mode={mode}>어제 몸이 안 좋다고 했는데 많이 아픈 모양이에요.</Example>
      <Translation mode={mode}>Вчера она плохо себя чувствовала, похоже она действительно больна.</Translation>
    </div>
    
    <h4>1.3 -(으)ㄹ 텐데</h4>
    Добавить остальные 터!
    
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}></Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr>прош. время</Expr>
      <Example mode={mode}>벌써 초대장을 받았을 텐데 연락이 없네요.</Example>
      <Translation mode={mode}>(Она) должна была получить приглашение, но не связывалась.</Translation>
    </div>
    <div className="row">
      <Expr>с извинением, благодарностью</Expr>
      <Example mode={mode}>바쁘실 텐데 참석해 주셔서 감사합니다.</Example>
      <Translation mode={mode}>Вы должно быть заняты, спасибо за Ваше присутствие.</Translation>
    </div>
    
    <h4>1.4 -(으)ㄹ 텐데</h4>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>고추장을 많이 넣으면 매울 테니까 조금만 넣으세요.</Example>
      <Translation mode={mode}>Если положить много перцовую пасты, будет остро, положите совсем немного.</Translation>
    </div>
    <div className="row">
      <Expr>в конце пред-я</Expr>
      <Example mode={mode}>일찍 출발하세요. 월요일이라 길이 막힐 테니까요.</Example>
      <Translation mode={mode}>Давай отправимся пораньше. Поскольку понедельник, то на дорогах должно быть пробки.</Translation>
    </div>
    <div className="row">
      <Expr>Прош. время</Expr>
      <Example mode={mode}>시험을 잘 봤을 테니까 걱정하지 마세요.</Example>
      <Translation mode={mode}>Уверен, что прошел, поэтому не волнуйся.</Translation>
    </div>
    
    <h4>1.5 -(으)ㄹ걸요</h4>
    <div className="row">
      <Expr>"возможно", слабее, чем (으)ㄹ 거에요</Expr>
      <Example mode={mode}>아까 많이 아프다고 했으니까 아마 못 올걸요.</Example>
      <Translation mode={mode}>Недавно говорил, что сильно болеет, возможно не придет.</Translation>
    </div>
    
    <h4>1.6 -(으)ㄴ/는/(으)ㄹ 줄 몰랐다[알았다] "А я и не знал/думал, что ..."</h4>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>오늘 숙제가 있었어요? 저는 숙제가 있는 줄 몰랐어요. 숙제가 없는 줄 알았어요.</Example>
      <Translation mode={mode}>Сегодня было задано д/з? А я и не знала, я думала сегодня нет домашней работы.</Translation>
    </div>
    
    <h4>1.7 -(으)ㄹ지도 모르다</h4>
    <div className="row">
      <Expr>Наверное</Expr>
      <Example mode={mode}>내일부터 추석 연휴라서 문을 안 열지도 몰라요.</Example>
      <Translation mode={mode}>С завтрашнего дня Чхусок, двари (магазинов) можгут быть и закрыты.</Translation>
    </div>
    <div className="row">
      <Expr>Про прошлое событие</Expr>
      <Example mode={mode}>게이코 씨가 파티에 간다고 했지만 안 갔을지도 몰라요.</Example>
      <Translation mode={mode}>Кейко сказала, что пойдет на вечеринку, но вряд ли пошла.</Translation>
    </div>
    
    <h3>2. Контраст, противопоставление</h3>
    <h4>2.1 -기는 하지만, -기는 -지만</h4>
    <div className="row">
      <Expr>Признаю ..., что, но ...</Expr>
      <Example mode={mode}>읽기는 읽었지만 내용은 잘 모르겠어요.</Example>
      <Translation mode={mode}>Прочитать прочитал, но содержимое не понял.</Translation>
    </div>
    
    <div className="row">
      <Expr>하지만</Expr>
      <Example mode={mode}>친구를 만나기는 했지만 오래 이야기하지는 않았습니다</Example>
      <Translation mode={mode}>Я встретилась с друзьями, но мы долго не общались.
</Translation>
    </div>
    
    <h4>2.2 -(으)ㄴ/는 반면(에)</h4>
    <div className="row">
      <Expr>(으)ㄴ/는 데 반해 в противовес, с другой стороны</Expr>
      <Example mode={mode}>일은 많은 반면에 월급은 적어서 회사를 옮길까 해요.</Example>
      <Translation mode={mode}>В противовес того, что много работы, зарплата маленькая, думаю сменить. </Translation>
    </div>
    
    <div className="row">
      <Expr>(으)ㄴ/는 데 반해 С другой стороны</Expr>
      <Example mode={mode}>그 집은 비싼 데 반해 주변 환경은 별로 안 좋은 것 같습니다.</Example>
      <Translation mode={mode}>Вопреки дороговизне дома окружающая среда не выглядит хорошей. </Translation>
    </div>
    
    
    
    <h4>2.3 -(으)ㄴ/는데도</h4>
    <div className="row">
      <Expr>"Хотя"</Expr>
      <Example mode={mode}>옷장에 옷이 이렇게 많은데도 또 옷을 산다고?</Example>
      <Translation mode={mode}>У тебя столько одежды в шкафу, и ты говоришь, купим еще?</Translation>
    </div>
    
    <div className="row">
      <Expr>+불구하고 "несмотря на" </Expr>
      <Example mode={mode}>사랑하는데도 불구하고 헤어져야 했어요.</Example>
      <Translation mode={mode}>Даже любя друг друга, им пришлось расстаться.</Translation>
    </div>
    
    <h3>3 Повествовательный и просторечный стили</h3>
    <h4>3.1 서술체</h4>
      <a href={`${process.env.PUBLIC_URL}/?lang=ko&level=styles`}>해라체</a>
    <h4>3.2 반말체</h4>
      <a href={`${process.env.PUBLIC_URL}/?lang=ko&level=styles`}>해체</a>
    
    
    <h3>4. Причина</h3>
    <h4>01. -거든요</h4>
    <div className="row">
      <Expr>Потому что</Expr>
      <Example mode={mode}>오늘도 이 식당에 가려고요? 네,여기가 정말 맛있거든요.</Example>
      <Translation mode={mode}>Опять собираешься пойти в этот ресторан? Да, ведь там в самом деле вкусно. </Translation>
    </div>

    <div className="row">
      <Expr>Как указание, контекст</Expr>
      <Example mode={mode}>이 길로쭉 가시면 편의점이 나오거든요. 편의점 건너편에 은행이 있어요.</Example>
      <Translation mode={mode}>Идите прямо этой дорогой, появится магазинчик. И напротив будет банк.</Translation>
    </div>

    <h4>02. -잖아요</h4>
    <div className="row">
      <Expr>Напоминание о причине</Expr>
      <Example mode={mode}>이번에도 양강 씨가 1등을 했네요! 양강 씨는 항상 열심히 공부하잖아요.</Example>
      <Translation mode={mode}>Ян Ган опять первый! Конечно, он же всегда усердно учится.</Translation>
    </div>


    <h4>03. -느라고</h4>
    <div className="row">
      <Expr>Делал одно, поэтому не сдел другое</Expr>
      <Example mode={mode}>어젯밤에 축구를 보느라고 숙제를 못 했어요.</Example>
      <Translation mode={mode}>Вчера вечером смотрела футбол, поэтому не сделала.</Translation>
    </div>
    <div className="row">
      <Expr>Как выражение цели</Expr>
      <Example mode={mode}></Example>
      <Translation mode={mode}></Translation>
    </div>

    <h4>04. -는 바람에</h4>
    <div className="row">
      <Expr>Нежелательная или неожиданная причина, только глаголы, прош. время</Expr>
      <Example mode={mode}>휴대전화가 갑자기 고장 나는 바람에 연락을 못했어요.</Example>
      <Translation mode={mode}>Мой мобильный внезапно сломался, так что не смог связаться.</Translation>
    </div>

    <h4>05. -(으)ㄴ/는 탓에</h4>
    <div className="row">
      <Expr>По вине …</Expr>
      <Example mode={mode}>동호 씨는 컴퓨터게임을 늦게까지 하는 탓에 지각을 하는 경우가 많다.</Example>
      <Translation mode={mode}>Донхо по вине своих компьютерных игр допоздна часто опаздывает.</Translation>
    </div>
    <div className="row">
      <Expr>Форма с ~(으)ㄴ/는 탓이다</Expr>
      <Example mode={mode}>그 배우가 폐암에 걸린 것은 담배를 많이 피운탓입니다.</Example>
      <Translation mode={mode}>У того актера по вине частого курения развился рака лёгких.</Translation>
    </div>
    <div className="row">
      <Expr>С существильным + 탓에</Expr>
      <Example mode={mode}>더운 날씨 탓에 밤에 잠을 못 자는사람들이 많아요.</Example>
      <Translation mode={mode}>Из-за жаркой погоды многим ночью трудно спать.</Translation>
    </div>

    <h4>06. -고 해서</h4>
    <div className="row">
      <Expr>потому что среди прочего”</Expr>
      <Example mode={mode}>피곤하고 해서 약속을 취소했습니다.</Example>
      <Translation mode={mode}>Устал (среди прочего), потому отменил встречу.</Translation>
    </div>
    <div className="row">
      <Expr>“сущ-е + 도 корень глагола/прил-го + 고 해서” и </Expr>
      <Example mode={mode}>밥을 먹기도 하고 해서 산책을 했어요.</Example>
      <Translation mode={mode}></Translation>
    </div>

    <h4>07. -(으)ㄹ까 봐</h4>
    <div className="row">
      <Expr>боюсь, что …, как бы не ...</Expr>
      <Example mode={mode}>눈 때문에 길이 미끄러울까 봐 등산화를 신고 나가려고요.</Example>
      <Translation mode={mode}>из-за снега может быть скользко на дороге (как бы дороги скользкими не были бы), вот я и надел горные ботинки</Translation>
    </div>
    
    <h3>Цитирование</h3>
    
    <h4>01. -다고요?</h4>
    <div className="row">
      <Expr>“говоришь, что ...?” переспрашивание</Expr>
      <Example mode={mode}>누가 왔다고요? 하루카 씨요.</Example>
      <Translation mode={mode}>Кто (говоришь) пришёл? Харука.</Translation>
    </div>
    
    <h4>02. -다고 하던데</h4>
    <div className="row">
      <Expr>Слышал, что..., и ...</Expr>
      <Example mode={mode}>한강에서 불꽃놀이 축제를 한다고 하던데</Example>
      <Translation mode={mode}>Слышал на реке Хан запуск фейверков.</Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>내일부터 추워진다던데</Example>
      <Translation mode={mode}>С завтрашнего дня похолодает, и ...</Translation>
    </div>
    수정 씨는 요즘 바쁘다고 하던데요
    
    <h4>03. -다면서요?</h4>
    <div className="row">
      <Expr>Это правда что ...?</Expr>
      <Example mode={mode}>자야 씨, 남자 친구랑 헤어졌다면서요?</Example>
      <Translation mode={mode}>Джая, это правда, что ты рассталась с парнем?</Translation>
    </div>
    
    <h4>04. -다니요?</h4>
    <div className="row">
      <Expr>Это правда ...? (не могу поверить, удивлен)</Expr>
      <Example mode={mode}>복권에 당첨되었다니요? 그게 사실이에요?</Example>
      <Translation mode={mode}>Она выиграла в лотерею? Это правда?</Translation>
    </div>

    <h3>Expressing Resolution and Intent</h3>
    
    <h4>01 -(으)ㄹ까 하다</h4>
    <div className="row">
      <Expr>“Подумываю ...”, неясная цель</Expr>
      <Example mode={mode}>다음 달부터 요가를 배울까 해요.</Example>
      <Translation mode={mode}>Подумываю со след. месяця заняться йогой.</Translation>
    </div>
    
    <h4>02 -고자</h4>
    <div className="row">
      <Expr>“для того, чтобы …, совершается...”</Expr>
      <Example mode={mode}>정부는 새로운 일자리를 창출하고자 열심히 노력하고 있습니다.</Example>
      <Translation mode={mode}>Правительство для создания новых рабочих мест прилагает значительные усилия.</Translation>
    </div>
    <div className="row">
      <Expr>~고자 하다 выражает намерение</Expr>
      <Example mode={mode}>이 제품이 지속적으로 좋은 반응을 얻고 있어서 생산량을 늘리고자 합니다.</Example>
      <Translation mode={mode}>Этот товар продолжает получать положительные отзывы, поэтому планируем увеличить объем производимой продукции.</Translation>
    </div>
    
    <h4>03 -(으)려던 참이다</h4>
    <div className="row">
      <Expr>~(으)려던 참이다 “как раз собираюсь”</Expr>
      <Example mode={mode}>피곤해서 잠깐 쉬려던 참인데 사장님이 들어오셔서 당황해서 그래요.</Example>
      <Translation mode={mode}>Я устала и собиралась передохнуть, но вошел директор, и я растерялась.</Translation>
    </div>
    <div className="row">
      <Expr>~(으)려던 참이었다 имел намерение от прошлого момента до настоящего</Expr>
      <Example mode={mode}>그 책을 사려던 참이었어요.</Example>
      <Translation mode={mode}>Собирался купить ту книгу (намеревался в прошлом до настоящего).</Translation>
    </div>
    <div className="row">
      <Expr>+ 마침 (как раз), 그렇지 않아도, 안 그래도</Expr>
      <Example mode={mode}>마침/안 그래도/그렇지 않아도 밥을 먹으려던 참이 었어요</Example>
      <Translation mode={mode}>Как раз собирался поесть.</Translation>
    </div>
    
    <h4>04 -(으)ㄹ 겸 -(으)ㄹ 겸 “заодно, вдобавок”</h4>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>네, 운동도 할 겸 한국의 전통문화도 배울 겸 해서 배우고 있어요.</Example>
      <Translation mode={mode}>Да, изучаю, чтобы заниматься спортом, заодно осваиваю традиционную корейскую культуру.</Translation>
    </div>
    <div className="row">
      <Expr>V~(으)ㄹ 겸 (해서) одно или неск. целей</Expr>
      <Example mode={mode}>요즘 살도 뺄 겸 해서 운동을 하고 있어요.</Example>
      <Translation mode={mode}>Сейчас занимаюсь спортом, чтобы сбросить вес (и для чего-то еще)</Translation>
    </div>
    
    <h4>05 -아/어야지요 “я обязательно ...”</h4>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>내일부터는 절대 회사에 지각하지 말아야지요.</Example>
      <Translation mode={mode}>С завтрашнего дня я совсем не буду опаздывать!</Translation>
    </div>

    <h3>Рекомендация и совет</h3>
    <h4>01 -(으)ㄹ 만하다 “стоит, чтобы”</h4>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>한국에서 가볼 만한 곳을 좀 추천해 주시겠어요?</Example>
      <Translation mode={mode}>Можешь посоветовать места в Корее, стоящие посещения?</Translation>
    </div>
    
    <h4>02 -도록 하다</h4>
    <div className="row">
      <Expr>Только команда или предложение</Expr>
      <Example mode={mode}>약을 먹고 나서 며칠 동안 푹 쉬도록 하세요.</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr>Ответ на 도록</Expr>
      <Example mode={mode}>네, 열심히 공부하도록 하겠습니다.</Example>
      <Translation mode={mode}>Да, буду учиться прележно.</Translation>
    </div>
    
    <h4>03 -지 그래요?</h4>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>그럼, 선생님께 여쭤 보지 그래요?</Example>
      <Translation mode={mode}>Тогда, как насчет спросить учителя?</Translation>
    </div>
    <div className="row">
      <Expr>지 그랬어요? почему не сделал? (укор)</Expr>
      <Example mode={mode}>아픈데 참으면서 계속 일을 한 거예요? 많이 아프면 좀 쉬지 그랬어요?</Example>
      <Translation mode={mode}>Хотя болит, терпищь боль постоянно? Сильно болит, почему не отдохнуть?</Translation>
    </div>
    

    <h3>Воспоминание</h3>
    <h4>01 -던</h4>
    <div className="row">
      <Expr>Совершалось в прошлом многократно в прошлом, но не сейчас.</Expr>
      <Example mode={mode}>제가 고등학생 때 공부하던 책이에요.</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr>Совершалось в недавнем прошлом, но не закончилось</Expr>
      <Example mode={mode}>아까 제가 마시던 커피를 버렸어요?</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr>Часто происходило в период (возможно и в будущем)</Expr>
      <Example mode={mode}>오늘도 우리가 자주 가던 카페에서 만납시다.</Example>
      <Translation mode={mode}></Translation>
    </div>
    
    
    
    <h4>02 -더라고요?</h4>
    <div className="row">
      <Expr>Видил или слышал некот. явление</Expr>
      <Example mode={mode}>한국에서 여행을 해 보니까 한국에는 정말 산이 많더라고요.</Example>
      <Translation mode={mode}>After traveling around Korea, (I directly saw that) Korea really has a lot of mountains.</Translation>
    </div>
    <div className="row">
      <Expr>Описание чувств других людей (A+아/어하다)</Expr>
      <Example mode={mode}>그 이야기를 듣고 어머니가 속상해하시더라고요.</Example>
      <Translation mode={mode}>Слыша эту историю, сердце матери разрывалось.</Translation>
    </div>
    <div className="row">
      <Expr>Аналоги -더군(요) or -더라(более разговорный)</Expr>
      <Example mode={mode}>남자 친구를 사귀다 보니까 가끔은 속상한 일도 생기 더라.</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr>-았/었더라고요 Воспоминание о завершившемся</Expr>
      <Example mode={mode}>일본에 도착하니까 눈이 왔더라고요</Example>
      <Translation mode={mode}>Приехала в Японию, а там выпал снег.</Translation>
    </div>
    
    
    
    <h4>03 -던데요</h4>
    <div className="row">
      <Expr>Несогласие с услышанным или претекст</Expr>
      <Example mode={mode}>지난번에 갔을 때는 집이 아주 커 보이던데요.</Example>
      <Translation mode={mode}>Но в прошлый раз, когда пришла к (тебе) домой, он казался большим.</Translation>
    </div>
    
    <div className="row">
      <Expr>Претекст</Expr>
      <Example mode={mode}>마크 씨는 좋은 사람 같아 보이던데 한번 만나 보세요.</Example>
      <Translation mode={mode}>Кажется, Марк - хороший человек, встреться с ним.</Translation>
    </div>
    
    <div className="row">
      <Expr>-았/었던데요  для завершенных событий</Expr>
      <Example mode={mode}>얼마 전에 회사를 옮겼던데요.</Example>
      <Translation mode={mode}>Yes, I heard she recently changed jobs.</Translation>
    </div>

    <h3>Пассивные выражение</h3>
    <h4>01 단어 피동 (-이/히/리/기-) Переходной - непереходной</h4>
    <div className="row">
      <Expr> Переходной, активный (делать 을/를) -> непереходной (пассивный залог) быть в процессе (에게/에) -이-</Expr>
      <Example mode={mode}>인형을 안다 - N에게 안기다</Example>
      <Translation mode={mode}>Обнимать куклу - быть в объятьях кого-то</Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>문을 열다 문이 열리다</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>놓다 놓이다</Example>
      <Translation mode={mode}>Положить - быть положенным</Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>바꾸다 바뀌다</Example>
      <Translation mode={mode}>Менять - быть смененным</Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>보다 보이다</Example>
      <Translation mode={mode}>Смотреть - быть видимым</Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>쓰다 쓰이다</Example>
      <Translation mode={mode}>Использовать/писать - быть использованным/написанным</Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>잠그다 잠기다</Example>
      <Translation mode={mode}>Запирать - быть запертым</Translation>
    </div>
    
    <div className="row">
      <Expr>-히-</Expr>
      <Example mode={mode}>닫다 닫히다</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>읽다 읽히다</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>막다 막히다</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>잡다 잡히다</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>먹다 먹히다</Example>
      <Translation mode={mode}></Translation>
    </div>
    
    <div className="row">
      <Expr>-리-</Expr>
      <Example mode={mode}>걸다 걸리다</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>듣다 들리다</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>열다 열리다</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>팔다 팔리다</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>밀다 밀리다</Example>
      <Translation mode={mode}></Translation>
    </div>
    
    <div className="row">
      <Expr>-기-</Expr>
      <Example mode={mode}>끊다 끊기다</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>쫓다 쫓기다</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>찢다 찢기다</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>씻다 씻기다</Example>
      <Translation mode={mode}></Translation>
    </div>

 
    <h4>02 -아/어지다</h4>
    <div className="row">
      <Expr>Переходной -> непереходной </Expr>
      <Example mode={mode}>커피가 다 쏟아져서 가방에 얼룩이 생겼어요.</Example>
      <Translation mode={mode}>Кофе пролито, и сумка запачкана.</Translation>
    </div>
    <div className="row">
      <Expr>Прил-ное -> становиться</Expr>
      <Example mode={mode}>청소를 해서 방이 깨끗해졌어요.</Example>
      <Translation mode={mode}></Translation>
    </div>
    
    <h4>03 -게 되다</h4>
    <div className="row">
      <Expr>Решение</Expr>
      <Example mode={mode}>회사 사정이 안 좋아서 이번 달에 회사를 그만두게 되었어요.</Example>
      <Translation mode={mode}></Translation>
    </div>
    
    <div className="row">
      <Expr>Более мягкое выражение</Expr>
      <Example mode={mode}>이번 학기에는 제가 장학금을 받게 되었습니다.</Example>
      <Translation mode={mode}>В этом семестре получил стипендию.</Translation>
    </div>
    <div className="row">
      <Expr>Изменение</Expr>
      <Example mode={mode}>옛날에는 축구를 안 좋아했는데 남자 친구와 자주 보다 보니 좋아하게 되 었어요.</Example>
      <Translation mode={mode}></Translation>
    </div>

    <h3>Причинный/побудительный залог</h3>
    <h4>01 단어 사동 (-이/히/리/기/우/추-)</h4>
    <div className="row">
      <Expr>Непереходной/переходной (делать) -> переходной (позволить, заставить) с агентом 에/에게</Expr>
      <Example mode={mode}>먹다 먹이다</Example>
      <Translation mode={mode}>Есть - кормить </Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>죽다 죽이다</Example>
      <Translation mode={mode}>Умереть - убить</Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>보다 보이다</Example>
      <Translation mode={mode}>Смотреть - показывать</Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>속다 속이다</Example>
      <Translation mode={mode}>Обманываться - обманывать</Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>녹다 녹이다</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>끓다 끓이다</Example>
      <Translation mode={mode}>Вариться/кипеть - варить/вскипятить</Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>붙다 붙이다</Example>
      <Translation mode={mode}>Приставать - приставить</Translation>
    </div>
    <div className="row">
      <Expr>히</Expr>
      <Example mode={mode}>읽다 읽히다</Example>
      <Translation mode={mode}>Читать - заставлять читать</Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>앉다 앉히다 </Example>
      <Translation mode={mode}>Задиться - усаживать</Translation>
    </div>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>눕다 눕히다</Example>
      <Translation mode={mode}>Лежать - укладывать</Translation>
    </div>

    Остальные!









    <h4>02 -게 하다</h4>
    <div className="row">
      <Expr>Переходной ‘N1 이/가 N2을/를 V-게 하다’, непереходной ‘N1 이/가 N2에게 V-게 하다’ - позволить или заставить</Expr>
      <Example mode={mode}>선생님께서는 학생들을 10분 동안 쉬게 하셨어요.</Example>
      <Translation mode={mode}>Учитель позволил студентам отдохнуть 10 мин.</Translation>
    </div>
    <div className="row">
      <Expr>Заставить</Expr>
      <Example mode={mode}>한 시간이나 기다리게 하면 어떻게 해요?</Example>
      <Translation mode={mode}>Как мог заставить ждать 1ч?</Translation>
    </div>
    <div className="row">
      <Expr>Не позволить</Expr>
      <Example mode={mode}>혜수 씨는 아이들이 아이스크림을 못 먹게 합니다.</Example>
      <Translation mode={mode}>Хиесу не разрешает детям есть мороженое.</Translation>
    </div>
    <div className="row">
      <Expr>Прил-ное - переводить в состояние</Expr>
      <Example mode={mode}>마크 씨는 질문을 너무 많이 해서 니를 귀찮게 해요.</Example>
      <Translation mode={mode}>Майк, задавая много вопросов, докучает мне.</Translation>
    </div>
    <div className="row">
      <Expr>Аналоги -도록 하다 и -게 만들다</Expr>
      <Example mode={mode}>교수님은 학생들에게 책을 읽어 오도록 하셨어요.</Example>
      <Translation mode={mode}>Профессор заставляет студентов читать книги (перед занятиями).</Translation>
    </div>

    <h3>Условие</h3>
    <h4>1 -아/어야 необходимое условие</h4>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>이번 연구 결과가 좋아야 계속해서 다른 연구를 할 수 있어요.</Example>
      <Translation mode={mode}>Результаты этого исследования должны быть успешными, чтобы делать другие</Translation>
    </div>
    <div className="row">
      <Expr>아/어야 +지 (разговорный) или +만 (письменная, офиц-ная речь)</Expr>
      <Example mode={mode}>연습을 많이 해야지 발음이 좋아집니다.</Example>
      <Translation mode={mode}>Только упражняясь, улучшишь произношение.</Translation>
    </div>
    <div className="row">
      <Expr>Связка: 이어야/여야, (이)라야</Expr>
      <Example mode={mode}>우리 학교 학생이라야 이 사이트에 가입할 수 있습니다.</Example>
      <Translation mode={mode}>Только будучи студентом, можно зарегистрироваться на нашем сайт.</Translation>
    </div>
    
    
    <h4>2 -거든 условие</h4>
    <div className="row">
      <Expr>Если .., то (далее намерение, предложение, приказ говорящего)</Expr>
      <Example mode={mode}>바쁘지 않거든 잠깐 만납시다.</Example>
      <Translation mode={mode}>Если не занят, встретимся ненадолго.</Translation>
    </div>

    <h3>Выражения доп. информации</h3>
    <h4>1 -(으)ㄹ 뿐(만) 아니라</h4>
    <div className="row">
      <Expr>Обе части утверждения или отрицания.</Expr>
      <Example mode={mode}>지하철은 시간을 정확하게 지켜줄 뿐 아니라 편리해서 자주 이용합니 다.</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr>A/V-기까지 하다，A/V-기도 하다, N까지 A/V</Expr>
      <Example mode={mode}>자야 씨는 예쁠 뿐만 아니라 성격이 좋기도 해요.</Example>
      <Translation mode={mode}>Джая не только красива, но и характером хороша (добрая).</Translation>
    </div>
    
    <h4>2 -(으)ㄴ/는 데다가</h4>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}>그 백화점은 값이 비싼 데다가 질도 별로 안 좋아서 저는 거의 안 가요.</Example>
      <Translation mode={mode}></Translation>
    </div>
    <div className="row">
      <Expr>에다가 в дополнение</Expr>
      <Example mode={mode}>이 종이 에다가 이름과 이메일 주소를 써 주시기 바랍니다.</Example>
      <Translation mode={mode}>На этой бумаге к тому же напишите имя и адрес.</Translation>
    </div>
    <h4>3 조차</h4>
    <div className="row">
      <Expr>"Даже", худший случай</Expr>
      <Example mode={mode}>더운 날씨에 에어컨조차 고장이 나 버려서 정말 죽겠어요.</Example>
      <Translation mode={mode}>В такую жару даже кондиционер сломался, действительно невыносимо.</Translation>
    </div>
    <div className="row">
      <Expr>Часто с 은커녕 "какой там"</Expr>
      <Example mode={mode}>우리 엄마는 해외여행 은커녕 제주도조차 못 가 보셨어요.</Example>
      <Translation mode={mode}>Мама даже на Чеджудо не ездила, какая там заграница.</Translation>
    </div>
    <div className="row">
      <Expr>-(으)ㄹ 수조차 없어요</Expr>
      <Example mode={mode}>다리가 너무 아파서 일어설 수조차 없어요.</Example>
      <Translation mode={mode}>Ноги болят, даже встать не могу.</Translation>
    </div>
    
    <h4>4 만 해도</h4>
    <div className="row">
      <Expr>Пример пред. необычной ситуации.</Expr>
      <Example mode={mode}>요즘은 취직하기가 어려워요. 제 동생만 해도 2년째 직장을 못 구하고 있거든요.</Example>
      <Translation mode={mode}>В последние дни устроиться на работу трудно. Даже мой мл. брат ищет работу 2-й год.</Translation>
    </div>

    <h3>Действие во время другого действия</h3>
    <h4>1 -는 길에</h4>
    <div className="row">
      <Expr>По пути (физич. перемещение)</Expr>
      <Example mode={mode}>퇴근하는 길에 지하철에서 우연히 친구를 만났어요.</Example>
      <Translation mode={mode}>По пути с работы в метро встретил друга.</Translation>
    </div>
    <div className="row">
      <Expr>-는 도중에 нет ограничение на тип глагола</Expr>
      <Example mode={mode}>일하는 도중에 컴퓨터가 꺼져 버렸어요. </Example>
      <Translation mode={mode}>По среди работы сломался компьютер.</Translation>
    </div>
    
    <h4>2 -다가</h4>
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}></Example>
      <Translation mode={mode}></Translation>
    </div>

    <h3>Степень</h3>
    <h4>01 -(으)ㄹ 정도로</h4>
    <h4>02 만 하다</h4>
    <h4>03 -(으)ㄴ/는/-(으)ㄹ 만큼</h4>

    <h3>Выбор</h3>
    <h4>01 아무+(이)나 / 아무+도</h4>
    <h4>02 (이)나</h4>
    <h4>03 (이)라도</h4>
    <h4>04 -든지 -든지</h4>
    <h4>05 -(으)ㄴ/는 대신에</h4>

    <h3>Время и последовательность</h3>
    <h4>01 만에</h4>
    <h4>02 -아/어 가지고</h4>
    <h4>03 -아/어다가</h4>
    <h4>04 -고서</h4>

    <h3>Открытие и результат</h3>
    <h4>01 -고 보니</h4>
    <h4>02 -다 보니</h4>
    <h4>03 -다 보면</h4>
    <h4>04 -더니</h4>
    <h4>05 -았/었더니</h4>
    <h4>06 -다가는</h4>
    <h4>07 -(으)ㄴ/는 셈이다</h4>

    <h3>Ситуационное состояние</h3>
    <h4>01 -아/어 놓다</h4>
    <h4>02 -아/어 두다</h4>
    <h4>03 -(으)ㄴ 채로</h4>
    <h4>04 -(으)ㄴ/는 대로</h4>



    <h3>Атрибуты и характеристика</h3>
    <h4>01 -(으)ㄴ/는 편이다</h4>
    <h4>02 스럽다</h4>
    <h4>хх 롭다</h4>
    <h4>03 답다</h4>

    <h3>Усиление</h3>
    <h4>01 얼마나 -(으)ㄴ/는지 모르다</h4>
    <h4>02 -(으)ㄹ 수밖에 없다</h4>
    <h4>03 -(으)ㄹ 뿐이다</h4>
    <h4>04 (이)야말로</h4>


    <h3>Цель и намерение</h3>
    <h4>01 -게-</h4>

    <h4>02 -도록</h4>

    <h3>Завершение</h3>
    <h4>01 -았/었다가</h4>
    <h4>02 -았/었던</h4>
    <h4>03 -아/어 버리다</h4>

    <h4>04 -고 말다</h4>

    <h3>Тщетность</h3>
    <h4>01 -(으)나 마나</h4>
    <h4>02 -아/어 봤자</h4>



    <h3>Гипотетическая ситуация</h3>
    <h4>01 -(느)ㄴ다면</h4>

    <h4>02 -았/었더라면</h4>

    <h4>03 -(으)ㄹ 뻔하다</h4>

    <h3>Сожаление</h3>
    <h4>01 -(으)ㄹ걸 그랬다</h4>

    <h4>02 -았/었어야 했는데</h4>

    <h3>Привычки и склонности</h3>
    <h4>01 -곤 하다</h4>
    <h4>02 -기는요</h4>
    <h4>03 -(으)ㄴ/는 척하다</h4>

  </>
  
  
 
/*
    <div className="row">
      <Expr></Expr>
      <Example mode={mode}></Example>
      <Translation mode={mode}></Translation>
    </div>
*/

// To common
const IntermediateList =() => {
  const [mode, setMode] = useState(Mode.ShowAll)
  return (
  <>
    <div className='container'>
      <ModeControls setMode = {setMode} mode = {mode} />
      <div id='Page' className='m-3'>
        <Intermediate mode = {mode}/>
      </div>
    </div>
  </>
  )
}

export default IntermediateList
