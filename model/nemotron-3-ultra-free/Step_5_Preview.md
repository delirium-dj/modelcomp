# Nemotron 3 Ultra (free) — findings by Step 5 Preview

- Source: NVIDIA (`nvidia/nemotron-3-ultra-550b-a55b:free`; weights `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3 Ultra (550B-A55B); the `:free` variant is the zero-cost OpenRouter route to the same weights
- **Short description:** NVIDIA's largest and final Nemotron 3 model (released 2026-06-04) — a 550B-parameter hybrid Mamba-2 + MoE + attention MoE (LatentMoE, 55B active, MTP speculative decoding), pre-trained in NVFP4 on 20T tokens with a dedicated long-context phase (CPT at 1M), and post-trained with SFT, RL and Multi-teacher On-Policy Distillation for long-running autonomous agents. Its headline is efficiency: 5.9×/4.8×/1.6× the inference throughput of GLM-5.1, Kimi-K2.6 and Qwen-3.5-397B at on-par accuracy, with 30% lower cost-to-completion on SWE-bench/Terminal-Bench tasks (fewer total tokens per turn). SWE-bench Verified holds 65–70.4% across five different agent scaffolds (Pi, OpenHands, Hermes, OpenCode, Mini-SWE-Agent). OpenMDW-licensed: base, post-trained, NVFP4 and GenRM checkpoints plus recipes and data on Hugging Face. The **`:free` route** on OpenRouter serves the full model at $0/$0 through NVIDIA's own provider — rate-limited, ~22 tok/s, 2.19 s TTFT, but with shaky availability (OpenRouter's table shows 41% uptime; third-party trackers have seen ~3%).
- **Provider / access:** Open weights (OpenMDW v1.1) on Hugging Face / NGC; NVIDIA NIM microservice; OpenRouter (`:free` and paid), build.nvidia.com, Anaconda, Perplexity Pro.
- **Release:** 2026-06-04.
- **Context window:** 1M tokens (defaults to 256K in vLLM/SGLang unless `ALLOW_LONG_MAX_MODEL_LEN=1`); max output 65,536 tokens.
- **Modalities:** Text in → text out; reasoning toggle via `enable_thinking`; tool calls + reasoning parsers; 11+ languages.
- **Pricing (as of 2026-10-09):** $0/$0 on the NVIDIA `:free` OpenRouter route (rate-limited); paid access via NVIDIA platforms; weights free to self-host (min 4× GB200/B200/GB300/B300, 8× H100/H200 for the NVFP4 checkpoint).
- **Architecture:** LatentMoE Mamba-2 + MoE + Attention hybrid, 550B/55B, MTP, NVFP4 pre-training.

### Raw benchmarks found

NVIDIA (post-trained, BF16; NVFP4 in parens where different):

- SWE-bench Verified: **71.9%** (69.7); SWE-bench Multilingual: **67.7%** (65.8); developer blog: 65–70.4% across five scaffolds
- Terminal-Bench 2.1: **56.4%** (53.9); GDPVal: **46.7%** (47.9)
- PinchBench (agent productivity): **90.0%**; ProfBench (Search): **56.0%**
- TauBench V3 average: **70.9%** (Airline 81.5, Retail 86.4, Telecom 92.9, Banking 22.6)
- BrowseComp: **44.4%** (41.4); EnterpriseOps-Gym (long-horizon planning): **33%**
- LiveCodeBench v6: **89.0%**; IOI 2025: **570 points**; SciCode (subtask): **44.6%**
- GPQA (no tools): **87.0%**; HLE (no tools): **26.7%** (37.4% with tools); CritPt: **3.1%**
- IMOAnswerBench: **88.6%** (92.3% with tools); Apex-Shortlist: **74.9%** (84.8% with tools)
- MMLU-Pro: **86.8%**; OmniScience: 24.1% accuracy / 78.7% non-hallucination
- IFBench: **81.7%**; Multi-Challenge: **63.8%**
- AA-LCR: **65.4%**; RULER @1M: **94.7%** (94.0 NVFP4); LongBench v2 (≤1M): **61.9%**
- Base model: MMLU 89.08, MMLU-Pro 79.07, RULER 1M 76.83

Third-party:

- Artificial Analysis: Intelligence Index **22.9**, Coding **49.3**, Agentic **20.1**; GPQA Diamond 86.7%, HLE 28.4%, IFBench 81.4%, τ²-Telecom 83.3%, AA-LCR 79.3%, τ-Banking 14.2%, GDPval-AA 25.8%, TB 2.1 53.9%, TB Hard 36.4%, TB 4.0 0.5%
- Vals AI: SWE-bench 69.0%, LiveCodeBench 86.0%, MMLU-Pro 85.8%, LegalBench 82.1%, TaxEval 73.1%, Vibe Code Bench 7.6%, ProgramBench 0.0%, Vals Index 44.0%
- Design Arena: 1,069–1,148 Elo across categories

### Normalized scores (1–100)

- **Tool use: 68/100.** PinchBench 90% and TauBench V3 average 70.9% (Telecom 92.9%, Retail 86.4%) are strong, but Banking 22.6%, BrowseComp 44.4%, GDPVal 46.7% and AA Agentic Index 20.1% pull the average down — a capable orchestrator with uneven domain coverage.
- **Reasoning: 80/100.** GPQA Diamond 87.0% (AA: 86.7%), LiveCodeBench 89.0%, IOI 570 points and MMLU-Pro 86.8% are upper-band; HLE 26.7% (37.4% with tools) and CritPt 3.1% keep it below the frontier tier.
- **Context window: 90/100.** A verified 1M window with RULER@1M at 94.7% — the top evidence in its comparison set and the ≥1M band — docked because AA-LCR 79.3% and LongBench v2 61.9% show the practical long-context ceiling is not near-perfect retrieval.
- **Multimodal: 12/100.** Text-only (text in → text out) — the methodology's text-only band (10–20).
- **Coding: 68/100.** SWE-bench Verified 71.9% (scaffold-stable at 65–70.4%), LiveCodeBench 89.0% and IOI 570 are genuinely strong; Terminal-Bench 2.1 56.4%, SciCode 44.6%, Vibe Code Bench 7.6% and ProgramBench 0.0% show it is an issue-resolution coder, not an end-to-end build agent.
- **Cost efficiency: 98/100.** The `:free` route is literally $0/$0 and the OpenMDW weights are free to self-host — the methodology's $0 tier; docked two points for the free route's ~22 tok/s throughput, 2.19 s TTFT and flaky availability (41% uptime at measurement time).
- **Overall Score: 64/100.** Best-fit recommendation: a strong free-to-run frontier-adjacent reasoning model — 1M context, GPU-efficient Mamba-MoE throughput and ~72% SWE-bench at zero cost, with an uptime caveat on the free route and no multimodal input.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (NVIDIA Nemotron research page, technical report, NVIDIA developer blog, Hugging Face model cards, NGC model page, OpenRouter + Artificial Analysis + Vals AI trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_4.md`, using the same headings.
