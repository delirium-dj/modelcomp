# Claude Opus 5.5 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's frontier agentic-coding and knowledge-work model, released 2026-09-22 as the successor to Opus 5 at 20% lower list price. Aimed at long-horizon software engineering (codebase-wide migrations, audits) and professional knowledge work.
- **Provider / access:** Anthropic Messages API (`claude-opus-5-5`), Amazon Bedrock, Google Vertex (`claude-opus-5-5@default`), plus ~30 gateway routes (OpenRouter, Vercel AI Gateway, LLM Gateway, Prime, AI/ML API). Anthropic API is the reference route; Chat Completions-compatible gateways also serve it.
- **Release / knowledge:** 2026-09-22; knowledge cutoff 2026-06 (models.dev metadata).
- **IDs:** `anthropic/claude-opus-5-5`, `claude-opus-5-5` (Anthropic), `google-vertex/claude-opus-5-5@default`; `opencode/claude-opus-5-5` serving route.
- **Context window:** 1,000,000 tokens total; 128,000 max output (models.dev, cross-checked against Anthropic model docs).
- **Modalities:** text, image and PDF in; text out. Extended ("adaptive") thinking with effort levels low→max; tool calls and structured output supported.
- **Pricing (as of 2026-11-11):** $4.00 / $20.00 per 1M input/output; cache read $0.20, 5-minute cache write $5, 1-hour cache write $8; Batch API 50% off. "Fast mode" (Claude Code / Claude Platform) is $8 / $40 per 1M.
- **Architecture:** proprietary (Anthropic does not publish parameter counts). Anthropic states it needs less compute to serve than Opus 5, ~40% cheaper on typical workloads.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.40%** (Anthropic, xhigh effort; ±2.6 pts; GPT-6 Astra at high effort reported by OpenAI)
- Terminal-Bench 4.1: **65.80%** (Terminal-Bench 4.1 leaderboard via BenchLM)
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic, ±3.5–5 pts)
- Toolathlon-Verified: **77.8%** (pass@1); pass@3 **82.4%**; pass^3 **72.2%**; 26.9 avg assistant turns
- OSWorld 2.0: **48.7%**; OSWorld 2.1 (108 tasks): **81.8%**; offline subset (82 tasks): **87.2%**
- AutomationBench (Zapier): **40.0%** (safeguard interventions counted as failures)
- WANDR (Perplexity): **72.3%** (offline tools, 980K-token budget — not directly comparable to Perplexity's published setup)
- GDPval-AA v2.1: **1846 Elo** (Artificial Analysis, max effort; Fable 5.1 1735, Opus 5 1708)
- Artificial Analysis Intelligence Index: **59** (v5.0.1)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **67.7% with tools**, **64.4% without tools**
- ARC-AGI-1 (semi-private): **97.50%**; ARC-AGI-2: **91.7%**
- GraphWalks BFS 256K–1M: **66.8%**
- HealthBench: **68.1%** raw / **60.6%** length-adjusted; HealthBench Professional **77.1%** raw
- LAB (Harvey held-out): criterion-pass **91.2%**, all-pass **8.3%**
- GPQA Diamond: no verified public score found (Anthropic did not publish a Diamond figure for 5.5)
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench Pro: **89.9%** (Anthropic self-report; best verified row 93%)
- DeepSWE: **74.2%**
- SWE Multilingual: **93.9%**; SWE-bench Multimodal: **61.4%**
- FrontierCode 1.1 Main **54.4%** / Extended **63.6%**; FrontierCode 2.0 **45.5%**
- CursorBench 4.0: **57.8%**
- ScarfBench (Java app migration): **70.5%**; ProgramBench: **91.2%**; PostTrainBench v1.1: **49.3%**
- LiveCodeBench: no verified public score found

Long context:

- GraphWalks BFS 256K–1M: **66.8%**; MRCR: no verified public score found for 5.5
- Terminal-Bench 4.0 at 1M-token task budgets reported qualitatively (WANDR run with a 980K-token budget)

### Normalized scores (1–100)

- **Tool use: 95/100.** Leads the agentic field on Terminal-Bench 4.0 (66.4% vs 57.9% for the next Claude), Toolathlon 77.8% and GDPval-AA 1846 Elo; capped by mid-pack computer use (OSWorld 2.0 48.7%) and AutomationBench 40.0%.
- **Reasoning: 90/100.** HLE 67.7% with tools and ARC-AGI-2 91.7% are frontier-class; no GPQA Diamond or CritPt figure published, and long-horizon retrieval (GraphWalks 66.8%) is merely strong.
- **Context window: 100/100.** 1,000,000-token window with 128K max output (per-token limit mapping).
- **Multimodal: 70/100.** Text + image + PDF input only — no native audio or video; output is text-only.
- **Coding: 96/100.** Best-in-class verified coding evidence: SWE-bench Pro 89.9%, SWE Multilingual 93.9%, DeepSWE 74.2%, CursorBench 57.8%; FrontierCode 2.0 (45.5%) is the one soft spot.
- **Cost efficiency: 55/100.** $4/$20 per 1M is 2–3× the median frontier price, partly offset by 40% lower cost per completed task and $0.20 cache reads.
- **Overall Score: 90.2/100.** Best fit for long-horizon agentic coding migrations and high-stakes knowledge work where per-task cost matters less than completion quality.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Anthropic launch post, Anthropic model documentation, BenchLM model profile, Artificial Analysis model page, models.dev provider catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Opus 5.5 — Anthropic](https://www.anthropic.com/claude-opus-5-5)
  - [Claude Opus 5.5 model documentation / pricing — Anthropic](https://docs.anthropic.com/en/docs/about-claude/models/overview)
  - [Claude Opus 5.5 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-opus-5-5)
  - [Claude Opus 5.5 intelligence & price analysis — Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-5-5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.5_v2.md`, using the same headings.