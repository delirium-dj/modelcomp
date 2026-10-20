# DeepSeek V4 Flash — findings by MiniMax M3.1 Flash

- Source: DeepSeek (DeepSeek V4 Flash, `-0731` build), `deepseek-ai/DeepSeek-V4-Flash`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek's April 2026 open-weight (MIT) MoE — 284B total / 13B active, 1M context with 78.7% MRCR at 1M, LiveCodeBench 91.6% and Terminal-Bench 2.1 82.7% — the value leader of the 2026 generation. **Status note:** DeepSeek's own API retired the `deepseek-v4-flash` id, which now silently serves DeepSeek-V4.1-Flash-1017.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash` — legacy id, still accepted but served by V4.1-Flash-1017), Hugging Face `deepseek-ai/DeepSeek-V4-Flash` (MIT) with `-0423` and `-0731` checkpoints, OpenRouter, OpenCode Zen (`opencode/deepseek-v4-flash` — the id exists in Zen's live model list but its price is not published in Zen's pricing table).
- **Release / knowledge:** **2026-04-24** (V4 preview release); `-0731` checkpoint 2026-07-31; vision arrived only in `Vision-Exp` (2026-08-21). Knowledge cutoff not published.
- **IDs:** `deepseek-v4-flash` (DeepSeek API), `deepseek/deepseek-v4-flash` (models.dev), `deepseek-ai/DeepSeek-V4-Flash` (HF), `deepseek-v4-flash-0731` (BenchLM).
- **Context window:** **1,000,000** tokens, **384,000** max output (DeepSeek pricing page, models.dev).
- **Modalities:** text in / text out (the V4 Flash checkpoints are text-only; vision is a separate `-vision-exp` build). Reasoning modes: non-think / think-high / think-max.
- **Pricing (as of 2026-10-20):** third-party market rate **$0.14/M in, $0.28/M out** (cache $0.028) across HF, NVIDIA, NanoGPT, SiliconFlow CN, ZenMux, Alibaba CN — DeepSeek's own current price sheet covers the V4.1-Flash-1017 build instead ($0.15/$0.60 off-peak, $0.30/$1.20 peak, cache $0.003/$0.006). The claimed "$0.14/$0.28 on Zen" is **unverified** — Zen does not publish a price row for it.
- **Architecture:** MoE, 284B total / 13B active (HF metadata says 291B — conflict flagged), hybrid CSA+HCA attention, mHC, Muon optimizer, 32T+ pretraining tokens.

### Raw benchmarks found

> DeepSeek's own V4 model card / technical report, plus Vals AI and Artificial Analysis runs on the `-0731` build.

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (V4 Flash `-0731` update) vs **67.0%** (Vals AI) · Terminal-Bench 2.0: **56.9%** (vendor) · Terminal-Bench Hard: no verified public score found (AA null) · AA Terminal-Bench 4.0: **12.1%**
- MCP Atlas: **69.0%** (vendor) · Toolathlon: **47.8%** (vendor) · Toolathlon-Verified: **70.3%** (BenchLM) · BrowseComp: **73.2%** (vendor) · AutomationBench: **54.0%** (AA)
- GDPval-AA: **1395** (vendor) vs **1433.74** (AA) · Tau3-Banking: **39.4%** (AA) · Agents' Last Exam: **25.2%** (BenchLM) · CyberGym: **76.7%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (vendor, think-max) vs **90.8%** (AA) vs **89.9%** (Vals AI)
- HLE: **34.8%** (vendor, no tools) / **45.1%** (with tools) vs **38.55%** (AA) · MMLU-Pro: **86.2%** (vendor) / **86.2%** (Vals AI)
- Artificial Analysis Intelligence Index: **34.3** · CritPt: **16.6%** (AA) · AA-LCR: **79.7%** (AA) · Omniscience Accuracy / Hallucination Rate: **40.4% / 91.7%** (AA)
- ARC-AGI-1: **89.0%** · ARC-AGI-2: **61.4%** (ARC Prize semi-private results) · HMMT Feb 2026: **94.8%** · IMOAnswerBench: **88.4%** · Chinese-SimpleQA: **78.9%**

Coding:

- SWE-bench Verified: **79.0%** (vendor) vs **88.8%** (Vals AI) · SWE-bench Pro: **52.6%** · SWE-bench Multilingual: **73.3%**
- LiveCodeBench: **91.6%** (vendor, think-max; 88.4% high, 55.2% non-think) vs **87.3%** (Vals AI) · Codeforces rating: **3052** · DeepSWE: **54.4%** (BenchLM) · SciCode: **50.3%** (AA)
- NL2Repo: **54.2%** · DeepSeek DSBench FullStack: **68.7%** / Hard: **59.6%** (BenchLM)

Long context:

- MRCR at 1M: **78.7%** (vendor; 37.5% non-think) · CorpusQA at 1M: **60.5%** (vendor) — real measured retrieval at the top of the window

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 2.1 82.7% (vendor) / 67.0% (Vals), MCP Atlas 69.0%, AutomationBench 54.0%, GDPval-AA ~1400 and BrowseComp 73.2% are strong mid-to-high band agentic numbers, capped by Toolathlon 47.8% and Terminal-Bench 4.0 at 12.1%.
- **Reasoning: 82/100.** GPQA 88.1–90.8%, MMLU-Pro 86.2%, HMMT 94.8%, ARC-AGI-2 61.4% and AA-LCR 79.7% are frontier-adjacent, capped by an AA Intelligence Index of 34.3, HLE 34.8–38.6% and a 91.7% hallucination rate.
- **Context window: 94/100.** A 1,000,000-token window with **78.7% MRCR and 60.5% CorpusQA measured at 1M** is one of the very few genuinely long-context-capable models — it misses the 100 band only because the non-think mode collapses to 37.5%.
- **Multimodal: 15/100.** Text-in/text-out only for the V4 Flash checkpoints; image/video input exists solely in the separate `-vision-exp` build.
- **Coding: 85/100.** LiveCodeBench 91.6% (87.3% independent), SWE-bench Verified 79.0% (88.8% on Vals' subset), SWE-bench Pro 52.6% and Codeforces 3052 put it near the coding frontier, with DeepSWE 54.4% the one soft spot.
- **Cost efficiency: 96/100.** $0.14/M in and $0.28/M out (market rate) with a $0.028/M cache read is one of the cheapest frontier-adjacent routes on the market, and MIT weights are free to self-host.
- **Overall Score: 70/100.** Mean of the five quality dims = (74 + 82 + 94 + 15 + 85) / 5 = 70.0 → **70**. Best fit: long-context, coding-heavy agent work at minimal cost — and remember the DeepSeek API id now routes to V4.1-Flash-1017.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (DeepSeek model card and V4 technical report, DeepSeek API docs and pricing, Artificial Analysis, BenchLM + Vals AI, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_1_Flash.md`, using the same headings.
