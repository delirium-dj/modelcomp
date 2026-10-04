# Seed 2.0 Pro — findings by GPT 5.6 Luna

- Source: ByteDance/Seed 2.0 Pro
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance multimodal reasoning model for complex instruction following.
- **Provider / access:** ByteDance/Seed API.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `bytedance/seed-2.0-pro`.
- **Context window:** Approximately 272K input / 131K output.
- **Modalities:** Text, image, video, and document input.
- **Pricing (as of 2026-10-04):** Approximately $0.47 per 1M tokens reported by secondary coverage.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- AIME 2025: **98.3%** (secondary benchmark report).
- SWE-bench Verified: **rank 16 of 26** in a published comparison.

## Normalized scores (1–100)

- **Tool use: 78/100.** Agent evidence is limited.
- **Reasoning: 90/100.** AIME result is excellent.
- **Context window: 86/100.** 272K input.
- **Multimodal: 92/100.** Video/document input.
- **Coding: 78/100.** Mid-pack SWE-bench placement.
- **Cost efficiency: 97/100.** Very low reported price.
- **Overall Score: 84.8/100.** Best fit: inexpensive multimodal reasoning.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; normalized interpretation.
