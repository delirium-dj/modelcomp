# LongCat 2.5 Preview — findings by Fledge Alpha

- Source: Meituan (`meituan/longcat-2.5-preview`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's flagship preview: a 1.6T-parameter (~48B active) sparse MoE with native 1M-token multimodal context, aimed at long-horizon software agents (terminal, browser, GUI, spreadsheets, design tools). Adds native image understanding over LongCat 2.0.
- **Provider / access:** LongCat API platform (OpenAI- and Anthropic-compatible endpoints), Vercel AI Gateway `meituan/longcat-2.5-preview`, AnyRouter (BYOK), longcat.chat web. Integrations named: Codex, OpenCode, OpenClaw, CatPaw, Claude Code, Hermes, Kilo Code.
- **Release / knowledge:** 2026-09-25 (Meituan LongCat on X, Pandaily, AnyRouter release log).
- **IDs:** `meituan/longcat-2.5-preview` (no Free ID on Zen found; OpenCode carried a free promo window at launch per earlier coverage)
- **Context window:** 1M (native, LSA sparse attention); max output 128K (CloudPrice lists 131K).
- **Modalities:** text + image in (native multimodal understanding); text out; optional thinking mode; function calling; prompt caching.
- **Pricing (as of 2026-10-08):** list $0.75 input / $2.95 output per 1M ($0.015 cached read); limited-time preview discount $0.30 / $1.20 ($0.006 cached) (AnyRouter, CloudPrice).
- **Architecture:** ~1.6T total / ~48B active sparse MoE with LongCat Sparse Attention (Pandaily, AnyRouter).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau suite / AutomationBench: no verified public score found (Meituan published no scorecard this round — Pandaily)

Reasoning / knowledge:

- GPQA / HLE / AA Intelligence Index: no verified public score found

Coding:

- AI Coding Daily LLM Coding Leaderboard: **44.25 / 60 points**, #45 (evaluated 2026-09-28 with OpenCode; Laravel 16.98/20, React-TS 16.67/20; between Sonnet 5 Medium 44.55 and Kimi K2.7 Code 43.28)
- The "88.6% SWE-bench Lite" figure circulating from an APIVALE blog remains uncorroborated marketing — not counted.

Long context:

- Native 1M-token window (Meituan); no MRCR/RULER public number found.

### Normalized scores (1–100)

- **Tool use: 70/100.** Explicit agentic-workflow targeting (terminal/browser/GUI) with broad harness integrations; capped by the absence of any published agentic benchmark row.
- **Reasoning: 68/100.** Thinking toggle on a 1.6T MoE, but zero public reasoning scores; provisional pending independent evals.
- **Context window: 90/100.** Native 1M window with sparse attention and 128K output — flagship-tier on paper; capped slightly pending retrieval measurements.
- **Multimodal: 62/100.** Native image understanding added over 2.0; text-only output, no audio/video, and vendor's own API sample still lists text-only input modalities.
- **Coding: 72/100.** 44.25/60 on AI Coding Daily's independent OpenCode-run leaderboard (#45, on par with Sonnet 5 Medium) — the one verified score; single-harness evidence caps it.
- **Cost efficiency: 80/100.** Promo $0.30/$1.20 (list $0.75/$2.95) with near-free cache reads is very cheap for a 1M-context flagship preview.
- **Overall Score: 72/100.** Mean of (70, 68, 90, 62, 72) = 72.4 → 72. Best fit: long-context agentic coding pilots where preview pricing and the 1M window outweigh missing third-party validation.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Pandaily, AnyRouter release log, CloudPrice, AI Coding Daily leaderboard, Meituan LongCat on X); scores are normalized 1–100 interpretations, not official vendor scores. Supersedes my 2026-10-02 self-exclusion: AI Coding Daily's 2026-09-28 independent leaderboard row (44.25/60, OpenCode harness) is the first verified third-party score.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
