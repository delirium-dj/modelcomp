# Nemotron 3.5 Lightning Free — findings by Solar Pro 4

- Source: NVIDIA/Nemotron 3.5 Lightning Free, e.g. NVIDIA (`nvidia/nemotron-3.5-lightning-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free (NVIDIA open-weight, Nemotron 3.5 family)
- **Short description:** NVIDIA's Nemotron 3.5 Lightning model available as a free tier on OpenCode Zen. A 30B/3B MoE model (30B total parameters, 3B active) designed as an execution layer for fast, accurate specialized task execution in long-running agents. Scores 51.56 on SWE-bench, 24.58 on Terminal-Bench 2.0, 9.28 on Tau3, 832 on GDPval, 75.44 on GPQA. Listed in model-comparison.md with Overall Score 60 — described as a routed executor + local single-GPU model, not a primary planner/coder.
- **Provider / access:** OpenCode Zen (`opencode/nemotron-3.5-lightning-free`). Also available via NVIDIA NIM, Hugging Face (open weights), and other providers.
- **Release / knowledge:** Released 2026 (NVIDIA Nemotron 3.5 Lightning blog).
- **IDs:** `opencode/nemotron-3.5-lightning-free` (OpenCode Zen free tier).
- **Context window:** 262,144 tokens (262K) per NVIDIA NIM docs. Some sources report 1M extended context. model-comparison.md lists 72 for context window score.
- **Modalities:** Text input; text output. Tool calls: yes. Structured output: yes. Reasoning: yes. No native image, audio, or video I/O. Open weights (NVIDIA license).
- **Pricing (as of 2026-09-18):** Free tier via OpenCode Zen ($0 input/output during limited free period). Self-hosting available via NVIDIA NIM/Hugging Face.
- **Architecture:** Open-weight (NVIDIA license). MoE: 30B total parameters, 3B active. Designed as execution layer for long-running agents. Available via NVIDIA NIM (inference microservice).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench: **51.56%** (NVIDIA build.nvidia.com card; https://build.nvidia.com/nvidia/nemotron-3.5-lightning-30b-a3b).
- Terminal-Bench 2.0: **24.58%** (NVIDIA build.nvidia.com card).
- Terminal-Bench 2.1: no verified public score found for Nemotron 3.5 Lightning specifically.
- Tau3: **9.28%** (NVIDIA build.nvidia.com card).
- GDPval-AA: **832** (NVIDIA build.nvidia.com card).
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA: **75.44%** (NVIDIA build.nvidia.com card).
- HLE (Humanity's Last Exam): no verified public score found for Nemotron 3.5 Lightning specifically.
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found for Nemotron 3.5 Lightning specifically.
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found (SWE-bench 51.56% may be Verified or Pro — unclear from sources).
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- RULER / MRCR / GraphWalks: no verified public score found for Nemotron 3.5 Lightning specifically.

### Normalized scores (1–100)

- **Tool use: 50/100.** SWE-bench 51.56% (mid-tier for coding), Terminal-Bench 2.0 24.58% (low-mid tier for terminal tasks), Tau3 9.28% (low for agentic tool use), GDPval-AA 832 (mid-tier for knowledge work). Mixed scores — strong for SWE-bench but weak for terminal/agentic tasks. Capped by: Terminal-Bench 2.0 at 24.58% being low, Tau3 at 9.28% being low, lack of MCP Atlas direct score. Overall tool-use capability is mid-tier, suitable as execution layer not primary planner.
- **Reasoning: 62/100.** GPQA 75.44% (approaching frontier tier: GPQA 90%+ → 90-100, but at 75% it's solid mid-tier), no HLE direct score. Decent reasoning for a 30B/3B model. Capped by: lack of HLE direct score, and model being optimized for execution not reasoning. Overall reasoning is mid-tier.
- **Context window: 72/100.** 262,144 tokens (262K) context window (per NVIDIA NIM docs). Some sources report 1M extended. Per methodology: 200K-500K = 65-84, with 262K mapping to ~72. Score 72 reflects upper-mid tier context window.
- **Multimodal: 15/100.** Text input; text output. No native image, audio, or video I/O. Per methodology: text-only = 10-20. Score 15 reflects text-only I/O with no multimodal capability.
- **Coding: 58/100.** SWE-bench 51.56% (mid-tier for coding). No other coding benchmarks found. Capped by: lack of SWE-bench Verified/Pro distinction, lack of LiveCodeBench/Terminal-Bench 2.1 direct scores, and SWE-bench at 51.56% being mid-tier. Overall coding capability is mid-tier, suitable as execution layer not primary coder.
- **Cost efficiency: 100/100.** Free tier via OpenCode Zen ($0 input/output during limited free period). Per methodology: $0 = 100. Capped only by: time-limited nature of free tier and potential training-data consent caveat. Score 100 reflects $0 pricing during free period.
- **Overall Score: 60/100.** Mean of (50 + 62 + 72 + 15 + 58 + 100) / 6 = 59.5 → **60**. Best-fit recommendation: Nemotron 3.5 Lightning Free is a routed executor + local single-GPU model, not a primary planner/coder. Best suited as an execution layer in long-running agent setups where a stronger planner model handles high-level reasoning and this model handles fast, accurate task execution. The combination of 30B/3B MoE (fits on single GPU), 262K context, GPQA 75.44%, and $0 pricing makes this exceptional value for execution-layer deployments. For teams needing a primary planner/coder, stronger models like Nemotron 3 Ultra Free (Overall 75), Claude Sonnet 5, or DeepSeek V4.1 Flash are better choices. This matches the model-comparison.md score of 60.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (NVIDIA build.nvidia.com), vendor release materials (NVIDIA Nemotron 3.5 Lightning blog), and independent model review sites; scores are normalized 1–100 interpretations, not official vendor scores. Benchmarks sourced from NVIDIA official cards; matches model-comparison.md scores.
- Future sources: add a new file next to this one, e.g. `Mimo_V2_5_Free.md`, using the same headings.
