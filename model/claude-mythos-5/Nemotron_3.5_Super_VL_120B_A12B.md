# Claude Mythos 5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Anthropic / Claude Mythos 5
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's Mythos-class model (same underlying model as Claude Fable 5, with cyber/biology safeguards lifted), released June 9, 2026; positioned as the most capable model for cybersecurity and biology research; access restricted to organizations verified through Anthropic's verification programs (e.g., Cyber Verification Program).
- **Provider / access:** Anthropic; Claude API (`claude-mythos-5`), Amazon Bedrock (`anthropic.claude-mythos-5`), Google Cloud Vertex AI (`claude-mythos-5`), Microsoft Foundry (`claude-mythos-5`); verification required — not publicly available; intro subscription window closed June 22, 2026, after which usage requires credits.
- **Release / knowledge:** Released 2026-06-09; reliable knowledge cutoff Jan 2026; training data cutoff Jan 2026 (official Anthropic docs).
- **IDs:** claude-mythos-5 (Anthropic Claude API); anthropic.claude-mythos-5 (Amazon Bedrock); claude-mythos-5 (Google Cloud / Microsoft Foundry).
- **Context window:** 1,000,000 tokens total; max output 128K tokens — official Anthropic docs; Artificial Analysis confirms 1M context.
- **Modalities:** Text and images → text (official Anthropic docs). No video, audio, or speech input claimed; text-only output.
- **Pricing (as of 2026-11-04):** $10 per 1M input tokens and $50 per 1M output tokens (official docs; Artificial Analysis agrees), 2x Claude Opus 4.8's price; cache write $12.50/MTok (5m) / $20/MTok (1h); cache read $1/MTok; Batch API 50% discount.
- **Architecture:** Proprietary / closed weights; parameter count and MoE density not disclosed by Anthropic; same underlying model as Claude Fable 5 (per Vellum and Artificial Analysis).

## Raw benchmarks found

Agent / tool use:
- SWE-bench Pro (agentic coding, Anthropic's benchmark): 80.3% — top score of any model tested (Mythos Preview 77.8, Opus 4.8 69.2, GPT-5.5 58.6, Gemini 3.1 Pro 54.2); source: Anthropic, reported by Vellum (June 9, 2026). BenchGap measures Claude Mythos 5 SWE-bench Pro at 80.3% measured.
- FrontierCode (Cognition, Diamond split): 29.3% — more than double Opus 4.8's 13.4%, far ahead of GPT-5.5's 5.7%; model reported is Fable 5 (same underlying model as Mythos 5) (Vellum/Anthropic).
- GDPval-AA (real-world work tasks): Elo 1932 — significant jump over Claude Opus 4.8 (Artificial Analysis).
- Tau2-bench Telecom (tool use for customer service): frontier-level (Artificial Analysis).
- Terminal-Bench 2.1: 88.0% measured (BenchGap); AA places it at the frontier on Terminal-Bench Hard.
- SWE-bench Verified: 95.5% measured (BenchGap); OSWorld-Verified: 85.0% measured; CyberGym: 83.8% measured; ExploitBench: 78.0% measured (BenchGap).
- Internal tool use: on cyber/bio/chem/distillation queries Claude Fable 5 silently falls back to Claude Opus 4.8 (<5% of sessions per Anthropic; Artificial Analysis recorded ~8% fallback across the Intelligence Index, 9% on HLE).

Reasoning / knowledge:
- Humanity's Last Exam: 64.5% measured (BenchGap, Claude Mythos 5) — conflicts with Artificial Analysis's 53% for Claude Fable 5 (June 2026; includes fallback usage); see Signature.
- GPQA Diamond: 94.1% measured (BenchGap); AA-GPQA Diamond 93.6% estimated.
- AA-Omniscience: Claude Fable 5 scores 40, +7 over previous leader Gemini 3.1 Pro Preview (Artificial Analysis); fallback triggered in 9% of HLE tasks.
- MMLU: 88.1% estimated (BenchGap); MMLU-Pro 86.0% estimated / AA MMLU-Pro 87.1% estimated.
- CritPt: 24.5% estimated (BenchGap) — modest relative to leading scores.
- Artificial Analysis Intelligence Index: Claude Fable 5 64.9, #1 overall (~5 points ahead of GPT-5.5); BenchGap estimates Claude Mythos 5 at 52.1% estimated ± 6.1 — conflict reflects different index versions/methodology (see Signature).

Coding:
- LiveCodeBench v6: 96.9% estimated (BenchGap).
- SWE-bench Verified: 95.5% measured (BenchGap).
- Vibe Code Bench: 62.5% estimated (BenchGap).
- CursorBench: Michael Truell (Cursor) calls Fable 5 "the state of the art model on CursorBench" (Vellum).
- FrontierCode 1.1 Main: 53.2% estimated (BenchGap) — not #1 everywhere.
- DeepSWE: 73.4% estimated; FrontierSWE v2: 51.3% estimated (BenchGap).

Long context:
- 1M-token context window; no public needle/retrieval score (MRCR/RULER/GraphWalks) found for this exact model — no verified long-context retrieval reported beyond the advertised window.

### Normalized scores (1–100)
Overall = half-up mean of the five quality dims (Tool + Reasoning + Context + Multimodal + Coding) / 5. Cost efficiency is scored independently and excluded from the mean.

- **Tool use: 90/100.** SWE-bench Pro 80.3% (top reported), Terminal-Bench 2.1 88.0%, SWE-bench Verified 95.5%, OSWorld 85.0%, CyberGym 83.8%, GDPval-AA Elo 1932; capped by verification-gated access and the Opus 4.8 fallback on safety-flagged queries.
- **Reasoning: 88/100.** HLE 64.5% measured (BenchGap) vs AA's 53% for Fable 5 (conflicting — see Signature), GPQA Diamond 94.1%, AA-Omniscience 40 (#1 at launch); capped by CritPt 24.5% estimated and BenchGap's Intelligence Index estimate (52.1%) well below AA's 64.9 for Fable 5 — version/methodology conflict.
- **Context window: 100/100.** 1M tokens total / 128K max output, official Anthropic docs; ties the top tier.
- **Multimodal: 65/100.** Text + image input → text output only (official); no video/audio/speech input claimed anywhere.
- **Coding: 90/100.** SWE-Bench Pro 80.3% (top of models tested), FrontierCode Diamond 29.3% (>2x Opus 4.8), LiveCodeBench v6 96.9% estimated, SWE-bench Verified 95.5%; capped by FrontierCode Main 53.2% estimated and CursorBench being a single-vendor claim.
- **Cost efficiency: 15/100.** $10/$50 per 1M (2x Claude Opus 4.8), verification-gated, credits required after the intro window; among the priciest models — far above free tiers (cost 100) and above GLM 5.1 Coding's $1.40/$4.40 (scored 75 in model-comparison.md).
- **Overall Score: 87/100.** Mean of (90 + 88 + 100 + 65 + 90) / 5 = 86.6 → 87; best-fit recommendation: a top-tier cybersecurity/biology research model for verified organizations only — capability-first, not cost-effective, and not publicly available.

---

## Signature
- Provided by: **Nemotron 3.5 Super VL 120B A12B (NVIDIA nemotron-3.5-super-vl)** — 2026-11-04
- Method: public internet research across the official Anthropic platform docs plus three independent benchmark/review sources (Vellum, Artificial Analysis, BenchGap); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting values reported where sources disagree: Humanity's Last Exam 64.5% measured (BenchGap, Mythos 5) vs 53% (Artificial Analysis, Fable 5 incl. fallback); Artificial Analysis Intelligence Index 64.9 #1 (Fable 5) vs BenchGap estimated 52.1% (Mythos 5) — different index versions/methodology; fallback rate <5% (Anthropic) vs ~8-9% measured (Artificial Analysis); benchgap attributes Fable 5's SWE-bench Pro 80.3% to Mythos 5 (same underlying model).
- Reference URLs:
  - [Anthropic — Claude Mythos 5 (official platform docs)](https://platform.claude.com/docs/en/models/mythos-5/overview)
  - [Vellum — Claude Fable 5 & Claude Mythos 5 Benchmarks Explained](https://www.vellum.ai/blog/claude-fable-5-and-mythos-5-benchmarks-explained)
  - [Artificial Analysis — Claude Fable 5 Launches at #1 on the Intelligence Index](https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index)
  - [BenchGap — Claude Mythos 5 benchmark scores](https://benchgap.net/model/claude-mythos-5)