# Qwen 3.8 Max — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen 3.8 Max (`alibaba/qwen3-8-max`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's flagship 2.4T sparse-MoE (A95B active) open-weight model with 1M multimodal context, a very broad agent/vision/coding suite and flat $2/$6 pricing — the strongest Qwen lineage entry here, though independent Vals re-runs of its agentic and terminal scores land below the vendor launch numbers.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope (`qwen3.8-max`); open weights on HF `Qwen/Qwen3.8-2.4T-A95B`; one-time 1M-token free quota, no Zen Free ID. Reasoning + tool calls.
- **Release / knowledge:** 2026 (Qwen blog "Qwen3.8-Max release benchmarks"); knowledge cutoff not disclosed.
- **IDs:** `alibaba/qwen3-8-max`; HF `Qwen/Qwen3.8-2.4T-A95B`.
- **Context window:** 1M in / 131K out (curated meta; BenchLM confirms 1M).
- **Modalities:** text, image, video in; text out; reasoning on; tool calls. No audio-in and no non-text output (per curated meta and published rows).
- **Pricing (as of 2026-10-02):** Paid $2 / $6 per 1M flat; open-weight self-hostable; one-time 1M-token free quota.
- **Architecture:** open-weight sparse MoE (2.4T total / ~95B active).

### Raw benchmarks found

> Independently verified against BenchLM (61 of 618 rows; 72.1/100, #16 of 645), citing the Qwen3.8-Max release benchmarks, Vals AI, VulcanBench, Proximal FrontierSWE and OpenHarmony Bench (fetched 2026-10-02). BenchLM flags partial coverage; most rows are vendor-published, so Vals re-runs (marked) are the independent cross-check.

Agent / tool use:

- Terminal-Bench 2.1 **86.6%** (vendor) but **Vals 67.4%** — a ~19pt independent gap
- OSWorld-Verified **86.1%**; AndroidWorld 85.3%; MobileWorld 77.8%; Toolathlon-Verified 72.5%; WideResearch 81.9%; CoWorkBench 74.8%; skillsBench 70.2%
- WebArena-Verified 66.8%; JobBench 53.4%; Agents' Last Exam 52.4%; OSWorld 2.0 19.4%; AutomationBench 27.3%

Reasoning / knowledge:

- GPQA-Diamond 92.6% (Vals 93.7%); **HLE 43.6%** — clears the 40% bar; MMLU-Pro (Vals) 88.6%; IFBench 82.8%
- MRCRv2 **92.9%**; LongBench v2 66.3%; MathVision w/ Python 97.7% / MathVision 95.2%
- No Artificial Analysis Intelligence Index or Omniscience/hallucination rows published (factuality unprofiled)

Coding:

- SWE-bench (Vals) **85.6%**; LiveCodeBench (Vals) 87.9%; PaperBench **93.0%**; Terminal-Bench 2.1 86.6%; VulcanBench v3 81.2%
- FrontierSWE 73.5%; SWE-bench Pro 67.7%; NL2Repo 55.9%; DeepSWE **56.6%** (under the 74 ref); FrontierSWE v2 15.8%; MLS-Bench Lite 41.0%

Multimodal / long context:

- CharXiv 93.5% (w/o tools 88.4); Video-MME (subtitle) **90.4%**; MLVU 90.8%; VideoMMMU 88.7%; LVBench 81.8%; MMVU 82.4%
- OmniDocBench 1.5 92.1%; RealWorldQA 88.0%; ScreenSpot Pro 84.5%; OCRBench V2 74.2%; MMMU-Pro 82.3%

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 87/100.** OSWorld-Verified 86.1%, AndroidWorld 85.3%, Toolathlon-Verified 72.5% and WideResearch 81.9% are a frontier agentic spread, and vendor Terminal-Bench 2.1 86.6% is near the 88 ref — but the independent Vals re-run (67.4%), AutomationBench 27.3% and OSWorld 2.0 19.4% hold it under the 90 band.
- **Reasoning: 87/100.** GPQA-Diamond 92.6/93.7%, HLE 43.6% clearing the bar, MMLU-Pro 88.6% and MathVision 95.2% are strong; MRCRv2 92.9% supports long-context reasoning, but the absence of any Intelligence Index / Omniscience profile (unmeasured factuality) and LongBench v2 66.3% cap it just under 90.
- **Context window: 95/100.** 1M-token window (131K out) meets the ≥1M tier and MRCRv2 92.9% is supportive; short of the ≥98%-at-512K+ standard for 100, so the band floor.
- **Multimodal: 88/100.** Text+image+video+document in with an exceptional, well-populated visual suite (Video-MME 90.4, MLVU 90.8, CharXiv 93.5, OmniDocBench 92.1) — top of the +video band (75–90); no audio-in and no non-text output keep it below the 90 tier.
- **Coding: 85/100.** SWE-bench (Vals) 85.6%, LiveCodeBench 87.9%, PaperBench 93.0% and Terminal-Bench 86.6% are strong, but DeepSWE 56.6% (under the 74 ref), FrontierSWE v2 15.8% and MLS-Bench 41.0% trim the hardest agentic-code band.
- **Cost efficiency: 78/100.** Flat $2 / $6 per 1M is well under the $3/$15≈60 anchor and open weights allow self-hosting; a one-time 1M free quota (no recurring free tier) — strong value. Cost is excluded from Overall.
- **Overall Score: 88/100.** Mean of Tool 87, Reasoning 87, Context 95, Multimodal 88, Coding 85 = 88.4 → 88. Best fit: frontier-adjacent multimodal agent and long-document/video work at disruptive $2/$6 open-weight pricing, where you re-verify terminal/agentic output (the Vals gap is real) and keep factual claims grounded — an unmatched value-to-breadth ratio in this audit rather than a pure peak-score leader.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Qwen3.8-Max release benchmarks plus Vals AI, VulcanBench, Proximal and OpenHarmony Bench independent re-runs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
