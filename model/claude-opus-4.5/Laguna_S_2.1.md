# Claude Opus 4.5 — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/claude-opus-4-5`), BenchLM (`https://benchlm.ai/models/claude-opus-4-5`), Anthropic system card
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5 (non-reasoning)
- **Short description:** Anthropic's November 2025 non-reasoning Opus-tier model. Cut Opus-tier pricing by 67% ($5/$25) while reaching SOTA real-world software engineering at launch. Surpassed by Opus 4.6 through 5.5, but still active. Note: a reasoning variant (Claude Opus 4.5 Thinking) also exists; this file covers the non-reasoning variant.
- **Provider / access:**
  - Anthropic API: `claude-opus-4-5` via Anthropic API at `https://api.anthropic.com/v1`
  - OpenCode Zen: `opencode/claude-opus-4-5` (no Free ID per `meta.json`)
- **Release / knowledge:** November 24, 2025; knowledge cutoff August 1, 2025
- **IDs:** `anthropic/claude-opus-4-5`; noFreeId per `meta.json`
- **Context window:** 200K total (per AA model page and `meta.json`)
- **Modalities:** Text and image input, text output; non-reasoning (A reasoning variant may exist)
- **Pricing (as of 2026-10-01):** $5.00 input / $25.00 output per 1M tokens; cache hits discounted 90% (cache read $0.125 in); no Free ID on Zen
- **Architecture:** Proprietary dense transformer; parameter count not disclosed

### Raw benchmarks found

> Sources: Anthropic Claude Opus 4.5 system card (PDF: `https://www-cdn.anthropic.com/bf10f64990cfda0ba858290be7b8cc6317685f47.pdf`), BenchLM (`https://benchlm.ai/models/claude-opus-4-5`), Artificial Analysis model page.

Agent / tool use:

- Terminal-Bench 2.0: **59.3%** — (Anthropic system card via BenchLM)
- Terminal-Bench 2.1 (Vals): **no verified public score found** — (BenchLM shows no Vals TB2.1 entry)
- OSWorld-Verified: **66.3%** — (Anthropic system card via BenchLM)
- τ³-bench: **70.2%** — (Qwen3.6-Plus comparison table via BenchLM)
- τ²-bench: **86.3%** — (Artificial Analysis model benchmarks via BenchLM)
- GDPval-AA: **no verified public score found** — (not broken out on AA page; part of Intelligence Index estimate of 24)
- Claw-Eval: **59.6%** — (Qwen3.6-Plus comparison table via BenchLM)
- QwenClawBench: **52.3%** — (Qwen3.6-Plus comparison table via BenchLM)
- MCP-Tasks: **71.8%** — (Qwen3.6-Plus comparison table via BenchLM)
- WideResearch: **76.4%** — (Qwen3.6-Plus comparison table via BenchLM)
- CyberGym: **50.6%** — (CyberGym leaderboard via BenchLM)
- JobBench: **32.3%** — (JobBench paper via BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **87%** — (Anthropic system card via BenchLM); AA-GPQA Diamond: **81.0%** — (AA model benchmarks via BenchLM)
- HLE: **30.8%** — (Qwen3.6-Plus comparison table via BenchLM); AA-HLE: **13.2%** — (AA model benchmarks via BenchLM)
- Artificial Analysis Intelligence Index: **24** — (estimated, AA model page; AA article notes "independent evaluation forthcoming")
- AA-Omniscience Index: **-4.1%** — (AA model benchmarks via BenchLM; negative = more incorrect than correct)
- AA-Omniscience Accuracy: **40.9%** — (AA model benchmarks via BenchLM)
- AA-Omniscience Hallucination Rate: **76.2%** — (AA model benchmarks via BenchLM; high)
- AA-LCR: **70.7%** — (AA model benchmarks via BenchLM)
- CritPt: **0.3%** — (AA model benchmarks via BenchLM; very low physics reasoning)
- MMLU-Redux: **96.6%** — (Qwen3.6-Plus comparison table via BenchLM)
- C-Eval: **92.2%** — (Qwen3.6-Plus comparison table via BenchLM)
- AA MMLU-Pro: **88.9%** — (AA MMLU-Pro leaderboard via BenchLM)
- SuperGPQA: **70.6%** — (Qwen3.6-Plus comparison table via BenchLM)
- LongBench v2: **64.4%** — (Qwen3.6-Plus comparison table via BenchLM)

Coding:

- SWE-bench Verified: **80.9%** — (Anthropic system card via BenchLM)
- LiveCodeBench v6: **84.8%** — (Qwen3.6-Plus comparison table via BenchLM)
- SWE-bench Pro: **57.1%** — (Qwen3.6-Plus comparison table via BenchLM)
- SWE Multilingual: **77.5%** — (Qwen3.6-Plus comparison table via BenchLM)
- AA-SciCode: **57.4%** — (AA leaderboard via BenchLM)
- Terminal-Bench 2.0: **59.3%** — (Anthropic system card via BenchLM)
- DeepSWE: **no verified public score found** — (not reported for this variant)

Long context:

- No MRCR / RULER / GraphWalks figure found; AA-LCR at 70.7% is confirmed (AA model benchmarks)

Multimodal:

- Supports text and image input (per AA model page); non-reasoning variant
- MMMU-Pro: **70.6%** — (Qwen3.6-Plus multimodal comparison via BenchLM)
- MathVision: **74.3%** — (Qwen3.6-Plus multimodal comparison via BenchLM)
- CharXiv: **68.5%** — (Qwen3.6-Plus multimodal comparison via BenchLM)
- VideoMMMU: **84.4%** — (Qwen3.6-Plus multimodal comparison via BenchLM)
- ScreenSpot Pro: **45.7%** — (Qwen3.6-Plus multimodal comparison via BenchLM)
- V*: **67.0%** — (Qwen3.6-Plus multimodal comparison via BenchLM)
- AA-MMMU-Pro: **71.2%** — (AA model benchmarks via BenchLM)
- Design Arena Website: **1255** — (OpenRouter benchmarks via BenchLM)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.

- **Tool use: 72/100.** τ³-bench at 70.2% clears the frontier 50%+ threshold; τ²-bench at 86.3% is excellent; Terminal-Bench 2.0 at 59.3% is solid mid-tier. OSWorld-Verified at 66.3% reinforces reliable tool use. GDPval-AA Elo not broken out on AA page (Intelligence Index estimated at 24), so no frontier-level GDPval data to push toward 90+.

- **Reasoning: 65/100.** GPQA Diamond at 87% is near frontier (90%+); AA-GPQA Diamond at 81.0%; MMLU-Redux at 96.6% and C-Eval at 92.2% show excellent knowledge recall. However, HLE at 30.8% (AA-HLE 13.2%) is well below the 40% frontier threshold; AA-Omniscience Index at -4.1% indicates hallucination issues; CritPt at 0.3% shows very weak physics reasoning; AA-LCR at 70.7% is decent. Intelligence Index estimated at only 24. Capped by poor HLE, hallucination rate, and CritPt.

- **Context window: 70/100.** 200K tokens per `meta.json` and AA model page — meets the 200K–500K tier (65–84, with 200K = 70). At the lower bound of this tier.

- **Multimodal: 68/100.** Text and image input, text output — scores in the +image input range (60–70) per methodology. Upper-end score reflects strong multimodal benchmark performance (VideoMMMU 84.4%, MMMU-Pro 70.6%, MathVision 74.3%, AA-MMMU-Pro 71.2%), though video input is not natively supported (VideoMMMU likely feeds frames as images).

- **Coding: 82/100.** SWE-bench Verified at 80.9% is near frontier (85%+); LiveCodeBench v6 at 84.8% is elite-level (frontier 80%+); AA-SciCode at 57.4% clears the 55%+ frontier threshold; SWE Multilingual at 77.5%. Terminal-Bench 2.0 at 59.3% is solid but below the 85%+ frontier target. No DeepSWE data for this variant. Strong overall coding performance with multiple near-frontier scores.

- **Cost efficiency: 50/100.** $5.00 input / $25.00 output per 1M tokens is expensive. Per methodology price ladder: ~$3/$15 ≈ 60, ~$10/$50 ≈ 30. At $5/$25, interpolates to ~50. No Free ID on Zen. Cache read at $0.125/M (90% discount) partially offsets but input/output rates remain high.

- **Overall Score: 71/100.** Mean of five non-cost dimensions: (72 + 65 + 70 + 68 + 82) / 5 = 357 / 5 = 71.4 → 71. Strong coding agent (SWE-bench 80.9%, LiveCodeBench 84.8%) and knowledge benchmarks (MMLU-Redux 96.6%, GPQA 87%), but capped by hallucination issues (Omniscience Index -4.1), weak HLE/CritPt, and expensive pricing. Best for coding tasks where cost is not the primary constraint; consider the reasoning variant for deeper reasoning.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via Artificial Analysis model page, BenchLM, and Anthropic Claude Opus 4.5 system card; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `Anthropic_System_Card.md`, using the same headings.

---
