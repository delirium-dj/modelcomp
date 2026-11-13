# Codestral 25.08 — findings by Beam

- Source: Mistral AI (`mistralai/codestral-2508`, OpenRouter `mistralai/codestral-2508`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08 — Mistral's specialized low-latency code model for IDE autocomplete, fill-in-the-middle (FIM), code correction, and multi-language development.
- **Short description:** A text/code-only Mistral model tuned for IDE autocomplete and FIM completion tasks; released July 30, 2025. 256K context, structured outputs, function calling. Not aimed at autonomous multi-turn tool loops.
- **Provider / access:** Mistral AI (La Plateforme `codestral-25-08` / `codestral-2508`); OpenRouter `mistralai/codestral-2508`. Chat Completions / FIM endpoint. Paid: $0.30/$0.90 per 1M.
- **Release / knowledge:** Released 2025-07-30; knowledge cutoff 2025-03-31.
- **IDs:** `mistralai/codestral-2508` (OpenRouter); Mistral `codestral-25-08`. No Free ID.
- **Context window:** 256,000 total; 204,800 max output (per OpenRouter top_provider).
- **Modalities:** Text and code in; text and code out. No image/audio/video input.
- **Pricing (as of 2026-11-13):** $0.30/M in, $0.90/M out (Mistral La Plateforme and OpenRouter); cache read $0.03/M.
- **Architecture:** Proprietary Mistral model; parameter count not disclosed; text+file tokenizer; Mistral instruct type.

### Raw benchmarks found

> Mistral's documentation publishes specs only; the original Codestral announcement's benchmark figures are embedded in images not extractable as verified text. The only verified public benchmark surfaced for this exact ID is Design Arena.

Agent / tool use:
- No Terminal-Bench / Tau3 / GDPval row found for this exact ID.

Reasoning / knowledge:
- No GPQA Diamond / HLE / LCR / CritPt / Intelligence Index row found for this exact ID.

Coding:
- Design Arena — code categories: **Elo 998**, win rate 38.5%, rank 130 (OpenRouter model entry).
- Design Arena — website: Elo 1006, win 37.8%, rank 134.
- Design Arena — dataviz: Elo 1015, win 41.1%, rank 117.
- Design Arena — uicomponent: Elo 1008, win 46.7%, rank 122.
- Design Arena — gamedev: Elo 958, win 36.3%, rank 132.
- Design Arena — 3d: Elo 1003, win 45.4%, rank 118.
- No SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE row found for this exact ID.

Long context:
- 256K context; no MRCR/RULER curve published for this exact ID.

Multimodal:
- N/A — text/code only.

### Normalized scores (1–100)

- **Tool use: 50/100.** No Terminal-Bench / Tau3 / GDPval row for this exact ID; Design Arena codecategories placement (rank 130) is mid-tier; FIM/completion focus rather than agentic tool loops. Cap mid pending agentic suites. Evidence: OpenRouter Design Arena entry + Mistral docs (FIM/function calling).
- **Reasoning: 50/100.** No GPQA Diamond / HLE / LCR / CritPt / Intelligence Index row for this exact ID; no verified reasoning benchmark. Mid-low placement consistent with a code-specialized model without published reasoning evals. Evidence: absence in accessible sources.
- **Context window: 72/100.** 256,000 total tokens → 200K–500K tier (65–84); max output 204,800 is generous for a code model. No MRCR/RULER retrieval curve published, so mid-tier placement. Evidence: OpenRouter top_provider context_length.
- **Multimodal: 15/100.** Text and code only — no image/audio/video input; conventional floor on the project's multimodal scale. Evidence: OpenRouter architecture modalities.
- **Coding: 60/100.** Design Arena codecategories Elo 998 (rank 130, win 38.5%) is mid-tier among coding models; FIM/completion focus with no SWE-bench/LiveCodeBench/SciCode row to anchor higher. Cap mid pending standardized coding suites. Evidence: OpenRouter Design Arena entry.
- **Cost efficiency: 90/100.** Paid $0.30/$0.90 per 1M is mid-cheap for a code model; cache read $0.03/M; no free tier. Evidence: OpenRouter pricing + Mistral pricing.
- **Overall Score: 49.4/100.** Mean of [Tool use 50 + Reasoning 50 + Context window 72 + Multimodal 15 + Coding 60] / 5 = 49.4 → 49. Recommendation: budget code-completion / FIM model for IDE autocomplete with 256K context; not suited to autonomous agentic coding loops (no verified SWE-bench/Terminal-Bench) or multimodal work; escalate to a frontier coding model for multi-file repo tasks.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-13
- Method: fresh public web research reading OpenRouter model entry for `mistralai/codestral-2508` (Design Arena codecategories Elo 998 / win 38.5% / rank 130, plus website/dataviz/uicomponent/gamedev/3d arenas), Mistral La Plateforme pricing, and Mistral docs (128K→256K context, FIM, function calling, structured outputs, knowledge cutoff 2025-03-31). Confirmed absence of SWE-bench/Terminal-Bench/LiveCodeBench/SciCode/GPQA/HLE rows in accessible sources. Scores are normalized 1–100 interpretations, not vendor scores; each number carries a source line.
- Reference URLs:
  - [OpenRouter — Mistral: Codestral 2508 (model page)](https://openrouter.ai/mistralai/codestral-2508)
  - [Mistral — Codestral 25.08 announcement](https://mistral.ai/news/codestral-25-08)
  - [Mistral docs — Codestral](https://docs.mistral.ai/models/codestral)
- Future sources: add a new file next to this one, e.g. `Beam_Alt.md`, using the same headings.
