# GPT-5 nano — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-5-nano`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 nano
- **Short description:** OpenAI's smallest/t cheapest GPT-5-family reasoning lane (2025-08-07), aimed at routing, extraction, classification and bulk jobs inside the GPT-5 / mini / nano ladder. Not a variant/alias of another entry in this dataset.
- **Provider / access:** OpenAI Responses API + Chat Completions (`https://api.openai.com/v1`), plus 26 aggregators (OpenRouter, Azure, Snowflake Cortex, Poe, etc. — ModelBench provider table). Chat Completions and Responses both available upstream.
- **Release / knowledge:** released 2025-08-07 (`gpt-5-nano-2025-08-07`); knowledge cutoff not published in sources found.
- **IDs:** `gpt-5-nano`, `gpt-5-nano-2025-08-07`. **No OpenCode Zen Free ID found** — scored on paid API pricing.
- **Context window:** 400,000 tokens input with 128,000 max output (ModelBench spec record, corroborated by 26 provider rows and Vals' GPT-5 family page); litellm via Future AGI lists 272,000 / 128,000 for the dated snapshot — treat 400K/128K as the catalog consensus, 272K as a provider-specific variant.
- **Modalities:** text + image + PDF in; text out; reasoning yes; function calling, parallel tool calls, structured outputs, prompt caching, streaming (Future AGI capability rows; ModelBench: "Reasoning, Tools, JSON"). No audio input/output advertised.
- **Pricing (as of 2026-10-01):** $0.05 / 1M input, $0.40 / 1M output (OpenAI list via 26 providers); cache read $0.005 / 1M; blended $0.137 / 1M at 3:1 (litellm via Future AGI). Cheapest provider: Poe $0.045 / $0.36 (ModelBench). Paid tier only — no free API tier verified.
- **Architecture:** proprietary, closed weights (ModelBench: "Closed weights"); parameter count not published.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench (any version) / Tau3 / Tau2 / GDPval-AA / Claw-Eval / Toolathon / OSWorld / MCP-Atlas: **no verified public score found** — OpenAI published no agent-harness table for nano, and no third-party board in sources found carries one (BenchmarkList only notes that swapping GPT-5-Nano → GPT-5.2 lifts Codex CLI resolution by 52%, a relative claim with no absolute nano score)
- Qualitative: function calling + parallel tool calls supported (Future AGI); Vals (2025-08-07 family eval) reports GPT-5 Nano "middle of the pack across the board", narrowly top-10 on AIME within the family

Reasoning / knowledge:

- GPQA Diamond: **35%** (Serenities AI, sourced from model papers — non-thinking harness)
- MMLU-Pro: **62%** (Serenities, HuggingFace Leaderboard)
- ARC-AGI: **15%** (Serenities, arcprize.org)
- AIME 2025: no verified public score found (Vals says nano placed top-10 in the family but publishes no value)
- Artificial Analysis Intelligence Index: **20** (AA comparison page "GPT-5 nano (high)", v4.1.1)
- HLE / MLCR / CritPt / BenchLM overall: **no verified public score found** (BenchLM independent public score 39.72 — composite, display only, 0 source-displayable benchmark rows)

Coding:

- SWE-bench Verified: **25.0%** (Serenities, swebench.com)
- LiveCodeBench: **30.0%** (Serenities, livecodebench.github.io)
- HumanEval+: **72.0%**; MATH: **65.0%**; GSM8K: **85.0%** (Serenities, model papers)
- SWE-bench Pro / SciCode / DeepSWE / Vibe Code Bench / Terminal-Bench: **no verified public score found**

Long context:

- 400K window (catalog consensus); MRCR / RULER / GraphWalks retrieval: **no verified public score found**

Multimodal:

- Image + PDF input supported (Future AGI modalities); MMMU / MMMU-Pro / CharXiv: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 45/100.** Function calling and parallel tool calls are confirmed, but no Terminal-Bench / τ² / GDPval / OSWorld number exists for nano in any source found — the score is a no-harness floor with a slight penalty for missing evidence (methodology: missing benchmark = N/A note, no hallucinated score), not a measured agentic result.
- **Reasoning: 52/100.** GPQA Diamond 35% sits below the documented mid band (GPQA 60–80 → 55–65), AA Intelligence Index 20 is at the very bottom of the 20–35 range, and ARC-AGI 15% is low; MMLU-Pro 62% keeps it from the 30s.
- **Context window: 78/100.** 400K tokens falls in the 200K–500K tier (65–84) toward its upper half, with 128K max output — no long-context retrieval measurement found.
- **Multimodal: 78/100.** Text + image + PDF input lands in the +video/PDF-in band (75–90); no audio in, no non-text out, and no MMMU score — 78 is the cap.
- **Coding: 45/100.** SWE-bench Verified 25% and LiveCodeBench 30% are far below the mid band (LiveCode ~80 → 65–75); HumanEval+ 72% is a saturated micro-benchmark and does not lift the score.
- **Cost efficiency: 99/100.** $0.05/$0.40 per 1M is cheaper than the ~$0.10/$0.20 ≈ 97–99 anchor, with cache reads at $0.005; only a $0 free tier would reach 100.
- **Overall Score: 60/100.** (45 + 52 + 78 + 78 + 45) / 5 = 59.6 → 60 — best-fit as an ultra-cheap 400K-context bulk/classification worker; not for serious coding, reasoning or agentic loops.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research (Serenities AI AI Value Index rows, ModelBench provider catalog, Future AGI/litellm spec sheet, Artificial Analysis comparison page, BenchLM model page, Vals AI GPT-5 family eval, BenchmarkList); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
