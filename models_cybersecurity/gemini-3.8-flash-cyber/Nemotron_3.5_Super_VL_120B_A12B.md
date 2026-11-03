# Gemini 3.8 Flash Cyber — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gemini-3-8-flash-cyber (Google 3.8 Flash and 3.8 Flash Cyber launch page)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's Gemini 3.8 Flash Cyber variant — a cybersecurity-focused Flash model; context window not published (N/A per benchlm); proprietary.
- **Provider / access:** Gemini API (`gemini-3.8-flash-cyber`), Google AI Studio, Vertex AI; OpenAI-compatible not used — Google Gemini API. Sibling: Gemini 3.8 Flash.
- **Release / knowledge:** Release date not confirmed in fetched sources; knowledge cutoff not stated.
- **IDs:** `gemini-3.8-flash-cyber` (Gemini API / Vertex). No Free ID confirmed.
- **Context window:** Not published (N/A per benchlm.ai).
- **Modalities:** Not confirmed in fetched sources.
- **Pricing (as of 2026-10-16):** Not found.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning type listed as "Reasoning" by benchlm.

### Raw benchmarks found

Only 3 benchmark rows found:

- CyberGym: **86.2%** (Google 3.8 Flash and 3.8 Flash Cyber launch page)
- CWE-Bench: **47.2%** (Google 3.8 Flash and 3.8 Flash Cyber launch page)
- Gray Swan IPI (15 attempts): **6.0%** (Google Gemini 4 Argon launch chart)

No verified public scores found for all other benchmarks (Terminal-Bench, OSWorld, SWE-bench, LiveCodeBench, GPQA, HLE, MMMU-Pro, MRCR, etc.).

### Normalized scores (1–100)

Derived from the 3 raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Evidence is extremely thin — most dims rest on a single number each or nothing; treat all scores as highly provisional.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 82/100.** CyberGym 86.2% (the only agentic/cyber number found); capped by total absence of other agentic benchmark evidence (no OSWorld/Terminal-Bench/Toolathlon numbers).
- **Reasoning: 50/100.** CWE-Bench 47.2% is the only reasoning-related number; capped by zero public GPQA/HLE/ARC-AGI/CritPt numbers.
- **Context window: 50/100.** Context window not published (N/A); no public long-context retrieval score found; scored at midpoint pending confirmation.
- **Multimodal: 50/100.** Modality support not confirmed in fetched sources; no public multimodal benchmark scores found; scored at midpoint pending confirmation.
- **Coding: 50/100.** CWE-Bench 47.2% is the only coding number found; capped by zero other public coding benchmark numbers.
- **Cost efficiency: 50/100.** Pricing not found; scored at midpoint pending confirmation; not counted toward Overall.
- **Overall Score: 56/100.** Half-up mean of (82 + 50 + 50 + 50 + 50) / 5 = 56.4 → 56. Best-fit recommendation: extremely limited public evidence — treat all scores as placeholders pending Google publishing a fuller benchmark suite and context window; CyberGym 86.2% suggests cybersecurity tool-use strength but cannot be generalized.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Google 3.8 Flash and 3.8 Flash Cyber launch page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
