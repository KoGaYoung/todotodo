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
1. 우리의 투두투두 리스트는 크게 3가지로 구분할 수 있습니다.
    Header(Hit you with that todotodo),
    Tab(ALL, COMPELETE, NOT YET) 
    Contents(todoItem, ALL탭의 경우 INPUT)로 구성되어있습니다.
2. ALL 탭의 경우 텍스트 필드가 있으며 키보드입력(ex.enter key)를 통해 todoItem을 추가합니다.
   todoItem은 왼쪽부터 완료여부를 나타내는 체크박스, 할일내용, 우측에는 수정과 삭제 버튼이 있습니다.
   더블클릭 시에도 수정이 가능합니다. 수정을 완료하지 않은 상태에서 esc키를 누르면 수정되지 않은 채로 다시 view 모드로 복귀
   이 때 완료된 항목은 글자색 변경과 취소선을 그려줍니다
3. Compelte 탭의 경우 완료된 항목만 조회할 수 있습니다. 단, 수정과 삭제는 불가능합니다.
4. NOT YET 탭도 3.Compelete탭과 동일하게 조회만 가능합니다.
5. todo list의 item갯수를 count한 갯수를 리스트의 Header에 보여주기

~~~

# CSS 수작업할 시간이 부족 matarial UI적용
문서 : https://mui.com/components/app-bar/


# 작업화면

![image](https://user-images.githubusercontent.com/36693355/137537498-cd444459-6687-4cbf-aea2-dcad0c712d15.png)
https://medium.com/wesionary-team/building-a-todo-app-using-react-redux-and-material-ui-688281d968ba

![image](https://user-images.githubusercontent.com/36693355/137537696-bff821b3-8cb0-48d6-a21d-a95417f41071.png)

https://aimho.tistory.com/95
https://codechasseur.tistory.com/100



# 예상 Q&A
~~~
1. 리액트 버전이 어떻게 되나요 ? 
 -> react version : 17.0.2
2. Matarial UI를 몰라서 막혔어요! 
 -> 기본적인 UI는 넣어두었습니다. 이해가 안 갈 경우 구글링을 통해 사용예시를 참고하시는 것을 권장드립니다.
 -> 리액트로 기능 구현에 대한 코드리뷰를 진행할 것이기 때문에 기본적인 html태그를 사용하시고 스타일시트(CSS)측면은 크게 신경쓰지 않으셔도 좋습니다.
3. 클래스형 컴포넌트 이외에도 Hooks를 도입해도 될까요 ? 
 -> O 네 자유롭게 개발 해보세요. 글자나 색상 크기도 자유롭게 바꾸셔도 됩니다.
4. 할 일은 꼭 테이블이나 그리드를 사용해야 할까요?
 -> X 그리드/테이블을 사용하지 않아도 괜찮습니다.
 -> 다만 원소는 반드시 immutable하게 사용하셔야합니다.(코드리뷰 때 이유를 꼭 이야기 해주세요)
 
* 투두리스트를 개발하는 동안 개발환경 설정 외의 로직에 대한 질문은 일절 받지 않겠습니다. 화이팅.
~~~
