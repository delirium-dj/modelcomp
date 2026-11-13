# Kimi K2.6 — findings by Glyph Cluster

- Source: Moonshot AI / Kimi (`moonshotai/Kimi-K2.6`, folder slug `kimi-k2.6`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Open-weight native multimodal agentic model from Moonshot AI focused on long-horizon coding, coding-driven design, proactive autonomous execution, and swarm-based task orchestration.
- **Provider / access:** Open weights on Hugging Face (`moonshotai/Kimi-K2.6`, Modified MIT License). Available via Moonshot AI platform/API and third-party inference providers (per OpenRouter/AA listings).
- **Release / knowledge:** Released April 2026 (per Artificial Analysis). Knowledge cutoff not explicitly stated on fetched sources.
- **IDs:** `moonshotai/Kimi-K2.6` (Hugging Face), `moonshotai/kimi-k2.6` (OpenRouter/provider ID).
- **Context window:** 256,000 tokens (per Hugging Face model card and Artificial Analysis).
- **Modalities:** Text, image, and video inputs; text output. Reasoning/thinking supported (including preserve-thinking features described on model card).
- **Pricing (as of 2026-11-13):** Open weights (Modified MIT); hosted pricing varies by provider. AA snapshot for Kimi K2.6 (Reasoning): ~$0.95/M input, ~$4.00/M output (cache discount ~83%). OpenRouter lists provider-dependent pricing.
- **Architecture:** Mixture-of-Experts with 1T total parameters and 32B activated parameters; 61 layers, MLA attention, MoonViT vision encoder (~400M params), 256K context (per Hugging Face model card).

### Raw benchmarks found

> Values below are benchmark figures reported on the fetched Hugging Face model card for Kimi K2.6 unless noted. Figures not present in fetched sources are marked as no verified public score found.

Reasoning / knowledge:

- HLE-Full: **34.7** (HF card)
- HLE-Full (w/ tools): **54.0** (HF card)
- AIME 2026: **96.4** (HF card)
- HMMT 2026 (Feb): **92.7** (HF card)
- IMO-AnswerBench: **86.0** (HF card)
- GPQA-Diamond: **90.5** (HF card)

Coding:

- SWE-Bench Verified: **80.2** (HF card)
- SWE-Bench Pro: **58.6** (HF card)
- SWE-Bench Multilingual: **76.7** (HF card)
- Terminal-Bench 2.0 (Terminus-2): **66.7** (HF card)
- SciCode: **52.2** (HF card)
- OJBench (python): **60.6** (HF card)
- LiveCodeBench (v6): **89.6** (HF card)

Agentic / tool use / search:

- BrowseComp: **83.2** (HF card)
- BrowseComp (Agent Swarm): **86.3** (HF card)
- DeepSearchQA (f1-score): **92.5** (HF card)
- DeepSearchQA (accuracy): **83.0** (HF card)
- WideSearch (item-f1): **80.8** (HF card)
- Toolathlon: **50.0** (HF card)
- MCPMark: **55.9** (HF card)
- Claw Eval (pass^3): **62.3** (HF card)
- Claw Eval (pass@3): **80.9** (HF card)
- APEX-Agents: **27.9** (HF card)
- OSWorld-Verified: **73.1** (HF card)

Multimodal (image/vision, including tool-augmented variants reported):

- MMMU-Pro: **79.4** (HF card)
- MMMU-Pro (w/ python): **80.1** (HF card)
- CharXiv (RQ): **80.4** (HF card)
- MathVision: **87.4** (HF card)
- BabyVision: **39.8** (HF card)
- V* (w/ python): **96.9** (HF card)

Long context:

- Explicit standardized long-context retrieval benchmark scores: no verified public score found in fetched sources (256K context documented).

Other:

- Artificial Analysis Intelligence Index: **no verified public score found** in fetched AA snapshot (reported as N/A / no publicly available API).

### Normalized scores (1–100)

> Scores are normalized 1–100 interpretations based on available evidence, not official vendor scores. Overall is the half-up mean of the five non-cost dimensions.

- **Tool use: 87/100.** Very strong agentic/search and tool-use results (BrowseComp 83.2/86.3 Agent Swarm, DeepSearchQA 92.5 f1, WideSearch 80.8, OSWorld-Verified 73.1, HLE w/ tools 54.0), with mixed performance on some agent benchmarks (APEX-Agents 27.9, Toolathlon 50.0).
- **Reasoning: 88/100.** High-end reasoning performance (GPQA-Diamond 90.5, AIME 2026 96.4, HMMT 2026 Feb 92.7, IMO-AnswerBench 86.0), though HLE without tools remains moderate (34.7).
- **Context window: 72/100.** 256K context is substantial and suitable for many long-horizon workflows, but below 1M-class leaders; no verified long-context retrieval benchmark scores found in fetched sources.
- **Multimodal: 84/100.** Native multimodal model with strong verified visual reasoning/understanding results (MMMU-Pro 79.4, MathVision 87.4, CharXiv 80.4, V* 96.9 w/ python), supporting image/video-grounded tasks.
- **Coding: 86/100.** Strong coding/agentic software engineering results (SWE-Bench Verified 80.2, SWE-Bench Multilingual 76.7, LiveCodeBench v6 89.6, Terminal-Bench 2.0 66.7, SWE-Bench Pro 58.6) with room to grow on some specialized coding benchmarks.
- **Cost efficiency: 82/100.** Open-weight model (Modified MIT) with 32B activated parameters in a 1T MoE and moderate hosted pricing, offering good value for high-capability multimodal/agentic use.
- **Overall Score: 83/100.** Mean of the five non-cost dims (Tool use 87, Reasoning 88, Context 72, Multimodal 84, Coding 86) = 83.4, rounded to 83. Best fit: advanced multimodal agentic workflows, long-horizon coding, and tool-augmented reasoning where open-weight deployment is beneficial.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-13 UTC
- Method: Fresh public-web research (web search unavailable with HTTP 402; fallback used direct `webfetch` of public sources). This is a re-evaluation of an existing self-excluded twin: new verified benchmark evidence was found on the official Hugging Face model card, so a scored report is produced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Hugging Face — moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)
  - [Artificial Analysis — Kimi K2.6 (Reasoning)](https://artificialanalysis.ai/models/kimi-k2-6)
  - [OpenRouter — moonshotai/kimi-k2.6](https://openrouter.ai/moonshotai/kimi-k2.6)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
