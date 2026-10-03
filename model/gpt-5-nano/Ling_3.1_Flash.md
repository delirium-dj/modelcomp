# GPT-5 nano — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / GPT-5 nano
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 nano
- **Short description:** OpenAI's fastest, most cost-efficient GPT-5 variant — for summarization, classification, and other speed/cost-sensitive workloads (OpenAI now recommends GPT-5.6 Luna for most new such workloads).
- **Provider / access:** OpenAI — API (standard, Batch API at half price, Flex tier); OpenRouter (OpenAI + Azure providers, automatic failover).
- **Release / knowledge:** 2025-08 (GPT-5 family launch; exact nano release date not captured). Knowledge cutoff not captured.
- **IDs:** `gpt-5-nano`; folder `gpt-5-nano`.
- **Context window:** 400,000 tokens; max output 128,000.
- **Modalities:** Text in, text out (no image-input evidence captured for the nano variant — flagged).
- **Pricing (as of 2026-10):** $0.05 / $0.40 per 1M input/output; cached input $0.005; Batch API $0.025 / $0.20; Flex $0.025 / $0.20. (OpenRouter price history records $0.025/$0.20 observations on 2026-09-11/12 — consistent with the batch/Flex tiers.)
- **Reasoning effort:** minimal / low / medium / high (per AA variant rows).
- **Architecture:** Not publicly disclosed (proprietary).

### Raw benchmarks found

**Artificial Analysis (independent; per reasoning-effort variant):**
- GPQA Diamond: **67.6%** (high) / 67.0% (medium) / 42.8% (minimal); OpenRouter auto-routing 69.3% (OpenAI 68.7%, Azure 68.8%).
- HLE: **9.5%** (high) / 8.7% (medium) / 4.0% (minimal).
- IFBench: 67.6% (high) / 65.9% (medium) / 32.5% (minimal).
- τ²-Bench Telecom: **36.5%** (high) / 30.4% (medium) / 25.7% (minimal); TAU-Bench Azure (EU) 48.1% (OpenAI) / 50.4% (auto-routing) / 45.0% (Azure).
- AA-LCR: 45.0% (high) / 43.7% (medium) / 20.0% (minimal).
- CritPt: **0.0%** (all variants).
- Terminal-Bench Hard: 12.1% (high) / **17.4%** (medium) / 6.8% (minimal).
- AA-Omniscience: accuracy 19.1% / 17.6% / 13.1%; non-hallucination rate 41.0% / 47.4% / 11.2%.
- Design Arena Elos: 3D 981; Code Categories 1090; Data Visualization 1064; Game Development 1057; UI Component 1073; Website 1108.

**Other:**
- SWE-bench Verified **34.8%** (official board, mini-SWE-agent, reasoning_effort medium, observed 2025-08-07; −42.0pt vs Claude Opus 4.5) vs **25.0%** (Serenities AI — conflicting, likely different harness/effort; flagged).
- MATH 65.0% (Serenities AI); GPQA Diamond 35.0% (Serenities AI — conflicts with AA's 42.8-67.6% range; likely minimal effort; flagged).

## Scores

- **Tool use: 51/100.** τ²-Bench Telecom 36.5% (high), TAU-Bench Azure 45.0-50.4%, Terminal-Bench Hard 12.1-17.4% — modest agentics for the class.
- **Reasoning: 53/100.** GPQA Diamond 67.6% (high) is mid-tier; HLE 9.5% and CritPt 0.0% are weak; AA-Omniscience non-hallucination 41.0% (≈59% hallucination rate) is a material weakness.
- **Context window: 73/100.** 400K tokens with AA-LCR 45.0% measured long-context retrieval.
- **Multimodal: 15/100.** Text-only per captured evidence (no image-input documentation for the nano variant).
- **Coding: 49/100.** SWE-bench Verified 34.8% (official board, mini-SWE-agent, medium effort; 25.0% per Serenities — conflict flagged); Terminal-Bench Hard 12.1-17.4%; no Aider/SWE-bench Pro rows captured.
- **Cost efficiency: 98/100.** $0.05 / $0.40 per 1M with $0.005 cache reads; Batch/Flex at $0.025 / $0.20 — among the cheapest frontier-lab models.
- **Overall Score: 48.2/100.** Mean of Tool use 51, Reasoning 53, Context window 73, Multimodal 15, Coding 49 = 48.2.

> **Gap vs folder average (61.5): −13.3.** The peer set appears to credit the GPT-5 lineage and the 400K/$0.05 profile; this report scores the measured rows, which are modest for the 2026-10 frontier — SWE-bench Verified 34.8% (mini-SWE-agent, medium), Terminal-Bench Hard 12.1-17.4%, HLE 9.5%, CritPt 0.0% — with text-only Multimodal at 15. The model's genuine strengths (GPQA 67.6% at high, 400K context, $0.05 input) are fully credited in their dimensions.

## Notes

- Verification trail: OpenAI API docs (pricing $0.05/$0.005/$0.40; Batch $0.025/$0.20; Flex; "fastest, most cost-efficient version of GPT-5"; GPT-5.6 Luna recommendation), OpenRouter page (provider rows; full AA benchmark table per effort variant; auto-routing GPQA 69.3% / TAU-Bench 50.4%), AI Atlas (SWE-bench Verified 34.8% official-board row with harness/effort annotations; price history), Serenities AI (SWE-bench 25.0%, GPQA 35.0%, MATH 65.0% — conflicting rows, flagged), Artificial Analysis (per-variant rows).
- Known conflicts: SWE-bench Verified 34.8% (official board) vs 25.0% (Serenities); GPQA Diamond 67.6% (AA high) vs 35.0% (Serenities) — effort-setting differences are the likely cause.
- Open questions: image-input support for the nano variant; knowledge cutoff; vendor-published benchmark table for nano specifically.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: vendor benchmark table, image-input confirmation, independent replications.
