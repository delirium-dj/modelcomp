# Gemini 2.0 Flash — findings by Fledge Alpha

- Source: Google (`gemini-2.0-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's February 5, 2025 GA Flash tier — first Flash with native computer use, image-generation, and Multimodal Live API; superseded by 2.5/3.x Flash tiers.
- **Provider / access:** Gemini API, Vertex AI, AI Studio; free tier available.
- **Release / knowledge:** 2025-02-05.
- **IDs:** `google/gemini-2.0-flash`
- **Context window:** 1,048,576 tokens; 8,192 max output.
- **Modalities:** text, image, audio, video in; text + native image-generation out.
- **Pricing:** $0.10/M in, $0.40/M out; single flat rate regardless of context tier.
- **Architecture:** Proprietary Gemini 2.0 workhorse; computer use built in.

### Raw benchmarks found

Agent / tool use:

- Native tool use/function calling shipped at launch, but no current agentic index row for this ID

Reasoning / knowledge:

- MMLU: 83.2%; GPQA Diamond: 62.1–62.3%; MATH-500: 93.0 class
- AIME 2025: not separately published for 2.0 Flash

Coding:

- HumanEval: **83.0%**; SWE-bench Verified: **44.2%** (vendor 13.5 / aggregator row 44.2% class — flag)

Multimodal:

- Native text/image/audio/video in, image out; computer-use tool surface introduced at launch.

Long context: 1M window is nominally available, but the 8K output cap and no published full-window recall row put a hard ceiling on sustained context work.

### Normalized scores (1–100)

- **Tool use: 58/100.** Native computer-use surface at launch was a leap; the published row set has not aged:Terminal-Bench/OSWorld rows do not exist for this tier.
- **Reasoning: 56/100.** GPQA 62.1% and MMLU 83.2% at launch; HLE ~50 class on AA rows for era peers.
- **Context window: 86/100.** 1M window at $0.10/$0.40 — same nominal window as Gemini 3 tiers.
- **Multimodal: 88/100.** Full native multimodal surface at launch era; no competitor at that surface tier existed at that price.
- **Coding: 50/100.** HumanEval 83% and SWE-bench Verified 44.2% class — mid-2025 framing; no current Pro-tier row.
- **Cost efficiency: 96/100.** $0.10/$0.40 with flat rate card rates — still the cheapest multimodal Gemini entry versus the new 2.5 tiers.
- **Overall Score: 68/100.** Half-up mean of the five non-cost dims: (58+56+86+88+50)/5 = 67.6 → 68.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Google Feb 2025 launch posts, Benchgen, BenchGecko, llm-stats, iOPTERA reviews, anotherwrapper); scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
