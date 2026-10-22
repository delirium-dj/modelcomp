# Claude Sonnet 3.7 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude 3.7 Sonnet (`anthropic/claude-3.7-sonnet`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Re-checked against the official Anthropic launch post (https://www.anthropic.com/news/claude-3-7-sonnet), Artificial Analysis (https://artificialanalysis.ai/models/claude-3-7-sonnet), RankedAGI (https://rankedagi.com/models/claude-3.7-sonnet), LLM Stats (https://llm-stats.com/models/claude-3-7-sonnet-20250219) and Serenities AI (https://serenitiesai.com/benchmark/models/claude-3-7-sonnet). All five dimensions held at their prior values; no dimension change was justified. Conflicting same-name figures surfaced for GPQA Diamond, SWE-bench Verified and the Intelligence Index — all three conflicts are listed below rather than silently averaged.

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's Feb-2025 model that introduced hybrid reasoning — a choice between fast answers and extended step-by-step thinking. Notable improvements in coding (front-end and full-stack) and agentic workflows; a generation behind the current Claude 4.x/5.x line and now API-only and marked deprecated by Artificial Analysis (https://artificialanalysis.ai/models/claude-3-7-sonnet).
- **Provider / access:** Anthropic API (`claude-3-7-sonnet`), Bedrock, Vertex AI (Google), OpenRouter. API-only; not open weights. LLM Stats lists three providers (Anthropic, Bedrock, Google) at $3/$15 (https://llm-stats.com/models/claude-3-7-sonnet-20250219).
- **Release / knowledge:** Released 2025-02-24 (https://www.anthropic.com/news/claude-3-7-sonnet); knowledge cutoff 2024-10 (AA: Oct 1, 2024; RankedAGI: 2024-10-01).
- **IDs:** `claude-3.7-sonnet` (Anthropic/OpenRouter); `claude-3-7-sonnet-20250219` (RankedAGI, LLM Stats). OpenCode Zen tracks it as `opencode/claude-sonnet-3.7`. No Zen Free ID.
- **Context window:** 200,000 tokens in / 128,000 max output (LLM Stats: 200.0K/128.0K, https://llm-stats.com/models/claude-3-7-sonnet-20250219).
- **Modalities:** text, image and file/PDF in; text out. Hybrid reasoning (standard + extended thinking), tool use, computer use.
- **Pricing (as of 2026-10-11):** **$3 / $15 per 1M** in/out, unchanged (https://www.anthropic.com/news/claude-3-7-sonnet and https://llm-stats.com/models/claude-3-7-sonnet-20250219).
- **Architecture:** proprietary decoder-only. Not released.

### Raw benchmarks found

Agent / tool use:

- Anthropic reports state-of-the-art TAU-bench at launch (airline/retail, planning-tool scaffold) without a single headline number (https://www.anthropic.com/news/claude-3-7-sonnet).
- GDPval-AA Elo: **1047** (RankedAGI, sourced from Artificial Analysis); prior pass had GDPval-AA **1049** — effectively the same figure (https://rankedagi.com/models/claude-3.7-sonnet).
- RankedAGI Agentic: **45.7%**; RankedAGI Overall: **47.8%** (https://rankedagi.com/models/claude-3.7-sonnet).
- Chatbot Arena (LMSYS) Text ELO **1365** (RankedAGI) / **1340** (Serenities AI) — a ~25-point spread across arena aggregators (https://rankedagi.com/models/claude-3.7-sonnet, https://serenitiesai.com/benchmark/models/claude-3-7-sonnet).
- Prior-pass harnesses (frozen history): Tau2-Bench Telecom **54.7%**, GAIA **56.4%**, The Agent Company **52.7%** (100th pct), Terminal-Bench Hard **21.2%**.

Reasoning / knowledge:

- GPQA Diamond — **conflict:** **68.0%** (RankedAGI, https://rankedagi.com/models/claude-3.7-sonnet) vs **84.8%** (Serenities AI, https://serenitiesai.com/benchmark/models/claude-3-7-sonnet) vs **75.3–77.2%** (prior pass). The 84.8% figure looks like the extended-thinking best-case; 68% likely standard mode. Both retained.
- MMLU-Pro: **79.0%** (Serenities AI) vs prior **83.7%** — likely thinking vs non-thinking runs (https://serenitiesai.com/benchmark/models/claude-3-7-sonnet).
- HLE: **8.0%** (RankedAGI) vs prior **10.3%** (https://rankedagi.com/models/claude-3.7-sonnet).
- Artificial Analysis Intelligence Index — **conflict:** current AA page shows the "Non-reasoning" variant at **15 (estimated)** and flags the model deprecated (https://artificialanalysis.ai/models/claude-3-7-sonnet), versus the prior pass's **27.6** for the reasoning/thinking configuration. Different variants, so not directly comparable.
- Math: MATH **96.2%**, AIME 2025 **52.7%**, GSM8K **95.0%** (Serenities AI); AIME 2024 **23.3%**, RankedAGI Math **47.7%** (RankedAGI).
- Instruction/knowledge: IFEval **86.0%**, TruthfulQA **85.5%**, MT-Bench **9.2** (Serenities AI).

Coding:

- SWE-bench Verified — **conflict/multi-number:** **63.7%** vanilla pass@1 and **70.3%** with high-compute scaffold on n=489 internal subset (Anthropic official, https://www.anthropic.com/news/claude-3-7-sonnet); **70.3%** (RankedAGI, attributed to swebench.com); **62.3%** (Serenities AI). Prior pass cited **52.2%** bash-only. The 62–70% cluster supersedes the old bash-only figure for headline use.
- Aider Polyglot: **60.4%** (RankedAGI) vs prior **64.9%** (https://rankedagi.com/models/claude-3.7-sonnet).
- LiveCodeBench: **52.0%** (Serenities AI) vs prior **60.4%** (https://serenitiesai.com/benchmark/models/claude-3-7-sonnet).
- SciCode: **40.3%** (prior pass, still the only figure found).
- SvelteBench (old v1) **56.7%**; LiveBench Coding (old) **67.5%**, LiveBench Coding 25.4 **32.4%**; HumanEval+ **86.0%** (RankedAGI / Serenities AI).
- SWE-bench Pro: **no verified public score found**.

Long context:

- 200K-token window documented (200K in / 128K out; https://llm-stats.com/models/claude-3-7-sonnet-20250219).
- RULER long-context retrieval: **92.0%** (Serenities AI, https://serenitiesai.com/benchmark/models/claude-3-7-sonnet) — a new retrieval figure; the prior pass reported none.
- MRCR / GraphWalks: **no verified public score found**; AA-LCR **62.3%** remains the only AA long-context number from the prior pass.

Multimodal:

- MMMU: **71.8%** (RankedAGI, https://rankedagi.com/models/claude-3.7-sonnet); MathVista **72.0%** (Serenities AI, https://serenitiesai.com/benchmark/models/claude-3-7-sonnet).
- Input modalities text + image confirmed (AA), plus file/PDF (prior curated).

### Normalized scores (1–100)

- **Tool use: 60/100.** GDPval-AA holds at ~1047–1049, RankedAGI Agentic 45.7% and Overall 47.8% land in the mid band (methodology: GDPval 900–1200 → 50–70); official TAU-bench SOTA and prior Tau2 54.7%/GAIA 56.4% keep it mid-tier, well below current frontier. Value held from prior pass (https://rankedagi.com/models/claude-3.7-sonnet).
- **Reasoning: 72/100.** GPQA Diamond 68–84.8% (conflicting), MMLU-Pro 79–83.7% and MATH 96.2% support the low-70s; HLE 8–10.3% and an Intelligence Index of 15 (non-reasoning; 27.6 thinking, prior) cap the band. Value held (https://serenitiesai.com/benchmark/models/claude-3-7-sonnet, https://rankedagi.com/models/claude-3.7-sonnet).
- **Context window: 70/100.** 200K tokens = 70 on the methodology's 200K–500K scale (200K = 70). Value held (https://llm-stats.com/models/claude-3-7-sonnet-20250219).
- **Multimodal: 75/100.** Text, image **and PDF** input with text output sits in the +PDF band (75–90); MMMU 71.8% / MathVista 72.0% are solid but not frontier. Value held (https://rankedagi.com/models/claude-3.7-sonnet).
- **Coding: 70/100.** SWE-bench Verified now consistently 62.3–70.3% across Anthropic, RankedAGI and Serenities; SciCode 40.3% (<40% midline), LiveCodeBench 52–60.4% and Aider Polyglot 60.4–64.9% keep it mid-tier. The corrected SWE-bench cluster supports the prior 70 (https://www.anthropic.com/news/claude-3-7-sonnet, https://rankedagi.com/models/claude-3.7-sonnet).
- **Cost efficiency: 60/100.** $3 / $15 per 1M matches the methodology's ~$3/$15 reference point. Value held (https://llm-stats.com/models/claude-3-7-sonnet-20250219).
- **Overall Score: 69/100.** (60 + 72 + 70 + 75 + 70) / 5 = 69.4 → 69. Best fit: legacy/PDF-document workflows and cheaper fallback agentic use; superseded for new work by Claude 4.x/5.x, and Artificial Analysis now flags the model deprecated.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research — official Anthropic launch post (SWE-bench Verified 63.7%/70.3%, TAU-bench SOTA, $3/$15, 200K/128K, 2025-02-24); Artificial Analysis Claude 3.7 Sonnet non-reasoning page (Intelligence Index 15 estimated, deprecated, 200K, $3/$15); RankedAGI (SWE-bench 70.3%, GPQA 68.0%, HLE 8.0%, Aider 60.4%, MMMU 71.8%, GDPval-AA 1047, Agentic 45.7%, Overall 47.8%); LLM Stats (200K/128K, 3 providers, pricing); Serenities AI (GPQA 84.8%, SWE-bench 62.3%, MMLU-Pro 79.0%, MATH 96.2%, AIME 2025 52.7%, RULER 92.0%, MMMU/MathVista, Arena ELO 1340). Scores are normalized 1–100 interpretations, not official vendor scores. Conflicting figures retained and attributed per source.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.
