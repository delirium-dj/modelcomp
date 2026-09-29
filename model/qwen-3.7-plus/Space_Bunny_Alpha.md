# Qwen3.7 Plus — findings by Space Bunny Alpha

- Source: Alibaba Qwen / Qwen3.7 Plus
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Plus
- **Short description:** Alibaba's cost-effective Qwen3.7 multimodal model for coding, tool use, productivity workflows, and interactive GUI/mobile agents.
- **Provider / access:** Alibaba Cloud Model Studio (Beijing, Singapore, Frankfurt, US, Tokyo, Hong Kong); OpenRouter `qwen/qwen3.7-plus` (dated slug `qwen3.7-plus-20260602`); OpenCode Zen `qwen3.7-plus`. No public open-weight checkpoint was found for the Plus variant.
- **Release / knowledge:** OpenRouter lists 2026-06-03 (canonical slug 2026-06-02); the Alibaba page (last updated 2026-09-28) states the current `qwen3.7-plus` is functionally equivalent to snapshot `qwen3.7-plus-2026-05-26`. No verified exact knowledge cutoff found.
- **IDs:** `qwen3.7-plus`; `qwen3.7-plus-2026-05-26`; OpenRouter `qwen/qwen3.7-plus`.
- **Context window:** Alibaba documents max input **991,808** tokens (983,616 in thinking mode), max output **131,072**, max chain-of-thought **262,144**, and a **1,000,000**-token context window. OpenRouter reports 1,000,000 context. The 991K/131K pair is the authoritative API limit.
- **Modalities:** **Text, image, and video input** with text output — video input is now verified on the Alibaba capability table for every listed region, superseding the earlier "image only" OpenRouter metadata. Reasoning, function calling, structured outputs, web search, prefix completion, and context caching are supported. OpenRouter still lists `text+image->text` for this route; the two are kept separate and the vendor table is treated as authoritative.
- **Pricing (as of 2026-09-29):** Beijing tiers are **$0.276 in / $1.101 out** per 1M for input ≤256K, rising to **$0.826 in / $3.301 out** for 256K–1M. Singapore/US-Scope: $0.40/$1.60 and $1.20/$4.80. OpenRouter lists $0.32 in / $0.064 cached / $1.28 out. OpenCode Zen lists $0.40/$1.60. Alibaba states list prices exclude limited-time promotions; the current promotional window is documented to **expire 2026-09-30**, so the displayed tier prices may not survive past that date.
- **Architecture:** Proprietary; parameter count was not disclosed.

### Raw benchmarks found

> Alibaba documentation, Artificial Analysis, and OpenRouter measurements are used below. The model is proprietary and no official open model-card table was found.

Agent / tool use:

- Tau2-Bench Telecom: **93.0%**; IFBench: **78.0%**; Terminal-Bench Hard: **47.0%** (Artificial Analysis/OpenRouter).
- Artificial Analysis Agentic Index: **17.5**; Coding Index: **55.9** (OpenRouter benchmark summary).
- GDPval-AA: **12.8%** (Artificial Analysis/OpenRouter).

Reasoning / knowledge:

- GPQA Diamond: **90.0%**; HLE: **35.6%** (official Qwen3.8-Flash-Next comparison table row for Qwen3.7 Plus, and OpenRouter summary).
- Artificial Analysis Intelligence Index: **25** on **v4.3.2**, rank **#22/176** (Artificial Analysis, accessed 2026-09-29; composite benchmark). This supersedes the previously recorded 25.2.
- AA-LCR: **73.0%**; CritPt: **9.1%**; AA-Omniscience Accuracy / Non-Hallucination Rate: **22.5% / 72.3%** (OpenRouter summary).
- Intelligence Index run verbosity: **130M** output tokens versus a **87M** peer median (Artificial Analysis).

Coding:

- SciCode: **46.1%**; Coding Index: **55.9%**; Terminal-Bench Hard: **47.0%** (Artificial Analysis/OpenRouter).
- SWE-bench Pro **55.8%**; LiveCodeBench v6 **89.6%**; SWE-bench Multilingual **75.8%** (official Qwen3.8-Flash-Next comparison table).
- No exact public SWE-bench Verified score was found.

Long context:

- AA-LCR: **73.0%** with a verified 1M context (Artificial Analysis/OpenRouter).
- Max input 991,808 / max output 131,072 with a 262,144-token chain-of-thought budget (Alibaba documentation).
- No standalone exact-model MRCR/RULER/GraphWalks result was found.

Multimodal:

- Text/image/video input with text output is verified by the Alibaba capability table across all six regions.
- Vendor comparison rows for Qwen3.7 Plus: ClawEval-MM **57.4 Pass@3 / 60.1 avg**; AndroidWorld **81.0**; OSWorld 2.0 **19.4 binary / 48.0 partial**; Vision2Web **42.1**; ERQA **69.8**; **LVBench 76.2**; RealWorldQA **86.9**; MathVision **90.3 with CI**; CharXiv (RQ) **85.8 with CI** (official Qwen3.8-Flash-Next comparison table).

Speed:

- Artificial Analysis measures **57.3 output tokens/second** (Alibaba API) against a ~112 t/s peer median — bottom of its price tier (Artificial Analysis, accessed 2026-09-29).

### Normalized scores (1–100)

- **Tool use: 83/100.** Tau2 Telecom at 93.0% and IFBench at 78.0% show strong tool/instruction performance; Terminal-Bench at 47.0% and Agentic Index at 17.5 limit the rating.
- **Reasoning: 82/100.** GPQA at 90.0% and AA-LCR at 73.0% are strong, while HLE at 35.6%, CritPt at 9.1%, and the v4.3.2 Intelligence Index at 25 cap it.
- **Context window: 98/100.** The 1,000,000-token window with 991,808 max input and a 262,144-token thinking budget is near the methodology's top tier.
- **Multimodal: 70/100.** Video input is now verified alongside image and text, and the vendor table supplies a broad exact-model visual set (LVBench 76.2, RealWorldQA 86.9, CharXiv 85.8 with CI), though no independent exact-model visual benchmark was found.
- **Coding: 77/100.** SciCode at 46.1%, Coding Index at 55.9%, and Terminal-Bench at 47.0% are useful but not frontier-leading; missing SWE-bench Verified evidence limits confidence.
- **Cost efficiency: 88/100.** Beijing tiers of $0.276/$1.101 (≤256K) are inexpensive, but the 256K–1M tier triples to $0.826/$3.301 and the current promotional pricing is documented to expire 2026-09-30, so the discount is not durable.
- **Overall Score: 82/100.** (83 + 82 + 98 + 70 + 77) / 5 = 82.0. A cost-effective long-context multimodal model for interactive agents and productivity workflows, with verified video input and strong tool metrics but limited independent exact-model coding and visual evidence.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Alibaba Cloud Model Studio model documentation (last updated 2026-09-28), the official Qwen3.8-Flash-Next comparison table, Artificial Analysis, and OpenRouter API metadata for the exact Qwen3.7 Plus route; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
