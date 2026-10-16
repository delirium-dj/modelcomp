# DeepSeek V4 Pro — findings by Cat Jam

- Source: DeepSeek / DeepSeek V4 Pro (`opencode/deepseek-v4-pro`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (official release 0813 superseding preview)
- **Short description:** DeepSeek's flagship text-only MoE (1.6T total / 49B active) with hybrid CSA+HCA for 1M context. Strong coding/agentic at off-peak prices; released 2026-04-24 (preview), official 0813 release 2026-08-13, routing V4 Pro requests to V4.1-Flash from 2026-09-14 (unless opt-in to keep). Now mainly dispatches to pro-0813 if remaining V4-Pro endpoint.
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`, `deepseek-v4-pro-0813` snapshot), open weights on Hugging Face (`deepseek-ai/DeepSeek-V4-Pro-0813`). Text-only input/output.
- **Release / knowledge:** Released as V4 preview 2026-04-24; official release 2026-08-13. Knowledge? Model-derived training. No stated cutoff except mid-2026.
- **IDs:** `deepseek-v4-pro` (DeepSeek), OpenRouter `deepseek/deepseek-v4-pro`
- **Context window:** 1,000,000 tokens; max output 393,216.
- **Modalities:** Text only. Reasoning low/high/max. Function calling, structured output, prompt caching.
- **Pricing (as of 2026-10-16):** Peak: $1.32 / $3.96 per 1M input/output; off-peak (14 UTC? actually peak windows): $0.66 / $1.98 (50% of peak). Cache read $0.044 (peak) / $0.022 (off-peak?) and cache writes free (DeepSeek official). Up to 9× vs V4 Flash.
- **Architecture:** MoE CSA+HCA attention, 49B active, 1.6T total, text-only, open weights MIT-ish.

### Raw benchmarks found (official model card plus AA)

From official model card table (DeepSeek V4 Pro 0813):

Agent / tool use:

- Terminal Bench 2.0: **67.9%** (0813 @ max)
- SWE Verified: **80.6%**
- SWE Pro: **55.4%**
- SWE Multilingual: **76.2%**
- BrowseComp (Pass@1) with tools: **83.4%**
- HLE w/ tools: **48.2%**
- GDPval-AA Elo: **1554**
- MCP Atlas: 73.6%
- Toolathlon (Pass@1): 51.8%
- SimpleQA-Verified: 57.9
- MRCR 1M: 83.5, CorpusQA 1M 62.0

Reasoning / knowledge:

- HLE no tools: **37.7%** (0813 max); (with tools 48.2)
- GPQA Diamond: **90.1%** (max mode)
- MMLU-Pro: **87.5%** (max)
- SimpleQA Verified: 57.9 (Pass@1)
- Chinese-SimpleQA 84.4
- MRCR 1M 83.5; CorpusQA 1M 62.0; LiveCodeBench 93.5; Codeforces 3206.
- Math: HMMT 95.2, IMOAnswerBench 89.8
- AA Intelligence Index: measured **36** (AA v4.3.2)

Coding:

- LiveCodeBench v6: 93.5
- Codeforces rating 3206
- HMMT 95.2
- SWE Verified 80.6, Pro 55.4, Multilingual 76.2, Terminal Bench 2.0 67.9

Long context:

- MRCR 1M 83.5, CorpusQA 1M 62.0; strong but not perfect, expected from native 1M training.

### Normalized scores (1–100)

- **Tool use: 88/100.** SWE-Verified 80.6, SWE-Pro 55.4, TB 67.9, MCP Atlas 73.6, BrowseComp 83.4, GDPval Elo 1554, Toolathlon 51.8. Strong agent at moderate cost (pricing caveats).
- **Reasoning: 86/100.** HLE with tools 48.2, no tools 37.7, GPQA 90.1, MMLU-Pro 87.5, MRCR 83.5/Corpus 62.0.
- **Context window: 93/100.** MRCR 1M 83.5 supports strong long-context at 1M input (per model card, 27% FLOPs / 10% KV).
- **Multimodal: 15/100.** Text-only. (Template says text-only must score 15; DeepSeek-V4 Pro has no image/audio support.) Use 15.
- **Coding: 86/100.** SWE-Verified 80.6, Pro 55.4, Terminal-Bench 67.9, LiveCode 93.5, Codeforces 3206, HMMT 95.2.
- **Cost efficiency: 88/100.** Peak $1.32/$3.96, off-peak 50%, cache read $0.044, cache write free; excellent. (API routing V4 Pro may forward to V4.1 Flash at cheaper rates.)
- **Overall Score: 74/100.** Mean (88 + 86 + 93 + 15 + 86) / 5 = 73.6. Text-only score (15) drags raw 5-dim mean hard; performance otherwise frontier-class (88 average on four dims). This matches a capable text-only engineering model.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (HF model card table, DeepSeek docs, AA, LMStudio doc); scores are normalized 1–100 interpretations, not official vendor scores. Note: "text-only" fixed to 15 by template convention for Multimodal.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using same headings.
