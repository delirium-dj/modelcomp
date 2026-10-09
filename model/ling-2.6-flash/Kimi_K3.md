# Ling-2.6-Flash — findings by Kimi K3

- Source: inclusionAI / Ant Group (`ling-2.6-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-Flash
- **Short description:** inclusionAI's efficiency-first instant (instruct) flash model, released 2026-04-21 under MIT: a highly sparse 104B-total / 7.4B-active MoE converted from the Ling-2.0 generation via a Lightning-Attention migration pipeline. Prioritizes token economy over depth.
- **Provider / access:** OpenRouter `inclusionai/ling-2.6-flash`; Hugging Face `inclusionAI/Ling-2.6-flash` (+ `-base`); Opper gateway. Chat Completions, instant (non-thinking) class.
- **Release / knowledge:** 2026-04-21 (OpenRouter); knowledge cutoff not published.
- **IDs:** `inclusionai/ling-2.6-flash` (OpenRouter), `inclusionAI/Ling-2.6-flash` (HF). No OpenCode Zen Free ID verified (near-free anyway).
- **Context window:** 262,144 tokens (OpenRouter).
- **Modalities:** text in → text out; tool calling supported; no thinking tier (instant class).
- **Pricing (as of 2026-10-09):** **$0.01 / $0.03 per 1M in/out** (benchmarklist panel) — basement pricing; MIT open weights for self-host.
- **Architecture:** 104B total / 7.4B active sparse MoE via Ling-2.0→2.6 Lightning-Attention migration (HF base card).

### Raw benchmarks found

(BenchmarkList consolidated table; all rows independently sourced: AA-verified or public leaderboards)

Agent / tool use:

- Tau2-Bench Telecom: **86.0%** (#72/332; AA)
- Tau3-Banking: **2.9%** (#164/176 — failure-level; AA-verified)
- Terminal-Bench Hard: **21.2%** (#104/326); ClawProBench: **27.04** (pass^3 2.4%)
- GDPval-AA: **547 Elo** (#225/352; AA)

Coding:

- Terminal-Bench 2.1: **24.3%** (#125/194); SciCode: **27.1%**; AA Coding Index: **25.26** (AA bundle)
- SWE-bench / LiveCodeBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **59.3%** (#273/468); HLE: **6.3%**; CritPt: **0.0%**
- AA Intelligence Index: **14.05** (#221/427); AA-Omniscience: **-65.7** (strongly negative factual reliability); ObviousBench pass³ **57.6%**

Long context:

- AA-LCR: **31.3%** (#251/408) — weak retrieval despite the 262K window.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 48/100.** Tau2-Telecom 86.0% shows basic tool-call ability, but Tau3-Banking 2.9% and ClawProBench 27 collapse under multi-step pressure.
- **Reasoning: 40/100.** GPQA 59.3% is entry-level-mid; HLE 6.3%, CritPt 0%, and a deeply negative Omniscience (-65.7) mark thin knowledge and high hallucination risk.
- **Context window: 52/100.** 262K window on paper; AA-LCR 31.3% shows the model can't exploit it for retrieval reasoning.
- **Multimodal: 15/100.** Text-only — methodology floor.
- **Coding: 42/100.** TB2.1 24.3% / SciCode 27.1% / Coding Index 25.3 — light-duty only.
- **Cost efficiency: 97/100.** $0.01/$0.03 hosted + MIT weights — essentially free at flash scale; the one unambiguous strength.
- **Overall Score: 39/100.** Mean of 48/40/52/15/42 = 39.4 → 39. Best fit: ultra-cheap, short, well-scoped text tasks (triage, formatting, simple CQ&A) where per-token cost dominates; superseded by Ling-3.0-Flash for anything serious.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (benchmarklist.com consolidated table with AA-verified + public-leaderboard rows, OpenRouter, HF base card, opper.ai, benchable.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
