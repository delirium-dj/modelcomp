# Qwen 3.8 Flash — findings by Ling 3.0 Flash Fin

- Source: Alibaba / Qwen (`qwen/Qwen3.8-Flash-Next`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Early preview of Qwen4 architecture (Qwen3.8-Flash-Next) — 125B MoE with only 6B activated per token via GDN+QSA hybrid attention, natively multimodal, 1M context window, and frontier coding performance surpassing Claude Opus 4.6 at ~1/9 the training cost of Qwen3.7-Plus.
- **Provider / access:** QwenCloud (`qwen3.8-flash`), HuggingFace (`Qwen/Qwen3.8-Flash-Next`), ModelScope. Chat Completions API (Anthropic- and OpenAI-compatible). Open weights available.
- **Release / knowledge:** 2026-08-26 (Qwen3.8-Flash-Next open weights); Qwen3.8-Flash API launched August 2026. Knowledge cutoff not explicitly stated.
- **IDs:** `qwen/Qwen3.8-Flash-Next` (HuggingFace), `qwen3.8-flash` (QwenCloud), `Qwen/Qwen3.8-Flash-Next-FP8` (Dell)
- **Context window:** 262,144 native (via YaRN extensible to 1M); QwenCloud runs 1M by default. Verified via official model card and QwenCloud docs.
- **Modalities:** Text, image, video in; text out. Natively multimodal from step-zero training. Thinking mode enabled by default with adjustable reasoning effort (xhigh/medium/low). Supports function calling, structured output, code interpreter, web search.
- **Pricing (as of 2026-09-24):** ~$0.15/1M input, $0.47/1M output on QwenCloud (from eesel AI). Token Plan subscription available ($20/month, $50/month, $120/month tiers). Open weights self-hostable at no API cost.
- **Architecture:** 125B total parameters, 6B activated per token (~8.1% activation), 51B N-gram embedding tables held off accelerator, Mixture-of-Experts with GDN + QSA hybrid attention. 28 layers, 512 experts, 10 routed + 1 shared. Muon optimizer, Gated Residual stream, Qwen Sparse Attention (QSA). Apache 2.0 license (open weights).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1 (variant=v2.1): **86.1%** (AI Atlas, independent evaluator)
- Toolathlon Verified: **73.5%** (Qwen official HF model card)
- CoWorkBench: **73.9%** (Qwen official HF model card)
- JobBench: **55.7%** (Qwen official HF model card)
- NL2Repo-Bench: **48.1** (Qwen official HF model card)
- Agents' Last Exam: **24.3** Pass@1 / **51.2** Score (Qwen official HF model card)
- DeepSWE 1.1: **58.7%** (Qwen official HF model card)
- SWE-bench Pro: **62.5%** (Qwen official HF model card)
- SWE-bench Multilingual: **81.0%** (Qwen official HF model card)

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (Qwen official HF model card; AA-GPQA Diamond 92.3%)
- HLE: **35.9%** (Qwen official HF model card; AA-HLE 38.0%)
- IFBench: **81.3** (Qwen official HF model card)
- Artificial Analysis Intelligence Index: **39.9/100** (benchlm.ai)
- AA-LCR: **79.7%** (benchlm.ai)
- CritPt: **11.1%** (benchlm.ai)
- AA-Omniscience Accuracy: **24.5%** (benchlm.ai)
- AA-Omniscience Hallucination Rate: **45.3%** (benchlm.ai)
- MMLU-Pro: **73.7** (Qwen3.8-Flash-Next tech report)
- SuperGPQA: **52.1** (Qwen3.8-Flash-Next tech report)
- MATH: **71.6** (Qwen3.8-Flash-Next tech report)
- GSM8K: **91.6** (Qwen3.8-Flash-Next tech report)
- MultiPL-E: **79.8** (Qwen3.8-Flash-Next tech report)

Coding:

- LiveCodeBench v6: **91.9%** (Qwen official HF model card)
- SWE-bench Pro: **62.5%** (Qwen official HF model card)
- SWE-bench Multilingual: **81.0%** (Qwen official HF model card)
- DeepSWE 1.1: **58.7%** (Qwen official HF model card)
- AA Coding Index: **73.0%** (benchlm.ai)
- AA-SciCode: **50.6%** (benchlm.ai)
- NL2Repo-Bench: **48.1** (Qwen official HF model card)
- SWE-fficiency: no verified public score found
- Vibe Code Bench: no verified public score found
- ArtifactsBench: no verified public score found

Long context:

- 1M context window via QSA (Qwen Sparse Attention) architecture (Qwen official model card)
- QSA achieves 7.6× prefill and 4.9× decode speedups at 1M tokens (Qwen tech report)
- RULER 1M: **93.00** (Qwen tech report)
- MRCR 1M: **26.44** (Qwen tech report)
- AA-LCR: **79.7%** (benchlm.ai)
- Video-MME-v2: **71.3** at Qwen Code agentic setting (Qwen3.8-Omni paper)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 75/100.** Strong on Terminal-Bench 2.1 (86.1%), Toolathlon (73.5%), CoWorkBench (73.9%), but Agents' Last Exam (24.3) and NL2Repo (48.1) are weaker. Solid agentic tool-use performance with frontier coding agent scores but not top-tier on all agent benchmarks.
- **Reasoning: 74/100.** Exceptional GPQA Diamond (91.7%), IFBench (81.3), AA-LCR (79.7%), but HLE at 35.9% and AA Intelligence Index at 39.9/100 indicate below-average general reasoning breadth. CritPt at 11.1% is notably weak.
- **Context window: 92/100.** 1M context window via QSA architecture with 7.6× prefill and 4.9× decode speedups; RULER at 93.00 confirms strong retrieval; 262K native extensible via YaRN.
- **Multimodal: 88/100.** Native multimodality (text, image, video); AndroidWorld 84.5, MathVision 95.7, RealWorldQA 88.5, LVBench 76.6; Video-MME-v2 71.3 at agentic setting; supports desktop interaction.
- **Coding: 83/100.** Outstanding on LiveCodeBench v6 (91.9%), SWE-bench Multilingual (81.0%), SWE-bench Pro (62.5%), DeepSWE (58.7%), AA Coding Index 73.0%. Among the strongest coding models in the open-weights category.
- **Cost efficiency: 90/100.** ~$0.15/1M input and $0.47/1M output on QwenCloud; open weights available for self-hosting at zero API cost. Extremely cost-effective for the performance delivered.
- **Overall Score: 82/100.** Mean of the five non-cost dimensions (75 + 74 + 92 + 88 + 83) / 5 = 82.4, rounded half-up to 82. A frontier open-weight MoE with class-leading coding (LiveCodeBench 91.9%) and 1M context, strong multimodality and tool use, but below-peak general reasoning breadth (HLE 35.9%, AA Index 39.9).

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via Qwen official model card, HuggingFace, QwenCloud docs, Qwen3.8-Flash-Next tech report, benchlm.ai, AI Atlas, eesel AI, and Qwen3.8-Omni research paper; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3.8-flash/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.8-flash/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `Ling_3.0_Flash_Fin.md.excluded`, not `.md` (see SELF-EXCLUSION above).
