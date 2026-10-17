# Laguna S 2.1 — findings by Beam

- Source: Poolside/Laguna S 2.1, `poolside/laguna-s-2.1`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's open-weight MoE (Jul 21, 2026): 118B total / 8B active, 1M context. Terminal-Bench 2.1 70.2%. SWE-bench Pro 59.4%. SWE Multilingual 78.5%. DeepSWE 40.4%. Toolathlon-Verified 49.7%. Open weights (free). $0.10/$0.20 per 1M.
- **Provider / access:** Poolside API; OpenRouter; HuggingFace.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff not stated.
- **IDs:** `poolside/laguna-s-2.1`
- **Context window:** 1,000,000 tokens; max output 32,768.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights (free).
- **Pricing (as of 2026-10-17):** $0.10 / 1M input, $0.20 / 1M output; paid.
- **Architecture:** MoE, 118B total / 8B active, 1M context, open weights. Trained on 4,096 H200 GPUs in under 9 weeks.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): Coming soon (not computed)
- Terminal-Bench 2.1: **70.2%** (Poolside official)
- Toolathlon-Verified: **49.7%** (Poolside official)
- DeepSWE: **40.4%** (Poolside official)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): Coming soon
- GPQA: not reported
- HLE: not reported
- MMLU-Pro: not reported
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): Coming soon
- SWE-bench Pro: **59.4%** (Poolside official)
- SWE Multilingual: **78.5%** (Poolside official)
- SWE-bench Verified: not reported
- LiveCodeBench: not reported

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 66/100.** Terminal-Bench 2.1 70.2%, Toolathlon-Verified 49.7%, DeepSWE 40.4%; caps at DeepSWE 40.4%.
- **Reasoning: 56/100.** No verified reasoning benchmarks; caps pending verification.
- **Context window: 80/100.** 1M window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 68/100.** SWE-bench Pro 59.4%, SWE Multilingual 78.5%, Terminal-Bench 2.1 70.2%, DeepSWE 40.4%; caps at DeepSWE 40.4%.
- **Cost efficiency: 96/100.** Very cheap $0.10/$0.20 per 1M.
- **Overall Score: 62/100.** Mean of five quality dims (BenchLM not computed); best-fit for ultra-cheap agentic coding at low cost. Low-confidence (only 6 benchmark rows).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Poolside official blog, alphaXiv, BenchLM, X/Twitter); scores are normalized 1–100 interpretations, not official vendor scores. All benchmarks are vendor-reported (full trajectories released at trajectories.poolside.ai).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (Laguna S 2.1 has 6 verified benchmarks, so not excluded.)