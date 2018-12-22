# FDS Final Project - Mango Plate Clone App `Fast Plate`

## Project Info

- 팀 구성 - **신창선, 안재현, 조민지**
- 개발 일정 - **2018/12/03 ~ 2018/12/21**
- 개발 도구
  - Language - `JavaScript ES6+` / `HTML5` / `CSS3(& Sass)`
  - Library - `react v16.6.3` / `react-router-dom v4.3.1`/ `react-helmet v5.2.0` / `axios v0.18.0` / `node-sass v4.10.0` / `classnames v2.2.6` / `body-scroll-lock v2.6.1` / `react-responsive-carousel v3.1.43` / `react-facebook-login v4.1.1` / `google-maps-react v2.0.2`
  - Module Bundler & Build Tool - `Webpack v4.26.1`
  - JS Compiler - `Babel v7.1.6`
  - This Project created by `Create-React-App v2.1.1`

## Project Plan

- [MVP & Backlog & Sprint History](https://docs.google.com/spreadsheets/d/1w_wG2s0EXF0zX9VTLTY7a3NlnoF_Z9-5zgXrgAqj0dI/edit#gid=1972710944)

- [Sprint Schedule & Component Structure](https://trello.com/b/xrlYoPOh/sprint-manager)

## Github Repository 사용법

- Branch - master(배포용) / develop(개발용)
- Git Flow를 사용해서 작업을 할 계획입니다.
- 최초에 저장소를 포크, 클론 하셨을 경우 `git flow init` 을 해서 Git Flow를 사용할 수 있는 상태로 초기화 해주세요.
  - 브랜치를 어떤 역할로 쓸지 여러번 물어보는데, 엔터를 쳐서 모두 기본값으로 설정해줍시다.
- `git branch`를 입력해서 클론한 저장소에 master, develop 브랜치가 모두 있는지 확인해주세요.
  - 만약 master 브랜치만 있다면, `git branch develop` 을 해서 develop 브랜치를 만드신 뒤, `git checkout develop`으로 develop 브랜치로 이동하신 뒤 `git pull origin develop` 으로 리모트 저장소에서 develop 브랜치를 pull 받아 주세요.
  - 여기까지 하셨다면 작업할 준비가 되셨습니다.
- develop 브랜치는 각각의 feature로 나뉘어서 작업한 뒤 merge 되는 곳입니다. 개발은 feature 브랜치를 만들어서 작업하신 뒤에 개발이 완료된 feature 브랜치는 develop에 merge 해주세요.
  - feature 브랜치는 develop 브랜치에 위치한 상태에서 만들어야 합니다. 현재 위치가 develop이 아니라면 `git checkout develop` 으로 develop 브랜치로 이동해주세요.
  - develop 브랜치로 이동하셨다면 `git flow feature start 기능이름` 을 입력해서 feature 브랜치를 만들어주세요. 
  - 브랜치가 성공적으로 만들어졌다면 `feature/기능이름` 형태의 브랜치가 생기면서 자동으로 `feature/기능이름` 브랜치로 이동했을 겁니다.
  - 자 이제, feature 브랜치에서 원하는 작업을 시작하시면 됩니다.
  - 그리고 브랜치에서 작업을 완료하셨다면 `add`, `commit`, `push` 를 하신 뒤 `git flow feature finish 기능이름` 을 입력해서 feature를 종료시켜주시면 됩니다.
    - 성공적으로 동작했다면 자동으로 develop 브랜치로 이동해서 merge되고, feature 브랜치는 삭제됩니다.
    - merge된 develop 브랜치는 현재 로컬 저장소에만 커밋된 상태입니다. develop 브랜치가 변경되었다는 사실을 리모트 저장소에 알려주기 위해 `git push origin develop` 으로 push 해주세요.
  - 여기까지 하셨다면 모든 변경사항이 리모트 저장소의 develop 브랜치에 반영되어 있으실 겁니다. 이제, 변경사항을 PM의 리모트 저장소의 develop 브랜치에 Pull Request를 보내시면 됩니다.
- **(주의사항!)** 만약 여러 사람이 같은 파일에 작업한다면, 변경사항이 충돌하게 될 것입니다. 이러한 현상을 해결하기 위해서는 아래와 같이 작업해주시면 됩니다.
  - 원본(PM)의 리모트 레포지토리(Github Repository) 주소를 복사해서 `git remote add pmorigin 레포지토리주소` 를 입력해서 PM의 repo를 remote에 추가로 등록해놓습니다.
  - develop 브랜치에 위치한 상태에서 `git pull pmorigin develop`으로 pm의 develop 브랜치를 pull 받으려고 하면 내용이 다른 부분에서 conflict가 발생합니다. ---> 이 때, 코드상에서 원하는 변경사항을 수락해주시면 됩니다.
  - 변경사항을 원하는 대로 수정하신 뒤에  `add`, `commit`, `git push origin develop`으로 개발자님의 리모트에 반영해주시면 됩니다.
  - conflict를 해결한 내용을 PM에게 Pull Request를 보내시면 됩니다.