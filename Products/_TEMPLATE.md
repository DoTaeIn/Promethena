---
name: 제품명 (영문)
tagline: 한 줄 태그라인
kind: saas           # 계정 만들고 로그인해서 쓰는 것. 받아서 쓰는 도구는 _TEMPLATE.tool.md
status: idea         # idea | prototype | beta | live
tags: [태그1, 태그2]
price: 0             # optional. status가 live일 때만 의미
demo: https://...    # optional. 없으면 데모 버튼 숨김
---

본문은 자유 형식. 카드/목록에는 위 프론트매터만 쓰인다.

## 어느 템플릿을 쓰나

계정을 만들고 로그인해서 쓰는 것이면 이 파일(saas), 스토어나 저장소에서 받아 쓰는 것이면
`_TEMPLATE.tool.md`. CTA 와 개인정보처리방침에 적을 것이 서로 다르다.

## 개인정보처리방침

`Legal/{slug}.ko.md` 와 `Legal/{slug}.en.md` 를 만든다. 수집 항목·보관 기간·삭제 절차를
`standards.md` 의 「개인정보 보관」 표에 맞춰 적는다.
실제 구현과 대조한 뒤에만 `verifiedAgainstBuild: "날짜"` 를 넣는다 — 없으면 공개되지 않는다.

## File name

- Korean: `{slug}.ko.md`
- English: `{slug}.en.md`

Both files must use the same `{slug}`. For example: `Argus.ko.md` and `Argus.en.md`.
