# DeepSeek V4-Flash-Vision-Exp — findings by DeepSeek 4.1 Flash

- Source: DeepSeek / DeepSeek-V4-Flash-Vision-Exp (`deepseek-v4-flash-vision-exp`)
- Date: 2026-10-01 (UTC) — refreshed second pass (previous Signature 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash-Vision-Exp (experimental multimodal checkpoint of the V4-Flash line)
- **Short description:** DeepSeek's experimental multimodal V4-Flash variant, released 2026-08-21 — image understanding bolted onto the 284B/13B-agentic V4-Flash text stack at no headline vision surcharge. On the 11 multimodal/agentic benchmarks DeepSeek disclosed at launch it beats Claude Opus 4.8 on only three (e.g. ZeroBench Pass@5 35.0 vs 34.0) and trails on the rest (NL2Repo 57.7 vs 69.7).
- **Provider / access:** DeepSeek API — `model=deepseek-v4-flash-vision-exp` (Chat Completions, Messages and Responses wire formats); images by base64, external URL or the Files API. **Retired/aliased 2026-09-10** (with the V4.1-Flash launch) to DeepSeek-V4.1-Flash at Flash prices.
- **Release / knowledge:** Released 2026-08-21; aliased 2026-09-10. Knowledge cutoff not disclosed.
- **IDs:** `deepseek-v4-flash-vision-exp` (legacy, now routed). **No open weights for the vision fork.**
- **Context window:** 1,048,576 tokens; **max output 384,000 tokens** (HokAI).
- **Modalities:** text and image in, text out; tool calls; thinking and non-thinking modes on the same ID; JSON output.
- **Pricing (as of 2026-10-01):** off-peak **$0.22 / 1M in, $0.007 / 1M cached, $0.66 / 1M out** (blended ≈$0.33/M); rates double during two weekday windows (01:00–04:00 and 06:00–10:00 UTC). Images bill as input tokens at a flat per-image rate regardless of resolution.
- **Architecture:** V4-Flash base is an open-weight MIT MoE (284B total / 13B active) with Hybrid Attention (Compressed Sparse Attention + Heavily Compressed Attention); the vision fork publishes **no open weights**.

### Raw benchmarks found

> DeepSeek published no independent benchmark table for the checkpoint; the numbers
> below are vendor statements or measurements of the V4-Flash base it is built on.

Agent / tool use:

- Terminal-Bench 2.1: **83.9%** (vendor; Claude Opus 4.8 85.0)
- NL2Repo: **57.7** (Opus 4.8 69.7, the largest gap); DSBench-Hard: **−8.1 gap points**; ApexBench Pass@1: **36.5** (Opus 39.4); Chartography: **64.3** (Opus 65.0)
- ZeroBench Pass@5: **35.0** (Opus 34.0 — a Vision-Exp win); Agents' Last Exam and DeepSWE also narrowly lead (vendor)
- Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.1%**; MMLU: **88.7%**; MMLU-Pro: **86.2%** (vendor technical report)
- HLE / LCR / CritPt / AA Intelligence Index: **no verified public score found**

Coding:

- SWE-bench Verified: **79.0%** (vendor); SciCode / LiveCodeBench / Vibe Code Bench / DeepSWE: **no verified public score found**
- Output speed: **88 tok/s** median (Artificial Analysis)

Long context:

- no MRCR/RULER/GraphWalks recall value was published for the checkpoint or its base; the 1M window is vendor-claimed only.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 83.9% (within a point of Opus 4.8), ApexBench 36.5 and 95.6% on the base line's τ²-bench support a high score; capped by the absence of any independent number for the vision checkpoint itself.
- **Reasoning: 82/100.** GPQA Diamond 88.1%, MMLU 88.7% and MMLU-Pro 86.2% are strong for the price class; the Flash line still trades knowledge depth for cost.
- **Context window: 95/100.** 1.05M tokens with up to 384K output is top-tier and per-image billing is flat; no recall-at-depth evidence keeps it below the maximum.
- **Multimodal: 85/100.** Native image input via base64/URL/Files-API with small wins over Opus 4.8 on ZeroBench and Agents' Last Exam but losses on NL2Repo/DSBench-Hard; capped by the experimental, now-aliased status and no published vision-specific benchmark.
- **Coding: 82/100.** SWE-bench Verified 79.0% is strong value, but the NL2Repo 57.7 vs 69.7 gap shows agentic coding is not the strength.
- **Cost efficiency: 90/100.** Off-peak $0.22/$0.66 per 1M with a $0.007 cache hit (blended ≈$0.33/M) is among the cheapest capable multimodal options; capped by peak-hour doubling and no free tier.
- **Overall Score: 86/100.** Mean of the five quality dims (88+82+95+85+82)/5 = 86.4 → 86. Best fit: cost-sensitive multimodal agent workloads that accept an experimental, now-aliased checkpoint for near-flagship tool behaviour at a fraction of the price.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (HokAI fact page, DeepSeek launch material, Artificial Analysis speed, Epoch AI figures via Model Beat); second-pass refresh of the 2026-09-18 report. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
