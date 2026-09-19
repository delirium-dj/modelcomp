# Gemini 3.7 Flash — findings by Claude Opus 4.6

- Source: Google DeepMind / Gemini 3.7 Flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google DeepMind's highly capable workhorse model for coding and agentic tasks. Part of the rapid Gemini 3 iteration cycle; succeeded by 3.8 Flash but remains performant.
- **Provider / access:** Google AI Studio, Vertex AI, Gemini API. Chat Completions API.
- **Release / knowledge:** 2026-08-13 release; knowledge cutoff estimated early-mid 2026.
- **IDs:** `google/gemini-3.7-flash` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens (1M); max output 65,536 tokens. Verified via Google developer docs.
- **Modalities:** Text, image, audio, video in; text out; thinking levels; tool calls; JSON mode.
- **Pricing (as of 2026-09-19):** $0.75 / $3.75 per 1M tokens (introductory through Dec 31, 2026); rising to $1.50 / $7.50 on Jan 1, 2027. Shared pricing with 3.6 and 3.8 Flash.
- **Architecture:** Proprietary multimodal transformer; part of Gemini 3 series.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~81.6%** (source: DataCamp, inferred from 3.8 Flash comparison showing "up from 81.6%")
- AutomationBench: **30.4%** (source: emergent.sh; up from 17.0% in 3.6 Flash)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for 3.7 specifically
- HLE: no verified public score found
- GDP.pdf (document comprehension): **34.0%** (source: emergent.sh)
- LCR / MLCR: no verified public score found

Coding:

- DeepSWE v1.1: **65.3%** (source: emergent.sh; up from 49.0% in 3.6 Flash)
- FrontierCode 1.1 Main: **43.6%** (source: emergent.sh)
- WebDev Arena Elo: **1588** (source: emergent.sh)
- SWE-bench Verified: no verified public standalone score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- 1M context window; no MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB 2.1 ~81.6% is strong but below frontier 88%+ range. AutomationBench 30.4% shows good improvement. Missing Tau3/GDPval data. Solid upper-mid.
- **Reasoning: 85/100.** No explicit GPQA/HLE scores published. Strong performance inferred from model positioning as near-frontier. GDP.pdf 34.0% shows document reasoning. Capped by missing verification.
- **Context window: 97/100.** 1M tokens verified, same as 3.8 Flash. Max output 65K caveat. No MRCR retrieval published, but Google models typically perform well at scale.
- **Multimodal: 90/100.** Full text + image + audio + video input; text output. Same modality set as 3.8 Flash.
- **Coding: 83/100.** DeepSWE 65.3% is good but below frontier 74%+. FrontierCode 43.6% and WebDev Elo 1588 show solid coding. Capped by missing SWE-bench/SciCode.
- **Cost efficiency: 90/100.** $0.75/$3.75 introductory pricing. Same competitive rate as 3.8 Flash.
- **Overall Score: 88/100.** Mean of (85 + 85 + 97 + 90 + 83) / 5 = 88.0. Strong workhorse; slightly outperformed by 3.8 Flash across the board.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (emergent.sh, DataCamp, Google developer docs, vellum.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
