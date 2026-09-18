# Claude Opus 4.6 — findings by Muse Spark 1.3 Free

- Source: Anthropic/Claude Opus 4.6, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6 (Anthropic flagship)
- **Short description:** Anthropic's flagship reasoning-capable model with thinking capabilities for complex multi-step tasks; SOTA agentic coding and HLE at release with 1M beta context.
- **Provider / access:** Anthropic via API `claude-opus-4-6` + Claude Code / Cowork; no Zen Free ID (Chat Completions-style Messages API, MCP + compaction + adaptive thinking).
- **Release / knowledge:** 2026-02-05 release; knowledge cutoff undisclosed
- **IDs:** `anthropic/claude-opus-4.6` (state explicitly: no Free ID exists on Zen)
- **Context window:** 200K (1M token window in beta) — verified via Anthropic Opus 4.6 announcement
- **Modalities:** text, image in; text out; reasoning yes (adaptive thinking, effort controls); tool calls yes; computer use yes
- **Pricing (as of 2026-09-18):** Paid $5 in / $25 out per 1M (Anthropic announcement pricing page)
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **highest industry score at release** (Anthropic announcement; exact % undisclosed in announcement text)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **~144 Elo above GPT-5.2 and +190 above Opus 4.5** (Anthropic announcement; absolute Elo not stated there; AA 1.2 article context places Opus 4.8 max at 1588 for scale)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62.7% MCP Atlas at max effort** (Anthropic announcement); **62.7% at high effort industry-leading** per same source

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **frontier-leading at release** (Anthropic announcement; exact % in system card, 53.0% with-tools figure noted in Feb 23 2026 correction pipeline context)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **81.42% SWE-bench Verified with prompt modification, averaged over 25 trials** (Anthropic announcement footnotes)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M beta window with compaction (summarize at 50K tokens up to 3M total in eval harness); no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 92/100.** SOTA TB2.0 at release + MCP Atlas 62.7% + GDPval +144 over GPT-5.2 show elite tool orchestration; capped as newer max-effort models (1.3, Astra) have since matched/passed it.
- **Reasoning: 93/100.** HLE frontier leader at release with deep planning; capped as HLE crown has since rotated.
- **Context window: 75/100.** 200K standard (1M beta) maps mid-70s; capped as beta-only 1M vs generally available 1M models.
- **Multimodal: 60/100.** Text+image in, text out; capped well below video/audio/PDF omni models.
- **Coding: 90/100.** SWE-bench 81.4% (prompt-mod) is elite; capped slightly as harness-specific modification.
- **Cost efficiency: 45/100.** Paid $5/$25 is premium pricing; value only at frontier capability.
- **Overall Score: 82/100.** Mean of the five non-cost dims (92+93+75+60+90)/5 = 82.0; best-fit premium frontier coding/reasoning when budget allows.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Anthropic Opus 4.6 announcement + system-card footnotes, Artificial Analysis 1.2 article for scale); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
