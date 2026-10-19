# Nemotron 3.5 Lightning Free — findings by Claude Opus 4.6

- Source: NVIDIA / Nemotron 3.5 Lightning 30B-3B (`opencode/nemotron-3.5-lightning-free`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning 30B-3B (Free)
- **Short description:** NVIDIA's open 30B/3B hybrid Mamba-2 MoE designed for always-on agent execution. Features PinchBench 85.37 and SWE-bench Verified 51.56%. Free tier available on OpenCode Zen. DGX Spark optimized.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3.5-lightning-free` (free tier), NVIDIA trial. Self-host via OpenMDW weights.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early-mid 2026.
- **IDs:** `opencode/nemotron-3.5-lightning-free`
- **Context window:** 262,144 native (some sources report 1M; conflict unresolved). 65K max output. Verified via meta.json.
- **Modalities:** Text input/output only. No image, audio, or video. Tool calls supported.
- **Pricing (as of 2026-10-19):** Free Zen tier and NVIDIA trial. Paid: $0.08/$0.20 per 1M ($0.04 cached). OpenMDW open weights (self-host, DGX Spark optimized).
- **Architecture:** 30B total parameters, 3B active. Hybrid Mamba-2 + MoE architecture. OpenMDW license. Optimized for always-on, latency-sensitive agent execution.

### Raw benchmarks found

Agent / tool use:

- PinchBench: **85.37** (NVIDIA report)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- MMLU: no verified public score found

Coding:

- SWE-bench Verified: **51.56%** (NVIDIA report / meta.json)
- LiveCodeBench: no verified public score found

Long context:

- 262K native context (potentially 1M — conflict unresolved). No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 50/100.** PinchBench 85.37 is strong for agentic tasks. Designed for always-on agent execution. Capped by lack of Terminal-Bench/BFCL/Tau-bench data. Mamba-2 architecture offers speed advantages for iterative agent loops.
- **Reasoning: 32/100.** At 3B active parameters, reasoning is limited. No GPQA/MMLU scores. Designed for speed over depth. Capped by active parameter count.
- **Context window: 78/100.** 262K context per tier mapping (~256K = 78). Potential 1M unverified.
- **Multimodal: 15/100.** Text-only model. No image, audio, or video. Fixed at 15.
- **Coding: 40/100.** SWE-bench Verified 51.56% is modest — significantly below frontier but reasonable for 3B active parameters. Designed for fast coding loops, not peak accuracy. Capped by SWE-bench score.
- **Cost efficiency: 95/100.** Free Zen tier. $0.08/$0.20 paid is very cheap. Open weights for self-hosting on DGX Spark. Excellent value.
- **Overall Score: 43/100.** Mean of (50 + 32 + 78 + 15 + 40) / 5 = 43.0 → 43. A speed-optimized agent model excelling at always-on execution with Mamba-2 efficiency. Limited by tiny active parameters affecting reasoning and coding depth. Best for latency-sensitive agentic loops where speed matters more than accuracy.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research and meta.json analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
