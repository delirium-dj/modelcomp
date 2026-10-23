# Muse Wonder 1.0 — findings by DeepSeek 4.1 Flash

- Source: Meta/Muse Wonder (`muse-wonder-1.0`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's first frontier model — a 1M-context multimodal agent built for personal and professional knowledge work, with "active memory", long-horizon coding and tool use. Muse Wonder Full is the higher-capability subscription-only sibling.
- **Provider / access:** Meta Model API (`muse-wonder-1.0`), Muse Code, OpenRouter-style OpenAI-compatible endpoint. Proprietary; no open weights.
- **Release / knowledge:** 2026-10-12; preview status.
- **IDs:** `muse-wonder-1.0`; `muse-wonder-full` for the subscription variant.
- **Context window:** 1,048,576 tokens.
- **Modalities:** text, image, video, audio and PDF input; text output; reasoning effort from `minimal` to `max`.
- **Pricing (as of 2026-10-23):** $4.00/$20.00 per 1M in/out; cached input $0.20.
- **Architecture:** proprietary frontier model; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Harvey Legal Agent Benchmark (LAB-AA) v1.1: **10.0% all-pass rate** at max effort — a weak legal-agent result (Meta model card via models.dev)
- Vals Finance Agent v2: **56.6% accuracy**; JobBench: **75.3%** (Wonder Full); GDPval-AA: **1857** (Wonder Full, Artificial Analysis)
- OSWorld V2.1 and ProgramBench: ProgramBench **50.0%** share of rollouts passing ≥95% tests (Meta model card)

Reasoning / knowledge:

- MemoryBench: **85.6** (Wonder), **85.5** (Wonder Full), ahead of Opus 5.5's 81.5 and GPT-6 Astra's 81.4
- Artificial Analysis Intelligence Index: **56** for Wonder Full, behind Opus 5.5 at 58 (technology.org)

Coding:

- DeepSWE 1.1: **78.8% pass@1** (Wonder), **79.0%** (Wonder Full), ahead of Opus 5.5's 74.2 and GPT-6 Astra's 74.1
- SWE-Marathon: vendor/third-party leaderboard topper for Wonder Full (Meta)

Long context:

- 1M vendor-stated; no MRCR/RULER row found in the public model card excerpt.

Multimodal (VL/audio) evidence:

- Text, image, video, audio and PDF input are vendor-stated; Chartography/visual-agent rows exist for the family but no exact Wonder number was retrieved.

### Normalized scores (1–100)

- **Tool use: 70/100.** Finance Agent 56.6, JobBench 75.3 and GDPval 1857 are strong, but Harvey LAB 10.0 is a severe specialist failure (Meta; Vals AI; AA).
- **Reasoning: 80/100.** MemoryBench 85.6 and an AA Intelligence Index of 56 put it at frontier-adjacent level, behind Opus 5.5 at 58 (Meta; technology.org).
- **Context window: 95/100.** 1M with native PDF/video/audio input is top-tier; no retrieval benchmark to confirm effective use.
- **Multimodal: 76/100.** Broad input coverage (text/image/video/audio/PDF) and visual-agent tooling, but no exact MMMU/Chartography score for this variant.
- **Coding: 79/100.** DeepSWE 78.8/79.0 is frontier-class and ahead of Opus 5.5 and GPT-6 Astra on the same harness (Meta).
- **Cost efficiency: 70/100.** $4/$20 with $0.20 cached input is premium-priced; no free tier.
- **Overall Score: 80/100.** Mean of the five quality dims (70+80+95+76+79)/5 = 80.0 → 80. Best-fit: high-stakes knowledge-work agents with long multimodal context; avoid for legal-agent work without validation.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (Meta Muse Wonder model card, Meta developer docs, models.dev benchmark entries, TechCrunch, technology.org, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
