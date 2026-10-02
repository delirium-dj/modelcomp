# Qwen 3.7 Max — findings by DeepSeek 4 Flash

- Source: Alibaba Cloud / Qwen (`qwen/qwen3.7-max`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max (Qwen3.7-Max)
- **Short description:** Alibaba's proprietary Qwen3.7-generation flagship agent model ("The Agent Frontier", May 2026) for coding agents, office automation, MCP/multi-agent orchestration and long-horizon autonomous runs; this folder's slug was formerly the misnomer `qwen-3.7`.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope; OpenRouter `qwen/qwen3.7-max`; OpenCode Zen `opencode/qwen-3.7-max`. Chat Completions-compatible.
- **Release / knowledge:** 2026-05-19/20; knowledge cutoff not publicly disclosed.
- **IDs:** `qwen/qwen3.7-max`; `opencode/qwen-3.7-max`
- **Context window:** 1,000,000 tokens (131,072 max output) — OpenRouter / llm-stats.
- **Modalities:** text in/out; reasoning and tool calls (text-only flagship; the Plus tier carries vision).
- **Pricing (as of 2026-10-02):** ~$1.48 in / $4.43 out per 1M (OpenRouter); ~$1.25/$3.75 per llm-stats; cached ~$0.25.
- **Architecture:** proprietary, closed-weight, API-only.

### Raw benchmarks found

Reasoning / knowledge (Alibaba launch tables via together.ai, flowhunt.io, therouter.ai, felloai.com):

- GPQA Diamond: **92.4%**
- HLE: **41.4%**
- HMMT 2026 February: **97.1%**
- IMOAnswerBench: **90**
- Apex Math: **44.5**
- CritPt: **13.4%**
- Artificial Analysis Intelligence Index v4.0: **56.6** (#5 overall, #1 Chinese model)

Agent / tool use:

- Terminal-Bench 2.0 (Terminus): **69.7%**
- Terminal-Bench Hard: **50.8%**

Coding:

- SWE-bench Verified: **80.4%**
- SWE-bench Pro: **60.6%**
- LiveCodeBench: **91.6%**

Long context:

- 1M-token context claimed; documented 35-hour autonomous agent run; no MRCR/RULER full-window score found

Multimodal:

- no vision input (text-only flagship); no multimodal score — the Plus sibling covers vision

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.0 69.7% and TB-Hard 50.8% with MCP/multi-agent support are strong; no Tau2/OSWorld.
- **Reasoning: 88/100.** GPQA 92.4%, HMMT 97.1% and AA Index 56.6 are frontier-class; HLE 41.4% and CritPt 13.4% cap it.
- **Context window: 92/100.** 1M-token window with 131K output; no measured retrieval benchmark.
- **Multimodal: 15/100.** Text-only flagship (vision lives in Qwen 3.7 Plus).
- **Coding: 84/100.** SWE Verified 80.4%, SWE-Pro 60.6% and LiveCodeBench 91.6% are elite.
- **Cost efficiency: 72/100.** ~$1.25–2.50 in / $3.75–7.50 out per 1M is mid-tier for frontier-adjacent capability.
- **Overall Score: 71/100.** Mean of (78 + 88 + 92 + 15 + 84) / 5 = 71.4 → 71. Best-fit: long-horizon agentic coding and office/enterprise automation; the text-only multimodal floor holds this below the multimodal frontier.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (Alibaba launch tables via together.ai, flowhunt.io, therouter.ai, felloai.com, llm-stats.com, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
