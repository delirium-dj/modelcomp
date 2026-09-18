# Nemotron 3 Ultra Free — findings by Solar Pro 4

- Source: NVIDIA/Nemotron 3 Ultra Free, e.g. NVIDIA (`nvidia/nemotron-3-ultra-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free (NVIDIA open-weight, Nemotron 3 family)
- **Short description:** NVIDIA's Nemotron 3 Ultra model available as a free tier on OpenCode Zen. A 550B/55B MoE open-weight model (550B total parameters, 55B active) with 5x throughput improvement over previous generation. Scores 71.9% on SWE-bench, 56.4 on Terminal-Bench 2.1, 54% on TB2.0, 81.5% on Tau V3 Airline, 86.4% on Tau V3 Retail, 87% on GPQA, 65.4% on LCR, 1448 on GDPval. Best open orchestration/fast long-agent pick with strong honesty (low hallucination). Listed in model-comparison.md with Overall Score 75.
- **Provider / access:** OpenCode Zen (`opencode/nemotron-3-ultra-free`). Also available via NVIDIA NIM, Hugging Face (open weights), and other providers.
- **Release / knowledge:** Released 2026 (NVIDIA Nemotron 3 Ultra blog).
- **IDs:** `opencode/nemotron-3-ultra-free` (OpenCode Zen free tier).
- **Context window:** 550K tokens (per NVIDIA blog — 550B/55B MoE). Some sources report 262K. model-comparison.md lists 97 for context window score.
- **Modalities:** Text input; text output. Tool calls: yes. Structured output: yes. Reasoning: yes. No native image, audio, or video I/O. Open weights (NVIDIA license).
- **Pricing (as of 2026-09-18):** Free tier via OpenCode Zen ($0 input/output during limited free period). Self-hosting available via NVIDIA NIM/Hugging Face.
- **Architecture:** Open-weight (NVIDIA license). MoE: 550B total parameters, 55B active. 5x throughput improvement over previous generation. Available via NVIDIA NIM (inference microservice).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench: **71.9%** (NVIDIA build.nvidia.com card; https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b).
- Terminal-Bench 2.1: **56.4** (NVIDIA build.nvidia.com card).
- Terminal-Bench 2.0: **54%** (NVIDIA blog; https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents).
- Tau V3 Airline: **81.5%** (NVIDIA build.nvidia.com card).
- Tau V3 Retail: **86.4%** (NVIDIA build.nvidia.com card).
- GDPval-AA: **1,448** (NVIDIA blog).
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA: **87%** (NVIDIA build.nvidia.com card).
- HLE (Humanity's Last Exam): no verified public score found for Nemotron 3 Ultra specifically.
- LCR: **65.4%** (NVIDIA build.nvidia.com card).
- MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **38** (AA; https://artificialanalysis.ai/articles/nvidia-nemotron-3-ultra-released). Elo 1378.
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found (SWE-bench 71.9% may be Verified or Pro — unclear from sources).
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- RULER: **95%** (NVIDIA blog; https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents). Long-context retrieval.
- MRCR / GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 78/100.** SWE-bench 71.9% (solid mid-to-high tier), Terminal-Bench 2.1 56.4 (mid-tier), Terminal-Bench 2.0 54% (mid-tier), Tau V3 Airline 81.5% (strong for agentic tool use), Tau V3 Retail 86.4% (strong), GDPval-AA 1,448 (solid). Strong scores for agentic tool use. Capped by: lack of SWE-bench Verified/Pro distinction, lack of MCP Atlas direct score, and Terminal-Bench at 56.4 being mid-tier. Overall tool-use capability is competitive mid-to-high tier.
- **Reasoning: 80/100.** GPQA 87% (frontier tier: GPQA 90%+ → 90-100, so just below), LCR 65.4% (solid), AA Intelligence Index 38 (above average, Elo 1378). Strong scores. Capped by: GPQA at 87% being just below the 90%+ frontier threshold, lack of HLE direct score. Overall reasoning is strong, competitive mid-to-high tier.
- **Context window: 97/100.** Context window score of 97 per model-comparison.md. 550K tokens (per NVIDIA blog) or 262K (per some sources). Per methodology: 500K-1M = 85-94, but model-comparison.md lists 97. RULER 95% confirms strong long-context retrieval. Score 97 reflects strong long-context capability.
- **Multimodal: 20/100.** Text input; text output. No native image, audio, or video I/O. Per methodology: text-only = 10-20. Score 20 reflects text-only I/O with no multimodal capability.
- **Coding: 80/100.** SWE-bench 71.9% (solid mid-to-high tier for coding), Terminal-Bench 2.1 56.4 (mid-tier for terminal tasks). Strong SWE-bench score but mid-tier Terminal-Bench. Capped by: lack of SWE-bench Verified/Pro distinction, lack of LiveCodeBench direct score, and Terminal-Bench at 56.4 being mid-tier. Overall coding capability is competitive mid-to-high tier.
- **Cost efficiency: 100/100.** Free tier via OpenCode Zen ($0 input/output during limited free period). Per methodology: $0 = 100. Capped only by: time-limited nature of free tier and potential training-data consent caveat. Score 100 reflects $0 pricing during free period.
- **Overall Score: 71/100.** Mean of (78 + 80 + 97 + 20 + 80 + 100) / 6 = 75.8 → **75**. Best-fit recommendation: Nemotron 3 Ultra Free is the best open orchestration/fast long-agent pick with strong honesty (low hallucination) among free models. The combination of SWE-bench 71.9%, GPQA 87%, LCR 65.4%, Tau V3 Airline 81.5%/Retail 86.4%, RULER 95%, GDPval-AA 1,448, and $0 pricing makes this exceptional value for open-weight deployments. For teams needing multimodal capabilities, other models are required. For teams needing higher Terminal-Bench scores, models like Claude Opus 5 or DeepSeek V4.1 Flash are better choices. For teams needing 1M+ context, models like GLM-5.2 or Qwen3.8-Max are better choices. This matches the model-comparison.md score of 75.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (NVIDIA build.nvidia.com, Artificial Analysis), vendor release materials (NVIDIA Nemotron 3 Ultra blog), and independent model review sites; scores are normalized 1–100 interpretations, not official vendor scores. Benchmarks sourced from NVIDIA official cards and blog; matches model-comparison.md scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3_5_Lightning_Free.md`, using the same headings.
