# Udemy React Lecture Repository for Recording progress

## Why this project started?
Udemy discord community 에서 2월 28일까지 완강 챌린지 이벤트를 시작했다.<br>
완강 대상 강의로 **`【한글자막】 React 완벽 가이드 with Redux, Next.js, TypeScript`** 를 선택했고,<br>
학습 내용,  실습을 위해 작성한 프로젝트를 저장하기 위한 목적으로 저장소를 개설하였다.

## Record Convention
전체 강의 목차 및 진행 내용은 `GitHub Project` 를 활용하여 기록하였고,<br>
강의 수강 중에 새로 작성을 시작한 프로젝트들은 `React-xxx-xxx` 의 형식을 가진 `GitHub Repository`에 저장하였다.<br>

`Repository`에는 강의 `Section`마다 `Issue`가  생성되어 있고,`Issue`마다 `feature/#이슈번호-Section제목`의 `branch`를 연결하였다.<br>
학습 및 실습 내용은 `Issue comment`, `commit message` 에 간략하게 정리하였다.<br>
실습 `code` 내에도 학습 내용을 간단하게 `comment`로 남겨두었다.
<hr>

`Section 10.`부터는 이 곳, `'udemy-react-practice' Repository`에 `Section branch`를 생성하여 기록한다. 이렇게 한 이유는 강의 실습을 하며 생성하는 `pilot project`의 수가 생각보다 많기 때문이다. 
해당 강의에 30개 정도의 `Section`이 있고, 한 `Section`마다 특정 `Subject`를 위한 `pilot project`가 하나 이상 존재한다. 따라서 최소 30개 정도의 `pilot project` 가 존재한다.
`project` 하나마다 `Repository`를 생성하니, 개별 `project`의 크기는 작은데 `Repository`수가 너무 많아 관리가 힘들어졌다.
따라서, 이후 실습 과정 기록은 모두 이 곳에서 이루어지고, 이전 `Section`에서 생성된 `Repository` 역시 이 곳에 통합할 예정이다.<br>
<br>
다만, `Repository`에 생성된 `Issue` 들이 `Repository` 삭제 이후에도 `GitHub Project`에서 유지되는지 아직 확인이 되지 않았다. 만약 통합 과정에서 `Issue` 내용이 사라질 수 있다면, 해당 `Repository`들을 그대로 아카이브하는 방법도 고려 중이다.

## Remind Plan
`GitHub Project`, `Issue comment`, `commit message`를 바탕으로 가볍게 리마인드 할 계획이다.<br>
이후에 관련된 내용들을 학습하게 될 경우, `README.md` 하단에 날짜와 함께 추가할 예정이다.

## Branch Management Strategy
`Git Flow`에 기반한 브랜치 관리 전략을 적용해보았다.<br>
먼저 전반적인 실습 과정은 `develop branch`를 기본으로 한다.<br>
각 `Section`마다 `develop branch`를 기반으로 생성된 `feature branch`를 생성하여 실습을 진행한다.<br>
해당 `Section`의 실습이 모두 완료되는 경우 `develop branch`에 `PR`을 통해 `merge`한다.<br>
모든 실습이 완료된 경우 `develop branch`를 `main branch`에 `PR`을 통해 `merge`하고 종료한다.<br> 

## Related Section
- Section 08. 연습하기: 연습 프로젝트 완료 

# Resource Link
- [React Complete Guide Code Repository](https://github.com/academind/react-complete-guide-code)
