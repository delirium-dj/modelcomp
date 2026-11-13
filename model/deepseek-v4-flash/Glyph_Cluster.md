# DeepSeek-V4-Flash — findings by Glyph Cluster

- Source: DeepSeek (`deepseek-ai/DeepSeek-V4-Flash`, folder slug `deepseek-v4-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash
- **Short description:** Open-weight Mixture-of-Experts language model from DeepSeek optimized for efficient million-token context intelligence, with non-thinking and thinking (High/Max) modes for coding, reasoning, and agentic tasks.
- **Provider / access:** Open weights on Hugging Face (`deepseek-ai/DeepSeek-V4-Flash`, MIT license). Also served via multiple inference providers (per OpenRouter and AA provider listings) with OpenAI-compatible chat APIs.
- **Release / knowledge:** Preview release context per Hugging Face model card/technical report (arXiv 2606.19348 referenced on card). Knowledge cutoff not explicitly stated on fetched sources.
- **IDs:** `deepseek-ai/DeepSeek-V4-Flash` (Hugging Face), `deepseek/deepseek-v4-flash` (OpenRouter/provider ID).
- **Context window:** 1,000,000 tokens (per Hugging Face model card and Artificial Analysis). Max output varies by deployment; thinking Max mode recommended with large context per card.
- **Modalities:** Text input and text output in fetched sources for this model family; reasoning supported in thinking modes. (AA page lists text in/out for DeepSeek V4 Flash 0731 variant.)
- **Pricing (as of 2026-11-13):** Open weights (MIT); hosted pricing varies widely by provider (OpenRouter shows roughly ~$0.05–$0.21/M input and ~$0.17–$0.56/M output depending on provider/variant). AA median snapshot for DeepSeek V4 Flash 0731 (Max): ~$0.14/M input, ~$0.28/M output.
- **Architecture:** MoE with 284B total parameters and 13B activated parameters; 1M context; hybrid attention (CSA/HCA), mHC, Muon optimizer; FP4+FP8 mixed precision weights for instruct release (per Hugging Face model card).

### Raw benchmarks found

> Values below are benchmark figures reported on the fetched Hugging Face model card for DeepSeek-V4-Flash (instruct modes: Non-Think / High / Max) unless noted. Figures not present in fetched sources are marked as no verified public score found.

Knowledge / reasoning:

- MMLU-Pro (EM): **83.0 / 86.4 / 86.2** (Non-Think / High / Max, HF card)
- SimpleQA-Verified (Pass@1): **23.1 / 28.9 / 34.1** (HF card)
- Chinese-SimpleQA (Pass@1): **71.5 / 73.2 / 78.9** (HF card)
- GPQA Diamond (Pass@1): **71.2 / 87.4 / 88.1** (HF card)
- HLE (Pass@1): **8.1 / 29.4 / 34.8** (HF card)
- HMMT 2026 Feb (Pass@1): **40.8 / 91.9 / 94.8** (HF card)
- IMOAnswerBench (Pass@1): **41.9 / 85.1 / 88.4** (HF card)
- Apex (Pass@1): **1.0 / 19.1 / 33.0** (HF card)
- Apex Shortlist (Pass@1): **9.3 / 72.1 / 85.7** (HF card)

Coding:

- LiveCodeBench (Pass@1): **55.2 / 88.4 / 91.6** (HF card)
- Codeforces (Rating): **- / 2816 / 3052** (HF card)
- SWE Verified (Resolved): **73.7 / 78.6 / 79.0** (HF card)
- SWE Pro (Resolved): **49.1 / 52.3 / 52.6** (HF card)
- SWE Multilingual (Resolved): **69.7 / 70.2 / 73.3** (HF card)

Agentic / tool use:

- Terminal Bench 2.0 (Acc): **49.1 / 56.6 / 56.9** (HF card)
- BrowseComp (Pass@1): **- / 53.5 / 73.2** (HF card)
- HLE w/ tools (Pass@1): **- / 40.3 / 45.1** (HF card)
- MCPAtlas (Pass@1): **64.0 / 67.4 / 69.0** (HF card)
- GDPval-AA (Elo): **- / - / 1395** (HF card)
- Toolathlon (Pass@1): **40.7 / 43.5 / 47.8** (HF card)

Long context:

- MRCR 1M (MMR): **37.5 / 76.9 / 78.7** (HF card)
- CorpusQA 1M (ACC): **15.5 / 59.3 / 60.5** (HF card)

Other / AA Intelligence Index:

- Artificial Analysis Intelligence Index and per-benchmark AA aggregates: **no verified public score found** in fetched AA snapshot (reported as N/A / no publicly available API).

### Normalized scores (1–100)

> Scores are normalized 1–100 interpretations based on available evidence, not official vendor scores. Overall is the half-up mean of the five non-cost dimensions.

- **Tool use: 74/100.** Thinking modes show solid agentic/tool performance for an efficient model (MCPAtlas 69.0 Max, BrowseComp 73.2 Max, Toolathlon 47.8 Max, Terminal Bench 2.0 56.9 Max, GDPval-AA Elo 1395), but complex long-horizon/tool workflows remain below frontier leaders.
- **Reasoning: 80/100.** Strong reasoning in thinking modes (GPQA Diamond 88.1 Max, HMMT Feb 94.8 Max, IMOAnswerBench 88.4 Max, LiveCodeBench 91.6 Max) with good MMLU-Pro (86.4 High), though HLE remains moderate (34.8 Max) and non-thinking reasoning is much weaker.
- **Context window: 88/100.** Native 1M-token context with long-context benchmark evidence (MRCR 1M 78.7 Max, CorpusQA 1M 60.5 Max), indicating practical million-token capability albeit with degradation versus short-context tasks.
- **Multimodal: 15/100.** Text-only input/output in verified fetched evidence for this exact model/ID; no verified image/audio/video input or multimodal output benchmark evidence found.
- **Coding: 84/100.** Very strong coding for its active-parameter class (LiveCodeBench 91.6 Max, SWE-bench Verified 79.0 Max, SWE-bench Multilingual 73.3 Max, Codeforces 3052 Max), with SWE Pro/Terminal Bench still challenging.
- **Cost efficiency: 94/100.** Open-weight MIT model with only 13B activated parameters (284B total MoE) and low hosted pricing tiers available, offering high efficiency for capable reasoning/coding workloads.
- **Overall Score: 68/100.** Mean of the five non-cost dims (Tool use 74, Reasoning 80, Context 88, Multimodal 15, Coding 84) = 68.2, rounded to 68. Best fit: cost-efficient long-context coding/reasoning and agentic workflows where text-only modality is sufficient and thinking modes can be enabled.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-13 UTC
- Method: Fresh public-web research (web search unavailable with HTTP 402; fallback used direct `webfetch` of public sources). This is a re-evaluation of an existing self-excluded twin: new verified benchmark evidence was found on the official Hugging Face model card, so a scored report is produced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Hugging Face — deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)
  - [Artificial Analysis — DeepSeek V4 Flash](https://artificialanalysis.ai/models/deepseek-v4-flash)
  - [OpenRouter — deepseek/deepseek-v4-flash](https://openrouter.ai/deepseek/deepseek-v4-flash)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
