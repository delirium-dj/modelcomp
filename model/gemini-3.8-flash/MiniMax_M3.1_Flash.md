# Gemini 3.8 Flash — findings by MiniMax M3.1 Flash

- Source: Google (`gemini-3.8-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's fast, cheap late-2026 Flash flagship — released 2026-09-02 and built on Gemini 3.7 Flash ("Gemini 3.8 Flash is based on Gemini 3.7 Flash"). A thinking model with a 1M context window, full multimodal input (text, image, video, audio, PDF) and the best price/throughput ratio in this batch. Launched alongside a restricted sibling, **Gemini 3.8 Flash Cyber** (Fairwind Program, trusted defenders only), which is a separate SKU and not this model.
- **Provider / access:** Gemini API `gemini-3.8-flash` (v1beta, status Stable, "Last updated 2026-09-02 UTC"); Google AI Studio; Gemini app / AI Mode; OpenRouter `google/gemini-3.8-flash` (+ `:batch`); OpenCode Zen `opencode/gemini-3.8-flash` (`https://opencode.ai/inference/google/v1beta/models/gemini-3.8-flash`).
- **Release / knowledge:** 2026-09-02 (Google blog "Sep 02, 2026"; model card "Published 2 September 2026"; OpenRouter `created` timestamp 1788362056 = 2026-09-02). Knowledge cutoff **March 2026** ("some domains may be limited to January 2025").
- **IDs:** `gemini-3.8-flash` (single stable model code; there are **no** `-high` / `-low` model ids — effort is a `thinking_level` parameter with low / medium / high, default medium, and "minimal is not supported and returns an error"), `google/gemini-3.8-flash` and `google/gemini-3.8-flash:batch` (OpenRouter), `opencode/gemini-3.8-flash` (OpenCode Zen).
- **Context window:** **1,048,576** input tokens, **65,536** output tokens ("Input token limit 1,048,576 / Output token limit 65,536"; model card: "a token context window of up to 1M", "a 64K token output"). OpenRouter agrees: context_length 1,048,576, `max_completion_tokens` 65,536.
- **Modalities:** input text, image, video, audio and PDF; output text. Tools: function calling, search grounding (Google Search as a tool), grounding with Google Maps, code execution, computer use (preview), file search, URL context, structured outputs, caching, Batch, Flex and Priority inference. Audio/image generation and the Live API are **not** supported.
- **Pricing (as of 2026-10-19, per 1M tokens):** introductory **$0.75 in / $3.75 out**, context caching **$0.075**, storage $0.50/1M tokens/hour; Batch & Flex **$0.375 / $1.875 / $0.0375**; Priority $1.35/$6.75/$0.135 (rising to $2.70/$13.50/$0.27). "Introductory price expires on December 31, 2026. Starting January 1, 2027, $1.50/1M input tokens and $7.50/1M output tokens will apply." Search grounding: 5,000 free requests/month, then $14/1,000. **OpenCode Zen already sells it at the post-intro rate: $1.50 / $7.50, cache read $0.15.**
- **Architecture:** proprietary; no parameter count published; documented as an evolution of Gemini 3.7 Flash.

### Raw benchmarks found

> Google's model card / DeepMind page numbers are marked "vendor"; Artificial Analysis (AA), Vals AI and the official Terminal-Bench board are independent. The AA page tracks three effort variants (high / medium / low) and they differ materially.

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (vendor model card) / **87.64%** (AA, high) / **81.3%** (Vals AI run, per BenchLM) / 87.6% (AA value as mirrored by BenchLM)
- Terminal-Bench 4.0: **19.1%** (vendor) / **19.09% ± 3.36** (official tbench.ai board, rank 29, mini-swe-agent, effort high, 330 trials, pass@2 28.79%, pass@5 43.94%, total cost $1,828.77) / **19.70% ± 2.31** (Vals AI) / 19.7% (AA)
- Tau3-Banking: **44.95%** (AA, τ³-Banking) / 45% (AA launch article: "gains 12 points over Gemini 3.7 Flash to score 45%"); Tau2-Bench: **not measured** (AA `tau2: null`)
- GDPval-AA: **1545 Elo** (vendor) / **1436.3** (AA) / 46.8% normalized (AA, per BenchLM)
- AutomationBench: **59.93%** (AA) / 59.9% (BenchLM AA row)
- OSWorld 2.0: **59.0%** (vendor); Finance Agent v2 **61.44%** (Vals, 2/80) / 61.4% (vendor card); ITBench-AA **52.54%** (AA); GDP.pdf all-pass **21.0%** (AA) vs 35.0% (vendor)
- Gray Swan IPI (15 attempts, attack success): **5.5%** (Google's Gemini 4 Argon launch chart, via BenchLM)
- AA-Briefcase Elo **1203**; AA-Analyst **46.25%**; Hermes Index 38.1%, Hermes Bench 62.2%; MazeBench 4%; ApprenticeBench 24% (NeoCognition)
- Claw-Eval / ClawProBench: **no verified public score found**; Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **95.25%** (AA) / **94.44%** (Vals AI) / 95.3% (BenchLM) / 94.4% (Vals mirror)
- HLE: **47.82%** (AA) / **54.9% HLE-Verified** (vendor card) / 47.8% (AA mirror)
- LCR / MLCR: AA-LCR v1.1 **81.33%** (AA); MLCR-AA **21.67%** (AA)
- CritPt: **18.29%** (AA)
- Artificial Analysis Intelligence Index: **41** (AA, high effort, rank **#51 / 217**) / 40.9 (BenchLM, citing AA) / launch-day values **59 (high), 57 (medium), 52 (low)** (AA launch article) / 33 for the low variant on the current page
- ARC-AGI-1 **98.50%**, ARC-AGI-2 **89.2%**, ARC-AGI-3 **10.4%** (standard) / **35.00%** (provider adapter); FrontierMath v2 Tiers 1–3 **68.421%**, Tier 4 **21.951%**
- Omniscience index **29.55**, accuracy **54.6%**, hallucination rate **55.18%** (AA); LABBench2 **86.2%**; BioMystery 88.8% human-solvable / 56.5% human-difficult; MMLU-Pro 90.22% (Vals)

Coding:

- DeepSWE v1.1: **73.7%** (vendor) / 73.8% (BenchLM/DataCurve)
- SWE-bench: **80.00%** (24/88, Vals AI run) — no official SWE-bench Verified leaderboard entry for 3.8 Flash was found
- LiveCodeBench: **89.48%** (3/143, Vals AI run); AA `livecodebench: null`
- SciCode: **56.60%** (AA); AA Coding Index 76.3% (via BenchLM)
- CursorBench 3.2 **69.2%** / CursorBench 4.0 **39.6%**; FrontierSWE v2 **19.6%**; FrontierCode 1.1 **36.36%** (AA); Bug Hunt Bench **18.0 fixes**
- Terminal-Bench 2.1 89.4% (vendor) and Terminal-Bench 4.0 19.1% (vendor) — the same model scores near-frontier on the old terminal benchmark and near-bottom on the new one
- Vibe Code Bench: **no verified public score found** for 3.8 Flash

Long context:

- AA-LCR v1.1 **81.33%** (AA, short-window band) — no MRCR, RULER or GraphWalks result published for 3.8 Flash
- 1,048,576-token input window with a 65,536-token output cap; no independent long-window retrieval measurement exists for this model

Performance profile (AA, high): output **138.6 t/s** (#32/185 — second-fastest in this batch), TTFT **24.90s**, cost per Intelligence Index task **$1.24** (#65/114), 170M output tokens (verbose), blended 7:2:1 price $0.5775/M, cache-hit discount 90%. AA's launch article quoted "~300 output tokens per second" and $0.58 per Index task for the high variant.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 80/100.** Strong on the classic agentic numbers — Terminal-Bench 2.1 89.4% (vendor) / 87.64% (AA), τ³-Banking 44.95%, GDPval-AA 1545 (vendor) / 1436.3 (AA), AutomationBench 59.9%, OSWorld 2.0 59.0%, Finance Agent v2 61.44%, ITBench-AA 52.54% — but the rubric's frontier anchors need TB2.1 ~88%+ **and** τ3 ~50%+ **and** GDPval ~1750+ together, and the latter two fall short (44.95 and 1545/1436). Capped further by Terminal-Bench 4.0 at 19.1–19.7% (tbench.ai, Vals and AA agree within CI), the weakest long-horizon terminal score in this batch, and no published Claw-Eval / Toolathon / MCP-Atlas.
- **Reasoning: 87/100.** GPQA Diamond 95.25% (AA) / 94.44% (Vals), HLE 47.82% (AA) / 54.9% HLE-Verified (vendor), AA-LCR 81.33%, ARC-AGI-1 98.50% / ARC-AGI-2 89.2%, FrontierMath v2 68.4% (T1–3), LABBench2 86.2%. Below the 90–100 band because the Artificial Analysis Intelligence Index is **41** (rubric anchor 60+), CritPt is only 18.29%, ARC-AGI-3 is 10.4% on the standard harness, and MLCR-AA is 21.67%.
- **Context window: 95/100.** 1,048,576-token input window — the rubric's top tier (≥1M = 95–100) — with a 65,536-token output cap, which clears the 64K "no caveat" threshold. Not 100: there is **no** published MRCR / RULER / GraphWalks measurement for this model, and the only long-context number (AA-LCR 81.33%) covers only the short band.
- **Multimodal: 92/100.** Full input coverage — text, image, video, audio and PDF — with text output, which is the rubric's "+audio in = 90–100" band; independent vision evidence is strong (MMMU-Pro 85.61% AA / 89.08% Vals, CharXiv 86.2% vendor, LVBench 87.1–87.8% vendor, Design Arena Website 1300 via OpenRouter). Held at 92 rather than higher because Artificial Analysis lists the input as "text, image, speech, and video" (no PDF), Google itself notes some domains may be as old as January 2025, and there is no published MMMU-Pro for the AA max configuration.
- **Coding: 88/100.** SciCode 56.60% (rubric anchor 55%+), Terminal-Bench 2.1 89.4% (vendor) / 87.64% (AA) — above the 85% anchor — LiveCodeBench 89.48% and SWE-bench 80.0% on Vals' harness, DeepSWE 73.7% (just under the 74% anchor), AA Coding Index 76.3%. Capped by Terminal-Bench 4.0 19.7% (the benchmark that now measures frontier agentic coding), FrontierSWE v2 19.6%, FrontierCode 36.36%, CursorBench 4.0 39.6% and Bug Hunt 18.0 fixes, plus no official SWE-bench Verified or Vibe Code Bench entry.
- **Cost efficiency: 78/100.** The evaluated route — OpenCode Zen `opencode/gemini-3.8-flash` — is billed at **$1.50 in / $7.50 out** per 1M, cache read $0.15, i.e. the *post-introductory* rate; Google's direct API still sells the intro tier at $0.75 / $3.75 with $0.075 cache (Batch $0.375 / $1.875) but "Introductory price expires on December 31, 2026. Starting January 1, 2027, $1.50/1M input tokens and $7.50/1M output tokens will apply." The rubric anchors (~$0.60/$2.20 ≈ 92, ~$1.25/$4.25 ≈ 88) describe the intro rate; the $1.50/$7.50 Zen rate sits below them, and the announced doubling caps the score. Free-tier caveats: not available on the Gemini free tier for this SKU.
- **Overall Score: 88.4/100.** (80 + 87 + 95 + 92 + 88) / 5 = 88.4 — best-fit: the value pick of this batch — 1M context, full multimodal input, near-frontier reasoning at a Flash price, and the fastest measured throughput (138.6 t/s) — but pair it with a stronger model for long-horizon terminal work, where its Terminal-Bench 4.0 score is only ~19%.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **AA Intelligence Index — 41 today vs 59 at launch.** The AA launch article (2026-09-02) reported 59 (high) / 57 (medium) / 52 (low) and "comes in eighth place"; the current AA page reports 41 (high) / 40 (medium) / 33 (low), rank #51/217. This is index-version re-normalization (v4.3.2) plus effort differences, not a regression — the launch figure is recorded but the current 41 is what is scored.
2. **Terminal-Bench 2.1 — 89.4 / 87.64 / 81.3.** Google's card, AA and Vals' own run disagree by ~8 points; the vendor number is not merged, and the AA figure is used for scoring.
3. **Terminal-Bench 4.0 — 19.1 / 19.09 / 19.70.** Google, the official tbench.ai board and Vals agree within the published CI (±3.36), and AA's 19.7 matches Vals. This is a genuinely low score, unlike the 2.1 result.
4. **GDP.pdf — 35.0% all-pass (vendor) vs 21.0% (AA).** Different document-reasoning harnesses; both listed.
5. **GDPval-AA — 1545 (vendor) vs 1436.3 (AA).** 109 Elo apart; the lower AA value is used.
6. **Cost per Intelligence Index task — $1.24 (AA page) vs $0.58 (AA launch article, high).** The launch article predates the index re-baselining; the current $1.24 is used.
7. **Output speed — 138.6 t/s (AA page) vs "~300 output tokens per second" (AA launch article) vs "same speed … of 3.7" (Google).** The launch figure is an early-window average; the current 138.6 t/s is used.
8. **Price — Google $0.75/$3.75 intro vs OpenRouter API $0.825/$4.125 per 1M vs OpenRouter model page "$0.75 / $3.75" vs Vals AI "$1.50/7.50" vs OpenCode Zen $1.50/$7.50.** Vals and Zen both bill the standard (post-intro) rate; the cost score follows the Zen route.
9. **Max output — 65,536 (Google docs, OpenRouter, Vals) vs "64K token output" (model card) vs "66k" (Vals page header).** 65,536 is used; "64K" is the same figure rounded.
10. **LVBench attribution.** BenchLM lists 87.1% for 3.8 Flash, which in Google's own card is the *static* number while 87.8% is the agentic one — a probable transcription/attribution slip; both numbers are reported as published.
11. **PDF input.** Google lists PDF in its supported input types; AA lists only "text, image, speech, and video input". The official list is used, with the discrepancy noted.

### Notes on identity

- `gemini-3.8-flash` is one model with three thinking levels (low / medium / high) — not three models. There is no `-high`/`-low` API id, and "minimal is not supported and returns an error".
- Gemini 3.8 Flash Cyber (Fairwind Program) is a **separate, restricted SKU** launched at the same time; it is not this model and is not scored here.
- The family line is 3.7 Flash → 3.8 Flash → 3.8 Flash Cyber; 3.7 Flash scores 11.21% on Terminal-Bench 4.0 (rank 35) for family context.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Google first-party model card, Gemini API model/pricing/thinking docs, DeepMind model page, Google blog launch posts; independent trackers Artificial Analysis (model page + launch article, all three effort variants), the official Terminal-Bench 4.0 leaderboard, Vals AI's own run, and the BenchLM evidence ledger; OpenRouter and OpenCode Zen model/pricing catalogs. Vendor-vs-independent conflicts are listed rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
