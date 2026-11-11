# Gemini 2.5 Pro — findings by Ernie 5.5 Flash

- Source: Google DeepMind/Gemini 2.5 Pro (`gemini-2.5-pro`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's proven reasoning model (released 2025-06-17) for coding, math and multimodal analysis — the long-serving 2.5 flagship, now three Gemini generations old.
- **Provider / access:** Google Gemini API / AI Studio (`gemini-2.5-pro`), Vertex AI, plus ~30 gateway routes (OpenRouter, SAP AI Core, LLM Gateway, FastRouter, Auriko, Qiniu).
- **Release / knowledge:** 2025-06-17; knowledge cutoff 2025-01 (models.dev).
- **IDs:** `gemini-2.5-pro`, `google/gemini-2.5-pro`, `google-vertex/gemini-2.5-pro`, `opencode/gemini-2.5-pro`.
- **Context window:** 1,048,576 tokens (1M); max output 65,536.
- **Modalities:** text, image, audio, video and PDF in; text out; thinking and tool calls.
- **Pricing (as of 2026-11-11):** $1.25 / $10.00 per 1M input/output; cache read $0.125.
- **Architecture:** proprietary sparse MoE (undisclosed).

### Raw benchmarks found

Agent / tool use:

- CompileBench (building real projects from source, pass@1): **53.3%**
- Gert Labs composite game benchmark: **42.01**
- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published for 2.5 Pro
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83%**; AIME 2024: **92%** (no tools)
- Humanity's Last Exam: **18.8%** (very low against 2026 frontier)
- FrontierMath v2 Tiers 1–3: **24.561%**; Tier 4: **0.000%**
- FailureSensorIQ: **67.0%**; BinaryAudit (backdoor detection): **21.1%**

Coding:

- SWE-bench Verified: **63.8%** (Vals **54.4%**); Vibe Code Bench v1.1: **0.40%** (near-floor)
- Terminal-Bench / DeepSWE / LiveCodeBench: no verified public rows published for 2.5 Pro
- CompileBench: **53.3%**

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 55/100.** CompileBench 53.3% is the only verified agentic row and it is mid; with no TB/OSWorld/Toolathlon publication this is a floor, not a measurement.
- **Reasoning: 70/100.** GPQA Diamond 83% and AIME 2024 92% were strong for 2025, but HLE 18.8% and FrontierMath v2 24.6%/0.0% show it is far behind the 2026 frontier.
- **Context window: 100/100.** 1,048,576 tokens with 65,536 max output.
- **Multimodal: 85/100.** Text, image, audio, video and PDF in — the broadest input set in this dataset — but no public multimodal benchmark rows were published for it.
- **Coding: 62/100.** SWE-bench Verified 63.8% (54.4% on Vals) is well behind current models and Vibe Code Bench 0.40% is near-floor.
- **Cost efficiency: 85/100.** $1.25/$10 per 1M with $0.125 cache reads — cheap, but every 2026 Flash model beats it on price and quality.
- **Overall Score: 74.4/100.** Best fit for legacy multimodal pipelines and very-long-context document work; obsolete for coding and hard reasoning.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Google DeepMind model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 2.5 Pro — Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-2.5-pro/)
  - [Gemini 2.5 Pro benchmarks & sources — BenchLM](https://benchlm.ai/models/gemini-2-5-pro)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Gemini_2.5_Pro_v2.md`, using the same headings.