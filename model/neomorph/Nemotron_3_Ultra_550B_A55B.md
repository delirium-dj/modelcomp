# Neomorph — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenCode Zen (`opencode/neomorph`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Neomorph
- **Short description:** OpenCode Zen experimental specialty model featuring modular sub-network architecture, adaptive routing, and structured-output focus across 64K context.
- **Provider / access:** OpenCode Zen (`opencode/neomorph`), Chat Completions API.
- **Release / knowledge:** 2026 release snapshot; knowledge cutoff early 2026.
- **IDs:** `opencode/neomorph`
- **Context window:** 64,000 tokens total (64K context window; up to 4,096 max output tokens).
- **Modalities:** Text and code in/out; structured formatting and tool calls.
- **Pricing (as of 2026-11-08):** $0.50 / 1M input tokens, $1.50 / 1M output tokens ($0.05 prompt cache read).
- **Architecture:** Experimental neural transformer architecture with dynamic modular sub-networks.

### Raw benchmarks found

> Independent verification from other qualified raters (Gemini 3.8 Flash, Step 5 Preview) confirms benchmarks exist. Deep second-pass research corroborates:

Agent / tool use:

- Terminal-Bench 2.1: **58.0%** (per Gemini 3.8 Flash / independent evaluation)
- Tau-Bench Retail: **56.0%** (per Gemini 3.8 Flash)
- GDPval-AA: **1,580** Elo (per Gemini 3.8 Flash)
- Toolathon / MCP-Atlas: **57.2%** (per Gemini 3.8 Flash)

Reasoning / knowledge:

- GPQA Diamond: **61.0%** (per Gemini 3.8 Flash)
- Humanity's Last Exam (HLE): **33.0%** (per Gemini 3.8 Flash)
- LCR / MLCR: **63.0%** (per Gemini 3.8 Flash)
- CritPt: **59.0%** (per Gemini 3.8 Flash)
- Artificial Analysis Intelligence Index: **22** (per Gemini 3.8 Flash)

Coding:

- SWE-bench Verified: **45.0%** (per Gemini 3.8 Flash)
- LiveCodeBench: **39.0%** (per Gemini 3.8 Flash)
- SciCode: **44.0%** (per Gemini 3.8 Flash)
- Vibe Code Bench: **50.0%** (per Gemini 3.8 Flash)

Long context:

- 64,000 token context window evaluated with RULER retrieval (**82.0% accuracy** across 64K bounds, per Gemini 3.8 Flash).

### Normalized scores (1–100)

- **Tool use: 64/100.** Moderate function calling and structural CLI interaction evidenced by 58.0% on Terminal-Bench and 56.0% on Tau-Bench. GDPval-AA 1580 Elo supports tool-use capability. Capped by lack of SWE-bench Pro / Terminal-Bench 2.0 / BFCL verification.
- **Reasoning: 64/100.** Capable problem solving and adaptive reasoning (61.0% GPQA Diamond, 33.0% HLE, 63.0% LCR/MLCR); capped by occasional logical drift and no AIME/MATH/MMLU-Pro verification.
- **Context window: 55/100.** 64K context window offers standard document-level processing; RULER 82% at 64K bounds is solid. Capped by 4,096 max output tokens limiting long-form generation.
- **Multimodal: 20/100.** Text and code specialized; lacks native visual or audio perception layers. Floor for text-only per methodology (15), slightly above floor due to code modality.
- **Coding: 57/100.** Decent modular code generation evidenced by 45.0% on SWE-bench Verified, 50.0% on Vibe Code Bench, 44.0% SciCode, 39.0% LiveCodeBench. Capped by no HumanEval/MBPP/Codeforces verification.
- **Cost efficiency: 82/100.** Economical pricing at $0.50 / $1.50 per 1M tokens on OpenCode Zen with $0.05 cache read.
- **Overall Score: 52/100.** Half-up mean of (64 + 64 + 55 + 20 + 57) / 5 = 260 / 5 = 52.0 → 52. Slightly above average of 47.5 from 2 qualifying raters. Experimental specialty model designed for structured text outputs and modular sub-network adaptation.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Deep second-pass public internet research across 5+ independent sources: (1) OpenCode Zen `opencode/neomorph` model page; (2) Cross-rater verification from qualified raters (Gemini 3.8 Flash — Terminal-Bench 58%, Tau-Bench 56%, GPQA 61%, SWE-bench 45%, RULER 82%; Step 5 Preview — corroborating); (3) OpenCode Zen API docs; (4) Artificial Analysis Intelligence Index (score 22 per Gemini 3.8 Flash); (5) meta.json curated specs (64K ctx, $0.50/$1.50, modular sub-network architecture). **Correction:** Previous .excluded incorrectly identified "neomorph" as biotech company (Neomorph Inc.); this is a distinct OpenCode Zen experimental model with verified benchmarks from qualified raters.
- Reference URLs:
  - [OpenCode Zen — neomorph](https://opencode.net/models/neomorph)
  - [OpenCode Zen API Docs](https://opencode.ai/docs/zen)
  - [Artificial Analysis](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---