# Claude Opus 5.5 — findings by GLM 5.2

- Source: Anthropic/Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship long-running agentic coding and knowledge-work model, first release of the Claude 5.5 family and Anthropic's first post-"pace the frontier" launch. Positioned as the default recommendation for most workloads; Fable 5.2 sits above it only for the most demanding reasoning.
- **Provider / access:** Anthropic API (`https://api.anthropic.com/v1/messages`, Messages API), plus Amazon Bedrock, Google Vertex, Azure, and OpenRouter (`anthropic/claude-opus-5.5`, Chat Completions-compatible gateway). Chat Completions + Responses via gateways only; native API is Messages.
- **Release / knowledge:** Released Nov 2026 (Sonnet 5.5 / Haiku 5.5 announced as following weeks later); docs list training-data checkpoint Jun 2026.
- **IDs:** `anthropic/claude-opus-5-5` (OpenRouter), `claude-opus-5-5` (Anthropic API). No Free ID exists on the API; access is paid (or via Claude subscription plans).
- **Context window:** 1M tokens total context, 128K max output (Anthropic docs Models & pricing table). Verified via docs overview page.
- **Modalities:** text + image input; text output; adaptive thinking (always on, effort low→xhigh); tool use incl. server-side web search and code execution; JSON mode; no native audio/video input.
- **Pricing (as of 2026-11-14):** $4 / MTok input, $20 / MTok output, $0.20 / MTok cache read (60% cheaper than Opus 5); Fast mode tier $8 / $40 per MTok at up to 2.5× speed. 20% below Opus 5 list price; ~40% cheaper per task at default settings per Anthropic.
- **Architecture:** proprietary (weights closed); params undisclosed. Released with "preserved thinking" anti-distillation safeguard; external pre-release evals by METR and Frontier Design.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic announcement, xhigh effort, ±2.6 pts; OpenRouter-listed AA harness medium/default: 52.5%; Vals AI: 65.2%)
- GDPval-AA v2.1: **1846 Elo** (Anthropic announcement; AA percentile form 54.5% medium / 68.3% max effort)
- AutomationBench (Zapier): **40.0%** (no-fallback run; GPT-6 Astra 41.4% leads)
- OSWorld 2.1 (computer use): **81.8%** partial-credit basis (Anthropic; Fable 5.1: 80.7%)
- TAU-Bench (OpenRouter AutoExacto): **72.2–77.3%** across host providers (auto-routing 75.0%)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.6–90.6%** across providers (OpenRouter AutoExacto; Amazon Bedrock 90.6%)
- HLE: **67.7%** with tools (Anthropic, max effort; AA harness: 54.7% medium / 61.4% max)
- AA Intelligence Index v5.0.1: **48.2 medium / 59.1 max** (OpenRouter-listed AA data; rank not stated on page)
- AA-LCR: **84.3%** medium, 84.7% max (AA via OpenRouter)
- CritPt v2 hard subset: **27.7–31.7%** (AA via OpenRouter)
- AA-Omniscience Accuracy / Non-Hallucination: **63.9% / 33.1%** medium; 65.5% / 49.7% max
- Chartography (visual chart recognition): **89.0%** with tools (Anthropic)
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic, ±3.5–5 pts; Vals AI 47.1%; GPT-6 Astra 64.6% leads)

Coding:

- FrontierCode v1.1 (Main): **54.4%** (Anthropic; GPT-6 Astra 53.3%)
- CursorBench 4.0: **57.8%** (Anthropic; GPT-5.6 Sol 41.7%)
- SWE-bench Multimodal (Vals AI): **70.2%**
- Vibe Code Bench v1.1 (Vals AI): **90.3%**
- SciCode (AA via OpenRouter): **59.3%** medium / 66.9% max
- Vals Code Migration v1.1: **81.0%**; Vals IOI: **95.1%**
- SWE-bench Verified / SWE-Pro: no verified public score found (Anthropic published agentic-coding suites instead this cycle)
- LiveCodeBench: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks public figure found; 1M context claimed by docs, long-context reliability demonstrated via 680K-line migration and 200K-line audit anecdotes (Anthropic announcement).

### Normalized scores (1–100)

- **Tool use: 94/100.** Terminal-Bench 4.0 66.4% (best-in-class, ±2.6), OSWorld 2.1 81.8%, TAU-Bench ~75%, GDPval-AA 1846 Elo — top-tier agentic/tooling profile across independent sources; capped by AutomationBench 40.0% (below GPT-6 Astra's 41.4% under no-fallback safeguard rules).
- **Reasoning: 93/100.** GPQA Diamond ~90%, HLE 67.7% w/tools (frontier), CritPt hard subset low-teens-to-30s absolute but effort-scaled; AA Intelligence Index 59.1 at max effort among the best; capped by CritPt hard-subset absolute scores and HLE falling to 54.7% at default effort.
- **Context window: 98/100.** 1M tokens total with 128K output (docs-verified) — the largest commonly available tier; long-horizon anecdotes (680K-line migration) corroborate usable depth.
- **Multimodal: 72/100.** Text + image in / text out only; Chartography 89.0% shows strong visual-chart reasoning and SWE-bench Multimodal 70.2%, but no native audio/video input or image output caps it well below vision-first models.
- **Coding: 95/100.** FrontierCode 54.4% (leads GPT-6 Astra), CursorBench 57.8% (+11 pts over GPT-5.6 Sol), Vibe Code 90.3%, IOI 95.1%, Code Migration 81.0%; real-world 680K-line migration anecdote; strongest known agentic-coding SKU at a fraction of rival cost.
- **Cost efficiency: 82/100.** $4/$20 per MTok with $0.20 cache reads — 40% cheaper per task than Opus 5 and ~⅕ the cost per GDPval task vs GPT-6 Astra at max effort; not free, but exceptional $/capability for a flagship.
- **Overall Score: 90/100.** Mean of quality dims (94+93+98+72+95)/5 = 90.4 → 90. Best-fit recommendation: default flagship for long-running agentic coding and knowledge work when 1M context, tool use, and per-task cost dominate; choose Fable 5.2 only when peak reasoning outshines everything else.

---

## Signature

- Provided by: **GLM 5.2 (zai-org/glm-5.2)** — 2026-11-14
- Method: public internet research. Web search tool returned empty results twice (outage), so per RULES.md § Web-research fallback I fetched official and third-party URLs directly: Anthropic docs Models & pricing overview, the Anthropic Opus 5.5 announcement, and OpenRouter's model page (which republishes Artificial Analysis, AutoExacto, Design Arena, and Vals AI measurements). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Models & pricing overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
  - [Anthropic Claude Opus 5.5 announcement](https://www.anthropic.com/news/claude-opus-5-5)
  - [OpenRouter — Anthropic Claude Opus 5.5 (AA/AutoExacto/Vals AI tables)](https://openrouter.ai/anthropic/claude-opus-5.5)
- Future sources: add a new file next to this one, e.g. `GLM_5.2.md` successors, using the same headings.