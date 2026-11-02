# Muse Wonder Full — findings by Claude Opus 4.6

- Source: Meta Superintelligence Labs (`muse-wonder-full-1.0`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's most powerful frontier reasoning and agentic model, featuring Active Memory (cross-session context retention) and Active Focus (autonomous error recovery). Designed for complex, long-running software engineering, legal, and financial workflows.
- **Provider / access:** Not available via standalone API. Exclusively accessed through Meta's Muse Code IDE subscriptions (Power Usage $50/month, Maximum Usage $200/month). Chat Completions API format within the IDE environment.
- **Release / knowledge:** October 2026; knowledge cutoff not publicly disclosed
- **IDs:** `meta/muse-wonder-full-1.0` (Muse Code subscription only; no free Zen ID exists)
- **Context window:** 1,048,576 tokens (1M) total; max output not publicly disclosed — verified via Meta model card and OpenRouter listings
- **Modalities:** Text, image, video, audio, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-11):** Subscription-only — Power Usage $50/month, Maximum Usage $200/month (no per-token API pricing available; the standard Muse Wonder 1.0 API charges $4/$20 per 1M input/output tokens)
- **Architecture:** Proprietary closed-weight model; architecture details undisclosed

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0-AA: **57.1%** (max reasoning effort) (source: Artificial Analysis / traictory.com independent evaluation)
- SWE-Marathon: **57.5%** (xhigh effort) (source: VentureBeat / independent evaluations)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.8%** (source: rankllms.com independent leaderboard)
- HLE: **53.6%** (source: Artificial Analysis / waitwhichmodel.fyi)
- Artificial Analysis Intelligence Index: **56.0** (source: artificialanalysis.ai)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **79.0%** (pass@1) (source: rankllms.com leaderboard)
- DeepSWE 1.1: **79.0%** (source: felloai.com independent evaluation)
- LiveCodeBench: no verified standalone score found (performance assessed via DeepSWE/Terminal-Bench suites)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 1M token context window verified; no MRCR/RULER/GraphWalks retrieval benchmarks found for this specific model

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 57.1% and SWE-Marathon 57.5% place it firmly in frontier territory for agentic tool execution. Active Focus error-recovery feature enhances autonomous multi-step tool chains. Capped by lack of verified Claw-Eval and Toolathon scores.
- **Reasoning: 92/100.** GPQA Diamond 93.8% is top-tier among frontier models. HLE 53.6% is competitive. AA Intelligence Index 56.0 places it near Claude Opus 5.5 level. Strong multi-step logical deduction across legal and scientific domains.
- **Context window: 88/100.** 1M token native context window matches the largest frontier offerings. No independent long-context retrieval benchmarks (MRCR/RULER) found, which caps the score below models with verified retrieval at full window length.
- **Multimodal: 72/100.** Accepts text, image, video, audio, and PDF inputs with text-only output. Multimodal capabilities confirmed but no specific vision or audio benchmarks found for this variant. Score reflects broad input coverage without verified multimodal benchmark evidence.
- **Coding: 91/100.** SWE-bench Verified 79.0% and DeepSWE 79.0% are near state-of-the-art. Excels at long-horizon multi-file software engineering tasks. Active Memory enables cross-session code context retention.
- **Cost efficiency: 30/100.** Subscription-only access at $50–$200/month with no per-token API pricing makes it one of the most expensive frontier models. No free tier available.
- **Overall Score: 86/100.** Mean of (88 + 92 + 88 + 72 + 91) / 5 = 86.2, rounded to 86. A top-tier agentic reasoning model best suited for complex, long-running professional workflows within Meta's subscription ecosystem.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-02
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta Muse Wonder Full Model Card](https://meta.ai)
  - [Artificial Analysis Intelligence Index](https://artificialanalysis.ai)
  - [RankLLMs Benchmark Leaderboard](https://rankllms.com)
  - [VentureBeat Muse Wonder Full Coverage](https://venturebeat.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
