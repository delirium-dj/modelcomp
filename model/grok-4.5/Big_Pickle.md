# Grok 4.5 — findings by Big Pickle

- Source: xAI (`grok-4.5`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5 (SpaceXAI / xAI)
- **Short description:** xAI's July 2026 frontier model for coding, agentic tasks and knowledge work — strong open-run terminal/SWE agent with vision input, positioned as an Opus-class alternative at lower price.
- **Provider / access:** xAI API (`grok-4.5`), OpenRouter, Amazon Bedrock, wired into Cursor at launch; OpenCode Zen `opencode/grok-4.5`. Chat Completions-compatible.
- **Release / knowledge:** Released 2026-07-08; knowledge cutoff not documented.
- **IDs:** `grok-4.5` / `opencode/grok-4.5` (paid on Zen; no Free ID known).
- **Context window:** 500,000 tokens (500K); verified via provider listings.
- **Modalities:** Text + image input (vision), text output; reasoning/tool calling, caching. No audio input / non-text output.
- **Pricing (as of 2026-09-23):** $2.00 in / $6.00 out per 1M (cached input $0.30). Zen "standard pricing", exact rate not verified.
- **Architecture:** Proprietary; params undisclosed; not open-weight.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **83.3%** (xAI; vs GPT-5.4 75.1%)
- GDPval-AA: **1430** (modelscale)
- AA Agentic index: **81.7** (modelscale capability evidence)
- Tau3-Banking: **beats GPT-Live-1's 32.0%** (llm-stats shared eval; exact Grok 4.5 value not printed)
- Terminal-Bench 3.0: **15.7%** (xhigh; leader = Claude Opus 5 at 42.7%)
- Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.0–93.1%** (xAI; AA GPQA 93.1)
- HLE: **42.7%** (AA)
- AA-Omniscience Index: **63.0** (xAI via llm-stats)
- Artificial Analysis Intelligence Index: **38.8** (modelscale; modest vs frontier 55+)
- BenchLM public estimate: **74.71/100, rank #18** (vs GPT-5.4 72.89)
- MMLU: no verified public score found

Coding:

- SWE-Bench Pro: **64.7%** (vs GPT-5.4 57.7%, most published leaders 60-63%)
- DeepSWE 1.0: **62.0%**
- LiveCodeBench (Vals AI run): **87.4%**; SWE-bench Verified (Vals run): **86.6%**
- AA Coding Index: **72.5**; AA SciCode: **55.0%**

Long context:

- 500K documented with no verified MRCR/RULER-type retrieval figure found.

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 83.3%, GDPval-AA 1430 and a Tau3 edge are strong, and AA Agentic Index 42.1 (the 81.7 quoted originally was modelscale's different normalization) plus TB3.0's 15.7% temper the launch narrative.
- **Reasoning: 87/100.** GPQA 93.1% (Vals 92.9) and HLE 42.7% reach frontier refs; ARC-AGI-2 52.6% verified; the AA Intelligence Index 38.8 is comparatively modest and drags the otherwise elite profile down a notch.
- **Context window: 88/100.** 500K places it in the 500K–1M tier (85-94); AA-LCR 79.3% now provides a long-context reasoning row, though no full-500K retrieval test.
- **Multimodal: 68/100.** Vision (image) input supported and AA-MMMU-Pro 80.4% is a solid verified vision row; no audio/video input or non-text output keeps it in the 60-75 band.
- **Coding: 84/100.** SWE-Bench Pro 64.7%, DeepSWE 62.0% (vendor; BenchLM's "53%" deepSwe row is a different configuration), VulcanBench v3 89.9%, LCB 87.4 and SWE-V 86.6 (Vals) are top-tier; AA Coding Index 72.5 and PostTrainBench 23.4 cap a 90s claim.
- **Cost efficiency: 85/100.** $2/$6 is the budget frontier price (~85 on the $1.25/$4.25→88 / $3/$15→60 scale); cache rates are cheap.
- **Overall Score: 83/100.** (86 + 87 + 88 + 68 + 84) / 5 = 82.6 → 83 (raised from 82 on 2026-10-08, see Re-verification). Best-fit: high-value agentic coding/SWE at mid price; watch the 500K window if you need full codebase retrieval.

---

## Re-verification — 2026-10-08 (15 days after original)

Re-run widens coverage (BenchLM profile 63.97, #39/887, 32/623, updated 2026-10-07) with verified vision, ARC, SWE-multilingual and tool-use corners.

| Dimension | 2026-09-23 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 87 | 86 | −1 |
| Reasoning | 87 | 87 | — |
| Context window | 88 | 88 | — |
| Multimodal | 65 | 68 | +3 |
| Coding | 84 | 84 | — |
| Cost efficiency | 85 | 85 | — |
| **Overall** | **82** | **83** | **+1** |

New and corrected data:

- **Vision finally measured:** AA-MMMU-Pro **80.4%** + Design Arena 1287 — the multimodal claim (65 → 68) now rests on a real image-reasoning row, not just the modality flag.
- **Long-context reasoning row found:** AA-LCR **79.3%** (retrieval-capped long-context reasoning); ARC-AGI-1 85.67 / **ARC-AGI-2 52.6%** / ARC-AGI-3 0.3% verified.
- **Coding corners:** SWE Multilingual **78%** (Cursor), VulcanBench v3 **89.9%**, CursorBench 3.2 66.7%, AA-SciCode 55.0%, PostTrainBench v1.1 23.4% (a genuine hard cut), plus original rows re-confirmed (SWE-Pro 64.7, LCB 87.4, SWE-V 86.6 Vals).
- **Tool-use reality check:** AA Agentic Index **42.1** (AA scale; the original "81.7" was modelscale's index — different normalization, same model) and GDPval-AA 44.5% alongside confirmed TB2.1 83.3% / TB2.1-Vals 67.8%; TB3.0 15.7% unchanged.
- **DeepSWE discrepancy surfaced:** BenchLM's deepSwe row reads **53%** vs. the 62.0% originally cited from Vals-era data — note as a config difference.
- **Lineage:** Grok 4.6 (67.99, #21) and **Grok 4.7 (shipped 2026-09-21)** now sit above this model; pricing unchanged ($2/$6, cache $0.30).

Gaps still open after re-run: Toolathlon row for 4.5, Tau3-Banking exact value, full-500K retrieval (MRCR), MMLU official number, AA-Omniscience remains high-hallucination (54.1%).

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-08 (re-verified; original research 2026-09-23)
- Method: public internet research (xAI listings, BenchLM, Vals, ARC Prize, Cursor, PostTrainBench, llm-stats, modelscale, price trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_4.1_Flash.md`, using the same headings.