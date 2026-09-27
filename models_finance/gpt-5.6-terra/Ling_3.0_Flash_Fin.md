# GPT-5.6 Terra — findings by Ling 3.0 Flash

- Source: OpenAI (`openai/gpt-5.6-terra`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's flagship 5.6 generation model optimized for ground-up agentic research, tool usage, long-context reasoning, and code synthesis; broadest modality support including video input.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`), Azure OpenAI. Responses API. No Zen Free ID; paid-tier pricing.
- **Release / knowledge:** July 9, 2026 release. Knowledge cutoff not explicitly stated.
- **IDs:** `openai/gpt-5.6-terra` (OpenAI API)
- **Context window:** 1,048,576 (1M) tokens, 128K max output
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** Paid only — $2.00/1M input, $12.00/1M output (no Zen Free ID)
- **Architecture:** Proprietary, closed weights; OpenAI's flagship 5.6 generation model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (DataCamp, Google's benchmark table)
- Terminal-Bench 3.0: **20.8%** (DataCamp)
- Terminal-Bench 4.0: **21.5%** (tbench.ai)
- OSWorld 2.0: **50.2%** (DataCamp)
- DeepSWE 1.1: **69.6%** (DataCamp)
- Coding Agent Index (AA): **77.4** (anycap.ai)
- SWE-bench: Rank 5/87 (Vals.ai)
- Terminal-Bench 2.1: Rank 8/58 (Vals.ai)

Reasoning / knowledge:

- GPQA Diamond: Rank 22/136 (Vals.ai)
- SWE-bench: Rank 5/87 (Vals.ai)
- Intelligence Index (AA): **51**
- LLM Stats Score: **50.9**
- Vals Index: Rank 7/50 (Vals.ai)

Coding:

- SWE-bench Pro: **63.4%** (anycap.ai)
- SWE-bench: Rank 5/87 (Vals.ai)
- LiveCodeBench: Rank 25/141 (Vals.ai)
- Vibe Code Bench: Rank 14/88 (Vals.ai)
- DeepSWE 1.1: **69.6%**
- Coding Agent Index: 77.4 (anycap.ai)
- FrontierCode 1.1 Main: 41.3% (DataCamp comparison)

Long context:

- 1M context window
- Vals Index: Rank 7/50

Multimodal:

- Text, image, audio, video, PDF in; text out
- MMMU: Rank 18/91 (Vals.ai)
- Broadest modality support among GPT-5.6 family (includes video)

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 2.1 at 87.4% is strong; Coding Agent Index at 77.4 confirms solid agentic capability; but weaker on TB3.0 (20.8%), TB4.0 (21.5%), and OSWorld (50.2%). Strong on terminal coding but moderate on broader agentic tasks.
- **Reasoning: 89/100.** SWE-bench Rank 5/87; GPQA Diamond Rank 22/136; Intelligence Index of 51; Vals Index Rank 7/50. Strong coding-reasoning fusion but moderate on pure reasoning benchmarks.
- **Context window: 96/100.** 1M context window with strong Vals Index Rank 7/50; 128K max output.
- **Multimodal: 80/100.** Text, image, audio, video, and PDF input supported; broadest modality coverage among GPT-5.6 family; MMMU Rank 18/91 (Vals.ai). Strong multimodal including video input.
- **Coding: 89/100.** SWE-bench Rank 5/87; Coding Agent Index 77.4; SWE-bench Pro 63.4%; DeepSWE 69.6%; LiveCodeBench Rank 25. Strong on SWE-bench and agentic coding but moderate on research-level coding.
- **Cost efficiency: 55/100.** No Zen Free ID; paid-only pricing at $2.00/$12.00 per 1M. Moderately priced among frontier models.
- **Overall Score: 89/100.** Mean of the five non-cost dimensions (89 + 89 + 96 + 80 + 89) / 5 = 88.6, rounded half-up to 89. OpenAI's flagship 5.6 model with strong terminal coding (TB2.1 87.4%), broadest multimodal support (video + audio + PDF), and solid agentic research capability at moderate pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via DataCamp, anycap.ai, Vals.ai, tbench.ai, llm-stats.com, and Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5.6-terra/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5.6-terra/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
