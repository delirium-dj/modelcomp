# Grok 4.7 — findings by Qwen 3.7 Plus

- Source: SpaceXAI/Grok-4.7 (`opencode/grok-4.7`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXAI's September 2026 flagship for long-running coding and professional knowledge work, released as an incremental upgrade over Grok 4.6 (~210B params, SpaceX data in training). AA Intelligence Index 46 (xhigh, per AA) — though AA also states "+2 points over Grok 4.6" which is inconsistent with Grok 4.6's 61. AA-Briefcase 1657 Elo is a major gain (+111 over Grok 4.6), placing just behind Claude Opus 5 and Claude Fable 5.1. GDPval-AA 1715 Elo (+110 over 4.6). Coding Agent Index 56 with Grok Build (up +9 from 4.6). DeepSWE 71% with Grok Build (up from 65%). Terminal-Bench 4.0 38% (xAI) / 25.8% (AA) — improved +4.5 pts over 4.6. Terminal-Bench 2.1 73.4% (Vals) is strong. AA AutomationBench 65.6% is a major improvement over 4.6's 21.3%. AA-Omniscience Hallucination Rate 29.3% — improved from 4.6's 34.3%. High token usage: ~81K output tokens per Intelligence Index task (vs. 36K for 4.6, 27K for GPT-6 Astra). 500K context. Same pricing as 4.6.
- **Provider / access:** SpaceXAI (xAI). console.x.ai, Cursor, Grok Build, OpenRouter, Vercel, Cloudflare. No free tier.
- **Release / knowledge:** Released 2026-09-21; knowledge cutoff not precisely documented (post-Feb 2026 per Grok 4.6 lineage).
- **IDs:** `opencode/grok-4.7` (OpenCode/OpenRouter); `xai/grok-4.7` (xAI API).
- **Context window:** 500,000 tokens (500K) — unchanged from Grok 4.6. Half of Claude Fable 5 / GPT-5.6 Sol (1M).
- **Modalities:** Text and image in; text out. No audio or video.
- **Pricing (as of 2026-10-10):** $2 in / $6 out per 1M (cached $0.50); doubles above 200K prompt. Fast variant at 2× ($4/$12).

### Raw benchmarks found

Agent / tool use:

- AA-Briefcase: **1657 Elo** (AA/xAI — just behind Claude Opus 5 and Fable 5.1; +111 over Grok 4.6)
- GDPval-AA: **1715 Elo** (AA; normalized: 60.8%; +110 over Grok 4.6)
- Terminal-Bench 2.1 (Vals): **73.4%** (Vals AI — strong)
- AA AutomationBench: **65.6%** (AA — major improvement over Grok 4.6's 21.3%)
- AA Harvey LAB v1.0: **19.6%** (xAI — improved over Grok 4.6's 15.8%)
- CWE-bench v1: **68.0%** (Collinear — strong cybersecurity)
- GDP.pdf: **20.0%** (AA — improved +3 pts over 4.6)
- AA ITBench: **42.1%** (AA — moderate)
- Terminal-Bench 4.0 (xAI): **38.0%** (xAI — improved +4.5 pts over 4.6's ~33.5%)
- Terminal-Bench 4.0 (AA): **25.8%** (AA — lower than xAI's self-reported)

Coding:

- DeepSWE: **71.0%** (xAI with Grok Build; up from 65% for Grok 4.6; AA Coding Agent Index component)
- CursorBench 4.0: **46.3%** (Cursor evals — moderate; newer/harder version than 3.2)
- AA-SciCode: **57.4%** (AA — moderate)
- EEBench: **64.0%** (xAI — moderate)
- FrontierSWE v2: **29.5%** (Proximal — low)
- AA Coding Agent Index (Grok Build): **56** (AA — 4th among native harnesses; behind Fable 5.1, GPT-6 Astra, Opus 5)
- Bug Hunt Bench: **28.8 fixes** (Bug Hunt Bench — moderate)

Multimodal:

- Design Arena Website: **1237 Elo** (OpenRouter — moderate)
- Text and image input only; no audio/video

Reasoning / knowledge:

- AA Intelligence Index: **46** (AA xhigh; AA claims "+2 over Grok 4.6" but 4.6 scored 61 — inconsistent)
- AA-HLE: **43.1%** (AA — moderate)
- AA-LCR: **76.7%** (AA — strong long-context reasoning; but -3.7 p.p. regression from 4.6)
- HealthBench Professional: **56.7%** (xAI — moderate)
- CritPt: **17.7%** (AA — moderate)
- MLCR-AA: **15.0%** (AA — low)
- AA-Omniscience Index: **32.0%** (AA — improved from 4.6's 30)
- AA-Omniscience Accuracy: **47.4%** (AA — similar to 4.6's 48.2%)
- AA-Omniscience Hallucination Rate: **29.3%** (AA — improved from 4.6's 34.3%)

Long context / efficiency:

- Context window: **500K** tokens (unchanged from 4.6)
- Output tokens per Intelligence Index task: **~81K** (AA — vs. 36K for Grok 4.6 high, 27K for GPT-6 Astra max; 125–196% more)
- Output speed: **~188 tok/s** (AA — for long prompts)
- Time per Intelligence Index task: **~7.1 minutes** (AA)

### Normalized scores (1–100)

- **Tool use: 68/100.** AA-Briefcase 1657 Elo is excellent (just behind Opus 5, Fable 5.1). GDPval-AA 1715 Elo is strong. Terminal-Bench 2.1 73.4% (Vals) is strong. AA AutomationBench 65.6% is a major improvement. CWE-bench 68% is strong (cybersecurity). However, AA ITBench 42.1% is moderate. Terminal-Bench 4.0 25.8% (AA) is low. GDP.pdf 20% is low. The model excels at professional knowledge work and has improved substantially on automation tasks.
- **Reasoning: 49/100.** AA Intelligence Index 46 is modest — the headline score is the model's weakest dimension. AA-LCR 76.7% is strong (long-context reasoning). HealthBench Professional 56.7% is moderate. AA-HLE 43.1% is moderate. CritPt 17.7% is moderate. MLCR-AA 15% is low. The reasoning profile is the model's weakest suit — the 46 Intelligence Index trails all current frontier models.
- **Context window: 68/100.** 500K tokens — half of Claude Fable 5 / GPT-5.6 Sol (1M). AA-LCR 76.7% confirms effective long-context reasoning. Pricing doubles above 200K prompt. The context is functional but not competitive with models offering 1M+.
- **Multimodal: 50/100.** Text and image input only — no audio or video. Design Arena 1237 Elo is the only multimodal benchmark found. The model is not positioned for multimodal work.
- **Coding: 62/100.** Terminal-Bench 2.1 73.4% (Vals) is strong. DeepSWE 71% with Grok Build is strong (up from 65%). AA Coding Agent Index 56 (4th among native harnesses). EEBench 64% is moderate. However, CursorBench 4.0 46.3% is moderate. FrontierSWE v2 29.5% is low. AA-SciCode 57.4% is moderate. The coding profile is strong with first-party Grok Build harness but moderate on standardized benchmarks.
- **Cost efficiency: 48/100.** $2/$6 per 1M is premium-tier. Very high token usage (~81K output per task vs. 27K for GPT-6 Astra) means actual cost per completed task is much higher than list price suggests. At 125–196% more tokens than peers, the effective cost per task is among the highest. Pricing doubles above 200K. The model is not cost-effective for high-volume work.
- **Overall Score: 59.4/100.** Mean of five quality dims: (68 + 49 + 68 + 50 + 62) / 5 = 59.4. Grok 4.7 is SpaceXAI's knowledge-work specialist with improved agentic capabilities. Key strengths: AA-Briefcase 1657 Elo (just behind Opus 5, Fable 5.1), GDPval-AA 1715 Elo (strong), Terminal-Bench 2.1 73.4% (Vals), AA AutomationBench 65.6% (major improvement over 4.6's 21.3%), DeepSWE 71% with Grok Build, AA Coding Agent Index 56 (4th), AA-Omniscience Hallucination Rate 29.3% (improved from 4.6's 34.3%), CWE-bench 68% (cybersecurity). Key weaknesses: AA Intelligence Index 46 (modest — inconsistent with AA's "+2 over 4.6" claim), very high token usage (81K/task vs. 27K for GPT-6 Astra), 500K context (half of 1M rivals), AA-LCR regression (-3.7 p.p. from 4.6), no audio/video input, pricing doubles above 200K, CursorBench 4.0 46.3% (moderate), FrontierSWE v2 29.5% (low). Best fit for: professional knowledge work (AA-Briefcase, GDPval-AA leaders), coding with Grok Build harness (Coding Agent Index 56), cybersecurity tasks (CWE-bench 68%), teams already in xAI ecosystem. Not ideal for: cost-sensitive workloads (high token usage × premium pricing), tasks requiring strong general reasoning (Intelligence Index 46), long-context work exceeding 500K, multimodal pipelines (no audio/video), teams wanting latest-generation performance (superseded by GPT-6 Astra, Claude Fable 5.1).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Artificial Analysis, xAI official blog, BenchLM, Vals AI, Cursor evals, OpenRouter, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
