# Nemotron 3 Ultra Free — findings by GLM 5.3 Flash

- Source: NVIDIA (`opencode/nemotron-3-ultra-free`; native model Nemotron 3 Ultra 550B-A55B)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free (free tier of NVIDIA's Nemotron 3 Ultra, the 550B open orchestration model)
- **Short description:** NVIDIA's open frontier-reasoning/orchestration model: 550B/55B hybrid Mamba-Transformer MoE with 5× the throughput of comparable open models and up to 30% lower cost-to-task-completion on agent loops. Built for the "hard calls" in long-running agent systems — planning, synthesis, verification — while cheaper models execute routine steps. BenchLM ranks the shared weights #111 of 889 (47.16).
- **Provider / access:** OpenCode Zen free tier (`opencode/nemotron-3-ultra-free`, Chat Completions; NVIDIA trial endpoints are trial-logged per repo catalog); NVIDIA NIM (build.nvidia.com) with NVFP4 on Hopper/Blackwell/Ampere; weights on Hugging Face for local deployment.
- **Release / knowledge:** released 2026-06-04 (NVIDIA technical blog). Knowledge cutoff: refreshed GitHub tokens through 2025-09-30.
- **IDs:** `opencode/nemotron-3-ultra-free` (Zen); NIM endpoint `nvidia/nemotron-3-ultra-550b-a55b`.
- **Context window:** 1,000,000 tokens native (BenchLM concurs); **262K default serve** (repo catalog) — RULER results reported at 1M context length.
- **Modalities:** text in / text out (anything beyond text unverified). Works with 11 agent harnesses out of the box.
- **Pricing (as of 2026-10-11):** **$0** on the evaluated free tier (Zen / NVIDIA trial); weight download is free for self-hosting.
- **Architecture:** 550B total / 55B active MoE; hybrid Mamba-Transformer; LatentMoE routing; multi-token prediction; Multi-Teacher On-Policy Distillation (10+ specialized teachers); NVFP4.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **83.3%** (AA, independent — corroborates the Tau2-V3 Airline 81.5/Retail 86.4 rows from the prior pass); τ³-bench: **70.9%** (model card — fills the Tau3 gap)
- GDPval-AA: **1016** (AA, independent, normalized **33.1%**) — **conflicts with the NVIDIA-table 1,448 the prior pass cited**; the independent board is lower
- AA Harvey LAB-AA v1.0: **81.7%** (AA — new, strong); BrowseComp: **44.4%** (model card); PinchBench: **90.0%** (corroborated, down from the prior 91 read); terminalBenchHard: **36.4%**
- AA weak rows: AutomationBench-AA **3.0%**, Terminal-Bench 4.0 **0.5%**, Tau3-Banking **14.2%**, AnalystAgent **6.3%**, Briefcase **876 Elo** (AA — the standardized agentic board is weak)
- AA Agentic Index: **21.7%** (AA); Vals TB2.1: **50.9%** (Vals, vs vendor 56.4)
- Terminal-Bench 2.0: **54%** (prior pass); EnterpriseOps-Gym: **33%** (prior pass)
- Efficiency: **5× throughput** vs comparable open models; **up to 30% lower cost-to-task-completion** (NVIDIA blog, prior pass)

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (model card — corroborated; AA **86.7%**; Vals **86.1%** — three-source agreement)
- HLE: **37.4%** with tools (model card — fills the gap) / **26.7%** without; AA-HLE: **28.4%**
- Artificial Analysis Intelligence Index: **22.9** (AA — fills the index gap; low)
- AA-LCR v1.1: **67.0%** (model card — corroborates the prior 65.4); LongBench v2: **61.9%** (model card — fills the gap); CritPt: **3.1%** (near-zero); MLCR-AA: **11.1%** (weak)
- IFBench: **81.7% / 81.4%** (corroborates the prior 82 — best-in-table claim stands); MMLU-Pro: **86.8% / 85.8%** (two sources)

Coding:

- LiveCodeBench v6: **89.0%** (HF model card via benchlm.ai — **upgrades the 85.98% Vals reading the prior pass cited**; Vals board now reads 86.0 — consistent)
- SWE-bench Verified: **71.9%** (model card — corroborated); SWE Multilingual: **67.7%**; SWE-bench (Vals): **69.0%**
- SciCode: **44.6%** (model card — fills the gap); AA-SciCode: **40.3%** (AA); AA Coding Index: **49.3%** (AA — new, mid)

Long context:

- RULER at 1M: **95%** (NVIDIA claim, prior pass); AA-LCR 67.0% and LongBench v2 61.9% provide measured evidence (mid); 262K default serve cap noted

Multimodal:

- Design Arena Website: **1145** (OpenRouter); text-only in/out

### Normalized scores (1–100)

- **Tool use: 78/100.** (Was 82 on the prior pass.) τ² 83.3% (AA-corroborated) and τ³ 70.9% fill gaps, but the GDPval conflict resolves down (1016 AA / 33.1% vs the prior 1448 vendor row) and the standardized AA agentic board is floor-class (AutomationBench 3.0%, TB4.0 0.5%, Tau3-Banking 14.2%) — one band down.
- **Reasoning: 78/100.** GPQA 86.1–87.0% (three-source agreement), HLE-with-tools 37.4% (fills the gap) and IFBench 81.7% stay strong; AA Index 22.9 and CritPt 3.1% hold the same band — unchanged.
- **Context window: 97/100.** 1M native (BenchLM concurs) with RULER 95% (vendor) and now-corroborated AA-LCR 67.0%/LongBench 61.9%; the 262K default serve cap keeps it off 100.
- **Multimodal: 20/100.** Text-only (beyond-text unverified).
- **Coding: 84/100.** LiveCodeBench upgrades to 89.0% (HF card; Vals 86.0% corroborates), SciCode 44.6% and SWE-ML 67.7% fill gaps — the algorithmic-coding ceiling story strengthens; AA Coding Index 49.3% caps it below 90.
- **Cost efficiency: 100/100.** Evaluated $0 free tier (Zen/NVIDIA trial) plus free weights.
- **Overall Score: 71.4/100.** (Was 72.2 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (78 + 78 + 97 + 20 + 84) / 5 = 357/5 = 71.4 — lowered slightly on the 2026-10-11 second pass as the GDPval conflict resolves down and the standardized AA agentic rows temper the orchestration story. Best fit: the open fast long-agent orchestrator with strong honesty/low hallucination and now thoroughly verified coding — pair with Lightning-class executors.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai Nemotron 3 Ultra page updated 2026-10-10 citing the NVIDIA HF model card + AA/Vals boards, the prior 2026-09-18/10-05 passes on the NVIDIA technical blog/build.nvidia/Vals); scores are normalized 1–100 interpretations, not official vendor scores. Ultra numbers transfer to the Free tier via the same-weights free-serving statement.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
