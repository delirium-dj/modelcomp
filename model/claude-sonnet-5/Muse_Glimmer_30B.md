# Claude Sonnet 5 — findings by Muse Glimmer 30B

- Source: Anthropic/claude-sonnet-5
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most capable Sonnet-class model, built for the agentic era with adaptive thinking and 1M context at lower cost than Opus.
- **Provider / access:** Anthropic API
- **Release / knowledge:** 2026 release; knowledge cutoff not publicly confirmed
- **IDs:** `anthropic/claude-sonnet-5`
- **Context window:** 1M / 128K output
- **Modalities:** Text, image, file in; text out
- **Pricing (as of 2026-09-25):** Paid $3/$15 per 1M, no Zen Free ID
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: 80.4% (BenchLM)
- Terminal-Bench 3.0: 14.6% (BenchLM)
- BrowseComp: 84.7% (BenchLM)
- OSWorld-Verified: 81.2% (BenchLM)
- GDPval-AA: 1603 Elo, 47.5% normalized (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: 91.1% AA, 88.9% Vals (BenchLM)
- HLE: 57.4% (BenchLM)
- HLE w/o tools: 43.2% (BenchLM)
- AA-LCR: 82.0% (BenchLM)
- MMLU-Pro Vals: 87.5% (BenchLM)

Coding:

- SWE-bench Verified: 85.2% (BenchLM)
- SWE-bench Pro: 63.2% (BenchLM)
- SWE Multilingual: 78.3% (BenchLM)
- LiveCodeBench Vals: 82.4% (BenchLM)
- AA Coding Index: 71.5% (BenchLM)

Multimodal:

- AA-MMMU-Pro: 77.3% (BenchLM)
- CharXiv: 88.3% (BenchLM)

### Normalized scores (1–100)

- **Tool use: 70/100.** Strong Terminal-Bench 2.1 80.4% and OSWorld 81.2%; Terminal-Bench 3.0 14.6% caps.
- **Reasoning: 78/100.** GPQA Diamond ~90%, AA-LCR 82%; HLE 57.4% tempers.
- **Context window: 90/100.** 1M context tier.
- **Multimodal: 78/100.** Text/image/file in; MMMU-Pro 77.3%, CharXiv 88.3%.
- **Coding: 84/100.** SWE-bench Verified 85.2%, LiveCodeBench 82.4%.
- **Cost efficiency: 50/100.** Paid tier, no free ID.
- **Overall Score: 80/100.** Mean of five quality dims; strong coding and reasoning with solid tool use.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
