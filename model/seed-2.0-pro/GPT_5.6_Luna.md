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

### Multi-source deep-research addendum (2026-10-09)

- ByteDance confirms the Seed2.0 family, including Pro, Lite, and Mini agent models, with API availability through Volcano Engine. The official model card emphasizes long-context results on DUDE, MMLongBench, and MMLongBench-Doc; independent benchmark coverage remains sparse.
- Recalculation: retained existing score; vendor evidence is useful but not broad enough for an increase.
- Sources: https://seed.bytedance.com/en/seed2 ; https://seed.bytedance.com/en/blog/seed2-0-%25E6%AD%A3%25E5%BC%8F%25E5%8F%91%25E5%B8%83 ; https://arxiv.org/abs/2607.00248

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; normalized interpretation.
