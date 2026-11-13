# Kimi K2.5 — findings by Glyph Cluster

- Source: Moonshot AI / Kimi (`moonshotai/Kimi-K2.5`, folder slug `kimi-k2.5`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Open-weight native multimodal agentic model from Moonshot AI combining vision-language understanding, strong reasoning/coding, and tool-using/agent capabilities (including agent swarm features described by vendor).
- **Provider / access:** Open weights on Hugging Face (`moonshotai/Kimi-K2.5`, Modified MIT License). Also available via Moonshot AI platform/API and third-party inference providers (per OpenRouter/AA listings).
- **Release / knowledge:** Released January 2026 (per Artificial Analysis/HF context). Knowledge cutoff not explicitly stated on fetched sources.
- **IDs:** `moonshotai/Kimi-K2.5` (Hugging Face), `moonshotai/kimi-k2.5` (OpenRouter/provider ID).
- **Context window:** 256,000 tokens (per Hugging Face model card and Artificial Analysis).
- **Modalities:** Text, image, and video inputs; text output (native multimodal). Reasoning/thinking mode supported.
- **Pricing (as of 2026-11-13):** Open weights (Modified MIT); hosted pricing varies by provider. AA snapshot for Kimi K2.5 (Reasoning): ~$0.60/M input, ~$3.00/M output (cache discount ~83%). OpenRouter lists provider-dependent pricing.
- **Architecture:** Mixture-of-Experts with 1T total parameters and 32B activated parameters; 61 layers, MLA attention, MoonViT vision encoder (~400M params), 256K context (per Hugging Face model card).

### Raw benchmarks found

> Values below are benchmark figures reported on the fetched Hugging Face model card for Kimi K2.5 (Thinking) unless noted. Figures not present in fetched sources are marked as no verified public score found.

Reasoning / knowledge:

- HLE-Full: **30.1** (HF card)
- HLE-Full (w/ tools): **50.2** (HF card)
- AIME 2025: **96.1** (HF card)
- HMMT 2025 (Feb): **95.4** (HF card)
- IMO-AnswerBench: **81.8** (HF card)
- GPQA-Diamond: **87.6** (HF card)
- MMLU-Pro: **87.1** (HF card)

Coding:

- SWE-Bench Verified: **76.8** (HF card)
- SWE-Bench Pro: **50.7** (HF card)
- SWE-Bench Multilingual: **73.0** (HF card)
- Terminal Bench 2.0: **50.8** (HF card)
- PaperBench: **63.5** (HF card)
- CyberGym: **41.3** (HF card)
- SciCode: **48.7** (HF card)
- OJBench (cpp): **57.4** (HF card)
- LiveCodeBench (v6): **85.0** (HF card)

Agentic / tool use / search:

- BrowseComp: **60.6** (HF card)
- BrowseComp (w/ ctx manage): **74.9** (HF card)
- BrowseComp (Agent Swarm): **78.4** (HF card)
- WideSearch (item-f1): **72.7** (HF card)
- WideSearch (item-f1 Agent Swarm): **79.0** (HF card)
- DeepSearchQA: **77.1** (HF card)
- FinSearchCompT2&T3: **67.8** (HF card)
- Seal-0: **57.4** (HF card)

Long context:

- Longbench v2: **61.0** (HF card)
- AA-LCR: **70.0** (HF card)

Multimodal (image/video/document):

- MMMU-Pro: **78.5** (HF card)
- MathVision: **84.2** (HF card)
- MathVista (mini): **90.1** (HF card)
- OCRBench: **92.3** (HF card)
- OmniDocBench 1.5: **88.8** (HF card)
- InfoVQA (val): **92.6** (HF card)
- VideoMMMU: **86.6** (HF card)
- MMVU: **80.4** (HF card)
- VideoMME: **87.4** (HF card)
- LongVideoBench: **79.8** (HF card)

Other:

- Artificial Analysis Intelligence Index: **no verified public score found** in fetched AA snapshot (reported as N/A / no publicly available API).

### Normalized scores (1–100)

> Scores are normalized 1–100 interpretations based on available evidence, not official vendor scores. Overall is the half-up mean of the five non-cost dimensions.

- **Tool use: 86/100.** Strong agentic/tool-use and search performance (BrowseComp 78.4 with Agent Swarm, WideSearch 79.0 Agent Swarm, DeepSearchQA 77.1, HLE w/ tools 50.2), with solid but not dominant results on terminal/cyber/toolathon-style coding-agent benchmarks.
- **Reasoning: 86/100.** High reasoning capability evidenced by GPQA-Diamond 87.6, MMLU-Pro 87.1, AIME 2025 96.1, HMMT 95.4, and IMO-AnswerBench 81.8, though HLE (no tools) remains moderate at 30.1.
- **Context window: 72/100.** 256K context is substantial and supported by long-context results (Longbench v2 61.0, AA-LCR 70.0), but below 1M-class frontier context offerings.
- **Multimodal: 86/100.** Native multimodal model with strong verified image/video/document understanding (MMMU-Pro 78.5, MathVista 90.1, MathVision 84.2, OCRBench 92.3, VideoMME 87.4, VideoMMMU 86.6), supporting robust visual reasoning and VQA.
- **Coding: 82/100.** Strong coding and software-engineering results (SWE-Bench Verified 76.8, SWE-Bench Multilingual 73.0, LiveCodeBench v6 85.0, PaperBench 63.5) with room to improve on harder agentic coding environments (SWE-Bench Pro 50.7, Terminal Bench 2.0 50.8, CyberGym 41.3).
- **Cost efficiency: 84/100.** Open-weight model (Modified MIT) with 32B activated parameters in a 1T MoE and moderate hosted pricing, offering good capability-to-cost potential especially for multimodal/agentic workloads.
- **Overall Score: 82/100.** Mean of the five non-cost dims (Tool use 86, Reasoning 86, Context 72, Multimodal 86, Coding 82) = 82.4, rounded to 82. Best fit: multimodal reasoning, agentic search/tool use, and coding assistants where strong vision-language capability and open-weight deployment options are valuable.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-13 UTC
- Method: Fresh public-web research (web search unavailable with HTTP 402; fallback used direct `webfetch` of public sources). This is a re-evaluation of an existing self-excluded twin: new verified benchmark evidence was found on the official Hugging Face model card, so a scored report is produced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Hugging Face — moonshotai/Kimi-K2.5](https://huggingface.co/moonshotai/Kimi-K2.5)
  - [Artificial Analysis — Kimi K2.5 (Reasoning)](https://artificialanalysis.ai/models/kimi-k2-5)
  - [OpenRouter — moonshotai/kimi-k2.5](https://openrouter.ai/moonshotai/kimi-k2.5)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
