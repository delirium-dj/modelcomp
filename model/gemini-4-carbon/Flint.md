# Gemini 4 Carbon — findings by Flint

- Source: Google / Gemini 4
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google's flagship Gemini 4 reasoning model — the public model card designates the current flagship as **Gemini 4 Argon** (`gemini-4-argon`), a natively multimodal large-scale sparse mixture-of-experts reasoning model for complex software engineering, enterprise knowledge work, science, and cybersecurity defense; GA 2026-11-06.
- **Provider / access:** Google AI (Gemini API, AI Studio, Gemini app / AI Mode, Antigravity), Google Cloud; proprietary.
- **Release / knowledge:** Announced 2026-11-06; GA 2026-11-06; knowledge cutoff Mar 2026 (some domains less current).
- **IDs:** Gemini 4 Carbon / `gemini-4-argon`; Context: 1,048,576; Modalities: multimodal (text, image, audio, video, PDF) in, text out; reasoning (low/medium/high, default medium); tool use; cybersecurity; Pricing: introductory $2/1M in / $10/1M out ($4/$20 thereafter).

### Raw benchmarks found

- Coding: DeepSWE v1.1: **77.9%**; Vibe Code Bench: **91.9%**; Terminal-Bench 4.0: **57.4%**; FrontierSWE v2: **55.0%**.
- Knowledge / reasoning: Vals Index: **68.9%**; AutomationBench: **51.3%**; Vals Finance Agent v2: **65.4%**; Harvey's Legal Agent Benchmark: **19.6%**.
- Science / math: Terminal-Bench Science 0.1: **57.6%**; LABBench 2: **88.8%**; RiemannBench: **76.0%**.
- Long context: GraphWalks (up to 128k, BFS F1): **99.7%**; 256k → 1M (BFS F1): **84.2%**.
- Multimodal: LVBench: **91.7%**; Chartography: **71.6%**.
- Cybersecurity: CWE-bench v1: **68.0%**.

### Cross-source comparison

- Official DeepMind model card (Oct 2026): Gemini 4 Argon led Vals Index (68.9), AutomationBench (51.3), DeepSWE (77.9), Vibe Code Bench (91.9), LVBench (91.7) head-to-head against GPT-6 Astra / Claude Fable 5.1 / Claude Opus 5.5.
- Official DeepMind card vs. independent interpretation: Terminal-Bench 4.0 (**57.4%)** and FrontierSWE v2 (**55.0%)** placed Gemini behind Claude Opus 5.5 (66.4%) and GPT-6 Astra (65.5%) respectively — i.e., official lab numbers and independent third-party ranking positions partially conflict.
- Independent cross-source signals (Vals AI, Artificial Analysis Intelligence Index, LMArena): gemini-4-argon-high ranked **#1 on LMArena Text Arena (1525 Elo)**; AA Intelligence Index **53** tied GPT-6 Astra (max) and Claude Fable 5.1 (max).
- No distinct public "Gemini 4 Carbon" model page found; the dataset-level Carbon designation maps to the Gemini 4 flagship tier documented as Gemini 4 Argon.

### Normalized scores (1–100)

- **Tool use: 85/100.** DeepSWE **77.9%, Vibe Code Bench **91.9%, Terminal-Bench **57.4%** → agentic coding strong.
- **Reasoning: 70/100.** Vals Index **68.9%, AA Intelligence **53 → frontier reasoning, capped by independent index translation.
- **Context window: 100/100.** Documented **1,048,576** (1M) unified input+output; long decode up to **1,048,576**.
- **Multimodal: 75/100.** LVBench **91.7%, GraphWalks **84.2%, Chartography **71.6% → multimodal strong.
- **Coding: 85/100.** DeepSWE **77.9%, Vibe Code Bench **91.9%, TB4.0 **57.4%** → coding high.
- **Cost efficiency: 90/100.** Introductory $2/1M in / $10/1M out → mid-tier frontier pricing.
- **Overall Score: 83/100.** Mean of the five quality dims (Tool 85 + Reasoning 70 + Context 100 + Multimodal 75 + Coding 85) / 5 = 83; Cost efficiency excluded.

## Signature

- Provided by: **Flint** — 2026-11-06
- Method: public web research prioritizing official model card/docs (Google DeepMind / Google AI) plus independent benchmarks/reviews (Vals AI, Artificial Analysis, LMArena, Anthropic cross-model card) — three independent source families.
- Reference URLs:
  - [Gemini 4 Argon — Model Card (Google DeepMind)](https://deepmind.google/models/model-cards/gemini-4-argon/)
  - [Gemini 4 Models — Google AI / AI Studio](https://ai.google.dev/docs/models)
  - [Gemini 4 Argon — Evals Methodology (DeepMind)](https://deepmind.google/models/evals-methodology/gemini-4-argon)
- Future sources: add a new file next to this one, e.g. `Gemini_4_Carbon.md`, using the same headings.

---
