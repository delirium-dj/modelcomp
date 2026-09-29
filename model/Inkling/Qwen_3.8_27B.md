# Inkling — findings by Qwen 3.8 27B

- Source: Thinking Machines Lab (`inkling`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's open-weight multimodal MoE (July 2026) for reasoning, coding, and agentic tool use; sibling variant Inkling-Small also exists.
- **Provider / access:** OpenAI-compatible API via 7 providers (CloudPrice, 2026-09-26); no first-party endpoint documented in this pass. No OpenCode Zen Free ID verified in this pass.
- **Release / knowledge:** released July 2026 (BenchLM, llm-stats); knowledge cutoff not disclosed.
- **IDs:** `thinkingmachines/inkling` (provider routing IDs); open weights, no exact HF id verified in this pass. No Free ID on Zen verified in this pass.
- **Context window:** 1M total reported by BenchLM/CloudPrice/LLMReference ("up to 1M"); llm-stats lists 524K — conflict noted, scored on the 500K–1M band.
- **Modalities:** text / image / audio in, text out; hybrid reasoning (thinking toggle); tool calls yes (MCP Atlas verified).
- **Pricing (as of 2026-09-29):** ~$0.95–$1.00 in / $4.05 out / $0.16 cached in per 1M (llm-stats / Benchquill / LLM-Dir); paid tier.
- **Architecture:** 975B total / 41B active parameters, MoE, open weights (license details not verified in this pass).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** (BenchLM, 2026-09-28; Vals 47.6%, AA harness 55.1%)
- Terminal-Bench 4.0: **1.0%** (AA harness, BenchLM)
- Tau3-Banking / Tau2-Bench: AA Tau3 Banking **29.1%** (BenchLM)
- GDPval-AA: **1064** Elo (**28.2%** normalized) (BenchLM)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP Atlas **74.1%** (BenchLM)
- BrowseComp **77.1%**; AA Agentic Index **24.3%**; AA EnterpriseOps-Gym **38.0%**; AA-Analyst **23.8%**; AA Briefcase Elo **834**; AA AutomationBench **5.0%**; GDP.pdf **12.8%**; Design Arena Agentic Web Dev **1257** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **87.9%** (BenchLM; AA 87.2%, Vals 87.1%)
- HLE: **46%** (BenchLM; w/o tools 30%; AA-HLE 31.9%)
- LCR / MLCR: LCR **77.3%**; MLCR-AA **12.2%** (BenchLM/AA)
- CritPt: **5.4%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **25** (xhigh variant) / **54.24 (#67 of 512)**
- Omniscience Accuracy / Hallucination Rate: **41.6% / 67.7%** (AA via BenchLM); MMLU-Pro (Vals) **86.3%**

Coding:

- SWE-bench Verified / SWE-Pro: **77.6% / 54.3%** (BenchLM; Vals SWE 77.6%)
- LiveCodeBench: **85.5%** (Vals, BenchLM)
- SciCode / AA-SciCode: **47.0%** (BenchLM/AA)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: AA Coding Index **52.1%**; FrontierSWE v2 **4.1%** (BenchLM); AIME26 **97.1%** (math)

Long context:

- 1M window per top trackers (524K per llm-stats — conflict); no dedicated retrieval benchmark at window length found beyond AA-LCR 77.3%.

Multimodal:

- MMMU-Pro **73.5%** (AA harness identical); CharXiv **82%** / 78.1% w/o tools (BenchLM).

### Normalized scores (1–100)

- **Tool use: 68/100.** TB2.1 63.8% and Tau3 29.1% just above the mid band (45–60% / 10–25%), GDPval-AA 1064 inside the mid 900–1200 band; capped by weak AA AutomationBench 5.0% and Briefcase Elo 834.
- **Reasoning: 74/100.** GPQA Diamond 87.9% near the 90%+ frontier reference and HLE 46% above 40%; capped by AA Index 25 (mid band) and CritPt 5.4%.
- **Context window: 88/100.** Trackers split between 1M and 524K; scored in the 500K–1M tier (85–94) rather than >=1M because of the unresolved conflict.
- **Multimodal: 90/100.** Text/image/audio in, text out falls in the audio-in tier (90–100); MMMU-Pro 73.5% at the bottom of that band.
- **Coding: 76/100.** SWE-bench Verified 77.6% and LiveCodeBench 85.5% strong, but SciCode 47.0% below the 55%+ frontier reference and AA Coding Index 52.1% below 70%; SWE-Pro 54.3% mid.
- **Cost efficiency: 89/100.** ~$1.00/$4.05 per 1M sits between the ~$0.60/$2.20 = ~92 and ~$1.25/$4.25 = ~88 reference points.
- **Overall Score: 79/100.** (68 + 74 + 88 + 90 + 76) / 5 = 79.2 → 79. Best fit: open-weight multimodal coder/reasoner for self-hosted fine-tuning; pricier than most open peers.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (BenchLM, Artificial Analysis, llm-stats, CloudPrice, LLM-Dir); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
