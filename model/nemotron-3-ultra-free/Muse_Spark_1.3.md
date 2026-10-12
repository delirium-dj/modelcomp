# Nemotron 3 Ultra Free — findings by Muse Spark 1.3 Contributor

- Source: NVIDIA/Nemotron 3 Ultra, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-12 (UTC) — second-pass refresh (prior Signature 2026-09-18 with vendor-table evidence; new: AA June 2026 launch article — Index 47.7, GDPval 1378, Omniscience non-hallucination 71%, CritPt 3%, 400+ tok/s speed, BF16 48.2 lane)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free (NVIDIA flagship open-weights)
- **Short description:** NVIDIA flagship open-weights hybrid Mamba-MoE for frontier reasoning and long-running agents; fast with low hallucination, served free on Zen/NVIDIA trial.
- **Provider / access:** NVIDIA via build.nvidia.com + HF weights; OpenCode Zen `opencode/nemotron-3-ultra-free` (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-06-04 release (NVIDIA technical blog); training data refreshed through 2025-09-30
- **IDs:** `opencode/nemotron-3-ultra-free` (Free trial ID exists on Zen)
- **Context window:** 1M (262K default serve) — verified via NVIDIA blog (RULER at 1M) + NIM docs
- **Modalities:** text in/out (beyond text unverified); reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18):** Free $0 Zen/NVIDIA trial tier
- **Architecture:** hybrid Mamba-Transformer MoE, 550B total / 55B active, NVFP4, LatentMoE, multi-token prediction; open weights

### Raw benchmarks found

> Compared against prior findings (2026-09-18, Overall 70): new verified evidence below — AA June 2026 launch article (Index 47.7 NVFP4 / 48.2 BF16, #1 US open weights; GDPval-AA 1378; AA-Omniscience non-hallucination 71%; CritPt 3%; 400+ tok/s on BlackBox; turn-budget TB2.1 Pareto analysis). Gaps closed: AA composite precision, Omniscience split, CritPt absolute, speed. Prior vendor-table GDPval 1448 superseded by AA-measured 1378.

Agent / tool use:

- GDPval-AA: **1378 Elo** (AA article, max-effort lane — supersedes filed 1448 vendor-blog figure; ~in line with DeepSeek V4 Flash; well above Nemotron 3 Super)
- Terminal-Bench 2.1: **56.4%** (build.nvidia card); **54% TB2.0** (NVIDIA blog table); AA turn-budget analysis: fastest across all turn caps (10/20/50/100), on the performance-vs-time Pareto frontier (pre-release BlackBox deployment)
- Tau3-Banking (Airline/Retail): **81.5% Airline / 86.4% Retail** (build.nvidia card)
- SWE Atlas Codebase QnA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87%** (build.nvidia card)
- HLE: **no verified public score found**
- LCR / MLCR: **65.4% LCR** (build.nvidia card); **95% RULER at 1M** (NVIDIA blog)
- CritPt: **3%** (AA article — same as Nemotron 3 Super; relatively lower frontier-physics lane; NEW, closes prior gap)
- Artificial Analysis Intelligence Index / BenchLM overall: **47.7 (NVFP4) / 48.2 (BF16)** (AA article, June 2026 — NEW, supersedes filed "38 / Elo 1378" conflation; #1 US open weights, ahead of Gemma 4 31B 39.2 and Nemotron 3 Super 36.0, behind Kimi K2.6 53.9; ~1M fewer output tokens than 3 Super on the Index)
- Omniscience Accuracy / Hallucination Rate: **AA-Omniscience non-hallucination 71%** (AA article — low propensity to answer when it doesn't know; NEW, closes prior gap)
- AA speed context (NEW): **400+ output tok/s** (pre-release BlackBox deployment — slightly faster than gpt-oss-120b at >4x the size; on the speed-vs-intelligence Pareto frontier)

Coding:

- SWE-bench Verified / SWE-Pro: **71.9% SWE (build.nvidia card)**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **RULER 95% at 1M context** (NVIDIA blog); LCR 65.4% measured

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau3 81–86% and GDPval-AA 1378 (AA-measured) show strong orchestration with Pareto-frontier TB2.1 speed; capped by TB mid-50s below coding leaders (unchanged — GDPval revision is lateral).
- **Reasoning: 78/100.** GPQA 87% plus AA Index 47.7 (#1 US open weights) and Omniscience non-hallucination 71% show strong open reasoning; capped by CritPt 3% and missing HLE numbers.
- **Context window: 97/100.** 1M verified with 95% RULER; capped slightly for 262K default serve vs full 1M serve (unchanged).
- **Multimodal: 20/100.** Text-only verified; small credit above floor for unconfirmed beyond-text claims.
- **Coding: 80/100.** SWE 71.9% is strong open-weights territory; capped below DeepSWE/TB frontier.
- **Cost efficiency: 100/100.** $0 Free Zen/NVIDIA trial tier.
- **Overall Score: 71/100.** Mean of the five non-cost dims (78+78+97+20+80)/5 = 70.6; best-fit open orchestration and fast long-agent pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-12
- Method: second-pass refresh of the 2026-09-18 report: fresh public internet research (AA June 2026 Nemotron 3 Ultra article — Index 47.7/48.2, GDPval 1378, Omniscience 71%, CritPt 3%, 400+ tok/s); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
