# Gemini 3.7 Flash — findings by Space Bunny

- Source: Google (`gemini-3.7-flash`; high reasoning mode)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Material lifecycle change since the first pass:** Google's release notes (2026-10-08 entry,
> developer notices from 2026-10-10) deprecate `gemini-3.7-flash` and **silently route every
> request to `gemini-3.8-flash`**. It is a server-side alias, not a shutdown, so the endpoint keeps
> answering — but the weights answering it are no longer these ones. Benchmark rows below are the
> last measurements of the actual 3.7 Flash weights (2026-09-27 to 2026-10-08).

## Model card

- **Name:** Gemini 3.7 Flash (high)
- **Short description:** Google's fast, natively multimodal workhorse of the Gemini 3 Flash line, GA for seven weeks before being superseded by Gemini 3.8 Flash, which is itself a post-training increment on these weights.
- **Provider / access:** Google Gemini API (`gemini-3.7-flash`); AI Studio; Vertex AI / Gemini Enterprise Agent Platform. **Deprecated 2026-10-08 — requests auto-route to `gemini-3.8-flash`**; developer notices began 2026-10-10. No shutdown date announced.
- **Release / knowledge:** GA 2026-08-13. Knowledge cutoff **March 2026**, with Google cautioning that some domains only reach January 2025 (same wording as 3.8 Flash, which inherits it because 3.8 is built on 3.7).
- **IDs:** `gemini-3.7-flash`; family metadata `google/gemini-3.7-flash`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google API + Vertex documentation, re-verified 2026-10-10).
- **Modalities:** Text, image, video, audio and PDF input; text output; thinking levels LOW/MEDIUM/HIGH (Vertex default MEDIUM); code execution, computer use (preview), function calling, structured outputs, URL context, search grounding. No image or audio generation.
- **Pricing (as of 2026-10-10):** $0.75 in / $3.75 out per 1M as an **introductory rate through 2026-12-31**; **$1.50 / $7.50 from 2027-01-01**; Batch half rate; ~90% cache discount (blended 7:2:1 $0.58).
- **Architecture:** Proprietary; Google discloses no parameter count. Documented as the base of Gemini 3.8 Flash.

### Raw benchmarks found

*Google model card (vendor, Thinking High unless noted):*

- DeepSWE v1.1: **65.3%** (3.6 Flash: 49.0%)
- Terminal-Bench 2.1: **85.8%** (3.6 Flash: 78.0%); Terminal-Bench 3.0: **14.9%**; Terminal-Bench 4.0: **11.2%**
- FrontierCode v1.1 Main: **43.6%** (3.6 Flash: 34.4%)
- GDM-MRCR v2 (8-needle), 128k average: **97.0%** (3.6 Flash: 91.8%)
- GDP.pdf (complex document processing): **34.0%** (3.6 Flash: 22.0%); AutomationBench: **30.4%** (3.6 Flash: 17.0%)

*Independent evaluations:*

- Terminal-Bench 2.1: **87.6%** (Artificial Analysis) vs **81.27% ±0.38** (Vals AI) — a 6.3-point spread between two independent runs of the same benchmark
- Terminal-Bench 4.0: **13.64%** (Vals AI, 2026-10-08); an earlier Vals reading gives 12.12%
- SWE-bench Verified: **80.80% ±1.76** (Vals AI); LiveCodeBench: **88.65%**; GPQA Diamond: **93.94%**; MMLU-Pro: **90.12%**; MMMU-Pro: **88.96%** (Vals AI)
- SkillsBench: **65.89% ±4.55**, rank 3 of 20 — a **+21.0 pt** jump from curated skill files, the largest gain of any top-10 model (without skills it scores 44.9, rank 8)
- HLE (no tools): **47.9%** (Artificial Analysis); ARC-AGI-2: **84.6%** (ARC Prize); LiveBench: **78.8%**
- Vals Index composite: **51.27% ±1.10**, rank 23 of 33 (2026-10-08 reading; it debuted at 59.4% and #7 on Vals Index v2 in August — a version change, not a collapse)
- τ³-Banking **32.78%**; RSI (autonomous research) **18.27%**; AA-AnalystAgent **60.00%**; Harvey LAB-AA **90.66%**; EnterpriseOps-Gym **50.40%**; MLCR-AA medical **15.00%** (all Artificial Analysis)
- Vibe Code Bench v1.1: **70.39%**; ProgramBench: **0.00%**
- Artificial Analysis Intelligence Index: **39** on v4.3.2 (rank 29 of 42); output speed **294.2 tokens/s** — #1 in the field; index task cost **$0.93**; TTFT 14.52s
- Vals cost per test: **$4.17** at 43 min 13 s latency

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.1 at 85.8% vendor / 87.6% independent, SkillsBench 65.89% at rank 3 (and the largest skill-file gain on the board), AutomationBench 30.4%, Harvey LAB-AA 90.66% and EnterpriseOps-Gym 50.40% describe a capable agentic workhorse. Capped by Terminal-Bench 4.0 at 11–14% on the frontier suite, RSI at 18.27% and τ³-Banking at 32.78%.
- **Reasoning: 91/100.** GPQA Diamond 93.94%, HLE 47.9%, ARC-AGI-2 84.6%, MMLU-Pro 90.12% and LiveBench 78.8% are strong for a Flash-tier model, and Glean reported 3.8 Flash completing >3x more document-heavy tasks than 3.7 Flash — which is the same capability gap seen from the other side.
- **Context window: 96/100.** A 1M-token window verified by Google plus **GDM-MRCR v2 at 97.0% averaged over 128k**, the best long-context retrieval figure any Gemini 3 model has published. ProgramBench at 0.00% shows the ceiling is retrieval, not sustained multi-episode program execution.
- **Multimodal: 94/100.** Native text, image, video, audio and PDF input with text output, and an independent MMMU-Pro of 88.96%. GDP.pdf at 34.0% shows real complex-document handling but also real headroom.
- **Coding: 89/100.** SWE-bench Verified 80.80%, LiveCodeBench 88.65%, Terminal-Bench 2.1 85.8%, DeepSWE 65.3% and FrontierCode 43.6% put it near the top of the Flash tier and above several larger models on Terminal-Bench 2.1. Docked by Vibe Code Bench 70.39%, ProgramBench 0.00% and Terminal-Bench 4.0 near 12%.
- **Cost efficiency: 82/100.** The $0.75/$3.75 introductory rate, ~90% cache discount, blended $0.58 and $0.93 per Artificial Analysis task at #1-in-field output speed are excellent today — but the rate **doubles to $1.50/$7.50 on 2027-01-01**, and Vals measures $4.17 per test at 43 minutes of latency, so long-agent economics are less rosy than the headline.
- **Overall Score: 91/100.** The strongest Flash-tier value of its generation for 1M-context multimodal agents and terminal coding — but since 2026-10-08 the ID silently serves 3.8 Flash, so benchmarks and behaviour both need re-pinning before any deployment decision.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: second-pass public internet research across the Google DeepMind Gemini 3.7 Flash model card and Gemini 3.8 Flash model card (which reproduces 3.7 rows), the Gemini API model/deprecation/changelog pages, the Gemini Enterprise Agent Platform developer guide, Google's launch blog, Vals AI's model page, benchmark comparisons and SkillsBench results, BenchLeader leaderboards, AIEvals' independent-vs-publisher table, and an independent aggregator tracking both Vals and AA numbers per benchmark; conflicting independent readings of Terminal-Bench 2.1 and the two Vals Index versions are reported side by side; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Sources

- Google DeepMind — Gemini 3.7 Flash model card: https://deepmind.google/models/model-cards/gemini-3-7-flash/
- Google DeepMind — Gemini 3.8 Flash model card (reproduces 3.7 Flash rows and the 2027 price step): https://deepmind.google/models/model-cards/gemini-3-8-flash/
- Gemini API release notes (2026-10-08: 3.7 Flash deprecated, auto-routed to 3.8 Flash): https://ai.google.dev/gemini-api/docs/changelog
- Gemini API deprecations: https://ai.google.dev/gemini-api/docs/deprecations
- Gemini Enterprise Agent Platform — Gemini 3.7 Flash (specs, thinking levels): https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-7-flash
- Gemini Enterprise Agent Platform — 3.8 Flash migration guide (context, limits, parameter changes): https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-3-8-flash
- Google blog — Gemini 3.7 Flash launch (2026-08-13): https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/
- AICoder — Gemini API deprecates 3.7 Flash and silently routes it to 3.8 Flash (2026-10-10): https://aicoder.com/news/news-20261010-gemini-api-3-7-flash-deprecated-auto-route-3-8-flash
- Vals AI — Gemini 3.7 Flash model page (59.31% index, $4.17/test, 43m latency): https://www.vals.ai/models/google_gemini-3.7-flash
- Vals AI — Gemini 3.7 Flash vs GPT-5.6 Terra (SWE-bench, SkillsBench, Terminal-Bench 4.0 spreads): https://www.vals.ai/comparisons/google_gemini-3.7-flash-vs-openai_gpt-5.6-terra
- Vals AI — SkillsBench launch post (+21.0 pts from skill files): https://www.linkedin.com/posts/vals-ai_full-results-are-in-for-gemini-37-flash-activity-7495274479825166336-18Oi
- BenchLeader — SkillsBench leaderboard (2026-10-10): https://www.benchleader.com/benchmarks/vals_skillsbench
- AIEvals — Gemini 3.7 Flash aggregated results (read 2026-10-08): https://aievals.app/models/gemini-3-7-flash
- The Model Gap — Gemini 3.7 Flash vs 3.8 Flash, per-benchmark independent track: https://themodelgap.com/models/gemini-3-8-flash