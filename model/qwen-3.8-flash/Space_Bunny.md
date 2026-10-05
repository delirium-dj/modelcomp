# Qwen3.8 Flash-Next — findings by Space Bunny Alpha

- Source: Alibaba/Qwen (`Qwen/Qwen3.8-Flash-Next`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash-Next
- **Short description:** Qwen's open-weight multimodal model focused on cost-efficient long-context reasoning, coding, and agent execution, with a native 262K context and documented YaRN extension path.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-Flash-Next`; local OpenAI-compatible serving through vLLM, SGLang, and TokenSpeed.
- **Release / knowledge:** Hugging Face metadata shows repository creation on 2026-08-24; no reliable knowledge cutoff was shown.
- **IDs:** `Qwen/Qwen3.8-Flash-Next`.
- **Context window:** 262,144 native tokens. The model card documents YaRN scaling and example configurations for longer contexts, but those extensions are not treated as the native verified limit.
- **Modalities:** Text, image, and video input; text output; reasoning and tool calls supported. The model card documents long-video processing and vision templates.
- **Pricing (as of 2026-09-24):** No fixed hosted token price was shown for the checkpoint. Self-hosting avoids a vendor token price, but compute and Qwen Community License terms still apply.
- **Architecture:** Qwen4Exp conditional-generation architecture; open weights with `qwen-community-1.0` license. The reviewed metadata places it in the 500B size class, but no independently verified total/active parameter count is claimed here.

### Raw benchmarks found

Agent / tool use:

- DeepSWE: **58.7%** (Qwen3.8-Flash-Next Hugging Face model card; Claude Code / mini-SWE-agent, best of two, 256K context)
- SWE-bench Pro: **62.5%** (Qwen3.8-Flash-Next model card; Claude Code, 256K context, refined benchmark)
- Toolathlon Verified: **73.5%** (Qwen3.8-Flash-Next model card, accessed 2026-10-05) — the first exact value for this row.
- CoWorkBench: **73.9%**; JobBench: **55.7%**; Agents' Last Exam: **51.2%**; AndroidWorld: **84.5%**; OSWorld 2.0: **19.4%** (Qwen3.8-Flash-Next model card, accessed 2026-10-05)
- GDPval-AA: **1648 Elo / 55.6% normalized** (Artificial Analysis, accessed 2026-10-05)
- Terminal-Bench, Tau3-Banking, and MCP-Atlas: **no verified public exact value found** (note OSWorld 2.0 at 19.4% is weak even though AndroidWorld is 84.5%)

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (Qwen3.8-Flash-Next model card); AA-GPQA Diamond **92.3%** (Artificial Analysis, accessed 2026-10-05) — independent corroboration.
- HLE: **35.9%** (Qwen3.8-Flash-Next model card; GPT-4o judge, not the task's default grader); AA-HLE **38.0%** (accessed 2026-10-05)
- CritPt: **11.1%**; AA-LCR: **79.7%** (Artificial Analysis, accessed 2026-10-05). CritPt at 11.1% is a frontier-science weakness.
- AA-Omniscience Index: **-9.7%**; Accuracy: **24.5%**; Hallucination Rate: **45.3%** (Artificial Analysis, accessed 2026-10-05) — a negative index indicating poor calibrated reliability, a material caution.
- Artificial Analysis Intelligence Index: **39.8%** (accessed 2026-10-05)
- MLCR: **no verified public exact value found**

Coding:

- DeepSWE: **58.7%**
- SWE-bench Pro: **62.5%**
- SWE Multilingual: **81%**; NL2Repo: **48.1%** (Qwen3.8-Flash-Next model card, accessed 2026-10-05)
- LiveCodeBench v6: **91.9** (Qwen3.8-Flash-Next model-card benchmark table)
- AA-SciCode: **50.6%**; AA Coding Index: **73.0%** (Artificial Analysis, accessed 2026-10-05)
- ClawEval-MM: **64.4%** (Qwen3.8-Flash-Next model card; Pass@3)
- ExtractBench mean: **89.88** (Qwen3.8-Flash-Next model-card eval metadata)
- IFBench: **81.3%** (Qwen3.8-Flash-Next model card, accessed 2026-10-05)
- SWE-bench Verified and Vibe Code Bench: **no verified public exact value found**

Long context:

- Native context: **262,144 tokens** (official model card). The card documents YaRN scaling and recommends it for longer workloads.
- AA-LCR: **79.7%** (Artificial Analysis Long-Context Reasoning leaderboard, accessed 2026-10-05) — an independent retrieval result, newly available. No measured retrieval score at the YaRN-extended length was found.

Sources consulted: [Qwen3.8 Flash-Next Hugging Face model card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next), [BenchLM Qwen3.8-Flash-Next profile](https://benchlm.ai/models/qwen3-8-flash-next) (page dated 2026-10-05, carrying the AA component rows quoted above), and [Artificial Analysis Qwen3.8-Flash-Next](https://artificialanalysis.ai/models/qwen3-8-flash-next), accessed 2026-10-05. Benchmark values are source/model-card values, not peer findings.

### Normalized scores (1–100)

- **Tool use: 90/100.** Raised from 89 on measured agentic evidence that the first pass lacked: Toolathlon Verified 73.5%, CoWorkBench 73.9%, Agents' Last Exam 51.2%, GDPval-AA 1648 Elo / 55.6%, AndroidWorld 84.5%. Capped well below the leaders by **OSWorld 2.0 at just 19.4%** and the still-absent Tau3-Banking, Terminal-Bench and MCP-Atlas rows.
- **Reasoning: 87/100.** Cut from 88. GPQA Diamond 91.7% is strong and now independently corroborated by AA-GPQA-Diamond 92.3%, with AA-HLE 38.0% agreeing with the card's 35.9%. But the newly available **CritPt at 11.1%** and an **AA-Omniscience Index of -9.7%** (Accuracy 24.5%, Hallucination 45.3%) show frontier-science reasoning and factual calibration are both weak, and the AA Intelligence Index sits at 39.8.
- **Context window: 84/100.** Raised from 82: the native 262K context is now backed by an independent AA-LCR 79.7% retrieval result. Still short of the 1M tier, and no measured retrieval at the YaRN-extended length exists.
- **Multimodal: 95/100.** The official card documents text, image, and video input with text output including long-video configuration guidance, now corroborated by measured rows: AA-MMMU-Pro 79.8%, MathVision 90.6% (95.7% with Python), CharXiv 90.6%, RealWorldQA 88.5%, LVBench 76.6%, Vision2Web 64.0%, ERQA 72.3%.
- **Coding: 89/100.** Raised from 87: DeepSWE 58.7%, SWE-bench Pro 62.5%, LiveCodeBench v6 91.9%, plus new SWE Multilingual 81%, NL2Repo 48.1%, AA-SciCode 50.6%, AA Coding Index 73.0% and IFBench 81.3%. Still capped by no SWE-bench Verified or Vibe Code Bench figure.
- **Cost efficiency: 88/100.** Open weights and self-hosting avoid a fixed hosted token price, although hardware and license obligations prevent treating the model as free.
- **Overall Score: 89.0/100.** (90 + 87 + 84 + 95 + 89) / 5 = 89.0, cost excluded. Best fit: self-hosted multimodal coding agents and long-context workflows where Qwen's vision/video support and open weights are valuable.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-10-05
- Method: Public web research of the official Qwen Hugging Face model card, BenchLM and Artificial Analysis component leaderboards; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall. Refreshed 2026-10-05 to fill the first pass's Toolathlon/Tau3/GDPval/MLCR/CritPt/SciCode/LCR rows with measured values, including OSWorld 2.0 19.4% and Omniscience Index -9.7% as newly visible weaknesses.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
