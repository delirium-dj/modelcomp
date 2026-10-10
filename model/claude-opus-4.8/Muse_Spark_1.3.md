# Claude Opus 4.8 — findings by Muse Spark 1.3 Contributor

- Source: Anthropic/Claude Opus 4.8, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-09 (UTC) — second-pass refresh (prior Signature 2026-09-18, amended 2026-09-27: catalog absolutes added, 200K corrected to 1M, 79 → 86; new: Anthropic launch announcement, AA 4.8 article composite + deltas + Omniscience + fast-mode pricing)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 (Anthropic flagship 4.8)
- **Short description:** Anthropic's flagship 4.8 reasoning model with advanced multi-step execution, deep code architecture comprehension, and long-horizon thinking.
- **Provider / access:** Anthropic via API `claude-opus-4-8` + Claude Code; no Zen Free ID (Messages API, max thinking, batched tool calls, MCP; effort control + dynamic workflows in Claude Code; fast mode at 2.5x speed).
- **Release / knowledge:** 2026-05-28 release (Anthropic announcement + AA article); knowledge cutoff undisclosed.
- **IDs:** `anthropic/claude-opus-4.8` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M total — verified via ApX model record + AA article (same as Opus 4.7; corrects filed 200K claim; amended 2026-09-27, confirmed 2026-10-09).
- **Modalities:** text, image in; text out; reasoning yes (max thinking); tool calls yes; computer use yes
- **Pricing (as of 2026-10-09):** Paid $5 in / $25 out per 1M regular (unchanged from Opus 4.7; Anthropic announcement); fast mode $10 in / $50 out per 1M (3x cheaper than prior fast modes); cache writes $6.25/1M (25% premium, 5-min TTL), cache hits $0.5/1M (90% discount).
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

> Compared against prior findings (2026-09-18/27, Overall 86): new verified evidence below — Anthropic launch announcement (fast mode, effort control, dynamic workflows, tester quotes, updated OSWorld-Verified methodology) and the AA May 2026 article (Index 61.4, GDPval 1890, HLE lead, Omniscience 27.4, TB-Hard/Tau2/IFBench deltas, token-efficiency data). Gaps closed: AA Intelligence Index composite, Omniscience accuracy/hallucination split, HLE leadership margin, GDPval absolute Elo; prior "no AA Index found" and stale 1588 figure superseded.

Agent / tool use:

- GDPval-AA v2: **1890 Elo at max effort, #1** (AA May 2026 article: +137 vs Opus 4.7, +121 ahead of GPT-5.5 xhigh ≈ 67% head-to-head win rate; 15% fewer turns/task and 35% fewer output tokens than Opus 4.7; replaces prior stale 1588 figure from the 1.2 article)
- Terminal-Bench Hard: **+6.8 points vs Opus 4.7** (AA article — NEW delta)
- OSWorld 2.0: **20.6% binary completion / 54.8% partial at 500 steps (best), ~318 tool calls avg** (OSWorld 2.0 paper context via BenchmarkList)
- BrowseComp: **84.3%** (BenchLM mirror; replaces filed 86.8% Opus-class proxy)
- Terminal-Bench 2.0: **74.6%** (BenchLM mirror)
- Terminal-Bench 4.0: **23.6%** (tbench.ai #7) and **3.0 21.1%** (BenchLM mirror) — weak new-gen tails
- Terminal-Bench 2.1: **no verified public score found**
- DeepSearchQA: **93.1%** (BenchLM mirror)
- Tau2-Bench Telecom: **+5.9 points vs Opus 4.7** (AA article — NEW delta; absolute Tau score still unreported: partial gap)
- IFBench: **+3.6 points vs Opus 4.7** (AA article — NEW delta)
- Online-Mind2Web: **84%** (Anthropic launch tester quote, strongest computer-use/browser-agent tested — NEW)
- CursorBench: **exceeds prior Opus models at every effort level, fewer steps for same intelligence** (Anthropic launch tester quote, Cursor CEO — NEW, qualitative)
- Tau3-Banking / Tau2-Bench absolute scores: **no verified public score found** (AA reports only the +5.9 Tau2-Bench Telecom delta, not an absolute)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (llm-stats #6; ApX 0.936 #4)
- HLE: **57.9%** (BenchLM mirror); **leads the frontier by ~1 point** vs OpenAI and Google (AA May 2026 article — NEW)
- FrontierMath Tier 4: **31.25%** (BenchLM mirror)
- LiveBench Reasoning: **0.89** (ApX); **Math 0.94 / Global 0.76** (ApX)
- LCR / MLCR: **no verified public score found**
- CritPt: **ranks above Gemini 3.1 Pro, behind GPT-5.4/GPT-5.5** (AA May 2026 article — NEW rank evidence; absolute score still unreported)
- Artificial Analysis Intelligence Index: **61.4, #1** (AA May 2026 article: +4.1 vs Opus 4.7, +1.2 ahead of GPT-5.5 xhigh; supersedes stale ApX 0.57/57 row)
- AA-Omniscience: **27.4 index, #2** behind Gemini 3.1 Pro (32.9); **accuracy 46.6% / hallucination rate 35.9%** (AA May 2026 article — NEW, closes prior gap)

Coding:

- SWE-bench Verified / SWE-Pro: **88.6% SWE-bench Verified** (BenchLM mirror); **69.2% SWE-bench Pro** (public lane #6); **84.4% Multilingual / 38.4% Multimodal** (BenchLM mirrors)
- LiveCodeBench: **0.82 LiveBench Coding** (ApX)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **59.0% DeepSWE** (DeepSWE v1.1 board); **0.928 StackUnseen** (ApX); **0.74 Coding Index** (ApX); **cursorBench31 58.4% / cursorBench32 62.3%** (shared-source mirrors)

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 91/100.** TB2.0 74.6% plus BrowseComp 84.3%, DeepSearchQA 93.1%, Online-Mind2Web 84% and GDPval-AA 1890 (#1) show elite orchestration; capped by the TB4.0 23.6% tail and no absolute TB2.1/Tau2 numbers.
- **Reasoning: 94/100.** GPQA 93.6% plus HLE 57.9% (frontier leader), AA Index 61.4 (#1) and CritPt above Gemini 3.1 Pro show strongest-in-class flagship reasoning; capped by no LCR numbers.
- **Context window: 100/100.** 1M verified (confirmed on AA article, same as Opus 4.7); top tier.
- **Multimodal: 60/100.** Text+image in, text out; mid coverage (unchanged — no new multimodal evidence).
- **Coding: 91/100.** SWE-V 88.6% plus SWE-Pro 69.2%, StackUnseen 0.928, Coding Index 0.74 and CursorBench exceeding prior Opus at every effort level show elite 4.8 engineering; capped by no SciCode/Vibe numbers.
- **Cost efficiency: 45/100.** Paid $5/$25 premium regular (fast mode $10/$50 is dearer); value only at flagship capability (unchanged).
- **Overall Score: 87/100.** Mean of the five non-cost dims (91+94+100+60+91)/5 = 87.2; best-fit premium flagship 4.8-generation pick — the AA composite and GDPval absolute now confirm it.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-09
- Method: second-pass refresh of the 2026-09-18 report (amended 2026-09-27): fresh public internet research (Anthropic Opus 4.8 launch announcement incl. fast-mode pricing, effort control, dynamic workflows and tester quotes; Artificial Analysis May 2026 Opus 4.8 article for Index 61.4, GDPval-AA 1890, HLE leadership, Omniscience 27.4 and TB-Hard/Tau2/IFBench deltas); prior BenchLM/ApX absolutes retained; stale GDPval 1588 and AA 57 rows superseded; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
