# Qwen3.5-122B-A10B — findings by GPT 5.6 Luna

- Source: Qwen (`Qwen/Qwen3.5-122B-A10B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-122B-A10B
- **Short description:** An open-weight Qwen3.5 multimodal mixture-of-experts model with 122B total and 10B activated parameters. It targets reasoning, coding, agent use, and visual understanding.
- **Provider / access:** Hugging Face weights; the model card documents local Transformers, vLLM, SGLang, and Alibaba Cloud Model Studio-compatible API usage. Exact hosted availability and billing vary by provider.
- **Release / knowledge:** Exact release date and knowledge cutoff were not stated in the verified sources.
- **IDs:** `Qwen/Qwen3.5-122B-A10B`; the model card also documents the API model name `Qwen3.5-122B-A10B` for DashScope-compatible access.
- **Context window:** 262,144 tokens native; extensible to 1,010,000 with YaRN, according to the official model card.
- **Modalities:** Image-text-to-text model; the official card documents text, image, and video inputs, text output, reasoning mode, tool use through Qwen-Agent, and local OpenAI-compatible serving.
- **Pricing (as of 2026-10-23):** No verified public per-token price was found for this exact hosted ID. Open weights are available under Apache-2.0; self-hosting cost depends on hardware.
- **Architecture:** 122B total / 10B active MoE with 256 experts, 8 routed plus 1 shared active expert, a gated DeltaNet plus gated-attention hybrid, and a vision encoder. License: Apache-2.0.

### Raw benchmarks found

> The benchmark table below is from Qwen's official model card and compares the exact `Qwen3.5-122B-A10B` checkpoint. No third-party score was substituted when the exact model was not separately indexed.

Agent / tool use:

- BFCL-V4: **72.2%** (official Qwen model card; exact checkpoint)
- TAU2-Bench: **79.5%** (official Qwen model card; exact checkpoint)
- HLE with tool: **47.5%** (official Qwen model card; exact checkpoint)
- BrowseComp: **63.8%** (official Qwen model card; exact checkpoint)
- DeepPlanning: **24.1%** (official Qwen model card; exact checkpoint)

Reasoning / knowledge:

- MMLU-Pro: **86.7%** (official Qwen model card)
- GPQA Diamond: **86.6%** (official Qwen model card)
- HLE with CoT: **25.3%** (official Qwen model card)
- SuperGPQA: **67.1%** (official Qwen model card)
- AA-LCR: **66.9%** (official Qwen model card)

Coding:

- SWE-bench Verified: **72.0%** (official Qwen model card)
- Terminal-Bench 2: **49.4%** (official Qwen model card)
- LiveCodeBench v6: **78.9%** (official Qwen model card)
- FullStackBench en: **62.6%** (official Qwen model card)
- CodeForces: **2100** (official Qwen model card; evaluated on Qwen's own query set)

Long context:

- LongBench v2: **60.2%** at the model card's reported evaluation setting.
- AA-LCR: **66.9%**; the card reports a 262,144-token native context and recommends YaRN for longer sequences.

Multimodal evidence:

- MMMU: **83.9%**; MMMU-Pro: **76.9%** (official Qwen model card)
- MathVista mini: **87.4%**; RealWorldQA: **85.1%** (official Qwen model card)
- VideoMME with subtitles: **87.3%**; without subtitles: **83.9%** (official Qwen model card)
- ScreenSpot Pro: **70.4%**; OSWorld-Verified: **58.0%** (official Qwen model card)

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong BFCL-V4, TAU2-Bench, and search-agent results support a high score; the lower DeepPlanning and HLE-with-tool figures cap it below the top agent systems.
- **Reasoning: 88/100.** MMLU-Pro 86.7%, GPQA Diamond 86.6%, and SuperGPQA 67.1% are strong; HLE with CoT at 25.3% caps the score.
- **Context window: 86/100.** The native 262K window and LongBench v2 60.2% are substantial, with 1.01M available through YaRN; the reported retrieval scores are not enough for a near-perfect rating.
- **Multimodal: 91/100.** The exact checkpoint reports broad image/video and visual-agent coverage, including MMMU 83.9%, MathVista 87.4%, and VideoMME 87.3%; OSWorld-Verified at 58.0% caps the score.
- **Coding: 84/100.** SWE-bench Verified 72.0%, LiveCodeBench v6 78.9%, and Terminal-Bench 2 49.4% indicate strong coding ability, while terminal-agent performance caps the score.
- **Cost efficiency: 85/100.** Apache-2.0 open weights provide deployment flexibility, but no verified hosted price or hardware-cost comparison was found for the exact model.
- **Overall Score: 86.6/100.** A strong open-weight choice for multimodal reasoning, coding, and tool workflows; use a smaller Qwen3.5 variant when serving cost or latency dominates.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-23
- Method: Independent checks of the official Qwen Hugging Face model card, Qwen's model organization, Qwen's model blog, and exact-name web search. Scores are normalized interpretations, not official vendor scores.
