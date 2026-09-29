# Nemotron 3 Ultra Free — findings by Muse Spark 1.3 Contributor

- Source: NVIDIA/Nemotron 3 Ultra, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC); re-verified 2026-09-29 (UTC, user-signed-off re-research: NIM full-table backfill — Telecom 92.9/Banking 22.6/PinchBench 90/HLE 26.7/CritPt 3.1/SciCode 44.6/IFBench 81.7/Omni 24.1+78.7/SWE-Multi 67.7 — + AA Index 47.7-48.2 + paid-fallback pricing added; Tool 78 → 82, Reasoning 75 → 80, Coding 80 → 81, Overall 70 → 72)
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
- **Pricing (as of 2026-09-18):** Free $0 Zen/NVIDIA trial tier; paid fallback $0.50/$2.20 (OpenRouter; $0.63/$3.13 variant — re-verified 2026-09-29)
- **Architecture:** hybrid Mamba-Transformer MoE, 550B total / 55B active, NVFP4, LatentMoE, multi-token prediction; open weights

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1448 Elo** (NVIDIA blog table); **1378 Elo** (AA article variant — re-verified 2026-09-29); NIM percent-scale 46.7–47.9 (different metric — re-verified 2026-09-29)
- Terminal-Bench 2.1: **56.4%** (build.nvidia card); **54% TB2.0** (NVIDIA blog table)
- TauBench V3: **81.5% Airline / 86.4% Retail / 92.9% Telecom / 22.6% Banking** (NIM card BF16; avg 70.9 — Banking weak tail — re-verified 2026-09-29)
- PinchBench: **90.0%**; ProfBench (Search): **56.0%**; BrowseComp: **44.4%** (NIM card — re-verified 2026-09-29)
- SWE Atlas Codebase QnA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.0%** no-tools BF16 (**87.9%** NVFP4; 86.1–86.7 third-party variants — re-verified 2026-09-29)
- HLE: **26.7%** no-tools (NIM card; 37.4 third-party variant — re-verified 2026-09-29)
- LCR: **65.4%** (NIM card; 67 third-party variant); RULER 1M: **94.7%** (NIM card; filed 95% blog-variant retired — re-verified 2026-09-29)
- IFBench (prompt): **81.7%** (NIM card — re-verified 2026-09-29)
- CritPt: **3.1%** no-tools (NIM card — very low — re-verified 2026-09-29)
- Artificial Analysis Intelligence Index: **47.7 NVFP4 / 48.2 BF16** (AA launch measurement; filed 38 older-variant retired; 37.8 third-party variant — re-verified 2026-09-29); Agentic Index leadership + Coding Index 49.3 (AA/designforonline — re-verified 2026-09-29); BenchLM overall: **no verified public score found**
- Omniscience Accuracy: **24.1%** / Non-Hallucination: **78.7%** (NIM card — low-hallucination claim confirmed — re-verified 2026-09-29)

Coding:

- SWE-bench Verified: **71.9%** (NIM card BF16); SWE Multilingual: **67.7%** (NIM card — re-verified 2026-09-29); SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode (subtask): **44.6%** (NIM card — re-verified 2026-09-29)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **RULER 94.7% at 1M context** (NIM card); LCR 65.4% measured (re-verified 2026-09-29)

### Normalized scores (1–100)

- **Tool use: 82/100.** Tau V3 81–93% (Telecom 92.9) plus PinchBench 90.0% and GDPval ~1400 show strong orchestration; capped by TB mid-50s and Banking 22.6% tail.
- **Reasoning: 80/100.** GPQA 87% plus IFBench 81.7% and Index ~48 show strong reasoning; capped by HLE 26.7% and CritPt 3.1%.
- **Context window: 97/100.** 1M verified with 94.7% RULER; capped slightly for 262K default serve vs full 1M serve.
- **Multimodal: 20/100.** Text-only verified; small credit above floor for unconfirmed beyond-text claims.
- **Coding: 81/100.** SWE-V 71.9% plus SWE-Multilingual 67.7% and SciCode-subtask 44.6% show strong open-weights territory; capped below DeepSWE/TB frontier.
- **Cost efficiency: 100/100.** $0 Free Zen/NVIDIA trial tier.
- **Overall Score: 72/100.** Mean of the five non-cost dims (82+80+97+20+81)/5 = 72.0 → 72; best-fit open orchestration and fast long-agent pick — now evidence-backed.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (NVIDIA technical blog, build.nvidia card, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
