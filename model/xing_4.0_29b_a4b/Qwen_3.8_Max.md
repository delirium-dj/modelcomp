# Xing 4.0 29B A4B — findings by Qwen 3.8 Max

- Source: China Telecom TeleAI (`XingChen-AGI/Xing4.0-29B-A4B`; id `xingchen-agi/xing4.0-29b-a4b`; **no Artificial Analysis Intelligence Index page**)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** A genuine, downloadable **Apache-2.0 29B-total / 4B-active sparse-MoE agentic model** from China Telecom's TeleAI (the successor to the TeleChat line), and the notable engineering claim is **"first model of this scale trained end-to-end on Huawei Ascend 910C NPUs with MindSpore/MindFormers"** rather than Nvidia GPUs. It is scored (not excluded): a distinct shipped artifact with a published model card, HF weights, and a live **OpenRouter `:free` route**. Its profile is **agentic-coding-heavy** — the model card's marquee numbers are **SWE-bench Verified 75.0 / Terminal-Bench 2.1 57.5 / SWE-bench Multilingual 66.0**, competitive with the ~30%-larger-active Qwen3.6-35B-A3B on coding while activating a comparable 4B-vs-3B footprint. **Two structural caveats cap the confidence:** (1) **every figure is vendor-reported** — there is **no Artificial Analysis Intelligence Index / Speed / Cost page** (the "AA.LCR 61.0" in the card is a *vendor-run harness*, not an AA-hosted measurement), and **no GPQA, LiveCodeBench, HLE or MMLU-Pro number exists**; (2) the Ascend/MindSpore stack is a **training-time** distinction (inference is standard OpenAI-compatible via vLLM/SGLang), so the meta's "portability caveat outside China" is a *training-provenance* note, not an inference limitation.

## Model card

- **Name:** Xing 4.0 29B A4B (a.k.a. `Xing4.0-29B-A4B`; Xing series, formerly **TeleChat**)
- **Short description:** China Telecom Artificial Intelligence Technology Co. (**TeleAI**)'s **Sep-2026 Apache-2.0 sparse-MoE agentic model**: 29B total / ~4B active per token (64 routed + 1 shared expert, 4 experts active/token), an **mHC + MLA + MTP** backbone aimed at tool-calling, multi-step planning and long-horizon agent chains. Flagged as the **first model of its scale trained entirely on Ascend 910C NPUs** (MindSpore/MindFormers), with a claimed ~96% training-throughput lift over out-of-the-box.
- **Provider / access:** **OpenRouter `xingchen-agi/xing4.0-29b-a4b:free`** (single provider, text Chat-Completions, `reasoning`/`tools` params accepted; not in EU in-region routing) + a **free OpenCode Zen promo tier** + **$0 Apache-2.0 self-host**. `noFreeId: true`. **No Artificial Analysis page.**
- **Release / knowledge:** Released **mid-Sep 2026** (HF weights 2026-09-16; press 2026-09-18/22). Successor to the TeleChat series.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B` (HF / ModelScope) · `xingchen-agi/xing4.0-29b-a4b` (OpenRouter, `:free` variant).
- **Context window:** **262,144 native (256K), extensible to 512,000 via YaRN.** Corroborated across the model card, OpenRouter (262,144), and press.
- **Modalities:** **Text in / text out only.** Reasoning-mode + tool/function calling supported; **no image/audio/video** (matches meta).
- **Pricing:** **$0** — Apache-2.0 self-host + OpenRouter `:free` ($0/$0) + free Zen promo tier. No published paid per-token rate.
- **Architecture:** **29B-total / 4B-active MoE** (64 routed + 1 shared experts, 4 active/token), **mHC + MLA + MTP**, **trained on Ascend 910C + MindSpore/MindFormers**. Serves via HF Transformers, vLLM, SGLang, KTransformers; OpenAI-compatible API; fine-tunes via LLaMA-Factory / MindFormers; agent-framework alignment to OpenCode / Claude Code / OpenClaw / Hermes.

### Raw benchmarks found

> **Provenance: model card / vendor, as reproduced by third-party coverage (MindStudio, AICoder, ai-tldr).** **No Artificial Analysis Intelligence Index page exists** for this model (AA URL 404), and the "AA.LCR" row below is a **vendor-run harness on AA's long-context-reasoning eval**, *not* an AA-hosted measurement — it carries no independent Speed/Cost/Index. Competitor columns (Qwen3.6-35B-A3B, Gemma4-26B-A4B) are those models' own scores, shown only for context and **never credited to Xing**. Evaluations noted as SWE-agent harness @ temp 1.0 / 210K ctx; Terminal-Bench @ 24h timeout avg-of-3; Claw-Eval / Tau3 avg-of-3/4.

**Coding (vendor — the model's stated strength):**
- **SWE-bench Verified: 75.0** (vs Qwen3.6-35B-A3B 76.0, Gemma4-26B-A4B 53.0) — very strong for a 4B-active MoE, essentially matching the larger-active Qwen.
- **SWE-bench Multilingual: 66.0** (vs Qwen3.6 67.2, Gemma4 51.0).
- **Terminal-Bench 2.1: 57.5** (vs Qwen3.6 51.5, Gemma4 30.0) — the widest margin in Xing's favor.

**Agent / tool use (vendor):**
- **Tau3-Bench (Sierra, pass^1): 64.63** (vs Qwen3.6 67.2, Gemma4 58.9) — multi-turn tool interaction; Xing middles the field.
- **Claw-Eval: 76.55** — top of the three-model comparison.
- **DeepresearchBII: 60.80** (vs Qwen3.6 59.7, Gemma4 39.3) — agentic research via OpenCode harness + Exa MCP live search.

**Reasoning / knowledge (vendor — thin, no standard knowledge bench):**
- **AIME2026 (competition math): 90.0** (vs Qwen3.6 92.7, Gemma4 88.3) — strong math; all three cluster.
- **AA.LCR (long-context reasoning, vendor-run): 61.0** — Xing's **relative weakness** (trails both Qwen3.6 62.0 and Gemma4 66.0).
- **IFBench (instruction-following): 69.67** (vs Qwen3.6 65.5, Gemma4 72.67) — middle of the pack.
- **No GPQA-Diamond, no LiveCodeBench, no HLE, no MMLU-Pro published** (meta's tradeoff concurs verbatim).

**Long context:**
- No needle/MRCR/RULER figure; the 256K-native/512K-YaRN window is the card spec, and Claw-Eval/DeepresearchBII were run at full 256K.

**Speed / cost:**
- **No AA Speed measurement** (no page). Throughput claims in the card are **training-time** (Ascend MoE-communication tuning, selective recomputation, graph-op fusion, Ascend C fused mHC operators → ~96% training-throughput lift), not inference tok/s. **Cost $0** (free route + Apache self-host).

> **Self-reported:** every number originates from TeleAI's model card / press. No neutral harness (Artificial Analysis / Vals / Epoch / swebench.com leaderboard / LMArena) has independently evaluated `Xing4.0-29B-A4B`. Discounted but usable — a real, downloadable, routable artifact (per the `pixel_canary` / `mimo-v2.6-distill-qwen-9b` precedent: score a genuine shipped model, discount vendor-only evidence rather than exclude it).

### Normalized scores (1–100)

- **Tool use: 64/100.** A genuinely agentic design (tool-calling, framework alignment, TB 57.5 / Claw-Eval 76.55 / DeepresearchBII 60.8 / Tau3 64.63), but the tool-use set is **all vendor-run** and middles the comparison field on multi-turn τ3.
- **Reasoning: 64/100.** **AIME2026 90.0** is a strong math result, but the reasoning picture is **thin** — no GPQA/HLE/MMLU, a weak **AA.LCR 61.0**, and **IFBench 69.67** only middle-of-pack. Credit for math; discount for missing knowledge coverage.
- **Context window: 80/100.** **256K native / 512K YaRN**, corroborated across card + OpenRouter + press, exercised at full length in two agentic evals — a top-tier context footprint for its class.
- **Multimodal: 50/100.** **Text-only** (corpus convention for text-only; no image/audio/video in or out).
- **Coding: 74/100.** The clear strength — **SWE-Verified 75.0 / SWE-Multilingual 66.0 / TB 2.1 57.5** is frontier-adjacent *for 4B-active*, but the entire set is **vendor-published with no AA index, no LiveCodeBench, no independent reproduction**, so it's held below what a corroborated 75 would earn.
- **Cost efficiency: 88/100.** **$0 across three paths** (Apache self-host + OpenRouter `:free` + Zen promo) is the best possible price; no meaningful offset since inference runs on standard vLLM/SGLang (the Ascend story is training-side). *(Scored; not counted in Overall.)*
- **Overall Score: 66/100.** Half-up mean of the five quality dims (64 + 64 + 80 + 50 + 74)/5 = **332/5 = 66.4 → 66**. **Curated `average.md` = 63.3 → div +2.7** (the report lands above the curated value on the strength of the 80 Context + coding-weighted profile, tempered by the total absence of independent verification).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**MindStudio benchmark teardown** 2026-09-18 — full vendor table with Qwen3.6-35B-A3B / Gemma4-26B-A4B context columns: SWE-Verified **75.0**, SWE-Multilingual **66.0**, Terminal-Bench 2.1 **57.5**, AIME2026 **90.0**, IFBench **69.67**, AA.LCR **61.0**, Tau3 **64.63**, Claw-Eval **76.55**, DeepresearchBII **60.8**; confirms 29B/4B-active, 64+1 experts/4-active, mHC+MLA+MTP, 256K/512K-YaRN, Ascend-910C/MindSpore training + ~96% throughput claim, vLLM/SGLang/KTransformers serving; **AICoder** news 2026-09-21 — corroborates card's SWE 75.0 / TB 57.50, TeleChat lineage, Apache-2.0, OpenCode/Claude-Code alignment, Ascend-trained-end-to-end; **OpenRouter** `xingchen-agi/xing4.0-29b-a4b:free` — free route, text Chat-Completions with `reasoning`/`tools` params, 262,144 ctx, single provider, no EU in-region; **GlobeNewswire** press 2026-09-22 — official China-Telecom release, "single-GPU deployment," SWE-bench Verified 75.0 top-of-class; **Artificial Analysis** — **no `xing-4-0-29b-a4b` page (404)**, so no independent Intelligence Index / Speed / Cost; curated meta verified — 256K/512K YaRN, text-only, $0 free-route + Apache self-host, "every number vendor-published," "no GPQA or LiveCodeBench figure exists," Ascend-portability caveat all confirmed). **All quantitative evidence is vendor-reported and discounted; the "AA.LCR" figure is a vendor-run harness, not an AA-hosted index.**
- Future sources: if Artificial Analysis (or Vals / Epoch / swebench.com / LMArena) evaluates `xingchen-agi/xing4.0-29b-a4b` directly, or if a **GPQA / LiveCodeBench / HLE number** is published, replace the vendor-only figures with reproduced values. **Guard against** (a) importing the **Qwen3.6-35B-A3B / Gemma4-26B-A4B** competitor-column numbers, (b) treating the **training-side Ascend 910C** throughput claim as an **inference speed** rating, and (c) reading **AA.LCR** as an AA-verified Intelligence Index — there is no AA page for this model.
