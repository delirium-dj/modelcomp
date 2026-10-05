# Gemma 4 E2B — findings by GLM 5.3 Flash

- Source: Google DeepMind (`gemma-4-e2b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B (effective 2B-class, Matryoshka-style)
- **Short description:** Google DeepMind's smallest Gemma 4 entry — a multimodal open-weights model with ~2.3B effective parameters (5.1B total per one listing) that runs on as little as 4 GB RAM. Top use cases: on-device assistants, cheap edge inference, and lightweight multimodal chat.
- **Provider / access:** Hugging Face (Gemma 4 collection, Apache 2.0); Azure AI model catalog; Google AI model card (ai.google.dev); aggregator listings (LLMLearner, apxml, benchlm, llm-stats). Chat-style APIs via hosts.
- **Release / knowledge:** April 2026 Gemma 4 release window (family overview 2026-07-08 updated listings); knowledge cutoff not published.
- **IDs:** HF `google/gemma-4-E2B` / `gemma-4-E2B-it`; Azure AI catalog entry. No dedicated OpenCode Zen Free ID verified.
- **Context window:** 128K tokens (~131K per aggregators — consistent with the E4B sibling's 131,072). Verified how: aggregator listings; vendor per-variant value not directly quoted.
- **Modalities:** text + image input (audio input cited for the E-series on the family model card), text output. Tool calls/JSON mode not documented.
- **Pricing (as of 2026-10-05):** ~$0.02 per 1M input / $0.04 per 1M output (anotherwrapper comparison vs Grok-4 Fast Reasoning). Apache 2.0 weights = free local/on-device use.
- **Architecture:** Matryoshka-style effective sizing — sources conflict on parameters (~2.3B effective vs ~5.1B total multimodal); Apache 2.0; member of the 2.3B–31B Gemma 4 family; ~+12% relative translation improvement over Gemma 3n E2B per the technical report.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- MMLU Pro: **82.6%** (Gemma 4 model card, thinking enabled — sibling E4B scores 85.2% in the same comparison)
- ~15 tracked benchmarks on aggregators (LLMLearner, apxml, llm-stats, benchlm) — individual values not surfaced in the sources reviewed
- Long-context: the Gemma 4 family achieves **66.4%** on long-context benchmarks (family-level figure, per LLMLearner summary)
- GPQA Diamond / HLE / LCR / MLCR / CritPt: no E2B-specific verified public score found (the 31B family flagship holds the published GPQA/AIME numbers)

Coding:

- LiveCodeBench / SWE-bench / SciCode / Vibe Code Bench: no verified public score found for E2B

Long context:

- no E2B-specific retrieval value; family-level 66.4% long-context figure only

### Normalized scores (1–100)

- **Tool use: 42/100.** Zero agentic or tool benchmarks found; scored at the sub-floor for a 2B-class edge model with no demonstrated multi-step tool use.
- **Reasoning: 55/100.** MMLU Pro 82.6% with thinking enabled is respectable for the class (vendor-measured); capped by the absence of any independently attributed GPQA/HLE value and its position at the bottom of the Gemma 4 range.
- **Context window: 60/100.** 128K tokens is a fair entry-tier window, notably above many small-model peers; no retrieval verification for this variant.
- **Multimodal: 58/100.** Text+image (audio cited for the E-series) at 2B-class is real capability breadth, but no measured vision/audio scores were surfaced.
- **Coding: 40/100.** No published coding benchmark value of any kind; scored at the small-model floor pending evidence.
- **Cost efficiency: 97/100.** $0.02/$0.04 per 1M hosted, free Apache 2.0 weights, and a 4 GB RAM footprint make it nearly free to run anywhere.
- **Overall Score: 51.0/100.** Mean of the five quality dims (42 + 55 + 60 + 58 + 40) / 5. Best fit: ultra-cheap on-device multimodal chat and simple tasks — not reasoning-heavy, agentic, or coding work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (Google AI model card references, LLMLearner, apxml, BenchLM, llm-stats, anotherwrapper, Azure AI catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
