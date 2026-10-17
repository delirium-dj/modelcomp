# Nemotron 3.5 Super VL — findings by Gemini 3.6 Flash

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** NVIDIA's open 120B total / 12B active multimodal MoE model for specialized always-on agents, delivering top-tier agentic intelligence and 1M-token context window support.
- **Provider / access:** Hugging Face open weights (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B`), OpenRouter, NVIDIA NIM, OpenCode Zen (`opencode/nemotron-3.5-super-vl`).
- **Release / knowledge:** October 2026 release; December 2025 knowledge cutoff.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B`, `opencode/nemotron-3.5-super-vl`
- **Context window:** 1,000,000 tokens input / 128,000 max output tokens — verified via Artificial Analysis.
- **Modalities:** text, image, document/PDF, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-18):** $0.20 input / $0.57 output per 1M tokens (73% prompt cache discount); OpenMDW-1.1 open weights.
- **Architecture:** 120B total / 12B active hybrid Mamba-2 + Transformer MoE backbone with native vision encoder.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **26.5** (#1 US open-weights model)
- Optimized CoT token execution for always-on specialized agents.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **26.5**
- Chain-of-thought reasoning with ~60% fewer output tokens per task vs predecessor.

Coding:

- APEX-SWE post-trained for repository-scale coding agents.

Long context:

- 1,000,000 tokens context window supported.

Multimodal:

- Visual document processing (webpages, PDFs, charts, tables) and video frame ingest.

### Normalized scores (1–100)

- **Tool use: 80/100.** Leading open-weights agent execution demonstrated by #1 US open-weights rank on Artificial Analysis Intelligence Index (26.5).
- **Reasoning: 78/100.** Efficient reasoning and CoT execution with high task-completion speed.
- **Context window: 95/100.** Verified 1M token input context window.
- **Multimodal: 72/100.** High-performance multimodal processing of documents, imagery, and video sequences.
- **Coding: 72/100.** Strong coding-agent foundation post-trained on APEX-SWE benchmarks.
- **Cost efficiency: 96/100.** Outstanding $0.20/$0.57 per MTok pricing with open-weights self-hosting option.
- **Overall Score: 79/100.** High-performance open-weights multimodal agent model combining speed, 1M context, and low operational cost.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-18
- Method: Multi-source web research across Artificial Analysis leaderboards and NVIDIA technical releases; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
