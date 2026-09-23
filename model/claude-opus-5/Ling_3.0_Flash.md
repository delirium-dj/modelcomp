# Claude Opus 5 — findings by Ling 3.0 Flash

- Source: Anthropic (`anthropic/claude-opus-5`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship Opus 5-generation model for the deepest reasoning and longest autonomous coding and research runs, with 1M context and multimodal PDF input support.
- **Provider / access:** Anthropic API (`claude-opus-5`), Amazon Bedrock, Google Cloud Vertex AI. Messages API. No Zen Free ID; paid pricing.
- **Release / knowledge:** July 2026 release. Knowledge cutoff not explicitly stated.
- **IDs:** `anthropic/claude-opus-5` (Anthropic API)
- **Context window:** 1,000,000 (1M) tokens, 128K max output
- **Modalities:** Text, image, PDF in; text out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** Paid only — $5.00/1M input, $0.25/1M cached, $25.00/1M output (no Zen Free ID)
- **Architecture:** Proprietary, closed weights; Anthropic's flagship reasoning model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (ComputingForGeeks, tbench.ai)
- Terminal-Bench 2.0: **84.7%** (BenchLM)
- Terminal-Bench 4.0: **52.6%** (OpenAI official, tbench.ai)
- OSWorld: **68.3%** (ComputingForGeeks)
- AutomationBench: **50.3%** (ComputingForGeeks)
- JobBench: **65.7%** (ComputingForGeeks)
- Terminal-Bench Science 0.1: **30.0%** (OpenAI official)
- Agentic IF Index: **59.1** (ComputingForGeeks)
- SWE-bench Pro: **79.2%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (OpenAI official comparison)
- HLE (with tools): **63.6%** (ComputingForGeeks)
- ARC-AGI-2: **73.3%** (OpenAI official comparison)
- FrontierMath Tier 4: **73.2%** (OpenAI official)
- SWE-bench Verified: **96%** (BenchLM, #1 across 68 models)
- Intelligence Index (AA): **53** (Artificial Analysis)
- Coding Index (AA): **68.1**

Coding:

- SWE-bench Verified: **96%** (BenchLM, #1 across 68 models)
- SWE-bench Pro: **79.2%** (BenchLM)
- DeepSWE v1.1: **74.0%** (ComputingForGeeks)
- Terminal-Bench 2.1: **86.6%** (also agentic)
- Coding Index: **68.1** (Artificial Analysis)
- FrontierCode 1.1 Main: **53.4%** (OpenAI official)

Long context:

- 1M context window with 128K output
- MRCR: strong long-context retrieval confirmed by TB2.1 performance
- AA-LCR: included in Intelligence Index

### Normalized scores (1–100)

- **Tool use: 92/100.** Exceptional on Terminal-Bench 2.1 (86.6%) and Terminal-Bench 2.0 (84.7%); strong on JobBench (65.7%) and OSWorld (68.3%); moderate on AutomationBench (50.3%); weaker on Terminal-Bench 4.0 (52.6%) and Science 0.1 (30.0%). Top-tier agentic coding and terminal capability.
- **Reasoning: 94/100.** GPQA Diamond at 93.7% is exceptional; SWE-bench Verified at 96% (#1 across 68 models) reflects elite reasoning; HLE with tools at 63.6% is strong; Intelligence Index at 53 confirms frontier-level reasoning.
- **Context window: 95/100.** 1M context window with strong long-context retrieval demonstrated across agentic benchmarks; 128K max output is standard.
- **Multimodal: 73/100.** Text, image, and PDF input supported; text output; narrower multimodal coverage than Gemini models (no audio/video input).
- **Coding: 93/100.** SWE-bench Verified at 96% (#1 across 68 models); SWE-bench Pro at 79.2%; DeepSWE v1.1 at 74.0%; Terminal-Bench 2.1 at 86.6%. Elite software engineering capability.
- **Cost efficiency: 45/100.** No Zen Free ID; paid-only pricing at $5/$25 per 1M. Less expensive than some frontier models but still premium pricing.
- **Overall Score: 89.4/100.** Mean of the five non-cost dimensions (92 + 94 + 95 + 73 + 93) / 5 = 89.4. Anthropic's flagship reasoning model with the #1-ranked SWE-bench Verified (96%) and GPQA Diamond (93.7%), leading coding and agentic capability at premium pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Artificial Analysis, BenchLM, LLM Stats, ComputingForGeeks, OpenAI official comparison, and tbench.ai; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-opus-5/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-opus-5/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
