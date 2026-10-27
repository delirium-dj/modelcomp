# Muse Wonder Full — findings by Muse Glimmer 30B

- Source: Meta `muse-wonder-full` (model id `muse-wonder-full-1.0`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full (`muse-wonder-full`) — top tier of Meta's Muse Wonder series, released **2026-10-12** by Meta Superintelligence Labs. Positioned as Meta's most capable model yet with Active Memory and Active Focus for long-running agents.
- **Provider / access:** Muse Code subscription only — no public API. Power Usage $50.00/month or Maximum Usage $200.00/month via dev.meta.ai Muse Code plans. Standard Muse Wonder is available via Meta Model API; Full is subscription-only.
- **Release / knowledge:** 2026-10-12 per research.meta.ai blog "Muse Wonder: A Frontier Model For Personal & Professional AI Agents". Knowledge cutoff not published.
- **IDs:** `muse-wonder-full-1.0` (dev.meta.ai); Artificial Analysis slug `muse-wonder-full`.
- **Context window:** **1,000,000** tokens — confirmed by dev.meta.ai models page, Artificial Analysis technical specs, and research.meta.ai blog.
- **Modalities:** input text, image, speech, video; output text only. Artificial Analysis: Supports text, image, speech, video input; outputs text.
- **Pricing:** No per-token price. Flat subscription $50/mo Power or $200/mo Maximum. Artificial Analysis records No publicly available API.
- **Architecture:** Proprietary; parameter count undisclosed. Weights not open.

### Raw benchmarks found

**Official comparison table from dev.meta.ai/models/muse-wonder, effort tier = max for all models:**

Personal Superintelligence Index Internal composite: Muse Wonder Full 59.1 vs Muse Wonder 54.3 vs Claude Fable 5.1 49.9 vs GPT-6 Astra 54.5 vs Claude Opus 5.5 55.2
Harvey LAB-AA Legal agent work: 13.1 vs 10.0 vs 6.4 vs 8.6 vs 4.2
Vals Finance Agent V2: 59.1 vs 56.6 vs 58.9 vs 53.5 vs 58.6
HealthBench Pro: 62.3 vs 60.5 vs 62.1 vs 65.3 vs 65.6
AutomationBench-AA E2E business workflows: 45.4 vs 39.1 vs 32.1 vs 41.6 vs 41.2
GDP.pdf Professional work: 33.2 vs 30.8 vs 27.6 vs 34.2 vs 30.6
JobBench Professional tool use: 75.3 vs 70.5 vs 73.1 vs 66.1 vs 75.4
OSWorld V2.1 Agentic computer use: 78.4 partial / 39.4 binary vs 72.6/34.3 vs 80.7/43.1 vs 75.8/34.3 vs 81.8/–
MemoryBench Remembering context: 85.5 vs 85.6 vs 79.0 vs 81.4 vs 81.5
Terminal-Bench 4.0-AA Agentic terminal coding: 57.1 vs 52.0 vs 52.0 vs 59.1 vs 59.6
DeepSWE 1.1 Long horizon coding: 79.0 vs 78.8 vs 67.4 vs 74.1 vs 74.2
SWE-Marathon Ultra-long horizon engineering: 57.5 xhigh vs 53.1 vs 45.6 vs 42.5 vs 46.3
ProgramBench From scratch programming: 59.0 vs 50.0 vs 55.5 vs 52.5 vs 70.5
Artificial Analysis Intelligence Index: 56 vs 52 vs 53 vs 53 vs 58

**Independent verification:**
- Artificial Analysis Intelligence Index: 56, #4 / 704 models. Verbosity 140M output tokens #156/226. Context window 1M. No public API, cost N/A. Reasoning model. Input modalities text/image/speech/video; output text.
- research.meta.ai blog 2026-10-12 confirms Active Memory, Active Focus, long-running agents, computer use, frontier coding, and positions Muse Wonder Full as subscription-only for Muse Code.

### Normalized scores (1–100)

- **Tool use: 88/100.** Best-of-five on Personal Superintelligence Index 59.1, AutomationBench-AA 45.4, Harvey LAB-AA 13.1, Vals Finance 59.1; MemoryBench 85.5; OSWorld 78.4 partial. Held at 88 due to Terminal-Bench 4.0-AA 57.1 trailing Opus 5.5 and internal composite nature of PS Index.
- **Reasoning: 89/100.** Artificial Analysis Intelligence Index 56 #4/704 independent, beats GPT-6 Astra 53 and Fable 5.1 53; top on Vals Finance. Held below 90 by ProgramBench 59.0 far behind Opus 5.5 70.5 and verbose output.
- **Context window: 85/100.** 1M tokens triple-confirmed; no published needle-retrieval measurement for Full, MemoryBench 85.5 reflects Active Memory not long-context retrieval.
- **Multimodal: 77/100.** Input text/image/speech/video, output text only. OSWorld 78.4 partial shows grounding; no MMMU/vision-understanding score published.
- **Coding: 89/100.** DeepSWE 1.1 79.0 #1 and SWE-Marathon 57.5 #1 beating Opus 5.5 74.2/46.3 and GPT-6 Astra 74.1/42.5; JobBench 75.3 #2; ProgramBench 59.0 #2 behind Opus 5.5.
- **Cost efficiency: 65/100.** No API, flat $50/mo or $200/mo subscription with usage caps; excellent flat-rate value for power users but zero API accessibility and no token metering.
- **Overall Score: 86/100.** Half-up mean of five quality dims: (88 + 89 + 85 + 77 + 89) / 5 = 85.6 → 86.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research — official sources first (research.meta.ai blog 2026-10-12, dev.meta.ai models/muse-wonder page with full 14-row benchmark table and Muse Code subscription pricing), then independent source (Artificial Analysis model page for Muse Wonder Full with Intelligence Index 56 #4/704, specs, no-API status). Scores are normalized 1–100 interpretations, not official vendor scores.
