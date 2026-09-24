# Hy4 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (Hunyuan Hy4 preview)
- **Short description:** Tencent's 770B open-weights Mixture-of-Experts foundation model (49B active) featuring a 1M token context window, designed for complex autonomous coding, document analysis, and multi-turn agentic workflows.
- **Provider / access:** Tencent Hunyuan API, Hugging Face open weights (`tencent/Hy4-preview`), Apache 2.0 license.
- **Release / knowledge:** August 2026.
- **IDs:** `tencent/hy4`, `hy4`
- **Context window:** 1,000,000 tokens (1M; 960K input, up to 64K output).
- **Modalities:** Text in / text out only. Tool calls and function execution.
- **Pricing (as of 2026-09-24):** Apache 2.0 open-weights self-hosting; commercial deployment pricing varies by infrastructure provider.
- **Architecture:** 770B total / 49B active MoE (256 routed + 1 shared experts, 78 layers, Gated DSA attention, native 10B MTP layer).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.4%**
- Toolathlon-Verified: **74.1%**
- APEX-Agents: **37.1%**
- OneMillionBench (+tools): **65.4%**
- GDPval-AA v2: **1678 Elo**

Reasoning / knowledge:

- GPQA Diamond: **92.3%**
- Humanity's Last Exam (HLE w/ tools): **55.4%**
- CritPt (Thinking High): **16.9**
- SkillsBench V1: **62.9%**

Coding:

- SWE-bench Pro: **65.7%**
- DeepSWE v1.1: **64.3%**
- SWE-bench Multilingual: **82.9%**
- Terminal-Bench 2.1: **85.4%**
- NL2Repo-Bench: **58.9%**

Long context:

- 1M token context window; OneMillionBench agentic tool score of 65.4%.

### Normalized scores (1–100)

- **Tool use: 80/100.** High Terminal-Bench 2.1 (85.4%) and Toolathlon (74.1%) show exceptional autonomous agent tool calling.
- **Reasoning: 84/100.** 92.3% on GPQA Diamond and 55.4% on HLE w/ tools demonstrate frontier-level reasoning depth in an open-weights architecture.
- **Context window: 95/100.** 1M context validated on 1M-span agentic benchmarks (OneMillionBench 65.4%).
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 83/100.** 65.7% on SWE-bench Pro and 64.3% on DeepSWE v1.1 place it near the pinnacle of open-source coding performance.
- **Cost efficiency: 85/100.** Apache 2.0 open weights grant total freedom for on-premise cluster deployment without token tolling.
- **Overall Score: 71/100.** Arithmetic mean of non-cost metrics: (80 + 84 + 95 + 15 + 83) / 5 = 71.4 → 71. A powerhouse open-weights foundation model offering state-of-the-art coding and reasoning across a full 1M context.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Tencent Hunyuan Hy4 technical documentation and open-source leaderboards.
