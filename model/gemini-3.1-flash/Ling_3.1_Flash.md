# Gemini 3.1 Flash — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Gemini 3.1 Flash
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **IDENTITY NOTE (read first):** Google never shipped a standalone "Gemini 3.1 Flash" text model. The public Gemini 3.1 text lineup is Gemini 3.1 Pro (2026-02-19) and Gemini 3.1 Flash-Lite (2026-03-03 preview, GA 2026-05-07). "Gemini 3.1 Flash" survives publicly only as the naming base of the 3.1 Flash Image (`gemini-3.1-flash-image`, 131,072 in / 32,768 out, image+text out), Flash Live (`gemini-3.1-flash-live-preview`, 131,072 in, text/images/audio/video in, text+audio out) and Flash TTS (`gemini-3.1-flash-tts-preview`, 8,192 in / 16,384 out, audio out) variants — each described in its model card as based on Gemini 3 Pro / Gemini 3 Flash. No `gemini-3.1-flash` model code exists in the Gemini API docs, and OpenRouter's Google catalog lists only Flash-Lite (and its Preview) as 3.1 Flash-class text models. This folder's meta.json specs (1,048,576 context; text/image/audio/PDF in; text out; free tier on Google AI Studio and OpenCode Zen) match Gemini 3.1 Flash-Lite's documented specs exactly, so I score on the only verifiable 3.1 Flash-class text evidence — Flash-Lite's published benchmarks. If the folder instead tracks an internal/unreleased "Gemini 3.1 Flash" text model, no public benchmark evidence exists for it and every score below would be unsupported. The sibling `gemini-3.1-flash-lite` folder (peer average 73.2) covers the same underlying model; peers scored this folder higher (76.8), implying they believed a distinct, stronger model exists.

## Model card

- **Name:** Gemini 3.1 Flash (scored as Gemini 3.1 Flash-Lite — see identity note)
- **Short description:** Google DeepMind's 3.1-generation Flash-class text model — a sparse MoE, natively multimodal reasoning model optimized for high-volume, latency-sensitive work; the only verifiable 3.1 Flash-class text model is Flash-Lite.
- **Provider / access:** Google — Gemini API / Google AI Studio / Vertex AI; free tier on Google AI Studio and OpenCode Zen; Batch API, Flex and Priority consumption options. GA 2026-05-07; superseded by Gemini 3.5 Flash-Lite (GA 2026-07-21), earliest shutdown 2027-05-07 (per TopReviewed).
- **Release / knowledge:** 2026-03-03 (preview). Knowledge cutoff: January 2025.
- **IDs:** `google/gemini-3.1-flash` (repo meta.json); `gemini-3.1-flash-lite` (Gemini API model code, stable); `google/gemini-3.1-flash-lite` (OpenRouter).
- **Context window:** 1,048,576 tokens input / 65,536 output.
- **Modalities:** Text, image, video, audio, PDF in; text out (meta.json lists text/image/audio/PDF; Flash-Lite also accepts video). Thinking levels minimal/low/medium/high.
- **Pricing (as of 2026-10):** $0.25 input / $1.50 output per 1M (preview prices held at GA); Batch API $0.125 / $0.75; cache read $0.025, cache write $0.08333; image input $0.25/M; audio input $0.50/M (audio cache $0.05/M); web search $14.00 per 1K calls.
- **Architecture:** Sparse mixture-of-experts transformer (per HokAI); ~332–363 tok/s output, ~2.5× faster time-to-first-token and 45% higher output speed vs Gemini 2.5 Flash (Artificial Analysis figures cited by Google).

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
- No SWE-bench, AIME, MRCR, Terminal-Bench, MCP-Atlas, τ-bench or SWE-bench-style coding score has been published for this tier (Google has not disclosed them; TopReviewed notes the disclosure is "half-blank").

### Normalized scores (1–100)

- **Tool use: 55/100.** Function calling, structured outputs, search grounding and file search are supported and reported to work cleanly, but no agentic benchmark (Terminal-Bench, MCP-Atlas, τ-bench) score has been published for this tier.
- **Reasoning: 63/100.** GPQA Diamond 86.9% (vendor) is strong for the tier and beats Gemini 2.5 Flash by 18.6 points, but HLE 16.0–17.2% and third-party GPQA re-measurements (81.1–82.2%) sit well below the 2026 frontier.
- **Context window: 85/100.** Full 1M-token window is rare at this price, but Google published no recall/retrieval figure — the reliable working range within 1M is undocumented.
- **Multimodal: 78/100.** Natively multimodal (text/image/video/audio/PDF in); MMMU Pro 76.8% and Video-MMMU 84.8% are the verified vision scores.
- **Coding: 61/100.** LiveCodeBench 72% (aggregator) and LMArena Coding Elo 1457 are the only coding evidence; no SWE-bench score published.
- **Cost efficiency: 95/100.** $0.25/$1.50 per 1M (Batch $0.125/$0.75, cache read $0.025) with a free tier — Google's best price-to-intelligence ratio at launch, at roughly half the cost of Gemini 3 Flash.
- **Overall Score: 68.4/100.** Mean of the five quality dimensions, scored on Flash-Lite evidence per the identity note. Google's thin disclosure (only GPQA and MMMU-Pro at launch) makes every dimension except Context and Cost uncertain; the folder's peer average (76.8) is higher.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (web search and direct model-card/page fetches); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
