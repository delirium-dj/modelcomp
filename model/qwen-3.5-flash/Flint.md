# Qwen3.5 Flash — findings by Flint

- Source: Alibaba (Qwen / Alibaba Cloud)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 Flash
- **Short description:** Alibaba's hosted production-grade Qwen3.5 Flash model (functionally equivalent to snapshot `qwen3.5-flash-2026-11-06`) — hybrid Gated Delta Network + sparse MoE architecture, native multimodal (text, images, videos), built for inference efficiency; the hosted version carries a 1M context and official built-in tools. Closed hosted model (no open weights for the Flash tier).
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.5-flash`); also on Hugging Face / ModelScope as Qwen3.5-35B-A3B family member context.
- **Release / knowledge:** Released 2026-11-06 (snapshot); Qwen3.5 generation announced 2026-11-06; knowledge cutoff not verified in sources found.
- **IDs:** `qwen3.5-flash`; snapshot `qwen3.5-flash-2026-11-06`.
- **Context window:** 1,000,000 tokens (max input 991,808; thinking-mode max input 983,616); max output 65,536; max chain-of-thought 81,920.
- **Modalities:** Native multimodal — text, image, video input; text output; thinking + instruct modes; tool calling; structured outputs; code interpreter (limited time free); web search.
- **Pricing (as of 2026-10):** API $0.10/$0.40 per 1M input/output (cache creation $0.125, cache read $0.01); batch 50%; free quota only in Singapore (1M tokens).

- **Architecture:** Hybrid GDN + sparse MoE (derived from Qwen3.5-35B-A3B design), multimodal, reasoning + instruct modes.

### Raw benchmarks found

Independent (benchgap, Epoch AI, BenchmarkList, OnlySOTA, Phaseo, AIWire, Shawn Hack, Aggregate):

- GPQA Diamond: **86.6%** (benchgap, est. ±1.7); **82.3%** (Epoch AI, run independently).
- LiveCodeBench v6: **87.6%** (benchgap, est.); **83.3%** (Epoch / Vals).
- SWE-bench Verified: **76.3%** (benchgap, est. ±4.4); **64.4%** (Vals AI measured); self-reported 72.4% (Phaseo).
- SWE-bench Pro: **57.0** (benchgap, est.); OpenHands Index: SWE-bench 62.0%.
- DeepSWE: **56.3%** (benchgap, est.); Vals did not list DeepSWE for Qwen3.5-Flash.
- Terminal-Bench 2.0: **24.7%** (benchgap, BenchmarkList); OpenHands? Terminal-Bench 2.0 — Arena.
- AA Intelligence Index: **20.2** (benchgap, est.).
- AA Coding Index: **45.3** (benchgap, est.).
- AA-Omniscience accuracy: **28.8%**.
- HMMT Feb 2026: 82.0%; HMMT Nov 2025: 88.3%.
- Epoch AI: FrontierMath Tiers 1–3 9.5–18.2%, OTIS Mock AIME 84.4%, SimpleQA 20.3%.

Arena / human preference (AIWire, Aggregate, OnlySOTA):

- LMArena rating: Text overall **1396** ±4 (rank ~169/419, 61,776 votes, Oct 28, 2026); Text Coding **1435** (177/414, 17,729 votes); WebDev **1244** (140/152).
- Aggregate: composite rating **1684 ± 9**, rank #238 of 1648 rated models.
- OnlySOTA: Arena Code best rank #140; Epoch AI FrontierMath Tiers 1–3 rank #77/85; Arena Text overall rank #169.

Cross-source comparison & conflicts:

- Large divergence across sources: AA Intelligence Index ~20, benchgap estimates ~86 GPQA / ~76 SWE-bench, Epoch GPQA 82.3, Arena Elo ~1400 — different benchmarks, different measurement eras.
- SWE-bench Verified: benchgap 76.3 vs Vals 64.4 vs self-reported 72.4 — spread within ~12 pp.
- Arena human-preference Elo (~1396–1435) vs objective benchmarks (GPQA 86, SWE-bench 64–76) — different constructs.

### Normalized scores (1–100)

- **Tool use: 45/100.** Terminal-Bench 2.0 24.7%, OpenHands Index 38.1, agentic median low — below frontier for tool use.
- **Reasoning: 55/100.** GPQA Diamond 82–87, HLE ~30–35, AA Index 20 — strong for its class but mid-band.
- **Context window: 100/100.** Documented 1M context (top tier).
- **Multimodal: 80/100.** Native text+image+video input, text output.
- **Coding: 60/100.** SWE-bench Verified 64.4 (Vals), LiveCodeBench 83.3, DeepSWE 56.3, Terminal-Bench 2.0 24.7 — mid-band coding.
- **Cost efficiency: 90/100.** $0.10/$0.40 per MTok — cheap.

- **Overall Score: 68/100.** Mean of the five quality dims (Tool 45 + Reasoning 55 + Context 100 + Multimodal 80 + Coding 60) / 5 = 68.0 → 68; Cost efficiency excluded.

## Signature

- Provided by: **Flint** — 2026-11-06
- Method: public web research prioritizing official model card/docs (Alibaba Cloud Model Studio qwen3.5-flash docs, Qwen3.5 announcement) plus independent benchmarks/reviews (benchgap, Epoch AI, BenchmarkList, OnlySOTA, AIWire, Aggregate) — three independent web searches.
- Reference URLs:
  - [Qwen3.5-Flash Model Info - Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-flash)
  - [Qwen3.5: Towards Native Multimodal Agents - Alibaba Cloud Community](https://www.alibabacloud.com/blog/qwen3-5-towards-native-multimodal-agents_602894)
  - [Qwen 3.5 Flash Benchmark Scores & Evals - BenchmarkList](https://benchmarklist.com/models/qwen-qwen3.5-flash-02-23/)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
