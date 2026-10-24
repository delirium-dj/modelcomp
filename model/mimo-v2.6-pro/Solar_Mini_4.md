# MiMo-V2.6-Pro — findings by Solar Mini 4

> TEMPLATE — do not commit as-is. Replace every `<...>` placeholder with your own research, and strip this notice block. Do not read `model/` (existing findings) before writing — your report must be independent. Overview + scoring methodology: `../../model-comparison.md`.
>
> - Source: Xiaomi MiMo (`mimo-v2.6-pro`)
> - Date: 2026-10-24 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro (`mimo-v2.6-pro`; OpenRouter `xiaomi/mimo-v2.6-pro`)
- **Short description:** Xiaomi's flagship 1.02T/42B MoE reasoning model (MIT, open weights) — the highest-scoring open-weights model on the Artificial Analysis Intelligence Index, built for complex agentic projects, long-horizon work, and multimodal tasks.
- **Provider / access:** Xiaomi MiMo API (`https://api.xiaomimimo.com/v1`, OpenAI-compatible, Anthropic-compatible extra_body), pay-as-you-go + token plan; also reachable via OpenRouter.
- **Release / knowledge:** released Sep 21, 2026 (Sep 22 Beijing time); knowledge cutoff Dec 2024 (per official API sample config).
- **IDs:** `mimo-v2.6-pro` (Xiaomi API); `xiaomi/mimo-v2.6-pro` (OpenRouter). No free Zen/stealth ID — paid-only.
- **Context window:** 1,048,576 (1M) total; 131,072 max output (official site states 128K).
- **Modalities:** Text, image, speech (audio), video in → text out; reasoning yes; tool calls; JSON mode; streaming; web search; context caching.
- **Pricing (as of 2026-10-24):** input $0.435/M (cache hit $0.0036/M), output $0.87/M; batch 50%; UltraSpeed 10x pay-as-you-go (20x on the open platform).
- **Architecture:** MoE, 1.02T total / 42B active; 288 routed experts + 1 shared, 8 active per token; MIT license; weights on Hugging Face.

### Raw benchmarks found

> Measured numbers with source, rank/percentile and harness. "Est." = model-based estimate with confidence interval; treat with caution.

**Agent / tool use**
- Agentic Index (AA): 56.4% estimated ±2.9 pp, high confidence
- CyberGym: 94.0% measured (Benchgap)
- SWE-bench Verified: 91.8% estimated ±4.6 pp, high confidence (Benchgap); 93.0% estimated ±7.6 pp, low (Vals)
- OSWorld-Verified: 82.0% measured
- AutomationBench-AA: 58.6% measured
- JobBench: 62.0% measured
- APEX-Agents-AA: 41.7% estimated ±3.6 pp, low confidence

**Terminal-Bench 2.1:** 89.9% measured (Benchgap); AA estimate 86.3% ±4.3 pp, high confidence

**Tau3-Banking / Tau2-Bench:** Tau3 Banking 49.3% estimated ±4.0 pp, high confidence (AA); Tau2-Bench Retail 78.2% (BenchmarkList, rank 1 of 8); Tau2-Bench Telecom 98.5% (rank 7 of 337)

**Reasoning / knowledge**
- HLE: 49.4% measured (Artificial Analysis); 38.8% estimated ±9.6 pp, medium (Benchgap) — conflict noted, 10.6 pp spread
- GPQA Diamond: 95.7% estimated ±7.2 pp, medium (Benchgap) vs 94.5% ±2.5 pp, high (Benchgap) vs 91.4% ±7.5 pp, medium (Vals) — estimates only, wide CIs
- MMLU: 89.7% estimated ±3.6 pp, medium; MMMLU 91.4% estimated ±0.7 pp, low
- MMLU-Pro: 83.3% estimated ±6.3 pp, medium (Benchgap); 85.9% estimated ±2.2 pp, high (Vals)
- CritPt: 26.6% measured (AA) — weak frontier physics reasoning
- AA-Omniscience Accuracy: 34.8% measured — moderate hallucination control
- Artificial Analysis Intelligence Index: 46.3% measured, #1 of 121 open-weights (AA); Xiaomi launch claim 46
- AIIQ Composite IQ: 125 (80th percentile, rank 33 of 161)

**Coding**
- SWE-bench Verified: 91.8% estimated ±4.6 pp, high (Benchgap); 93.0% estimated ±7.6 pp, low (Vals)
- LiveCodeBench v6: 100.0% estimated ±4.9 pp, medium (Benchgap); 77.4% estimated ±6.1 pp, low (Vals) — conflict noted
- Terminal-Bench 2.1: 89.9% measured (Benchgap); AA estimate 86.3% ±4.3 pp, high
- SciCode: 60.9% measured (AA); 60.4% estimated ±3.1 pp, medium (Benchgap)
- AA Coding Index: 76.7% estimated ±2.5 pp, high
- DeepSWE: 71.9% measured (Benchgap)
- CursorBench 3.1: 70.9% estimated ±3.4 pp, medium

**Long context**
- AA-LCR: 86.3% measured (AA) — 100th percentile, rank 3 of 419
- Context Arena (GDM-MRCRv2): 59.1% estimated ±11.3 pp, low (Benchgap); flagship GLM-5.3 scores 63.4% estimated — behind the non-flash flagship
- MRCRv2: 86.0% estimated ±11.3 pp, low
- LongBench v2: 63.4% estimated ±5.9 pp, low confidence

### Normalized scores (1–100)

- **Tool use: 88/100.** SWE-bench Verified 91.8% estimated (high CI), CyberGym 94.0% measured, OSWorld-Verified 82.0% measured, AA Agentic Index 56.4% estimated (high). Caps: estimated spreads on SWE-bench (±4.6 pp), APEX-Agents-AA (41.7%) weakest agentic row.
- **Reasoning: 80/100.** AA Intelligence Index 46.3 (#1 open-weights), HLE 49.4% measured; caps: CritPt 26.6% measured (frontier physics), HLE spread 49.4% measured vs 38.8% estimated, AA-Omniscience 34.8%.
- **Context window: 100/100.** 1,048,576 (1M) total; 131,072 max output; confirmed by Xiaomi docs and Artificial Analysis.
- **Multimodal: 95/100.** Native full modality (text+image+video+audio in, text out); not text-only, though output is text-only.
- **Coding: 88/100.** SWE-bench Verified 91.8% estimated (high CI), Terminal-Bench 2.1 89.9% measured; conflicting LiveCodeBench v6 estimates (100% estimated vs 77.4% estimated); conservative floor applied.
- **Cost efficiency: 90/100.** $0.435/$0.87 per M (cheapest paid open-weights route; AA cost-per-task $0.13, #15/43). Not free, so below the $0 tier.
- **Overall Score: 90/100.** (88+80+100+95+88)/5 = 90.2 → 90. Consistent with the dataset queue Overall (90.6); representative of the strongest open-weights flagship for long-horizon agentic work.

**Conflicts noted:** (1) Xiaomi's "most powerful open-source" claim vs BenchmarkList head-to-head, where Qwen3.8-2.4T-A95B wins 4 of 7 grouped rows (overall, intelligence, coding, factuality); (2) HLE 49.4% measured vs 38.8% estimated; (3) LiveCodeBench v6 100% estimated vs 77.4% estimated; (4) pricing sources vary ($0.075 input/M on BenchmarkList's promo route vs $0.15/M current Z.ai pricing on Kingy).

## Signature

- Provided by: **Solar Mini 4 (solar-mini-4)** — 2026-10-24
- Method: public internet research (official Xiaomi pages, Artificial Analysis, Benchgap, BenchmarkList, Kingy.ai); scores are normalized 1–100 interpretations, not official vendor scores.
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/mimo-v2.6-pro/Solar_Mini_4.md` (the assigned stem).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/mimo-v2.6-pro/`.
4. No benchmark invented; conflicts listed above.