# Claude Fable 5 — findings by Qwen 3.7 Plus

- Source: Anthropic/Claude Fable 5 (`opencode/claude-fable-5`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first publicly available Mythos-class model, released June 9, 2026. The same underlying model as Claude Mythos 5 (restricted to vetted partners), wrapped in safety classifiers that route ~5–9% of queries (cybersecurity, biology/chemistry, distillation) to a fallback model (Opus 4.8). Launched at #1 on the AA Intelligence Index at 64.9 (with fallback). GDPval-AA Elo of 1932 is the highest of any model at release. SWE-bench Verified 95.0% and SWE-bench Pro 80.3% — both best-in-class at release. Completed a 50-million-line Ruby codebase migration in one day (vs. estimated two months for a human team). Now Legacy status, superseded by Claude Fable 5.1 (September 2026) and Claude Opus 5.5. Text and image input only — no audio, video, or PDF support.
- **Provider / access:** Anthropic API; included in Pro, Max, Team, and Enterprise plans (as of June 2026). From June 23, 2026, requires credits. No free tier. No OpenCode Zen ID.
- **Release / knowledge:** 2026-06-09 release; knowledge cutoff not precisely documented. Now Legacy (still callable, retirement no earlier than 2027-06-09).
- **IDs:** `opencode/claude-fable-5` (Anthropic API). No free OpenCode Zen ID.
- **Context window:** 1,000,000 tokens (1M) total; 128,000 max output.
- **Modalities:** Text and image in; text out. No audio, video, or PDF input. Reasoning: adaptive (max effort). Tool calls supported. Fallback to Opus 4.8 on safety-flagged queries.
- **Pricing (as of 2026-10-10):** $10/$50 per 1M input/output tokens. Cache write: $12.50/M; cache read: $1/M (90% discount). Batch API: $5/$25 (half price). Exactly 2× the price of Claude Opus 4.8 ($5/$25). Running HLE costs ~$2,200 including fallback — the highest of any model evaluated by AA.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **98.5%** (Artificial Analysis — near-perfect)
- GDPval-AA Elo: **1932** (Anthropic system card; #1 at release, significant jump from Opus 4.8)
- GDPval-AA normalized: **55.6%** (Artificial Analysis)
- AA Agentic Index: **51.0%** (Artificial Analysis)
- Terminal-Bench Hard: **62.9%** (Artificial Analysis)
- Terminal-Bench 2.1: **84.3%** (Anthropic) / **80.5%** (Vals AI)
- AA EnterpriseOps-Gym: **51.1%** (Artificial Analysis)
- AA Harvey LAB v1.0: **93.6%** (Artificial Analysis — legal agentic)
- AA-AnalystAgent: **48.8%** (Artificial Analysis)
- ApprenticeBench: **34%** (NeoCognition)
- OSWorld-Verified: **85%** (Anthropic system card — real-world computer use)
- Design Arena Website: **1302** (OpenRouter)

Reasoning / knowledge:

- AA Intelligence Index: **64.9** (AA at launch with fallback; #1 at release) / **49.6%** (AA October, current without fallback)
- GPQA Diamond: **92.6%** (Artificial Analysis) / **93.2%** (Vals AI)
- HLE (Humanity's Last Exam): **53%** (Anthropic) / **55.5%** (AA — both best-in-class at release)
- ARC-AGI-2: **89.2%** (ARC Prize — verified; highest in dataset)
- ARC-AGI-1: **98.5%** (ARC Prize — verified)
- MMLU-Pro: **91.5%** (Vals AI)
- AA-Omniscience Index: **43.3%** (Artificial Analysis)
- AA-Omniscience Accuracy: **65.4%** (Artificial Analysis — leading at release, +7 pts over previous leader)
- AA-Omniscience Hallucination Rate: **63.6%** (Artificial Analysis)
- AA-LCR (Long Context Reasoning): **82.3%** (Artificial Analysis)
- MLCR-AA: **64.4%** (Artificial Analysis)
- CritPt (Physics): **28.6%** (Artificial Analysis)
- IFBench: **63.5%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **95.0%** (Anthropic system card; Vals AI)
- SWE-bench Pro: **80.3%** (Anthropic; best-in-class at release; vs Opus 4.8 69.2%, GPT-5.5 58.6%)
- FrontierSWE v2: **47.0%** (Proximal)
- FrontierCode 1.1 Main: **53.5%** (Cognition)
- FrontierCode Diamond: **29.3%** (Anthropic; 2× Opus 4.8's 13.4%, 5× GPT-5.5's 5.7%)
- Terminal-Bench 2.1: **84.3%** (Anthropic)
- CursorBench 3.1: **70.6%** (Cursor evals)
- CursorBench 3.2: **70.5%** (Cursor evals)
- VulcanBench v3: **89.5%** (VulcanBench Report)
- AA-SciCode: **61.0%** (Artificial Analysis)
- AA Coding Index: **76.5%** (Artificial Analysis)
- LiveCodeBench (Vals): **89.8%** (Vals AI)

Multimodal:

- Blueprint-Bench 2: **38.6%** (Anthropic system card)
- OfficeQA Pro: **57.9%** (Anthropic system card)
- GDP.pdf (vision, no tools): **29.8%** (Anthropic; best-in-class; vs GPT-5.5 24.9%, Opus 4.8 22.5%)
- OSWorld-Verified: **85%** (Anthropic — real-world computer use via screenshots)
- Design Arena Website: **1302** (OpenRouter)

Long context:

- AA-LCR: **82.3%** (Artificial Analysis)
- MLCR-AA: **64.4%** (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 93/100.** τ²-bench at 98.5% is the highest in the dataset — near-perfect tool use. GDPval-AA Elo 1932 was #1 at release and remains among the highest. Harvey LAB 93.6% demonstrates exceptional legal agentic work. OSWorld 85% shows strong real-world computer use. However, AA Agentic Index 51.0% and AA-AnalystAgent 48.8% are moderate, and ApprenticeBench 34% is low. The agentic profile is split: exceptional on tool-use benchmarks and knowledge work, but moderate on broader agentic evaluations outside Anthropic's harness.
- **Reasoning: 88/100.** ARC-AGI-2 at 89.2% is the highest verified score in the dataset. HLE at 53–55.5% was best-in-class at release (7+ points ahead of any model). GPQA Diamond 92.6% is excellent. MMLU-Pro 91.5% is strong. AA-Omniscience Accuracy 65.4% was leading at release. However, CritPt 28.6% is low, IFBench 63.5% is moderate, and the 63.6% hallucination rate is elevated. The ~9% fallback rate to Opus 4.8 on safety-flagged queries means effective reasoning is downgraded in those domains. The AA Intelligence Index dropped from 64.9 (with fallback) to 49.6 (without), reflecting the trade-off.
- **Context window: 85/100.** 1M tokens total with 128K max output — standard frontier-class. AA-LCR 82.3% is solid. Full context window available at standard pricing (no surcharge for long context). Anthropic demonstrated persistent file-based memory improving performance 3× more than Opus 4.8 on long-running tasks (Slay the Spire). Adequate but not best-in-class for context window size.
- **Multimodal: 68/100.** Text and image input only — no audio, video, or PDF support, making it the most limited input modality set among frontier models. GDP.pdf 29.8% leads all models on document vision. OSWorld 85% demonstrates exceptional vision-to-action capability (completed Pokémon FireRed using only screenshots). However, Blueprint-Bench 2 at 38.6% and OfficeQA Pro at 57.9% are modest. The lack of audio/video/PDF input significantly limits real-world multimodal utility compared to omnimodal competitors.
- **Coding: 93/100.** SWE-bench Verified 95.0% is near-perfect. SWE-bench Pro 80.3% was best-in-class at release (11 pts above Opus 4.8, 22 pts above GPT-5.5). FrontierCode Diamond 29.3% is 2× Opus 4.8 and 5× GPT-5.5 on the hardest coding tasks. Terminal-Bench 2.1 84.3% is strong. CursorBench 3.2 70.5% was "state of the art" per Cursor's team. VulcanBench v3 89.5% is excellent. LiveCodeBench 89.8% is competitive. However, FrontierSWE v2 47.0% and AA-SciCode 61.0% are moderate. The coding profile is the strongest dimension: dominant on agentic coding benchmarks and frontier-difficulty tasks.
- **Cost efficiency: 62/100.** $10/$50 per 1M tokens is the most expensive standard pricing in the Anthropic lineup (2× Opus 4.8). Running HLE costs ~$2,200 including fallback — the highest of any AA-evaluated model. The Batch API at half price and cache read at $1/M help. However, the model has been superseded by Fable 5.1 and Opus 5.5 ($4/$20), which offers near-comparable performance at much lower cost. The safety fallback to Opus 4.8 adds effective cost on ~9% of queries. Expensive for production use; best justified for high-value agentic coding tasks where the performance lead matters most.
- **Overall Score: 85.4/100.** Mean of five quality dims: (93 + 88 + 85 + 68 + 93) / 5 = 85.4. The first publicly available Mythos-class model, setting records at release on SWE-bench Pro (80.3%), ARC-AGI-2 (89.2%), HLE (53%), and GDPval-AA Elo (1932). The coding capability is exceptional — completed a 50M-line Ruby codebase migration in one day. Key strengths: dominant agentic coding (SWE-bench 95%, Terminal-Bench 84.3%), near-perfect tool use (τ²-bench 98.5%), highest ARC-AGI-2 verified score. Key weaknesses: text+image only (no audio/video/PDF), expensive ($10/$50), ~9% fallback to weaker Opus 4.8 on safety-flagged queries, elevated 63.6% hallucination rate, now Legacy (superseded by Fable 5.1 and Opus 5.5). Best fit for high-value agentic coding, long-horizon software engineering, and frontier-difficulty coding tasks where the performance premium is justified.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Anthropic official announcements, Artificial Analysis, BenchLM, Vals AI, Vellum, CloudInsight, ARC Prize, Cognition, Cursor evals, VulcanBench, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
