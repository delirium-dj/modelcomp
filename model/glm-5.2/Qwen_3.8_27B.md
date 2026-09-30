# GLM-5.2 — findings by Qwen 3.8 27B

- Source: Zhipu AI (Z.ai) / GLM-5.2, OpenCode Zen (`opencode/glm-5.2`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Zhipu AI's (Z.ai) open-weight flagship foundation model for long-horizon, agentic coding: ~753B-parameter MoE under an MIT license with a verified 1M-token context, released June 2026; positioned as the strongest open-source model for long-running coding-agent tasks. Text-only (no vision), a regression from the multimodal direction of some rivals.
- **Provider / access:** Z.ai first-party API, Chat Completions at `https://api.z.ai/api/paas/v4/chat/completions` (model `glm-5.2`; `thinking` enabled by default, `reasoning_effort` high/max, structured JSON output, function calling, MCP, context caching per docs.z.ai). OpenCode Zen `opencode/glm-5.2` (paid). Self-host from open weights (`zai-org/GLM-5.2` on Hugging Face) via vLLM-class inference.
- **Release / knowledge:** released 2026-06-13, public benchmark table from 2026-06-16 (Z.ai blog/docs, llm-stats); knowledge cutoff not disclosed.
- **IDs:** `opencode/glm-5.2` on OpenCode Zen — **no Free ID exists on Zen** (models.dev catalog lists `glm-5.2.toml` only, base_model `zhipuai/glm-5.2`; `glm-5.2-free` not found); HF `zai-org/GLM-5.2`.
- **Context window:** 1,000,000 tokens total; 128K (131,072) max output — verified from Z.ai official docs model card (input 1M / max output 128K); llm-stats lists 1.0M in / 1.0M out provider-side.
- **Modalities:** text in, text out (Z.ai docs state text-only input modality); reasoning yes (multiple thinking modes, on by default); tool calls yes; JSON/structured output yes; no image/video/audio input.
- **Pricing (as of 2026-09-30):** paid — ZAI/OpenCode Zen $1.40/M input, $4.40/M output, $0.26/M cache read (models.dev `glm-5.2.toml`; ZAI listing via llm-stats); cheaper reseller DeepInfra $0.75/M in, $0.14/M cached in, $2.40/M out; GLM Coding Plan subscriptions $18/$72/$160 per month (Lite/Pro/Max). Caveat: hosted API runs on Zhipu infrastructure under Chinese jurisdiction (data-residency consideration for proprietary code).
- **Architecture:** Mixture-of-Experts, ~753B total parameters (reported 744B–753B across outlets, counting variance for MoE total vs active); MIT license, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (Zhipu vendor, launch table; GLM-5.1 prior: 63.5%, GPT-5.5: 84.0%, Claude Opus 4.8: 85.0%) — Z.ai blog/docs launch materials
- Terminal-Bench 2.1 (independent): **77.9%** (Artificial Analysis own harness, ~3.1 below vendor figure; via The Planet Tools review, 2026-08-03)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Zhipu-reported, per Codersera/Layer3/Apidog benchmark tables, Jun–Sep 2026)
- HLE: **40.5%** (Z.ai launch table, via freellm.net external reference, 2026-06-16)
- AIME: **99.2%** (groundy.com launch analysis, 2026-06-19)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index v4.1: **51, rank #6 among open-weight models** (Synthszr ranking snapshot, early Sep 2026; top spot taken since by Kimi K3)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Pro: **62.1%** (Zhipu vendor; GPT-5.5: 58.6%, Claude Opus 4.8: 69.2%, GLM-5.1: 58.4%) — vendor table, directionally corroborated by Codersera/Layer3/Apidog; not independently reproduced
- SWE-bench Verified: no verified public score found
- FrontierSWE: **74.4%** (Zhipu vendor; Claude Opus 4.8: 75.1%, GPT-5.5: 72.6%) — source of the "near-parity with Opus 4.8" claim, specific to this long-horizon benchmark
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Design Arena Code Categories: **#1 overall** (independent blind human-preference arena, ~10 Elo ahead of Claude Fable 5 — strongest fully independent signal; Layer3 Labs review, 2026-09-07)
- BenchLM overall: **62.44/100, rank #41 of 210** (benchlm.ai, 25 source rows)
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- "Solid 1M lossless context" with months of long-horizon coding-agent training; vendor claims stable performance at ultra-long context, "surpassing Opus in select real-world benchmarks" (Z.ai docs). No independent MRCR/RULER retrieval numbers published for this exact model → vendor stability claim treated as provisional.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 at 81.0 vendor / 77.9 independent sits well above the mid band (45–60% → 50–70) but short of the 88%+ frontier band; the ~3-point vendor-to-independent gap caps the score.
- **Reasoning: 86/100.** GPQA Diamond 91.2% and AIME 99.2% are frontier-level, but HLE 40.5% and an AA Intelligence Index of 51 (below the 60+ frontier reference, #6 open-weight) cap it below 90.
- **Context window: 96/100.** Officially documented 1M-token input (128K output) lands in the ≥1M tier (95–100); no measured ≥98% retrieval at 512K+ to award 100, and the "lossless" claim is vendor-only.
- **Multimodal: 15/100.** Text-only in and text-only out per Z.ai official docs; no image/video/PDF/audio input.
- **Coding: 87/100.** SWE-bench Pro 62.1 beats GPT-5.5 and FrontierSWE 74.4 is within 0.7 of Opus 4.8, plus #1 on the independent Design Arena Code leaderboard; capped by the 7-point SWE-Pro gap to Opus 4.8, missing SWE-bench Verified/LiveCodeBench data, and vendor-only provenance of the key point scores.
- **Cost efficiency: 88/100.** Paid at $1.40/$4.40 per 1M (cache $0.26) — essentially the ~$1.25/$4.25 reference (~88); cheaper DeepInfra route ($0.75/$2.40) and MIT self-hosting available; no Zen Free ID.
- **Overall Score: 74/100.** Mean of (84+86+96+15+87)/5 = 73.6, half-up 74 — the top open-weight long-horizon coding pick when text-only input and paid pricing are acceptable; step up to Opus 4.8 for the hardest multi-file refactors.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-30
- Method: public internet research (Z.ai docs and launch blog, llm-stats model/pricing page, Layer3 Labs verified-vs-claimed review, shattered.io benchmark breakdown with Codersera/Beam AI/Planet Tools rows, Design Arena leaderboard via Layer3 Labs, Synthszr AA Index snapshot, benchlm.ai, models.dev `glm-5.2.toml` catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
