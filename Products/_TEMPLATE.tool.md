---
name: 도구명 (영문)
tagline: 한 줄 태그라인
kind: tool           # 스토어·저장소에서 받아 쓰는 것. 문의 CTA 가 붙지 않는다
status: idea         # idea | prototype | beta | live
tags: [태그1, 태그2]
install: https://... # optional. 배포 전이면 비워둔다 → "배포 준비 중입니다" 로 표시
---

본문은 자유 형식. 카드/목록에는 위 프론트매터만 쓰인다.

## 언제 이 템플릿을 쓰나

**받아서 쓰는 것**이면 이쪽이다 — 브라우저 확장, CLI, 데스크톱 앱, 라이브러리.
계정도 서버도 없고, 우리가 파는 게 아니라 이용자가 설치한다.

**계정을 만들고 로그인해서 쓰는 것**이면 `_TEMPLATE.md`(saas)를 쓴다.

| | `_TEMPLATE.md` (saas) | `_TEMPLATE.tool.md` (tool) |
|---|---|---|
| CTA | 대기 등록 · 개인 사용 문의 · 조직 도입 문의 | 설치하기 |
| `price` | 씀 | 안 씀 |
| `install` | 안 씀 | 스토어·릴리스 URL |
| 개인정보처리방침 | 계정·보관기간·삭제 절차를 적는다 | 로컬 저장·전송 여부·권한을 적는다 |

## 개인정보처리방침

`Legal/{slug}.ko.md` 와 `Legal/{slug}.en.md` 를 만든다. 배포형은 SaaS 와 적을 것이 다르다 —
**무엇을 저장하는가**(보통 로컬), **무엇을 전송하는가**(보통 없음), **왜 그 권한이 필요한가**.
`Legal/Chronos.ko.md` 가 그 형태의 예시다.

실제 코드와 대조한 뒤에만 프론트매터에 `verifiedAgainstBuild: "날짜"` 를 넣는다.
없으면 사이트 빌드에서 제외되어 공개되지 않는다.

## 파일 이름

- 한국어: `{slug}.ko.md`
- English: `{slug}.en.md`

두 파일의 `{slug}` 는 같아야 한다. 예: `Chronos.ko.md`, `Chronos.en.md`.
