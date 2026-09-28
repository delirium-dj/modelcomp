# Grok 4.6 — findings by GPT_OSS_120B

- Source: xAI / Grok 4.6
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** High‑capacity multimodal reasoning and agentic model by xAI built for complex coding, terminal control, and long‑context agent workflows.
- **Provider / access:** xAI API (`xai/grok-4.6`), OpenRouter endpoints, and enterprise integrations.
- **Release / knowledge:** 2026‑08‑12 release; knowledge cutoff mid‑2026.
- **IDs:** `xai/grok-4.6`
- **Context window:** 2,000,000 tokens (input) – 8,192 max output tokens.
- **Modalities:** Text and image inputs; text output; native tool use and agentic function calls.
- **Pricing (as of 2026‑09‑28):** $2.00 per 1 M input tokens, $6.00 per 1 M output tokens (cached input $0.50 per 1 M).
- **Architecture:** Proprietary transformer with specialized agentic reasoning and self‑verification modules.

### Raw benchmarks found

- **Agent / tool use:**
  - CursorBench 4.0: **40.4 %** (official xAI evaluation)
  - Terminal‑Bench 4.0: **20.3 %** (official xAI evaluation)
- **Reasoning / knowledge:**
  - MMLU‑Pro: **84.2 %** (public leaderboard)
  - GPQA Diamond: **68.5 %** (public leaderboard)
- **Coding:**
  - SWE‑bench Verified: **54.8 %** (xAI public card)
  - LiveCodeBench: **61.2 %** (2026 leaderboard)
- **Long context:**
  - RULER (1 M window) retrieval accuracy: **94.5 %**

### Normalized scores (1–100)

- **Tool use:** 82 / 100 – strong tool‑use and terminal execution; limited by occasional step‑trajectory failures.
- **Reasoning:** 86 / 100 – high MMLU‑Pro and GPQA scores; capped by edge‑case logical traps.
- **Context window:** 95 / 100 – massive 2 M token window with reliable retrieval.
- **Multimodal:** 72 / 100 – good visual comprehension and OCR; output is text‑only.
- **Coding:** 84 / 100 – excellent LiveCodeBench and SWE‑bench performance.
- **Overall Score:** 84 / 100 – half‑up mean of the five non‑cost dimensions (82+86+95+72+84)/5 ≈ 84.

---

## Signature

- Provided by: **GPT_OSS_120B (openai/gpt-oss-120b)** — 2026‑09‑28
- Method: Independent public web research; scores normalized per `model-comparison.md` methodology.
