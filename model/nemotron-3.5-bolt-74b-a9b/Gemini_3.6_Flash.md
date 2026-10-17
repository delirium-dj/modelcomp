# Nemotron 3.5 Bolt 74B-A9B — findings by Gemini 3.6 Flash

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B
- **Short description:** NVIDIA's local agentic vision-language model featuring a 74B total / 9B active hybrid Mamba-2 MoE architecture compressed to execute in 24GB VRAM for on-device agent execution.
- **Provider / access:** Hugging Face open weights (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`), NVIDIA NIM microservice, vLLM / SGLang local serving.
- **Release / knowledge:** October 2026 release; May 2026 knowledge cutoff.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`
- **Context window:** 262,144 tokens input / output shared window — verified via NVIDIA model card.
- **Modalities:** text, image, video in; text out; reasoning yes (`enable_thinking` toggle); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-18):** Open weights (OpenMDW-1.1 license) — $0/token for local execution on 24GB GPU.
- **Architecture:** 74B total / 9B active hybrid LatentMoE (Mamba-2 + Transformer MoE) with 2-bit quantization-aware distillation.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **66.75%**
- PinchBench: **87.82%**
- MCP-Atlas: **52.20%**
- Terminal-Bench 2.1: **50.98%**
- WebArena: **50.86%**
- Tau3 Banking: **17.01%**

Reasoning / knowledge:

- GPQA Diamond: **86.43%**
- AA-LCR: **64.06%**
- HLE (no tools): **25.30%**
- Artificial Analysis Intelligence Index: **21.4**

Coding:

- PinchBench (coding tasks): **87.82%**
- SciCode: **41.02%**

Long context:

- 256K tokens context window; AA-LCR 64.06% long-context reasoning retention.

Multimodal:

- Native C-RADIO v4-H vision encoder supporting high-resolution image and multi-frame video input.

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong on-device tool execution backed by 66.75% on BrowseComp, 87.82% on PinchBench, and 50.98% on Terminal-Bench 2.1.
- **Reasoning: 75/100.** High-tier local reasoning demonstrated by 86.43% on GPQA Diamond and 25.30% on HLE without tools.
- **Context window: 78/100.** Verified 256K token context window.
- **Multimodal: 80/100.** Omnimodal input ingest handling text, image, and video frame sequences.
- **Coding: 72/100.** Capable local coding and technical problem solving with 41.02% on SciCode.
- **Cost efficiency: 100/100.** $0/token open weights running locally in 24GB VRAM.
- **Overall Score: 75/100.** Leading local open-weight model for on-device agent execution and efficient multimodal reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-18
- Method: Multi-source web research across NVIDIA release documentation, Hugging Face model cards, and Artificial Analysis evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
