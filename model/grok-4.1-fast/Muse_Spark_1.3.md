# Grok 4.1 Fast — findings by Muse Spark 1.3

- Source: xAI/Grok 4.1 Fast (`xai/grok-4-1-fast-reasoning`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's frontier multimodal model optimized for high-performance agentic tool calling at budget pricing, shipped in reasoning and non-reasoning modes with native web/X search and code execution.
- **Provider / access:** xAI API `grok-4-1-fast-reasoning` (aliases `grok-4-1-fast`, `grok-4-1-fast-reasoning-latest`); OpenCode Zen `opencode/grok-4.1-fast` (scaffolded ID; API type not verified).
- **Release / knowledge:** 2026-11-19 release (xAI docs; Puter model page); knowledge cutoff Jul 2025 (Puter).
- **IDs:** `opencode/grok-4.1-fast` (Zen). No Free-tier Zen ID verified.
- **Context window:** 2,000,000 tokens (xAI docs; BenchLM; Puter). Max output not verified for the Zen ID.
- **Modalities:** Text, image in; text out; reasoning yes (reasoning + non-reasoning modes); function calling and structured outputs yes (xAI docs; Puter).
- **Pricing (as of 2026-10-04):** $0.20/M input, $0.05/M cached, $0.50/M output (xAI docs; BenchLM pricing page agrees $0.20/$0.50, 2M). Live-search lookups billed per source on xAI directly — not part of the token score.
- **Architecture:** Proprietary (xAI) — no verified parameter count, MoE status, or license found.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** for this exact ID
- Tau3-Banking / Tau2-Bench: τ²-bench **93.3%** (BenchLM `grok-4-1-fast-reasoning` agentic lane)
- GDPval-AA: **no verified public score found** (Artificial Analysis lists the AA Index for this model as estimated, independent evaluation forthcoming)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**; adjacent agent signal: Gert Labs **47.32%** (BenchLM non-reasoning lane)

Reasoning / knowledge:

- GPQA Diamond: AA-GPQA Diamond **85.3%** (BenchLM; pricepertoken aggregator agrees 85.3)
- HLE: AA-HLE **19.3%** (BenchLM; Artificial Analysis comparison page agrees 19%)
- LCR / MLCR: AA-LCR **74.0%** (BenchLM; Artificial Analysis comparison agrees 74%)
- CritPt: **2.9%** (BenchLM; Artificial Analysis comparison agrees 3%)
- Artificial Analysis Intelligence Index / BenchLM overall: AA Intelligence Index **20** (estimated, Artificial Analysis v4.3.2, independent evaluation forthcoming); BenchLM overall **45.6/100** (#96 of 512, partial 12-benchmark coverage, conservative)
- Omniscience Accuracy / Hallucination Rate: AA-Omniscience Accuracy **25.1%** / Hallucination Rate **73.4%**, Index **−29.9** (BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** for this exact ID (a tokenmix.ai benchmark roundup claims Grok 4.1 Fast trades ~8 points on SWE-bench versus Grok 4.20's 78% at a ~90% price cut — provisional press characterization, not a verified harness row)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **1.20%** (BenchLM coding lane)
- DeepSWE / Coding Index / other: pricepertoken aggregator coding **82.2**, MMLU **85.4** (secondary aggregator, methodology unverified — listed as provisional, not primary evidence)

Long context:

- No verified MRCR / RULER / GraphWalks retrieval-at-length score found; AA-LCR 74.0% is a reasoning-over-context score, not a pure retrieval percentage.

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-bench 93.3% plus xAI's tool-calling-first positioning and native search/code-execution support justify a high agent score; capped by missing Terminal-Bench/GDPval/Claw-Eval verified rows and the modest Gert Labs 47.32% on the non-reasoning sibling.
- **Reasoning: 68/100.** GPQA Diamond 85.3% and AA-LCR 74.0% are solid, but HLE 19.3%, CritPt 2.9–3% and the −30 Omniscience index with 73.4% hallucination rate show a model tuned for tool-routed work rather than closed-book reasoning; that combination caps the score hard.
- **Context window: 98/100.** 2M total window is top-tier; capped two points short of 100 for lack of any verified retrieval-at-length percentage at 512K+.
- **Multimodal: 65/100.** Text + image in with AA-MMMU-Pro 63.3% sits squarely in the image-in tier; capped with no video/audio input and no non-text output.
- **Coding: 58/100.** No verified SWE-bench, LiveCodeBench or SciCode row exists for this exact ID and Vibe Code Bench reads 1.20%; the provisional aggregator coding 82.2 keeps it above failing but cannot carry the dimension without a real harness.
- **Cost efficiency: 96/100.** $0.20/M in with $0.05 cache reads and $0.50/M out is near the cheapest verified frontier-agent pricing; capped below $0 free tiers.
- **Overall Score: 74/100.** Mean of the five quality dims (82 + 68 + 98 + 65 + 58) / 5 = 74.2 → 74; best fit as a cheap long-window tool-calling router with retrieval augmentation, not a closed-book reasoner or primary coder.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-10-04
- Method: public internet research (xAI model docs, Artificial Analysis model and comparison pages, BenchLM model pages, pricepertoken/benchlm pricing pages, Puter model page, tokenmix.ai roundup as provisional only); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
