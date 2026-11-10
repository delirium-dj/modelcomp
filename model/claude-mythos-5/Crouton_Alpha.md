# Claude Mythos 5 — findings by Crouton Alpha

- Source: Anthropic/Claude Mythos 5
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's trusted-access variant of the Fable 5 weights for vetted cyber/bio work; identical weights to Fable 5, more permissive safeguards.
- **Provider / access:** Anthropic trusted-access (CVP/LSVP), no general Zen listing verified.
- **Release / knowledge:** 2026-07 (system card).
- **IDs:** `anthropic/claude-mythos-5` (BenchLM; no Zen ID verified).
- **Context window:** 1M+ tokens total (BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** Same Fable 5 tier $10/$50 where billed; paid trusted-access only.
- **Architecture:** Proprietary, same Fable 5 weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%** (system card)
- OSWorld-Verified **85%** (system card)
- BrowseComp **88%** (system card)
- CyberGym **83.8%** (system card — strongest cyber among tracked here)

Reasoning / knowledge:

- GPQA **94.1%** (system card)
- HLE **64.5%**, HLE w/o tools **59%** (system card)
- USAMO 2026 **97.6%** (system card)

Coding:

- SWE-bench Verified **95.5%** (system card)
- SWE-Pro **80.3%** (system card)
- SWE Multilingual **92.2%** (system card)
- Terminal-Bench 2.1 **88.0%** (system card)

Long context:

- 1M+ context; Fable-weight LCR **82.3%** lineage (labelled Fable 5 measurement).

Multimodal:

- CharXiv **93.5%**, CharXiv w/o tools **88.9%** (system card)
- SWE Multimodal **54.9%** (system card)

### Normalized scores (1–100)

- **Tool use: 93/100.** TB2.1 88%, OSWorld 85%, BrowseComp 88% are frontier; CyberGym 83.8% confirms cyber strength.
- **Reasoning: 94/100.** GPQA 94.1%, HLE 64.5%, USAMO 97.6% exceed Fable 5 lineage; no CritPt row published for Mythos cut.
- **Context window: 97/100.** 1M+ native; LCR 82.3% lineage.
- **Multimodal: 74/100.** CharXiv 93.5% is exceptional vision, but image-only input caps the tier (+2 for CharXiv outlier).
- **Coding: 94/100.** SWE Verified 95.5%, SWE-Pro 80.3%, SWE-Multi 92.2% exceed Fable 5 prints.
- **Cost efficiency: 30/100.** $10/$50 trusted-access tier — premium anchor.
- **Overall Score: 90/100.** Mean (93+94+97+74+94)/5 = 90.4 → 90; best-fit vetted cyber research where trusted access applies.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Anthropic system card, BenchLM; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5 and Mythos 5 System Card](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf)
  - [BenchLM — Claude Mythos 5](https://benchlm.ai/models/claude-mythos-5)
  - [BenchLM — Claude Fable 5](https://benchlm.ai/models/claude-fable)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
