# Claude Opus 4.6 — findings by Muse Spark 1.3 Contributor

- Source: Anthropic/Claude Opus 4.6, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-09 (UTC) — second-pass refresh (prior Signature 2026-09-18, amended 2026-09-27: BenchLM absolutes added, 200K corrected to 1M, 82 → 89; new: launch-page harness details, AA composite + speed + blended cost, GDPval scale fix)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6 (Anthropic flagship)
- **Short description:** Anthropic's flagship reasoning-capable model with thinking capabilities for complex multi-step tasks; SOTA agentic coding and HLE at release with 1M beta context.
- **Provider / access:** Anthropic via API `claude-opus-4-6` + Claude Code / Cowork; no Zen Free ID (Chat Completions-style Messages API, MCP + compaction + adaptive thinking).
- **Release / knowledge:** 2026-02-05 release (Anthropic announcement page); knowledge cutoff undisclosed.
- **IDs:** `anthropic/claude-opus-4.6` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M tokens in beta (first for Opus-class; launch announcement) / 128K max output GA — verified via Anthropic announcement + AA model page (corrects filed 200K-standard claim; amended 2026-09-27, confirmed 2026-10-09).
- **Modalities:** text, image in; text out; reasoning yes (adaptive thinking, max/high effort controls); tool calls yes (web search, web fetch, code execution, programmatic tool calling); computer use yes
- **Pricing (as of 2026-10-09):** Paid $5 in / $25 out per 1M (Anthropic pricing page, unchanged since launch); AA blended 7:2:1 cache/input/output ratio ≈ $3.85/1M; cache writes $6.25/1M with 5-min TTL, cache hits $0.5/1M (90% discount, per 4.8 article same family terms).
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

> Compared against prior findings (2026-09-18/27, Overall 89): new verified evidence below — vendor launch-page harness details, AA composite + speed + blended-cost figures, GDPval scale correction. Gaps closed: AA Intelligence Index composite (26, non-reasoning lane), output speed (40.8 tok/s), blended cost ($3.85/1M); GDPval restated at vendor units (144 Elo margin, not absolute).

Agent / tool use:

- Terminal-Bench 2.0: **highest industry score at release** (Anthropic Opus 4.6 announcement); **65.4%** (BenchLM mirror)
- BrowseComp: **best of all frontier models at release; 86.8% with multi-agent harness** (Anthropic announcement); **83.7%** (BenchLM mirror)
- OSWorld-Verified: **72.7%** (BenchLM mirror; Qwen card confirms same figure)
- Claw-Eval: **70.4%** (BenchLM mirror)
- JobBench: **36.7%** (BenchLM mirror)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **~144 Elo points above GPT-5.2 and +190 above Opus 4.5** (Anthropic announcement, vendor-reported margin — the prior report's "~144 Elo absolute" phrasing was a scale error, corrected 2026-10-09; absolute scale: Opus 4.8 at 1890 Elo, AA May 2026)
- Claw-Eval: see **70.4%** row above (BenchLM mirror)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62.7% MCP Atlas at max effort** (Anthropic announcement); **62.7% at high effort industry-leading** per same source

Reasoning / knowledge:

- GPQA Diamond: **91.3%** (BenchLM mirror); **89.2% GPQA-D** and **95% SuperGPQA** (BenchLM mirrors)
- HLE: **53.0% with tools** (Anthropic announcement; Feb 23 2026 footnote: revised 53.1% → 53.0% after improved cheating-detection flagged 3 more instances; harness: web search + fetch + code execution, compaction at 50K up to 3M total, max effort, adaptive thinking, domain blocklist)
- MMMU-Pro: **77.3%** (BenchLM mirror); **ScreenSpot Pro 83.1%**, **ERQA 51.6%**, **MedXpertQA-MM 64.8%** (BenchLM mirrors)
- Artificial Analysis Intelligence Index: **26** (AA Opus 4.6 non-reasoning/high model page, Oct 2026 — NEW, closes prior gap; #4/61 in non-reasoning class lane, estimate pending independent eval; class median 15)
- AA model-page speed/cost context (NEW): **40.8 output tok/s** (Anthropic API measurement; class median 68.3 — notably slow); TTFT 2.06s (median 1.14s)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **81.42% SWE-bench Verified with prompt modification, averaged over 25 trials** (Anthropic announcement footnotes); **80.8% mirror lane** (75.6% second lane); **53.4% SWE-bench Pro** (BenchLM mirror); **65.3% SWE-Rebench** (BenchLM mirror)
- LiveCodeBench Pro: **70.7%** (BenchLM mirror)
- React Native Evals: **84.1%** (BenchLM mirror); **Vibe Code Bench 57.57%** (BenchLM mirror); **FrontierCode 1.1 Main 26.9%** (BenchLM mirror — weak tail)
- SWE-bench Lite: **62.7% (#1)** (pricepertoken/LayerLens leaderboard)
- Terminal-Bench 2.1: **78.2%** (Qwen model card cross-table); **NL2Repo 47.6% / IFBench 62.5% / AndroidWorld 62.0%** (same cross-table)
- ARC AGI 2: run at max effort, 120K thinking budget (Anthropic footnote — absolute score not stated on launch page; no verified public score found)
- SciCode / AA-SciCode: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M beta window with compaction (summarize at 50K tokens up to 3M total in HLE eval harness, up to 10M total in BrowseComp harness); no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 93/100.** TB2.0 65.4% plus BrowseComp 83.7%, OSWorld 72.7%, Claw-Eval 70.4% and MCP Atlas 62.7% show broad orchestration; capped by no Tau/GDPval-absolute numbers.
- **Reasoning: 94/100.** GPQA 91.3% plus HLE 53.0% (cheating-pipeline-corrected), SuperGPQA 95% and MMMU-Pro 77.3% show strong flagship reasoning, now anchored by AA Index 26 (#4 non-reasoning lane); capped by no LCR/CritPt/Omniscience numbers.
- **Context window: 97/100.** 1M beta / 128K out GA, first 1M for Opus-class (confirmed on launch page + AA page); capped below 100 with no retrieval-saturation proof.
- **Multimodal: 68/100.** Text+image in with MMMU-Pro 77.3%, ScreenSpot Pro 83.1% and MedXpert 64.8% measured; capped at image-only with text out.
- **Coding: 92/100.** SWE-V ~81% plus SWE-Pro 53.4%, LiveCode Pro 70.7%, SWE-Lite 62.7% (#1), React Native 84.1% and TB2.1 78.2% show broad engineering; capped by no DeepSWE/SciCode numbers and the FrontierCode 26.9% tail.
- **Cost efficiency: 42/100.** Paid $5/$25 headline (blended ≈ $3.85/1M) with slow 40.8 tok/s output — premium price at below-median speed; value only at frontier capability (revised down from 45: speed evidence is new and negative).
- **Overall Score: 89/100.** Mean of the five non-cost dims (93+94+97+68+92)/5 = 88.8; best-fit premium frontier coding/reasoning when budget allows.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-09
- Method: second-pass refresh of the 2026-09-18 report (amended 2026-09-27): fresh public internet research (Anthropic Opus 4.6 launch announcement incl. footnotes/harness details + Feb 2026 HLE correction note, AA Opus 4.8 article for GDPval absolute scale, AA Opus 4.6 non-reasoning model page for Index composite + speed + blended cost); prior BenchLM absolutes retained; GDPval scale error corrected; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
