# Muse Wonder — findings by MiMo 2.6 Flash

- Source: Meta/Muse Wonder (`muse-wonder-1.0`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder (`muse-wonder-1.0`) — Meta Superintelligence Labs' first frontier model; the subscription-only sibling `muse-wonder-full-1.0` (Muse Wonder Full) is a separate SKU, not a tier of this one (see Short description).
- **Short description:** Long-running personal/professional agent model from Meta with Active Memory and Active Focus; aimed at multi-hour coding, legal/finance/health agent work and computer use. Flagged: Muse Wonder Full is a distinct higher-scoring variant (AA Index 56 vs 52, fewer input tokens per task) sold only through Muse Code — research belongs in its own folder if tracked.
- **Provider / access:** Meta Model API (OpenAI-compatible — OpenAI Responses, OpenAI Chat Completions and Anthropic Messages formats), Muse Code, OpenRouter `meta/muse-wonder`, OpenCode Console `opencode/muse-wonder-1.0`. Chat Completions-compatible; status is "Preview" on the Meta API.
- **Release / knowledge:** 2026-10-12 (Meta model card, `research.meta.ai/static/muse-wonder-model-card`); knowledge cutoff not published.
- **IDs:** `muse-wonder-1.0` (Meta Model API), `meta/muse-wonder` (OpenRouter), `opencode/muse-wonder-1.0` (OpenCode). Muse Wonder Full is `muse-wonder-full-1.0` (subscription only). No Free/$0 route exists.
- **Context window:** 1,048,576 tokens total (model card "Context Length 1M"; OpenRouter and models.dev both 1,048,576); 131,072 max output (models.dev, Vals AI run config).
- **Modalities:** text, image, video, audio and PDF in; text out; reasoning yes (efforts `minimal`/`low`/`medium`/`high`/`xhigh`/`max`); tool calls (parallel function calling), structured/JSON output, search grounding, computer use.
- **Pricing (as of 2026-10-26):** $4.00 in / $20.00 out per 1M, $0.20 cached input, web-search tool $2.50 per 1,000 queries, no long-context premium (Meta dev site, OpenRouter, eesel, TechCrunch — all agree). Paid only; reported rate limit 3,000 RPM / 4M TPM (eesel); not available via EU in-region routing (OpenRouter); EU availability of the API is limited at launch (Handy AI, YouTube reviews).
- **Architecture:** proprietary — weights private (Vals AI), no parameter count or license disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0-AA (Meta run, max effort): **52.0%** (Muse Wonder), 57.1% (Full), 59.6% (Claude Opus 5.5) (Meta launch chart, transcribed by eesel AI; Full's 57.1 independently repeated by a 2026-10-13 video review)
- Terminal-Bench 4.0 (Vals AI own run, max effort): **49.49%** (9/54) (vals.ai/models/meta_muse-wonder)
- AutomationBench-AA: **39.1%** (Wonder), 45.4% (Full), 41.2% (Opus 5.5) (Meta chart via eesel/miraflow) — **conflict:** Artificial Analysis' own launch post cites AutomationBench-AA **71%** for the Wonder release; different harness/effort, unreconciled, both reported here.
- OSWorld V2.1 (partial credit, Meta chart): **72.6%** (Wonder), 78.4% (Full, also cited by Onyx), 81.8% (Opus 5.5)
- CyberBench v1.1 (Vals AI): **80.36%** (±5.13, **1/47** — top model on that leaderboard)
- Finance Agent v2.1 (Vals AI): **65.55%** (6/30); Vals Finance Index **61.23%** (6/30)
- GDPval-AA: no verified public score found
- Tau2/Tau3-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3/v4.3.2 (max effort): **52** — independent AA run (#9 of 216 tracked models per DevX); Muse Wonder Full 56, Opus 5.5 58, Sonnet 5.5 56, Fable 5.1 53, GPT-6 Astra 53, Muse Spark 1.3 (max) 48
- CritPt: **33%** (**#1** on the leaderboard) and SciCode **63%** (**#3**) — Artificial Analysis launch write-up, attributed to the Muse Wonder release (model not disambiguated between Wonder and Full)
- Vals Index (Vals AI composite, v2.2): **64.88%** (±1.07, **6/26**); Vals Science Index **39.12%** (10/22)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- Omniscience / hallucination rate: no verified public score found
- BenchLM overall/BenchAlign: no Muse Wonder entry yet (BenchLM only mirrors the Vals Index leaderboard: Wonder 64.88 = #6, Full 66.79 = #4, snapshot 2026-10-19)

Coding:

- DeepSWE 1.1 (Meta/third-party run): **~79%** (Wonder 78.8 / Full 79.0) — above Claude Opus 5.5 (74.2) and GPT-6 Astra (74.1) (Meta chart + FelloAI + Onyx + MindStudio agree)
- SWE-Marathon (ultra-long-horizon): **53.1%** (Wonder), 57.5% (Full), 46.3% (Opus 5.5), 42.5% (Astra) (Meta chart; eesel + FelloAI + video review agree)
- Vibe Code Bench v1.1 (Vals AI): **83.09%** (±2.49, 19/118); Vibe Code Bench 1-100: 26.55% (6/26)
- Code Migration v1.1 (Vals AI): **72.36%** (5/28)
- SWE-bench Multimodal (Vals AI): **45.63%** (7/20)
- SWE-bench Verified / SWE-Pro: no verified public score found (Meta no longer publishes SWE-bench for its newest models — Onyx, 2026-10-13)
- LiveCodeBench: no verified public score found

Long context:

- 1M window declared; **no long-context retrieval figure (MRCR / RULER / GraphWalks) reported** for Muse Wonder. Meta's MemoryBench (64K–100K-token conversational recall, internal): **85.6%** (Wonder), 85.5% (Full) (FelloAI transcription of Meta's chart).

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 4.0 at 49.5–52 and AutomationBench-AA at 39.1 (or 71 on AA's harness — conflict) sit in the "mid" band of the methodology, but CyberBench #1 (80.36), OSWorld V2.1 72.6, Finance Agent 65.55 (6/30) and Vals Index #6 lift it; capped by missing GDPval/Tau figures and below-frontier terminal work.
- **Reasoning: 84/100.** AA Intelligence Index 52 (independent, #9/216) interpolates to ~82 on the methodology's index scale, and CritPt #1 (33%) plus Vals Science 39.12 keep it there; capped because GPQA/HLE/LCR are unpublished and Vals Science ranks only 10/22.
- **Context window: 95/100.** 1,048,576 tokens clears the ≥1M tier (95–100); held at 95 because no ≥512K retrieval measurement (MRCR/RULER) exists to justify 100.
- **Multimodal: 90/100.** Text, image, video, audio and PDF input with text output — audio input puts it in the 90–100 band; text-only output stops it short of the top.
- **Coding: 88/100.** DeepSWE ~79% and SWE-Marathon 53.1 both beat Opus 5.5 and GPT-6 Astra, SciCode 63% is #3, Vibe Code Bench v1.1 83.09; capped by no SWE-bench Verified/LiveCodeBench and Vibe rank 19/118.
- **Cost efficiency: 54/100.** $4/$20 is the Opus 5.5 rate card (methodology maps $3/$15 ≈ 60, $10/$50 ≈ 30), and AA measures $4.52 per Intelligence Index task on 7.69M input tokens — cheaper than Fable 5.1/Opus 5.5 per task, dearer than GPT-6.1 Sol (52 index points at ~$0.72/task).
- **Overall Score: 87/100.** (76 + 84 + 95 + 90 + 88) / 5 = 86.6 → 87 — best fit: frontier-class long-horizon coding/legal/finance agents that need Active Memory, where its ~$4.52/task is acceptable; not the pick for cheap high-volume inference or verified SWE-bench pipelines.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-26
- Method: public internet research — official Meta sources first (model card, dev.meta.ai, research blog), then independent benchmark/review sources (Artificial Analysis, Vals AI, BenchLM, FelloAI, miraflow, eesel, TechCrunch, Onyx, MindStudio, OpenRouter/models.dev); conflicting harness numbers are reported side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
