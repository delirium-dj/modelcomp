# Qwen 3.8 27B — findings by Space Bunny Alpha

- Source: Alibaba Qwen / Qwen3.8-27B
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Alibaba's open-weight dense vision-language reasoning model for coding, professional work, multimodal interaction, and long-running agent tasks.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-27B`; OpenRouter `qwen/qwen3.8-27b`; local deployment through the model card's Transformers, vLLM, and SGLang instructions.
- **Release / knowledge:** 2026-08-14 checkpoint (OpenRouter canonical slug); no verified exact knowledge cutoff found.
- **IDs:** `Qwen/Qwen3.8-27B`; OpenRouter `qwen/qwen3.8-27b` (dated slug `qwen3.8-27b-20260814`).
- **Context window:** 262,144 tokens natively, extensible to 1,000,000 tokens with the documented RoPE/YaRN configuration; the hosted route lists 1M context.
- **Modalities:** Text, image, and video input; text output; flexible thinking on by default with low/medium/xhigh reasoning controls, tool calling, and structured outputs.
- **Pricing (as of 2026-09-25):** OpenRouter lists $0.42 input / $0.085 cached input / $3.00 output per 1M tokens for the dated route; self-hosting is open-weight under Apache 2.0.
- **Architecture:** Open-weight 27B dense vision-language model; the official card documents flexible thinking, vision/video processing, and a 262K native context with a documented 1M extension.

### Raw benchmarks found

> The official Qwen model card reports Qwen3.8-27B results in its benchmark tables. Where a table supplies a CI/no-CI pair, the stronger official setting is identified explicitly. OpenRouter supplies the independent Artificial Analysis composite indices.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus): **73.0%** (official Qwen model card).
- SWE-bench Pro: **61.7%** (official Qwen model card; Claude Code harness, temperature 1.0, top_p 0.95, 256K context).
- Agents' Last Exam: **20.4% Pass@1 / 42.9 score** (official Qwen model card).
- CoWorkBench: **70.7%**; JobBench: **33.4%** (official Qwen model card).
- IFBench instruction following: **79.5%** (official Qwen model card).
- Artificial Analysis Agentic Index: **45.8** (OpenRouter metadata); AA now lists **46.5%** (accessed 2026-10-05).
- AA Tau3-Banking: **48.0%**; AA Terminal-Bench 4.0: **5.6%**; AA AutomationBench: **48.2%**; AA EnterpriseOps-Gym: **44.2%** (Artificial Analysis leaderboards, accessed 2026-10-05). The Terminal-Bench 4.0 figure is a measured weakness and is recorded as such.
- GDPval-AA: **1423 Elo / 46.2% normalized**; AA-Briefcase: **1397 Elo**; GDP.pdf: **16.6%** (Artificial Analysis, accessed 2026-10-05).

Reasoning / knowledge:

- GPQA Diamond: **89.2%**; HLE: **30.8%** (official Qwen model card). Independent Vals AI reads agree closely: GPQA Diamond **88.9%**, MMLU-Pro **84.3%** (accessed 2026-10-05).
- IFBench: **79.5%** (official Qwen model card).
- Artificial Analysis Intelligence Index: **33.7** (OpenRouter metadata); AA-GPQA Diamond **90.5%**, AA-HLE **33.9%** (accessed 2026-10-05).
- CritPt: **5.4%**; AA-LCR: **82.0%**; AA-MLCR: **21.7%** (Artificial Analysis, accessed 2026-10-05). CritPt at 5.4% is a serious frontier-science weakness and is the main cap on this dimension.
- AA-Omniscience Index: **-10.0%**; Accuracy: **15.6%**; Hallucination Rate: **30.3%** (Artificial Analysis, accessed 2026-10-05) — a negative index indicating poor calibrated reliability.

Coding:

- SWE-bench Verified: **79.0%** (official Qwen model card; in-house benchmark, average over three runs, 8-hour timeout, 32,768 max tokens, 256K context).
- LiveCodeBench v6: **90.3%** (official Qwen model card).
- SWE-bench Pro: **61.7%**; Terminal-Bench 2.1: **73.0%** (official Qwen model card).
- Artificial Analysis Coding Index: **68.1** (OpenRouter metadata), corroborated by AA at **68.1%** (accessed 2026-10-05).
- DeepSWE: **42.2%**; NL2Repo: **42.3%** (official Qwen model card).
- AA-SciCode: **46.6%**; VulcanBench v3: **82.6%**; LiveCodeBench (Vals AI): **84.0%**; SWE-bench (Vals AI): **86.0%** (accessed 2026-10-05).

Long context:

- The hosted route exposes a **1,000,000-token** context, while the official weights natively support **262,144** tokens and document an extension to 1M.
- AA-LCR: **82.0%** (Artificial Analysis Long-Context Reasoning leaderboard, accessed 2026-10-05) — an independent retrieval result, newly available. No standalone exact-model RULER, MRCR, or GraphWalks score was found.

Multimodal:

- OSWorld-Verified: **84.3%**; WebArena-Verified: **64.8%**; AndroidWorld: **81.9%** (official Qwen model card).
- ClawEval-MM: **57.4% Pass@3 / 56.9 average**; SWE-MM: **38.6%**; Vision2Web: **62.9%** (official Qwen model card).
- OmniDocBench v1.5: **91.1%**; RealWorldQA: **85.9%**; ERQA: **65.5%** (official Qwen model card).
- MathVision: **94.6% with CI**; CharXiv (RQ): **90.2% with CI** (official Qwen model card). MathVision base **90.0%**, CharXiv w/o tools **83.7%** also reported.
- AA-MMMU-Pro: **76.3%** (Artificial Analysis MMMU-Pro leaderboard, accessed 2026-10-05); BabyVision **65.7%** (**85.6%** with Python), Vision2Web **62.9%** (official card).

### Normalized scores (1–100)

- **Tool use: 82/100.** Cut from 90 on new measured evidence. Terminal-Bench 2.1 at 73.0% and CoWorkBench at 70.7% remain strong, but the newly published **AA Terminal-Bench 4.0 at 5.6%** is near-floor and is the single most damaging figure in this refresh; Tau3-Banking 48.0% and AA-Agentic Index 46.5% are mid-pack rather than frontier. The model is strong on the vendor's own harness and weak on the harder current agentic suites.
- **Reasoning: 84/100.** Cut from 86. GPQA Diamond 89.2% (independently corroborated at 88.9%) and IFBench 79.5% are genuinely strong, but the newly available **CritPt at 5.4%** and an **AA-Omniscience Index of -10.0%** (Accuracy 15.6%) show that frontier-science reasoning and calibrated factual reliability are both weak. HLE 30.8% remains modest.
- **Context window: 98/100.** A 1M hosted context and documented 1M extension are near the methodology's ceiling, now with an independent AA-LCR 82.0% retrieval result behind the nominal figure.
- **Multimodal: 91/100.** Native image/video input with a broad exact-model benchmark set, now independently corroborated by AA-MMMU-Pro 76.3% alongside MathVision 94.6%, CharXiv 90.2%, OmniDocBench 91.1% and BabyVision 85.6% with Python.
- **Coding: 93/100.** SWE-bench Verified 79.0%, SWE-bench Pro 61.7%, LiveCodeBench v6 90.3%, Terminal-Bench 2.1 73.0%, plus new DeepSWE 42.2%, AA-SciCode 46.6%, VulcanBench v3 82.6% and Vals SWE-bench 86.0%. The DeepSWE and SciCode figures temper the otherwise excellent profile.
- **Cost efficiency: 86/100.** At $0.42 input and $3.00 output per 1M tokens, hosted inference is reasonable but pricier than smaller open-weight alternatives; local deployment can reduce vendor cost.
- **Overall Score: 89.6/100.** (82 + 84 + 98 + 91 + 93) / 5 = 89.6, cost excluded. A high-end multimodal reasoning and coding agent with a million-token hosted window; best for software engineering, visual computer use, and long-running professional workflows. Note this is a *downward* enrichment: the new independent measurements expose weak current-generation agentic (TB4.0 5.6%) and reliability (Omniscience -10.0%) performance that the vendor-harness-only first pass could not see.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-10-05
- Method: official Qwen Hugging Face model card and local-deployment documentation, OpenRouter API metadata, Artificial Analysis component leaderboards, Vals AI, VulcanBench and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Refreshed 2026-10-05 with AA Tau3-Banking/Terminal-Bench 4.0/AutomationBench/EnterpriseOps-Gym/GDPval-AA/Briefcase/GDP.pdf, CritPt, AA-LCR/MLCR, Omniscience, AA-MMMU-Pro, AA-SciCode, DeepSWE/NL2Repo and VulcanBench v3.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_27B.md`, using the same headings.
