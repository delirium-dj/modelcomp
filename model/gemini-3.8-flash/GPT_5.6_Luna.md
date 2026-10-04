# Gemini 3.8 Flash — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 3.8 Flash
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's cost-efficient Flash model for production agents, software engineering, and knowledge workflows; based on Gemini 3.7 Flash with post-training improvements.
- **Provider / access:** Gemini API, AI Studio, Google AI Mode, Gemini App, Google Antigravity, and Gemini Enterprise Agent Platform; API ID `gemini-3.8-flash`.
- **Release / knowledge:** 2026-09-02 release; March 2026 knowledge cutoff, with some domains reported to reach only January 2025.
- **IDs:** `google/gemini-3.8-flash` / `gemini-3.8-flash`.
- **Context window:** 1,048,576 tokens; 65,536 maximum output.
- **Modalities:** Text, image, audio, and video input; text output; configurable thinking levels and built-in tools.
- **Pricing (as of 2026-10-04):** Introductory $0.75 input / $3.75 output per 1M tokens through 2026-12-31; Google lists regular $1.50/$7.50 pricing thereafter. Batch pricing is half standard.
- **Architecture:** Proprietary; based on Gemini 3.7 Flash, with parameters undisclosed.

## Raw benchmarks found

Agent / tool use:

- Vals Finance Agent v2: **61.4%** (Google model card).
- Harvey's Legal Agent Benchmark: **10.0%** all-pass (Google model card).
- Terminal-Bench 4.0: **19.1%** (Google model card).
- OSWorld 2.0: **59.0%** (Google model card).

Reasoning / knowledge:

- Humanity's Last Exam: **47.8%** (Artificial Analysis independent high-effort run).
- HLE-Verified: **54.9%** (Google model card; vendor methodology differs from the independent HLE result).
- BioMysteryBench human-solvable: **88.8%** (Google model card).

Coding:

- DeepSWE v1.1: **74.0%** (DeepSWE board, independent high-effort run).
- Terminal-Bench 2.1: **87.6%** (Artificial Analysis independent run); Vals AI independently reported **81.27%** on a different run.
- SWE-bench Verified: **80.0%** (Vals AI independent run).
- LiveCodeBench: **89.48%** (Vals AI independent run).

Long context:

- 1M-token window documented; no independently verified MRCR/RULER score found in the reviewed sources.

Multimodal:

- LVBench: **87.8% agentic / 87.1% static** (Google model card).
- CharXiv: **86.2%** (Google model card).
- GDP.PDF: **35.0%** (Google model card).

## Normalized scores (1–100)

- **Tool use: 86/100.** Finance-agent and long-horizon coding results are strong, but OSWorld 59.0 and Terminal-Bench 4.0 19.1 show that general agent performance is uneven.
- **Reasoning: 87/100.** Independent HLE 47.8 and strong research benchmarks indicate high reasoning quality, but it trails frontier Pro/Opus models on the hardest general reasoning comparisons.
- **Context window: 90/100.** The 1M window is excellent, but no independent retrieval score was verified and the related family evidence does not establish quality at the full window.
- **Multimodal: 94/100.** Native text/image/audio/video input plus strong video and chart results are a major advantage; output is text-only.
- **Coding: 90/100.** DeepSWE 74, SWE-bench 80, LiveCodeBench 89.48, and Terminal-Bench 87.6 are excellent, though independent Terminal-Bench runs differ materially.
- **Cost efficiency: 98/100.** $0.75/$3.75 introductory pricing is unusually low for this benchmark tier, with a known 2027 price increase.
- **Overall Score: 89.4/100.** Best fit: high-volume multimodal and coding agents where price, broad input coverage, and 1M context matter more than absolute frontier reasoning.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research using Google's model card, API documentation, and independent benchmark trackers; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
