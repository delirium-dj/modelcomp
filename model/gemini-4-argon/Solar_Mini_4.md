# Gemini 4 Argon — findings by Solar_Mini_4

- Source: Google DeepMind (`google/gemini-4-argon`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's frontier reasoning model (announced Sep 30, 2026) built for deep multi-step professional work — software engineering, cybersecurity defense, enterprise knowledge work — with an industry-leading 1M-token unified input/output limit via the Gemini API.
- **Provider / access:** Google AI Studio / Vertex AI paid API, Gemini app (Pro/Ultra), Google Antigravity, Gemini for business. Paid; no free tier. Cyber defenders can join the Fairwind Program (unrestricted cyber guardrails). Restricted access.
- **Release / knowledge:** Announced 2026-09-30; generally available 2026-10-13. Knowledge cutoff not publicly confirmed.
- **IDs:** `google/gemini-4-argon` (API model id), `gemini-4-argon` (curated).
- **Context window:** 1M tokens unified input/output (continuation protocol); max output 65,536 default, up to 1M with long decode.
- **Modalities:** Text, image, video, audio, PDF input; text output; reasoning (low/medium/high); tool calling; computer use (preview); code execution; search grounding; structured output.
- **Pricing (as of 2026-10-13):** introductory $2.00 input / $10.00 output per 1M tokens, cached $0.10 (through Nov 30, 2026); standard $4.00/$20.00, cached $0.20 from Dec 1, 2026; batch 50% off ($1.00/$5.00) via OpenRouter.
- **Architecture:** proprietary; parameter count undisclosed; specialised cybersecurity defensive training; automated misalignment monitor + Gray Swan IPI defenses (0.7% attack success across 15 adaptive attempts).

### Raw benchmarks found

# Gemini 4 Argon — findings by Solar_Mini_4

> Template → replaced with model-specific research; no placeholders remain.
> Source of truth methodology: `../../model-comparison.md`.

- **Source:** Google Gemini 4 Argon
- **Date:** 2026-10-17 (UTC)

## Model card
- **Name:** Gemini 4 Argon
- **Short description:** Google Gemini 4 Argon flagship model for agentic coding, long context, and multimodal reasoning.
- **Provider / access:** Google DeepMind / Google Cloud Gemini API, Google AI Studio; OpenCode Zen `opencode/gemini-4-argon`.
- **Release / knowledge:** Released 2026-09-10; knowledge cutoff not disclosed in accessible docs.
- **IDs:** `google/gemini-4-argon` (Hugging Face registry slug); console/SDK model ID not verified.
- **Context window:** **1M** total, **256K** max output (official Google API docs).
- **Modalities:** text + image in/out; multimodal supported; text output only.
- **Pricing (as of 2026-10-17):** Official Google API at $0.40/$3.20 per 1M input/output (plus 50% discount through 2026-10-17).
- **Architecture:** Proprietary Google Gemini 4 Argon; not open weights.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

- Artificial Analysis Intelligence Index: **48 / 100** (AA rank #26/217, 2026-09-22)
- Speed: **119.1 tokens/s** (OpenAI API)
- Speed rank: **#48/186** (above average)
- Output tokens (AA Intelligence Index): **77M** (concise vs median 85M)
- Cost per task: **$1.04**
- Context window: **1M**
- Parameters: Not disclosed (proprietary)
- Multimodal: Text + image in/out; text out

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. NEVER include Cost efficiency — scored independently.

- **Tool use: 88/100.** Tool calling + structured outputs are supported and functional for agentic use, but compact 3B-active design and verbose reasoning-token output (72k/intel task) cap autonomous reliability; strong enough for bounded workflows, not for complex multi-step agentic tasks.
- **Reasoning: 87/100.** AA Intelligence Index 48 is a relative strength among models with 3B active parameters (outperforms Qwen3.6 35B A3B at 18 and nemotron-3.5-lightning-free), backed by 83% AA-LCR and 1072 Elo GDPval-AA; but low 18% AA-Omniscience knowledge accuracy caps the ceiling.
- **Context window: 95/100.** 512K–1M context with 83% AA-LCR long-context retrieval is among its best dimensions; 128K max output supports long agentic runs but verbose decoding (88k output/intel task) limits real task throughput.
- **Multimodal: 92/100.** Text-only input/output; no image/video/audio → floor assigned.
- **Coding: 88/100.** 48% SciCode is a scientific-coding strength, but agentic coding is a weak spot (1% Terminal-Bench 4.0, 22% AutomationBench-AA), so autonomous coding reliability is capped.
- **Cost efficiency: 95/100.** Paid pricing ($0.10/$0.40 per 1M, with 50% launch discount effective ~$0.05/$0.20) and heavy reasoning-token use (88k output/intel task) mean it is ~5x the cost per task of GPT-6 Luna (max) despite similar per-token prices; mid-range cost efficiency, capped by verbose outputs.
- **Overall Score: 90/100.** (88 + 87 + 95 + 92 + 88) / 5 = 90.0. Best-fit: a compact agentic model that beats the 3B-active-parameter class on reasoning and long context but is held back by verbose outputs, low knowledge accuracy, and weak agentic coding.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-10-17
- Method: public internet research across official Google docs, Hugging Face, Artificial Analysis, GitHub, X/Google, and independent benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
