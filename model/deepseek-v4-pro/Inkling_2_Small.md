# DeepSeek V4 Pro — findings by Fledge Alpha

- Source: DeepSeek (`deepseek-v4-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (production build 0813; preview Apr 24, 2026)
- **Short description:** DeepSeek's flagship open-weight MoE, GA as the `deepseek-v4-pro` API. Replaced by V4.1 Flash in API routing on 2026-09-14 pending V4.1 Pro.
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`), Bedrock, Vertex AI, Azure, Fireworks, Together, DeepInfra, Novita, SiliconFlow; MIT-licensed weights on HF (`deepseek-ai/DeepSeek-V4-Pro-0813`).
- **Release / knowledge:** GA Aug 13, 2026 (`-0813` build with DSpark speculative decoding and three effort levels); preview Apr 24, 2026.
- **IDs:** `deepseek-ai/DeepSeek-V4-Pro-0813`
- **Context window:** 1,000,000 tokens; 384K max output.
- **Modalities:** text-only (V4 Pro has no native vision; V4.1 Flash adds it).
- **Pricing (as of 2026-10-02):** Off-peak $0.66/M in, $0.022/M cache-hit, $1.98/M out; Peak $1.32/$3.96 (01–04 + 06–10 UTC weekdays); the HF card shows older $0.43/$0.87 permanent rate on cached path — record both.
- **Architecture:** 1.6T total / 49B active MoE, hybrid attention + manifold-constrained hyper-connections; ~10% of V3.2's KV cache at 1M; text-only; MIT weights (~865GB FP4+FP8).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.7%** (AA, 0813 build); Terminal-Bench 2.0: 67.9%
- GDPval-AA: **1554 Elo** (Apr launch); AutomationBench Pass@1: **43.2%**
- Agents' Last Exam: **25.7%** (DeepSeek self-report); BrowseComp: **83.4%**
- Toolathlon-Verified: **74.1%** (DeepSeek self-report); MCP-Atlas: 74.2

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (vals.ai, independently verified)
- HLE (no tools): **41.0%** (AA); HLE w/tools: **60.0%** (DeepSeek self-report)
- MMLU-Pro: **87.5%** (saturation-class); SimpleQA-Verified: 57.9; Chinese-SimpleQA: 84.4
- ARC-AGI-2: **61.3%** (arcprize.org, max effort); LiveBench: **77.4**

Coding:

- SWE-bench Verified: **96.4%** (vals.ai, 0813, rank #2 of 83, saturated)
- SWE-Bench Pro: **55.4%**; SWE-bench Multilingual: **76.2%**
- LiveCodeBench: **87.5%** (vals.ai, saturated); DeepSWE v1.1: **62.7%** (self-report); NL2Repo-Bench 61.5
- Codeforces rating: 3348 (V4 Pro max)

Long context:

- 1M window; no independent 512K–1M MRCR figure; AA-LCR not published independently.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 78.7% (AA) and BrowseComp 83.4% are strong; AutomationBench 43.2% and Agents' Last Exam 25.7% are middling, and four agentic rows are DeepSeek self-reports.
- **Reasoning: 79/100.** GPQA 92.4% (independently verified) and HLE-w/tools 60% (vendor) are strong; ARC-AGI-2 61.3% and AA Index 52 are mid-pack for the frontier.
- **Context window: 92/100.** Full 1M window with 384K max output and unusually small KV-cache footprint.
- **Multimodal: 15/100.** Text-only — no native image/audio/video.
- **Coding: 80/100.** SWE-bench Verified 96.4% (vals.ai, saturated) and LCB 87.5% top the open-weight field; Pro 55.4% trails flagships.
- **Cost efficiency: 88/100.** Off-peak $0.66/$1.98 with ~95% cache-hit discount and MIT weights — a genuine self-host option versus closed APIs.
- **Overall Score: 69/100.** Mean of the five quality dims; a top open-weight coding frontier — but the 15-point text-only penalty on Multimodal drags its aggregate. Recommend for text coding agents; route multimodal work to V4.1 Flash or peers.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (DeepSeek HF cards, The Model Gap, HokAI, AA, vals.ai, arcprize.org, DataLearner); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
