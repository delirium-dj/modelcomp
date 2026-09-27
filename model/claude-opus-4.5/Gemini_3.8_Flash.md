# Claude Opus 4.5 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-opus-4.5`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's late-2025 flagship Opus model built for agentic software engineering, tool chaining, and computer use, introducing the effort parameter to tune extended reasoning depth.
- **Provider / access:** Anthropic Messages API (`claude-opus-4-5-20251101`), Amazon Bedrock, Google Cloud Vertex AI, and Microsoft Foundry.
- **Release / knowledge:** 2025-11-24 release; knowledge cutoff May 2025.
- **IDs:** `anthropic/claude-opus-4-5-20251101`. No Zen Free tier available.
- **Context window:** 200,000 tokens total (200K context window); max output 64,000 tokens.
- **Modalities:** Text and image input; text, code, and tool-calling output; extended thinking with adjustable effort parameter; computer use.
- **Pricing (as of 2025-11):** $5.00 / 1M input tokens, $0.50 / 1M prompt cache read, $25.00 / 1M output tokens.
- **Architecture:** Proprietary hybrid-reasoning transformer optimized for multi-step agentic workflows and computer-use tasks.

### Raw benchmarks found

Agent / tool use:

- Berkeley Function Calling Leaderboard (BFCL): **77.47%** accuracy (evals.report, official Nov 2025)
- Tau2-Bench (Telecom): **98.2%** pass^1 (evals.report, unverified Nov 2025)
- Terminal-Bench: **59.3%** (AI/TLDR / Anthropic announcement, Nov 2025)
- OSWorld: **66.3%** task success rate (evals.report, unverified Nov 2025)
- GDPval: **1452** Elo (evals.report, official Nov 2025)
- MCP-Atlas: **62.3%** pass rate (evals.report, official Nov 2025)

Reasoning / knowledge:

- GPQA Diamond: **86.0%** accuracy (evals.report, official Nov 2025; 87% AI/TLDR)
- AIME (OTIS Mock): **86.1%** accuracy (evals.report, official Nov 2025)
- FrontierMath: **20.69%** accuracy (evals.report, official Nov 2025)
- Humanity's Last Exam: **25.8%** accuracy (evals.report, official Nov 2025)
- Artificial Analysis Intelligence Index: **49.7** Index (evals.report, Nov 2025)
- LMArena (Text Arena): **1449** Elo (evals.report, official Nov 2025)

Coding:

- SWE-bench Verified: **76.7%** / **80.9%** resolved (evals.report / AI/TLDR, official Nov 2025)
- SWE-bench Pro: **45.89%** resolved (evals.report, official Nov 2025)
- Aider Polyglot: **89.4%** correct (evals.report, official Nov 2025)
- LiveCodeBench: **73.8%** pass@1 (evals.report, Nov 2025)
- SciCode: **49.5%** accuracy (evals.report, Nov 2025)

Long context:

- 200K token context window evaluated with 64K token maximum output generation.

### Normalized scores (1–100)

- **Tool use: 86/100.** High-level tool and agent proficiency demonstrated by 77.47% on BFCL, 98.2% on Tau2-Bench, 59.3% on Terminal-Bench, and 66.3% on OSWorld.
- **Reasoning: 86/100.** Strong analytical problem solving evidenced by 86.0% on GPQA Diamond, 86.1% on AIME, and 49.7 on the AA Intelligence Index.
- **Context window: 72/100.** 200K context window with large 64K output capacity, capped below modern 1M+ tiers.
- **Multimodal: 75/100.** High-quality document and screenshot perception (73.9% MMMU-Pro, 80.7% MMMU), but text and image only (no native audio/video).
- **Coding: 86/100.** Leading software development capability at launch with 76.7%–80.9% on SWE-bench Verified and 89.4% on Aider Polyglot.
- **Cost efficiency: 52/100.** Premium pricing at $5.00 / $25.00 per 1M tokens, though significantly reduced from the earlier Opus 4.1 tier.
- **Overall Score: 81/100.** Formidable late-2025 agentic coding and knowledge-work foundation model with industry-leading tool and computer-use capabilities.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into Anthropic official announcements, benchmark repositories, and technical evaluation indices; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
