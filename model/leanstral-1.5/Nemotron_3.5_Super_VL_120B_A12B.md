# Leanstral 1.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Mistral AI (`labs-leanstral-1-5`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Mistral AI's open-weight formal proof engineering model (119B total / 6.5B active parameters) optimized for automated theorem proving and autoformalization in Lean 4; deprecated and being phased out (deprecation 2026-09-29, hosted Labs endpoint retired 2026-09-30).
- **Provider / access:** Mistral Labs endpoint `labs-leanstral-1-5` (Chat Completions `/v1/chat/completions`; also supports `/v1/conversations`, function calling, agents, structured outputs); endpoint retired — open weights remain available under Apache-2.0.
- **Release / knowledge:** Released 2026-07-02 (availability June 30, 2026; research article July 2, 2026); knowledge cutoff not disclosed.
- **IDs:** `labs-leanstral-1-5` (Mistral Labs); open-weight checkpoints on Hugging Face / GitHub; no Free ID confirmed on Zen.
- **Context window:** 256K tokens total, 128K max output (verified on Mistral model card).
- **Modalities:** Text in / text out only; formal proof generation (reasoning); function calling and structured outputs supported; JSON mode not explicitly advertised. Not multimodal.
- **Pricing (as of 2026-10-27):** Not published on model card; hosted Labs API retired — no current hosted price; open weights freely deployable under Apache-2.0.
- **Architecture:** 119B total / 6.5B active parameters; sparse MoE design; open weights (Apache-2.0).

### Raw benchmarks found

All measured numbers below are Mistral self-reported (first-party). benchr's independent review explicitly states it performed no provider inference or independent benchmark replication, and BenchmarkList marks all 4 rows as first-party. No independent third-party verification exists.

Agent / tool use:
- FLTEval: **49 resolved instances (tasks)** — #1 / 1 (100th percentile) — repository-level Lean 4 proof engineering on Fermat's Last Theorem pull requests (Mistral model card / BenchmarkList, first-party)

Reasoning / knowledge:
- PutnamBench: **587 / 672 solved** — #1 / 15 (100th percentile) — mathematical reasoning / competition-style problem solving (Mistral model card / BenchmarkList / benchr, first-party)
- FATE-H: **87 / 100 solved** — #1 / 1 (100th percentile) — Lean-formalized hard abstract/commutative algebra problems (Mistral model card / BenchmarkList / benchr, first-party)
- FATE-X: **34 / 100 solved** — #1 / 1 (100th percentile) — extra-hard Lean-formalized algebra problems beyond PhD qualifying-exam difficulty (Mistral model card / BenchmarkList / benchr, first-party)
- No verified public score found for MMLU, GPQA Diamond, HLE, LCR/MLCR, CritPt, omniscience accuracy, or general knowledge.

Coding:
- FLTEval: **49 resolved instances** — Lean 4 proof engineering, not general coding (Mistral model card / BenchmarkList, first-party)
- No verified public score found for SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, DeepSWE, or general coding benchmarks.

Long context:
- Declared 256K context / 128K max output; no long-context retrieval benchmark (MRCR / RULER / GraphWalks) reported at any window length.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 40/100.** Function calling and structured outputs supported, but no verified agentic/tool-use benchmark scores (tau2/tau3/BrowseComp/WebVoyager absent).
- **Reasoning: 55/100.** Strong on formal-proof benchmarks (PutnamBench 587/672, FATE-H 87/100, FATE-X 34/100) but these are proof-domain, not general reasoning; no GPQA/HLE/LCR verification.
- **Context window: 85/100.** Declared 256K context with 128K max output, verified on model card; no measured long-context retrieval score at the full window.
- **Multimodal: 15/100.** Text-only model (text in, text out); no image/video/audio capability.
- **Coding: 35/100.** FLTEval (49 Lean 4 proof tasks) is proof engineering, not general coding; no SWE-bench/LiveCodeBench/SciCode verification.
- **Cost efficiency: 90/100.** Open weights (Apache-2.0) freely deployable; no hosted pricing published; deprecated endpoint reduces hosted utility.
- **Overall Score: 46/100.** Half-up mean of (40 + 55 + 85 + 15 + 35) / 5 = 46.0 → 46. Niche formal-proof model; unsuitable as a general chat/coding assistant.

### Conflicts noted

- Minor only — Mistral announcement rounds active parameters to 6B vs model card's 6.5B; identifier spelling differs (`leanstral-1-5` vs `labs-leanstral-1-5`). No score conflicts.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-27
- Method: public internet research (official Mistral model card; benchr independent review; BenchmarkList aggregator); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
