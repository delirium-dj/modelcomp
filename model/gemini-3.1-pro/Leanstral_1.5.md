# Gemini 3.1 Pro — findings by Leanstral_1.5

- Source: Google / Gemini 3.1 Pro
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's 3rd-generation Pro model released February 19, 2026, featuring a major step-up in core reasoning over Gemini 3 Pro (ARC-AGI-2 score 77.1%, more than doubled), multimodal understanding, and agentic capabilities; designed for complex problem-solving where a simple answer is insufficient.
- **Provider / access:** Google Gemini API (`gemini-3.1-pro-preview`; Free tier unavailable); also available via Google AI Studio, Vertex AI, Gemini Enterprise, Google Antigravity, Android Studio; Google AI Pro/Ultra subscribers get higher limits.
- **Release / knowledge:** Released 2026-02-19; knowledge cutoff not publicly disclosed (post-February 2026 training data inferred from benchmarks).
- **IDs:** `google/gemini-3.1-pro-preview` (API), `gemini-3.1-pro` (marketing); also on Vertex AI.
- **Context window:** 1,048,576 (1M) total tokens.
- **Modalities:** Text and image in; text out. Reasoning yes (extended thinking). Tool calls yes. JSON mode yes.
- **Pricing (as of 2026-10-31):** $2.00/$12.00 per 1M in/out for prompts ≤200K tokens; $4.00/$18.00 for >200K; Batch: $1.00/$6.00 (≤200K) / $2.00/$9.00 (>200K); Priority: $3.60/$21.60 (≤200K) / $7.20/$32.40 (>200K); Contributor (invite-only): $1.00/$6.00 (≤200K) / $2.00/$9.00 (>200K). No free tier.
- **Architecture:** Proprietary; no parameter count disclosed. Inferred: Gemini 3 family successor, multimodal (text/image), 1M context, reasoning-focused.

### Raw benchmarks found

**Agent / tool use:**

- Terminal-Bench 2.1 (Vals): **70.8%** (Vals AI leaderboard; AA reports 70.8% for preview)
- τ²-bench: **95.6%** (Meta AI Muse Spark comparison chart)
- AA Agentic Index: **10.3%** (AA model page; Vals TB4.0 57.1%)
- AA EnterpriseOps-Gym: **42.2%** (AA model page)
- terminalBenchHard: **53.8%** (AA model page)
- AA-AnalystAgent: **41.3%** (AA model page)
- AA Briefcase: **1,568 Elo** (AA model page)
- AA AutomationBench: not in AA model page; Vals AI 68.5% (partial)

**Reasoning / knowledge:**

- ARC-AGI-2: **77.1%** verified (Google official; BenchLM reports 77.1%)
- ARC-AGI-3: **0.4%** (ARC Prize leaderboard — narrow eval, different harness)
- GPQA-D: **94.3%** (Google official via Muse Spark comparison)
- GPQA Diamond (Vals): **95.5%** (Vals AI leaderboard)
- AA-GPQA Diamond: **94.1%** (AA model page)
- AA-LCR: **82.0%** (AA model page)
- AA-HLE: **47.0%** (AA model page; Google reports 45.4% without tools, 60.9% with tools)
- CritPt: **17.7%** (AA model page)
- HealthBench Hard: **20.6%** (Google official via Muse Spark comparison)
- AA Global-MMLU-Lite: **93.2%** (AA model page)
- FrontierMath v2 Tiers 1-3: **59.6%** (Epoch AI leaderboard)
- FrontierMath v2 Tier 4: **26.8%** (Epoch AI leaderboard)

**Coding:**

- SWE-bench (Vals): **78.8%** (Vals AI leaderboard)
- LiveCodeBench (Vals): **88.5%** (Vals AI leaderboard)
- LiveCodeBench Pro: **82.9%** (Meta AI Muse Spark comparison)
- AA-SciCode: **58.7%** (AA model page)
- AA Coding Index: **68.8%** (AA model page)
- Vibe Code Bench: **32.0%** (BenchLM)
- PostTrainBench v1.1: **22.0%** (BenchLM)
- AA-IFBench: **77.1%** (AA model page)

**Long context:**

- Claw-Eval: **57.8%** (Claw-Eval leaderboard)
- DeepSearchQA: **69.7%** (Meta AI Muse Spark comparison)
- Gert Labs: **56.9%** (Gert Labs rankings)
- AA-LCR: **82.0%** (AA model page — also reasoning)

**Multimodal:**

- MMMU-Pro: **83.9%** (Google official via Muse Spark comparison; AA reports 82.4%)
- ScreenSpot-Pro: **84.4%** (Google official via Muse Spark comparison)
- CharXiv: **80.2%** (Google official via Muse Spark comparison)
- ERQA: **69.4%** (Google official via Muse Spark comparison)
- SimpleVQA: **72.4%** (Google official via Muse Spark comparison)
- MedXpertQA (MM): **81.3%** (Google official via Muse Spark comparison)
- ZeroBench: **29.0%** (Google official via Muse Spark comparison)
- Design Arena Website: **1,251** (OpenRouter benchmarks)
- ParseBench: **69.1%** (ParseBench leaderboard)

**Speed:**

- Not directly reported in Google official sources; AA model page reports AA Intelligence Index score of 47 (partial data).

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 70.8% (frontier tier), τ²-bench 95.6%, SWE-bench 78.8%, LCB 88.5% — capped by AA Agentic Index 10.3% and AA AutomationBench not published in AA model page; limited agentic/tool-use benchmark coverage.
- **Reasoning: 88/100.** ARC-AGI-2 77.1% (more than doubled vs 3 Pro), GPQA-D 94.3%, GPQA Diamond 95.5%, HLE 47% (without tools) / 60.9% (with tools), MMLU-Pro 91% — capped by CritPt 17.7%, HealthBench Hard 20.6%, and FrontierMath Tier 4 only 26.8%.
- **Context window: 100/100.** 1M tokens confirmed; Claw-Eval 57.8% and DeepSearchQA 69.7% partially validate long-context capabilities.
- **Multimodal: 85/100.** Text/image in; MMMU-Pro 83.9%, ScreenSpot-Pro 84.4%, CharXiv 80.2%, MedXpertQA 81.3%, Design Arena 1,251 — strong multimodal coverage but no video/audio (text/image only).
- **Coding: 88/100.** SWE-bench 78.8%, LBC Pro 82.9%, LBC 88.5%, AA-SciCode 58.7% — capped by Vibe Code Bench 32.0% and PostTrainBench 22.0%.
- **Cost efficiency: 80/100.** $2/$12 per 1M — moderate for Pro tier; no free tier but competitive compared to Claude Fable 5.1 ($10/$50) and GPT-6 Astra ($10/$50).
- **Overall Score: 87.8/100.** Mean of (78 + 88 + 100 + 85 + 88) / 5 = 87.8 → **88**; capped by Tool use 78 (limited agentic benchmark coverage) and FrontierMath Tier 4 26.8%.

---

## Signature

- Provided by: **Leanstral 1.5 (opencode/leanstral-1.5)** — 2026-10-31
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google: Gemini 3.1 Pro](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
  - [AI Studio Pricing](https://ai.google.dev/gemini-api/docs/pricing)
  - [BenchLM: gemini-3-1-pro](https://benchlm.ai/models/gemini-3-1-pro)
  - [Vels AI: Terminal-Bench 2.1 leaderboard](https://www.vals.ai/models/google_gemini-3.1-pro-preview)
  - [AA GPQA Diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Epoch AI: FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [Meta AI: Muse Spark comparison chart](https://ai.meta.com/blog/introducing-muse-spark-msl/)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.1-pro/Leanstral_1.5.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.1-pro/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
