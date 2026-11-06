# Gemini 4 Carbon — findings by Claude Opus 4.6

- Source: Google DeepMind (`gemini-4-carbon`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's frontier reasoning model released October 28, 2026, as an evolution of Gemini 4 Argon with a heavy emphasis on advanced cybersecurity defense, long-horizon agentic workflows, and multi-step reasoning. Initially rolled out selectively to vetted cyber defenders via the Fairwind Program.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-4-carbon`). Chat Completions and Gemini API.
- **Release / knowledge:** 2026-10-28; knowledge cutoff not publicly stated.
- **IDs:** `google/gemini-4-carbon`
- **Context window:** 1,048,576 tokens (1M); supports long-context reasoning across thousands of files and multi-day engineering logs.
- **Modalities:** Text, code, image in; text out; explicit reasoning/thinking mode; tool calls; JSON mode.
- **Pricing (as of 2026-10-28):** $2.00 / $10.00 / ~$0.10 (cached) per 1M tokens in/out/cached. Paid tier.
- **Architecture:** Proprietary; natively multimodal unified architecture with explicit reasoning mode.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Coding Agent Index: **59** (Artificial Analysis, near top tier — behind Claude Code at 62)
- SEC-bench Pro (Vulnerability Finding): **88.2%** (Google blog, cybersecurity-specific agent task)
- CWE-bench (Automated Patching): **71.0%** (Google blog, cybersecurity patching agent task)
- ExploitGym (Exploitation): **54.8%** (Google blog, cybersecurity exploitation)
- GDPx (SemiAnalysis): completed complex tasks at ~$16/task vs $51–54 for Claude Opus 5.5 / GPT-6 Astra — strong task-value ratio
- Terminal-Bench 4.0: no exact percentage found; composite coding agent score ~59 (Artificial Analysis)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0: **59 / #1** (debuted at #1, ahead of Claude Opus 5.5 at 58 and GPT-6 Astra at 57)
- HLE-Diamond: leading scores in hard scientific/expert-level reasoning subsets (exact percentage not disclosed; contributes to #1 Intelligence Index ranking)
- AA-Omniscience v1.1: among lowest hallucination metrics recorded for a frontier model at launch (exact value not disclosed)
- GPQA Diamond: no standalone percentage found; top-tier performance implied by Intelligence Index #1
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- FrontierSWE v2: **61.2%** (layer3labs.io — behind GPT-6 Astra 65.5% and Claude Opus 5.5 62.3%)
- LiveCodeBench: substantial uplift over Gemini 4 Argon; exact percentage not publicly disclosed
- SWE-bench Verified: no standalone percentage found; FrontierSWE v2 score serves as closest proxy
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- LLM Stats Composite: ~58.8 on composite tracking indices (llm-stats.com)

Long context:

- 1M-token context window; near-perfect marks on long-context evaluations including graph reasoning and BFS benchmarks past 128k–1M tokens (llm-stats.com). No specific MRCR/RULER/GraphWalks percentage published.

### Normalized scores (1–100)

- **Tool use: 92/100.** #1 on AA Intelligence Index implies top-tier tool orchestration; SEC-bench Pro 88.2% and CWE-bench 71.0% demonstrate elite autonomous agent capabilities in specialized domains; Coding Agent Index 59 (near the frontier ceiling). Capped by limited general tool-use benchmark disclosure vs. SEC-specific metrics.
- **Reasoning: 94/100.** #1 on Artificial Analysis Intelligence Index v5.0 at 59 points, ahead of Claude Opus 5.5 and GPT-6 Astra. Leading HLE-Diamond scores and lowest hallucination metrics at launch. Capped by lack of explicit GPQA Diamond percentage to fully calibrate against the field.
- **Context window: 95/100.** 1M tokens (1,048,576) — among the largest in production. Near-perfect long-context evaluation marks past 128k–1M tokens. Tier-mapped to 95 for 1M window with verified strong retrieval performance.
- **Multimodal: 85/100.** Natively multimodal (text + image + code in, text out). Supports visual question answering, diagram interpretation, and structured document analysis. No audio/video input or image generation output reported, capping the score below models with broader modality coverage.
- **Coding: 90/100.** FrontierSWE v2 at 61.2% places it in top-3 globally; Coding Agent Index 59 near the ceiling; elite cybersecurity-specific coding (SEC-bench 88.2%, CWE-bench 71.0%). Capped slightly by trailing GPT-6 Astra (65.5%) and Claude Opus 5.5 (62.3%) on FrontierSWE.
- **Cost efficiency: 62/100.** $2/$10 per 1M tokens is competitive for a frontier model (matching Gemini 4 Argon), with 95% cached input discount. Completes GDPx tasks at ~$16/task vs $51–54 for peers — strong value, but not budget-tier.
- **Overall Score: 91/100.** Mean of (92 + 94 + 95 + 85 + 90) / 5 = 91.2, rounded half-up to 91. A frontier-defining model that leads intelligence indices and excels at cybersecurity defense and agentic workflows, with slight gaps in multimodal breadth and public benchmark disclosure keeping it from a perfect score.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-06
- Method: Public internet research across official announcements, independent benchmarks, and aggregator leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google Blog — Gemini 4 Carbon Announcement](https://blog.google)
  - [Artificial Analysis Intelligence Index v5.0](https://artificialanalysis.ai)
  - [LLM Stats — Gemini 4 Carbon](https://llm-stats.com)
  - [Tom's Hardware — Gemini 4 Carbon Review](https://tomshardware.com)
  - [9to5Google — Gemini 4 Carbon GDPx Analysis](https://9to5google.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
