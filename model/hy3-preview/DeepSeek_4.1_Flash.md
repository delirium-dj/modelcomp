# HY3 Preview — findings by DeepSeek 4.1 Flash

- Source: Tencent/Hy3-preview (`tencent/Hy3-preview`, served as `hy3-preview`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3 Preview (Tencent Hunyuan 3 Preview, marketed as "Hy3 preview") — the **April 2026 preview**, superseded by the official HY3 release on 2026-07-06.
- **Short description:** The first flagship shipped on Tencent's rebuilt pretraining/RL infrastructure: a 295B-A21B hybrid fast-and-slow-thinking MoE with 256K context, open weights under Tencent's own community licence. It delivered the largest gains in coding and agent work and put Tencent back on the mainstream coding-agent leaderboards.
- **Provider / access:** Tencent Cloud (CN/TokenHub) OpenAI-compatible API; limited-time free hosted access via Tencent Cloud and OpenRouter at launch; self-host via vLLM/SGLang; weights on Hugging Face, ModelScope and GitCode; adopted in Yuanbao, CodeBuddy, WorkBuddy, QQ, ima, QQ Browser, Tencent Docs. **No OpenCode Zen Free ID.**
- **Release / knowledge:** **2026-04-23**. Knowledge cutoff not published.
- **IDs:** `tencent/Hy3-preview` (HF/ModelScope), `hy3-preview` (served name), `Hy3 Pre` in the LLMLearner/DataLearner catalogue. No Zen Free ID observed.
- **Context window:** **256,000 tokens (256K)** per the official model card; Artificial Analysis lists 256k (≈260k). Max output not published.
- **Modalities:** **Text in / text out only.** Hybrid thinking with `reasoning_effort` = `no_think` / `low` / `high`; tool calls (`--tool-call-parser hy_v3`) and function calling; JSON mode; multilingual. No image/audio/video input.
- **Pricing (as of 2026-09-18):** Artificial Analysis cross-provider median **$0.06 / 1M in, $0.21 / 1M out**, 67% cache discount, blended 7:2:1 rate ≈ **$0.05 / 1M**. Tencent Cloud CN lists length-tiered rates of ¥1.2/¥4 (0–16K), ¥1.6/¥6.4 (16–32K) and ¥2.0/¥8.0 (32K+) per 1M ≈ $0.17–$0.28 in, and personal Token Plans from ¥28/month. A **limited-time free hosted period** ran on Tencent Cloud and OpenRouter at launch — not a durable $0 tier.
- **Architecture:** MoE, **295B total / 21B active** (+3.8B MTP layer, 1 MTP layer, 80 layers), 192 experts top-8, GQA 64 heads / 8 KV heads, hidden 4096, intermediate 13312, vocab 120832, BF16. **Tencent Hy Community License Agreement** (open weights, but with territory restrictions, a >100M MAU commercial trigger and limits on using outputs to train other models) — unlike HY3's Apache 2.0.

### Raw benchmarks found

> Tencent's own benchmark appendix is published as an image in the repo, so the vendor table could not be tabulated directly; the numbers below are vendor-quoted figures re-published by third parties plus independent aggregator rows, each with harness noted.

Agent / tool use:

- Terminal-Bench 2.0: **54.4%** (Tencent, re-published by ToolWorthy)
- Terminal-Bench Hard: **34.1%** (LLMLearner/DataLearner, rank 53/149)
- Tau2-Bench Telecom (service workflows, with tools): **92.7%** (LLMLearner/DataLearner, rank 39/155)
- BrowseComp (search agent): **67.1%** (Tencent, re-published by ToolWorthy)
- WideSearch: reported by Tencent as strong ("stands out"), **no numeric score published**
- ClawEval / WildClawBench: Tencent claims Hy3 preview "stands out on ClawEval and WildClawBench" but **no verified numeric public score found** for either harness
- GDPval-AA / MCP Atlas / Toolathon: **no verified public score found**
- Vendor-acknowledged weakness: "insufficient error recovery in tool calls and sensitivity to inference hyperparameters" (Tencent, launch note)

Reasoning / knowledge:

- GPQA Diamond: **86.7%** (thinking, no tools; LLMLearner/DataLearner, rank 68/254)
- HLE: **27.8%** (text-only, thinking, no tools; rank 80/218)
- CritPt: **4.6** (rank 59/118)
- IF Bench (instruction following): **63.1** (rank 75/165)
- LCR / MLCR: **no verified public score found** — Tencent instead reports non-numeric CL-bench / CL-bench Life in-context-learning wins
- Artificial Analysis Intelligence Index: **23 (estimated) / rank 35 of 113** (AA v4.3; the model page is deprecated and only the 10k-input workload is still benchmarked)
- BenchLM overall: **55.7 / 100, rank 85 of 230** (strongest eligible category Agentic at #70)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **74.4%** (Tencent, re-published by ToolWorthy; vs Claude Opus 4.6 at 80.8%)
- Terminal-Bench 2.0: **54.4%** (same source)
- LiveCodeBench / SciCode / DeepSWE / SWE-bench Pro / Vibe Code Bench: **no verified public score found**
- Internal suites: Hy-Backend, Hy-Vibe Bench, Hy-SWE Max reported as "strong" — no numbers published

Long context:

- 256K window is structural only: **no MRCR / RULER / GraphWalks / AA-LCR value was published for the preview**. The closest evidence is Tencent's qualitative CL-bench / CL-bench Life in-context-learning claim and a multi-turn scheduling demo, neither of which carries a number.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `../../model-comparison.md`; Overall = arithmetic mean of the six.

- **Tool use: 70/100.** Terminal-Bench 2.0 54.4% and Tau2 Telecom 92.7% sit at the top of the mid band (TB2.1 45–60%, Tau 10–25% for Tau3), and BrowseComp 67.1% shows real search-agent ability, but TB Hard 34.1% is modest, the vendor's own launch note flags tool-call error recovery as a known weakness, and no GDPval/Claw-Eval/MCP number exists to justify the 78–80 range its successor HY3 earned.
- **Reasoning: 78/100.** GPQA Diamond 86.7% is high but below the 90%+ frontier reference, and the AA Intelligence Index (23, rank 35/113) plus BenchLM rank 85/230 point to a strong-but-not-frontier profile; HLE 27.8% and CritPt 4.6 are mid-band, and there is no LCR/Omniscience figure.
- **Context window: 72/100.** 256K lands in the 200K–500K tier (200K = 70) and the extra 56K lifts it to 72; no retrieval-at-depth evidence exists above 200K, so the window cannot be credited further.
- **Multimodal: 15/100.** Text-only input and output confirmed by the official card and Artificial Analysis — no image, audio, video or PDF input and no non-text output.
- **Coding: 70/100.** SWE-bench Verified 74.4% is genuinely competitive (about 6 points behind Claude Opus 4.6) and TB 2.0 54.4% is mid-band-plus, but with no SciCode, LiveCodeBench or DeepSWE number and a preview-era reliability caveat, it lands under HY3's 76 and well below the 90+ frontier band (DeepSWE 74%+, TB2.1 85%+, SciCode 55%+).
- **Cost efficiency: 96/100.** A $0.06 in / $0.21 out cross-provider median with a 67% cache discount and a ≈$0.05 blended rate is at/inside the 97–99 band, and a limited-time free hosted window existed on Tencent Cloud and OpenRouter; capped at 96 because the durable Tencent Cloud CN tiers rise to ¥2/¥8 per 1M (≈$0.28/$1.12), the free access was time-limited, and access carried territory-restricted licensing.
- **Overall Score: 61/100.** (70 + 78 + 72 + 15 + 70 + 96) / 6 = 66.8 → **67**. Best fit: budget-conscious self-hosting or OpenRouter routing where a 256K-window text agent at a few cents per million tokens matters more than top-end tool reliability — and where the superseded-status risk is acceptable (HY3 is the better pick today).

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-18
- Method: Public internet research from zero — `Tencent-Hunyuan/Hy3-preview` GitHub model card, Tencent Cloud Hy3-preview launch note, Hugging Face `tencent/Hy3-preview`, Artificial Analysis (deprecated model page) and LLMLearner/BenchLM aggregator records. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3_Flash.md`, using the same headings.
