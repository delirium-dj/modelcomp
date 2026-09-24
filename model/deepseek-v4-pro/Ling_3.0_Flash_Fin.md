# DeepSeek V4 Pro — findings by Ling 3.0 Flash Fin

- Source: DeepSeek-AI / DeepSeek (`deepseek-ai/DeepSeek-V4-Pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** Open-weights MoE flagship (1.6T total / 49B active) with 1M context window via hybrid CSA+HCA sparse attention; frontier open-model agentic coding with MIT license; trained entirely on Huawei Ascend 950PR chips.
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`), HuggingFace (`deepseek-ai/DeepSeek-V4-Pro`), AWS Bedrock, Google Vertex AI, Azure AI Foundry, Fireworks, Together.ai. OpenAI- and Anthropic-compatible APIs. Thinking mode with low/high/max reasoning effort.
- **Release / knowledge:** 2026-04-24 (preview); 2026-08-13 (V4-Pro-0813 GA). Knowledge cutoff not explicitly stated.
- **IDs:** `deepseek-ai/DeepSeek-V4-Pro` (HuggingFace), `deepseek-v4-pro` (DeepSeek API), `deepseek-ai/DeepSeek-V4-Pro-0813` (production checkpoint)
- **Context window:** 1,048,576 total (1M default); max output 384K tokens. Verified via official model card and technical report.
- **Modalities:** Text in/out only at launch; no native image, audio, or video input modalities. Reasoning enabled by default via thinking mode. Tool calls supported (OpenAI ChatCompletions and Anthropic-compatible APIs). Multimodal support in development.
- **Pricing (as of 2026-09-24):** List $0.66/1M input, $1.98/1M output; promotional rates were $0.0145/$0.435 through 2026-05-31. Open weights self-hostable (MIT license). Significantly cheaper than GPT-5.5 and Claude Opus 4.6 (~7-10x cheaper on output).
- **Architecture:** 1.6T total parameters, 49B activated per token (~8.1% activation), Mixture-of-Experts with Compressed Sparse Attention (CSA) + Heavily Compressed Attention (HCA) hybrid architecture, Manifold-Constrained Hyper-Connections (mHC), Muon optimizer. 33T pre-training tokens, FP4+FP8 mixed precision. MIT license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **87.9%** (V4-Pro-0813, DeepSeek official model card)
- Terminal-Bench 2.0: **67.9%** (DeepSeek official model card)
- MCPAtlas Public: **73.6%** (DeepSeek official model card)
- Toolathlon Verified: **74.1%** (V4-Pro-0813, DeepSeek official model card)
- SWE-bench Pro: **55.4%** (DeepSeek official model card)
- NL2Repo: **61.5** (V4-Pro-0813, DeepSeek official model card)
- Agents' Last Exam: **25.7** (V4-Pro-0813, DeepSeek official model card)
- DeepSWE: **62.7** (V4-Pro-0813, DeepSeek official model card)
- Cybergym: **83.3** (V4-Pro-0813, DeepSeek official model card)
- GDPval-AA Elo: **1554** (DeepSeek official model card)

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (DeepSeek official model card)
- HLE: **37.7%** (preview Max); **42.7** without tools / **60.0** with tools (V4-Pro-0813)
- HMMT 2026 Feb: **95.2%** (DeepSeek official model card)
- MMLU-Pro: **87.5%** (DeepSeek official model card)
- IMOAnswerBench: **89.8%** (DeepSeek official model card)
- Codeforces rating: **3206** (DeepSeek official model card)
- SimpleQA-Verified: **57.9%** (DeepSeek official model card)
- MATH-500: **92%** (DeepSeek official model card)
- Long-Context Recall: **80.3** (DeepSeek official model card)
- MRCR 1M: **83.5%** (DeepSeek official model card)

Coding:

- SWE-bench Verified: **80.6%** (DeepSeek official model card)
- LiveCodeBench: **93.5%** (DeepSeek official model card)
- SWE-bench Multilingual: **76.2%** (DeepSeek official model card)
- DeepSWE: **62.7%** (V4-Pro-0813, DeepSeek official model card)
- Codeforces rating: **3206** (DeepSeek official model card)
- SWE-bench Pro: **55.4%** (DeepSeek official model card)
- Internal DSBench-FullStack: **71.1** (V4-Pro-0813, DeepSeek official model card)

Long context:

- 1M context window via hybrid CSA+HCA architecture (DeepSeek official model card)
- MRCR 1M (MMR): **83.5%** (DeepSeek official model card)
- CorpusQA at 1M: **62.0%** (DeepSeek official model card)
- At 1M context, requires only 27% of single-token inference FLOPs and 10% of KV cache vs DeepSeek-V3.2
- MRCR retrieval accuracy stays above 0.82 through 256K and holds at 0.59 at 1M

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 84/100.** Outstanding on Terminal-Bench 2.1 (87.9%), Toolathlon Verified (74.1%), MCPAtlas (73.6%), and Cybergym (83.3%); SWE-bench Pro (55.4%) and Agents' Last Exam (25.7) are weaker points. Among the strongest open-weight agentic tool-use models.
- **Reasoning: 83/100.** Exceptional GPQA Diamond (90.1%), HMMT (95.2%), MMLU-Pro (87.5%), Codeforces 3206, LiveCodeBench 93.5%; HLE at 37.7-60.0% is the main cap. Best-in-class mathematical reasoning among open models.
- **Context window: 96/100.** 1M context window is class-leading; MRCR 1M at 83.5% confirms strong long-context retrieval; 27% FLOP efficiency and 10% KV cache vs V3.2 make 1M economically viable.
- **Multimodal: 44/100.** Text-only at launch; no native image, audio, or video input modalities supported; multimodal capabilities announced in development but not yet available.
- **Coding: 86/100.** SWE-bench Verified 80.6% (within 0.2 pts of Opus 4.6), LiveCodeBench 93.5% (leading open model), DeepSWE 62.7%, Codeforces 3206 rating. Among the strongest coding models in the open-weights category.
- **Cost efficiency: 70/100.** List pricing $0.66/$1.98 per 1M tokens is competitive but not the cheapest; promotional rates were significantly lower. Open weights self-hostable at no API cost. Cheaper than GPT-5.5 and Claude Opus 4.6 on output.
- **Overall Score: 79/100.** Mean of the five non-cost dimensions (84 + 83 + 96 + 44 + 86) / 5 = 78.6, rounded half-up to 79. A frontier open-weight MoE with class-leading coding (LiveCodeBench 93.5%) and 1M context, strong agentic tool use and reasoning, but capped by text-only multimodal and weaker long-context retrieval at 1M.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via DeepSeek official model card, technical report (arXiv:2606.19348), HuggingFace, DeepSeek API docs, OrcaRouter, DeepSeek AI Guide, HokAI, and vendor benchmark tables; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/deepseek-v4-pro/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/deepseek-v4-pro/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `Ling_3.0_Flash_Fin.md.excluded`, not `.md` (see SELF-EXCLUSION above).
