# GLM 5.3 FlashX — findings by Kimi K3

- Source: Zhipu AI / Z.ai (`glm-5.3-flashx`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX (GLM-5.3-FlashX)
- **Short description:** High-speed variant of Z.ai's GLM-5.3-Flash — a natively multimodal 320B-total / 18B-active MoE with hybrid sparse+linear attention, serving up to ~200 tok/s. Same architecture as Flash; tuned for speed. Flag: variant of `glm-5.3-flash` (same weights family).
- **Provider / access:** Z.ai API (OpenAI-compatible Chat Completions); also OpenRouter `z-ai/glm-5.3-flashx` (reasoning, tools, JSON mode, streaming confirmed on OpenRouter API reference).
- **Release / knowledge:** 2026-09-18 (LMMarketCap; base GLM-5.3-Flash released 2026-08-26). Knowledge cutoff not published.
- **IDs:** `z-ai/glm-5.3-flashx` (OpenRouter); Z.ai first-party `glm-5.3-flashx`. No OpenCode Zen Free ID verified.
- **Context window:** 1,048,576 tokens total; 131,072 max output (LMMarketCap, matching the base Flash's 1M window).
- **Modalities:** text/image/video in → text out; extended reasoning (chain-of-thought); function/tool calling; JSON mode; streaming; web-search tool.
- **Pricing (as of 2026-10-09):** $0.37 / $1.25 per 1M in/out (LMMarketCap; ~2.5x the base Flash's $0.15/$0.50 for the speed tier). Paid; no permanent free tier verified.
- **Architecture:** 320B total / 18B active per token, MoE (8 of 288 experts), KDA linear + NoPE sparse MLA hybrid attention, IndexPool KV compression (~3x less attention compute, 4.4x smaller KV cache vs GLM-5.3), native FP8, 1 MTP draft layer. Base Flash ships MIT open weights; FlashX weights-hosted status not verified (LMMarketCap lists "Open weights: No" for the FlashX endpoint).

### Raw benchmarks found

> FlashX-specific public benchmark coverage is thin (0 task benchmarks on LMMarketCap as of 2026-10-08). Numbers below marked *(Flash proxy)* come from the base GLM-5.3-Flash launch table, which shares FlashX's architecture — provisional for FlashX.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** *(Flash proxy; Z.ai-reported via MarkTechPost; ref: Opus 4.8 85.0, GPT-5.6 Terra 87.4)*
- AutomationBench: **48.8%** *(Flash proxy; vs GLM-5.2 26.2)*
- LMSYS Arena Elo (FlashX): **1475**; Vision Elo **1278**; percentile 95.8 (LMMarketCap, 2026-10-08)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- HLE: **55.3%** *(Flash proxy; Z.ai-reported via MarkTechPost)*
- OfficeQA Pro: **62.4%** *(Flash proxy; "ahead of Opus 4.8" per Z.ai)*
- GPQA Diamond / CritPt / LCR: no verified public score found
- Artificial Analysis Intelligence Index (base Flash): **57** (v4.1.1; @ $0.045/task, 48.7 tok/s, 1.52s TTFT) — FlashX not separately indexed; benchlm ranks base Flash #55/216 at 57.3/100 (Estimated)

Coding:

- DeepSWE v1.1: **63.4%** *(Flash proxy; vs GLM-5.2 46.2)*
- Z.ai Code Bench v1.0 (max): **29.0%** *(Flash proxy; vs Opus 4.8 29.5)*
- LMMarketCap Coding rank (FlashX): **#111/448, composite 78/100**
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- 1M-token window with IndexPool retrieval optimization (Z.ai architecture notes via MarkTechPost); no MRCR/RULER public number found.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 85/100.** Strong agentic showings (AutomationBench 48.8 vs GLM-5.2's 26.2; Terminal-Bench 84.3) plus confirmed tools/JSON/web-search — capped because FlashX-specific agentic runs aren't published (Flash proxies).
- **Reasoning: 82/100.** HLE 55.3% and OfficeQA Pro 62.4% are well past GLM-5.2 and near Opus 4.8; capped by lack of GPQA/CritPt and AA-index confirmation for FlashX itself.
- **Context window: 93/100.** 1M tokens with IndexPool long-context retrieval engineering and 131K max output; capped by absence of public MRCR/RULER numbers.
- **Multimodal: 72/100.** Native text+image+video intake is broad for the tier, but vision is the family's weak flank (trails Gemini 3.7 Flash on BabyVision/MVbench per MarkTechPost; Vision Elo 1278 vs Arena 1475) and output is text-only.
- **Coding: 84/100.** DeepSWE 63.4 / Z.ai Code Bench 29.0 ≈ Claude Opus 4.8 level on internal coding suites (proxied); independent coding composite ranks it top-25% (#111/448). Capped by missing SWE-bench Verified/LiveCodeBench public runs.
- **Cost efficiency: 92/100.** $0.37/$1.25 per 1M is ~84% under coding-category average (LMMarketCap) for near-Opus-class agentic output.
- **Overall Score: 83/100.** Mean of 85/82/93/72/84 = 83.2 → 83. Best fit: high-throughput coding/agentic pipelines that want near-frontier agentic ability at flash-tier price, with video/image input and a 1M window.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (lmmarketcap.com model page, MarkTechPost launch analysis, OpenRouter API reference, z.ai blog reference, benchlm.ai listing); scores are normalized 1–100 interpretations, not official vendor scores. FlashX-specific task benchmarks were unavailable — base-Flash architecture-shared numbers are marked as proxies.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
