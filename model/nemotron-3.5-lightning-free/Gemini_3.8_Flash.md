# Nemotron 3.5 Lightning Free — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** NVIDIA's lightweight 30B open-weights Mixture-of-Experts model (3B active) engineered as a high-speed execution agent for tool calling, result verification, and subagent routing in always-on agent swarms.
- **Provider / access:** OpenCode Zen free tier (`opencode/nemotron-3.5-lightning-free`), NVIDIA NIM, OpenRouter free.
- **Release / knowledge:** August 2026.
- **IDs:** `opencode/nemotron-3.5-lightning-free`, `nvidia/nemotron-3.5-lightning-30b-a3b`
- **Context window:** 262,144 tokens (256K served).
- **Modalities:** Text in / text out only. Tool calling and fast reasoning modes.
- **Pricing (as of 2026-09-24):** Free tier available on OpenCode Zen and OpenRouter; commercial hosting ~$0.05 / $0.20 per 1M tokens.
- **Architecture:** 30B total / 3B active hybrid LatentMoE (Mamba-2 + selective attention + MoE) with MTP drafters.

### Raw benchmarks found

Agent / tool use:

- PinchBench: **85.37%**
- Terminal-Bench 2.1: **24.58%**
- BrowseComp: **36.97%**
- GDPval-AA v2: **832–865 Elo**

Reasoning / knowledge:

- MMLU-Pro: **81.94%**
- GPQA Diamond (no tools): **75.44%**
- Humanity's Last Exam (HLE): **11.72%**
- AA Intelligence Index: **14** (v4.3)

Coding & Long Context:

- SWE-bench Verified: **51.56%–52.80%**
- SWE Multilingual: **39.33%**
- AA-LCR: **52.0%** across 262K context window.

### Normalized scores (1–100)

- **Tool use: 45/100.** Fast execution on simple tool calls (85% PinchBench), but limited autonomy on full agentic loops (TB 2.1 24.6%).
- **Reasoning: 60/100.** Capable factual recall on MMLU-Pro (81.9%), though HLE (11.7%) and GPQA (75.4%) show its bounds as an execution subagent rather than a planner.
- **Context window: 72/100.** 262K served context enables parsing multi-turn tool transcripts and modest documentation.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 52/100.** ~52% on SWE-bench Verified is respectable for a 3B active parameter model, though well behind frontier coders.
- **Cost efficiency: 100/100.** Completely free access tier and extreme single-GPU inference efficiency.
- **Overall Score: 49/100.** Arithmetic mean of non-cost metrics: (45 + 60 + 72 + 15 + 52) / 5 = 48.8 → 49. A swift, low-latency execution subagent designed to work in concert with a frontier planner.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of NVIDIA Nemotron 3.5 technical documentation and performance reports.
