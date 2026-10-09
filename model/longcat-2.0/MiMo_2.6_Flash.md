# LongCat-2.0 — findings by Mimo v2.6 Flash

- Source: Meituan/`meituan/longcat-2.0`
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's MIT-licensed open-weights MoE coding/agentic model (1.6T total / ~48B active), unveiled 2026-06-29 and open-sourced July 2026 — parent of the `longcat-2.5-preview` entry (2.0 base is text-only; the 2.5 Preview adds image/video input).
- **Provider / access:** LongCat API platform (OpenAI- and Anthropic-compatible, `api.longcat.chat`), Hugging Face `meituan-longcat/LongCat-2.0`, ModelScope; AA lists 2 API providers. Not on OpenCode Zen (no Free ID found).
- **Release / knowledge:** unveiled 2026-06-29 (AA release date; HF benchmark chart dated 2026-06-29); weights published July 2026 (BenchmarkList: 2026-07-20). Knowledge cutoff: not published.
- **IDs:** `meituan/longcat-2.0`; no Zen Free ID bound to this slug.
- **Context window:** 1,048,576 tokens (1M; trained on hundreds of billions of 1M-context tokens with LongCat Sparse Attention); max output not published.
- **Modalities:** text in; text out; reasoning **yes** (thinking toggle: `enable_thinking`); tool calls yes (JSON tool-arguments format with `reasoning_content`); **no image input** (AA).
- **Pricing (as of 2026-09-28):** **$0.30 / 1M input, $0.006 cached (98% discount), $1.20 / 1M output** (LongCat API via AA); AA cost rank **#5/116** at **$0.06 per Intelligence-Index task**. No free tier found.
- **Architecture:** sparse MoE **1.6T total / 48B active**; >35T-token pretraining entirely on AI-ASIC superpods; **MIT** weights (HF card).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = "no verified public score found".

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** <(BenchmarkList — rank 41/182, 78th pct; HF card same figure)>
- Tau3-Banking: **13.2%** Pass@1 <(BenchmarkList / AA — rank 78/174; field leader GLM-5.3 50.3%)>
- GDPval-AA: **Elo 1,032** <(BenchmarkList — rank 96/340, 72nd pct, AA run dated 2026-09-02)>
- BrowseComp: **79.9%** <(BenchmarkList — rank 22/44, 51st pct)>
- Terminal-Bench 4.0 / Claw-Eval / Toolathon / MCP-Atlas / OSWorld: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.9%** <(BenchmarkList — rank 45/464, 90th percentile)>
- HLE: **33.7%** <(BenchmarkList — rank 50/466)>
- AA-LCR v1.1: **62.7%** <(BenchmarkList — 68th pct)>
- Artificial Analysis Intelligence Index: **19, #54 / 116** <(AA model page, v4.3.2) — note: BenchmarkList's "AA Index 34" row conflicts and appears to be a stale feed; the AA-native page value 19 is taken as current actual>
- IMO-AnswerBench **81.8%** / WritingBench **83.8** / ObviousBench **95.8** / AIIQ Composite **98** <(BenchmarkList, secondary rows)>
- LCR / MLCR (other harnesses) / CritPt / MMLU-Pro: **no verified public score found**

Coding:

- SWE-bench Pro: **59.5%** <(BenchmarkList — rank 20/49, 60th pct; corroborated by Creative AI News launch coverage)>
- SWE-bench Multilingual: **77.3%** <(BenchmarkList — rank 13/46, 73rd pct)>
- SciCode: **35.4%** <(BenchmarkList — rank 187/458)>
- LiveCodeBench / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- 1M-token window documented (HF card / AA); MRCR / RULER / GraphWalks retrieval: **no verified public score found**

Multimodal:

- Text-only input (AA); MMMU / CharXiv: **no verified public score found**


### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 70.8 sits between the mid band's top and the ~88 frontier reference, with Tau3-Banking 13.2% and GDPval-AA Elo 1,032 both in the 50–70 mid band and BrowseComp 79.9 as a strength; capped by Tau3/GDPval staying far below frontier and no Terminal-Bench 4.0 number.
- **Reasoning: 66/100.** GPQA Diamond 88.9 is near-frontier and HLE 33.7 approaches the 40%+ frontier band, but the AA Intelligence Index of 19 (#54/116) sits just below the 20–35 mid band and no MRCR/CritPt values exist, which drags the composite back to the upper-mid tier.
- **Context window: 95/100.** 1,048,576 tokens lands in the ≥1M tier (95–100); not 100 because no long-context retrieval measurement (MRCR/RULER) has been published.
- **Multimodal: 15/100.** Text-only input (10–20 band).
- **Coding: 76/100.** SWE-bench Multilingual 77.3 and SWE-bench Pro 59.5 (rank 20/49) plus Terminal-Bench 2.1 70.8 make a solid coding profile; capped by SciCode 35.4 (well under the 55%+ frontier reference) and missing LiveCodeBench/DeepSWE rows.
- **Cost efficiency: 94/100.** $0.30/$1.20 with a 98% cache discount ($0.006) and AA cost rank #5/116 beats the ~$0.60/$2.20 ≈ 92 anchor; scored on the paid LongCat API (no Zen Free ID).
- **Overall Score: 64/100.** Mean of the five quality dims (68 + 66 + 95 + 15 + 76) / 5 = 64.0; best fit: budget 1M-context open-weights coding/agent driver where text-only input is acceptable.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-28
- Method: public internet research (Hugging Face `meituan-longcat/LongCat-2.0` model card, Artificial Analysis model page, BenchmarkList model page, Creative AI News coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
