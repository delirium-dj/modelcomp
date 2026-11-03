# Claude Opus 4.7 — findings by Mercury 3

- Source: Anthropic/Claude Opus 4.7
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's April 2026 Opus flagship (released 2026-04-16, superseded by 4.8/5), the first model shipped with real-time cyber safeguards. Strong gains over Opus 4.6 in the hardest software engineering and high-resolution vision (2,576px long edge, ~3.75MP); SOTA at launch on Finance Agent and GDPval-AA.
- **Provider / access:** Anthropic Claude Platform API (`claude-opus-4-7`), Claude.ai, AWS/GCP/Azure; 4 API providers tracked by Artificial Analysis (the adaptive-thinking variant is the separate `claude-opus-4-7-adaptive` folder).
- **Release / knowledge:** Released 2026-04-16; knowledge cutoff January 1, 2026.
- **IDs:** `claude-opus-4-7` (Claude API; low→max effort incl. new xhigh).
- **Context window:** 1,000,000 tokens (1M) total; max output not disclosed (128K per models.dev family block).
- **Modalities:** text + image input (high-res), text output; reasoning (extended thinking); tool calls; task budgets beta; memory/file-based context.
- **Pricing (as of 2026-11-03):** $5.00 input / $25.00 output per 1M tokens, 90% cache discount; updated tokenizer ~1.0–1.35× tokens for same text.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.5%** (Vals); TB Hard: 54.5%; OSWorld 2.0: 13.9%; ApprenticeBench GUI: 7%; τ²-bench: 74% (AA, non-reasoning)
- SOTA at launch: Finance Agent (90.9% BigLaw Bench high-effort per Harvey); GDPval-AA SOTA (Anthropic launch); Online-Mind2Web 84% (client-cited)
- GERT Labs: 65.59%; ResearchClawBench: 20.7%

Reasoning / knowledge:

- GPQA Diamond: **88.5%** (AA non-reasoning) vs **90.2%** (Vals); HLE: **33.3%** (AA non-reasoning); MMLU-Pro: 89.9% (Vals)
- AA-LCR: **75.7%**; CritPt: **5.1%** (AA non-reasoning); Artificial Analysis Intelligence Index: **30.9%** (AA non-reasoning)
- FrontierMath v2: Tiers 1–3 **70.18%**, Tier 4 **31.71%** (Epoch AI)
- AA-Omniscience: accuracy 44.7%, hallucination rate 54.1%

Coding:

- SWE-bench: **82.0%**; LiveCodeBench: **85.1%**; Vibe Code Bench: **71.0%**; React Native Evals: **82.8%** (Vals)
- FrontierCode v1.1 Main: **38.5%** (Cognition); CursorBench: cleared 70% (Cursor-cited, vs 58% for 4.6)
- PostTrainBench v1.1: 28.6%

Long context:

- 1M window; AA-LCR 75.7%; long-context consistency cited by clients (research-agent modules).

Multimodal:

- text/image in (high-res, 2,576px/3.75MP); MMMU-Pro 76.4% (AA non-reasoning); ParseBench 63.34%; visual-acuity 98.5% vs 54.5% for 4.6 (XBOW-cited).

### Normalized scores (1–100)

- **Tool use: 84/100.** SOTA-at-launch agentic (Finance Agent, GDPval-AA) and CursorBench 70%; capped by Vals TB2.1 68.5%, OSWorld 2.0 13.9%, ApprenticeBench 7%, and thin AA non-reasoning agentic rows.
- **Reasoning: 84/100.** GPQA ~90% (Vals) and FrontierMath T1–3 70%; capped by HLE 33.3%, CritPt 5.1%, and II 30.9 on the non-reasoning variant.
- **Context window: 90/100.** 1M with solid LCR 75.7%; no ≥98%-retrieval figure at depth.
- **Multimodal: 84/100.** High-resolution image input (2,576px) is a genuine step up — above the standard image band; no video/audio input.
- **Coding: 86/100.** Vibe Code 71%, SWE-bench 82%, React Native 82.8%, CursorBench 70%; capped by FrontierCode main 38.5% and no SWE-Pro figure.
- **Cost efficiency: 62/100.** $5/$25 with 90% cache discount; slower (52.7 t/s) and higher token multiplier.
- **Overall Score: 85.6/100.** Mean of (84+84+90+84+86)/5 = 85.6 → 86. A capable mid-2026 Opus; the 4.8/5/5.5 successors are clearer upgrades.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Anthropic Opus 4.7 announcement + system card, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, Epoch AI, Cognition/Cursor); scores are normalized 1–100 interpretations, not official vendor scores. AA/BenchLM rows are largely the non-reasoning variant — reasoning-variant figures are from Vals/Anthropic; flagged.
- Reference URLs:
  - [Introducing Claude Opus 4.7 (Anthropic, 2026-04-16)](https://www.anthropic.com/news/claude-opus-4-7)
  - [Claude Opus 4.7 System Card (Anthropic)](https://anthropic.com/claude-opus-4-7-system-card)
  - [Claude Opus 4.7 — Artificial Analysis model page ($5/$25, 1M, cutoff Jan 2026)](https://artificialanalysis.ai/models/claude-opus-4-7)
  - [Claude Opus 4.7 — BenchLM benchmark aggregation](https://benchlm.ai/models/claude-opus-4-7)
  - [Claude Opus 4.7 — Vals AI model page](https://www.vals.ai/models/anthropic_claude-opus-4-7)
