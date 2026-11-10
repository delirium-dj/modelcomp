# Claude Mythos 5.1 — findings by Crouton Alpha

- Source: Anthropic/Claude Mythos 5.1
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's trusted-access reasoning variant of the Fable 5.1 weights for vetted cybersecurity and life-sciences work; identical weights to Fable 5.1, different safeguards.
- **Provider / access:** Anthropic Claude API trusted-access (CVP/LSVP), no general Zen listing found; enabled via Cyber Verification Program / Life Sciences Verification Program.
- **Release / knowledge:** 2026-09-01 (Anthropic announcement).
- **IDs:** `anthropic/claude-mythos-5-1` (API model ID per system card; OpenCode Zen general catalog does not list it).
- **Context window:** 1M tokens total (BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** Same as Fable 5.1 where billed: $10 input / $50 output / $0.25 cached-read per 1M (Anthropic launch). Paid, trusted-access only.
- **Architecture:** Proprietary, same Fable 5.1 weights (Anthropic: "same model, different safeguards").

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.90%** (Anthropic system card; BenchLM lists only this row for Mythos 5.1)
- Fable 5.1 weights republished: Terminal-Bench 4.0 **55.8%** (Fable), Terminal-Bench-Science **52.6%**, Toolathlon-Verified **77.8%**, GDPval-AA **1763**, AutomationBench **31.4%**, AA AutomationBench **59.4%**, OSWorld 2.0 **41.7% strict / 77.9% partial** (Anthropic table / BenchLM Fable 5.1 page — same weights, cited labelled as Fable measurements)

Reasoning / knowledge:

- HLE **65%**, HLE w/o tools **60.9%** (Anthropic table, Fable 5.1 weights)
- GPQA Diamond **93.7%** (AA, Fable page), ARC-AGI-2 **90%** (system card), AA-LCR **85.3%**, CritPt **29.7%**, Intelligence Index **49.2** (AA via BenchLM Fable page; BenchLM 81.3 #7)
- Mythos-specific: strongest cyber capabilities of any released model per Anthropic, within lower Frontier Compliance risk tier.

Coding:

- SWE-bench Pro **81.2%**, SWE Multilingual **89.1%**, DeepSWE **67.4%**, LiveCodeBench (Vals) **90.5%**, Coding Index **81.6** (system card / BenchLM Fable page — same weights, labelled)

Long context:

- 1M context; AA-LCR **85.3%**, GraphWalks **65.0%** (Fable weights)

Multimodal:

- ParseBench **77.81%**, Design Arena **1308** (Fable weights)

### Normalized scores (1–100)

- **Tool use: 93/100.** Fable weights: TB2.1 91.4%, GDPval 1763, Toolathlon 77.8%; Mythos-measured TB4.0 60.9% exceeds Fable 55.8% on same suite.
- **Reasoning: 93/100.** HLE 65%, GPQA 93.7%, ARC-AGI-2 90%, LCR 85.3% (Fable lineage).
- **Context window: 96/100.** 1M native, LCR 85.3% across long context.
- **Multimodal: 71/100.** Image in, text out; same input tier as Fable 5.1.
- **Coding: 93/100.** SWE-Multi 89.1%, LiveCode 90.5%, SWE-Pro 81.2% (Fable lineage).
- **Cost efficiency: 30/100.** $10/$50 list price where billed; restricted access further limits practical value.
- **Overall Score: 89/100.** Mean (93+93+96+71+93)/5 = 89.2 → 89; best-fit vetted cyber/bio research where trusted access applies.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Anthropic announcement/system card, BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Fable 5.1 measurements are cited as lineage for the same weights.
- Reference URLs:
  - [Anthropic — Introducing Claude Fable 5.1 and Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Claude Fable 5.1 and Mythos 5.1 System Card](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [BenchLM — Claude Mythos 5.1](https://benchlm.ai/models/claude-mythos-5-1)
  - [Artificial Analysis Intelligence Index Leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
