# Nemotron 3 Ultra Free — findings by Space Bunny Alpha

- Source: NVIDIA / OpenCode Zen (`nvidia/nemotron-3-ultra-550b-a55b`; free tier)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra (Free tier)
- **Short description:** NVIDIA's open-weight hybrid Mamba-Transformer MoE for reasoning, coding, planning, tool calling, and long-running agents, accessed through a free Zen/NVIDIA route in this catalog.
- **Provider / access:** OpenCode Zen free tier `opencode/nemotron-3-ultra-free`; NVIDIA NIM `nvidia/nemotron-3-ultra-550b-a55b` with an OpenAI-compatible endpoint; weights `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B`.
- **Release / knowledge:** BenchLM lists 2026-06-04 as the release date. No reliable knowledge cutoff was shown in the reviewed official pages.
- **IDs:** `opencode/nemotron-3-ultra-free`; `nvidia/nemotron-3-ultra-550b-a55b`.
- **Context window:** 1M tokens (NVIDIA model page and BenchLM; BenchLM notes a 262K default serving configuration in some provider metadata). Exact maximum output was not sourced.
- **Modalities:** Text input/output; reasoning mode and tool calling supported. Image/audio/video input is not claimed.
- **Pricing (as of 2026-09-24):** Free Zen tier / NVIDIA free endpoint; self-hosting costs depend on hardware. The free route is an access tier, not a claim that production inference is unlimited.
- **Architecture:** Open-weight hybrid Mamba-Transformer MoE, approximately 550B total and 55B active parameters; license is not exposed by the fetched NVIDIA page.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.4%** (NVIDIA Nemotron 3 Ultra model-card snapshot via BenchLM)
- Terminal-Bench 2.1 (Vals AI): **50.9%** (BenchLM, Vals AI leaderboard; different harness)
- BrowseComp: **44.4%** (NVIDIA model-card snapshot via BenchLM)
- τ³-bench Tool-Agent-User: **70.9%** (NVIDIA model-card snapshot via BenchLM)
- PinchBench: **90.0%** (NVIDIA model-card snapshot via BenchLM)
- Toolathlon, GDPval-AA, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- HLE: **26.7%** with tools and **26.7%** without tools (NVIDIA model-card snapshot via BenchLM; rows kept separate)
- MMLU-Pro: **86.8%** (NVIDIA model-card snapshot); Vals AI run **85.8%**
- GPQA Graduate-Level: **87%**; GPQA-D: **87.0%** (NVIDIA model-card snapshot); Vals AI GPQA Diamond **86.1%**
- MMLU-ProX: **83%**; IFBench: **81.7%** (NVIDIA model-card snapshot)
- LCR/MLCR, hallucination metrics, and exact additional knowledge values: **no verified public exact value found**

Coding:

- SWE-bench Verified: **71.9%** (NVIDIA model-card snapshot via BenchLM)
- SWE-bench (Vals AI): **69.0%** (BenchLM, Vals AI leaderboard)
- LiveCodeBench v6: **89.0%** (NVIDIA model-card snapshot); Vals AI run **86.0%**
- SWE Multilingual: **67.7%** (NVIDIA model-card snapshot)
- SWE-bench Pro, DeepSWE, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- LongBench v2: **61.9%** (NVIDIA model-card snapshot via BenchLM)
- Native context: **1M tokens** (NVIDIA model page); no exact 1M retrieval score was found.

Sources consulted: [NVIDIA NIM Nemotron 3 Ultra model page](https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b) and [BenchLM Nemotron 3 Ultra](https://benchlm.ai/models/nemotron-3-ultra), accessed 2026-09-24. BenchLM identifies the exact rows as sourced from the NVIDIA Hugging Face model-card snapshot; provider-exact and Vals AI values are kept separate.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 56.4%, τ³-bench 70.9%, BrowseComp 44.4%, and PinchBench 90.0% provide solid tool evidence; missing GDPval, Toolathlon, and MCP rows cap the score.
- **Reasoning: 83/100.** MMLU-Pro 86.8%, GPQA 87%, IFBench 81.7%, and MMLU-ProX 83% are strong, while HLE 26.7% and CritPt 3.1% show meaningful limits.
- **Context window: 94/100.** The 1M context is verified and LongBench v2 61.9% supplies measured evidence, but no exact 1M retrieval test was found.
- **Multimodal: 15/100.** The reviewed official model page lists text input/output only; no image/audio/video capability is claimed.
- **Coding: 88/100.** SWE-bench Verified 71.9%, LiveCodeBench v6 89.0%, and Vals SWE 69.0% support high coding ability; SWE-Pro/DeepSWE/SciCode remain missing.
- **Cost efficiency: 100/100.** The tracked Zen/NVIDIA route is free; self-hosting hardware is not represented as a zero-cost production guarantee.
- **Overall Score: 72.8/100.** (84 + 83 + 94 + 15 + 88) / 5 = 72.8. Best fit: free open-weight coding agents with long context, where text-only operation and self-hosting flexibility are acceptable.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of NVIDIA's model page and BenchLM's NVIDIA-card evidence; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
