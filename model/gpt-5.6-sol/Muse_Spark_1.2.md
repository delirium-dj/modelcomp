# GPT-5.6 Sol — findings by Muse Spark 1.2

- Source: OpenAI/gpt-5.6-sol (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship reasoning and coding specialist in the GPT-5.6 family (unsuffixed `gpt-5.6` alias routes to Sol); SOTA on coding agent benchmarks.
- **Provider / access:** OpenAI API `gpt-5.6-sol` / `gpt-5.6`; OpenCode Zen `openai/gpt-5.6-sol` — Chat Completions + Responses API (reasoning.effort: none/low/medium/high/xhigh/max, plus ultra 4-agent)
- **Release / knowledge:** 2026-07-09 GA (preview June 2026); knowledge cutoff 2026-02-16 (per developers.openai.com)
- **IDs:** `openai/gpt-5.6-sol` (and alias `openai/gpt-5.6`)
- **Context window:** 1M / 128K out (per site architecture; 272K cited for Sol family in some trackers, 1M via meta for sister tiers) — verified via OpenAI API docs and meta.json 1M /128K
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes; computer use yes; code interpreter yes
- **Pricing (as of 2026-09-23):** Paid $4/$20 per 1M in/out (promotional through 2026-11-21, 20% input /33% output reduction); no Zen Free ID
- **Architecture:** Proprietary (MoE — speculated)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8% (91.9% ultra)** — SOTA, #1 of 65 on Terminal-Bench 2.0 leaderboard; vs Claude Mythos 5 88.0%, Terra 87.4%, Fable 5 84.3% (source: OpenAI GPT-5.6 launch table, Artificial Analysis articles 2026-07-09, benchlm.ai, Traictory)
- Terminal-Bench 4.0: **37.3%** (public leaderboard, Codex agent, max effort ±3.8%) (source: Traictory)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (no isolated Tau2 telecom for Sol published; Artificial Analysis notes Telecom proxy via Coding Agent Index harness variance)
- GDPval-AA: **no verified EL0 isolated for Sol** — proxied via AA Coding Agent Index cost analysis (see Reasoning)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (SWE Atlas QnA tied with Grok 4.5 per AA but no standalone Toolathon number for Sol)

Reasoning / knowledge:

- GPQA Diamond: **no verified isolated GPQA for Sol found** — closest proxy is Intelligence Index reasoning component
- HLE: **no verified public HLE for Sol found** (vendor did not publish HLE; closest is HealthBench and SecureBio)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **59** (AA Intelligence Index, Sol max 59 vs Claude Fable 5 max ~60, Terra 55, Luna 51 — at 1/3 cost per task) (source: Artificial Analysis 2026-07-09)
- Omniscience Accuracy / Hallucination Rate: **no verified AA-Omniscience isolated for Sol found** — hallucination rate reduced ~60% vs GPT-5.5 Instant on OpenAI prompt sets per AI/TLDR summary

Coding:

- SWE-bench Verified / SWE-Pro: **64.6% SWE-Bench Pro** (Sol) vs Terra 63.4% / Luna 62.7% / GPT-5.5 59.4% / Claude Mythos 5 80.3% (SWE-Bench Verified ~80% tier per OpenAI) (source: OpenAI launch table, NxCode, aireleasetracker)
- LiveCodeBench: **no verified public score found** (LCB not in OpenAI launch table for Sol)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **72.7% DeepSWE v1.1** (Sol) vs Terra 69.6% / Luna 67.2% / Fable 5 69.7% (source: OpenAI launch table); **80 AA Coding Agent Index v1.1** (Sol max) #1, vs Fable 5 77.2 / Opus 4.8 72.5 (source: Artificial Analysis 2026-07-09, OpenAI)

Long context:

- 1M /128K out — no MRCR/RULER at max window publicly disclosed for Sol; vendor positions 1M with ultra multi-agent for long-horizon tasks

### Normalized scores (1–100)

- **Tool use: 93/100.** Terminal-Bench 2.1 88.8% (91.9% ultra) SOTA #1 + Coding Agent Index 80 leading all three sub-evals (DeepSWE 72.7%, TB2.1, SWE Atlas QnA); capped by missing Tau2/GDPval isolation and TB 4.0 37.3% on different harness.
- **Reasoning: 89/100.** AA Intelligence Index 59 (1 point below Fable 5 at 1/3 cost) shows frontier reasoning; capped by missing HLE/GPQA isolated scores and no LCR disclosure.
- **Context window: 96/100.** 1M /128K out tier (95-100 for ≥1M) — verified; capped below 100 absent MRCR 1M pointwise numeric.
- **Multimodal: 60/100.** Text, image in; text out (per OpenAI docs); no video/audio in, so image-only tier 60-70.
- **Coding: 95/100.** SWE-Bench Pro 64.6% + DeepSWE 72.7% + TB 2.1 88.8% + Coding Index 80 SOTA; near-top across all coding slices, capped by Claude Mythos 5 SWE-Bench ~80% industrial lead on some scaffolds.
- **Cost efficiency: 58/100.** Paid $4/$20 per 1M (promotional) — mid-flagship pricing, ~1/3 cost per task vs Fable 5 per AA, but no Free tier.
- **Overall Score: 87/100.** Mean of five non-cost dims (93+89+96+60+95)/5=86.6 → 87; best-fit for agentic coding at scale where speed/cost advantage over Fable matters.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (OpenAI GPT-5.6 launch page, developers.openai.com, Artificial Analysis 2026-07-09, benchlm.ai, Traictory, AI/TLDR); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
