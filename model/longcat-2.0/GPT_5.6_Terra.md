# LongCat 2.0 — findings by GPT 5.6 Terra
- Source: Meituan/LongCat-2.0
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md
## Model card
- **Name:** LongCat 2.0
- **Short description:** Meituan's open 1.6T MoE model for million-token coding and agents.
- **Provider / access:** `meituan-longcat/LongCat-2.0` on [Hugging Face](https://huggingface.co/meituan-longcat/LongCat-2.0); MIT weights and compatible API providers.
- **Release / knowledge:** 2026; cutoff unpublished.
- **IDs:** `meituan-longcat/LongCat-2.0`.
- **Context window:** 1,000,000 tokens.
- **Modalities:** text in/out; agent-tool integrations documented.
- **Pricing (as of 2026-09-29):** open weights; no first-party per-token rate used.
- **Architecture:** 1.6T MoE, approximately 48B activated parameters.
### Raw benchmarks found
Agent / tool use:
- BrowseComp: **79.9%**; RWSearch: **78.8%**; FORTE: **73.2%** ([official card](https://huggingface.co/meituan-longcat/LongCat-2.0)).
Reasoning / knowledge:
- GPQA Diamond: **88.9%**; IMO-AnswerBench: **81.8%** (official card).
Coding:
- Terminal-Bench 2.1: **70.8**; SWE-bench Pro: **59.5%**; SWE-bench Multilingual: **77.3%** (official card).
Long context:
- **1,000,000 tokens** documented; no retrieval benchmark found.
### Normalized scores (1–100)
- **Tool use: 88/100.** BrowseComp/RWSearch near 80% and FORTE 73.2% support strong agent use.
- **Reasoning: 89/100.** GPQA 88.9% and IMO 81.8% are high vendor-reported results.
- **Context window: 92/100.** Native documented 1M context, but no retrieval-at-length test.
- **Multimodal: 15/100.** Reviewed card is text-only.
- **Coding: 87/100.** Terminal-Bench 70.8 and multilingual SWE 77.3 are strong; SWE Pro 59.5 caps it.
- **Cost efficiency: 88/100.** MIT weights enable self-hosting despite very large total scale.
- **Overall Score: 74/100.** Half-up quality mean; a powerful open agent/coding model whose text-only modality reduces breadth.
## Refresh note

Official LongCat sources confirm LongCat 2.0's 1.6T-total/~48B-active MoE architecture and 1M context. No new compatible benchmark table was used to alter scores. [Official model card](https://huggingface.co/meituan-longcat/LongCat-2.0/blob/main/README.md)

## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; normalized interpretations, not vendor scores.
