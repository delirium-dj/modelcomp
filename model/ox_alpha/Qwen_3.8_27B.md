# Ox Alpha — findings by Qwen 3.8 27B

- Source: stealth vendor (`ox-alpha`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Anonymous ("stealth") frontier reasoning model for coding, long-context, and agentic work; free in preview, vendor identity undisclosed. Community sites speculate a Z.ai GLM 5.3 lineage, but nothing is confirmed.
- **Provider / access:** served via OpenRouter by a third-party provider (per oxalpha.org); free open chat at oxalpha.io / oxalpha.com with no login. No OpenCode Zen Free ID verified in this pass.
- **Release / knowledge:** exact release date not disclosed; benchmark page last updated August 2026; knowledge cutoff not disclosed.
- **IDs:** `stealth/ox-alpha` (OpenRouter, per Benchable model path). No Free ID on Zen verified in this pass.
- **Context window:** 1M total, 131K max output (provider-reported figures via oxalpha.org table).
- **Modalities:** text / image in, text out; reasoning yes.
- **Pricing (as of 2026-09-29):** $0 per 1M out — free preview tier (list-price comparison: Fable 5 $50, GPT-5.6 $15, Grok 4.6 $6, GLM-5 $1.50 per 1M out). Time-limited free preview; data-usage caveats apply to free tiers.
- **Architecture:** undisclosed; closed weights (vendor table: no open weights); "served anonymously in preview".

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Agentic coding (vendor table, indicative real-world multi-file tasks with tools): **78\*** vs Fable 5 79, GLM-5 72, GPT-5.6 80, Grok 4.6 74 (oxalpha.org, Aug 2026; \* = community-reported estimate, not a vendor datasheet)
- Independent community 10-task real-world coding run: **80% mean pass rate** (8/10) vs Fable 5 [max] 65%, GLM-5.3 [max] 62%, GPT-5.6-Sol [max] 52%, Grok 4.6 [xhigh] 62% (oxalpha.com, third-party data reproduced as published; small sample — 1 task moves the mean 10 pts)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no direct AA score; vendor-table composite "Intelligence Index" **59\*** vs Fable 5 62, GLM-5 57, GPT-5.6 59, Grok 4.6 61 (oxalpha.org; \* community estimate, "in the spirit of" AA Index)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: the 80% 10-task real-world coding pass rate above; community analyses (local-ai-zone) cite an ~80% DeepSWE figure as a preliminary estimate only — not verified against a harness of record.

Long context:

- 1M window / 131K max output; no long-context retrieval benchmark reported.

Multimodal:

- Image input accepted (vendor table); no MMMU/CharXiv score found.

Caveats:

- Vendor states: "Ox Alpha is served anonymously in preview, so its figures (marked \*) are community-reported estimates rather than a vendor datasheet"; treat all capability numbers as directional (small samples, single-run pass/fail).

### Normalized scores (1–100)

- **Tool use: 72/100.** No verified TB2.1/Tau3/GDPval; the 78\* agentic-coding indicator and 80% 10-task real-world pass rate are strong but small-sample and estimate-flagged — scored in the mid-upper band with a penalty for missing standard harness numbers.
- **Reasoning: 84/100.** Composite Intelligence Index 59\* sits just under the 60+ frontier reference (parity with GPT-5.6's 59, below Fable 5's 62); capped by the estimate flag and absence of GPQA/HLE detail.
- **Context window: 95/100.** 1M window with 131K max output places it in the >=1M tier (95–100); no verified >=98% retrieval at 512K+ to justify 100.
- **Multimodal: 65/100.** Text + image in, text out falls in the image-in tier (60–70); no visual-reasoning benchmark found.
- **Coding: 80/100.** Highest pass rate in the 10-task reference table (80% vs 52–65%), solved the table's hardest task; capped by the lack of SWE-bench Verified / LiveCodeBench of-record numbers and the small sample.
- **Cost efficiency: 100/100.** $0 free preview tier ($0 input/output per vendor pricing); flagged as time-limited preview with free-tier data-usage caveats.
- **Overall Score: 79/100.** (72 + 84 + 95 + 65 + 80) / 5 = 79.2 → 79. Best fit: zero-cost frontier-adjacent coding/agent workhorse while the free preview lasts; re-verify identity and numbers when the vendor de-anonymizes.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (oxalpha.org / oxalpha.com / oxalpha.io vendor pages, Benchable, community analyses); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
