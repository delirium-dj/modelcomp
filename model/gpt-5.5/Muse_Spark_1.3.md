# GPT-5.5 — findings by Muse Spark 1.3

- Source: OpenAI/GPT-5.5 (`gpt-5.5`)
- Date: 2026-09-19 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: BenchLM gap-fills + breakpoint added, scores recomputed 85 → 87); re-verified 2026-09-29 (UTC, user-signed-off re-research: cutoff Dec 2025 filled, SWE-V corrected 88.7→82.6 vals.ai, Index scale-noted, +SWE-Multi/CyberGym/HumanEval/MMMU/CharXiv/Blueprint/AIME rows — scores unchanged, Overall holds 87)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's smartest general work model at its April 2026 release, built for real-world agentic coding, computer use, and knowledge work. Top use case is multi-step coding and tool-calling agent loops via Codex and API.
- **Provider / access:** OpenAI API + ChatGPT (Plus/Pro/Business/Enterprise) + Codex (`gpt-5.5` / `gpt-5.5-pro`); Chat Completions and Responses API.
- **Release / knowledge:** 2026-04-23 release (Pro same day; API 2026-04-24); knowledge cutoff Dec 2025 (llmreference/airankings/aimodelsnavi consensus — re-verified 2026-09-29)
- **IDs:** `openai/gpt-5.5` (state explicitly if no Free ID exists on Zen — paid only)
- **Context window:** 1M tokens API (1.05M reported), 400K in Codex — verified via OpenAI launch post and release trackers (April 2026).
- **Modalities:** text/image in; text out; reasoning yes (none/low/medium/high/xhigh effort dial); tool calls yes (function calling, browsing, code execution, computer use); JSON mode yes (structured outputs).
- **Pricing (as of 2026-09-19, re-verified 2026-09-27):** $5/$10 in and $30/$45 out per 1M (272K breakpoint); cached input $0.50; Batch/Flex half rate; Pro $30/$180; paid tier only ($).
- **Architecture:** proprietary (reported MoE, community estimate 100-200B active — unverified; vendor discloses natively omnimodal co-design with NVIDIA GB200/GB300, unconfirmed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI launch post 2026-04-23 vendor run; SOTA at release vs Opus 4.7 69.4%)
- Terminal-Bench 2.1: **78.2%** (release tracker aggregation of vendor figures, April 2026)
- Tau2-bench Telecom (original prompts): **98.0%** (OpenAI launch post 2026-04-23)
- GDPval (wins or ties): **84.9%** (OpenAI launch post); GDPval-AA Elo **1785 xhigh** (Artificial Analysis April 2026, #1); 1769 tracker variant (re-verified 2026-09-29)
- GDPval-AA v2: **1494 Elo** (release tracker, April 2026)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathlon: **55.6%** (OpenAI launch post 2026-04-23); MCP Atlas: **75.3%** (launch); BrowseComp: **84.4%** (launch); **τ²-bench 98%** (BenchLM mirror); **FinanceAgent 60.0% / OfficeQA Pro 54.1% / IB-modeling 88.5%** (launch post — amended 2026-09-27); FinanceAgent v2 **51.8%** (tracker version-note — re-verified 2026-09-29)
- OSWorld-Verified: **78.7%** (OpenAI launch post 2026-04-23; vs Opus 4.7 78.0%)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI launch post 2026-04-23; vs Opus 4.7 94.2%)
- HLE no tools: **41.4%** / with tools: **52.2%** (OpenAI launch post 2026-04-23; vs Opus 4.7 46.9% / 54.7%; mashable lane reads 40.6% — ~1pt variance)
- LCR: **79.0% AA-LCR** (BenchLM mirror)
- CritPt: **27.1** (BenchLM mirror)
- ARC-AGI-1 Verified: **94.5% High** (mashable launch table; ARC-AGI-2 83.3% High lane vs filed 85.0% — harness variance noted)
- Artificial Analysis Intelligence Index: **60** (multiple trackers, #1 at release); **55** launch-xhigh variant / **39** re-based v4.3 (airankings — scale disambiguation — re-verified 2026-09-29); BenchLM coding sub-arena 1507 / overall 1474 #3 (BenchLM via aggregator)
- Omniscience Accuracy / Hallucination Rate: **57% / 86%** (AA-Omniscience xhigh via Artificial Analysis April 2026; highest accuracy but high hallucination vs Opus 4.7 36%)
- FrontierMath Tier 1-3: **51.7%** / Tier 4: **35.4%** (OpenAI launch post; leads Opus 4.7 43.8% / 22.9%); ARC-AGI-2 Verified: **85.0%** (OpenAI launch post; 84.6% tracker variant)
- AIME 2026: **97.5%**; TaxEval v2: **74.98%** (trackers — re-verified 2026-09-29)

Coding:

- SWE-bench Pro (public): **58.6%** (OpenAI launch post 2026-04-23; vs Opus 4.7 64.3%)
- SWE-bench Verified: **82.6%** (vals.ai independent, 3rd on board — replaces 88.7% unverified-circulation figure per airankings warning — re-verified 2026-09-29)
- SWE-bench Multilingual: **77.8%** (release tracker, April 2026)
- LiveCodeBench: **85.3% Vals lane** (BenchLM mirror)
- SciCode: **56.1% AA-SciCode** (BenchLM mirror)
- Vibe Code Bench: **69.85%** (BenchLM mirror)
- Coding Index: **74.9%** (BenchLM mirror); **MMLU-Pro 88.1%** (BenchLM mirror)
- HumanEval: **94.2%** (tracker — re-verified 2026-09-29); MMMU-Pro: **81.2–88.3%** (justification range now row-recorded; Vals 88.3 lane — re-verified 2026-09-29)
- CharXiv Reasoning: **84.1%** (tracker — re-verified 2026-09-29); Blueprint-Bench 2: **36.2%** (tracker spatial-weakness — re-verified 2026-09-29)
- DeepSWE / Coding Index / other: **DeepSWE 1.0 64.3%** (release tracker); **Expert-SWE internal 73.1%** (OpenAI launch post)
- CyberGym: **81.8%** (tracker — re-verified 2026-09-29)

Long context:

- OpenAI MRCR v2 8-needle avg **94.8% at 128K, 74.0% at 512K-1M** (OpenAI launch post); Graphwalks BFS 1M F1 **45.4%**, parents 1M F1 **58.5%** (OpenAI launch post); no verified RULER score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.0 82.7% SOTA plus Tau2 98.0%, τ² 98%, FinanceAgent 60.0% and GDPval 84.9% show elite tool orchestration; capped by Toolathlon 55.6% mid-range.
- **Reasoning: 88/100.** GPQA 93.6% plus LCR 79.0%, CritPt 27.1, ARC-AGI-1 94.5% and FrontierMath leads show strong math/reasoning; capped by HLE ~41%/52% trailing Opus 4.7 and AA hallucination 86%.
- **Context window: 88/100.** 1M window with MRCR 94.8% at 128K and 74.0% at 1M plus Graphwalks 45-58% at 1M show strong retention; capped below perfect 1M recall.
- **Multimodal: 82/100.** MMMU-Pro 81.2-83.2% plus CharXiv 84.1% show solid vision-text; capped by Blueprint-Bench 36.2% spatial weakness and text-only output.
- **Coding: 88/100.** Expert-SWE 73.1% plus LiveCode 85.3%, Vibe 69.85%, SciCode 56.1% and Coding Index 74.9% show strong full-spectrum coding; capped by SWE-Pro 58.6% loss to Opus 4.7 64.3%.
- **Cost efficiency: 55/100.** $5/$30 is 2x GPT-5.4 and $5 above Opus 4.7 output; paid frontier premium with only token-efficiency offset, capped well below cheap Flash tiers.
- **Overall Score: 87/100.** Mean of the five non-cost dims (88+88+88+82+88)/5 = 86.8; best-fit agentic coding and computer-use foundation where accuracy outweighs price.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-19
- Method: public internet research (OpenAI launch post 2026-04-23, system card, Artificial Analysis April 2026, release trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
