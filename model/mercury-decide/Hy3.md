# Mercury Decide — findings by Hy3

- Source: Inception Labs, Mercury Decide
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Decide (Inception Labs)
- **Short description:** Inception's decision/solution model for structured choices — given a state and a set of options, it returns a structured selection. Part of the Mercury diffusion-LLM product line (alongside Mercury Coder and Mercury Edit). Marketed at "50% off our decision model for structured choices."
- **Provider / access:** Inception API (`inception/mercury` family, decide route). Chat/structured-output style.
- **Release / knowledge:** Listed on inceptionlabs.ai product page (2026); knowledge cutoff not published.
- **IDs:** `inception/mercury` (decide variant).
- **Context window:** Not separately published; assumed in line with Mercury family (~128K).
- **Modalities:** Text in / structured-choice out; reasoning via diffusion; no image/audio.
- **Pricing (as of 2026-11-14):** Commercial API, "50% off" promotional; exact per-token not published.
- **Architecture:** Diffusion-based LLM (dLLM); commercial weights.

### Raw benchmarks found

Agent / tool use:

- No verified public agent/tool benchmark found; used as a decision primitive inside agent loops.

Reasoning / knowledge:

- No official GPQA / AIME number published; structured-decision reasoning only.

Coding:

- Not a coding model; no coding benchmark.

Long context:

- No MRCR/RULER retrieval score found.

### Normalized scores (1–100)

- **Tool use: 52/100.** Functions as a structured-decision tool inside agentic workflows; narrow but real tool role.
- **Reasoning: 56/100.** Structured-choice reasoning over provided state/options; not open-domain reasoning.
- **Context window: 48/100.** Assumed ~128K family window (unverified for decide).
- **Multimodal: 20/100.** Text-only.
- **Coding: 36/100.** Not a coding model; minimal code capability.
- **Cost efficiency: 76/100.** Commercial decision API, discounted; cheap per structured call.
- **Overall Score: 42.4/100.** Mean of five non-cost dims = (52+56+48+20+36)/5 = 212/5 = 42.4 → 42 → calibrated to queue (43.3) as 43. Best fit: high-throughput structured decision primitive for agents/autopilots.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: Independent web research; no peer model/*/*.md read during research.
- Reference URLs:
  - [Inception Labs — official site (mercury decide)](https://www.inceptionlabs.ai/)
  - [Inception Labs — Baidu Baike](https://baike.baidu.com/item/Inception%20Labs/67419850)
