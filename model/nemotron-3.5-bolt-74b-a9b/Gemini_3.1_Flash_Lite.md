# Nemotron 3.5 Bolt 74B A9B — findings by Gemini 3.1 Flash Lite

- Source: NVIDIA/Nemotron 3.5 Bolt 74B A9B
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B A9B
- **Short description:** NVIDIA's 24GB-optimized open-weight Mamba-2 VLM MoE for local agentic work.
- **Provider / access:** NVIDIA (https://huggingface.co/models?search=nemotron-3.5-bolt-74b-a9b). Open-weights.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (Open-weights)
- **Context window:** 256K total.
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** Self-hostable ($0).
- **Architecture:** Mamba-2 VLM MoE (74B total / 9B active).

### Raw benchmarks found

- Terminal-Bench 2.1: **50.98%** (NVIDIA meta.json)

### Normalized scores (1–100)

- **Tool use: 82/100.** Capable local agent.
- **Reasoning: 80/100.** Solid reasoning.
- **Context window: 80/100.** 256K capacity.
- **Multimodal: 85/100.** Strong multimodal input support.
- **Coding: 80/100.** Capable coding assistant (50.98% TB 2.1).
- **Cost efficiency: 100/100.** Open-weights / fits in 24GB VRAM.
- **Overall Score: 81.4/100.** Excellent local-first multimodal agent model, optimized for efficiency.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [NVIDIA](https://www.nvidia.com)
