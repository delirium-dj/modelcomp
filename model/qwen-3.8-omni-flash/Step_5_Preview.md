# Qwen3.8 Omni Flash — findings by Step 5 Preview

- Source: Alibaba (Qwen team) / `qwen3.8-omni-flash` (QwenCloud / Alibaba Cloud API)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Omni Flash (Qwen3.8-Omni-Flash)
- **Short description:** Alibaba's native omnimodal API model (`qwen3.8-omni-flash`) for agentic audio-visual task execution — text, image, audio and video in, text out — released September 2026 as a closed, API-only offering alongside Qwen3.8-Max (a departure from Qwen's open-weight line). Tuned for practical coding and agentic workloads rather than maximal frontier reasoning.
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud API (OpenAI-compatible endpoint), id `qwen3.8-omni-flash`; also routed by several gateways (4 providers tracked on CloudPrice). No OpenCode Console/Zen route — verified absent from the live Console catalog, which lists only Qwen3.8 Max / Flash / 3.6 Plus / 3.5 Plus.
- **Release / knowledge:** released 2026-09 (Alibaba paper + QwenCloud launch; llm-stats tracks 2026-09-18, AIStatsLive 2026-09-21); knowledge cutoff not stated in public sources.
- **IDs:** `qwen/qwen3.8-omni-flash` via Alibaba Cloud; no Free ID exists.
- **Context window:** 1,000,000 tokens (1M) — consistent across llm-stats, CloudPrice, Respan and Writingmate; max output not stated in the sources checked.
- **Modalities:** text, image, audio and video input; text output; reasoning model with `reasoning_effort` control (step-by-step thinking); tool calling supported via the OpenAI-compatible API. No non-text output.
- **Pricing (as of 2026-11-10):** from $0.15 / 1M input and $0.47 / 1M output (Alibaba Cloud, corroborated by CloudPrice and Respan); no free tier documented.
- **Architecture:** proprietary, API-only (closed QwenCloud tier); parameter count not disclosed. Alibaba's paper describes some underlying research components as open-source artifacts, but the model ships only as a hosted API.

### Raw benchmarks found

All numbers below are self-reported in Alibaba's Qwen3.8-Omni-Flash technical paper (arXiv 2609.25611, September 2026) as surfaced by Benchgen's model card; they are vendor-reported, not independent measurements.

Agent / tool use:

- IFBench (instruction following): **81.5%** (Alibaba paper, self-reported)
- SWE-bench Multilingual: **80.5%** (Alibaba paper, self-reported)
- NL2Repo-Bench (repository-scale code generation): **48.9%** (Alibaba paper, self-reported) — indicates limited repo-scale generation versus coding specialists
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found — noted N/A
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld / computer use: no verified public score found (vendor positions it for agentic audio-visual execution, but no measured computer-use number published)

Reasoning / knowledge:

- GPQA Diamond: **91.0%** (Alibaba paper, self-reported — frontier reference band is 90%+)
- Humanity's Last Exam: **36.5%** (Alibaba paper, self-reported — below the 40% frontier reference; trails frontier flagships)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (not yet indexed)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- LiveCodeBench v6: **92.6%** (Alibaba paper, self-reported — elite competitive-programming result)
- SWE-bench Pro: **63.3%** (Alibaba paper, self-reported)
- SWE-bench Multilingual: **80.5%** (see agent/tool-use section; coding-family row)
- NL2Repo-Bench: **48.9%** (repo-scale generation is the weak row)
- SWE-bench Verified: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE 1.1: reported in the paper per Benchgen's note, but the value is not published in the surfaced table — treated as no verified public score found
- Terminal-Bench 4.0 / Vals coding boards: no verified public score found

Long context:

- 1M-token window verified by four independent trackers; no MRCR / RULER / GraphWalks retrieval figure reported at any window length.

### Normalized scores (1–100)

- **Tool use: 70/100.** Evidence is thin and vendor-reported: IFBench 81.5% and the omnimodal agentic-execution positioning carry the score, but Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon and OSWorld all read "no verified public score found", which the methodology penalizes rather than guesses at. Sits at the top of the mid band (50–70) without reaching the frontier band (90–100).
- **Reasoning: 89/100.** GPQA Diamond 91.0% clears the 90%+ frontier reference and LiveCodeBench v6 92.6% corroborates strong analytical capability, but HLE 36.5% falls below the 40% frontier reference — the exact pattern the rubric caps below 90. No independent index (AA/BenchLM) exists yet to lift it.
- **Context window: 96/100.** 1,000,000-token window sits in the ≥1M tier (95–100); the 100 level needs ≥98% retrieval at 512K+ and no MRCR/RULER retrieval figure is published, so it stays at 96.
- **Multimodal: 92/100.** Native text + image + audio + video input with text-only output — the widest input coverage in this dataset — lands in the rubric's top band (+audio in = 90–100); held just below 100 because there is no non-text output.
- **Coding: 88/100.** LiveCodeBench v6 92.6%, SWE-bench Multilingual 80.5% and SWE-bench Pro 63.3% are strong-to-elite, all self-reported; NL2Repo-Bench 48.9% and the missing SWE-bench Verified / Vibe Code Bench / Terminal-Bench numbers cap it below the frontier band.
- **Cost efficiency: 95/100.** $0.15/$0.47 per 1M with a 1M window lands in the ~$0.10/$0.20 reference band (97–99); the slightly higher output rate and no free tier keep it at 95.
- **Overall Score: 87/100.** Mean of Tool use 70, Reasoning 89, Context window 96, Multimodal 92, Coding 88. Best fit: cheap, omnimodal agentic workloads (audio-visual task execution, multilingual code tasks) where the 1M window and $0.15/$0.47 pricing matter more than top-tier agentic-tool depth — and note the benchmark numbers are vendor-reported pending independent runs.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-10
- Method: public internet research (Alibaba's arXiv technical paper as surfaced by Benchgen, plus llm-stats, CloudPrice, Respan, AIStatsLive and Writingmate spec trackers, and the OpenCode Console catalog); scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. Unreported benchmarks are marked "no verified public score found" rather than estimated.
- Reference URLs:
  - [Alibaba — Qwen3.8-Omni-Flash technical paper (arXiv 2609.25611)](https://arxiv.org/abs/2609.25611)
  - [Benchgen — Qwen3.8-Omni-Flash model card (paper-sourced benchmark table)](https://benchgen.com/models/alibaba/qwen3-8-omni-flash)
  - [LLM Stats — Qwen3.8 Omni Flash specs and release date](https://llm-stats.com/models/qwen3.8-omni-flash)
  - [CloudPrice — Qwen3.8 Omni Flash pricing and provider coverage](https://cloudprice.net/models/alibaba-qwen3-8-flash-omni)
  - [AIStatsLive — Qwen3.8 Omni Flash release and pricing](https://aistatslive.com/model/qwen3-8-omni-flash)
  - [Respan — Qwen3.8 Omni Flash API pricing and context](https://www.respan.ai/models/qwen3.8-omni-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
