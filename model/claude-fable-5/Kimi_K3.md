# Claude Fable 5 — findings by Kimi K3

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first generally available Mythos-class model (tier above Opus), launched 2026-06-09; same underlying model as Claude Mythos 5 but with cyber/bio/distillation classifiers that fall back to Claude Opus 4.8 on flagged queries (<5% of sessions). Now legacy — Claude Fable 5.1 is the current Fable model.
- **Provider / access:** Claude API `claude-fable-5` (Messages API, adaptive thinking always on, default effort `high`); also Amazon Bedrock `anthropic.claude-fable-5`, Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS. ~7 API providers (Artificial Analysis).
- **Release / knowledge:** 2026-06-09; knowledge cutoff Jan 2026 (reliable). Access suspended 6/12 and restored 7/1/2026 after an export-control order was lifted.
- **IDs:** `claude-fable-5` (Claude API, no OpenCode Zen Free ID exists — paid only)
- **Context window:** 1M tokens total; max output 128K (synchronous Messages API) — per platform.claude.com Fable 5 reference.
- **Modalities:** text + image in → text out; adaptive thinking (reasoning) always on; tool use, JSON mode, prompt caching supported.
- **Pricing (as of 2026-10-09):** $10 / $50 per 1M in/out; cache write $12.50 (5m) / $20 (1h), cache read $1; Batch 50% off; blended (7:2:1) ≈ $7.70/MTok (Artificial Analysis). Fallback queries billed at Opus 4.8 rates.
- **Architecture:** proprietary; parameter count undisclosed. Mythos-class = capability tier above Opus class.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%** (Anthropic launch table via DataCamp; vs 82.7% Opus 4.8, 83.4% GPT-5.5 Codex CLI)
- OSWorld-Verified: **85.0%** (same table; vs 83.4% Opus 4.8)
- AutomationBench: **17.4%** (same table; best of the six listed models)
- GDPval-AA: **1932 Elo** (same table; vs 1890 Opus 4.8, 1769 GPT-5.5, 1314 Gemini 3.1 Pro)
- Legal Agent Benchmark: **13.3%** (same table)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (no tools): **59.0%**; (with tools): **64.5%** (Anthropic launch table via DataCamp)
- Blueprint-Bench 2 (spatial reasoning): **38.6%** (same table; top of six)
- HealthBench Professional: **66.0%** (same table)
- GPQA Diamond: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **50** (#19/226; AA v4.3.2, reasoning tier median 26)

Coding:

- SWE-Bench Pro: **80.3%** (Anthropic launch table via DataCamp; vs 69.2% Opus 4.8, 58.6% GPT-5.5)
- FrontierCode (Diamond, Cognition): **29.3%** at xhigh effort (same table; vs 13.4% Opus 4.8, 5.7% GPT-5.5); scores highest among frontier models even at medium effort (Anthropic)
- CursorBench: #1, tied with Opus 5 (Cursor CEO via Anthropic launch; Cursor docs)
- LiveCodeBench / SciCode: no verified public score found

Long context:

- 1M-token window; vendor claims sustained focus "across millions of tokens" in long-running tasks with file-based memory gains (Anthropic, Slay the Spire internal eval); no MRCR/RULER public number found.

Vision:

- CharXiv Reasoning (with tools): **93.2%** (DataCamp, citing Anthropic testing)
- GDP.pdf (no tools): **29.8%** (Anthropic launch table via DataCamp)

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 92/100.** Tops its launch cohort on Terminal-Bench 2.1 (88.0%), OSWorld-Verified (85.0%), AutomationBench (17.4%), and GDPval-AA (1932 Elo); capped by safety-classifier fallbacks to Opus 4.8 on cyber/bio/distillation tasks and no public Claw-Eval/Toolathon coverage.
- **Reasoning: 93/100.** HLE 59.0% no-tools / 64.5% with tools (launch-cohort best), Blueprint-Bench 2 38.6% top; AA Intelligence Index 50 (#19/226) confirms frontier reasoning. Capped by missing GPQA/CritPt public numbers.
- **Context window: 95/100.** 1M tokens (top tier) with 128K max output; vendor-validated focus across millions of tokens with file-based memory — strongest documented long-horizon behavior in the launch cohort.
- **Multimodal: 82/100.** Text+image in → text out; vision is SOTA-tier (CharXiv 93.2%, GDP.pdf 29.8% best of cohort) but no audio/video input and no image output.
- **Coding: 95/100.** SWE-Bench Pro 80.3% clears the field by 11+ points; FrontierCode Diamond 29.3% ≈ double Opus 4.8; CursorBench #1. The launch cohort's strongest coding model.
- **Cost efficiency: 25/100.** $10/$50 per MTok — 2x Opus 4.8; AA cost/task $8.75 with 130M output tokens per Intelligence Index run (verbose). Premium pricing, no free tier.
- **Overall Score: 91/100.** Mean of 92/93/95/82/95 = 91.4 → 91. Best fit: long-running, high-autonomy engineering and knowledge-work flows where its Mythos-class capability justifies premium cost.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (anthropic.com launch post + system-card notes, platform.claude.com model reference, DataCamp benchmark round-up, Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
