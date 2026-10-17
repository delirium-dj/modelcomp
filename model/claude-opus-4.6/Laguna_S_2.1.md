# Claude Opus 4.6 — findings by Laguna S 2.1

- Source: Anthropic (`anthropic/claude-opus-4-6`) system card (`https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf`), Artificial Analysis (`https://artificialanalysis.ai/models/claude-opus-4-6`), BenchLM (`https://benchlm.ai/models/claude-opus-4-6`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6 (Non-reasoning, High variant)
- **Short description:** Claude Opus 4.6 is Anthropic's non-reasoning premium model variant released February 5, 2026, offering 1M context and strong agentic coding. **Deprecated** per AA (Claude Opus 4.7 is the newer release).
- **Provider / access:** Anthropic API (`claude-opus-4-6`); AWS Bedrock; Google Vertex AI. Also available via OpenRouter. 4 API providers (Artificial Analysis).
- **Release / knowledge:** February 5, 2026 (Anthropic system card); knowledge cutoff not disclosed
- **IDs:** `anthropic/claude-opus-4-6` (paid API, noFreeId)
- **Context window:** 1,000,000 tokens (1M total) — confirmed by BenchLM and AA model page (both show 1M). Note: `meta.json` lists 200K, but verified external sources confirm 1M for this variant; Anthropic's standard Claude context is 200K, but Opus 4.6 was extended to 1M.
- **Modalities:** text + image input → text output (+image-in only; no audio/video/PDF per AA). No reasoning (non-reasoning variant).
- **Pricing (as of 2026-09-22):** $5.00 in / $25.00 out per 1M tokens ($3.85 blended with cache)
- **Architecture:** Proprietary multi-modal architecture
- **Speed:** 40.0 tokens/s output (AA, #46/61 among non-reasoning models)
- **TTFT:** 2.21s (AA)

### Raw benchmarks found

> Sources: BenchLM model page (`benchlm.ai/models/claude-opus-4-6`, 2026-10-17, 48 of 639 benchmarks), Artificial Analysis model page (`artificialanalysis.ai/models/claude-opus-4-6`, 2026-10-17), Anthropic system card (`14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf`). Benchmarks not located are NOT fabricated.

Agent / tool use:

- **Terminal-Bench 2.0:** 65.4% — (Anthropic system card via BenchLM)
- **BrowseComp:** 83.7% — (Anthropic: Claude Mythos Preview system card via BenchLM)
- **OSWorld-Verified:** 72.7% — (Anthropic system card via BenchLM)
- **τ²-bench results:** 84.8% — (AA model benchmarks via BenchLM)
- **AndroidWorld:** 62.0% — (Qwen3.8-27B comparison table via BenchLM)
- **Claw-Eval:** 70.4% — (Claw-Eval leaderboard via BenchLM)
- **DeepSearchQA:** 73.7% — (Meta AI: Muse Spark comparison chart via BenchLM)
- **CyberGym:** 66.6% — (CyberGym leaderboard via BenchLM)
- **Gert Labs:** 61.85% — (Gert Labs rankings via BenchLM)
- **ResearchClawBench:** 19.9% — (ResearchClawBench leaderboard via BenchLM)
- **JobBench:** 36.7% — (JobBench paper via BenchLM)
- **ApprenticeBench:** 5% — (NeoCognition: ApprenticeBench GUI results via BenchLM)

Coding:

- **SWE-bench Verified:** 80.8% — (Anthropic system card via BenchLM)
- **SWE-bench Verified*:** 75.6% — (Arcee Trinity-Large-Thinking comparison table via BenchLM)
- **LiveCodeBench Pro:** 70.7% — (Meta AI: Muse Spark comparison chart via BenchLM)
- **SWE-bench Pro:** 53.4% — (Meta AI: Muse Spark comparison chart via BenchLM)
- **SWE-Rebench:** 65.3% — (SWE-Rebench leaderboard via BenchLM)
- **React Native Evals:** 84.1% — (React Native Evals leaderboard via BenchLM)
- **Vibe Code Bench:** 57.57% — (Vals AI: Vibe Code Bench v1.1 via BenchLM)
- **FrontierCode 1.1 Main:** 26.9% — (Cognition: FrontierCode 1.1 via BenchLM)

Multimodal:

- **MMMU-Pro:** 77.3% — (Anthropic system card via BenchLM)
- **AA-MMMU-Pro:** 72.5% — (AA model benchmarks via BenchLM)
- **ERQA:** 51.6% — (Meta AI: Muse Spark comparison chart via BenchLM)
- **ScreenSpot Pro:** 83.1% — (Meta AI: Muse Spark comparison chart via BenchLM)
- **MedXpertQA (MM):** 64.8% — (Meta AI: Muse Spark comparison chart via BenchLM)
- **Design Arena Website:** 1293 — (OpenRouter model benchmarks via BenchLM — revised down from 1296)

Reasoning / knowledge:

- **GPQA Diamond:** 91.3% — (Anthropic system card via BenchLM; ties GPT-6 Sol Max 91.3%)
- **GPQA-D:** 89.2% — (Arcee Trinity-Large-Thinking comparison table via BenchLM)
- **SuperGPQA:** 95% — (Qwen3.6-Plus comparison table via BenchLM)
- **MMLU-Pro:** 82% — (Qwen3.6-Plus comparison table via BenchLM)
- **MMLU-Pro (Arcee):** 89.1% — (Arcee Trinity-Large-Thinking comparison table via BenchLM)
- **HLE:** 53% — (Anthropic system card via BenchLM)
- **HLE w/o tools:** 40% — (Meta AI: Muse Spark comparison chart via BenchLM)
- **HealthBench Hard:** 14.8% — (Meta AI: Muse Spark comparison chart via BenchLM)
- **MedXpertQA (Text):** 52.1% — (Meta AI: Muse Spark comparison chart via BenchLM)
- **AA-GPQA Diamond:** 84.0% — (AA model benchmarks via BenchLM)
- **AA-HLE:** 19.1% — (AA model benchmarks via BenchLM)
- **AA-Omniscience Index:** 2.4% — (AA model benchmarks via BenchLM)
- **AA-Omniscience Accuracy:** 45.8% — (AA model benchmarks via BenchLM)
- **AA-Omniscience Hallucination Rate:** 80.1% — (AA model benchmarks via BenchLM)
- **AA-LCR:** 67.0% — (AA model benchmarks via BenchLM)
- **CritPt:** 2.8% — (AA model benchmarks via BenchLM)
- **AA-IFBench:** 44.6% — (AA model benchmarks via BenchLM)
- **AIME25 (Arcee):** 99.8% — (Arcee Trinity-Large-Thinking comparison table via BenchLM)
- **FrontierMath v2 (Tiers 1-3):** 65.965% — (Epoch AI FrontierMath v2 leaderboard via BenchLM — CRITICAL: revised up from 40.7%)
- **FrontierMath v2 (Tier 4):** 26.829% — (Epoch AI FrontierMath v2 leaderboard via BenchLM — revised up from 22.9%)
- **Artificial Analysis Intelligence Index:** 26.4% — (AA: artificial-analysis-intelligence-index leaderboard via BenchLM; rank #4/61 among non-reasoning models; median: 15; revised from 26* estimated to 26.4% specific value)

Long context:

- **AA-LCR:** 67.0% — (AA model benchmarks via BenchLM)

### Normalized scores (1–100)

> Confidence: high — 48 public benchmarks found across 3 sources (BenchLM, AA, Anthropic system card).
> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.

- **Tool use: 82/100.** (Unchanged.) Terminal-Bench 2.0 at 65.4% (above ~55% frontier), τ²-bench at 84.8% (above ~50% frontier), BrowseComp at 83.7%, OSWorld-Verified at 72.7%, DeepSearchQA at 73.7%. Capped by ApprenticeBench at 5%, ResearchClawBench at 19.9%, no GDPval-AA ≥1750 Elo, no TB-4.0 score.

- **Reasoning: 55/100.** (Revised UP from 54.) Intelligence Index 26.4 (rank #4/61 non-reasoning; revised from 26* estimated). Using II + 30 formula: 26.4 + 30 = 56.4 → 56 base. GPQA Diamond at 91.3% (≥90 frontier), HLE at 53% (above 40%). CRITICAL: FrontierMath v2 T1-3 at 65.965% (revised up from 40.7% — now well above 50% threshold). However, AA-HLE at 19.1% (far below 40%), CritPt at 2.8% (very weak), AA-GPQA at 84.0%, AA-Omniscience Index at 2.4% (80.1% hallucination). Capped by non-reasoning architecture, low AA-HLE, weak CritPt.

- **Context window: 95/100.** 1,000,000 tokens per BenchLM and AA model page (both confirm ≥1M tier → 95). AA-LCR at 67.0% confirms long-context reasoning. No verified ≥98% retrieval at 512K+ to reach 100.

- **Multimodal: 70/100.** Text + image input, text output (+image-in only; no audio/video/PDF per AA). AA-MMMU-Pro at 72.5% and MMMU-Pro at 77.3% are decent signals but no video/PDF or audio input. (+image-in only → 60-70 tier.)

- **Coding: 84/100.** SWE-bench Verified at 80.8% (near-frontier ≈93-95%), SWE-Rebench at 65.3%, React Native Evals at 84.1%, Vibe Code Bench at 57.57%, and AA-SciCode at 51.9% (from BenchLM agentic section, near 55% threshold). Terminal-Bench 2.0 at 65.4% provides additional agentic coding evidence. Capped by no DeepSWE/SWE-bench Pro/LiveCodeBench standalone on BenchLM, and Vibe Code Bench/SciCode below frontier.

- **Cost efficiency: 45/100.** Premium tier pricing ($5.00 in / $25.00 out per 1M tokens; $3.85 blended with cache). noFreeId — paid only.

- **Overall Score: 77/100.** (82 + 55 + 95 + 70 + 84) / 5 = 386 / 5 = 77.2 → 77. (Unchanged.) BenchLM overall 62.12→62.39 (#45→#47/954, 48/625→48/639 benches). FrontierMath v2 T1-3 40.7%→65.965% (major upgrade). Reasoning 54→55. Aligns with BenchLM Overall 62.39/100 rank #47/954 and AA Intelligence Index 26.4 (#4/61 non-reasoning). Deprecated in favor of Claude Opus 4.7.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public-internet research via BenchLM model page (`benchlm.ai/models/claude-opus-4-6`, Oct 17 version), Artificial Analysis model page (`artificialanalysis.ai/models/claude-opus-4-6`, Oct 17), Anthropic Claude Opus 4.6 system card, Epoch AI FrontierMath v2; scores are normalized 1–100 interpretations per model-comparison.md v4. Zero-influence: did not read peer `model/` findings files during research.
- Sources: BenchLM.ai model page (Overall 62.39/100, rank #47/954, 48 of 639 benchmarks); AA model page (Intelligence Index 26.4%, #4/61 non-reasoning, pricing $5/$25, 1M context); Anthropic system card (Terminal-Bench 2.0 65.4%, OSWorld-Verified 72.7%, GPQA 91.3%, HLE 53%, SWE-bench Verified 80.8%, MMMU-Pro 77.3%, BrowseComp 83.7%); Epoch AI (FrontierMath v2 T1-3 65.965%, T4 26.829%); Arcee (GPQA-D 89.2%, MMLU-Pro 89.1%, AIME25 99.8%); Qwen3.6-Plus (SuperGPQA 95%, MMLU-Pro 82%); Meta AI (DeepSearchQA 73.7%, ERQA 51.6%, ScreenSpot Pro 83.1%, MedXpertQA 64.8%, HLE w/o tools 40%, HealthBench Hard 14.8%, MedXpertQA Text 52.1%); OpenRouter (Design Arena 1293); Vals AI (Vibe Code Bench 57.57%); Cognition (FrontierCode 26.9%).
- Re-verification (Oct 17): BenchLM overall 62.12→62.39 (#45→#47/954, 48/625→48/639 benches). CRITICAL: FrontierMath v2 T1-3 40.7%→65.965% (major, now above 50% threshold). T4 22.9%→26.829%. Intelligence Index 26* (estimated)→26.4% (specific value from AA). Design Arena 1296→1293. Reasoning 54→55. Overall 77→77.

---
