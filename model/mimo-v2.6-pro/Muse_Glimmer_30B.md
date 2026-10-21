# MiMo V2.6 Pro — findings by Muse Glimmer 30B

- Source: Xiaomi/mimo-v2.6-pro
- Date: 2026-10-20
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's MIT-licensed 1.02T total / 42B active MoE omni-modal model for agents, coding and long-horizon work. Native text, image, video, audio input with 1M context, flagship of the MiMo-V2.6 series.
- **Provider / access:** Xiaomi MiMo API xiaomi/mimo-v2.6-pro via https://api.xiaomimimo.com/v1; OpenAI-compatible Chat Completions. Open weights on Hugging Face XiaomiMiMo/MiMo-V2.6-Pro-RL.
- **Release / knowledge:** 2025-12 release; knowledge cutoff December 2024 per vendor sample code.
- **IDs:** xiaomi/mimo-v2.6-pro
- **Context window:** 1M tokens total / 128K max output — verified on Xiaomi model page and meta.json.
- **Modalities:** text, image, video, audio in; text out; reasoning yes; tool calls yes; JSON mode.
- **Pricing (as of 2026-10-20):** Paid .435 / 1M input, .87 / 1M output, .0036 / 1M cache hit — no Free ID on Zen.
- **Architecture:** Sparse MoE 1.02T total / 42B activated parameters, MIT license, open weights.

### Raw benchmarks found

- Source, Xiaomi MiMo model page MiMo-V2.6-Pro, 2026
- Source, Hugging Face XiaomiMiMo/MiMo-V2.6-Pro-RL model card evaluation table, 2026
- Source, Artificial Analysis Intelligence Index citation via Xiaomi model page

Agent / tool use:

- Terminal-Bench 2.1: 89.9% (Hugging Face eval table)
- Terminal-Bench 4.0: 34.9% (Hugging Face eval table)
- AutomationBench v1.0.6: 53.1% (Hugging Face eval table)
- Toolathlon-Verified: 76.9% (Hugging Face eval table)
- GDPval-AA v2.1: 1673 Elo (Hugging Face eval table)
- OSWorld-Verified: 82.0% (Hugging Face eval table)
- JobBench: 62.0% (Hugging Face eval table)

Reasoning / knowledge:

- Agents' Last Exam: 31.6% (Hugging Face eval table)
- Artificial Analysis Intelligence Index: 46.3 (Xiaomi model page cites 46.32 composite intelligence index, world's strongest open-source model)
- no verified public GPQA Diamond score found
- no verified public HLE score found
- no verified public CritPt score found

Coding:

- DeepSWE v1.1: 71.9% (Hugging Face eval table)
- MiMo Code Bench: 63.2% (Hugging Face eval table)
- ProgramBench: 26.5% (Hugging Face eval table)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- 1M token context claimed; no verified public MRCR / RULER retrieval score reported

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 89.9% and Toolathlon-Verified 76.9% show strong agentic tool use; AutomationBench 53.1% and Terminal-Bench 4.0 34.9% cap the score.
- **Reasoning: 73/100.** Artificial Analysis Intelligence Index 46.3 and Agents' Last Exam 31.6% indicate solid open-weights reasoning; lack of GPQA/HLE/CritPt verification limits peak.
- **Context window: 95/100.** Verified 1M total / 128K output window per vendor; tier ≥1M mapping, capped by max-output limit.
- **Multimodal: 95/100.** Native text, image, video, audio in with text out confirmed via vendor specs and meta.json; full omni-modal coverage.
- **Coding: 78/100.** DeepSWE v1.1 71.9% and MiMo Code Bench 63.2% show strong coding agent performance; ProgramBench 26.5% caps the score.
- **Cost efficiency: 92/100.** Paid .435/.87 per 1M with .0036 cache hit; mid-premium pricing vs open-weights peers, no free tier.
- **Overall Score: 85/100.** Mean of Tool 85 + Reasoning 73 + Context 95 + Multimodal 95 + Coding 78 = 85.2 → best fit for omni-modal long-context agent/coding work at paid pricing.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
