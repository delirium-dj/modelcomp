# Grok 4.3 — findings by Space Bunny

- Source: SpaceXAI / xAI (`grok-4.3`; high reasoning)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change, upward.** Three previously-unavailable evidence classes have appeared. **Vals AI** now has a full row: **SWE-bench 71.4%**, **LiveCodeBench 84.5%**, **Terminal-Bench 2.1 41.9%**, **GPQA Diamond 91.4%**, **MMLU-Pro 85.8%**. **AA-MMMU-Pro is 78.1%**, converting a placeholder 64 into real vision evidence. And the **AA Intelligence Index reads 37.6, not the 25 recorded on the prior pass** — a large upward revision. One downward revision: **AA-LCR 64.3%**, against the 73.0% previously recorded. Net: **Reasoning 84 → 86**, **Context 98 → 96**, **Multimodal 64 → 76**, **Coding 72 → 78**, Overall **81.2 → 84.8**.

## Model card

- **Name:** Grok 4.3 (high reasoning)
- **Short description:** SpaceXAI's reasoning-first model for agentic tool use, instruction following, multimodal workflows, and long-context enterprise analysis. Notable as **the only wide-context model in the xAI line** — the 4.5/4.6/4.7 generation all dropped to 500K. **Deprecated by Artificial Analysis**, which names Grok 4.6 as the suggested successor and restricts ongoing measurement to the default 10k input-token workload.
- **Provider / access:** xAI API `grok-4.3` (alias `grok-4.3-latest`); OpenRouter `x-ai/grok-4.3`; Amazon Bedrock `xai.grok-4.3` via its OpenAI-compatible Mantle endpoint. Artificial Analysis lists **3 API providers**.
- **Lifecycle:** **Deprecated by Artificial Analysis**, which restricts measurement to the 10k default workload, making all other results frozen history and names Grok 4.6 as the successor. No xAI deprecation notice or retirement date was found.
- **Release / knowledge:** Released **2026-04-30** (OpenRouter dated slug `grok-4.3-20260430`; Artificial Analysis FAQ confirms the same date). No verified knowledge cutoff published — a notable gap for a model this old.
- **IDs:** xAI `grok-4.3` / `grok-4.3-latest`; OpenRouter `x-ai/grok-4.3`; Bedrock `xai.grok-4.3`.
- **Context window:** **1,000,000 tokens** (Artificial Analysis; BenchLM). xAI documents higher-context pricing above 200K.
- **Modalities:** Text and image input; text output. Configurable reasoning (`none`, `low`, `medium`, `high`, with current docs also listing `xhigh`), function/tool calling, structured outputs. OpenRouter additionally lists file input. No audio or video.
- **Pricing (verified 2026-10-10, unchanged):** **$1.25 input / $0.20 cached input (84% cache discount) / $2.50 output** per 1M; blended **$0.64 per 1M** on a 7:2:1 ratio. Higher rates above 200K. Artificial Analysis ranks it **#6 of 216 for cost** at **$0.21 per Intelligence Index task** — among the cheapest tiers at its intelligence level.
- **Speed / latency:** **112.6 output tokens/s** (#42/216; class median 79.1); **TTFT 30.51s** (class median 3.89s — at the high end because of reasoning time). Fairly concise: 87M index output tokens vs. an 88M median.
- **Architecture:** Proprietary; parameter count and architecture not publicly disclosed.

### Raw benchmarks found

> Because the model is deprecated, Artificial Analysis measurements are frozen historical values. Harness and source labels are retained.

Agent / tool use:

- **τ²-bench: 97.7%** (Artificial Analysis high reasoning) — the strongest structured tool-use number in this dataset
- **IFBench: 81.3%** (Artificial Analysis)
- **Terminal-Bench 2.1 (Vals AI): 41.9%** — low, and the only independent terminal measurement
- **AA Agentic Index: 17.2%** (was 15.5 on the prior pass); **APEX-Agents-AA: 17.0%**
- **GDPval-AA: 29.2%** (OpenRouter) / **1018 Elo** (Artificial Analysis) — the release measurement was 1,500 Elo; the current figure is far lower
- Gert Labs **43.86%**; **ResearchClawBench 12.4%**
- AutomationBench-AA / AA-Briefcase v1.1 / GDPval-AA v2.1 / Terminal-Bench 4.0: **no verified public exact value found** for this model

Reasoning / knowledge:

- **GPQA Diamond 90.1%** (Artificial Analysis) / **91.4%** (Vals AI) — close agreement
- **MMLU-Pro 85.8%** (Vals AI)
- HLE **35%**; **AA-HLE 37.2%** (Artificial Analysis)
- **AA-Omniscience: Index 18.0%, Accuracy 34.6%, Hallucination Rate 25.0%** — the accuracy is low but the **hallucination rate is one of the better in this dataset**; the prior pass's "74.2% non-hallucination" is consistent with this 25.0%
- **CritPt 8.0%**
- **AA-LCR v1.1: 64.3%** (OpenRouter) — **revision: the prior pass recorded 73.0%** from the Artificial Analysis high-reasoning run. Two figures now exist for the same component; both are retained.
- **Artificial Analysis Intelligence Index: 37.6** (BenchLM-transcribed) — **large upward revision from the 25 recorded on 2026-09-29.** Cause not stated in the sources reviewed; it may reflect a methodology update or a completed re-run. The original 2026-04-30 release evaluation was **53** under the then-current index, so this value now sits between the two prior vintages rather than below both.
- **Design Arena Website 1201** (OpenRouter)

Coding:

- **SWE-bench 71.4%** (Vals AI)
- **LiveCodeBench 84.5%** (Vals AI)
- AA-SciCode **48.3%**; SciCode **47.3%**; **AA Coding Index 42.3%**
- SWE-bench Verified, Vibe Code Bench, DeepSWE: **no verified public score found**

Multimodal:

- **AA-MMMU-Pro 78.1%** (Artificial Analysis) — new
- No video, audio, or document benchmark published

Sources consulted: [BenchLM Grok 4.3 (updated 2026-10-10)](https://benchlm.ai/models/grok-4-3), [Artificial Analysis Grok 4.3](https://artificialanalysis.ai/models/grok-4-3), [Vals AI Grok 4.3](https://www.vals.ai/models/grok_grok-4.3), [OpenRouter Grok 4.3 benchmarks](https://openrouter.ai/x-ai/grok-4.3/benchmarks), [ResearchClawBench leaderboard](https://internscience.github.io/ResearchClawBench-Home/), [Gert Labs rankings](https://gertlabs.com/rankings), and [Artificial Analysis IFBench leaderboard](https://artificialanalysis.ai/evaluations/ifbench), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 88/100.** Unchanged. **τ²-bench at 97.7%** and **IFBench at 81.3%** demonstrate exceptional structured tool use and instruction following — and both are now independently confirmed rather than single-sourced. Held at 88 by a cluster of weak agentic rows that no prior pass had measured: **AA Agentic Index 17.2%**, **APEX-Agents-AA 17.0%**, **Terminal-Bench 2.1 at 41.9% (Vals)**, **ResearchClawBench 12.4%**, and **GDPval-AA at 1018 Elo / 29.2%** — a large drop from the 1,500 Elo quoted at release.
- **Reasoning: 86/100.** Raised from 84. **GPQA Diamond 90.1% (AA) and 91.4% (Vals)** agree closely and are frontier-tier for the generation, **MMLU-Pro 85.8%** is strong, and the **AA Intelligence Index has been revised upward to 37.6** from 25. Knowledge grounding is a genuine positive: **AA-Omniscience Hallucination Rate of 25.0%** is among the better in this dataset — this model declines rather than confabulates. Held below 90 by **HLE at 35–37.2%**, **CritPt at 8.0%**, and **Omniscience Accuracy of only 34.6%**, which is the other side of that good calibration — it is careful because it knows less.
- **Context window: 96/100.** Reduced from 98. The **1M window is verified** and remains the widest in the xAI line — Grok 4.5, 4.6, and 4.7 all dropped to 500K — so this is a real specification advantage. Reduced because the long-context *measurement* is now **worse than previously recorded: AA-LCR 64.3% against 73.0%**, and 64.3% is only mid-pack at full length. A 1M window with mediocre full-length retrieval is worth less than a 500K window with good retrieval.
- **Multimodal: 76/100.** Raised from 64 — the largest correction in this report. The prior pass recorded "no exact-model visual benchmark was verified" and scored a placeholder. **AA-MMMU-Pro at 78.1%** is a solid independent visual-reasoning result, and **Design Arena Website 1201** is a live preference signal. Not raised further: text and image input only, no audio, video, or document benchmarks.
- **Coding: 78/100.** Raised from 72. The prior pass had **no SWE-bench or LiveCodeBench figure at all**. **Vals AI's SWE-bench 71.4% and LiveCodeBench 84.5%** are real independent coding measurements, supported by SciCode 48.3%. Capped by **Terminal-Bench 2.1 at 41.9% (Vals)** — the weakest independent terminal figure among the xAI models measured in this batch — and by an **AA Coding Index of only 42.3%**.
- **Cost efficiency: 91/100.** Unchanged. **$1.25 / $2.50 with an 84% cache discount and $0.21 per Intelligence Index task (#6 of 216 for cost)** remains among the cheapest first-party inference offers in this dataset, and 112.6 tokens/s is fast for a reasoning model. The higher tier above 200K tokens reduces the benefit exactly where the 1M window would be most valuable.
- **Overall Score: 84.8/100.** (88 + 86 + 96 + 76 + 78) / 5 = 424 / 5 = 84.8, up from 81.2. The prior pass scored three dimensions on thin or absent evidence, and Vals AI plus MMMU-Pro have since supplied it. **Best fit: instruction-following and structured tool-use pipelines that need a 1M window, where τ²-bench 97.7% and a 25.0% hallucination rate matter more than terminal-agent or frontier-exam performance.** **Not a fit for:** new deployments (Artificial Analysis marks it deprecated, successor Grok 4.6), knowledge-retrieval work (34.6% Omniscience accuracy), or unattended coding agents (Terminal-Bench 2.1 at 41.9%).

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of BenchLM's Grok 4.3 record (which carries per-benchmark source attribution to Artificial Analysis, Vals AI, OpenRouter, ResearchClawBench, and Gert Labs), plus the Artificial Analysis, Vals AI, and OpenRouter pages directly; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — two unresolved revisions: **AA Intelligence Index 25 → 37.6**, a large upward movement whose cause the sources do not state (plausibly a methodology update or completed re-run), recorded with the prior vintages (53 at release, 25 on 2026-09-29, 37.6 now) rather than silently overwritten; and **AA-LCR 73.0% → 64.3%**, now sourced to OpenRouter rather than the Artificial Analysis high-reasoning run, with both retained. **GDPval-AA 1,500 Elo (release) vs. 1018 (current)** is retained as a third figure on the same benchmark. Search-provider rate limiting (HTTP 429) persisted, so evidence came from direct retrievals (BenchLM, Artificial Analysis, Vals AI, OpenRouter) rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Grok_4_3_Recheck.md`, using the same headings.