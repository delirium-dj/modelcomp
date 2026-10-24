# MiniMax M3.1 Flash Preview — findings by Muse Glimmer 30B

- Source: MiniMax / minimax-m3.1-flash-preview
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiniMax M3.1 Flash Preview → MiniMax M3.1 Flash
- **Short description:** Native multimodal mixture-of-experts model for coding, agentic workflows, computer use and cybersecurity; ultra-efficient open-weight model for everyday work.
- **Provider / access:** MiniMax AI. API via platform.minimax.io Anthropic/OpenAI-compatible; M Plan subscription and MiniMax Code. Preview shipped 2026-09-27, GA 2026-10-19.
- **Release / knowledge:** Preview 2026-09-27; GA 2026-10-19. Knowledge cutoff not published.
- **IDs:** `MiniMax-M3.1-Flash-Preview` / `MiniMax-M3.1-Flash`
- **Context window:** 1,000,000 tokens input; 512,000 tokens output.
- **Modalities:** Text + image + video input → text output. Multimodal reasoning, tool use, agentic reasoning. Thinking always on with tunable effort low/medium/high/xhigh/max.
- **Pricing as of 2026-10-24:** Pay-as-you-go $0.15 /1M input, $0.60 /1M output, $0.015 /1M cached input. Preview was subscription-only.
- **Architecture:** Native multimodal MoE ~428B total / ~23B active per third-party coverage; sparse attention, native visual encoder. Parameter count not officially published by MiniMax.

### Raw benchmarks found

**Vendor-reported MiniMax blog / MiniMax-AI.chat**
- Automation-Bench v1.0.6: 62.8
- BankerToolBench: 76.2
- GDP.pdf AA / AutomationBench-AA: 20.8
- Terminal Bench 4.0: 38.1
- LOCA-Bench 256K: 60.3
- Agents’ Last Exam: 29.6
- OSWorld 2.0 / OSWorld V2: 61.7
- DeepSWE v1.1: 73.7
- PostTrain Bench v1.1: 39.3
- NL2Repo-Bench: 61.2
- SWE Refactor Bench: 23.0
- CyberGym: 82.2
- BabyVision w/ tools: 91.0
- HLE without tools: 43.4
- CharXiv RQ: 82.5
Source: https://minimax-ai.chat/models/minimax-m3-1-flash-preview/ ; https://www.minimax.io/blog/minimax-m31f

**MarkTechPost aggregation**
- Automation-Bench v1.0.6: 62.2 reported in table vs 62.8 in cost chart – minor inconsistency.
- Terminal Bench 4.0: 38.1 vs 51.8 for Opus 5
- DeepSWE v1.1: 73.7
Source: https://www.marktechpost.com/2026/10/19/minimax-m3-1-flash-release/

**Conflicts / notes**
- Parameter count not released by MiniMax; 428B/23B active quoted only by third parties.
- SaaSCity noted no model card/benchmark table at preview time Sept 2026, conflicting with Oct 19 official blog publishing benchmarks.
- No independent replication located; all scores vendor-reported.
- Model weights announced will be released later; no Hugging Face repo as of 2026-10-24.

### Normalized scores (1–100)

- **Tool use: 60/100.** Automation-Bench 62.8, OSWorld 2.0 61.7, Agents’ Last Exam 29.6. Terminal Bench 4.0 38.1 caps score.
- **Reasoning: 60/100.** HLE without tools 43.4, GDP.pdf AA 20.8. Limited reasoning verification.
- **Context window: 95/100.** 1M input verified.
- **Multimodal: 75/100.** Text+image+video input → text output; BabyVision w/ tools 91.0, CharXiv RQ 82.5.
- **Coding: 70/100.** DeepSWE v1.1 73.7, NL2Repo-Bench 61.2, SWE Refactor 23.0.
- **Cost efficiency: 90/100.** $0.15/$0.60 per 1M; very low-cost multimodal coding model.
- **Overall Score: 72/100.** Mean of Tool 60, Reasoning 60, Context 95, Multimodal 75, Coding 70. Efficient multimodal coding model with vendor-only benchmark data.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
