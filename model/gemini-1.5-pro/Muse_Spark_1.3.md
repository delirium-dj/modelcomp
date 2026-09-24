# Gemini 1.5 Pro — findings by Muse Spark 1.3

- Source: Google/Google DeepMind (`gemini-1.5-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro (002 update; retired)
- **Short description:** Google DeepMind's mid-size long-context multimodal model from the Gemini 1.5 family. Top use case was large-document, long-video/audio and big-codebase reasoning in a single prompt.
- **Provider / access:** Google AI Studio (`gemini-1.5-pro`, `gemini-1.5-pro-002`) and Vertex AI (`publishers/google/models/gemini-1.5-pro-002`). Chat Completions-style `generateContent` API, not Responses API. Retired: 001 discontinued 2025-05-27, 002 and `gemini-1.5-pro` alias shut down 2025-09-24 (API calls error; Google directs users to Gemini 2.0/2.5).
- **Release / knowledge:** 2024-02-15 release (002 update 2024-09-24); knowledge cutoff November 2023
- **IDs:** `google/gemini-1.5-pro`, `gemini-1.5-pro-002` (no Free ID exists on OpenCode Zen — scored on historical paid pricing)
- **Context window:** 2,097,152 tokens total (2M) at general availability; launched with 128K standard tier and 1M experimental preview; max output 8,192 tokens — verified via Google Developers Blog (Feb 2024, Sep 2024) and Gemini 1.5 technical report (arXiv 2403.05530)
- **Modalities:** text, image, audio, video/PDF in (interleaved, native multimodal); text out only; function calling / tool use yes; JSON mode yes; no native audio/image/video generation
- **Pricing (as of 2024-10-01, historical):** $1.25 / 1M input and $5.00 / 1M output for prompts ≤128K; $2.50 / 1M input and $10.00 / 1M output for prompts >128K; context caching with reduced cached-token rate — paid tier only, model now retired and no longer purchasable
- **Architecture:** proprietary sparse Mixture-of-Experts (MoE) Transformer, API only; params not publicly disclosed; reached ~1.0-Ultra quality at lower compute

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **58.9%** (Artificial Analysis, #143/187; corroborated 58.3% Vals AI, 57.2% Epoch AI, 59.1% TechBriefly aggregate)
- HLE: **4.6%** (Scale AI / CAIS via Artificial Analysis and BenchLeader; BenchmarkList reports 4.9%)
- LCR / MLCR: **no verified public score found** (closest proxy provisional: MRCR 82.6% reported in TechBriefly aggregate — long-context retrieval, different harness)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (closest proxy provisional: MMLU-Pro 75.0–75.8%, MATH 67.7% May-2024 tech report / 86.5% TechBriefly MATH aggregate, BIG-Bench Hard 89.2%)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **41.7%** (Vals AI, rank 109/123, 11th percentile; corroborated 40.8 lmspeed.net provisional)
- SciCode / AA-SciCode: **29.5%** (BenchmarkList / TechBriefly, rank 246/458)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** (closest proxies: HumanEval 84.1%, Natural2Code 85.4% / 42.3% variant, MBPP+ 74.6% per BenchmarkList/TechBriefly aggregates)

Long context:

- Needle-in-haystack **99.7% recall at 1M tokens, 99.2% to 10M tokens (text)** and MRCR **82.6%** (Gemini 1.5 technical report arXiv 2403.05530 and TechBriefly aggregate); production window 2M tokens with near-perfect recall across text/video/audio to 2M

### Normalized scores (1–100)

- **Tool use: 45/100.** Function calling exists but zero verified agentic scores (no Terminal-Bench, Tau, GDPval, Claw-Eval); pre-agentic 2024 generation caps it well below mid-tier.
- **Reasoning: 62/100.** GPQA Diamond ~58.9% with HLE 4.6% and MMLU-Pro ~75.8% place it in the methodology mid band (GPQA 60–80%, HLE <10% → 55–65); capped by sub-frontier science reasoning.
- **Context window: 98/100.** 2M production window with 99.7% needle recall at 1M and MRCR 82.6% meets the ≥1M 95–100 tier; capped below 100 by the small 8,192-token max output.
- **Multimodal: 88/100.** Native interleaved text/image/audio/video input with SOTA-era image/chart/doc/video results (MathVista ~63.9–68.1%, Video-MME 78.6%, DocVQA/ChartQA/InfographicVQA SOTA per tech report); capped because output is text-only.
- **Coding: 55/100.** LiveCodeBench 41.7% (11th percentile) and SciCode 29.5% sit well below the mid reference (LiveCode ~80% → 65–75); HumanEval 84.1% prevents a lower score but no SWE-bench Verified evidence caps it.
- **Cost efficiency: 85/100.** Historical paid $1.25/$5.00 (≤128K, doubling above) maps near the ~$1.25/$4.25 → ~88 methodology anchor; retired with no free tier caps it below free-scored models.
- **Overall Score: 70/100.** Mean of the five non-cost dims (45 + 62 + 98 + 88 + 55) / 5 = 69.6 → 70; best-fit as a retired long-context reference, not a current coding/agent pick — migrate to Gemini 2.0/2.5 family.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-24
- Method: public internet research (Google Developers Blog, Gemini 1.5 technical report arXiv 2403.05530, Artificial Analysis, Vals AI, Epoch AI, BenchmarkList/TechBriefly aggregates); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
