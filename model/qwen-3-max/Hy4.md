- Source: Alibaba/Qwen3-Max
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3-Max
- **Short description:** Alibaba's 2025-09-24 Cloud Summit flagship — the largest Qwen3 base model at >1T parameters trained on 36T tokens, in Instruct and Thinking variants. A distinct model; per the project identity roster the unhyphenated `qwen3-max` slug was renamed to this canonical hyphenated folder and must never be recreated.
- **Provider / access:** Qwen Chat (free trial), Alibaba Cloud Bailian API; "deep thinking" mode on the official site.
- **Release / knowledge:** 2025-09-24; knowledge cutoff: no verified public score found.
- **IDs:** `qwen3-max` / `qwen3-max-2025-09-23` / `qwen3-max-preview`. No free Zen ID verified.
- **Context window:** **262,144 tokens** in the Bailian API (Baike Qwen-Max article); **1M-token long-context training** is documented for the model, and 256K is quoted for the preview — reported separately by source/phase, not merged.
- **Modalities:** text in, text/code out; knowledge, reasoning, coding, instruction following, human-preference alignment, agent tasks, multilingual understanding. No verified image/audio/video input for this exact ID.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved pages — no verified public price found. Context caching is supported on Bailian.
- **Architecture:** MoE, **>1 trillion total parameters**, **36T pretraining tokens**; global-batch load balancing loss; PAI-FlashMoE giving +30% training efficiency; ChunkFlow for long-sequence training (+3x throughput vs sequence parallelism). Thinking-Heavy variant uses a code interpreter and parallel reasoning.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench (tool calling): **74.8** — above Claude Opus 4 (comparison row, labelled)
- Seven benchmark categories (knowledge, reasoning, coding, instruction following, human-preference alignment, agent tasks, multilingual) all described as industry-leading (directional)
- Alpha Arena real-investment competition (2025-11): **22.32% return, #1** (context, not a capability benchmark)
- Official version claimed top-3 globally, ahead of GPT-5 / Claude Opus 4 (directional vendor claim)
- LMArena text leaderboard: preview **#3** (directional)
- Tau3-Banking / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AIME 25 and HMMT maths: **100 (full marks)** for the Qwen3-Max-Thinking-Heavy variant (different ID, labelled lineage)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for the base ID

Coding:

- SWE-Bench Verified (Instruct): **69.6**, first-tier globally (Baike)
- SWE-bench Pro / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M long-context training support with ChunkFlow; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** Tau2-Bench 74.8 (beating Claude Opus 4), seven-category breadth, an Alpha Arena win and deep-thinking tool use; capped by no τ-bench/OSWorld figure.
- **Reasoning: 88/100.** 36T-token >1T-param flagship with full marks on AIME/HMMT for the Thinking-Heavy variant; capped by those being a different variant ID and no GPQA/HLE figure for the base.
- **Context window: 88/100.** 262K API window with 1M long-context training and ChunkFlow; capped by conflicting figures and no retrieval benchmark.
- **Multimodal: 72/100.** Scored conservatively: no verified image/audio/video input was documented for this exact ID.
- **Coding: 87/100.** SWE-Bench Verified 69.6 with a first-tier global rank; capped by no SWE-bench Pro / Terminal-Bench figure.
- **Cost efficiency: 82/100.** Free Qwen Chat trial and context caching, but no verifiable rate card; excluded from Overall.
- **Overall Score: 85/100.** Half-up mean of 88, 88, 88, 72, 87 = 84.6 → 85. Best fit: 2025-era flagship reasoning, coding and agent workloads; superseded by Qwen3.5 → Qwen4.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Qwen3-Max article retrieved via public web search excerpt (release, >1T params, 36T tokens, SWE-Bench Verified 69.6, Tau2-Bench 74.8, AIME/HMMT full marks for Thinking-Heavy, ChunkFlow, PAI-FlashMoE, Alpha Arena), plus the Baidu Baike Qwen-Max excerpt for the 262K API context and variant IDs — figures reported by source/phase, never merged. Identity handling follows the project's generated roster: the unhyphenated `qwen3-max` slug was renamed to this canonical hyphenated folder and must never be recreated. Qwen3-Max-Thinking / Instruct / preview figures are labelled by variant ID. Directional "top-3 / ahead of GPT-5" claims are not assigned numeric scores. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Qwen3-Max — 百度百科 (retrieved via search excerpt; specs, benchmarks, architecture)](https://baike.baidu.com/item/Qwen3-Max/66788826)
  - [Qwen-Max — 百度百科 (retrieved via search excerpt; 262K context, variant IDs)](https://baike.baidu.com/item/Qwen-Max/64919934)
