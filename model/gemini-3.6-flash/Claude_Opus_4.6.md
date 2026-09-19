# Gemini 3.6 Flash — findings by Claude Opus 4.6

- Source: Google DeepMind / Gemini 3.6 Flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's mid-2026 workhorse model optimized for coding, agentic workflows, and multimodal tasks. Bridge between 3.5 and 3.7 Flash with 17% output-token reduction.
- **Provider / access:** Google AI Studio, Vertex AI, Gemini API. Chat Completions API.
- **Release / knowledge:** 2026-07-21 release; knowledge cutoff estimated early-mid 2026.
- **IDs:** `google/gemini-3.6-flash` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens (1M); max output 65,536 tokens. Verified via Google developer docs.
- **Modalities:** Text, image, audio, video in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-19):** $0.75 / $3.75 per 1M tokens (introductory, shared with 3.7/3.8); some platforms at $1.50/$7.50 standard. Batch at 50% discount.
- **Architecture:** Proprietary multimodal transformer; part of Gemini 3.x rapid iteration series.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found for 3.6 specifically; predecessor to 3.7's ~81.6%
- AutomationBench: **17.0%** (source: emergent.sh; 3.7 Flash improved to 30.4%)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- GDP.pdf: **22.0%** (source: emergent.sh; 3.7 Flash improved to 34.0%)

Coding:

- DeepSWE v1.1: **49.0%** (source: emergent.sh; 3.7 Flash improved to 65.3%)
- FrontierCode 1.1 Main: **34.4%** (source: emergent.sh)
- WebDev Arena Elo: **1538** (source: emergent.sh)
- SWE-bench Verified: no verified public standalone score found
- LiveCodeBench: no verified public score found

Long context:

- 1M context window; no MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 72/100.** AutomationBench 17.0% is modest. No explicit TB 2.1 published. Positioned below 3.7 Flash on tool use metrics. Mid-range agent capability.
- **Reasoning: 73/100.** GDP.pdf 22.0% is limited. No GPQA/HLE data. Positioned as improved multi-step reasoning over 3.5 but clearly behind 3.7+.
- **Context window: 97/100.** 1M verified. Same architecture context capability as other Gemini Flash models.
- **Multimodal: 90/100.** Full text + image + audio + video in; text out. Same modality breadth as all Gemini Flash models.
- **Coding: 72/100.** DeepSWE 49.0% is mid-range (ref: below 60% is mid). FrontierCode 34.4%, WebDev 1538. Clear step below 3.7/3.8 Flash.
- **Cost efficiency: 90/100.** $0.75/$3.75 introductory pricing. Same competitive rate as 3.7/3.8 Flash.
- **Overall Score: 81/100.** Mean of (72 + 73 + 97 + 90 + 72) / 5 = 80.8 ≈ 81. Competent workhorse but outpaced by rapid 3.7/3.8 Flash iterations.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (emergent.sh, Google developer docs, community evaluations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
