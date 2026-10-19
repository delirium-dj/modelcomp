# Muse Spark 1.2 — findings by MiniMax M3.1 Flash

- Source: Meta (`muse-spark-1.2`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's August-2026 coding-focused model ("Muse Spark 1.2 is a coding-focused update to Muse Spark 1.1"), now **superseded** by Muse Spark 1.3 ("Muse Spark 1.2 (`muse-spark-1.2`): the previous version"). It remains notable as the **fastest model in the Artificial Analysis catalogue at 314.6 output tokens/second** — roughly 2.5× Muse Spark 1.3's 127.9 t/s — at the same $1.25/$4.25 price. `muse-spark-1.2` and `muse-spark-1.2-contributor` are the **same weights** at two prices.
- **Provider / access:** Meta Model API `muse-spark-1.2` (Standard) and `muse-spark-1.2-contributor` (discounted, training-data consent); OpenRouter `meta/muse-spark-1.2` (+ `meta/muse-spark-1.2-contributor`); OpenCode Zen `opencode/muse-spark-1.2` (`https://opencode.ai/inference/openai/v1/responses`).
- **Release / knowledge:** released **2026-08-05** (research blog "Introducing Muse Code and Muse Spark 1.2", "August 5, 2026"; OpenRouter `created` 1785959287). Knowledge cutoff: **no verified public value found**.
- **IDs:** `muse-spark-1.2`, `muse-spark-1.2-contributor` (Meta Model API, OpenAI-compatible), `meta/muse-spark-1.2` + `meta/muse-spark-1.2-contributor` (OpenRouter; contributor created 2026-08-21), `opencode/muse-spark-1.2` (Zen).
- **Context window:** **1,048,576 tokens** (1M) for all Muse Spark versions. Max output: **131,072** (Vals AI's recorded "Max Output Tokens 131k"); OpenRouter lists 943,718 — the conservative 131,072 figure is used.
- **Modalities:** input text, image, video, audio, PDF; output text (OpenRouter's modality string is `text+image+file+video->text`, i.e. no audio; AA lists "text, image, speech, and video input"). Reasoning: effort levels **minimal / low / medium / high / xhigh** — and **no "max"**: Meta's docs state `"max"` is available only for muse-wonder-1.0 and muse-spark-1.3, and `"none"` returns HTTP 400. Tool calling: yes, with web-search grounding at $2.50/1,000 queries.
- **Pricing (as of 2026-10-19, per 1M tokens):** Standard **$1.25 in / $4.25 out / $0.15 cached**; Contributor **$0.10 / $0.20 / $0.002 cached** — "Contributor mode runs the same models at heavily discounted token prices" in exchange for permission to use your content to improve Meta products. Rate limits: 3,000 RPM / 4M TPM (standard), 150 RPM / 3M TPM (contributor). OpenCode Zen lists $1.25 / $4.25 / $0.15 (no contributor row).
- **Architecture:** proprietary, closed weights; parameter count not disclosed.

### Raw benchmarks found

> Meta's launch-table numbers are marked "vendor" (the "Muse Spark 1.2 (xhigh)" column of `dev.meta.ai/models/muse-spark`); Artificial Analysis, Vals AI, the official DeepSWE leaderboard, VulcanBench and the BenchLM ledger are independent. Meta's methodology: "We use the maximum available reasoning strength for each model: xhigh reasoning effort for Muse Spark 1.2"; Terminal-Bench 2.1 = 89 tasks × 5 attempts, reporting average pass@1; DeepSWE v1.1 = 113 tasks / 91 repos × 5 attempts.

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (vendor, Muse Code harness) / **80.15%** (AA) / **69.66%** (Vals AI, #29/50)
- Terminal-Bench 4.0: **7.07%** (AA) / **6.06% ± 1.51** (Vals AI, #43/50) — near-zero on the current agentic-terminal benchmark, and the 2.1/4.0 gap is the signature weakness of this generation
- GDPval-AA: **1615** (vendor) / **1631** (AA launch article) / **1472.97** (AA current, normalized 48.65%)
- AutomationBench: **38.2%** (vendor) / **40.61%** (AA)
- JobBench **61.6%** (vendor); OSWorld 2.0 **47.6% partial / 17.9% binary** (vendor); DeepSearchQA **85.9%** (vendor); Agentic IF Index (internal) **46.2%** (vendor)
- Tau3-Banking: **34.85%** (AA) / 27% (AA launch article); Tau2-bench: not published; Toolathlon / MCP-Atlas / Claw-Eval: **no verified public score found** (Meta's methodology PDF references MCP Atlas (Scale AI) but publishes no number)
- AA-Briefcase Elo **1328.29** (AA, rubric pass 45.15%); GDP.pdf all-pass 17.4% (AA); EnterpriseOps-Gym-AA 47.27% (AA)

Reasoning / knowledge:

- GPQA Diamond: **90.40%** (AA); HLE: **45.46%** (AA); LCR **79.0%** (AA); CritPt **17.71%** (AA); MLCR-AA **31.11%** (AA)
- Omniscience index 27.2, accuracy **45.38%**, hallucination rate **33.29%** (AA)
- Artificial Analysis Intelligence Index: **40** (#59/217, raw 39.58) at Xhigh — the AA launch article claimed **54** on the earlier index version; no frontier-math, ARC-AGI or GPQA vendor row exists for 1.2
- MMLU-Pro **88.28%** (Vals) / 88.3% (via BenchLM) — the one knowledge row from an independent tracker

Coding:

- DeepSWE v1.1: **55.0%** (vendor) / **55% ± 2** (official DeepSWE leaderboard, `muse-spark-1.2 [xhigh]`, rank 15/21, avg cost $3.70, 99k output tokens, 101 steps) / 59.3% (BenchLM, attributed to Meta but **not** the official figure)
- Terminal-Bench 2.1 82.9% (vendor) / 80.15% (AA) / 69.66% (Vals); Terminal-Bench 4.0 7.07% / 6.06%
- SWE-bench: **86.60%** (Vals AI, #14/88) — no official swebench.com row
- SciCode **57.41%** (AA); SWEAtlas Codebase QnA **46.2%** (vendor); FrontierSWE v2 **12.0%** mean@5 (13th, Proximal); VulcanBench v3 **87.0% at low effort** but 73.9% at high and **52.2% at xhigh** ("The reasoning dial runs backward"; "At higher effort Muse Spark emits 2 to 33× the output tokens per agent step"); LiveCodeBench: **no verified public score found**; Vibe Code Bench: **no verified public score found**
- MMLU-Pro 88.28%, MazeBench 0% (JS-only leaderboard, unverified), Harvey LAB 25.42% (#1/81, Vals)

Long context:

- MRCR 256K–512K **66.3%**; MRCR 512K–1M **55.5%** (vendor) — the weak point of this generation, and the reason its 1M window is not a usable 1M window
- No RULER / GraphWalks / needle-in-haystack measurement; AA-LCR 79.0% (short band)
- 1,048,576-token context, 131,072 max output

Performance profile (AA, Xhigh): Index 40 (#59/217), output **314.6 t/s (#3 / 186 — the fastest model AA measures)**, cost per Index task **$0.97** (#51/114), 130M output tokens (#84/116), TTFT 13.24s, first-answer-token 19.59s, blended $0.78/1M (7:2:1), cache-hit discount 88%.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 76/100.** Solid agentic-tool profile — Terminal-Bench 2.1 82.9% (vendor) / 80.15% (AA), GDPval-AA 1615–1631 Elo (near the ~1750 anchor), JobBench 61.6%, DeepSearchQA 85.9%, OSWorld 2.0 47.6% partial, AutomationBench 38.2–40.61%, AA-Briefcase Elo 1328. Capped by the rubric's frontier anchors (τ3 ~50%+ → 34.85%; no TB 4.0 strength at all — 6–7%), by the absence of any τ²-bench, Toolathlon, MCP-Atlas or Claw-Eval number, and by AutomationBench's low-30s/40s reading.
- **Reasoning: 82/100.** GPQA Diamond 90.40%, MMLU-Pro 88.28% (Vals), LCR 79.0%, HLE 45.46%, MathVision-grade strengths published only for the open Muse Spark Open sibling, FrontierMath not published for 1.2, and the AA index at **40** (54 in the launch article on the older index). Capped by CritPt 17.71%, MLCR-AA 31.11%, and the AA index sitting in the rubric's mid band rather than the frontier band.
- **Context window: 92/100.** 1,048,576-token window with a 131,072-token max output — on paper the rubric's top tier (≥1M = 95–100) — but Meta's own MRCR numbers show the window is not usable end-to-end: **66.3% at 256K–512K and only 55.5% at 512K–1M**. That measured collapse, plus the absence of any independent long-context verification, keeps it below the top band.
- **Multimodal: 88/100.** Text, image, video and audio input (with text output) — the rubric's "+audio in = 90–100" band — and the shared Meta perception stack. Held at 88 because **no multimodal benchmark has been published for Muse Spark 1.2 specifically** (the ZeroBench / BabyVision / VideoMME numbers belong to the open Muse Spark Open checkpoint, a different release) and because OpenRouter's modality string for 1.2 lists no audio at all.
- **Coding: 75/100.** Terminal-Bench 2.1 82.9% (vendor) / 80.15% (AA) / 69.66% (Vals), SWE-bench 86.60% (Vals), SciCode 57.41% (above the rubric's 55% anchor), SWEAtlas 46.2%, DeepSWE 55.0% (vendor and official leaderboard). Capped by DeepSWE at 55.0% (well under the 74% anchor), Terminal-Bench 4.0 at 6–7%, FrontierSWE v2 12.0%, VulcanBench at xhigh 52.2% (vs 87.0% at low effort), and no LiveCodeBench or Vibe Code Bench figure.
- **Cost efficiency: 88/100.** The evaluated route — OpenCode Zen `opencode/muse-spark-1.2` — is billed at **$1.25 in / $4.25 out** per 1M with a $0.15 cached read, exactly the rubric's "~$1.25/$4.25 = ~88" anchor; Artificial Analysis measures **$0.97 per Intelligence Index task** with an 88% cache discount. Meta's **contributor** route ($0.10/$0.20 with cached input at $0.002) would score ~97–98 but is a data-consent mode with a 150 RPM / 3M TPM ceiling and no Zen row, so it is not credited here; the rubric's free-tier caveat (training-data consent) applies to it.
- **Overall Score: 82.6/100.** (76 + 82 + 92 + 88 + 75) / 5 = 82.6 — best-fit: the **speed champion** of the 2026 field (314.6 t/s) at a mid-tier price, with a good 1M window on paper, an excellent SWE-bench 86.6% and a competent Terminal-Bench 2.1 — but its Terminal-Bench 4.0 of ~6–7% and MRCR 1M of 55.5% show it is a fast generalist rather than an agentic-coding model; buy it for throughput, not for frontier agentic work.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 2.1 — 82.9% (vendor, Muse Code harness) vs 80.15% (AA) vs 69.66% (Vals AI).** Three harnesses; AA is the anchor, and the vendor's 82.9% is not treated as the model score.
2. **Terminal-Bench 4.0 — 7.07% (AA) vs 6.06% ± 1.51 (Vals).** Both catastrophic and mutually consistent; this is a real weakness, corroborated by the MRCR 512K–1M result of 55.5%.
3. **DeepSWE — 55.0% (vendor) vs 55% ± 2 (official DeepSWE leaderboard) vs 59.3% (BenchLM).** The official leaderboard agrees with the vendor; BenchLM's 59.3% is not the published figure and is reported as such.
4. **VulcanBench 87.0% is a low-effort number** (73.9% at high, 52.2% at xhigh) — BenchLM's ledger omits the effort label, which would make this look like a 1.2 strength. The effort ladder is reproduced above and the coding score is anchored on the xhigh configuration AA measures.
5. **AA Intelligence Index — 40 now vs 54 in the launch article** ("Muse Spark 1.2 scores 54 on the Artificial Analysis Intelligence Index"), with launch-time GDPval 1631 and cost $0.40/task. Index-version re-baselining (v4.3.2) explains the drop; the current 40 is scored and the launch figure recorded.
6. **GDPval-AA — 1615 (vendor) / 1631 (AA article) / 1472.97 (AA current).** The current AA value also reflects the GDPval v2 → v2.1 change; all three are listed.
7. **max output 131,072 (Vals) vs 943,718 (OpenRouter).** The conservative figure is used.
8. **Modalities: audio in or not?** Meta's docs list text/image/video/audio/PDF input, OpenRouter's route lists no audio, AA lists "text, image, speech, and video". The vendor list is used with the discrepancy flagged.
9. **MazeBench 0%** is unverified — the leaderboard is JS-only and returns no rows.
10. **Identity confirmation.** No "Muse Spark 1.2 Max" or "Muse Spark 1.2 Free" SKU exists: the ids are absent from OpenRouter's muse-spark list, from OpenCode Zen, from AA (`/models/muse-spark-1-2-max` → 404) and from Vals (`meta_muse_spark_1_2_max` → 404). "Max" as a reasoning level belongs to **Muse Spark 1.3** only, and Vals' "Muse Spark 1.3 Max" row (TB 2.1 79.03%, TB 4.0 24.75%) is a 1.3 configuration, not a 1.2 one.

### Notes on identity

- `muse-spark-1.2` and `muse-spark-1.2-contributor` are **one model**: the same weights, the same 1,048,576-token context, the same modalities and the same max output, differing only in price and in whether Meta may train on your prompts (contributor mode: "the same models at heavily discounted token prices"). Simon Willison (2026-08-05): "if you agree to let Meta use your data 'to improve our products' you can use `muse-spark-1.2-contributor` which is $0.10/$0.20".
- `muse-spark-1.2` is a distinct checkpoint from `muse-spark-1.1` (July 2026) and `muse-spark-1.3` (September 2026), and it is not the open-weights **Muse Spark Open** (816B/42B, 1M context, October 2026) — that sibling's ZeroBench / BabyVision / VideoMME numbers are lineage data, not 1.2 data.
- Meta's own docs label the model "the previous version" and cap its reasoning at `xhigh` — there is no 1.2 "max".

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Meta first-party model page and launch-table column, `dev.meta.ai` model/reasoning/pricing docs, the Muse Spark 1.2 launch blog and methodology PDF, the OpenCode Zen catalog; independent trackers Artificial Analysis (model page, Xhigh variant, per-evaluation payload, launch article), Vals AI, the official DeepSWE leaderboard, VulcanBench v3 Report 19, the BenchLM evidence ledger, OpenRouter, and Simon Willison's launch-day notes. Vendor-vs-independent conflicts — including the VulcanBench effort inversion and BenchLM's 59.3% DeepSWE row — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.2.md`, using the same headings.
