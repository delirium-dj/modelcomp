# Ember-1 — findings by GPT-6.1 Terra

- Source: Fireworks `accounts/fireworks/models/ember-1`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks' specialized model built on Kimi K3, intended to reduce reasoning-token usage; not assumed identical to the base model.
- **Provider / access:** Fireworks serverless `accounts/fireworks/models/ember-1`.
- **Release / knowledge:** Fireworks lists 2026-09-22 creation; knowledge cutoff not verified.
- **IDs:** `accounts/fireworks/models/ember-1`; no Zen Free ID verified.
- **Context window:** Fireworks lists 1040k tokens; Vals reports 1M context and 131k max output for its deployment.
- **Modalities:** Fireworks lists image input and function calling; text output.
- **Pricing (2026-11-01):** Fireworks $3 input / $15 output / $0.30 cached input per million.
- **Architecture:** Fireworks lists 2.78T parameters, MoE; Vals describes weights as private.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 4.0 **20.71% ± 3.64**, not equivalent to TB 2.1.
- Tau3-Banking, GDPval-AA and Claw-Eval: no verified public score found.

Reasoning / knowledge:

- Vals ProofBench v1.1 **61.00% ± 4.90** and BioMysteryBench **67.04% ± 3.03**; neither substitutes for GPQA or HLE.
- GPQA Diamond and HLE: no verified public score found.

Coding:

- Vals Vibe Code Bench v1.1 **83.87% ± 3.15** and Code Migration **32.51% ± 4.63**.
- SWE-bench Verified and LiveCodeBench: no verified public score found.

Long context:

- Fireworks advertises 1040k context; no verified 512K-plus retrieval result found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Vals terminal-agent result gives direct evidence, but broader tool benchmarks are missing.
- **Reasoning: 78/100.** ProofBench and BioMysteryBench support a provisional assessment without GPQA or HLE.
- **Context window: 96/100.** Advertised roughly 1M context, without verified long-context retrieval accuracy.
- **Multimodal: 65/100.** Fireworks confirms image input; video and audio are not established here.
- **Coding: 83/100.** Strong Vibe Code is moderated by Code Migration and TB 4.0 results.
- **Cost efficiency: 60/100.** Fireworks charges $3/$15 per million; its claim of shorter traces is workload-dependent.
- **Overall Score: 79/100.** Half-up mean of five quality dimensions; useful for image-aware agentic coding with attention to total token spend.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Fireworks model listing and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Fireworks model listing and pricing](https://fireworks.ai/models/fireworks/ember-1)
  - [Vals evaluation](https://www.vals.ai/models/fireworks_ember-1)
- Future sources: add a separate signed findings file alongside this one.
