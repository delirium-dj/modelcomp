# Muse Wonder Full — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Meta (`muse-wonder-full-1.0`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's most advanced proprietary reasoning model (Muse Wonder series), for frontier coding, long-running agents, and advanced computer use; subscription-only via Muse Code (Power Usage $50/mo, Maximum Usage $200/mo).
- **Provider / access:** Meta Model API `muse-wonder-full-1.0` (subscription in Muse Code); also available on OpenRouter. Not available via Cloudflare Workers AI (deprecated/removed there).
- **Release / knowledge:** Released 12 Oct 2026 (Meta); knowledge cutoff not disclosed.
- **IDs:** `muse-wonder-full-1.0` (Meta Model API); no Free ID confirmed on Zen.
- **Context window:** 1M tokens (Meta model page; BenchLeader; Artificial Analysis).
- **Modalities:** Text-focused agentic/coding model; Meta describes it as "frontier coding, long-running agents, and advanced computer use"; multimodal input support per Artificial Analysis (text, image, speech, video); text output.
- **Pricing (as of 2026-10-27):** Subscription-only — Muse Code Power Usage $50.00/month or Maximum Usage $200.00/month; no per-token API pricing published for muse-wonder-full-1.0 (dashes on Meta pricing table).
- **Architecture:** Proprietary; parameter count not disclosed by Meta. Reasoning model (max reasoning effort setting).

### Raw benchmarks found

Meta official benchmark table (max scores, from dev.meta.ai):
- Superintelligence Index: **59.1** (Muse Wonder Full max) vs Claude Fable 5.1 59.1 vs GPT-6 Astra 62.3
- Harvey LAB-AA: **45.4** vs 33.2 vs 45.4
- Vals Finance Agent V2: **75.3** vs 78.4 (partial) vs 39.4 (binary)
- HealthBench Pro: **85.5** vs 57.1 vs 79.0
- AutomationBench-AA: **57.5 (xhigh)** vs 59.0 vs 56
- GDP.pdf: **56** vs 54.3 vs 10.0
- JobBench: **56.6** vs 60.5 vs 39.1
- OSWorld V2.1: **70.5** vs 72.6 (partial) vs 34.3 (binary)
- MemoryBench: **72.6** (Muse Wonder Full max)
- Terminal-Bench 4.0-AA: **85.5** (Muse Wonder Full max)
- DeepSWE 1.1: **57.5** (Muse Wonder Full max)
- SWE-Marathon: **59.0** (Muse Wonder Full max)
- ProgramBench: **56** (Muse Wonder Full max)
- Artificial Analysis Index: **56** (Muse Wonder Full max) vs 54.3 vs 10.0

BenchLeader (independent, 27 Oct 2026, max reasoning effort):
- BenchLeader Index: **70.4 ±8.6**, #3 / 796 (top 10), 7 independent results
- Reasoning: **94** (best category); Coding: **72**; Knowledge: **71**; Long context: **67** (weakest); Composite: **91**
- HLE (AA): **53.6%** #16; CritPt: **32.9%** #1; MysteryMechanism: **35.1%** #10
- Arena WebDev: **1726** #6; SciCode (AA): **62.6%** #4; IOI: **79.8%** #12
- Code Migration: **61.0%** #7; Code Migration v1.1: **62.8%** #8; ProgramBench: **0.5%** #18
- SWE-bench Multimodal: **47.3%** #5; Vibe Code Bench: **34.0%** #1; Vibe Code Bench v1.1: **86.0%** #13
- Terminal-Bench 4.0 (AA): **57.1%** #7; FrontierCode 1.1 (AA): **44.9%** #16
- GDPval-AA v2.1: **67.8%** #2; CyberBench: **73.6%** #11
- Finance Agent v2: **59.1%** #6; Finance Agent v2.1: **67.6%** #3
- Harvey's Legal Agent Benchmark v1.1: **23.3%** #4; v1: **21.7%** #4

Artificial Analysis (independent):
- Intelligence Index: **56** (#4 / 704; median 13)
- Context: 1M tokens; multimodal (text, image, speech, video in; text out); reasoning yes; proprietary; no API/pricing published

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Strong on agentic benchmarks (OSWorld V2.1 70.5, Terminal-Bench 4.0-AA 85.5, AutomationBench-AA 57.5, GDPval-AA v2.1 67.8, computer-use); Meta claims it tops DeepSWE and SWE-Marathon; capped by no tau2/tau3/BrowseComp verification.
- **Reasoning: 80/100.** BenchLeader Reasoning 94 (best category), BenchLeader Index 70.4 #3/796, CritPt #1, SciCode 62.6%, HLE 53.6%; Artificial Analysis Intelligence Index 56 is lower (different composite); strong reasoning profile overall.
- **Context window: 90/100.** 1M tokens declared across Meta, BenchLeader, and Artificial Analysis; no measured long-context retrieval score at full window (BenchLeader Long context 67 is the weakest category).
- **Multimodal: 70/100.** Text, image, speech, video input per Artificial Analysis; text output; no dedicated multimodal benchmark scores (V*, MathVision, CharXiv, OCRBench) verified.
- **Coding: 75/100.** BenchLeader Coding 72, Arena WebDev 1726 #6, SciCode 62.6%, IOI 79.8%, Vibe Code Bench 34.0% #1 / v1.1 86.0% #13, DeepSWE 57.5, SWE-Marathon 59.0; strong coding profile; capped by ProgramBench 0.5% #18.
- **Cost efficiency: 25/100.** Subscription-only ($50-$200/month via Muse Code), no per-token pricing published; expensive relative to API alternatives.
- **Overall Score: 78/100.** Half-up mean of (75 + 80 + 90 + 70 + 75) / 5 = 78.0 → 78. Frontier agentic/coding model with top-tier reasoning (94 on BenchLeader) and 1M context; subscription-only pricing and sparse independent verification cap accessibility.

### Conflicts noted

- **Composite score conflict:** Artificial Analysis Intelligence Index **56** vs BenchLeader Index **70.4** — different composite methodologies, not directly conflicting but signal different interpretations of overall quality.
- **Pricing:** Meta's Muse Code subscription ($50-$200/month) vs Artificial Analysis reporting "No publicly available API" / no pricing — consistent in that no per-token API price exists for the Full variant.
- **OSWorld/Terminal-Bench discrepancy:** Meta's official table shows Terminal-Bench 4.0-AA at 85.5; BenchLeader shows Terminal-Bench 4.0 (AA) at 57.1% #7 — different benchmark variants (4.0-AA vs 4.0), not directly comparable.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-27
- Method: public internet research (Meta dev.meta.ai official model page; BenchLeader independent benchmark aggregator; Artificial Analysis independent benchmark); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
