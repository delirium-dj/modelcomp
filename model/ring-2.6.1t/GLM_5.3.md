# Ring 2.6 1T — findings by GLM 5.3

- Source: inclusionAI / Ant Group (`inclusionAI/Ring-2.6-1T`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T (folder slug `ring-2.6.1t` — the size hyphen "2.6-1T" was collapsed to a dot by the project's slug normalizer; same model)
- **Short description:** inclusionAI (Ant Group)'s 1T-class open-weights thinking model — a 1-trillion-total / 63B-active MoE reasoning model built for real-world agent workflows requiring strong capability and operational efficiency; inclusionAI's flagship before Ling-3.0-flash matched it at ~12% of the size.
- **Provider / access:** OpenRouter (`inclusionai/ring-2.6-1t`); Hugging Face open weights (`inclusionAI/Ring-2.6-1T`); no OpenCode Zen ID found.
- **Release / knowledge:** 2026-05-08 (OpenRouter/BenchmarkList; HF listing 2026-05-14); knowledge cutoff not published.
- **IDs:** `inclusionAI/Ring-2.6-1T` (Hugging Face); `inclusionai/ring-2.6-1t` (OpenRouter).
- **Context window:** 262,144 tokens (OpenRouter spec; verified via BenchmarkList profile).
- **Modalities:** text in / text out; native "thinking" (reasoning) model with configurable thinking modes (high / x-high observed on Context Arena runs); tool calls supported per agentic positioning. Text-only — no vision variant verified.
- **Pricing (as of 2026-10-09):** $0.075 / 1M input, $0.625 / 1M output on OpenRouter (BenchmarkList profile; aiflashreport lists $0.30 input on another host — provider-dependent); open weights for self-hosting.
- **Architecture:** 1T total / 63B active Mixture-of-Experts, thinking-tuned (the "Ring" line is inclusionAI's reasoning family); open weights (AA Openness Index 38.89 — weights available, but no training-data or methodology transparency).

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom: **92.4%** success rate (AA harness via BenchmarkList; rank 42/332 — field leader at 2026-06-10 snapshot; vendor reports 95.32%)
- Claw-Eval: **63.8%** (official HF card via BenchmarkList; rank 6/14)
- Terminal-Bench Hard: **28.8%** (AA harness via BenchmarkList; rank 79/326)
- Tau3-Banking: **17.9%** (AA harness via BenchmarkList; rank 60/176)
- GDPval-AA: **925 Elo / 20.9% normalized** (Artificial Analysis; rank 126/352)
- AA-Briefcase: **656 Elo, 10.9% rubric pass** (Artificial Analysis; rank 83/145)
- PinchBench: **87.6%** (vendor-reported; inclusionAI claims it edges GPT-5.4 and Gemini 3.1 Pro — unverified independently)
- AA Agentic Index: **18.86** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **85.7%** (AA via BenchmarkList; vendor claims 88.27)
- HLE: **21.6%** (AA via BenchmarkList; AA II breakdown shows 18.3%)
- AA-LCR: **70.0%** (AA via BenchmarkList; AA II breakdown 64.3%)
- AIME 2026: **95.83%** (vendor-reported)
- CritPt: **3.7%** (AA II breakdown)
- AA-Omniscience: **-37.75** (AA II breakdown — weak knowledge reliability)
- Artificial Analysis Intelligence Index: **30.57** (#105/427, 76th percentile; cost/task $0.35)
- AIIQ Composite IQ: **101** (#109/147; academic 122, abstract 83)
- ObviousBench: **97.9% answer pass³** (81st percentile; 92.4% high-effort, 91.7% x-high)

Coding:

- SciCode: **45.0%** (74th percentile; AA II breakdown 42.4%)
- Terminal-Bench 2.1: **43.1%** (rank 91/194; weighted cost/task $0.23)
- AA Coding Index: **42.83** (AA II breakdown)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- AA-LCR at 262K window: 70.0% (above); Context Arena (GDM-MRCRv2): **69.7% average** (high thinking; AUC 128K 64.1%, AUC 1M 10.8%), 69.8% (x-high) — rank 8/30
- MRCR/RULER at full window: no additional retrieval benchmark found

Multimodal:

- Text-only model — no verified multimodal benchmark exists

### Normalized scores (1–100)

- **Tool use: 62/100.** Outstanding conversational agent strength (Tau2 Telecom 92.4%, field-leader at snapshot; PinchBench 87.6% vendor) with usable Claw-Eval 63.8%, but complex multi-step suites are weak (GDPval 925 Elo, AA-Briefcase 656, TB Hard 28.8%, Tau3-Banking 17.9%) and the AA Agentic Index is only 18.9.
- **Reasoning: 64/100.** GPQA 85.7% and vendor AIME 95.83% are strong, HLE 21.6% is well under the 40%+ frontier ref, AA II of 30.57 sits mid-pack (76th percentile), and the negative AA-Omniscience (-37.75) plus CritPt 3.7% show unreliable knowledge/physics reasoning.
- **Context window: 72/100.** Verified 262,144-token window lands the 200K–500K tier just above the 200K=70 anchor, with Context Arena AUC-1M collapse (10.8%) confirming it is not a long-window model.
- **Multimodal: 15/100.** Text-only input/output; no vision, audio, or video capability verified.
- **Coding: 56/100.** Mid-tier engineering evidence only — SciCode 45%, TB2.1 43.1%, Coding Index 42.8 — with no verified SWE-bench Verified or LiveCodeBench number anywhere.
- **Cost efficiency: 95/100.** $0.075/$0.625 per 1M on OpenRouter with open weights and a 63B-active MoE — below the ~$0.10/$0.20 near-free anchor on input, slightly above on output; AA cost/task $0.35.
- **Overall Score: 54/100.** Half-up mean of (62 + 64 + 72 + 15 + 56) = 53.8 → 54. Best fit: cheap open-weights thinking model for conversational agent work (telecom-style dialog, structured tool flows) — not a frontier coding or knowledge model, and its Ling-3.0-flash successor matches it at a fraction of the size.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/GLM-5.3)** — 2026-10-09
- Method: public internet research (BenchmarkList 16-benchmark profile with AA-verified rows, OpenRouter, vendor claims via opper/aiflashreport, AA II breakdown); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
