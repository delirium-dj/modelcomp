# Nemotron 3.5 Lightning Free — findings by GLM 5.3

- Source: NVIDIA (`opencode/nemotron-3.5-lightning-free`, base `nvidia/nemotron-3.5-lightning`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** The free OpenCode Zen tier of NVIDIA's Nemotron 3.5 Lightning (30B/3B-active MoE hybrid, released 2026-08-11) — a "fastest 30B A3B" execution-layer model for specialized agentic tasks and sub-agent workhorse deployments. Top use case: routed executor inside long-running agent systems, including local single-GPU use.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3.5-lightning-free` (OpenAI-compatible Chat Completions); open weights `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4` on Hugging Face/build.nvidia.com (OpenMDW-1.1).
- **Release / knowledge:** 2026-08-11 (build.nvidia.com card); pre-training data cutoff September 2025, post-training cutoff May 2026 (vendor card).
- **IDs:** `opencode/nemotron-3.5-lightning-free` (limited-time free tier on Zen).
- **Context window:** up to 1M tokens (official build.nvidia.com model card); the Zen free-tier serving cap was not separately verified in this research — earlier registry/NIM docs listed 262K.
- **Modalities:** text in / text out (vendor card "Input: Text"); reasoning yes (interleaved `reasoning_content` field; no effort options on the free tier); tool calls yes (multi-environment RL tool use per the card); structured outputs yes (training stages include structured-output data).
- **Pricing (as of 2026-09-25):** Free — $0 in / $0 out / $0 cached read (models.dev + Zen pricing table). Caveat: NVIDIA free endpoints are trial-use — sessions logged for security and product improvement; do not submit confidential data (Zen privacy note). Open weights give a $0 self-host path (single-GPU class, NVFP4/W4A16).
- **Architecture:** MoE hybrid — interleaved Mamba-2 + MoE + select attention layers; 30B total / 3B active; Multi-Token Prediction (MTP) layers with speculative decoding; NVFP4 post-training quantization; 20T+ pre-training tokens; OpenMDW-1.1 license.

### Raw benchmarks found

(NVIDIA build.nvidia.com card, NVFP4 checkpoint; BF16 column generally equal or slightly higher)

Agent / tool use:

- Terminal-Bench 2.1: **23.46%** (vendor card; BF16 24.58%)
- τ³-bench (Banking): **9.48%** (vendor card; BF16 9.28%)
- GDPval-AA-V2: **865 Elo** (vendor card; BF16 832)
- PinchBench: **83.43%** (vendor card; BF16 85.37%)
- BrowseComp: **36.81%** (vendor card)
- IFBench (loose): **72.88%** (vendor card)
- Claw-Eval / Toolathlon / MCP-Atlas / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (no tools): **75.57%** (vendor card; BF16 75.44%)
- HLE (text-only, no tools): **10.47%** (vendor card; BF16 11.72% — very weak)
- AA-Omniscience: **16.63** (vendor card; BF16 17.50)
- MMLU Pro: **81.62** (vendor card; BF16 81.94)
- CritPt / LCR (AA-run) / AA Intelligence Index: **no verified public score found**

Coding:

- SWE-bench Verified: **52.80%** (vendor card; BF16 51.56%)
- SWE-bench Multilingual: **36.47%** (vendor card; BF16 39.33%)
- SciCode: **31.38%** (vendor card; BF16 32.60%)
- Terminal-Bench 2.1: **23.46%** (vendor card)
- LiveCodeBench / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- AA-LCR: **49.19%** (vendor card NVFP4; BF16 52.00%) — weak at length; window claimed up to 1M; no MRCR/RULER per-length table.

### Normalized scores (1–100)

- **Tool use: 45/100.** PinchBench 83.4% and IFBench 72.9% are good, but TB 2.1 23.5%, τ³-Banking 9.5% and GDPval 865 are near-floor — by design a routed executor, not a lead agent.
- **Reasoning: 48/100.** GPQA 75.6% is mid-band and MMLU-Pro 81.6% solid, but HLE 10.5% and SciCode 31.4% are weak; AA-Omniscience 16.6 is modest.
- **Context window: 88/100.** Up to 1M claimed on the official card (free-tier serving cap unverified) — large-window tier, but AA-LCR ~49–52% shows weak long-context retrieval, keeping it below the top of the band.
- **Multimodal: 15/100.** Text in/out only (per template: 15 if text-only).
- **Coding: 40/100.** SWE-bench Verified 52.8%, SWE-bench Multilingual 36.5%, TB 2.1 23.5% and SciCode 31.4% are all well below current standards — not a primary coder.
- **Cost efficiency: 100/100.** $0 in/out free tier with OpenMDW-1.1 open weights (single-GPU NVFP4 self-host) — flagged: NVIDIA trial endpoints log session data for improvement; not for confidential workloads.
- **Overall Score: 47/100.** Half-up mean of the five quality dims (45+48+88+15+40)/5 = 47.2 — a free, very fast execution-layer specialist for sub-agent pipelines; not a primary planner/coder, matching its vendor positioning.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (NVIDIA build.nvidia.com model card, models.dev Zen registry, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
