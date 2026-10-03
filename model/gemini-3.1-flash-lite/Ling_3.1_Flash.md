# Gemini 3.1 Flash-Lite — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Gemini 3.1 Flash-Lite
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **NOTE:** The sibling `gemini-3.1-flash` folder covers the same underlying model under a name Google never shipped as a standalone text model (see that folder's identity note); this folder is the direct Flash-Lite report.

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google DeepMind's most cost-effective Gemini 3.1 model — a sparse MoE, natively multimodal reasoning model built on Gemini 3 Pro, optimized for high-volume, latency-sensitive tasks (translation, classification, extraction, bulk content).
- **Provider / access:** Google — Gemini API / Google AI Studio / Vertex AI; free tier on Google AI Studio and OpenCode Zen; Batch API, Flex and Priority consumption options. Preview 2026-03-03; GA 2026-05-07; superseded by Gemini 3.5 Flash-Lite (GA 2026-07-21), earliest shutdown 2027-05-07 (per TopReviewed). ~332–363 tok/s output, ~5.6 s TTFT at launch; ~2.5× faster TTFT and 45% higher output speed vs Gemini 2.5 Flash (Artificial Analysis figures cited by Google).
- **Release / knowledge:** 2026-03-03. Knowledge cutoff: January 2025.
- **IDs:** `google/gemini-3.1-flash-lite` (repo meta.json); `gemini-3.1-flash-lite` (Gemini API model code, stable); `google/gemini-3.1-flash-lite` (OpenRouter).
- **Context window:** 1,048,576 tokens input / 65,536 output.
- **Modalities:** Text, image, video, audio, PDF in; text out. Thinking levels minimal/low/medium/high.
- **Pricing (as of 2026-10):** $0.25 input / $1.50 output per 1M (preview prices held at GA); Batch API $0.125 / $0.75; cache read $0.025, cache write $0.08333; image input $0.25/M; audio input $0.50/M (audio cache $0.05/M); web search $14.00 per 1K calls.
- **Architecture:** Sparse mixture-of-experts transformer (per HokAI); "based on Gemini 3 Pro" (model card).

### Raw benchmarks found

Google launch blog (blog.google, 2026-03-03) and model card:

- GPQA Diamond: **86.9%** (vs 68.3% on Gemini 2.5 Flash) — vendor.
- MMMU Pro: **76.8%** — vendor.
- LMArena (Arena.ai) Elo: **1432** — vendor; LMArena Coding Elo **1457** (LMArena, 2026-09-13).
- Humanity's Last Exam: **16.0%** — vendor (per HokAI); third-party 17.2% (ARMES, BenchmarkList), HLE text-only 8.0% (BenchmarkList).

Third-party / aggregator (not vendor):

- MMMLU **88.9%**, LiveCodeBench **72%**, Video-MMMU **84.8%** (AI/TLDR).
- MMLU-Pro **86.2%** (BenchmarkList); AA Intelligence Index **16** (May 2026, pre-rescale) / **25.6** (BenchmarkList).
- Independently measured: GPQA Diamond **82.2%** (ARMES), **81.1%** (BenchmarkList, high thinking); HLE **17.2%** (ARMES).
- Google's own comparison table (for the later 3.5 Flash-Lite launch) lists 3.1 Flash-Lite at: SWE-Bench Pro (Public) **38.3%**, Terminal-bench 2.1 (Terminus-2) **31.0%**, MLE-Bench **22.0%**, GDPVal-AA v2 **642**, OSWorld-Verified **54.3%**, CharXiv Reasoning **73.2%** (no tools) / **75.6%** (with tools), GDM-MRCR v2 (8-needle) **60.1%** at 128K average / **12.3%** at 1M pointwise.
- No SWE-bench Verified, AIME, MCP-Atlas or τ-bench score has been published for this tier (Google has not disclosed them).

### Normalized scores (1–100)

- **Tool use: 55/100.** Google's own 3.5 Flash-Lite comparison table retroactively supplies agentic scores — Terminal-bench 2.1 31.0%, OSWorld-Verified 54.3%, SWE-Bench Pro 38.3%, GDPVal 642 — all far below the 2026 agentic frontier; function calling, structured outputs, search grounding and file search are supported and reported to work cleanly.
- **Reasoning: 63/100.** GPQA Diamond 86.9% (vendor) is strong for the tier and beats Gemini 2.5 Flash by 18.6 points, but HLE 16.0–17.2% and third-party GPQA re-measurements (81.1–82.2%) sit well below the 2026 frontier.
- **Context window: 85/100.** Full 1M-token window is rare at this price, with published GDM-MRCR v2 evidence (60.1% at 128K average, 12.3% pointwise at 1M) showing strong mid-range but weak extreme-range recall.
- **Multimodal: 78/100.** Natively multimodal (text/image/video/audio/PDF in); MMMU Pro 76.8% and Video-MMMU 84.8% are the verified vision scores.
- **Coding: 61/100.** Terminal-bench 2.1 31.0%, SWE-Bench Pro 38.3% and LiveCodeBench 72% (aggregator) are the coding evidence; no SWE-bench Verified score published.
- **Cost efficiency: 95/100.** $0.25/$1.50 per 1M (Batch $0.125/$0.75, cache read $0.025) with a free tier — Google's best price-to-intelligence ratio at launch, at roughly half the cost of Gemini 3 Flash.
- **Overall Score: 68.4/100.** Mean of the five quality dimensions. Google's thin disclosure (only GPQA and MMMU-Pro at launch) makes every dimension except Context and Cost uncertain; the folder's peer average (73.2) is higher.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (web search and direct model-card/page fetches); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
