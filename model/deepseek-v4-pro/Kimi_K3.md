# DeepSeek V4 Pro — findings by Kimi K3

- Source: DeepSeek / DeepSeek V4 Pro (0813 reasoning variant, `deepseek-v4-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (0813)
- **Short description:** DeepSeek's V4-generation Pro reasoning model — an elite math/competitive-programming performer (Codeforces 3206, LiveCodeBench Pass@1-CoT 93.5%) with strong agentic tool use and verified 1M-context retrieval (MRCR 1M 83.5%).
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`, OpenAI-compatible chat API).
- **Release / knowledge:** 0813 checkpoint → August 13, 2026 (variant code); cutoff not verified in my sources.
- **IDs:** `deepseek/deepseek-v4-pro` (0813 reasoning variant; no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (benchlm.ai); output not verified.
- **Modalities:** text in / text out (only a Design Arena row under multimodal; classified reasoning text model); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; DeepSeek historically priced well below US flagships — provisional.
- **Architecture:** proprietary (benchlm.ai); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.9%** (Vals 54.7% — large harness divergence); TB 2.0: **67.9%** (benchlm.ai)
- τ²-bench (Tau2-Bench): **96.2%** (benchlm.ai)
- GDPval-AA: **1306 Elo** (54.5% normalized) (benchlm.ai)
- MCP Atlas: **73.6%**; Toolathlon-Verified: **74.1%**; CyberGym: **83.3%**; BrowseComp: **83.4%** (benchlm.ai)
- AA Agentic Index: **49.6%**; APEX-Agents-AA: **24.3%**; EnterpriseOps-Gym: **49.6%** (benchlm.ai)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (GPQA-D; AA 92.8%; Vals 92.4%) (benchlm.ai)
- HLE: **42.7%**; HLE w/ tools: **60.0%**; AA-HLE: **41.0%** (benchlm.ai)
- AA-LCR: **80.3%**; CritPt: **18.0%**; MRCR 1M: **83.5%**; CorpusQA 1M: **62.0%** (benchlm.ai)
- ARC-AGI-1: **90.0%**; ARC-AGI-2: **61.3%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **53.2**; BenchLM overall **63.48/100, #33 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **49.1% / 94.1%** — severe hallucination (benchlm.ai)
- HMMT Feb 2026: **95.2%**; IMOAnswerBench: **89.8%**; Apex Shortlist: **90.2%**; MMLU-Pro: **87.5%** (benchlm.ai)

Coding:

- SWE-bench Verified: **80.6%**; SWE-bench (Vals): **96.4%**; SWE-bench Pro: **55.4%**; SWE Multilingual: **76.2%** (benchlm.ai)
- LiveCodeBench Pass@1-COT: **93.5%**; LiveCodeBench (Vals): **87.5%**; Codeforces: **3206** (benchlm.ai)
- DeepSWE: **62.7%**; NL2Repo: **61.5%**; DSBench-FullStack: **71.1%**; AA-SciCode: **51.0%**; AA Coding Index: **68.8** (benchlm.ai)

Long context:

- MRCR 1M: **83.5%**; CorpusQA 1M: **62.0%** (benchlm.ai) — verified retrieval at the full 1M window.

Multimodal:

- Design Arena Website: **1258 Elo** (benchlm.ai); effectively text-first — no vision benchmark rows beyond that.

### Normalized scores (1–100)

- **Tool use: 85/100.** τ²-bench 96.2%, TB 2.1 87.9%, CyberGym 83.3%, Toolathlon-Verified 74.1%; capped by Vals TB divergence (54.7%) and Agentic Index 49.6%.
- **Reasoning: 84/100.** HMMT 95.2%, GPQA ~92%, ARC-AGI-2 61.3%, AA Index 53.2; capped hard by 94.1% hallucination rate (Omniscience) and HLE 41–42.7%.
- **Context window: 90/100.** 1M window with measured MRCR-1M 83.5% and CorpusQA-1M 62.0% — rare verified max-window retrieval.
- **Multimodal: 20/100.** Text-first model; only a Design Arena web-design row; near floor on modality coverage (above the 15 text-only floor solely because of that one grounded row).
- **Coding: 84/100.** Codeforces 3206 and LiveCodeBench-CoT 93.5% are world-class; SWE-bench Verified 80.6%; capped by SWE-bench Pro 55.4% and SciCode 51%.
- **Cost efficiency: 80/100.** Price unverified; scored provisional on DeepSeek's historical low-cost positioning.
- **Overall Score: 73/100.** Mean of the five quality dims (85+84+90+20+84)/5 = 72.6 → 73. Best fit: 1M-context math/competitive-coding and agent pipelines that are text-only.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
