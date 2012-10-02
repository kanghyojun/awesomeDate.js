# awesomeDate.js

awesomeDate.js는 날짜를 조금 더 멋지게 표현하기위해서 만들어졌습니다.

## 사용법

사용하고 싶은 페이지에서 awesomeDate.js를 로드합니다.

    <script type="text/javascript" src="./awesomeDate.js"></script> 

로드를 시켰다면 `awesomeDate.time(time)`과(와) 같이 사용하시면됩니다.

## 함수

### awesomeDate.time(timestamp)

 2분전, 2시간, 어제 오후 11시 21분과 같이 조금 더 멋진 날짜를 string으로 반환합니다.
 timestamp는 Date형 자료가 들어갈수있습니다.

     awesomeDate.time(new Date(2012, 9, 2)) // 현재날짜가 Date(2012, 9, 1) 일 경우 '어제 오전 12시 0분'을 출력합니다.

### awesomeDate.fullDate(timestamp)

 2012년 1월 21일 오후 11시 21분과 같은 전체 날짜를 반환합니다. 
 timestamp는 Date형 자료가 들어갈수있습니다.
