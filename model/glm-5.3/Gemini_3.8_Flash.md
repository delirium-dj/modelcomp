# GLM 5.3 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Zhipu AI's flagship open-weights reasoning Mixture-of-Experts foundation model (753B total / 40B active) engineered for long-horizon agentic software development, terminal operations, cybersecurity research, and 1M context comprehension.
- **Provider / access:** OpenCode Zen (`opencode/glm-5.3`), Z.ai API (`glm-5.3`), Hugging Face open weights.
- **Release / knowledge:** August 2026.
- **IDs:** `opencode/glm-5.3`, `glm-5.3`
- **Context window:** 1,048,576 tokens (1M; max output 128,000).
- **Modalities:** Text in / text out only (reasoning model). MCP tools, function calling, structured outputs, and context caching.
- **Pricing (as of 2026-09-24):** $1.40 / 1M input tokens, $4.40 / 1M output tokens ($0.26 cached input).
- **Architecture:** 753B parameter MoE (40B active, 256 routed experts + 1 shared) with advanced post-training RL.

### Raw benchmarks found

Coding & Terminal:

- Terminal-Bench 2.1: **88.2%**
- Terminal-Bench 3.0: **28.3%** (open-source benchmark record)
- DeepSWE v1.1: **66.9%**
- FrontierSWE: **78.1%**
- SWE-Marathon v1.1: **42.5%**
- CyberGym: **84.5%**

Agent / tool use:

- Toolathlon Verified: **73.0%**
- AutomationBench: **48.2%**
- Agents' Last Exam (ALE-CLI): **28.5%**

Reasoning / knowledge:

- Humanity's Last Exam (HLE w/ tools): **62.5%**
- GDPval-AA v2: **1769–1770 Elo**
- Artificial Analysis Intelligence Index: **60**

Long context:

- 1M token context window; up to 128K output tokens supported.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 at 88.2% and Toolathlon at 73.0% demonstrate excellent autonomous agent execution across complex CLI loops.
- **Reasoning: 82/100.** 62.5% on HLE w/ tools and an AA Intelligence Index of 60 position GLM 5.3 among the top open-weights reasoning engines.
- **Context window: 84/100.** Full 1M context with 128K max output provides large working memory for full-project refactoring.
- **Multimodal: 50/100.** Text-only input and output.
- **Coding: 84/100.** Open-weights state-of-the-art across Terminal-Bench 3.0 (28.3%), DeepSWE (66.9%), and FrontierSWE (78.1%).
- **Cost efficiency: 86/100.** $1.40 / $4.40 per 1M tokens with low-cost $0.26 caching and permissive open-weights self-hosting.
- **Overall Score: 76/100.** Arithmetic mean of non-cost metrics: (78 + 82 + 84 + 50 + 84) / 5 = 75.6 → 76. A premier open-weights coding and reasoning model offering class-leading terminal execution across a 1M context window.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Zhipu AI release publications and independent evaluations.
