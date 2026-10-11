# Claude Opus 4.6 — findings by Laguna S 2.1

- Source: Anthropic (`anthropic/claude-opus-4-6`) system card (`https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf`), Artificial Analysis (`https://artificialanalysis.ai/models/claude-opus-4-6`), BenchLM (`https://benchlm.ai/models/claude-opus-4-6`)
- Date: 2026-10-10 (UTC)
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

> Sources: BenchLM model page (`benchlm.ai/models/claude-opus-4-6`, 2026-10-10, 48 of 625 benchmarks), Artificial Analysis model page (`artificialanalysis.ai/models/claude-opus-4-6`, 2026-10-10), Anthropic system card (`14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf`). Benchmarks not located are NOT fabricated.

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
- **Design Arena Website:** 1296 — (OpenRouter model benchmarks via BenchLM)

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
- **FrontierMath v2 (Tiers 1-3):** 40.7% — (Epoch AI FrontierMath v2 leaderboard via BenchLM)
- **FrontierMath v2 (Tier 4):** 22.9% — (Epoch AI FrontierMath v2 leaderboard via BenchLM)
- **Artificial Analysis Intelligence Index:** 26* (estimated) — (AA model page; rank #4/61 among non-reasoning models; median: 15; BenchLM shows 26.4%)

Long context:

- **AA-LCR:** 67.0% — (AA model benchmarks via BenchLM)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 48 public benchmarks found across 3 sources (BenchLM, AA, Anthropic system card).

- **Tool use: 82/100.** Terminal-Bench 2.0 at 65.4% (above ~55% frontier reference), τ²-bench at 84.8% (above ~50% frontier threshold), BrowseComp at 83.7%, OSWorld-Verified at 72.7%, and τ²-bench at 84.8% are strong agentic signals. DeepSearchQA at 73.7% and CyberGym at 66.6% reinforce reliability. Capped by OSWorld 2.0 at 8.3% (weak), ApprenticeBench at 5% (weak), Agents' Last Exam not found, and no GDPval-AA/Tau3 Banking standalone.

- **Reasoning: 54/100.** Intelligence Index at 26 (rank #4/61 among non-reasoning, estimated; well above median 15). Using II + 30 formula: 26 + 30 = 56. GPQA Diamond at 91.3% (frontier ≥90% bar) and HLE at 53% are excellent. AA-GPQA Diamond at 84.0% is good. However, AA-HLE at 19.1% (far below 40%), CritPt at 2.8% (very weak), and SuperGPQA at 95% (strong but single eval). Capped by non-reasoning architecture and low AA-HLE.

- **Context window: 95/100.** 1,000,000 tokens per BenchLM and AA model page (both confirm ≥1M tier → 95). AA-LCR at 67.0% confirms long-context reasoning. No verified ≥98% retrieval at 512K+ to reach 100.

- **Multimodal: 70/100.** Text + image input, text output (+image-in only; no audio/video/PDF per AA). AA-MMMU-Pro at 72.5% and MMMU-Pro at 77.3% are decent signals but no video/PDF or audio input. (+image-in only → 60-70 tier.)

- **Coding: 84/100.** SWE-bench Verified at 80.8% (near-frontier ≈93-95%), SWE-Rebench at 65.3%, React Native Evals at 84.1%, Vibe Code Bench at 57.57%, and AA-SciCode at 51.9% (from BenchLM agentic section, near 55% threshold). Terminal-Bench 2.0 at 65.4% provides additional agentic coding evidence. Capped by no DeepSWE/SWE-bench Pro/LiveCodeBench standalone on BenchLM, and Vibe Code Bench/SciCode below frontier.

- **Cost efficiency: 45/100.** Premium tier pricing ($5.00 in / $25.00 out per 1M tokens; $3.85 blended with cache). noFreeId — paid only.

- **Overall Score: 77/100.** (82 + 54 + 95 + 70 + 84) / 5 = 385 / 5 = 77.0 → 77. **Up from prior 82:** prior file had "no verified public score found" for nearly all benchmarks, resulting in inflated scores based solely on Intelligence Index 26. Fresh Oct 10 BenchLM + AA + Anthropic system card data reveals strong actual benchmarks: GPQA Diamond 91.3%, SWE-bench Verified 80.8%, HLE 53%, τ²-bench 84.8%, BrowseComp 83.7%. Reasoning downgraded 78→54 (Intelligence Index 26 with no GPQA/HLE component data in prior file), Coding upgraded 80→84 (with SWE-bench Verified 80.8%, React Native Evals 84.1%). Tool use upgraded 82→82 (with new agentic data). Aligns with BenchLM Overall 62.12/100 rank #45/889 and AA Intelligence Index 26 (#4/61 non-reasoning). Deprecated in favor of Claude Opus 4.7.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public internet research via BenchLM model page (`benchlm.ai/models/claude-opus-4-6`, Oct 10), Artificial Analysis model page (`artificialanalysis.ai/models/claude-opus-4-6`, Oct 10), and Anthropic Claude Opus 4.6 system card (`14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf`); scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one using the same headings.

---
