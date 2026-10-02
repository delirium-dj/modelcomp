# Jev 1.13 — findings by LongCat 2.5 Preview

- Source: TypeSafe AI/Jev 1.13
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13
- **Short description:** TypeSafe's System One structured decision model — returns calibrated probabilities for typed questions (yes/no, pick-one, rubric-score) instead of generating prose. Designed for routing, classification, and guardrail checks inside applications.
- **Provider / access:** TypeSafe AI API — `typesafe/jev-1.13.0`. OpenRouter — `typesafe/jev-1.13`.
- **Release / knowledge:** 2026-09-15 release.
- **IDs:** `typesafe/jev-1.13.0`
- **Context window:** 64K tokens total (32K for state + longest question).
- **Modalities:** text in; typed decisions (probabilities) out. No image, audio, or video input.
- **Pricing (as of 2026-10-02):** $0.042/1M input, $0/1M output (output free).
- **Architecture:** Proprietary. Built on Qwen3.5-4B-Base. Trained with Reinforcement Learning for Calibrated Decisions (RLCD). 0.20s median latency.

### Raw benchmarks found

Agent / tool use:

- JevBench overall score: **72.1** (#3 of 112 systems)
- JevBench intelligence: **72.0** (#3)
- JevBench calibration: **88.0** (#3)
- JevBench speed: **83.8**
- Capability ranking: **80.0** (#1 among Jev-class systems)

Reasoning / knowledge:

- SST-2 (2 labels): **0.963** (laya-ai.com)
- TREC (6 labels): **0.927** (laya-ai.com)
- Banking77 (77 labels): **0.813** (laya-ai.com)
- Multilingual average (7 languages): **0.872** (laya-ai.com)
- arXiv category (8 options): **96.9%** (opper.ai)
- Stack Exchange site (6 options): **97.5%** (opper.ai)
- GitHub bug or feature (yes/no): **95.1%** (opper.ai)

Coding:

- No coding benchmark scores found. Jev is not a coding model.

Long context:

- No long-context retrieval benchmark (MRCR/RULER/GraphWalks) publicly reported for Jev 1.13.

Multimodal:

- Text-only model. No image, audio, or video input support.

Decision-specific benchmarks:

- 8-way intent routing: **83.8%** (ayautomate.com)
- 77-way intent routing: **78.8%** (ayautomate.com)
- Prompt-injection detection: **87.0%** (ayautomate.com)
- Six-benchmark average: **83.85%** (AutoTrust AI)

### Normalized scores (1–100)

- **Tool use: 15/100.** Jev is not a tool-use model — it IS a tool for other systems. It returns typed decisions rather than executing actions. Score reflects its specialized nature.
- **Reasoning: 50/100.** Structured decision-making with calibrated probabilities. Strong classification accuracy (SST-2 0.963, Banking77 0.813) but not open-ended reasoning. Capped by lack of general reasoning capability.
- **Context window: 60/100.** 64K token context window (32K for state). Adequate for decision tasks but smaller than general-purpose models.
- **Multimodal: 15/100.** Text-only model. No image, audio, or video input support.
- **Coding: 10/100.** Not a coding model. Designed for structured decisions, not code generation.
- **Cost efficiency: 95/100.** $0.042/1M input and free output — extremely cost-efficient for high-volume decision tasks. 0.20s median latency. Among the cheapest models per decision.
- **Overall Score: 30/100.** Mean of five quality dims (15+50+60+15+10)/5 = 30.0 → 30. Note: Jev is a specialized decision model, not a general-purpose LLM. Its value is in high-volume structured decision tasks (routing, classification, guardrails) where it outperforms general models on cost and latency, not in open-ended generation or reasoning.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
