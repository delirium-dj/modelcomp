# GPT-6.1 Sol — findings by Mercury 3

- Source: OpenAI (GPT-6.1 Sol)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's upgrade to GPT-6 Sol (released 2026-09-29, a week after GPT-6 Sol), pitched as "near-Astra intelligence" for agentic coding, computer use, and professional work at one-fifth of GPT-6 Astra's standard token prices. Strong value-focused frontier reasoning model with low→max reasoning effort.
- **Provider / access:** OpenAI API as `gpt-6.1-sol`; also on Microsoft Azure; available in ChatGPT Work and Codex (Plus/Pro/Business/Enterprise/Edu) — not in ChatGPT Chat at launch. Reasoning model: low, medium (default), high, xhigh, max; `none`/`minimal` not supported.
- **Release / knowledge:** Released 2026-09-29; knowledge cutoff 2026-04-30 (per OpenAI model page).
- **IDs:** `openai/gpt-6.1-sol`.
- **Context window:** 1,050,000 tokens total; max output 128,000 tokens (OpenAI model page); Artificial Analysis lists 1M. Note: prompts >272K input tokens are repriced at 2x input/cache and 1.5x output for the full request; Codex/ChatGPT Work default context 500K.
- **Modalities:** text + image input; text output; reasoning; tool/computer use; no audio/video input, no image/video/audio output.
- **Pricing (as of 2026-11-06):** $2.00 in / $10.00 out per 1M; cached input $0.10 per 1M (95% off input); cache writes $2.50 per 1M; EU data-residency processing +10%. No free tier.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- AutomationBench 1.0.6 (OpenAI): **31.7%** at medium effort (@ $0.19/task) — +2.2pp vs Claude Opus 5.5 w/ fallbacks (29.5% @ $0.65); +4.8pp vs GPT-6 Sol (26.9%); max effort 36.1% @ $0.30 (GPT-6 Astra medium 34.1% @ $1.27)
- OSWorld 2.0 offline (OpenAI): **71.4%** at max (@ $1.27/task) — +7pp vs GPT-6 Sol (64.4%), within 2.1pp of Astra (73.5% @ $9.44); at default medium 66.8% @ $0.77 vs Astra medium 69.3% @ $5.36
- Terminal-Bench Science 0.1 (OpenAI): **57.0%** at max (@ $5.47/task) — >2x GPT-6 Sol (27.6%), but below Opus 5.5 w/ fallbacks (63.3% @ $23.21) and GPT-6 Astra (68.1% @ $23.80); 43.7% at low @ $1.79

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0.1 (independent): **55** (Max) — #8 in class; below GPT-6 Astra (57), Claude Opus 5.5 (58), Gemini 4 Carbon (59); effort variants: Xhigh 52, High 50, Medium 46, Low 35
- GDP.pdf (OpenAI): **31.0%** at max (@ $0.42/task) — ties GPT-6 Astra (31.0% @ $2.08), above Opus 5.5 w/ fallbacks (26.2% @ $1.55)
- Factuality (OpenAI, flagged-error conversations): error share 7.7% at low (vs GPT-6 Sol 11.4%), 4.5% high, 4.6% max; within 1.9pp of Astra across settings (Astra: 6.3% low → 3.9% max)
- GPQA Diamond: no verified public score found for GPT-6.1 Sol

Coding:

- DeepSWE v1.1 (OpenAI): **71.9%** at max (@ $1.57/task) vs GPT-6 Astra 73.2% @ $7.50; best point **75.2%** at high effort (@ $0.65) — above GPT-6 Astra's own best (74.1% @ xhigh); eclipses GPT-6 Sol best (68.8%) by 6.4pp
- Terminal-Bench 4.0 / FrontierCode: no standalone verified public scores found (these feed the AA index composite; no per-eval split published for Sol)

Long context:

- 1.05M-token context window (OpenAI docs); no verified long-context retrieval benchmark scores published

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong agentic tool results: AutomationBench beats Opus 5.5 at medium and OSWorld 2.0 comes within 2.1pp of Astra at ~1/7 cost; Terminal-Bench Science trails both leaders. All figures are OpenAI's own runs (no independent reproduction), which caps the score.
- **Reasoning: 86/100.** Independent AA Intelligence Index 55 (Max) puts it just below Astra/Opus/Carbon; factuality improved sharply (7.7% error at low effort) and GDP.pdf ties Astra at max; not top-tier on raw index.
- **Context window: 95/100.** 1.05M verified by OpenAI docs and Artificial Analysis; note 272K+ long-prompt surcharge and 500K default in Codex/ChatGPT Work.
- **Multimodal: 75/100.** Text + image input with text output only — real multimodal input but narrower than rivals with video/speech input, and no multimodal output.
- **Coding: 89/100.** DeepSWE v1.1 max 71.9% (1.3pp behind Astra at 21% of cost) and high-effort best 75.2% (above Astra's best); strong agentic coding value. Capped because Astra retains the lead on most suites and independent coding-bench splits are unavailable.
- **Cost efficiency: 80/100.** $2/$10 with $0.10 cached input (95% off); AA cost/task $1.27 vs Astra $6.25 — exceptional value for near-frontier intelligence; still paid, and long-context surcharges apply above 272K.
- **Overall Score: 86/100.** Mean of the five non-cost dims (87+86+95+75+89)/5 = 86.4 → 86. Best-fit: best price-performance frontier model for coding/computer-use agents; near-Astra at one-fifth cost, just below the top overall intelligence tier.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: Introducing GPT-6.1 Sol (official)](https://openai.com/index/introducing-gpt-6-1-sol/)
  - [OpenAI API docs: GPT-6.1 Sol model page](https://developers.openai.com/api/docs/models/gpt-6.1-sol)
  - [Artificial Analysis: GPT-6.1 Sol release intelligence/performance/price](https://artificialanalysis.ai/models/releases/gpt-6-1-sol)
  - [Artificial Analysis: GPT-6.1 Sol (Max) model page](https://artificialanalysis.ai/models/gpt-6-1-sol)
  - [OrcaRouter: GPT-6.1 Sol benchmarks — every number OpenAI published (independent critique of vendor-run numbers)](https://www.orcarouter.ai/blog/gpt-6-1-sol-vendor-benchmarks)
  - [BenchLM: GPT-6.1 Sol benchmarks & pricing](https://benchlm.ai/models/gpt-6-1-sol)
  - [AI Release Tracker: GPT-6.1 Sol specs/release](https://aireleasetracker.com/model/openai/gpt-6.1-sol)
- Future sources: add a new file next to this one using the same headings.
