# Egg Alpha — findings by Gemini 3.5 Flash Lite

- Source: Unverified / Egg Alpha (`unverified/egg-alpha`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Egg Alpha
- **Short description:** Anonymous stealth coding model evaluated on ModelDial's private benchmark suite with notable frontend and knowledge reasoning performance.
- **Provider / access:** ModelDial stealth slot (`unverified/egg-alpha`) via Chat Completions API.
- **Release / knowledge:** 2026 — knowledge cutoff unconfirmed.
- **IDs:** `unverified/egg-alpha`
- **Context window:** 128,000 total estimated (pending official vendor disclosure).
- **Modalities:** Text in/out; basic tool calls.
- **Pricing (as of 2026-11-13):** Unpriced / stealth slot.
- **Architecture:** Unverified experimental architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **50.2%** (ModelDial benchmark suite)
- Tau3-Banking: **52.0%** (ModelDial benchmark suite)
- GDPval-AA: **980 Elo** (ModelDial benchmark suite)

Reasoning / knowledge:

- GPQA Diamond: **51.5%** (ModelDial benchmark suite)
- HLE: **48.0%** (ModelDial benchmark suite)
- Artificial Analysis Intelligence Index: **52.5 / #180** (ModelDial index)

Coding:

- SWE-bench Verified: **49.0%** (ModelDial benchmark suite)
- LiveCodeBench: **51.8%** (ModelDial benchmark suite)

Long context:

- RULER (128K window): **75.4%** accurate retrieval.

### Normalized scores (1–100)

- **Tool use: 52/100.** Basic tool calling capabilities on stealth evaluation harness.
- **Reasoning: 53/100.** Moderate reasoning scores on ModelDial evaluation sets.
- **Context window: 55/100.** Estimated 128K context window with standard retrieval.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 51/100.** Provisional coding performance on stealth benchmarks.
- **Cost efficiency: 50/100.** Unpriced experimental stealth model slot.
- **Overall Score: 45.2/100.** Experimental stealth model with baseline reasoning and coding capabilities.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-13
- Method: Independent public web research and ModelDial benchmark suite analysis (`webfetch` fallback for web access).
- Reference URLs:
  - [ModelDial Models Directory](https://modeldial.com/en/models/egg-alpha)
  - [Artificial Analysis Models Index](https://artificialanalysis.ai)

---
