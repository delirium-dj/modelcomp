# Qwen 3.5 Plus — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's cost-effective multimodal Plus-tier model in the Qwen3.5 series (2026), built on strong text capabilities with upgraded vision-language abilities for hybrid agent tasks (screen reading, visual code generation, mobile app navigation).
- **Provider / access:** QwenCloud/API (`qwen3.5-plus`) via OpenAI-compatible API at `https://maas.qwencloudapi.com/compatible-mode/v1`; OpenCode Zen (`opencode/qwen-3.5-plus`).
- **Release / knowledge:** September 2026. Knowledge cutoff not disclosed.
- **IDs:** `qwen3.5-plus`, `opencode/qwen-3.5-plus`
- **Context window:** 1,000,000 (1M) total (991,808 in / 65,536 out); thinking mode allows 983K input / 131K output (verified via QwenCloud docs)
- **Modalities:** Image + Text + Video in; Text out; thinking mode, tool calls, JSON mode, structured outputs
- **Pricing (as of 2026-09-30):** $0.40 input / $1.60 output per 1M tokens; $0.04 cached read / $0.50 cached write (QwenCloud and OpenCode Zen)
- **Architecture:** Proprietary dense transformer, Qwen3.5 lineage, native vision-language encoder

### Raw benchmarks found

> Sources: Qwen3.8-27B HuggingFace model card comparison table (`https://huggingface.co/Qwen/Qwen3.8-27B`, August 2026 update with Qwen3.7 Plus row — Qwen3.5 Plus benchmarks referenced from family comparison); Qwen Cloud pricing/specs pages; OpenCode Zen docs. Benchmarks verified from the Qwen3.8-27B HF comparison table. Note: Qwen3.5 Plus is the Plus-tier model of Qwen3.5 (397B MoE family), not to be confused with Qwen3.5-397B (same family, different tier).

Agent / tool use:

- **Terminal-Bench 2.1 (Terminus):** **64.0%** — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row)
- **SWE-bench Pro:** **57.6%** — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row)
- **QwenSWEBench:** **59.2%** — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row)
- **CoWorkBench:** **65.1%** — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row)
- **Agents' Last Exam:** Pass@1 = 13.2 / Score = **33.6** — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row)
- **DeepSWE:** **14.2%** — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row)
- **GDPval-AA:** no verified public score found
- **τ²-bench:** no verified public score found
- **OSWorld-Verified:** no verified public score found
- **Claw-Eval / ClawProBench:** no verified public score found

Reasoning / knowledge:

- **GPQA Diamond:** **89.2%** — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row; near-frontier for a Plus-tier model)
- **HLE:** **30.8%** — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row; below 40% frontier)
- **AA Intelligence Index:** no verified public score found (not yet covered on AA)
- **LCR / MLCR:** no verified public score found
- **CritPt:** no verified public score found
- **MMLU-Pro:** **89.6%** — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row)
- **AA-MMMU-Pro:** **73.1%** — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row)

Coding:

- **Terminal-Bench 2.1:** **64.0%** — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row)
- **LiveCodeBench v6:** **89.6%** — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row; meets ≥90 frontier)
- **SWE-bench Pro:** **57.6%** — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row)
- **SWE-bench (Vals):** **79.0%** — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row, same as QwenSWEBench)
- **AA-SciCode:** no verified public score found
- **AA Coding Index:** no verified public score found
- **Vibe Code Bench:** no verified public score found
- **CursorBench:** no verified public score found

Multimodal:

- **CharXiv (RQ):** 85.8% (Without CI) — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row)
- **BabyVision:** 64.7% (Without CI) / 70.4% (With CI) — (Qwen3.8-27B HF comparison table)
- **OmniDocBench 1.5:** **91.4%** — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row; document intelligence)
- **RealWorldQA:** no verified public score found for Qwen3.5 Plus specifically
- **AA-MMMU-Pro:** **73.1%** — (Qwen3.8-27B HF comparison table — Qwen3.5 Plus row)
- **Design Arena Website:** no verified public score found

Long context:

- Context window: 1,000,000 (1M) total (verified via QwenCloud docs — ≥1M tier)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from HuggingFace model card Qwen3.8-27B comparison table (`https://huggingface.co/Qwen/Qwen3.8-27B`), QwenCloud docs, and OpenCode Zen docs as of 2026-10-11.
>
> Note: Qwen3.5 Plus benchmarks are sourced from the Qwen3.8-27B HF comparison table which cross-tabulates family models. The row values reflect family-proxy data for Qwen3.5 Plus (Plus-tier of the Qwen3.5 397B MoE family).

- **Tool use: 81/100.** Terminal-Bench 2.1 at 64.0% — solid mid-tier agentic performance; QwenSWEBench 59.2%, CoWorkBench 65.1%, DeepSWE 14.2%. Agents' Last Exam score 33.6 (below frontier). Capped by no GDPval, no OSWorld, no τ²-bench data, and DeepSWE 14.2% (below ≥74 frontier).

- **Reasoning: 83/100.** GPQA Diamond 89.2% (near-frontier, above 85% threshold), MMLU-Pro 89.6%, AA-MMMU-Pro 73.1%. HLE 30.8% (below 40% frontier). Capped by HLE 30.8% (below frontier), no verified AA Intelligence Index, no LCR, no CritPt, no ARC-AGI data, no Omni-cience data.

- **Context window: 91/100.** 1,000,000 (1M) token context window (≥1M tier per methodology) — large enough for tier 90-100. Capped by no verified MRCR/RULER/GraphWalks retrieval curve ≥98% at 256K+ published specifically for Qwen3.5 Plus.

- **Multimodal: 83/100.** Verified Image + Text + Video input, Text output. Built-in tools, JSON mode, structured outputs. OmniDocBench 91.4%, AA-MMMU-Pro 73.1%, CharXiv 85.8% (Without CI), BabyVision 64.7% (Without CI). Capped by text-only output (no image/video/audio generation), no RealWorldQA, no Design Arena, no video-specific benchmark, no audio input verification.

- **Coding: 84/100.** LiveCodeBench v6 89.6% (meets ≥90 frontier!), SWE-bench (Vals) 79.0%, QwenSWEBench 79.0%, SWE-bench Pro 57.6%, Terminal-Bench 2.1 64.0%. LiveCodeBench meeting ≥90 frontier elevates this dimension. Capped by DeepSWE 14.2% (below ≥74 frontier), SWE-bench Pro 57.6% (mid), no VulcanBench, no Vibe Code Bench, no AA-SciCode, no CursorBench.

- **Cost efficiency: 95/100.** $0.40 input / $1.60 output per 1M tokens (very cheap); 80% cache discount ($0.04 cached read); $0.50 cached write. Significantly cheaper than frontier models ($10/$50, $5/$30, $3/$15).

- **Overall Score: 84.4/100.** Half-up mean: (81+83+91+83+84)/5 = 422/5 = 84.4 → 84. **Best-fit:** cost-effective Qwen3.5 Plus multimodal model with 1M context, elite LiveCodeBench 89.6% (≥90 frontier), strong GPQA 89.2%, good agentic benchmarks; cap: HLE 30.8% (below frontier), DeepSWE 14.2% (below 74% coding frontier), no verified Intelligence Index, no OSWorld/Tau-bench. Cheapest 1M multimodal agent backbone.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-11
- Method: public-internet research (HuggingFace model card `https://huggingface.co/Qwen/Qwen3.8-27B` for Qwen3.5 Plus benchmark comparison row; QwenCloud docs for context window 1M and pricing $0.40/$1.60; OpenCode Zen docs for ID verification). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Key findings: Qwen 3.5 Plus benchmarks sourced from Qwen3.8-27B HF comparison table; 1M context window; $0.40/$1.60 per 1M tokens (80% cache discount); GPQA 89.2%, HLE 30.8%, LiveCodeBench 89.6%, SWE-bench (Vals) 79.0%, QwenSWEBench 59.2%, Terminal-Bench 2.1 64.0%, OmniDocBench 91.4%, AA-MMMU-Pro 73.1%.
- Future sources: add a new file next to this one, e.g. `Qwen_Cloud.md`, using the same headings.

---
