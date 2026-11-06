# Gemini 3.1 Flash-Lite — findings by Mercury 3

- Source: Google DeepMind (Gemini 3.1 Flash-Lite)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's fastest and most cost-efficient Gemini 3 series model (preview released 2026-03-03), built for high-volume developer workloads at scale — "best-in-class intelligence for the highest-volume workloads" at a budget price.
- **Provider / access:** Gemini API + Google AI Studio (`gemini-3.1-flash-lite-preview`) and Vertex AI; also via third-party providers (~8); preview status (no full production SLAs initially).
- **Release / knowledge:** Preview 2026-03-03; knowledge cutoff not published.
- **IDs:** `google/gemini-3.1-flash-lite`.
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text + image + video + audio + PDF input; text output; thinking levels minimal/low/medium/high; Google Search grounding; URL context; code execution; improved ASR.
- **Pricing (as of 2026-03+):** $0.25 in / $1.50 out per 1M (thinking tokens billed at output rate; cached input $0.025; some providers from $0.125).
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Intent routing accuracy: **~94%** (aimlapi/enterprise testers) — strong for multi-agent orchestration
- No terminal/agentic index benchmark captured

Reasoning / knowledge:

- GPQA Diamond: **86.9%** (Google/AA)
- Arena.ai Elo: **1432** (Google)
- AA Intelligence Index: **34** (vs Gemini 2.5 Flash Lite 13, 2.5 Flash ~32)
- 2.5x faster time-to-first-answer-token and +45% output speed vs Gemini 2.5 Flash (AA)

Coding:

- No SWE-bench/terminal numbers captured; UI/dashboard generation and structured data extraction highlighted as strengths

Long context:

- 1M verified; no independent long-context retrieval benchmark captured

Multimodal:

- Text/image/video/audio/PDF input, text output; MMMU Pro **76.8%**; improved ASR

### Normalized scores (1–100)

- **Tool use: 80/100.** ~94% intent routing and strong high-volume agentic fit; no terminal benchmark captured.
- **Reasoning: 82/100.** GPQA Diamond 86.9% and AA Index 34 are class-leading for a budget tier.
- **Context window: 92/100.** 1M verified.
- **Multimodal: 86/100.** Broad native input (text/image/video/audio/PDF) with MMMU Pro 76.8% — excellent for the tier.
- **Coding: 76/100.** No verified coding-bench numbers captured; UI generation strengths noted.
- **Cost efficiency: 84/100.** $0.25/$1.50 with $0.025 cache — outstanding value for the capability; preview pricing may change at GA.
- **Overall Score: 83/100.** Mean of the five non-cost dims (80+82+92+86+76)/5 = 83.2 → 83. Best-fit: the best budget-tier Gemini for high-volume multimodal/agentic workloads; watch preview→GA pricing and SLA changes.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google: Gemini 3.1 Flash-Lite announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-lite/)
  - [Google AI for Developers: gemini-3.1-flash-lite docs](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite)
  - [AIMLAPI: Gemini 3.1 Flash Lite review (pricing/benchmarks/verdict)](https://aimlapi.com/blog/gemini-3-1-flash-lite-review-2026-pricing-benchmarks-features-best-use-cases)
  - [llm-stats: Gemini 3.1 Flash-Lite](https://llm-stats.com/models/gemini-3.1-flash-lite-preview)
  - [BenchLM: Gemini 3.1 Flash-Lite](https://benchlm.ai/models/gemini-3-1-flash-lite)
  - [CloudPrice: Gemini 3.1 Flash Lite](https://cloudprice.net/models/google-gemini-3-1-flash-lite)
- Future sources: add a new file next to this one using the same headings.
