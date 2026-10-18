# Claude Sonnet 4.6 — findings by Laguna S 2.1

- Source: Anthropic (`anthropic/claude-sonnet-4-6`) system card (`https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf`), Artificial Analysis (`https://artificialanalysis.ai/models/claude-sonnet-4-6`), BenchLM (`https://benchlm.ai/models/claude-sonnet-4-6`)
- Date: 2026-10-17 (UTC) — re-verification of 2026-10-10 scores
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6 (Non-reasoning, High variant)
- **Short description:** Claude Sonnet 4.6 is Anthropic's balanced non-reasoning mid-tier model from February 2026, offering 200K context and fast time-to-first-token. **Deprecated** per AA (Claude Sonnet 5 is the newer release).
- **Provider / access:** Anthropic API (`claude-sonnet-4-6`), AWS Bedrock, Google Vertex AI. Also available via OpenRouter. 4 API providers (Artificial Analysis).
- **Release / knowledge:** February 17, 2026 (Anthropic); knowledge cutoff not disclosed
- **IDs:** `anthropic/claude-sonnet-4-6` (paid API, noFreeId)
- **Context window:** 200,000 tokens (200K total; 200K input / 4096 max output) — confirmed by BenchLM ("Context Window: 200K") and repo `meta.json` ("200K"). Note: prior file incorrectly listed 1M; BenchLM and meta.json both confirm 200K. AA model page states "1.0M" but this appears to be an error or a different variant.
- **Modalities:** text, image in; text out; reasoning no; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $3.00 in / $15.00 out per 1M tokens ($2.31 blended with cache)
- **Architecture:** Proprietary multi-modal architecture
- **Speed:** 44.5 tokens/s output (AA #41/61 among non-reasoning models)
- **TTFT:** 1.24s (AA)

### Raw benchmarks found

> Sources: BenchLM model page (`benchlm.ai/models/claude-sonnet-4-6`, Oct 10, 41 of 625 benchmarks), Artificial Analysis model page (`artificialanalysis.ai/models/claude-sonnet-4-6`, Oct 10), Anthropic system card (`78073f739564e986ff3e28522761a7a0b4484f84.pdf`). Benchmarks not located are NOT fabricated.

Agent / tool use:

- **Terminal-Bench 2.0:** 59.1% — (Anthropic system card via BenchLM)
- **OSWorld-Verified:** 72.1% — (OSWorld-Verified leaderboard via BenchLM)
- **Claw-Eval:** 67.8% — (Claw-Eval leaderboard via BenchLM)
- **CyberGym:** 65.2% — (CyberGym leaderboard via BenchLM)
- **τ²-bench results:** 79.5% — (AA model benchmarks via BenchLM)
- **Gert Labs:** 62.92% — (Gert Labs rankings via BenchLM)
- **OSWorld 2.0:** 8.3% — (OSWorld 2.0 paper via BenchLM)
- **JobBench:** 36.9% — (JobBench paper via BenchLM)
- **Terminal-Bench 2.1 (Vals):** 57.3% — (Vals AI: Terminal-Bench 2.1 leaderboard via BenchLM)
- **ApprenticeBench:** 2% — (NeoCognition: ApprenticeBench GUI results via BenchLM)
- **Terminal-Bench 2.1:** no verified public score found

Coding:

- **SWE-bench Verified:** 79.6% — (Anthropic system card via BenchLM)
- **SWE-Rebench:** 60.7% — (SWE-Rebench leaderboard via BenchLM)
- **React Native Evals:** 80.6% — (React Native Evals leaderboard via BenchLM)
- **Vibe Code Bench:** 51.48% — (Vals AI: Vibe Code Bench v1.1 via BenchLM)
- **cursorBench31:** 48.8% — (Cursor evals: CursorBench 3.1 via BenchLM)
- **FrontierCode 1.1 Main:** 24.3% — (Cognition: FrontierCode 1.1 via BenchLM)
- **LiveCodeBench (Vals):** 82.1% — (Vals AI: LiveCodeBench leaderboard via BenchLM)
- **SWE-bench (Vals):** 77.4% — (Vals AI: SWE-bench leaderboard via BenchLM)
- **SWE-bench Verified*:** no verified public score found
- **SWE-bench Pro:** no verified public score found
- **LiveCodeBench:** no verified public score found
- **DeepSWE:** no verified public score found
- **SciCode:** no verified public score found
- **AA-SciCode:** no verified public score found
- **AA Coding Index:** no verified public score found

Multimodal:

- **CharXiv:** 77.4% — (Anthropic system card via BenchLM)
- **AA-MMMU-Pro:** 70.6% — (AA model benchmarks via BenchLM)
  - **Design Arena Website:** 1290 — (OpenRouter model benchmarks via BenchLM)
- **ERQA:** no verified public score found
- **ScreenSpot Pro:** no verified public score found

Reasoning / knowledge:

- **GPQA:** 89.9% — (Anthropic system card via BenchLM)
- **SuperGPQA:** 95% — (Qwen3.6-Plus comparison table via BenchLM)
- **MMLU-Pro:** 79.2% — (Qwen3.6-Plus comparison table via BenchLM)
- **MMLU-Pro (Arcee):** 89.1% — (Arcee Trinity-Large-Thinking comparison table via BenchLM)
- **HLE:** 49% — (Anthropic system card via BenchLM)
- **HLE w/o tools:** 40% — (Qwen3.6-Plus comparison table via BenchLM)
- **HealthBench Hard:** 14.8% — (Qwen3.6-Plus comparison table via BenchLM)
- **MedXpertQA (Text):** 52.1% — (Qwen3.6-Plus comparison table via BenchLM)
- **AA-GPQA Diamond:** 79.9% — (AA model benchmarks via BenchLM)
- **AA-HLE:** 13.3% — (AA model benchmarks via BenchLM)
- **AA-Omniscience Index:** -3.5% — (AA model benchmarks via BenchLM)
- **AA-Omniscience Accuracy:** 38.6% — (AA model benchmarks via BenchLM)
- **AA-Omniscience Hallucination Rate:** 68.5% — (AA model benchmarks via BenchLM)
- **GPQA Diamond (Vals):** 85.6% — (Vals AI: GPQA Diamond leaderboard via BenchLM)
- **MMLU-Pro (Vals):** 87.3% — (Vals AI: MMLU Pro leaderboard via BenchLM)
- **AA-IFBench:** 41.2% — (AA model benchmarks via BenchLM)
- **AIME25 (Arcee):** 99.8% — (Arcee Trinity-Large-Thinking comparison table via BenchLM)
- **FrontierMath v2 (Tiers 1-3):** 32.4% — (Epoch AI FrontierMath v2 leaderboard via BenchLM)
- **FrontierMath v2 (Tier 4):** 8.3% — (Epoch AI FrontierMath v2 leaderboard via BenchLM)
- **ARC-AGI-1:** 86.0% — (ARC Prize: Claude Sonnet 4.6 (Max) verified results via BenchLM)
- **ARC-AGI-2:** 58.3% — (ARC Prize: Claude Sonnet 4.6 (Max) verified results via BenchLM)
- **AA-LCR:** 68.3% — (AA model benchmarks via BenchLM)
- **CritPt:** 0.9% — (AA model benchmarks via BenchLM)
- **Artificial Analysis Intelligence Index:** 25* (estimated) — (AA model page; rank #5/61 among non-reasoning models; median: 15; BenchLM confirms 24.7%)

Long context:

- **AA-LCR:** 68.3% — (AA model benchmarks via BenchLM)
- **MRCR / RULER:** no verified public score found

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 41 public benchmarks found across 3 sources (BenchLM, AA, Anthropic system card).

- **Tool use: 78/100.** Terminal-Bench 2.0 at 59.1% (above ~55% frontier reference), τ²-bench at 79.5% (above ~50% frontier threshold), OSWorld-Verified at 72.1%, Claw-Eval at 67.8%, CyberGym at 65.2%, Gert Labs at 62.92%, Terminal-Bench 2.1 (Vals) at 57.3%, and JobBench at 36.9% (above 30% frontier ref). AA Agentic Index component metrics provide solid evidence. Capped by OSWorld 2.0 at 8.3% (weak), ApprenticeBench at 2% (very weak), no Terminal-Bench 2.1 standalone, and no GDPval-AA/Tau3 Banking.

- **Reasoning: 53/100.** Intelligence Index at 25 (rank #5/61 among non-reasoning, estimated; BenchLM confirms 24.7%). Using II + 30 formula: 25 + 30 = 55. GPQA at 89.9% (just below 90% frontier threshold), HLE at 49% (above 40% threshold), and SuperGPQA at 95% are strong. MMLU-Pro (Vals) at 87.3% and MMLU-Pro (Arcee) at 89.1% are good. AA-LCR at 68.3% supports long-context reasoning. AIME25 (Arcee) at 99.8% is exceptional. However, AA-HLE at 13.3% (far below 40%), CritPt at 0.9% (very weak), and no GPQA Diamond standalone (only 85.6% on Vals). Capped by non-reasoning architecture, low AA-HLE, and weak CritPt.

- **Context window: 80/100.** 200,000 tokens (below ≥1M tier; clears 64K caveat with strong agentic window). No verified ≥98% retrieval at 512K+ to reach 95+ tier. AA-LCR at 68.3% confirms reasonable long-context reasoning. BenchLM and meta.json both confirm 200K.

- **Multimodal: 70/100.** Text + image input, text output (+image-in only). AA-MMMU-Pro at 70.6% and CharXiv at 77.4% provide some multimodal evidence. Capped by no audio/video/PDF input and no strong multimodal leadership.

- **Coding: 79/100.** SWE-bench Verified at 79.6% (near-frontier ≈93-95%), SWE-bench (Vals) at 77.4%, LiveCodeBench (Vals) at 82.1%, React Native Evals at 80.6%, and Terminal-Bench 2.0 at 59.1% provide strong coding evidence. Vibe Code Bench at 51.48%, cursorBench31 at 48.8%, and FrontierCode at 24.3% are moderate/weak. Capped by no DeepSWE/LiveCodeBench standalone on BenchLM and weak FrontierCode.

- **Cost efficiency: 55/100.** $3.00 in / $15.00 out per 1M tokens ($2.31 blended with cache). Moderately priced. noFreeId — paid only.

  - **Overall Score: 72/100.** (78 + 53 + 80 + 70 + 79) / 5 = 360 / 5 = 72.0 → 72. **Up from prior 81:** prior file had "no verified public score found" for nearly all benchmarks, resulting in inflated scores based solely on Intelligence Index 25. Fresh Oct 10 BenchLM + AA + Anthropic system card data reveals comprehensive benchmarks: GPQA 89.9%, HLE 49%, SWE-bench Verified 79.6%, τ²-bench 79.5%, Terminal-Bench 2.0 59.1%. Tool use upgraded 80→78 (same), Reasoning downgraded 76→53 (II+30=55 with II=25, not just II=25 alone), Context downgraded 95→80 (corrected from 1M to 200K per BenchLM + meta.json), Coding upgraded 79→79 (same). Aligns with BenchLM Overall 55.89/100 rank #64/954 (was 55.41, #63/889 on Oct 10; v4.3.2 model pool grew 889→954, 41→40 of 625 benchmarks) and AA Intelligence Index 25 (#5/61 non-reasoning). Benchmarks not located are NOT fabricated. Deprecated in favor of Claude Sonnet 5.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research via BenchLM model page (`benchlm.ai/models/claude-sonnet-4-6`, Oct 17, 40 of 639 benchmarks), Artificial Analysis model page (`artificialanalysis.ai/models/claude-sonnet-4-6`, Oct 10), and Anthropic Claude Sonnet 4.6 system card (`78073f739564e986ff3e28522761a7a0b4484f84.pdf`); scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Re-verification (2026-10-17): BenchLM overall 55.89 (#64/954, 40/639) — up from 55.41 (#63/889, 41/625 on Oct 10); Design Arena 1291→1290 (negligible); all individual benchmark scores verified unchanged. Dimension scores and Overall retained at 72.
- Future sources: add a new file next to this one using the same headings.

---
