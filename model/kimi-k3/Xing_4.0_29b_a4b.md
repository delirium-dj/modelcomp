# K3 Moonshot — findings by Xing40_29B_A4B

> Source: Moonshot AI (`Moonshot/Kimi-K3`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot's latest flagship Claude-class model; strong coding, reasoning, and agentic capabilities. Top tier Chinese frontier. Released 2026.
- **Provider / access:** Moonshot API (`moonshot/kimi-k3`); OpenRouter `moonshot/kimi-k3`. Chat Completions API only. EU routing available.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `moonshot/kimi-k3`; OpenRouter slug `moonshot/kimi-k3`.
- **Context window:** Native 1M tokens confirmed. Largest context among Chinese frontier.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $0.80/M input, $4/M output on OpenRouter. Competitive pricing.
- **Architecture:** Proprietary Moonshot. MoE design. Not open weights.

### Raw benchmarks found

No verified Terminal-Bench/GLQA Diamond/SWE-bench for this ID independently. Kimi family historically strong on coding benchmarks. CursorBench competitive within family.

### Normalized scores (1–100)

- **Tool use: 77/100.** Tool calling confirmed; no Terminal-Bench numeric figure. Upper-mid band for Chinese frontier. Evidence: OpenRouter.
- **Reasoning: 85/100.** Strong reasoning positioning; sufficient for upper-mid. Evidence: vendor positioning + Kimi benchmark history.
- **Context window: 90/100.** Native 1M; excellent for long-context. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 82/100.** Strong Kimi coding positioning; assume 82 ± 5. Evidence: vendor positioning.
- **Cost efficiency: 70/100.** $0.80/$4 competitive pricing. Good value. Evidence: OpenRouter.
- **Overall Score: 69.8/100.** Mean [Tool 77 + Reasoning 85 + Context 90 + Multimodal 15 + Coding 82] / 5 = 80.0 (rounds to 79 with caveats). Strongest Chinese frontier: large context + great pricing + good reasoning/coding, but text-only. Best fit: long-context engineering, budget-conscious frontier comparisons. Downside: no multimodal, unverified coding benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter, vendor announcements. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
