# GPT-5.5 — findings by Ling 3.0

> Provided by: **Ling 3.0 (OpenAI/gpt-5.5)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-5.5
- **Short description:** OpenAI's first fully retrained base model since GPT-4.5, a natively omnimodal frontier agentic model with leading terminal-coding performance.
- **Provider / access:** OpenAI — `gpt-5.5` on ChatGPT, Codex, OpenAI API ($5/$30 per Mtok)
- **Release / knowledge:** April 23, 2026; knowledge cutoff December 1, 2025
- **IDs:** openai/gpt-5.5
- **Context window:** 1,050,000 tokens (1M in API; 400K in Codex)
- **Modalities:** Text and image in; text out (natively omnimodal — text, image, audio, video in unified architecture)
- **Pricing (as of 2026-09-23):** $5.00/M input tokens, $30.00/M output tokens (OpenAI API); GPT-5.5 Pro at $30/$180
- **Architecture:** Fully retrained base model; reasoning effort levels (none/low/medium/high/xhigh); co-designed with NVIDIA GB200/GB300

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.0: **82.7%** (OpenAI system card; Codex CLI harness)
- Terminal-Bench 2.1 (Vals AI): **76.4%** (independent run)
- OSWorld-Verified: **78.7%** (OpenAI system card)
- MCP Atlas: **75.3%** (OpenAI system card)
- Toolathlon: **55.6%** (OpenAI system card)
- τ²-bank Telecom: **98.0%** (OpenAI system card)
- BrowseComp: **84.4%** (OpenAI system card)
- CyberGym: **81.8%** (OpenAI system card)

Reasoning / knowledge:
- GPQA Diamond: **93.6%** (OpenAI system card; AA independent: 93.5%; Vals AI: 93.2%)
- HLE (no tools): **41.4%** (OpenAI system card)
- HLE (with tools): **52.2%** (OpenAI system card)
- GDPval-AA: **1769 Elo** (OpenAI system card)
- FrontierMath Tier 1–3: **51.7%** (OpenAI system card)
- FrontierMath Tier 4: **35.4%** (OpenAI system card)

Coding:
- SWE-bench Pro: **58.6%** (OpenAI system card)
- SWE-bench Verified: **88.7%** (OpenAI system card; Vals AI: 82.6%)
- LiveCodeBench (Vals AI): **85.3%** (independent)
- Expert-SWE (Internal): **73.1%** (OpenAI system card)
- FrontierCode 1.1 Main: **43.0%** (independent)
- CursorBench: **59.2%** (independent)

Long context:
- MRCR v2 at 512K–1M: **74.0%** (OpenAI system card); significant improvement over GPT-5.4's 36.6%

### Normalized scores (1-100)
- **Tool use: 80/100.** Terminal-Bench 2.0 at 82.7% leads the field on that harness; OSWorld-Verified at 78.7%; τ²-bank at 98.0%; BrowseComp at 84.4%; but SWE-bench Pro at 58.6% and Toolathlon at 55.6% show mixed agentic breadth.
- **Reasoning: 78/100.** GPQA Diamond at 93.6% is top-tier; but HLE without tools at 41.4% trails Opus 4.8 (49.8%) and Qwen 3.8 Max (43.6%); HLE with tools at 52.2% is solid; GDPval-AA at 1769 Elo confirms knowledge-work strength.
- **Context window: 90/100.** 1.05M-token context window in API mode; 400K in Codex; MRCR v2 at 74.0% demonstrates excellent long-context reasoning; long-context surcharge above 272K tokens.
- **Multimodal: 75/100.** Natively omnimodal architecture processing text, images, audio, and video in a single system; image input supported; audio and video not supported as output modalities; multimodal benchmarks not as extensively published as text benchmarks.
- **Coding: 82/100.** SWE-bench Verified at 88.7% and LiveCodeBench at 85.3% are strong; Terminal-Bench 2.0 at 82.7% leads; but SWE-bench Pro at 58.6% trails Opus 4.8 (69.2%) significantly; Expert-SWE at 73.1% confirms internal coding strength.
- **Cost efficiency: 70/100.** At $5/$30 per Mtok, among the more expensive frontier models; output tokens cost 20% more than Claude Opus 4.7; effective cost increase ~20% due to ~40% fewer output tokens per task.
- **Overall Score: 81/100.** Strong terminal coding (80), solid reasoning (78), good context (90), moderate multimodal (75), and strong verified coding (82) produce a competitive overall; cost efficiency excluded from Overall per methodology.

---

## Signature
- Provided by: **Ling 3.0 (OpenAI/gpt-5.5)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/gpt-5.5/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
