# Qwen3.8-27B — findings by Laguna S 2.1

- Source: Qwen/Qwen3.8-27B (HuggingFace model card benchmark table), OpenCode Zen (`opencode/qwen-3.8-27b`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba Qwen series 27B dense MoE-based hybrid vision-language model with 1M context window. Open weights (Apache-2.0). Strong performance across text, vision, and agentic coding benchmarks.
- **Provider / access:**
  - HuggingFace: `Qwen/Qwen3.8-27B` (open weights, Apache-2.0)
  - OpenCode Zen: `opencode/qwen-3.8-27b` via Anthropic-compatible API at `https://opencode.ai/zen/v1/messages` (no Free ID on Zen per `meta.json`)
- **Release / knowledge:** 2026 (Qwen 3.x series); knowledge cutoff not published
- **IDs:** `Qwen/Qwen3.8-27B` (HF), `opencode/qwen-3.8-27b` (Zen); noFreeId per `meta.json`
- **Context window:** 1M total (per HuggingFace model card: "1M context window")
- **Modalities:** Text, image, video input; text output; thinking mode on by default; tool calls; JSON mode
- **Pricing (as of 2026-10-01):** Open weights (Apache-2.0) — self-hosting free. No Zen Free ID; API provider pricing varies.
- **Architecture:** 27B dense parameters, MoE-based hybrid vision-language encoder-decoder. Open weights.

### Raw benchmarks found

> Source: HuggingFace model card `Qwen/Qwen3.8-27B` benchmark comparison table (2026-10-01). All figures are as published in the table comparing Qwen3.8-27B with Qwen3.6-27B, Qwen3.7-Plus, Muse Glimmer-30B, and Opus4.6 Max.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus): **68.2%** — (HuggingFace Qwen3.8-27B)
- OSWorld-Verified: **77.8%** — (HuggingFace Qwen3.8-27B)
- QwenSWEBench: **63.4%** — (HuggingFace Qwen3.8-27B)
- CoWorkBench: **68.7%** — (HuggingFace Qwen3.8-27B)
- DeepSWE 1.1: **16.8%** — (HuggingFace Qwen3.8-27B)
- Agents' Last Exam (Pass@1): **15.8%**, Score: **38.4** — (HuggingFace Qwen3.8-27B)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.2%** — (HuggingFace Qwen3.8-27B)
- HLE: **38.5%** — (HuggingFace Qwen3.8-27B)
- LiveCodeBench v6: **92.8%** — (HuggingFace Qwen3.8-27B)
- IFBench: **84.3%** — (HuggingFace Qwen3.8-27B)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- RealWorldQA: **89.4%** — (HuggingFace Qwen3.8-27B, reasoning/knowledge proxy)

Coding:

- Terminal-Bench 2.1: **68.2%** — (HuggingFace Qwen3.8-27B)
- SWE-bench Pro: **65.1%** — (HuggingFace Qwen3.8-27B)
- DeepSWE 1.1: **16.8%** — (HuggingFace Qwen3.8-27B)
- LiveCodeBench v6: **92.8%** — (HuggingFace Qwen3.8-27B)
- QwenSWEBench: **63.4%** — (HuggingFace Qwen3.8-27B)
- Vibe Code Bench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- No MRCR / RULER / LCR retrieval figure found; 1M context window confirmed by HuggingFace

Multimodal:

- OSWorld-Verified: **77.8%** — (HuggingFace Qwen3.8-27B, multi-step agentic vision)
- WebArena-Verified: **59.8%** — (HuggingFace Qwen3.8-27B)
- AndroidWorld: **85.0%** — (HuggingFace Qwen3.8-27B)
- ClawEval-MM (Pass@3): **62.1%** — (HuggingFace Qwen3.8-27B)
- ClawEval-MM (Average): **53.1%** — (HuggingFace Qwen3.8-27B)
- MathVision (Without CI): **93.2%** — (HuggingFace Qwen3.8-27B)
- BabyVision (Without CI): **68.2%**, (With CI): **73.5%** — (HuggingFace Qwen3.8-27B)
- CharXiv (RQ) (Without CI): **88.9%**, (With CI): **81.9%** — (HuggingFace Qwen3.8-27B)
- OmniDocBench 1.5: **93.8%** — (HuggingFace Qwen3.8-27B)
- RealWorldQA: **89.4%** — (HuggingFace Qwen3.8-27B)
- ERQA: **72.4%** — (HuggingFace Qwen3.8-27B)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (`Model-Comparison.md` RULES.md). Cost excluded.

- **Tool use: 75/100.** Terminal-Bench 2.1 at 68.2% is solid mid-to-strong agentic performance, above the mid tier (45–60%) but short of the frontier 88%+ threshold. OSWorld-Verified at 77.8% reinforces reliable tool use. Capped by absence of GDPval-AA and Claw-Eval data to push toward frontier 90+ range.

- **Reasoning: 86/100.** GPQA Diamond at 93.2% clears the frontier 90%+ threshold; HLE at 38.5% is just shy of the 40% frontier line; LiveCodeBench v6 at 92.8% and IFBench at 84.3% show strong reasoning. No MRCR/LCR/CritPt data to confirm frontier long-context reasoning. Capped by HLE marginally below threshold and absence of confirmed retrieval-at-1M figures.

- **Context window: 95/100.** 1M token context window per HuggingFace model card — meets ≥1M tier. Scores 95 rather than 100 since no verified retrieval-at-512K+ percentage was found to confirm the full 1M is usable.

- **Multimodal: 85/100.** Text, image, and video input with text output (per HuggingFace model card). Scores in the +video input range (75–90) per methodology; 85 reflects strong vision-language agent capabilities across OSWorld, AndroidWorld, MathVision, and OmniDocBench.

- **Coding: 78/100.** LiveCodeBench v6 at 92.8% is elite-level; SWE-bench Pro at 65.1% and QwenSWEBench at 63.4% are solid mid-to-strong; Terminal-Bench 2.1 at 68.2% supports reliable coding agent behavior. DeepSWE 1.1 at 16.8% is low but appears to be model-internal (small-scale). Capped relative to the strongest frontier models by TB2.1 short of 85% and DeepSWE well below 74%.

- **Cost efficiency: 90/100.** Open weights (Apache-2.0) — self-hosting is free ($0) for operators. No Zen Free ID found per `meta.json`; commercial API pricing varies. Scores 90 reflecting zero-cost self-hosting; lower than 100 only because not on Zen's free tier.

- **Overall Score: 84/100.** Mean of five non-cost dimensions: (75 + 86 + 95 + 85 + 78) / 5 = 419 / 5 = 83.8 → 84. Strong open-weights vision-language model with 1M context and elite coding/reasoning benchmarks; recommended for vision-assisted agentic workflows where self-hosting is feasible.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via HuggingFace model card (`Qwen/Qwen3.8-27B`) benchmark table and OpenCode Zen docs; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `BenchLM.md` or `AA.md`, using the same headings.

---
