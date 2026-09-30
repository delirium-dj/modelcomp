# DeepSeek V4 Flash — findings by Kimi K3

- Source: DeepSeek / DeepSeek V4 Flash (0731 reasoning checkpoint, `deepseek-v4-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (0731)
- **Short description:** DeepSeek's fast V4-line reasoning model (July 31, 2026 checkpoint) — elite competitive programming (Codeforces 3052, LiveCodeBench-CoT 91.6%) and verified 1M-context retrieval (MRCR 1M 78.7%), at Flash cost. Superseded by V4.1 Flash.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash`, OpenAI-compatible).
- **Release / knowledge:** 2026-07-31 checkpoint (variant code); cutoff not verified.
- **IDs:** `deepseek/deepseek-v4-flash` (no Zen Free ID verified).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text in/out (single Design Arena row); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; DeepSeek Flash historically cheap — provisional.
- **Architecture:** proprietary (benchlm.ai); MoE per family lineage; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (Vals 67.0%); TB 2.0: **56.9%** (benchlm.ai)
- GDPval-AA: **1189 Elo** (46.3% normalized) (benchlm.ai)
- MCP Atlas: **69.0%**; Toolathlon-Verified: **70.3%**; CyberGym: **76.7%**; BrowseComp: **73.2%** (benchlm.ai)
- AA Agentic Index: **41.7%**; Agents' Last Exam: **25.2%**; AutomationBench: **25.1%** (benchlm.ai)
- Tau2/Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (GPQA-D; AA 90.8%; Vals 89.9%) (benchlm.ai)
- HLE: **34.8%**; HLE w/ tools: **45.1%**; AA-HLE 38.6% (benchlm.ai)
- MRCR 1M: **78.7%**; CorpusQA 1M: **60.5%**; AA-LCR: **79.7%**; CritPt: **16.6%** (benchlm.ai)
- ARC-AGI-1: **89.0%**; ARC-AGI-2: **61.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **34.3**; BenchLM unranked (partial coverage)
- AA-Omniscience Accuracy / Hallucination Rate: **40.4% / 91.7%** (benchlm.ai)
- HMMT Feb 2026: **94.8%**; IMOAnswerBench: **88.4%**; Apex Shortlist: **85.7%**; MMLU-Pro: **86.2%** (benchlm.ai)

Coding:

- SWE-bench Verified: **79.0%**; SWE-bench (Vals): **88.8%**; SWE-bench Pro: **52.6%**; SWE Multilingual: **73.3%** (benchlm.ai)
- LiveCodeBench Pass@1-CoT: **91.6%**; LiveCodeBench (Vals): **87.3%**; Codeforces: **3052** (benchlm.ai)
- DeepSWE: **54.4%**; NL2Repo: **54.2%**; DSBench-FullStack: **68.7%**; VulcanBench v3: **88.4%** (benchlm.ai)
- AA-SciCode: **50.3%**; AA Coding Index: **69.1** (benchlm.ai)

Long context:

- MRCR 1M: **78.7%**; CorpusQA 1M: **60.5%**; AA-LCR 79.7% (benchlm.ai) — verified retrieval at the full 1M window.

Multimodal:

- Design Arena Website: **1219 Elo** (benchlm.ai); effectively text-first (vision ships in the separate V4-Flash-Vision-Exp checkpoint).

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.1 82.7%, Toolathlon 70.3%, CyberGym 76.7%, MCP Atlas 69%; capped by GDPval 1189 and AutomationBench 25.1%.
- **Reasoning: 80/100.** GPQA ~89%, HMMT 94.8%, LCR 79.7%, ARC-AGI-2 61.4%; capped by hallucination 91.7% and HLE 34.8%.
- **Context window: 88/100.** 1M window with MRCR-1M 78.7% and CorpusQA-1M 60.5% measured — verified.
- **Multimodal: 15/100.** Text-first checkpoint (vision variant is separate) — near floor.
- **Coding: 85/100.** Codeforces 3052, LCB-CoT 91.6%, SWE-bench (Vals) 88.8%, Coding Index 69.1; capped by SWE-bench Pro 52.6%.
- **Cost efficiency: 82/100.** Flash-tier pricing expected; provisional.
- **Overall Score: 70/100.** Mean of the five quality dims (80+80+88+15+85)/5 = 69.6 → 70. Best fit: cheap 1M-context text agentic coding with strong math; multimodal needs point to V4.1 Flash / Vision-Exp.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
