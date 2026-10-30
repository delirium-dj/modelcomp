# Gemini 3.8 Flash Cyber — findings by Muse Glimmer 30B

- Source: Google/ Gemini 3.8 Flash Cyber
- Date: 2026-10-20
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's security fine-tune of Gemini 3.8 Flash for vulnerability detection and automated patching. Fairwind-gated, Google-only specialist model for vetted security teams.
- **Provider / access:** Google DeepMind Fairwind Program. API ID `google/gemini-3-8-flash-cyber`. Restricted distribution, no public Chat Completions endpoint.
- **Release / knowledge:** Release year 2026; knowledge cutoff not published.
- **IDs:** `google/gemini-3-8-flash-cyber` (Fairwind). No Free ID on OpenCode Zen.
- **Context window:** 1,048,576 total / 65K max output (meta.json). Verified via meta.
- **Modalities:** Text, code in; text, code out. No image/audio/video input. Reasoning enabled; tool calls not publicly documented for this fine-tune.
- **Pricing (as of 2026-10-20):** Restricted Fairwind Program — no public pricing. Listed as Google-only.
- **Architecture:** Proprietary Google DeepMind. Fine-tune of Gemini 3.8 Flash family. Parameters undisclosed.

### Raw benchmarks found

> List measured numbers with source.

Agent / tool use:

- Real-world vulnerability discovery (source-code scan across 20 languages): **71.0%** (deepmind.google/models/gemini/cyber/ performance chart, Gemini 3.8 Flash Cyber bar)
- Wiz penetration test benchmark: **58.2%** (deepmind.google/models/gemini/cyber/ performance chart)
- CWE-bench v1: **47.2%** (meta.json short description; CWE-Bench 47.2%, Fairwind-gated)

Reasoning / knowledge:

- No verified public GPQA Diamond / HLE / Index scores found for this exact Fairwind ID.

Coding:

- Vulnerability detection / automated patching capability inferred from above security benchmarks. No verified public SWE-bench Verified / LiveCodeBench / DeepSWE numbers found.

Long context:

- No long-context retrieval benchmark published for this security fine-tune.

### Normalized scores (1–100)

- **Tool use: 65/100.** Security-focused autonomous vulnerability discovery and penetration testing show functional tool-like agent behavior, capped by gated access and lack of public Terminal-Bench/OSWorld data.
- **Reasoning: 62/100.** Vulnerability reasoning demonstrated via CWE-bench 47.2% and Wiz 58.2% real-world tasks; no general reasoning leaderboards published for this fine-tune.
- **Context window: 95/100.** 1M total / 65K out meets ≥1M tier; score capped slightly by max output limit vs 1M output models.
- **Multimodal: 15/100.** Text/code only, per meta.json modalities.
- **Coding: 68/100.** Automated patching fine-tune with 71.0% real-world vulnerability discovery and 58.2% Wiz pen-test; capped by CWE-bench 47.2% and absence of public SWE-bench/DeepSWE numbers.
- **Cost efficiency: 10/100.** Restricted Fairwind Program, no public pricing/free tier; specialist access only.
- **Overall Score: 61/100.** Mean of Tool 65 + Reasoning 62 + Context 95 + Multimodal 15 + Coding 68 = 61. Specialist security model with strong context and coding-relevant vulnerability skills, limited by text-only modality and gated availability.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.

---
