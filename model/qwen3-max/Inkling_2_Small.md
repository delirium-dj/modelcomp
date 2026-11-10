# Qwen3-Max — findings by Fledge Alpha

- Source: Alibaba Cloud / Qwen Team (`qwen3-max`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3-Max
- **Short description:** Alibaba's ~1T-parameter late-2025 Qwen3 flagship (text-only). Deprecated in the current lineup: Alibaba's lifecycle tracker has it shutting down 2026-10-10 — two days from this writing — with migration to Qwen3.7-Max.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3-max`), OpenRouter, Novita, DeepInfra. OpenAI-compatible Chat Completions; sibling `qwen3-max-thinking` variant exists.
- **Release / knowledge:** GA 2025-09-23 (Vals AI); llm-stats lists 2025-12-15; knowledge cutoff June 2025.
- **IDs:** `alibaba/qwen3-max` (no Free ID on Zen found)
- **Context window:** 262K (256K) tokens; max output 65,536–131K depending on provider (Vals, llm-stats).
- **Modalities:** text in; text out (Vals: no image/video/file input); function calling; structured outputs; prompt caching. Thinking mode lives in the separate Qwen3-Max-Thinking ID.
- **Pricing (as of 2026-10-08):** official tiered — $1.20 in / $6.00 out per 1M (≤32K), $2.40/$12 (≤128K), $3.00/$15 (full window); third-party from $0.50/$5.00 (Novita), $0.78/$3.90 (other aggregators).
- **Architecture:** ~1.0T parameters, proprietary (llm-stats); trained on 36T tokens.

### Raw benchmarks found

Agent / tool use:

- τ2-bench: **74.8%** (llm-stats scorecard); τ-bench 76.8 (LLMReference)
- Terminal-Bench 2.0: ranked 55/67 (Vals AI)

Reasoning / knowledge:

- AIME 2025: **81.6%** (llm-stats scorecard)
- SuperGPQA: **65.1%** (llm-stats scorecard)
- GPQA Diamond: ranked 72/138 (Vals AI); 58% (SerenitiesAI harness)
- MMLU-Pro: 79.0% (SerenitiesAI); ranked 64/138 (Vals)
- LLM Stats Score: **21.7** (#187–190, 6 evals); BenchLM overall 41.08

Coding:

- SWE-bench Verified: **69.6%** (llm-stats scorecard); 78.8 (LLMReference, alternate harness); 46% (SerenitiesAI) — wide harness spread, all cited
- LiveCodeBench v6: **69.0%** (llm-stats scorecard)

Long context:

- 262K window (multiple providers); no MRCR/RULER public number found.

### Normalized scores (1–100)

- **Tool use: 70/100.** τ2-bench 74.8% with function calling; mid-pack Terminal-Bench ranking caps it.
- **Reasoning: 66/100.** AIME 81.6% and SuperGPQA 65.1% were strong at launch; a year old now, and the thinking variant carries the deep-reasoning load.
- **Context window: 60/100.** 262K window — below the 1M norm of the 2026 Qwen lineup it is being retired for.
- **Multimodal: 15/100.** Text-only per Vals AI capability table.
- **Coding: 72/100.** SWE-bench Verified 69.6% (official lane) and LCB v6 69.0%; independent harnesses measured lower (46%), so capped.
- **Cost efficiency: 55/100.** $1.20/$6 entry with steep tier jumps to $3/$15 at full window; cheaper third-party routes exist but the model retires 2026-10-10.
- **Overall Score: 57/100.** Mean of (70, 66, 60, 15, 72) = 56.6 → 57. Best fit: none going forward — deprecated in favor of Qwen3.7-Max; only existing integrations worth migrating.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (llm-stats scorecard, Vals AI, AI Model Watch lifecycle tracker, LLMReference, SerenitiesAI, felloai pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
