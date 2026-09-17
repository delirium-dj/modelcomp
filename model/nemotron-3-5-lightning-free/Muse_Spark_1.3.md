# Nemotron 3.5 Lightning Free — findings by Muse Spark 1.3

- Source: Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** Compact open 30B MoE (3B active) for high-volume, low-latency execution layer in always-on agents (OpenClaw/Hermes/NemoClaw). Not a frontier reasoner — pairs with Ultra/frontier planners via NeMo Switchyard.
- **Provider / access:** OpenCode Zen (`opencode/nemotron-3.5-lightning-free`), NVIDIA NIM `nvidia/nemotron-3.5-lightning-30b-a3b` (BF16/NVFP4), Ollama `nemotron-3.5-lightning:30b-a3b-q8_0` (35GB).
- **Release:** 2026-08-11 (NVIDIA). OpenMDW-1.1, Mamba-2 + MoE + MTP + DFlash/DSpark, reasoning parser `nemotron_v3`.
- **Context window:** **262,144 native** (NIM default `--max-model-len`); some trackers list 1M extended. Max out not separately published; use 262K for scoring.
- **Modalities:** **text-only**, reasoning-capable (NVIDIA docs).
- **Pricing:** Free on Zen/NVIDIA trial (same trial privacy as Ultra). Native claim: 4× throughput, 30% faster task completion vs peers; 10k tasks 30% faster than Qwen3.6-35B at similar accuracy. Paid ref $0.05/$0.20 (llm-stats).

### Raw benchmarks found (BF16 / NVFP4)

- Terminal-Bench 2.1: **24.58% / 23.46%**; Terminal-Bench 2.0: **23.5%** (BenchLM lane)
- Tau3 Banking: **9.28% / 9.48%** (NVIDIA); llm-stats **0.093** — consistent
- GDPval-AA v2: **832 / 865 Elo**
- Claw-Eval: **no verified public score found**.
- PinchBench **85.37% / 83.43%**; BrowseComp 36.97%/36.81%
- Reasoning: MMLU Pro **81.94%/81.62%**; Omni 17.5/16.63; GPQA **75.44%/75.57%**; HLE 11.72%/10.47%; SciCode 32.6%/31.38%; IFBench 71.88%/72.88%; LCR 52.0%/49.19%
- Coding: SWE Verified **51.56%/52.80%**; Multilingual 39.33%/36.47%
- BenchLM lane: Agentic 27.1 (#142/151), Coding 31.5 (#166/183) — small-model lane, not frontier lane.

### Normalized scores (1–100)

- **Tool use: 50/100.** Pinch 85% good for size, but TB ~24% and Tau3 ~9% are execution-tier, not orchestration-tier.
- **Reasoning: 62/100.** GPQA 75% + MMLU Pro 82% strong for 3B-active; HLE 11.7%/LCR 52% cap higher.
- **Context window: 72/100.** 262K tier.
- **Multimodal: 15/100.** Text-only.
- **Coding: 58/100.** SWE ~52% solid for size; TB/SciCode low vs mid-frontier.
- **Cost efficiency: 100/100.** $0 free; fastest/cheapest execution per task by design.
- **Overall Score: 60/100.** Use as routed executor (Switchyard) + local single-GPU, not primary planner/coder.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
