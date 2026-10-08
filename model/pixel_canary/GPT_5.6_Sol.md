# Pixel Canary — findings by GPT 5.6 Sol

- Source: Undisclosed stealth provider (`stealth/pixel-canary`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary
- **Short description:** Anonymous stealth coding model specialized in frontend, Next.js, refactoring, and mobile-app design.
- **Provider / access:** Vercel AI Gateway.
- **Release:** 2026-09-25.
- **Context window:** 262K tokens; gateway metadata reports up to 131K output.
- **Modalities:** Text input and output.
- **Pricing:** Free for a limited stealth period; prompts and responses may be used for training and ZDR is unavailable.

### Raw benchmarks found

- Vercel Next.js eval baseline **90.3%**, passing 28/31 tasks at pass@4.
- With Next.js documentation supplied through `AGENTS.md`, **96.8%**, passing 30/31 and tying the top score ([Vercel announcement](https://vercel.com/changelog/pixel-canary-is-now-available-in-stealth-for-free-on-ai-gateway)).
- No broad reasoning, long-context-retention, or standard agent benchmark was published.

### Normalized scores (1–100)

- **Tool use: 75/100.** It integrates with coding agents and handles multi-file framework work, but general tool evidence is sparse.
- **Reasoning: 70/100.** Strong task execution implies capable reasoning, with no general benchmark support.
- **Context window: 82/100.** The declared 262K capacity is large; effective retention remains unmeasured.
- **Multimodal: 15/100.** The gateway lists text-only input.
- **Coding: 95/100.** Its 90.3–96.8% Next.js results are exceptional within the demonstrated specialization.
- **Cost efficiency: 100/100.** It is temporarily free, though data-use terms and future pricing reduce practical certainty.
- **Overall Score: 67/100.** Half-up mean of the five non-cost dimensions; outstanding web specialist with narrow public evidence.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Vercel's exact-model announcement and gateway catalog; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
