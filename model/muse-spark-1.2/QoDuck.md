# Muse Spark 1.2 — findings by QoDuck

- Source: Meta / Muse Spark 1.2 (`meta/muse-spark-1.2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 (all tiers: Contributor, Contributor Free, Free, Standard, Max)
- **Short description:** Coding-focused update to Meta Superintelligence Labs' Muse Spark 1.1, shipped alongside the Muse Code terminal CLI agent (beta). Proprietary reasoning model optimized for agentic software work. **Variant/alias note:** the `muse-spark-1.2` slug covers EVERY tier — Contributor / Contributor Free / Free / Standard / Max all run the same weights; only price and data-use terms differ, so no tier-suffixed folder is ever scaffolded. Now **deprecated** on Artificial Analysis (superseded by Muse Spark 1.3, released 2026-09-02).
- **Provider / access:** Meta Model API; OpenRouter `meta/muse-spark-1.2` (Chat Completions API; `reasoning_effort` accepted, tools/tool_choice supported; no EU in-region routing).
- **Release / knowledge:** 2026-08-05 release; knowledge cutoff not published by Meta.
- **IDs:** `meta/muse-spark-1.2` (OpenRouter); Meta Model API `muse-spark-1.2`. Free/Contributor tiers share the same underlying model ID with different pricing/data terms.
- **Context window:** 1,048,576 tokens (1M) total, verified via OpenRouter + Artificial Analysis model page; max output not stated by the provider.
- **Modalities:** Omni-modal **input** — text, image, speech (audio), video; **text-only output**. Reasoning: yes (xhigh effort). Tool calls: yes. JSON mode: yes (tool/structured output).
- **Pricing (as of 2026-11-10):** $1.25 / 1M input, $4.25 / 1M output, $0.15 / 1M cache hit (88% cache discount); blended ~$0.78 / 1M; ~$0.40 per Artificial Analysis Index task at launch (up from $0.29 for 1.1). Free/Contributor tiers price at $0 but carry data-use/privacy caveats.
- **Architecture:** Proprietary, closed weights (no params/license published). Speed ~192.24 tok/s, TTFT ~7.87s (Artificial Analysis).

### Raw benchmarks found

> Meta published **no vendor benchmark numbers** (no MMLU / SWE-bench / HumanEval / MATH / GPQA / LiveCodeBench). Official blog charts for Terminal-Bench 2.1, DeepSWE 1.1 and a "Meta Internal Coding Bench" carry no text values. Artificial Analysis independent runs (launch article v4.x + current model page v5.0.1) are the primary quantitative source; DeepSWE corroborated by MindStudio.

Agent / tool use:

- Terminal-Bench 2.1 (**agentic terminal**): **80%** launch (Artificial Analysis article) / **80.15%** current (AA model page v5.0.1).
- Terminal-Bench 4.0 (**agentic terminal, harder**): **7.07%** current (AA model page) — very weak; the launch-era 2.1 score does not carry over to the harder 4.0 harness.
- Tau3-Banking / Tau2-Bench: **27%** τ³-Banking launch (AA article) / **34.85%** tau-Banking current (AA model page); tau2 not reported.
- GDPval-AA: **1631 Elo** (#5) launch (AA article, up 260 from 1.1's 1371; behind Opus 5 1852, GPT-5.6 Sol 1730, Kimi K3 1685; ahead Opus 4.8 1588) / **1480.04 Elo** current (AA model page, CI 1461–1499) — pool-relative decline as newer models entered.
- AutomationBench-AA: **40.61%** current (AA model page).
- AA-Briefcase: **1323.61 Elo** (rubric 0.4515) current (AA model page).
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **90.40%** current (AA model page v5.0.1).
- HLE: **44%** launch (AA article) / **45.46%** current (AA model page, original HLE).
- LCR / MLCR: **AA-LCR 79%** / **MLCR 0.0722 (7.22%)** current (AA model page) — long-context recall strong, multi-hop recall weak.
- CritPt: **18%** launch (AA article) / **17.71%** current (AA model page).
- Artificial Analysis Intelligence Index: **54** (xhigh) launch (v4.x; up from 1.1's 51, 1.0's 43; tied Grok 4.5 high 54, behind GPT-5.5 xhigh 55, Kimi K3 57, GPT-5.6 Sol 59, Fable 5 60, Opus 5 61) / **null (N/A)** current (v5.0.1) — deprecated, components retained but headline Index withdrawn.
- SciCode: **56%** launch (AA article) / **57.41%** current (AA model page).
- Omniscience Accuracy / Hallucination Rate: **38% / 28%** launch (AA-Omniscience Index 22, attempt rate 67% — abstention-driven) / current AA-Omniscience **null**.
- EnterpriseOps-Gym: **0.4727** current (AA model page).
- GDP.pdf: **0.174** current (AA model page).

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found (Meta published none; AA does not list).
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: **57.41%** current (AA model page; 56% launch) — clears the 55% coding anchor.
- DeepSWE: **59.3%** (MindStudio, corroborated against same-week Qwen 3.8 Max 56.6%; Opus 5 / GPT-5.6 Turbo slightly higher; GPT-5.6 Sol / Fable 5 highest but omitted from Meta charts).
- Vibe Code Bench: no verified public score found.
- Meta Internal Coding Bench: chart published, **no text value** — not usable.
- Kernel-optimization case study (qualitative): 1000+ tool calls / up to 24h on KDA + MLA Triton kernels for NVIDIA Hopper (Meta blog).

Long context:

- AA-LCR **79%** (long-context recall) current; **no ≥98% retrieval reported at 512K+** for this exact model (Muse Spark 1.3's MRCR 98.5% is a different, newer model and is NOT attributed here). MLCR **7.22%** (multi-hop) weak.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency excluded.

- **Tool use: 79/100.** GDPval-AA 1631 (#5) launch / 1480 current and Terminal-Bench 2.1 80.15% plus AutomationBench 40.61% show solid agentic tool use, but capped well below 90 by the very weak Terminal-Bench 4.0 7.07%, modest Tau-Banking 27→34.85%, and GDPval below the 1750 top-tier anchor.
- **Reasoning: 85/100.** GPQA Diamond 90.40% clears the 90 anchor and HLE 45.46% clears 40, with SciCode 57.41% and AA-LCR 79% supporting; capped below 90 by launch Index 54 (below the 60 anchor), current Index null (deprecated), CritPt 17.71%, MLCR 7.22%, and Omniscience accuracy 38%.
- **Context window: 95/100.** 1,048,576-token (1M) window verified via OpenRouter + AA, with AA-LCR 79% recall; not 100 because no ≥98% retrieval at 512K+ is reported for this exact model.
- **Multimodal: 88/100.** Omni-modal input (text, image, speech/audio, video) → text-only output; strong coverage per the audio-in/video-in tier, capped below 90 by text-only output and no measured MMMU-Pro/video/audio benchmark value published.
- **Coding: 80/100.** Coding-focused model with SciCode 57.41% (clears 55) and DeepSWE 59.3%; capped below 90 by DeepSWE under the 74 anchor, Terminal-Bench 2.1 80 under 85, Terminal-Bench 4.0 7.07%, and no vendor SWE-bench Verified / LiveCodeBench numbers.
- **Cost efficiency: 88/100.** $1.25 in / $4.25 out matches the ~$1.25/$4.25 ≈ 88 anchor exactly, with an 88% cache discount ($0.15) and ~$0.40/Index task; Free/Contributor tiers are $0 but carry data-use caveats.
- **Overall Score: 85.4/100.** Half-up mean of (79 + 85 + 95 + 88 + 80) / 5 = 427 / 5 = 85.4. Best fit: budget-conscious agentic coding / terminal automation on a 1M-context omni-input model; not a frontier reasoning or hard-terminal (TB4.0) pick, and now deprecated in favor of Muse Spark 1.3.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-10
- Method: public internet research (≥3 independent searches; official Meta blog + Artificial Analysis launch article and current model page + MindStudio + Layer3Labs + OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Introducing Muse Code and Muse Spark 1.2](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2)
  - [Artificial Analysis — Muse Spark 1.2 launch article](https://artificialanalysis.ai/articles/muse-spark-1-2)
  - [Artificial Analysis — Muse Spark 1.2 model page (current components)](https://artificialanalysis.ai/models/muse-spark-1-2)
  - [OpenRouter — meta/muse-spark-1.2](https://openrouter.ai/meta/muse-spark-1.2)
  - [MindStudio — Meta Muse Code / Spark coding agent (DeepSWE 59.3%)](https://mindstudio.ai/blog/meta-muse-code-spark-coding-agent)
  - [Layer3Labs — Muse Spark 1.2 benchmarks (no vendor numbers; tiers same weights)](https://layer3labs.io/guides/muse-spark-1-2-benchmarks)
  - [DataNorth — Meta releases Muse Spark 1.2 and Muse Code](https://datanorth.ai/news/meta-releases-muse-spark-1-2-and-muse-code)
  - [Meta — Muse Code developer product page](https://developer.meta.com/ai/products/muse-code/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.