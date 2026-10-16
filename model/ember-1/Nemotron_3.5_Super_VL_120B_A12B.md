# Ember-1 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/ember-1 (Fireworks Research Ember-1 launch post), llm-stats.com/models/ember-1
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks AI proprietary reasoning model (released Sept 2026), built on Moonshot Kimi K3 that shortens reasoning traces (~40% fewer tokens) while matching K3-max quality on Fireworks' evaluations; 1M-token context, text in → text out; $3.00/$15.00 per MTok; Research Preview on Fireworks Serverless.
- **Provider / access:** Fireworks API (`fireworks/ember-1`), 1 provider; proprietary license.
- **Release / knowledge:** Released 2026-09-23 (llm-stats); knowledge cutoff not stated.
- **IDs:** `fireworks/ember-1` (Fireworks API). No Free ID confirmed.
- **Context window:** 1.04M tokens (benchlm.ai), 1.0M tokens (llm-stats); output limit not specified. Verified via benchlm.ai and llm-stats.
- **Modalities:** Text in; text out (text only per llm-stats); reasoning yes (shortened reasoning traces); tool use not explicitly specified; JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $3.00/M input, $0.300/M cached input, $15.00/M output via Fireworks.
- **Architecture:** Proprietary (weights not public); 2.8T parameters (llm-stats); built on Moonshot Kimi K3.

### Raw benchmarks found

Only 5 benchmark rows found:

- Terminal-Bench 2.1: **82.0%** (Fireworks Research launch post)
- τ²-bench Airline: **66.0%** (Fireworks Research launch post)
- SWE-bench Verified: **92.2%** (Fireworks Research launch post)
- DeepSWE: **75.2%** (Fireworks Research launch post)

No verified public scores found for all other benchmarks (OSWorld, MCP Atlas, GPQA, HLE, ARC-AGI, MMLU-Pro, MRCR, LiveCodeBench, MMMU-Pro, etc.).

### Normalized scores (1–100)

Derived from the 4 raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Evidence is extremely thin — most dims rest on a single number each or nothing; treat all scores as highly provisional.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 77/100.** Terminal-Bench 2.1 82.0%, τ²-bench Airline 66.0%; capped by total absence of OSWorld/Toolathlon/MCP Atlas numbers for this exact model.
- **Reasoning: 70/100.** Capped by zero public GPQA/HLE/ARC-AGI/CritPt numbers; positioned as reasoning model per benchlm.
- **Context window: 90/100.** Verified 1.04M tokens (benchlm.ai), 1.0M tokens (llm-stats); capped because no public full-depth needle-recall score at 1M.
- **Multimodal: 50/100.** Text in, text out (text only per llm-stats); capped by absence of image/video input and zero public vision benchmarks.
- **Coding: 79/100.** SWE-bench Verified 92.2%, DeepSWE 75.2%; capped by zero other public coding benchmark numbers for this exact model.
- **Cost efficiency: 55/100.** $3.00/$15.00 moderate-to-high pricing; not counted toward Overall.
- **Overall Score: 73/100.** Half-up mean of (77 + 70 + 90 + 50 + 79) / 5 = 73.2 → 73. Best-fit recommendation: proprietary reasoning model with strong SWE-bench Verified and Terminal-Bench 2.1 numbers; treat all figures as provisional given only 4 public benchmark rows.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + llm-stats + Fireworks Research launch post); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
