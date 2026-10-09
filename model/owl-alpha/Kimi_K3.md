# Owl Alpha — findings by Kimi K3

- Source: Stealth (OpenRouter) → revealed: Meituan LongCat-2.0 (`openrouter/owl-alpha`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha — **revealed identity: Meituan LongCat-2.0 (Preview phase)**
- **Short description:** Anonymous free stealth model that appeared on OpenRouter 2026-04-28 with native tool calling and a 1M-token context; Meituan confirmed on 2026-06-29 that Owl Alpha is LongCat-2.0's preview deployment. The full LongCat-2.0 launched 2026-06-30; MIT open weights followed 2026-07-12. Alias of `longcat-2.0`.
- **Provider / access:** OpenRouter `openrouter/owl-alpha` (free stealth endpoint, usage data feeds tuning); named route `openrouter/meituan/longcat-2.0`; LongCat API; HF/GitHub `meituan-longcat/LongCat-2.0`. Works with Claude Code and OpenClaw clients.
- **Release / knowledge:** stealth 2026-04-28; identity confirmed 2026-06-29; GA 2026-06-30 (tech.meituan.com). Knowledge cutoff not published.
- **IDs:** `openrouter/owl-alpha` (stealth); `meituan/longcat-2.0` (named). No OpenCode Zen Free ID verified; the stealth endpoint itself is free.
- **Context window:** 1,048,576 tokens native — the flagship claim.
- **Modalities:** text in → text out; native tool calling; reasoning tokens observed (up to 74.9K on a single SVG masterpiece run); no image/audio input documented.
- **Pricing (as of 2026-10-09):** stealth endpoint free; named LongCat-2.0 API $0.30 / $1.20 per 1M (Artificial Analysis, 2026-09-28); MIT weights for self-host.
- **Architecture:** LongCat-2.0 = 1.6T total / ~48B active per token MoE, native 1M context (Meituan tech announcement via stealthmodels).

### Raw benchmarks found

(Artificial Analysis, 2026-09-28, testing the June full release under its revealed name LongCat-2.0, no tools; via stealthmodels comparison)

Reasoning / knowledge:

- GPQA Diamond: **78.0%** (vs Gemini 3.1 Pro 94.1, DeepSeek V4 Flash 90.8 — 6th of 7 in cohort)
- HLE (no tools): **33.7%** (3rd of 7; ahead of Qwen3.6-27B 23.1, Gemma 4 31B 23.6, MiMo-V2.5 27.2, MiniMax M2.7 29.6)
- AA Intelligence Index / CritPt / AA-Omniscience: no public row surfaced

Coding:

- SciCode: **36.3%** (lowest of the 7-model AA cohort)
- Community/stealth evaluation: strong agentic coding reputation (Claude Code/OpenClaw workflows; SVG "pelican" run spent 74,875 reasoning tokens on one image); no SWE-bench/LiveCodeBench public number found
- Benchable: 99% success rate across 8 reliability benchmarks

Long context:

- AA-LCR: **65.0%** (lowest of the comparison cohort; solid but below MiniMax M2.7 78.3 / DSV4-Flash 79.7)

Agentic: tool calling native and vendor-designed for long-horizon agents; no Tau3/Tau2 public row found.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 70/100.** Native tool calling + 1M context + agent-client support is its design center; capped — no Tau/BFCl/MCP public numbers, and reliability evidence is anecdotal.
- **Reasoning: 72/100.** HLE 33.7% no-tools is respectable for the open class; GPQA 78.0% trails the cohort; no CritPt/AA-Index composite surfaced.
- **Context window: 88/100.** Native 1M window (the headline feature) with AA-LCR 65% — genuinely usable, though not best-in-class retrieval.
- **Multimodal: 15/100.** Text-only in/out (SVG code output notwithstanding) — methodology floor.
- **Coding: 68/100.** Built and marketed for coding agents; SciCode 36.3% is weak and no SWE-bench run is public; real-world agentic reports positive.
- **Cost efficiency: 92/100.** Free stealth access (data-for-training trade), $0.30/$1.20 named API, MIT weights June–July 2026 — extremely cheap at this capability.
- **Overall Score: 63/100.** Mean of 70/72/88/15/68 = 62.6 → 63. Best fit: free/near-free long-context coding agents (repo-scale, Claude Code/OpenClaw) that can accept a preview-stage model; revealed identity: track `longcat-2.0` for post-GA numbers.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (stealthmodels.com Owl Alpha dossier incl. Meituan identity confirmation and Artificial Analysis July/Sept data, OpenRouter listing, headsupai.io and toastyst launch coverage, benchable.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
