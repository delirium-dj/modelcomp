# MiMo-V2.6-Flash — findings by Step 5 Preview

- Source: Xiaomi (`mimo-v2.6-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's efficiency checkpoint of the September 2026 MiMo-V2.6 series — a 309B-total/15B-active open-weight MoE with native omni-modal input (text, image, video, audio), 1M context and V2.5-series pricing ($0.14/$0.28 per MTok). Trained in the same livestreamed RL run as the flagship MiMo-V2.6-Pro (Xiaomi-reported cost $0.85M); slightly below Pro on every shared agentic benchmark but independently stronger on Terminal-Bench 2.1.
- **Provider / access:** Xiaomi MiMo API (`mimo-v2.6-flash`, prepaid Token Plan or pay-as-you-go); OpenRouter `xiaomi/mimo-v2.6-flash`; open weights `XiaomiMiMo/MiMo-V2.6-Flash-RL` on Hugging Face (MIT), ModelScope, Ollama/LM Studio/vLLM/SGLang. No OpenCode Zen listing found.
- **Release / knowledge:** 2026-09-21 (HF upload / AA) – 2026-09-22 (official page, Beijing time). Knowledge cutoff not disclosed (the "December 2024" string on the model page is a sample system prompt).
- **IDs:** `mimo-v2.6-flash` (Xiaomi API), `xiaomi/mimo-v2.6-flash` (OpenRouter), `XiaomiMiMo/MiMo-V2.6-Flash-RL` (HF).
- **Context window:** 1,048,576 tokens (1M) input; 128K max output.
- **Modalities:** Text, image, video and audio in → text out (native omni-modal). Deep thinking (reasoning), tool calls, streaming, web search, structured output, context caching. Rate limits 100 RPM / 10M TPM on the official endpoint.
- **Pricing (as of 2026-10-09):** $0.14 / MTok input (cache miss), $0.0028 cache hit, $0.28 output — one flat rate, unchanged from the V2.5 series; OpenRouter lists $0.10/$0.28 on some routes. FP8 weights ~173 GB across 65 shards (multi-GPU serving); 4-bit quants ~155 GB.
- **Architecture:** Sparse MoE, 309B total / 15B active per token; MIT license with weights + technical report + RL environments.

### Raw benchmarks found

Agent / tool use (Xiaomi model card / tech report, self-reported):

- Terminal-Bench 2.1: **87.6%** (vendor, #15/194; Fable 5.1 leads at 91.4%); **independent: 76.40%** (Vals AI, Terminus-2, 2026-10-01)
- Terminal-Bench 4.0: **28.8%** (vendor, #17/29); **independent: 24.2%** (Vals, default effort, 2026-10-08)
- AutomationBench v1.0.6: **52.3%** (vendor — above Claude Opus 5's 50.3 and GPT-5.6 Sol's 45.8)
- Toolathlon-Verified: **73.6%** (vendor)
- OSWorld-Verified: **80.8%** (vendor; Opus 5 83.4, Fable 5 86.0)
- JobBench: **61.2%** (vendor; above GPT-5.6 Sol's 45.4)
- Agents' Last Exam: **27.6%** (vendor)
- CyberGym: **95.1%**, SEC-Bench Pro 47.5%, ExploitBench 25.3%, ExploitGym 6.0% (vendor)
- GDPval-AA: **no verified public score found** (Xiaomi's table has no Flash entry)
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no vendor-published score**; third-party quant eval (EXL3, 8K budget): 56.2% full / 85.7% budget-completing subset — unofficial, budget-limited
- MMLU-Pro: **no vendor-published score**; third-party quant eval: 76.4% (floor 76.4–78.8%)
- Artificial Analysis Intelligence Index: **37.9** (independent, 2026-10-03, 85th pct — Fable 5.1 leads at 65.7)
- HLE / AIME / ARC-AGI-2 / LiveCodeBench: **no verified public score found**
- AA-LCR: **74.3%** (independent, 78th pct; K3 leads at 88.7%)
- SciCode: **51.3%** (85th pct); HumanEval+ 90.2%, MBPP+ 77.2%, GSM8K 96.4% (third-party quant evals, not vendor-published)

Coding:

- DeepSWE v1.1: **67.9%** (vendor; #18/52; O-5.5 leads 74.2%); the announcement's RL write-up reports 65.7% as the same run's after-training endpoint
- MiMo Code Bench: **61.2%** (in-house); ProgramBench: **26.0%** (#31/37); MiMo Visual Coding: **71.5%** (in-house)
- SWE-bench Verified / SWE-bench Pro / Vibe Code Bench: **no verified public score found**
- WebDev Arena: **1636** (#13/100); LMArena Text 1452, Vision 1247, Math 1378
- Vals AI CyberBench v1.1: **#5 of 44**; Vals Index 53.23% (#18/45)

Long context:

- 1M-token window at flat pricing; AA-LCR 74.3% (independent) is the only long-context measure; **no public MRCR/RULER**

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 87.6% (vendor) / 76.4% (Vals), AutomationBench 52.3%, Toolathlon 73.6% and OSWorld-Verified 80.8% sit mid-frontier; capped by Terminal-Bench 4.0 at 28.8%/24.2%, Agents' Last Exam 27.6%, no GDPval-AA, and every agentic number being Xiaomi's own harness.
- **Reasoning: 72/100.** The independent AA Intelligence Index reads 37.9 (85th pct) and AA-LCR 74.3%, with unofficial third-party evals (MMLU-Pro 76.4%, GPQA-D ~56–86% budget-limited) consistent with a strong mid-tier; capped because Xiaomi publishes no GPQA/HLE/AIME/ARC-AGI numbers at all and CritPt/LiveBench are absent.
- **Context window: 92/100.** 1,048,576-token window with 128K output at flat pricing is the ≥1M tier; AA-LCR 74.3% supports it, but the 100 tier's ≥98% retrieval at 512K+ is unverifiable with no MRCR/RULER published.
- **Multimodal: 88/100.** Text + image + video + audio in → text out is the 90–100 modality band — the first Xiaomi model with the full omni-modal input set — placed just under 90 because no MMMU-Pro score is published and the vision evidence (MiMo Visual Coding 71.5%, Vision Arena 1247) is in-house/arena rather than a standard suite.
- **Coding: 82/100.** DeepSWE v1.1 67.9% (vendor) is only ~6 points off the Opus-5.5 lead, TB2.1 87.6% (76.4% independent) and WebDev Arena #13 back it; capped by ProgramBench 26.0%, no vendor SWE-bench Verified/Pro at all, and the vendor/independent 11-point Terminal-Bench spread.
- **Cost efficiency: 97/100.** $0.14/$0.28 per MTok with $0.0028 cache hits is below the methodology's ~$0.10/$0.20 = 97–99 tier — the #1 AA Price board model at $0.17 blended, MIT weights included; the cheapest omni-modal 1M-context model in this comparison.
- **Overall Score: 83/100.** Best-fit recommendation: the cost-efficiency pick for high-volume omni-modal and agentic office workloads — Pro-class agentic scores at $0.14/$0.28; verify on your own harness given how thin the independent coverage is.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Xiaomi mimo.mi.com model page + HF model card/tech report, OpenLM.ai, The Model Gap, Vals AI, BenchmarkList, OpenRouter, llm-stats, HokAI, WaitWhichModel, third-party EXL3 quant evals); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
