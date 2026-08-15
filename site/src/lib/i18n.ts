export type Lang = "ko" | "en";

export const CONTACT_EMAIL = "dotaein@promethena.co.kr";
export const GITHUB_URL = "https://github.com/DoTaeIn";

export const statusLabel: Record<Lang, Record<string, string>> = {
  ko: { idea: "구상 중", prototype: "프로토타입", beta: "베타", live: "출시" },
  en: { idea: "Idea", prototype: "Prototype", beta: "Beta", live: "Live" },
};

export const ui: Record<Lang, { tagline: string; emptyDock: string; home: string; back: string }> = {
  ko: {
    tagline: "Carved in logic. Shipped to the web.",
    emptyDock: "도크가 비어 있다. 아직 진수한 것이 없다.",
    home: "Promethena",
    back: "← 도크로",
  },
  en: {
    tagline: "Carved in logic. Shipped to the web.",
    emptyDock: "The dock is empty. Nothing has launched yet.",
    home: "Promethena",
    back: "← Back to dock",
  },
};

export const toolCopy = {
  ko: { install: "설치하기", soon: "배포 준비 중입니다.", source: "소스 보기" },
  en: { install: "Install", soon: "Not yet published.", source: "View source" },
} as const;

export type InquiryKind = "personal" | "organization" | "custom" | "general" | "waitlist" | "buy";

const subjects: Record<Lang, Record<InquiryKind, (name?: string) => string>> = {
  ko: {
    personal: (name) => `[개인 사용 문의] ${name ?? "Promethena"}`,
    organization: (name) => `[조직 도입 문의] ${name ?? "Promethena"}`,
    custom: (name) => `[도입·확장 개발 문의] ${name ?? "Promethena"}`,
    general: () => "[일반 문의] Promethena",
    waitlist: (name) => `[대기자 등록] ${name ?? "Promethena"}`,
    buy: (name) => `[구매 문의] ${name ?? "Promethena"}`,
  },
  en: {
    personal: (name) => `[Personal use] ${name ?? "Promethena"}`,
    organization: (name) => `[Organization adoption] ${name ?? "Promethena"}`,
    custom: (name) => `[Implementation & extension] ${name ?? "Promethena"}`,
    general: () => "[General inquiry] Promethena",
    waitlist: (name) => `[Waitlist] ${name ?? "Promethena"}`,
    buy: (name) => `[Purchase inquiry] ${name ?? "Promethena"}`,
  },
};

export function inquiryMailto(lang: Lang, kind: InquiryKind, product?: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subjects[lang][kind](product))}`;
}
