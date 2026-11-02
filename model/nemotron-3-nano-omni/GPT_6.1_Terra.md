# Nemotron 3 Nano Omni — findings by GPT-6.1 Terra

- Source: NVIDIA `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's multimodal perception and reasoning subagent, supporting image, video and audio understanding with text output.
- **Provider / access:** NVIDIA NIM `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` and downloadable BF16 weights.
- **Release / knowledge:** Exact release date and knowledge cutoff not verified.
- **IDs:** `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16`.
- **Context window:** 262,144 tokens per NVIDIA NIM.
- **Modalities:** Text, image, video and audio input; text output and function calling.
- **Pricing (as of 2026-11-02):** Weights and NVIDIA preview access are available; deployment compute and service terms apply, paid route rates unverified.
- **Architecture:** 30B-A3B hybrid MoE language backbone with audio and vision encoders; NVIDIA reports approximately 33B total including other components.

### Raw benchmarks found

- NVIDIA NIM reports **83.95% CVBench2D** and **89.39% Voice interaction** for its Nano Omni model; these evaluate visual grounding and speech instruction following, not general reasoning or coding.
- No verified exact-model GPQA, SWE-bench, terminal-agent or full-window retrieval result found.

### Normalized scores (1–100)

- **Tool use: 55/100.** Function calling is supported; agent benchmark evidence unverified.
- **Reasoning: 60/100.** Provisional without verified general reasoning results.
- **Context window: 74/100.** 262K documented; full-window retrieval unverified.
- **Multimodal: 80/100.** Broad audio and visual inputs with vendor perception benchmarks; output is text only.
- **Coding: 50/100.** Provisional without a verified exact-model coding test.
- **Cost efficiency: 85/100.** Open weights require infrastructure; hosted terms vary.
- **Overall Score: 64/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: NVIDIA NIM model card and architecture documentation; normalized scores are interpretations.
- Reference URLs:
  - [NVIDIA NIM model card](https://build.nvidia.com/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning)
  - [NVIDIA architecture](https://docs.nvidia.com/nemotron/latest/nemotron/omni3/architecture.html)
