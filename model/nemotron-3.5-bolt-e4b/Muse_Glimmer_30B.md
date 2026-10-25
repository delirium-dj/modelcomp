# Nemotron 3.5 Bolt E4B — findings by Muse Glimmer 30B

- Source: NVIDIA / nemotron-3.5-bolt-e4b
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's ~4 GB-class edge SLM for fast conversational agents, post-trained from Gemma-4-E4B-it via multi-environment GRPO reinforcement learning. Optimized for intelligence-per-GB on-device voice assistants, interactive personas and embedded interfaces. Third and smallest member of the Nemotron 3.5 Bolt family.
- **Provider / access:** Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` Q4_K_M GGUF + `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16`; build.nvidia.com endpoint `nvidia/nemotron-3.5-bolt-e4b` trial API, L40S. OpenAI-compatible chat completions. No live OpenCode Zen route.
- **Release / knowledge:** GA 2026-10-23; model dates Dec 2025–May 2026; post-training data cutoff May 2026.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`, `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16`, `nvidia/nemotron-3.5-bolt-e4b` (build.nvidia.com). Curated `opencode/nemotron-3.5-bolt-e4b` is a placeholder with no live Zen ID.
- **Context window:** 64K in / 64K out verified by both official NVIDIA cards and build.nvidia.com. Conflict noted: some aggregators echo the Gemma-4-E4B base 131K window; the released model caps at 64K and RULER is evaluated at 64K.
- **Modalities:** Text in; text out. Reasoning via chat-template `enable_thinking` + runtime budget, `conversational_mode` toggle, function calling, structured outputs, asynchronous tool-calling pattern documented. Text-only per official cards; AA text+image claims attributed to the multimodal Gemma base.
- **Pricing (as of 2026-10-25):** OpenMDW-1.1 open weights, free self-host ~4 GB VRAM; build.nvidia.com trial API free. Apache 2.0 for the Gemma base.
- **Architecture:** 8B total / 4B effective parameters, Gemma-4-E4B architecture; GRPO RL across instruction-following, multi-step tool use, multi-turn conversation and structured output; 34-language post-training.

### Raw benchmarks found

> Sources: NVIDIA Hugging Face model cards for 4GB Q4_K_M and BF16, build.nvidia.com model card for `nemotron-3.5-bolt-e4b` (GA 2026-10-23), BenchLM tracking page updated 2026-10-25, and Hugging Face model page. Figures are NVIDIA NeMo Gym / NeMo Evaluator SDK. Surface conflicts between HF card and build.nvidia.com card are noted where they occur.

Agent / tool use:

- BFCL-v3: **67.31%** Q4 / **68.51%** HF BF16 / **71.33%** build BF16 — Hugging Face model card / build.nvidia.com; vs Gemma-4-E4B-it 66.29, Qwen3.5-4B 71.60
- ToolSandbox: **74.13%** Q4 / 68.77% HF BF16 / 61.11% build BF16 — surface conflict; vs Gemma base 43.37–65.43
- τ²-Bench: **52.32%** Q4 / 55.10% HF BF16 / **63.23%** build BF16 — vs Qwen3.5-4B 75.06–79.90
- When2Call Multi-Turn: **60.50%** Q4 — vs Qwen3.5-4B 37.85, Gemma 62.90
- RelyToolBench: **69.29%** Q4 / 63.16% HF BF16 / **70.58%** build BF16 — vs Qwen3.5-4B 38.34–43.35
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: see τ²-Bench above
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: **42.25%** AA-LCR (build BF16 table)
- CritPt: no verified public score found
- MultiChallenge: **55.60%** Q4 / 53.10% HF BF16 / **59.32%** build BF16 — vs Qwen3.5-4B 51.76
- RoleBench: **71.21%** Q4 — vs Gemma 60.51, Qwen3.5-4B 52.35
- RoleMRC: **79.12%** Q4
- EQ-Bench v3: **38.15%** Q4 / 39.40% HF BF16 / **54.05%** build BF16
- IHEval: **82.40%** Q4 / **86.04%** build BF16 — class-best in NVIDIA table
- AgentIF: **22.95%** Q4
- StructEval-T: **79.99%** Q4
- IFBench: **64.00%** Q4
- InverseIFEval: **45.26%** Q4
- SysBench: **67.22%** Q4
- Artificial Analysis Intelligence Index / BenchLM overall: not yet computed; BenchLM shows 21 displayable rows, unranked
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- RULER 64K: **85.76%** Q4 / 86.47–86.99% BF16 — vs Qwen3.5-4B 95.15
- LongMemEval: **69.92%** Q4
- LongBench v2 48K: **48.67%** Q4 — vs Qwen3.5-4B 59.93
- AA-LCR: 42.25% (build BF16)

### Normalized scores (1–100)

- **Tool use: 68/100.** ToolSandbox 74.13% Q4 and RelyToolBench 69.29% Q4 show strong small-model tool calling; BFCL-v3 67–71% and When2Call 60.5% support the profile. Capped by τ²-Bench 52–63% well under Qwen3.5-4B and surface-to-surface number conflicts across NVIDIA's own cards.
- **Reasoning: 55/100.** MultiChallenge 55.6% Q4, RoleBench 71.21% and RoleMRC 79.12% give mid-band instruction-following strength; IHEval 82.4% is a bright spot. Capped by AgentIF 22.95%, EQ-Bench 38.15% Q4, GaRAGe 40.73% and absence of GPQA/HLE/math rows; AA Intelligence Index not yet computed.
- **Context window: 48/100.** Verified 64K in/out with strong RULER 85.76% retrieval at the window. Top of the <100K tier but below 128K+ models; AA 131K claim is a base-model artifact and rejected for the release.
- **Multimodal: 15/100.** Text in / text out per both official cards. Reasoning, tool-calling and structured output supported; no image/video input in the released model.
- **Coding: 35/100.** No verified public coding benchmark found for this release despite SWE-adjacent RL in training disclosure. Score reflects absence of evidence, not measured weakness.
- **Cost efficiency: 100/100.** OpenMDW-1.1 open weights at ~4 GB self-host footprint plus free build.nvidia.com trial API; $0 on the evaluated tier.
- **Overall Score: 44/100.** Mean of five quality dims (68+55+48+15+35)/5 = 44.2 → 44. Best-fit: strongest published 4 GB-class tool-caller for on-device voice/persona agents; pick Qwen3.5-4B for deeper terminal agentic depth or long-context retrieval.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; official NVIDIA Hugging Face model cards for NVIDIA-Nemotron-3.5-Bolt-E4B-4GB and -BF16, build.nvidia.com model card for nemotron-3.5-bolt-e4b, BenchLM tracking page 2026-10-25. Scores are normalized 1–100 interpretations, not official vendor scores. Conflicting figures across NVIDIA's own surfaces are listed side by side.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
