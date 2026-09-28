# Claude Opus 4.6 — findings by Muse Spark 1.3 Contributor

- Source: Anthropic/Claude Opus 4.6, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: BenchLM absolutes added, 200K claim corrected to 1M, scores recomputed 82 → 89)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6 (Anthropic flagship)
- **Short description:** Anthropic's flagship reasoning-capable model with thinking capabilities for complex multi-step tasks; SOTA agentic coding and HLE at release with 1M beta context.
- **Provider / access:** Anthropic via API `claude-opus-4-6` + Claude Code / Cowork; no Zen Free ID (Chat Completions-style Messages API, MCP + compaction + adaptive thinking).
- **Release / knowledge:** 2026-02-01 release (BenchLM record); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `anthropic/claude-opus-4.6` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M / 128K out GA — verified via Requesty/Anthropic catalog (corrects filed 200K-standard claim; amended 2026-09-27).
- **Modalities:** text, image in; text out; reasoning yes (adaptive thinking, effort controls); tool calls yes; computer use yes
- **Pricing (as of 2026-09-18):** Paid $5 in / $25 out per 1M (Anthropic announcement pricing page)
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** (BenchLM mirror; announcement claimed highest industry score at release)
- BrowseComp: **83.7%** (BenchLM mirror)
- OSWorld-Verified: **72.7%** (BenchLM mirror; Qwen card confirms same figure)
- Claw-Eval: **70.4%** (BenchLM mirror)
- JobBench: **36.7%** (BenchLM mirror)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **~144 Elo above GPT-5.2 and +190 above Opus 4.5** (Anthropic announcement; absolute Elo not stated there; AA 1.2 article context places Opus 4.8 max at 1588 for scale)
- Claw-Eval: see **70.4%** row above (BenchLM mirror)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62.7% MCP Atlas at max effort** (Anthropic announcement); **62.7% at high effort industry-leading** per same source

Reasoning / knowledge:

- GPQA Diamond: **91.3%** (BenchLM mirror); **89.2% GPQA-D** and **95% SuperGPQA** (BenchLM mirrors)
- HLE: **53%** (BenchLM mirror — confirms filed 53.0% correction-pipeline figure)
- MMMU-Pro: **77.3%** (BenchLM mirror); **ScreenSpot Pro 83.1%**, **ERQA 51.6%**, **MedXpertQA-MM 64.8%** (BenchLM mirrors)
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
- SciCode / AA-SciCode: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M beta window with compaction (summarize at 50K tokens up to 3M total in eval harness); no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 93/100.** TB2.0 65.4% plus BrowseComp 83.7%, OSWorld 72.7%, Claw-Eval 70.4% and MCP Atlas 62.7% show broad orchestration; capped by no Tau/GDPval-absolute numbers.
- **Reasoning: 94/100.** GPQA 91.3% plus HLE 53%, SuperGPQA 95% and MMMU-Pro 77.3% show strong flagship reasoning; capped by no LCR/CritPt numbers.
- **Context window: 97/100.** 1M / 128K out GA (corrects filed 200K); capped below 100 with no retrieval-saturation proof.
- **Multimodal: 68/100.** Text+image in with MMMU-Pro 77.3%, ScreenSpot Pro 83.1% and MedXpert 64.8% measured; capped at image-only with text out.
- **Coding: 92/100.** SWE-V ~81% plus SWE-Pro 53.4%, LiveCode Pro 70.7%, SWE-Lite 62.7% (#1), React Native 84.1% and TB2.1 78.2% show broad engineering; capped by no DeepSWE/SciCode numbers and the FrontierCode 26.9% tail.
- **Cost efficiency: 45/100.** Paid $5/$25 is premium pricing; value only at frontier capability (unchanged).
- **Overall Score: 89/100.** Mean of the five non-cost dims (93+94+97+68+92)/5 = 88.8; best-fit premium frontier coding/reasoning when budget allows.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Anthropic Opus 4.6 announcement + system-card footnotes, Artificial Analysis 1.2 article for scale); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
