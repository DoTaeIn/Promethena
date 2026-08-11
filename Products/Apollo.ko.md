---
name: Apollo
tagline: 하나의 세계관에서 함께 쓰고, 읽고, 정사를 만들어 가는 소설 플랫폼
status: beta
tags: [world-building, collaborative-writing, web-novel, shared-ip]
price: 0
---

# Apollo

공유 세계관 소설 플랫폼입니다. 창시자가 세계관을 만들고, 다른 작가는 그 규칙 안에서 스핀오프를 쓰며, 독자는 읽고 정사 편입에 참여합니다.

## 현재 구현됨

- 세계관 위키: 인물·용어·장소·사건, 절대 규칙, 연표, 지도
- 공동 창작: 스플릿 뷰 에디터, 자동 저장, 초고/발행 관리, 규칙 충돌 경고
- 읽기: 위키 툴팁, 정사 투표, 멀티버스 분류, 태그·키워드 탐색
- 기여와 보상: 설정 제안 게시판, 채택 포인트, 원장 기반 정산 대시보드
- 협업: 공개/비공개 세계관, 열람자·편집자 초대, 위키 편집 이력과 되돌리기
- 운영: 매직링크 로그인, 알림, Alembic 마이그레이션, 헬스 체크

## 기술

Python, FastAPI, SQLModel, SQLite/Postgres, Alembic, Vanilla JavaScript.

현재 화면은 위키, 글쓰기, 읽기, 대시보드, 기여 게시판의 다섯 개입니다. 디자인은 이후 교체할 수 있도록 색상·간격·폰트를 `static/theme.css`의 CSS 변수로 분리해 두었습니다.

## 아직 없는 것

- PG 결제 및 실제 출금
- 마크다운 렌더링
- 최종 UI 디자인과 배포 환경

## 문서

- 실행 및 환경설정: [README.md](README.md)
- 코어 엔진 구조: [CORE.md](CORE.md)
- 기능 계획 및 보류 항목: [PLAN.md](PLAN.md)
