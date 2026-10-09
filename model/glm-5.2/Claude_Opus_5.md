# GLM-5.2 — findings by Claude Opus 5

- Source: Z.AI (`zai-org/GLM-5.2`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Z.AI's flagship **long-horizon** model and, on the evidence below, one of the strongest open-weight models in this dataset. Z.AI's framing is specific: "a substantial leap in long-horizon task capability over its predecessor GLM-5.1 and, for the first time, delivers that capability on a **solid 1M-token context**", with flexible thinking-effort levels and — unusually emphatic — "**Pure Open: an MIT open-source license — no regional limits, technical access without borders**" ([GLM-5.2 model card](https://huggingface.co/zai-org/GLM-5.2)). Distinct model; GLM-5, 5.1, 5.3, 5.3-Flash, 5-Turbo and the vision model GLM-5V-Turbo are separate entries.
- **Provider / access:** **OpenCode Zen** as `glm-5.2` on `https://opencode.ai/zen/v1/chat/completions` ([Zen docs](https://opencode.ai/docs/zen/)); the Z.ai API Platform; Google Cloud's Vertex AI partner catalogue; and **open weights on Hugging Face** (658,105 downloads in the trailing month, 150 community quantizations, 25 finetunes). Self-hosting is supported on SGLang (v0.5.13.post1+), vLLM (v0.23.0+), Transformers, KTransformers and Unsloth, plus **Ascend NPU** deployment via vLLM-Ascend, xLLM and SGLang — a meaningful sovereignty detail.
- **Release / knowledge:** The GLM-5.2 Hugging Face collection was updated **2026-06-16** and Z.AI's "GLM-5.2: Built for Long-Horizon Tasks" article is dated **2026-06-17**; no more precise release date is published. The underlying GLM-5 technical report (*GLM-5: from Vibe Coding to Agentic Engineering*, [arXiv 2602.15763](https://arxiv.org/abs/2602.15763)) was published 2026-02-17, and the IndexCache paper ([arXiv 2603.12201](https://arxiv.org/abs/2603.12201)) 2026-03-12. Knowledge cutoff: no verified public date found. **Lifecycle note:** the model card itself flags "A newer version of this model is available: `zai-org/GLM-5.3-BF16`".
- **IDs:** `zai-org/GLM-5.2` (Hugging Face), `glm-5.2` / `opencode/glm-5.2` (Zen), `z-ai/glm-5.2` (OpenRouter). **No free tier on Zen** — the MIT weights are the free path.
- **Context window:** **1,000,000 tokens**, and Z.AI backs the claim with architecture rather than assertion (see below). Corroborated by [BenchLM](https://benchlm.ai/models/glm-5-2). Max output: no single figure, but Z.AI's own harness notes show it running evaluations at **128K maximum output tokens** on FrontierSWE, PostTrainBench and SWE-Marathon.
- **Modalities:** **Text in → text out. This model is text-only.** Hugging Face classifies it `text-generation` with languages English and Chinese; there is no vision or audio encoder, and Z.AI ships vision separately as **GLM-5V-Turbo**. Reasoning: yes, with **multiple thinking effort levels** to trade performance against latency. Tool calls: yes, and heavily evaluated.
- **Pricing (as of 2026-10-08):** OpenCode Zen — **$1.40 / MTok input, $4.40 / MTok output, $0.26 / MTok cached read**. Open weights are free under **MIT**, with Z.AI explicitly stating there are no regional restrictions.
- **Architecture:** **753B parameters** (safetensors model size), `glm_moe_dsa` — Mixture-of-Experts with sparse attention, BF16/F32. Two disclosed efficiency innovations, both with papers behind them: **IndexShare**, which "reuses the same indexer across every four sparse attention layers, **reducing per-token FLOPs by 2.9× at a 1M context length**"; and an improved **MTP layer for speculative decoding**, "increasing the acceptance length by **up to 20%**". **MIT license.**

### Raw benchmarks found

> **Z.AI's harness documentation is the most thorough I have encountered in this research pass**, and it materially changes how much weight its vendor figures deserve. For every benchmark it publishes temperature, top-p, max generation length, context window, judge model, container CPU/RAM limits, timeouts, run counts and whether internet access was disabled — e.g. ProgramBench run in Claude Code 2.1.156 at `reasoning_effort=max` with a 6-hour timeout in a 4-CPU/8GB sandbox with no internet; Terminal-Bench 2.1 averaged over **5 runs**; MCP-Atlas judged by Gemini-3.0-Pro on the 500-task public subset. It also reports competitor figures that beat it on most rows. Independent values are given alongside wherever they exist.

Agent / tool use:

- **τ²-bench: 99.1%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/tau2-bench)) — the highest τ²-bench figure I have recorded anywhere in this pass; effectively saturated
- **Terminal-Bench 2.1: 81.0%** (Z.AI, Terminus-2 harness, 5-run average) and **82.7%** on its best reported harness; independently **67.8%** ([Vals AI](https://www.vals.ai/models/zai_glm-5.2)) — a **13.2-point** vendor premium that has to be priced in
- **MCP-Atlas (public 500-task set): 76.8%** (Z.AI, think mode, Gemini-3.0-Pro judge) — against Claude Opus 4.8's 77.8% and GPT-5.5's 75.3% in the same table
- Tool-Decathlon: **48.2%** (Z.AI); AA ITBench: **42.7%**; AA Agentic Index: **39.4%**; APEX-Agents-AA: **33.7%** (Artificial Analysis)
- GDPval-AA: **1418 Elo** / **43.7%** normalized (Artificial Analysis)
- ResearchClawBench: **20.7%** ([leaderboard](https://internscience.github.io/ResearchClawBench-Home/))
- Agents-Last-Exam (official leaderboard export, Claude Code harness at max, 146/152 attempted, snapshot 2026-10-01): **20.39% overall pass rate / 41.09 overall score**
- **Terminal-Bench 3.0: 4.6%** ([FrontierBench](https://www.frontierbench.ai/)) — a near-total collapse on the next-generation harness, from 81% on 2.1

Reasoning / knowledge:

- **GPQA Diamond: 91.2%** (Z.AI); independently **89.5%** (Artificial Analysis) and **85.6%** (Vals AI) — a 5.6-point spread across three harnesses
- **HLE: 40.5% text-only subset, 54.7% with tools** (Z.AI, temperature 1.0 / top-p 0.95, 163,840-token generation limit, GPT-5.5-medium as judge; 300K context for the with-tools run). Independently **AA-HLE 41.1%** — within 0.6 points of the vendor's no-tools figure
- **CritPt: 20.9%** (Z.AI) — equal to Claude Opus 4.8 in the same table and a 4.5× jump over GLM-5.1's 4.6%
- **AIME 2026: 99.2%**; HMMT Nov 2025 **94.4%**, Feb 2026 **92.5%**; IMOAnswerBench **91.0%** (Z.AI)
- MMLU-Pro: **86.7%** (Vals AI); AA-IFBench: **73.3%**; AA-LCR: **78.3%** (Artificial Analysis)
- LEXam-hard: **37.55** (HF evaluation results)
- Artificial Analysis Intelligence Index: **33.7**; BenchLM overall **61.49/100, rank #47 of 889** (43 of 625 benchmarks — very well covered)
- **AA-Omniscience: Index +4.4, Accuracy 24.3%, Hallucination Rate 26.3%.** This deserves emphasis: a **positive** Omniscience Index and a 26.3% hallucination rate make it, by a wide margin, **the most reliably abstaining model in this entire research pass** — against 81–93% for most 2026 frontier models.

Coding:

- **SWE-bench Verified: 82.8%** ([Vals AI](https://www.vals.ai/models/zai_glm-5.2)) — the **highest independently-measured SWE-bench figure of any model I have scored in this pass**
- SWE-bench Pro: **62.1%** (Z.AI, OpenHands harness, 400K context)
- **FrontierSWE (Dominance): 74.4%** (Z.AI, evaluated by Proximal at 1M context, max effort, 128K output) — against GLM-5.1's 30.5%
- ProgramBench: **63.7%** (Z.AI, Claude Code harness, 6-hour timeout, no internet)
- Terminal-Bench 2.1: **81.0%** (Z.AI) / **67.8%** (Vals)
- LiveCodeBench: **69.5%** (Vals AI); AA Coding Index: **68.8%**; AA-SciCode: **51.2%**
- OpenHarmony Bench: **58.4%** ([official leaderboard](https://bench.matrix.openharmony.cn/)); CursorBench 3.2: **55.0%** ([Cursor evals](https://cursor.com/cursorbench))
- NL2Repo: **48.9%**; **DeepSWE: 46.2%** (Z.AI; GLM-5.1 scored 18, Gemini 3.1 Pro 10, Claude Opus 4.8 58, GPT-5.5 70)
- PostTrainBench: **34.3%** (Z.AI) / **31.7%** ([public leaderboard](https://posttrainbench.com/?version=v1.1)) — close agreement
- **SWE-Marathon: 13.0%** (Z.AI) — the hardest long-horizon coding set, and the weakest coding datapoint

Multimodal:

- **Nothing, correctly — the model has no vision or audio pathway.** Design Arena — Website **1292 Elo** ([OpenRouter](https://openrouter.ai/z-ai/glm-5.2/benchmarks)) measures generated front-end design preference from a text model and is not multimodal evidence.

Long context:

- No MRCR / RULER / needle-retrieval curve published. **AA-LCR 78.3%** is the quantified signal. However, the architectural and procedural evidence here is stronger than usual: **IndexShare cuts per-token FLOPs 2.9× at 1M**, there is a dedicated paper on it, and Z.AI actually *ran* its own evaluations at 256K (Terminal-Bench), 300K (HLE-with-tools), 400K (SWE-bench Pro, NL2Repo, DeepSWE, ProgramBench) and **1M** (FrontierSWE, PostTrainBench, SWE-Marathon) context windows rather than testing at 32K and advertising 1M.

### Normalized scores (1–100)

- **Tool use: 80/100.** **τ²-bench 99.1%** is the highest in this pass, **MCP-Atlas 76.8%** sits within a point of Claude Opus 4.8 on a judged 500-task public set, and Terminal-Bench 2.1 is strong even at Vals' harsher independent 67.8%. GDPval-AA 1418 Elo is respectable real-work performance. Capped below the mid-80s by the 13.2-point vendor/independent Terminal-Bench gap, by Tool-Decathlon 48.2% and AA Agentic Index 39.4%, by ResearchClawBench 20.7%, and most of all by **Terminal-Bench 3.0 at 4.6%** — a collapse that says the strong 2.1 result does not generalise to the next harness.
- **Reasoning: 85/100.** The strongest open-weight reasoning profile in this dataset and one of the strongest overall: **GPQA Diamond 89.5% independently**, **AIME 2026 99.2%**, HMMT in the low-to-mid 90s, IMOAnswerBench 91.0%, MMLU-Pro 86.7%, and an HLE no-tools figure the vendor reported at 40.5% that an independent lab reproduced at **41.1%** — vendor honesty that earns real credit. **CritPt 20.9% matches Claude Opus 4.8.** And the decisive differentiator: a **26.3% hallucination rate with a positive Omniscience Index**, meaning this model declines to answer when it does not know far more reliably than essentially anything else here. Held under 90 by an AA Intelligence Index of 33.7 and 24.3% Omniscience accuracy — it abstains well partly because it knows less.
- **Context window: 90/100.** A documented 1M window where the engineering is published, papered and *used*: **IndexShare reduces per-token FLOPs 2.9× at 1M length** with a dedicated arXiv paper, MTP speculative decoding raises acceptance length up to 20%, and Z.AI ran real benchmarks at 256K, 300K, 400K and 1M rather than advertising a number it never exercised. AA-LCR 78.3% confirms usability. Short of the mid-90s only because no MRCR or needle-retrieval curve exists.
- **Multimodal: 15/100.** **Text-only** — no image, audio or video input, and no generated media. Hugging Face classifies it `text-generation`, and Z.AI ships vision as the separate GLM-5V-Turbo model. This is the template's explicit floor for a text-only model, and it is the single reason this otherwise excellent model does not score far higher overall.
- **Coding: 83/100.** Outstanding, and the evidence is unusually robust: **SWE-bench Verified 82.8% measured independently by Vals AI** is the best independent SWE-bench result I have recorded in this pass, **FrontierSWE Dominance 74.4%** is a 2.4× jump over GLM-5.1, ProgramBench 63.7% and SWE-bench Pro 62.1% are strong on hard sets, and PostTrainBench agrees closely between vendor (34.3) and public leaderboard (31.7). Capped by **SWE-Marathon 13.0%** and **DeepSWE 46.2%**, where Z.AI's own table shows GPT-5.5 at 70 and Claude Opus 4.8 at 58 — long-horizon autonomous engineering is still well ahead of it.
- **Cost efficiency: 85/100.** $1.40 in / $4.40 out per MTok with $0.26 cached reads is strong value for a model posting SWE-bench 82.8% and GPQA 89.5%, and the **MIT licence with explicitly no regional limits** is the most permissive terms of any model in this batch. The efficiency engineering is real money, not marketing: 2.9× fewer per-token FLOPs at 1M context and up to 20% better speculative-decoding acceptance directly reduce serving cost, and Ascend NPU support widens the hardware options. Docked because **753B parameters** makes self-hosting a serious undertaking despite 150 community quantizations, there is no free tier on any hosted route, and GLM-5.3 already supersedes it at the same Zen price.
- **Overall Score: 70.6/100.** Mean of the five non-cost dims (80 + 85 + 90 + 15 + 83) / 5 = 70.6. Best fit: **long-horizon open-weight coding and reasoning agents** — repository-scale refactors, MCP tool chains, research and analysis over million-token contexts — and specifically any workload where **factual abstention matters**, because a 26.3% hallucination rate is a genuine outlier in this field. The Overall is dragged down roughly 13 points by the text-only multimodal floor; on text workloads alone this is a top-tier model. Pair it with GLM-5V-Turbo if vision is needed, and do not assume its Terminal-Bench 2.1 strength carries to newer agentic harnesses.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — the `zai-org/GLM-5.2` Hugging Face model card (MIT licence and its no-regional-limits framing, 753B parameter count, `glm_moe_dsa` architecture, the IndexShare 2.9×-FLOPs-reduction and MTP speculative-decoding claims with their arXiv references, solid-1M context positioning, thinking-effort levels, text-generation-only classification with English/Chinese languages, the full vendor benchmark table with competitor columns, the exceptionally detailed per-benchmark harness footnotes, the local-serving framework list including Ascend NPU, and the Hugging Face evaluation-results panel including the Agents-Last-Exam leaderboard export), the OpenCode Zen docs (ID, endpoint, pricing), BenchLM's aggregated page, and the underlying Artificial Analysis, Vals AI, Cursor, OpenHarmony, PostTrainBench, FrontierBench and ResearchClawBench leaderboards. Where vendor and independent figures diverge (Terminal-Bench 2.1 81.0 vs 67.8; GPQA Diamond 91.2 vs 89.5 vs 85.6) the spread is reported and the independent value weighted; where they agree closely (HLE 40.5 vs 41.1; PostTrainBench 34.3 vs 31.7) that agreement is noted as a credibility signal. The Terminal-Bench 3.0 collapse and the SWE-Marathon result are weighted as real limitations. Design Arena is explicitly **not** credited as multimodal evidence, since the model has no vision pathway. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
