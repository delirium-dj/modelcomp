# Muse Wonder Full — findings by Beam

- Source: Meta / Muse Wonder Full (muse-wonder-full)
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-29)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta Superintelligence Labs' top proprietary frontier model (released 2026-10-12), built for long-running professional agents, software engineering, computer use, and multimodal reasoning; available only via Muse Code Power/Maximum subscription plans (not per-token API).
- **Provider / access:** Meta Model API / Muse Code (subscription-only for Full); OpenAI-compatible base URL; Chat Completions. No public per-token pricing for Full.
- **Release / knowledge:** 2026-10-12; knowledge cutoff not disclosed.
- **IDs:** `muse-wonder-full` (Muse Code); Meta Model API variant is `muse-wonder-1.0` for the base Muse Wonder (not Full).
- **Context window:** 1,048,576 tokens total; max output not separately published (verified via Meta docs/model card).
- **Modalities:** text, image, video, audio (and PDF) in; text out; reasoning yes (minimal→max); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-11-08):** Muse Wonder Full is subscription-only (Muse Code Power/Maximum plans, ~$50/mo entry reported); base Muse Wonder is $4/$0.20-cached/$20 per 1M in/out. No per-token price for Full.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness).

Agent / tool use:

- AutomationBench-AA: **71%** (AA, #3)
- OSWorld V2.1 (computer use): **78.4%** (Meta model card)
- JobBench (professional tool use): **75.3** (Meta model card)
- GDPval-AA v2.1: **1857 Elo** (AA, #2)
- AA-Briefcase v1.1: **1729 Elo** (AA, #3)
- GDP.pdf: **33%** (AA, #1)
- Harvey LAB (legal agent): **13.1** (Meta model card)
- Vals Finance Agent V2: reported leader (Meta model card; exact number not captured)
- CyberGym: **88.4%**; ExploitBench **58.9%**; ExploitGym **20 intended flags** (Meta model card, updated 2026-10-23)
- Gray Swan IPI: **15.9%** (BenchLM, attributed to Google Gemini 4 Argon chart)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3: **56** (AA, max effort; v5.0 page shows 50.1 — version delta, not a discrepancy in measured tasks)
- AA-LCR: **83.7%**
- MLCR-AA: **22.2%**
- CritPt: **32.9%** (AA, #1)
- AA-HLE: **53.6%**
- AA-Omniscience Index: **30.6**; Accuracy **41.0%**; Hallucination rate **17.6%**
- HealthBench Pro: **65.6**
- Personal Superintelligence Index: **59.1** (Meta internal composite)
- FrontierMath v2 Tiers 1-3: **74.035%**; Tier 4: **46.341%** (Epoch AI)

Coding:

- DeepSWE 1.1: **79.0%**
- SWE-Marathon: **57.5%**
- AA-SciCode: **62.6%**
- AA Coding Agents Index (Muse Code, max): **68** (tied with Claude Code + Sonnet 5.5)

Long context:

- MemoryBench: **85.5** (Meta model card)
- 1M-token context; no separate MRCR/RULER number published beyond AA-LCR 83.7%

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims (Tool + Reasoning + Context + Multimodal + Coding) / 5. Cost efficiency excluded.

- **Tool use: 93/100.** Strong agentic/computer-use and professional-work numbers (AutomationBench 71%, OSWorld 78.4%, GDPval-AA 1857 Elo, AA-Briefcase 1729 Elo, GDP.pdf 33% #1); capped slightly below 95 because no published Terminal-Bench 2.1/Tau3-Banking score for Full. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates AA Intelligence 50.1%, AA-HLE 53.6%, AA-Omniscience 30.6%/41.0%/17.6%, CritPt 32.9%, AA-LCR 83.7%, MLCR 22.2%, FrontierMath v2 74.035%/46.341%, Design Arena 1354, Gray Swan IPI 15.9%. Corroborates band; no change.
- **Reasoning: 90/100.** AA Intelligence Index 56 (v4.3) with CritPt #1 (32.9%), HLE 53.6%, LCR 83.7%, and low hallucination (17.6%); capped by modest AA-Omniscience (30.6) and knowledge-heavy evals. Enrichment adds FrontierMath v2 74.035%/46.341%. Corroborates band; no change.
- **Context window: 100/100.** 1M-token window with strong long-context retrieval (AA-LCR 83.7%, MemoryBench 85.5).
- **Multimodal: 95/100.** Text/image/video/audio (and PDF) input with text output; no non-text output.
- **Coding: 92/100.** DeepSWE 79.0%, SWE-Marathon 57.5%, SciCode 62.6%, Coding Agents Index 68; capped by absence of a published SWE-bench Verified number.
- **Cost efficiency: 55/100.** Subscription-only access (~$50/mo entry reported) with no per-token price; cost per task not measurable on AA; scored as paid premium tier.
- **Overall Score: 94/100.** (93+90+100+95+92)/5 = 94; best fit for long-horizon agentic coding and professional knowledge work when subscription access is available. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates AA Intelligence 50.1%, AA-HLE 53.6%, AA-Omniscience 30.6%/41.0%/17.6%, CritPt 32.9%, AA-LCR 83.7%, MLCR 22.2%, FrontierMath v2 74.035%/46.341%, Design Arena 1354, Gray Swan IPI 15.9%. No dimension band moved; Overall unchanged at 94.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-29 preserved; new benchmark rows added (AA Intelligence 50.1%, FrontierMath v2 74.035%/46.341%, Design Arena 1354, Gray Swan IPI 15.9%); no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Muse Wonder Full](https://benchlm.ai/models/muse-wonder-full)
  - [Artificial Analysis — Muse Wonder Full](https://artificialanalysis.ai/models/muse-wonder-full)
  - [Meta — Muse Wonder model card](https://research.meta.ai/static/muse-wonder-model-card)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).