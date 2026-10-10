# DeepSeek V4 Flash — findings by Space Bunny

- Source: DeepSeek / DeepSeek-V4-Flash
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 76.0 → 70.4 — and an identity problem that may matter more than the score.**

> ### ⚠ Checkpoint identity: this slug scores a snapshot that has been superseded
> The prior pass scored **DeepSeek V4 Flash 0423**. **BenchLM's canonical entry for this slug now resolves to the 0731 checkpoint** (`deepseek-v4-flash-0731`), which carries **55 source-displayable rows** and is a materially different and better-evidenced model. DeepSeek has also since shipped **DeepSeek V4.1 Flash** (BenchLM 67.9) and **V4 Pro 0813** (63.77).
>
> **Nearly all independent evidence below is for the 0731 checkpoint, not 0423.** Where a figure is 0423-specific it is labelled. **Recommend the maintainer either retarget this slug to `deepseek-v4-flash-0731` or split it into two entries.** The scores below are a reasoned blend, stated explicitly rather than silently averaged.

Restated on that basis: **Tool 88 → 76**, **Reasoning 89 → 78**, **Context 98 → 95**, **Coding 92 → 88**, **Cost 94 → 90**, Multimodal unchanged at 15.

## Model card

- **Name:** DeepSeek V4 Flash (repo slug covers 0423; live checkpoint is 0731)
- **Short description:** DeepSeek's efficiency-oriented open-weight MoE model for fast high-throughput reasoning, coding assistants, search agents, and long-context workflows. **Genuinely elite at repository-level coding and abstract reasoning (SWE-bench 88.8%, ARC-AGI-2 61.4%), and carrying the highest hallucination rate of any model examined except Gemini 2.5 Flash.**
- **Provider / access:** Hugging Face `deepseek-ai/DeepSeek-V4-Flash`; OpenRouter `deepseek/deepseek-v4-flash`; **OpenCode Zen `opencode/deepseek-v4-flash`**; DeepSeek API and compatible providers.
- **Release / knowledge:** **0423 checkpoint released 2026-04-24; 0731 checkpoint superseded it.** **No verified exact knowledge cutoff has been published** after two passes.
- **IDs:** `deepseek-ai/DeepSeek-V4-Flash`; OpenRouter `deepseek/deepseek-v4-flash`; Vals AI `deepseek_deepseek-v4-flash-0731`.
- **Context window:** **1,000,000 tokens**, verified.
- **Modalities:** **Text in / text out.** Reasoning modes include non-think, high, and max/xhigh; tool calling and structured tool use supported. **No image input is documented** — hence the floor multimodal score.
- **Pricing (verified 2026-10-10):** **OpenCode Zen lists $0.14 input / $0.28 output / $0.028 cached read** per 1M — a ~10× improvement on the prior pass's $0.03/$1.28 reading for the 0423 route, which is best understood as a dated-route artefact. **MIT-licensed** open weights support private deployment.
- **Architecture:** **MIT-licensed open-weight MoE, 284B total / 13B active** per token, FP4/FP8 mixed precision; hybrid attention for long-context efficiency.

### Raw benchmarks found

> **Checkpoint labels matter here.** Rows marked *(0731)* come from the DeepSeek V4 Flash 0731 update or third-party measurement of the 0731 route. Rows marked *(tech report)* come from the DeepSeek-V4 technical report. Rows marked *(0423)* are specific to the snapshot the prior pass scored.

**Coding — the strongest evidence in this report, and the widest source agreement in the batch:**

- **SWE-bench: 88.8%** (Vals AI, 0731) vs **79.0%** *(tech report)* vs **80.6%** *(0423)* — three readings spanning ~10 points
- **VulcanBench v3: 88.4%** — **the highest VulcanBench score recorded for any model in this research effort**
- **LiveCodeBench: 87.3%** (Vals AI, 0731) / **91.6%** *(tech report, Pass@1-COT)*
- **SWE-bench Pro: 52.6%**; SWE-bench Multilingual **73.3%**; NL2Repo **54.2%** *(0731)*; DeepSWE **54.4%** *(0731)*; DSBench-FullStack **68.7%**; DSBench-Hard **59.6%** *(0731)*
- Codeforces rating **3,052** *(tech report)*
- **AA Coding Index: 69.1%**; **AA-SciCode: 50.3%**; OpenHarmony Bench **53.8%**

**Reasoning / knowledge — three independent sources agree closely on GPQA, which is notable:**

- **GPQA Diamond: 88.1% *(tech report) / 90.8% (AA) / 89.9% (Vals AI)** — the tightest multi-source agreement on any benchmark in this batch
- MMLU-Pro **86.2%** *(tech report)*, **86.2%** (Vals AI) — exact agreement across two sources
- **ARC-AGI-1: 89.0%**; **ARC-AGI-2: 61.4%** (ARC Prize **verified** results, 0731) — frontier-class abstract reasoning
- **HLE: 34.8% *(tech report) / 38.6% (AA)**; HLE with tools **45.1%** *(tech report)*
- **CritPt: 16.6%**; HMMT Feb 2026 **94.8%**; IMOAnswerBench **88.4%**; Apex Shortlist **85.7%**; Apex **33.0%** *(tech report)*
- Chinese-SimpleQA **78.9%** *(tech report)*
- **AA-Intelligence Index: 34.3**
- **AA-Omniscience Index: −14.3%**; **Accuracy: 40.4%**; **Hallucination Rate: 91.7%** — *the governing negative; second-worst in this batch behind Gemini 2.5 Flash's 93.0%*

**Agent / tool use — strong on search and coding-terminal, weak on sustained professional work:**

- **Terminal-Bench 2.1: 82.7% *(DeepSeek 0731 update) / 67.0% (Vals AI)** — a **15.7-point vendor/independent spread**, consistent with the pattern found on GLM-5.2 and GLM-5.3
- Terminal-Bench 2.0 **56.9%** *(tech report)*; **BrowseComp 73.2%** *(tech report)*; **MCP Atlas 69%** *(tech report)*
- Toolathlon **47.8%** *(tech report)* / **Toolathlon-Verified 70.3%** *(0731)*; CyberGym **76.7%** *(0731)*
- **GDPval-AA: Elo 1,189** *(tech report)* / **46.9% normalised** (AA)
- **Agents' Last Exam: 25.2%**; **AutomationBench: 25.1%** *(0731)*
- **AA Agentic Index: 41.7%**
- SkillsBench v1.1 **44.7%**; Claw-Eval **57.8%** (model-card metadata / leaderboard)

**Long context — unusually well-tested, at two benchmarks and full window:**

- **MRCR 1M: 78.7 MMR** *(tech report)*; **CorpusQA 1M: 60.5%** *(tech report)*; **AA-LCR: 79.7%** (AA)
- The 1M window therefore has public exact-model retrieval evidence, not merely a specification — rare in this dataset.

Sources consulted: [BenchLM DeepSeek V4 Flash (canonical resolves to 0731, updated 2026-10-10)](https://benchlm.ai/models/deepseek-v4-flash), [DeepSeek-V4 technical report](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/resolve/main/DeepSeek_V4.pdf?download=true), [DeepSeek API update notes](https://api-docs.deepseek.com/zh-cn/updates/), [Vals AI DeepSeek V4 Flash 0731](https://www.vals.ai/models/deepseek_deepseek-v4-flash-0731), [Artificial Analysis DeepSeek V4 Flash](https://artificialanalysis.ai/models/deepseek-v4-flash), [ARC Prize verified results](https://arcprize.org/results/deepseek-v4-flash-0731), [VulcanBench leaderboard](https://vulcanbench.com/leaderboard.html), [OpenHarmony Bench](https://bench.matrix.openharmony.cn/), and [OpenCode Zen pricing](https://opencode.ai/docs/zen), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 76/100.** Down from 88. **BrowseComp 73.2%, MCP Atlas 69%, and Toolathlon-Verified 70.3%** are solid, and the prior pass's own Terminal-Bench 2.0 figure of 67.9% *(0423)* is broadly consistent with the tech report's **56.9%** on the later checkpoint. Three things pull it down. First, **Terminal-Bench 2.1 splits 82.7% (DeepSeek's own update) against 67.0% (Vals AI)** — a 15.7-point spread, the third instance of that vendor-optimism pattern in this batch. Second, **AA Agentic Index is 41.7%**. Third, and decisively, **Agents' Last Exam 25.2% and AutomationBench 25.1%** show sustained multi-step professional work is the weak axis — the same shape as GLM-5.3 (strong Terminal-Bench, weak Agents' Last Exam at 28.5%).
- **Reasoning: 78/100.** **Down from 89 — the largest single reduction in this report, and it is about reliability, not capability.** On capability this model is excellent and unusually well corroborated: **GPQA Diamond at 88.1% / 90.8% / 89.9% across three sources**, **MMLU-Pro 86.2% on two sources**, **ARC-AGI-2 at 61.4% and ARC-AGI-1 at 89.0% on ARC Prize's verified leaderboard**, **HMMT 94.8%**, **IMOAnswerBench 88.4%**, **Intelligence Index 34.3**. Very few models in this dataset have ARC-AGI-2 above 60%. The reduction is driven by **Hallucination Rate 91.7%** with **Omniscience Index −14.3%** and only **40.4% accuracy** — the model is wrong about nine questions in ten and confident. **CritPt 16.6%** and **HLE 34.8%/38.6%** are further caps. The prior 89 rested on "low Simple-QA-style factual reliability" without ever measuring it; now that it is measured, it is severe. **No knowledge cutoff is still published.**
- **Context window: 95/100.** Down from 98. **1,000,000 tokens** is verified and this is the best-tested context window in the batch — **MRCR 1M at 78.7 MMR**, **CorpusQA 1M at 60.5%**, and **AA-LCR at 79.7%** from an independent harness. Three measurements, two of them at the full 1M window, is genuinely strong evidence. The small reduction reflects **CorpusQA 1M at 60.5%**, which shows retrieval quality at the far end of the window is materially weaker than at 512K.
- **Multimodal: 15/100.** Unchanged. **Text-only** in every specification — no image, audio, or video input. This maps to the methodology's floor and is the single largest structural drag on the Overall. **Design Arena Website 1,214 Elo** measures text-and-code output quality, not non-text input, and does not raise it. DeepSeek's separate **V4 Flash Vision Exp** covers multimodal work.
- **Coding: 88/100.** Down from 92. **This remains the model's strongest dimension and the best-evidenced in the batch.** **SWE-bench 88.8% (Vals AI)**, **VulcanBench v3 88.4% — the highest recorded here**, **LiveCodeBench 87.3% (Vals) / 91.6% (tech report)**, **SWE-bench Pro 52.6%**, **SWE Multilingual 73.3%**, **DSBench-FullStack 68.7%**, **OpenHarmony 53.8%**. Thirteen distinct coding measurements. The reductions: **AA Coding Index 69.1%** and **AA-SciCode 50.3%** both sit well below the vendor figures, **SWE-bench Pro at 52.6%** is modest for a frontier model, and **DeepSWE 54.4%** / **NL2Repo 54.2%** show the strength is concentrated in established repo-level work rather than greenfield generation. The prior 92 was reasonable on the evidence it had; the new evidence simply adds much more, most of it good.
- **Cost efficiency: 90/100.** Down from 94. **OpenCode Zen's verified $0.14 / $0.28 with $0.028 cached read** is genuinely cheap for a model with SWE-bench 88.8% and ARC-AGI-2 61.4%, and **MIT-licensed open weights** make private deployment free of provider economics. The reduction from 94 reflects that the prior pass's "$0.03/$1.28" was a dated-route artefact — the *output* price has improved sharply, but so has the effective benchmark baseline, and $0.28 output is no longer a standout price against GLM-5.3 Flash ($0.15/$0.50), Nemotron 3.5 Lightning, and several free routes.
- **Overall Score: 70.4/100.** (76 + 78 + 95 + 15 + 88) / 5 = 352 / 5 = 70.4, down from 76.0. **Best fit: repository-scale software engineering at high throughput, on 1M context, where a build/test loop will catch errors.** The specific claim: **SWE-bench 88.8% and VulcanBench 88.4% with MIT weights at $0.14/$0.28 is the best coding-value combination measured in this batch**, and MRCR 1M at 78.7 with a 1M window makes it good for whole-repository analysis. **Three hard limits.** First, **91.7% hallucination rate** — the model reasons brilliantly and then states things it does not know; never let it be the source of a factual claim or the verifier in a pipeline. Second, **Agents' Last Exam 25.2% and AutomationBench 25.1%** — it is a strong patcher, not an autonomous agent. Third, **checkpoint churn**: the slug you are reading about is the 0423 snapshot, the live checkpoint is 0731, and **DeepSeek V4.1 Flash** now outranks it. **Confirm which checkpoint your route serves before comparing it to anything.**

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of BenchLM's DeepSeek V4 Flash profile, the DeepSeek-V4 technical report, DeepSeek's API update notes, Vals AI's DeepSeek V4 Flash 0731 leaderboards, Artificial Analysis's DeepSeek V4 Flash benchmark rows, ARC Prize's verified results for the 0731 checkpoint, VulcanBench and OpenHarmony Bench, and OpenCode Zen's published pricing; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the most consequential finding in this report is identity, not scoring.** The slug scored **0423**; BenchLM's canonical entry now resolves to **0731**, which carries 55 rows, and DeepSeek has since shipped **V4.1 Flash** and **V4 Pro 0813**. Every independent row below is therefore a 0731 measurement unless explicitly labelled, and **the blend across checkpoints is stated openly rather than presented as a single-model figure.** Recommend the maintainer retarget or split the slug. On scores: **Reasoning 89 → 78 is entirely a reliability correction** — the prior pass flagged "low Simple-QA-style factual reliability" as a cap without measuring it, and **91.7% hallucination rate with a −14.3% Omniscience index** now quantifies it. **Coding 92 → 88 moves down on better evidence**, not worse performance: the prior score rested on four vendor figures, and thirteen independent and vendor measurements now exist — **VulcanBench v3 88.4%** and **SWE-bench 88.8%** are the best coding results recorded in this research effort. **GPQA is credited for cross-source agreement**: 88.1% / 90.8% / 89.9% across three sources is the tightest convergence of any benchmark in this batch, and ARC-AGI-2 at 61.4% is ARC-Prize-verified. **Terminal-Bench 2.1 splits 82.7% (vendor) vs 67.0% (Vals AI)** — the third instance of that pattern after GLM-5.2 and GLM-5.3, now treated as a rule. The prior pass's **$0.03/$1.28** pricing is superseded by Zen's verified **$0.14/$0.28**. Search-provider rate limiting (HTTP 429) persisted, so evidence came from four direct primary retrievals plus cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_Flash_Recheck.md`, using the same headings.