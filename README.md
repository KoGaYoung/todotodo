# todotodo list
신규입사자 교육용 토이프로젝트 Hit you with that todotodo


# 프로젝트 간단 환경설정
~~~
1. Git Clone
2. 브랜치 따기 ex)dev_고가영
3. 터미널 열어서 아래 명령어 실행
  node -v                  //노드 설치되어있는지 버전확인
  npm -v                   //npm 설치 되어있는지 버전확인
  sudo npm install -g yarn // yarn 설치
  yarn cache clean         // 캐시비우기
  yarn install             // node-module라이브러리 설치
  http://localhost:3000/ 
4. 작업 완료하시고 원격 브랜치로 푸시하셔도 됩니다 :)
~~~

# 구현할 기능 명세
~~~
우리의 투두투두 리스트는 아래와 같은 기능이 필요합니다.
1. 키보드입력(ex.enter)나 버튼을 통해 todoItem을 추가합니다.( 아래 작업화면 참고 )
2. todoItem은 왼쪽부터 완료여부를 나타내는 체크박스, 할일내용, 우측에는 수정과 삭제 버튼이 있습니다.
3. 더블클릭 시에도 수정이 가능합니다. 수정을 완료하지 않은 상태에서 esc키를 누르면 수정되지 않은 채로 다시 조회 모드로 복귀
4. 라디오버튼으로 할일 완료된 항목만 보여주기, 완료되지 않은 항목만 보여주기 기능을 추가해주세요.
5. 완료된 항목은 글자색 변경과 취소선을 그려줍니다.
6. 화면에 체크된 todoItem / 전체 todoItem 갯수 표시
~~~

# CSS 수작업할 시간이 부족 matarial UI적용
문서 : https://mui.com/components/app-bar/


# 대략적인 작업화면

![image](https://user-images.githubusercontent.com/36693355/137537498-cd444459-6687-4cbf-aea2-dcad0c712d15.png)
![image](https://user-images.githubusercontent.com/36693355/137615169-4e1a4341-fdd9-444b-8d4c-aded370c90b5.png)



# 예상 Q&A
~~~
1. 리액트 버전이 어떻게 되나요 ? 
 -> react version : 17.0.2
2. Matarial UI를 몰라서 막혔어요! 
 -> 기본적인 HTML과 react로직을 추가하여 작업하시면 됩니다.
3. 클래스형 컴포넌트 이외에도 Hooks를 도입해도 될까요 ? 
 -> O 네 자유롭게 개발 해보세요. 글자나 색상 크기도 자유롭게 바꾸셔도 됩니다.
4. 할 일은 꼭 테이블이나 그리드를 사용해야 할까요?
 -> X 그리드/테이블을 사용하지 않아도 괜찮습니다.
 
* 투두리스트를 개발하는 동안 개발환경 설정 외의 로직에 대한 질문은 일절 받지 않겠습니다. 화이팅.
~~~
