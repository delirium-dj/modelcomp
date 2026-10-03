# Gemini 3.5 Flash-Lite — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Gemini 3.5 Flash-Lite
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google DeepMind's fastest, most cost-effective 3.5-class model — a sparse MoE, natively multimodal reasoning model for high-throughput execution and agentic subagents; on many agentic and coding evals it even outperforms Gemini 3 Flash.
- **Provider / access:** Google — Gemini API / Google AI Studio / Vertex AI; free tier on Google AI Studio and OpenCode Zen; GA 2026-07-21 (per TopReviewed, which notes Google names it as Gemini 3.1 Flash-Lite's replacement, earliest shutdown 2027-05-07 for the 3.1 tier). ~350 output tok/s (Artificial Analysis Index; 339–363 tok/s across aggregators).
- **Release / knowledge:** 2026-07-21. Knowledge cutoff not stated in captured sources.
- **IDs:** `google/gemini-3.5-flash-lite` (repo meta.json); `gemini-3.5-flash-lite` (Gemini API model code, stable).
- **Context window:** 1,048,576 tokens.
- **Modalities:** Text, image, video, audio, PDF in; text out. Thinking levels minimal/low/medium/high.
- **Pricing (as of 2026-10):** $0.30 input / $2.50 output per 1M, flat regardless of prompt length (blended 3:1 ≈ $0.85/M, HokAI #22/61); no batch-API or cached-input discount published for this tier.
- **Architecture:** Sparse mixture-of-experts transformer (per HokAI); first-answer latency ~0.6–0.9 s (Google AI Studio).

### Raw benchmarks found

Google DeepMind model card / product page (deepmind.google/models/gemini/flash-lite/, model card updated 2026-07-21; comparison vs Gemini 3.1 Flash-Lite, GPT-5.4 mini, Claude Haiku 4.5):

Agentic / tool use:

- SWE-Bench Pro (Public): **54.2%** (3.1 Flash-Lite: 38.3%; GPT-5.4 mini: 54.4%; Claude Haiku 4.5: 39.5%).
- Terminal-bench 2.1 (Terminus-2 harness): **54.0%** (31.0%; 59.2%; 44.2%).
- OSWorld-Verified (agentic computer use): **74.0%** (54.3%; 72.1%; 50.7%) — ahead of GPT-5.4 mini.
- GDPVal-AA v2 (knowledge work, Elo): **1140** (642; 1171; 907).
- MLE-Bench (machine learning engineering): **39.2%** (22.0%; —; —).

Multimodal:

- CharXiv Reasoning (no tools): **74.5%** (73.2%; 80.3%; 61.7%); with tools: **76.5%** (75.6%).

Long context:

- GDM-MRCR v2 (8-needle), 128K average: **72.2%** (60.1%; 42.7%; 35.3%); 1M pointwise: **21.3%** (12.3%).

Reasoning (third-party, not vendor):

- GPQA Diamond: **86.9%** vendor-reported (HokAI, 2026-09-09); Epoch: 74.2% minimal / 75.8% low / 83.3% high; AA: **83.8%**; Vals: **83.8%**.
- HLE: **18.8%** (AA); LMArena Hard Prompts Elo **1474** (BenchLeader) / 1477 (AnotherWrapper); LiveBench Reasoning 60.2% (high); AA Intelligence Index **23** (HokAI).
- HokAI cross-generation notes: SWE-bench Pro 54.2% vs Gemini 3 Flash's 49.6%; OSWorld-Verified 74.0% vs 65.1%; Terminal-bench 2.1 54.0% vs 31.0% (3.1 Flash-Lite); GDM-MRCR v2 72.2% vs 60.1%.
- SWE-bench Verified, AIME, LiveCodeBench, MCP-Atlas, τ-bench: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 69/100.** OSWorld-Verified 74.0% (ahead of GPT-5.4 mini's 72.1%) and Terminal-bench 2.1 54.0% are strong for the tier; SWE-Bench Pro 54.2% ≈ GPT-5.4 mini; GDPVal 1140 and MLE-Bench 39.2% trail the mini flagships.
- **Reasoning: 64/100.** GPQA Diamond 86.9% (vendor) / 83.8% (AA) is frontier-adjacent, but HLE 18.8% and LiveBench Reasoning 60.2% sit well below the 2026 frontier.
- **Context window: 86/100.** Full 1M window with published retrieval evidence: GDM-MRCR v2 72.2% at 128K (average) but only 21.3% pointwise at 1M — strong mid-range, weak extreme-range recall.
- **Multimodal: 78/100.** Natively multimodal (text/image/video/audio/PDF in); CharXiv Reasoning 74.5% (76.5% with tools) is the verified vision score.
- **Coding: 63/100.** Terminal-bench 2.1 54.0% and SWE-Bench Pro 54.2% are mid-pack; no SWE-bench Verified or LiveCodeBench score published for this tier.
- **Cost efficiency: 94/100.** $0.30/$2.50 per 1M flat (blended $0.85/M) with a free tier — the price floor of Google's 3.5 lineup, ~73% cheaper than Gemini 3.5 Flash.
- **Overall Score: 72.0/100.** Mean of the five quality dimensions. The model beats its 3.1 Flash-Lite predecessor by 15–23 points on agentic evals and matches GPT-5.4 mini on several, at a third of the mini's price; the folder's peer average (76.7) is higher.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (web search and direct model-card/page fetches); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
