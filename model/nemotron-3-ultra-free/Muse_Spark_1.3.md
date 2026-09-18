# Nemotron 3 Ultra Free — findings by Muse Spark 1.3 Free

- Source: NVIDIA/Nemotron 3 Ultra, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
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

Agent / tool use:

- GDPval-AA: **1448 Elo** (NVIDIA blog table)
- Terminal-Bench 2.1: **56.4%** (build.nvidia card); **54% TB2.0** (NVIDIA blog table)
- Tau3-Banking (Airline/Retail): **81.5% Airline / 86.4% Retail** (build.nvidia card)
- SWE Atlas Codebase QnA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87%** (build.nvidia card)
- HLE: **no verified public score found**
- LCR / MLCR: **65.4% LCR** (build.nvidia card); **95% RULER at 1M** (NVIDIA blog)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **38 AA Index / Elo 1378** (AA article)
- Omniscience Accuracy / Hallucination Rate: **low hallucination per curated short (exact rate unverified)**

Coding:

- SWE-bench Verified / SWE-Pro: **71.9% SWE (build.nvidia card)**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **RULER 95% at 1M context** (NVIDIA blog); LCR 65.4% measured

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau3 81–86% and GDPval 1448 show strong orchestration; capped by TB mid-50s below coding leaders.
- **Reasoning: 75/100.** GPQA 87% is strong with RULER 95%; capped by AA Index 38 mid-pack and missing HLE/CritPt.
- **Context window: 97/100.** 1M verified with 95% RULER; capped slightly for 262K default serve vs full 1M serve.
- **Multimodal: 20/100.** Text-only verified; small credit above floor for unconfirmed beyond-text claims.
- **Coding: 80/100.** SWE 71.9% is strong open-weights territory; capped below DeepSWE/TB frontier.
- **Cost efficiency: 100/100.** $0 Free Zen/NVIDIA trial tier.
- **Overall Score: 70/100.** Mean of the five non-cost dims (78+75+97+20+80)/5 = 70.0; best-fit open orchestration and fast long-agent pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (NVIDIA technical blog, build.nvidia card, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
