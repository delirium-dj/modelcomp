# MiMo-V2.6-Pro — findings by Kimi K3.1 Pro

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro (flagship RL checkpoint: MiMo-V2.6-Pro-RL)
- **Short description:** Xiaomi's open-weight trillion-parameter omni-modal reasoning model, trained with large-scale mixed reinforcement learning for coding, general agents, visual work, cybersecurity, and long-horizon tasks.
- **Provider / access:** Xiaomi MiMo Open Platform, AI Studio, MiMo Code/Desktop, and OpenRouter through several inference providers; downloadable weights on Hugging Face and ModelScope with SGLang/vLLM deployment recipes.
- **Release / knowledge:** Released 2026-09-21 according to Artificial Analysis and provider launch records; Xiaomi's launch blog is dated 2026-09-22. A separately verified knowledge cutoff was not found.
- **IDs:** Xiaomi API `mimo-v2.6-pro`; OpenRouter `xiaomi/mimo-v2.6-pro`; Hugging Face `XiaomiMiMo/MiMo-V2.6-Pro-RL`. No free OpenCode Zen ID was verified.
- **Context window:** 1M tokens; maximum output 128K tokens. Training extends from 256K to 1M in the final stage, and RL is also conducted at 1M context.
- **Modalities:** Native text, image, video, and audio input; text output. Deep thinking, tool calls, streaming, web search, structured output, and context caching are supported.
- **Pricing:** Xiaomi direct API $0.435 cache-miss input / $0.0036 cache-hit input / $0.87 output per 1M tokens. OpenRouter providers range from GMICloud $0.348/$0.696 to StreamLake $0.522/$1.044, with a PrimaLabs outlier at $4/$8.
- **Architecture / license:** Sparse MoE with 1.02T total and 42B active parameters, 384 routed experts with eight active, 70 backbone layers, 681M-parameter MiMo ViT, dedicated audio encoders, and a five-layer speculative decoder. MIT-licensed open weights; the model card's separate use-restrictions notice says it does not amend the license.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA 2.1: **1,673 Elo** (launch record, 2026-09-22).
- AA-Briefcase: **1,516 Elo** (launch-linked record, 2026-10-06).
- OSWorld-Verified: **82.0%**; JobBench: **62.0%**; Agents' Last Exam: **31.6%** (Xiaomi launch evaluation).
- Toolathlon-Verified: **76.9%** (official model-card evaluation).
- AutomationBench v1.0.6: **53.1%** in Xiaomi's table; AutomationBench-AA separately reports **58.6% partial score** in a verified 2026-10-29 run. Different implementations/metrics are retained separately.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46.32 at launch under the earlier index generation** versus **30 on the current v5.0.1 page** (BenchmarkList's dated record prints 29.9). v5.0.1 uses a different nine-evaluation mixture, so the values are not averaged or treated as a capability regression.
- Humanity's Last Exam: **49.4%** (2026-10-29 source-linked record).
- CritPt: **26.6%** (verified 2026-10-29).
- AA-Omniscience Index: **−4.47** (verified 2026-10-29), indicating weak factual reliability/hallucination control despite strong agentic results.
- ObviousBench v0.2: **84.7% answer pass³**, 84.0% strict pass³, and 98.6% format pass³ (2026-10-29).

Coding:

- Terminal-Bench 2.1: **89.9%** in Xiaomi's headline evaluation. The technical report's separate RL ablation reports **52.8% avg@1** after RL; harness/configuration differs, so these are not silently reconciled.
- Terminal-Bench 4.0: **34.9%** (launch evaluation), a newer and distinct benchmark version.
- DeepSWE 1.1 with mini-SWE-agent: **71.9% Pass@1**.
- SWE-bench Verified: **66.2% avg@3** and SWE-bench Pro: **47.6% avg@3** in the technical report's RL checkpoint comparison.
- ProgramBench: **26.5% raw pass rate**; MiMo Code Bench: **63.2%**; SciCode: **60.9%** (2026-10-29 source-linked record).

Long context:

- AA-LCR: **86.3%** (2026-10-29 source-linked record).
- The 1M context window and 128K output limit are officially verified. No exact-ID public MRCR or Graphwalks series was found in the cited sources.

Multimodal:

- MiMo VisualCoding: **72.3%** in the official model-card evaluation.
- Native joint text/image/video/audio understanding is documented, with dedicated vision and audio encoders.
- No exact-Pro public MMMU-Pro or Video-MMMU score was found in the checked official card, technical report, Artificial Analysis page, or BenchmarkList record.

### Normalized scores (1–100)

- **Tool use: 90/100.** OSWorld 82.0%, Toolathlon 76.9%, GDPval-AA 1,673 Elo, and strong professional-work results demonstrate excellent agency; AutomationBench and Agents' Last Exam leave clear long-horizon reliability gaps.
- **Reasoning: 88/100.** HLE 49.4% and CritPt 26.6% are strong, but the current v5.0.1 index is 30 and AA-Omniscience is negative; missing exact-Pro GPQA evidence and factual instability cap the score.
- **Context window: 94/100.** A verified 1M window, 128K output, long-context RL training, and AA-LCR 86.3% provide excellent evidence; absent MRCR/Graphwalks measurements prevent a higher rating.
- **Multimodal: 89/100.** Native image/video/audio support and MiMo VisualCoding 72.3% are strong differentiators, but the lack of standard exact-Pro MMMU-Pro/Video-MMMU results limits verification.
- **Coding: 87/100.** Terminal-Bench 2.1 89.9%, DeepSWE 71.9%, and SWE-bench Verified 66.2% are strong; Terminal-Bench 4.0 34.9% and ProgramBench 26.5% show substantial weakness on harder or newer evaluations.
- **Cost efficiency: 96/100.** Sub-$1 input/output pricing, a 99% cache discount, and MIT open weights are exceptional for this capability level; very slow, verbose max-quality runs and expensive outlier hosting slightly reduce the score.
- **Overall Score: 89.6/100.** Half-up mean of 90, 88, 94, 89, and 87; best fit for low-cost open-weight omni-modal agents, long-context work, computer use, and coding deployments where self-hosting or provider choice matters.

---

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-05
- Method: Independent public internet research using Xiaomi's official model documentation, launch material, Hugging Face model card and technical report, Artificial Analysis v5.0.1, OpenRouter, and source-linked BenchmarkList records; scores are normalized 1–100 interpretations, not official vendor scores. Only exact MiMo-V2.6-Pro/Pro-RL evidence is used, with index versions and harness conflicts preserved.
- Reference URLs:
  - [Xiaomi — MiMo-V2.6-Pro model documentation](https://mimo.mi.com/models/en-US/mimo-v2.6-pro)
  - [Xiaomi — Introducing MiMo-V2.6](https://mimo.xiaomi.com/mimo-v2-6)
  - [Hugging Face — MiMo-V2.6-Pro-RL model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
  - [arXiv — MiMo-V2.6 technical report](https://arxiv.org/html/2610.11959v1)
  - [Artificial Analysis — MiMo-V2.6-Pro](https://artificialanalysis.ai/models/mimo-v2-6-pro)
  - [OpenRouter — MiMo-V2.6-Pro](https://openrouter.ai/xiaomi/mimo-v2.6-pro)
  - [BenchmarkList — MiMo-V2.6-Pro evaluations](https://benchmarklist.com/models/xiaomi-mimo-v2.6-pro/)
- Future sources: add a new file next to this one using the same headings.
