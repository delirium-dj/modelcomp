# Claude Opus 4.8 — findings by Muse Spark 1.3 Contributor

- Source: Anthropic/Claude Opus 4.8, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: catalog absolutes added, 200K claim corrected to 1M, scores recomputed 79 → 86); re-verified 2026-09-29 (UTC, user-signed-off re-research: TB 74.6% corrected 2.0 → 2.1, MCP-Atlas 82.2% + OSWorld-Verified 83.4% + HLE split + fast-mode pricing added — scores unchanged)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 (Anthropic flagship 4.8)
- **Short description:** Anthropic's flagship 4.8 reasoning model with advanced multi-step execution, deep code architecture comprehension, and long-horizon thinking.
- **Provider / access:** Anthropic via API `claude-opus-4-8` + Claude Code; no Zen Free ID (Messages API, max thinking, batched tool calls, MCP).
- **Release / knowledge:** 2026-05-28 release (ApX model record); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `anthropic/claude-opus-4.8` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M total — verified via ApX model record (corrects filed 200K claim; amended 2026-09-27).
- **Modalities:** text, image in; text out; reasoning yes (max thinking); tool calls yes; computer use yes
- **Pricing (as of 2026-09-18):** Paid $5 in / $25 out per 1M (Anthropic chart pricing); Fast mode $10/$50 (2.5x speed, 3x cheaper than prior-gen fast tier — re-verified 2026-09-29)
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1588 Elo (max)** (Artificial Analysis 1.2 article: Opus 4.8 max 1588 trails 1.2 at 1631)
- OSWorld-Verified: **83.4%** (Anthropic launch, revised harness); OSWorld 2.0: **55.7%** (eesel launch table; replaces stale-harness 20.6%/54.8% paper-context figures — re-verified 2026-09-29)
- BrowseComp: **84.3%** (BenchLM mirror; replaces filed 86.8% Opus-class proxy)
- Terminal-Bench 2.1: **74.6%** (Anthropic launch, Terminus-2 harness; version corrected 2.0 → 2.1 on re-verification 2026-09-29 — TB moved 2.0→2.1 at 4.8)
- Terminal-Bench 4.0: **23.6%** (tbench.ai #7) and **3.0 21.1%** (BenchLM mirror) — weak new-gen tails
- DeepSearchQA: **93.1%** (BenchLM mirror)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas: **82.2%** (Anthropic launch; vs 4.7 77.3% — re-verified 2026-09-29)
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (llm-stats #6; ApX 0.936 #4)
- HLE: **57.9% with tools / 49.8% without** (Anthropic launch; +3.2/+2.9 over 4.7 — re-verified 2026-09-29)
- FrontierMath Tier 4: **31.25%** (BenchLM mirror)
- LiveBench Reasoning: **0.89** (ApX); **Math 0.94 / Global 0.76** (ApX)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **0.57 / 57** (ApX max row)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **88.6% SWE-bench Verified** (BenchLM mirror); **69.2% SWE-bench Pro** (public lane #6); **84.4% Multilingual / 38.4% Multimodal** (BenchLM mirrors)
- LiveCodeBench: **0.82 LiveBench Coding** (ApX)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **59.0% DeepSWE** (DeepSWE v1.1 board); **0.928 StackUnseen** (ApX); **0.74 Coding Index** (ApX); **cursorBench31 58.4% / cursorBench32 62.3%** (shared-source mirrors)

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 89/100.** TB2.1 74.6% plus BrowseComp 84.3%, OSWorld-Verified 83.4%, MCP-Atlas 82.2% and GDPval 1588 show strong orchestration; capped by the TB4.0 23.6% tail and no Tau3 numbers.
- **Reasoning: 92/100.** GPQA 93.6% plus HLE 57.9%, AA 57 and LiveBench Reasoning 0.89 show strong flagship reasoning; capped by no LCR/CritPt numbers.
- **Context window: 100/100.** 1M verified (corrects filed 200K); top tier.
- **Multimodal: 60/100.** Text+image in, text out; mid coverage (unchanged).
- **Coding: 91/100.** SWE-V 88.6% plus SWE-Pro 69.2%, StackUnseen 0.928 and Coding Index 0.74 show elite 4.8 engineering; capped by no SciCode/Vibe numbers.
- **Cost efficiency: 45/100.** Paid $5/$25 premium; value only at flagship capability (unchanged).
- **Overall Score: 86/100.** Mean of the five non-cost dims (89+92+100+60+91)/5 = 86.4; best-fit premium flagship 4.8-generation pick — catalog absolutes now confirm it.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis 1.2 article, Anthropic announcements, OSWorld 2.0 paper context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
