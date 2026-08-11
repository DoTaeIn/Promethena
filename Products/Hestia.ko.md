---
name: Hestia
tagline: 지워지지 않는 팀의 문서 공간
status: prototype
tags: [knowledge-base, collaboration, documentation, saas]
---

# Hestia

Hestia는 스페이스와 페이지 트리 위에서 팀이 문서를 작성, 공유, 검색하는 협업 플랫폼 프로토타입입니다. 핵심 메시지는 **지워지지 않는 문서**입니다. 문서의 맥락과 변경 기록을 남기고, 필요한 사람이 안전하게 다시 찾을 수 있는 공간을 지향합니다.

## 현재 구현

- Supabase 매직 링크 로그인 및 Google OAuth 기반 인증
- 워크스페이스 생성과 소유자 멤버십 자동 부여
- RLS로 보호되는 워크스페이스·문서 데이터 모델
- TipTap 기반 리치 텍스트 에디터: 제목, 서식, 표, 코드 블록, 이미지
- 20MB 제한의 이미지 파일 선택·드래그앤드롭 삽입
- ProseMirror JSON 문서 저장과 0.8초 디바운스 자동 저장
- 워크스페이스별 문서 목록, 계층형 트리, 실제 문서 검색
- 라이트/다크 테마, 반응형 편집 화면, 문장 단위 댓글 UI

## 기술 구성

- Next.js 15, React 19, TypeScript
- TipTap / ProseMirror
- Supabase Auth, PostgreSQL, Row Level Security
- Vercel 배포 준비

## 다음 단계

- 문서 이동과 드래그 정렬
- 휴지통과 복구
- 페이지 버전 스냅샷, 변경 비교, 복원
- 실제 공유 권한과 팀 초대
- S3 호환 파일 스토리지 및 첨부파일 권한 제어

## 실행 및 배포

Supabase SQL Editor에서 아래 마이그레이션을 순서대로 실행한 뒤 `.env.example`을 `.env.local`로 복사해 환경 변수를 설정합니다.

1. `supabase/migrations/0001_auth_workspaces.sql`
2. `supabase/migrations/0002_pages.sql`

```bash
npm install
npm run dev
```

배포 절차는 [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)를 참고합니다.

## 라이선스

Copyright © 2026 Promethena. All rights reserved. 소스코드 및 셀프호스팅 사용 조건은 [LICENSE.md](LICENSE.md)를 따릅니다.
