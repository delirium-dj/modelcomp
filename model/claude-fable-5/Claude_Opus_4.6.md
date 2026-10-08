# Claude Fable 5 — findings by Claude Opus 4.6

- Source: Anthropic/Claude Fable 5 (`claude-fable-5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first generally available "Mythos-class" model, designed for demanding long-horizon agentic work, multi-day autonomous coding, and complex reasoning. Shares the same architecture as Claude Mythos 5 but with integrated safety classifiers for public use.
- **Provider / access:** Anthropic API (`claude-fable-5`), Claude.ai, AWS Bedrock, Google Cloud Vertex AI, Microsoft Azure. Chat Completions-style API (Messages API).
- **Release / knowledge:** 2026-06-09 release; knowledge cutoff not publicly specified.
- **IDs:** `anthropic/claude-fable-5`
- **Context window:** 1,000,000 tokens total; up to 128,000 output tokens per request — verified via Anthropic documentation.
- **Modalities:** Text + image in; text out. Adaptive thinking (always active). Tool/function calls supported. JSON mode supported. No native audio or video input.
- **Pricing (as of 2026-10-08):** $10.00 / $50.00 / — per 1M tokens (input / output / cached). Paid tier; no free tier.
- **Architecture:** Proprietary; estimated ~5 trillion parameters (industry estimates, unconfirmed by Anthropic). Mythos-class tier with safety-classifier fallback mechanism.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.8%** (source: Anthropic blog, via Claude Code scaffold)
- Tau3-Banking / Tau2-Bench: no verified public score found for Fable 5 specifically
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- AutomationBench: **17.1%** (source: Anthropic comparison, Fable 5 vs Fable 5.1)

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (source: Anthropic model card; note: benchmark saturation — most frontier models score 90%+)
- HLE: **53–55.5%** (source: Anthropic / third-party evaluations; Fable 5 was #1 at launch)
- Artificial Analysis Intelligence Index: **64.9** (#1 at launch, June 2026) (source: Artificial Analysis)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: **~95.0%** (source: SWE-bench leaderboard, 0.950 resolution rate)
- SWE-bench Pro: **80.3%** (source: Anthropic blog)
- LiveCodeBench: **~89.8%** (source: vals.ai v6 independent evaluation)
- FrontierCode (Hardest Diamond Split): **29.3%** (source: Anthropic, more than 2× Opus 4.8's 13.4%)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 1M token context window supported. No specific MRCR / RULER / GraphWalks retrieval scores found for Fable 5.

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 at 83.8% is elite-tier agentic performance; strong tool-call and multi-step orchestration capabilities via Claude Code. Capped by lack of verified Tau-bench and broader tool-use benchmark coverage.
- **Reasoning: 89/100.** GPQA Diamond 93.2% and HLE 53–55.5% (both class-leading at launch); AA Intelligence Index #1 at 64.9. Capped by HLE being mid-range compared to later models and limited independent reasoning benchmark diversity.
- **Context window: 92/100.** 1M token context window with 128K max output is among the largest available. Capped only by lack of published long-context retrieval accuracy benchmarks (MRCR/RULER).
- **Multimodal: 68/100.** Supports text + image input with strong vision capabilities (charts, diagrams, code screenshots). No audio, video, or PDF-native input. Text-only output. Capped by absence of output modalities beyond text.
- **Coding: 93/100.** SWE-bench Verified ~95%, SWE-bench Pro 80.3%, LiveCodeBench ~89.8%, FrontierCode 29.3% — all elite-tier. Capped only by limited SciCode/VibeBench coverage.
- **Cost efficiency: 30/100.** $10/$50 per 1M tokens is among the most expensive API pricing; no free tier. High capability justifies cost for enterprise use but expensive for general-purpose workloads.
- **Overall Score: 86/100.** Mean of (90 + 89 + 92 + 68 + 93) / 5 = 86.4 → 86. A top-tier frontier model excelling in agentic coding and reasoning; multimodal and cost efficiency are the limiting dimensions. Best fit for complex, long-horizon software engineering and research tasks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-08
- Method: Public internet research (Anthropic documentation, Artificial Analysis, SWE-bench leaderboard, vals.ai, industry analyses); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
