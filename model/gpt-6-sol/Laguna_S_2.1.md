# GPT-6 Sol — findings by Laguna S 2.1

> Source: opencode/gpt-6-sol (OpenAI), e.g. OpenAI API docs, Artificial Analysis
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol (max reasoning build) (OpenAI). Flagship reasoning/coding model for complex coding and agentic workflows.
- **Short description:** OpenAI's September-2026 GPT-6 Sol — high-reasoning build optimized for coding and long-horizon agentic work, with effort levels none→max, a 1.05M context window, 128K max output, and 122 tok/s throughput.
- **Provider / access:** OpenAI API; model ID `gpt-6-sol`; also `gpt-6-sol` snapshots. Available via OpenAI API + 6 provider routes (OpenAI). Tiered rate limits (Free tier: Not supported; Tier 1+ required).
- **Release:** September 2026 (Artificial Analysis "Released September 2026").
- **IDs:** `opencode/gpt-6-sol` (paid API). noFreeId — no free/Zen Free ID (Free tier explicitly Not supported by OpenAI).
- **Context window:** 1,050,000 input tokens; 128,000 max output tokens (OpenAI API docs; ≥1M tier; 128K max output clears the 64K caveat).
- **Modalities:** text + image input → text output (+image-in only). Audio/video/PDF **not supported** (OpenAI API docs).
- **Reasoning / tools:** Yes — `reasoning.effort` {none, low, medium (default), high, xhigh, max}. Function calling + structured/JSON outputs + tools (web search, file search, image/code-interpreter/computer use) via the Responses API (OpenAI docs).
- **Knowledge cutoff:** April 20, 2026 (OpenAI API docs).
- **Pricing (as of 2026-09-23):** $2.00 / $10.00 per 1M in/out; cached input $0.20; cache-write $2.50 (1.25×); >272K prompt billed 2× input + 1.5× output; Batch/Flex 50% off. Blended 7:2:1 ≈ $1.54/MTok. No free tier (OpenAI API docs).

### Raw benchmarks found

> Verified public numbers, sourced per metric. Benchmarks not located are NOT fabricated.

- Artificial Analysis Intelligence Index v4.3.2: **48** (#18/212, "well above average"; median 25) (Artificial Analysis model page, 2026-09).
- AA speed: **122.2 tokens/second** (#33/212); TTFT 107.18s (AA).
- AA cost-per-Intelligence-Index task: **$1.06** (#48/212) (AA).
- Intelligence Index v4.3.2 components (AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR): **NOT FOUND** as standalone public figures here (Index 48 is the published aggregate; the AA page content did not surface component %s).
- Terminal-Bench 2.0/2.1/Hard/4.0: NOT FOUND standalone.
- SWE-bench Verified / Pro / DeepSWE / LiveCodeBench / SciCode / SWE-Atlas / Tau3-Banking / Tau3-general / GDPval-AA Elo / GPQA Diamond / HLE / CritPt / AA-Omniscience / LCR / AA-LCR / MMMU-Pro / Toolathon / MCP-Atlas / MRCR / RULER / GraphWalks: NOT FOUND in fetched pages.
- OpenAI qualitative ("strong performance across coding, mathematics, scientific reasoning") is descriptive only — no verified % figures.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. Uses current AA Intelligence Index v4.3.2 = 48 (#18/212), above GPT-5.4's 39 (→62/63/60) and Grok 4.5's 39 (→69).

- **Tool use: 65/100.** AA Intelligence Index 48 (#18/212, well above median 25); OpenAI positions it for agentic/tool workloads — capped by no standalone Terminal-Bench / GDPval-AA / SWE-bench % figures located.
- **Reasoning: 66/100.** Index 48 + reasoning.effort up to `max` + Apr 2026 knowledge cutoff; capped below 70 by no standalone GPQA / HLE/AA-Omniscience / CritPt figures.
- **Context window: 90/100.** 1,050,000 native input window (≥1M tier); 128K max output verified (clears the 64K caveat). No measured retrieval-acuity figure (no MRCR/RULER).
- **Multimodal: 70/100.** Text + image input, text output (+image-in only; audio/video/PDF explicitly unsupported per OpenAI docs) — mid-band for image-in families.
- **Coding: 63/100.** Index 48 (Terminal-Bench 4.0 is an Index component) + OpenAI's explicit "built for complex coding and agentic workflows" and strong-coding/SciCode descriptors; capped by no standalone SWE-bench/DeepSWE/LiveCodeBench % located.
- **Cost efficiency: 50/100.** $2.00/$10.00 per 1M is mid-tier (same band as GPT-5.4); cost-per-task $1.06 is reasonable but not cheap vs Luna's ~$0.065; no free tier.
- **Overall Score: 71/100.** (65 + 66 + 90 + 70 + 63) / 5 = 354 / 5 = 70.8 → 71. A above-average reasoning/coding frontier model whose current AA Index 48 (#18/212) is solid but whose component-benchmark ledger is not yet published in the pages I could reach.

> **Scale note / discrepancy:** The repo AI-Rankings average for this model is **81.0** (audit/model-comparison.md v4, 2026-09-17). My score (71) uses the **current AA Intelligence Index v4.3.2 = 48** (#18/212), consistent with this batch's current-Index interpretation (Claude Fable → 67, GPT-5.4 → 69, Grok 4.5 → 69, Gemini 2.5 Pro → 57, Kimi K2.8 → 66). The repo's 81.0 reflects the higher legacy/at-launch rating. Both preserved for reconciliation.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Artificial Analysis GPT-6 Sol (max) model page; OpenAI GPT-6 Sol API docs). Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.