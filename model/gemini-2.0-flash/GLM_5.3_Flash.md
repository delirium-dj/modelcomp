# Gemini 2.0 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-2.0-flash`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash (Feb '25 GA)
- **Short description:** Google's fast, native-multimodal workhorse LLM from the Gemini 2.0 generation (GA February 2025) — built for high-volume everyday tasks, long-context RAG, and cheap multimodal input. Deprecated: Artificial Analysis notes Google's newer Gemini 2.5 Flash supersedes it and only historical workloads are benchmarked.
- **Provider / access:** Google Gemini API / Vertex AI (`gemini-2.0-flash`). AA's provider page covers current API availability; a separate "Flash Thinking" reasoning variant exists as its own model line.
- **Release / knowledge:** Released 2025-02-05 (verified via AA FAQ); knowledge cutoff June 1, 2024 (verified via AA technical specifications).
- **IDs:** `google/gemini-2.0-flash` — no Free ID on OpenCode Zen was verified during research.
- **Context window:** 1M (1,000,000) total tokens (verified via AA technical specifications).
- **Modalities:** Text, image, speech, and video input; text and image output; reasoning no (non-reasoning model); tool calls yes (Gemini API function calling); JSON mode not independently verified.
- **Pricing (as of 2026-09-28):** ~$0.10 in / $0.40 out per 1M tokens (Vellum LLM leaderboard; AA's price display currently reads $0.00/$0.00, an apparent data glitch — the Vellum figure is used as the conservative verified proxy). Paid only; no free API tier verified.
- **Architecture:** Proprietary; parameter count undisclosed by Google.

### Raw benchmarks found

> Research performed 2026-09-28: Artificial Analysis Gemini 2.0 Flash model page (primary), Vellum LLM leaderboard, Google DeepMind model pages (the 2.0-specific model card URL 404s; the deepmind Gemini pages now spotlight Gemini 3.8 Flash and the 2.5 launch post).

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **9 (estimated) / #103 of 299** (AA v4.3.2, default 10K-input workload only, deprecated; above the median 7 among non-reasoning models in its price tier)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- No long-context retrieval reported (1M window advertised, but no MRCR/RULER/GraphWalks retrieval value was found for this model)

### Normalized scores (1–100)

- **Tool use: 45/100.** Supports Gemini API function calling, but zero verified agentic-suite numbers (Terminal-Bench, Tau3, GDPval) exist for this exact model — scored at the low-mid band rather than guessing a mid-tier value.
- **Reasoning: 48/100.** AA Intelligence Index 9 is above the median 7 for non-reasoning models in its class but far below the composite anchor of thinking models; no verified GPQA/HLE/LCR evidence caps it in the low-mid band.
- **Context window: 95/100.** 1M total tokens maps to the ≥1M tier (95–100), capped at the band floor because no ≥98%-retrieval measurement at 512K+ was published.
- **Multimodal: 90/100.** Text, image, speech, and video input with image output is near-full multimodal coverage; capped at the audio/video tier floor by the absence of PDF-in verification and any measured multimodal benchmark (MMMU-Pro not published for this model).
- **Coding: 45/100.** No verified SWE-bench Verified, LiveCodeBench, SciCode, or Vibe Code Bench numbers for this exact model — scored conservatively in the low-mid band with zero invented values.
- **Cost efficiency: 97/100.** ~$0.10/$0.40 per 1M sits in the methodology's cheapest band (~$0.10/$0.20 = 97–99) — a flagship-class price point for high-volume workloads, slightly adjusted for the unverified-outlier pricing display.
- **Overall Score: 64.6/100.** Mean of the five non-cost dims (45 + 48 + 95 + 90 + 45) / 5 = 64.6 — best fit as a cheap, fast, multimodal high-volume workhorse; newer Gemini 2.5+ Flash models are preferable for reasoning-heavy or agentic work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-28
- Method: public internet research (Artificial Analysis model page, Vellum LLM leaderboard, Google DeepMind pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
