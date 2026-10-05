# Nemotron 3 Ultra Free — findings by GLM 5.3 Flash

- Source: NVIDIA (`opencode/nemotron-3-ultra-free`; native model Nemotron 3 Ultra 550B-A55B)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free (free tier of NVIDIA's Nemotron 3 Ultra, the 550B open orchestration model)
- **Short description:** NVIDIA's open frontier-reasoning/orchestration model: 550B/55B hybrid Mamba-Transformer MoE with 5× the throughput of comparable open models and up to 30% lower cost-to-task-completion on agent loops. Built for the "hard calls" in long-running agent systems — planning, synthesis, verification — while cheaper models execute routine steps. The 2026-10-05 enrichment pass added an independent LiveCodeBench reading.
- **Provider / access:** OpenCode Zen free tier (`opencode/nemotron-3-ultra-free`, Chat Completions; NVIDIA trial endpoints are trial-logged per repo catalog); NVIDIA NIM (build.nvidia.com) with NVFP4 on Hopper/Blackwell/Ampere; weights on Hugging Face for local deployment.
- **Release / knowledge:** released 2026-06-04 (NVIDIA technical blog). Knowledge cutoff: refreshed GitHub tokens through 2025-09-30.
- **IDs:** `opencode/nemotron-3-ultra-free` (Zen); NIM endpoint `nvidia/nemotron-3-ultra-550b-a55b`.
- **Context window:** 1,000,000 tokens native; **262K default serve** (repo catalog) — RULER results reported at 1M context length.
- **Modalities:** text in / text out (anything beyond text unverified). Works with 11 agent harnesses out of the box (BlackBox AI, Cline, CrewAI, Factory AI, Hermes Agent, Kilo Code, LangChain Deep Agents, OpenClaw, OpenCode, OpenHands, Pi).
- **Pricing (as of 2026-09-18):** **$0** on the evaluated free tier (Zen / NVIDIA trial); weight download is free for self-hosting.
- **Architecture:** 550B total / 55B active MoE; hybrid Mamba-Transformer; LatentMoE routing; multi-token prediction; Multi-Teacher On-Policy Distillation (10+ specialized teachers co-evolving with the student); NVFP4.

### Raw benchmarks found

Agent / tool use:

- PinchBench (agent productivity): **91%** — ties Kimi K2.6 (1T), above GLM 5.1 84% and Qwen3.5 89% (NVIDIA's own 2026-06-04 table)
- Terminal-Bench 2.0: **54%** (GLM 5.1 64, Kimi K2.6 67, Qwen3.5 53); Terminal-Bench 2.1: **56.4** (build.nvidia card)
- Tau2-V3: Airline **81.5** / Retail **86.4** (build.nvidia card)
- GDPval-AA: **1,448** (GLM 5.1 1594, Kimi 1508) (NVIDIA table)
- EnterpriseOps-Gym (long-horizon planning): **33%** (GLM 5.1 40, Kimi 29) (NVIDIA table)
- Efficiency: **5× throughput** vs comparable open models; **up to 30% lower cost-to-task-completion** (fewer total tokens and fewer tokens per turn on SWE-bench/TB2.0) (NVIDIA blog)

Reasoning / knowledge:

- GPQA Diamond: **87%** (build.nvidia card); IFBench: **82%** (NVIDIA table — beats GLM 5.1's 77)
- Artificial Analysis: II **38**, article Elo **1378** (AA, catalogued in `../../model-comparison.md`)

Coding:

- SWE-bench Verified: **71.9** (build.nvidia card)
- LiveCodeBench: **85.98%** — #3 among open-weight models (Vals AI independent run via the NVIDIA API, top_p 0.95; vals.ai leaderboard; Kilo.ai's OpenClaw run corroborates at 89.9% avg, #5/50 official models) — fills the gap the 2026-09-18 pass marked "no verified public score found"
- RULER at 1M: **95%** — leading accuracy claim (NVIDIA blog); AA-LCR: **65.4** (build.nvidia card)
- SciCode: no verified public score found

### Normalized scores (1–100)

- **Tool use: 82/100.** PinchBench 91 + Tau2-V3 Airline 81.5/Retail 86.4 + TB2.0 54 + GDPval 1448 — the open-weights orchestration specialist; Terminal-Bench 2.0 trails GLM-5.1/Kimi on raw terminal coding.
- **Reasoning: 78/100.** GPQA 87 + IFBench 82 (best-in-table) with AA Elo 1378 — strong reasoning positioning, capped by the 33% long-horizon planning score.
- **Context window: 97/100.** 1M native with RULER 95% and AA-LCR 65.4 measured; the 262K default serve cap keeps it off 100.
- **Multimodal: 20/100.** Text-only (beyond-text unverified).
- **Coding: 84/100.** The independent LiveCodeBench 85.98% (#3 open-weight, Vals AI) lifts the algorithmic-coding ceiling above the vendor-only SWE-V 71.9 + token-efficiency story; still not a SOTA agentic-coding package.
- **Cost efficiency: 100/100.** Evaluated $0 free tier (Zen/NVIDIA trial) plus free weights.
- **Overall Score: 72.2/100.** Five-dim mean per `RULES.md` (Cost excluded): (82 + 78 + 97 + 20 + 84) / 5 = 361/5 = 72.2. Best fit: the open fast long-agent orchestrator with strong honesty/low hallucination and now independently verified coding — pair with Lightning-class executors.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (2026-09-18 pass: NVIDIA's official 2026-06-04 technical blog with the four-model comparison table, distillation/training details and harness list, build.nvidia model-card rows and AA figures; 2026-10-05 approved enrichment pass: Vals AI LiveCodeBench leaderboard via vals.ai with Kilo.ai corroboration); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
