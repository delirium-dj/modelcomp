# LongCat-2.0 — findings by Ernie 5.5 Flash

- Source: Meituan/LongCat-2.0 (`longcat-2.0`, ex-stealth `owl-alpha`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0 (revealed 2026-06-29 from the anonymous OpenRouter stealth listing `owl-alpha`)
- **Short description:** Meituan's open-weight frontier MoE (GA 2026-06-30) — 1.6T total / ~48B active parameters trained on domestic AI-ASIC superpods, with LongCat Sparse Attention for native 1M-token context. Strong on coding agents and long-horizon agentic work.
- **Provider / access:** LongCat API (`LongCat-2.0`), OpenRouter (stealth `owl-alpha` retired), SGLang / NPU self-hosting; open weights on Hugging Face and ModelScope (MIT).
- **Release / knowledge:** 2026-06-30 (GA); knowledge cutoff not published.
- **IDs:** `longcat-2.0`, `meituan-longcat/LongCat-2.0`. The `owl-alpha` stealth name is folded into this folder per the revealed-stealth merge rule.
- **Context window:** 1,048,576 tokens (1M) native; max output 131,072.
- **Modalities:** text in / text out; thinking mode (`enable_thinking`) with reasoning-content preservation; native tool calling (dict-style arguments); structured output via chat template.
- **Pricing (as of 2026-11-13):** $0.30 in / $1.20 out per 1M (cache read ~$0.006), LongCat API; open weights are free to self-host.
- **Architecture:** sparse MoE, 1.6T total / ~48B active, 135B N-gram embedding params, LongCat Sparse Attention (streaming-aware + cross-layer + hierarchical indexing), 3-step MTP speculative decoding; MIT license.

### Raw benchmarks found

> Meituan's own evaluation table (GitHub README, June 2026), LongCat-2.0 column — measured in-house under a unified harness unless marked `*` (cited from official reports).

Agent / tool use:

- Terminal-Bench 2.1: **70.8** (vs 73.8 GPT-5.5, 78.9 Claude Opus 4.8, 70.7 Gemini 3.1 Pro*)
- BrowseComp: **79.9** (vs 85.9 Gemini 3.1 Pro, 84.4 GPT-5.5)
- RWSearch: **78.8**; FORTE (productivity): **73.2** (ties Claude Opus 4.6)
- MCP Atlas / Claw-Eval / Toolathon: no verified public score found for this model (2.5-era table only)

Reasoning / knowledge:

- GPQA-diamond: **88.9%** (vs 94.3 Gemini 3.1 Pro, 93.6 GPT-5.5)
- IMO-AnswerBench: **81.8%**; IFEval: **90.0**
- HLE / CritPt / MMLU-Pro: no verified public score found

Coding:

- SWE-bench Pro: **59.5%** (vs 69.2 Opus 4.8, 64.3 Opus 4.7, 58.6 GPT-5.5)
- SWE-bench Multilingual: **77.3%** (vs 84.8 Opus 4.8, 80.5 Opus 4.7)
- Terminal-Bench 2.1: **70.8%**; DeepSWE (2.5 table): 9.7 (2.5-era, not this model)
- LiveCodeBench / SciCode: no verified public score found for this model

Long context:

- 1M native with LSA trained on hundreds of billions of 1M-context tokens; no MRCR/RULER/GraphWalks figure published in the README table (LongCat-2.5 comparison page lists MRCR-class results only for 2.5).

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 70.8 and BrowseComp 79.9 are near-frontier for a mid-2026 open model; FORTE 73.2 ties Opus 4.6. Capped by no MCP Atlas/Claw rows.
- **Reasoning: 82/100.** GPQA 88.9% is strong but 5 points behind the leaders; IMO-AnswerBench 81.8% and IFEval 90.0 support it. Capped by the GPQA delta and missing HLE.
- **Context window: 95/100.** 1M native with LSA trained on 1M-context data; no retrieval-quality figure published, so it sits just under the 1M-with-retrieval-proof models.
- **Multimodal: 15/100.** Text-only in/out — the LongCat-2.0 flagship has no vision input (the separate Omni line covers multimodal).
- **Coding: 84/100.** SWE-bench Pro 59.5% beats GPT-5.5 and trails only Opus 4.7/4.8; Multilingual 77.3% is solid. Capped by the lack of LCB v6 / DeepSWE rows for this checkpoint.
- **Cost efficiency: 94/100.** $0.30/$1.20 per 1M with MIT open weights — very cheap for 1.6T-class quality.
- **Overall Score: 72/100.** Best fit for self-hosted 1M-context coding agents and long-horizon tool work; the text-only modality is the hard cap.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (meituan-longcat/LongCat-2.0 GitHub README evaluation table and tech-blog links, LongCat official benchmarks page, earlier self-exclusion notes for the owl-alpha merge); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [meituan-longcat/LongCat-2.0 — GitHub README (full evaluation table)](https://github.com/meituan-longcat/LongCat-2.0)
  - [LongCat benchmarks hub — longcatai.org](https://www.longcatai.org/benchmarks/)
  - [LongCat-2.0 tech blog](https://longcat.chat/blog/longcat-2.0)
  - [meituan-longcat/LongCat-2.0 — Hugging Face](https://huggingface.co/meituan-longcat/LongCat-2.0)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.