# GLM 5.3 Free — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** The free-tier access offering of Zhipu AI's flagship GLM-5.3 Mixture-of-Experts coding model (743B total / 40B active), engineered for high-performance agentic engineering, cybersecurity tasks, and deep reasoning.
- **Provider / access:** OpenCode Zen free tier (`opencode/glm-5.3-free`), Z.ai platform promotions.
- **Release / knowledge:** August 2026.
- **IDs:** `opencode/glm-5.3-free`, `glm-5.3`
- **Context window:** 1,048,576 tokens (1M; default serve 204K on Zen free routing).
- **Modalities:** Text in / text out only. Tool calls, MCP integration, and structured output.
- **Pricing (as of 2026-09-24):** Free tier on OpenCode Zen (metered API list $1.40 / $4.40 per 1M).
- **Architecture:** 743B parameter MoE (40B active) with advanced post-training RL.

### Raw benchmarks found

Coding & Terminal:

- Terminal-Bench 2.1: **88.2%**
- Terminal-Bench 3.0: **28.3%** (open-source benchmark leader)
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

### Normalized scores (1–100)

- **Tool use: 76/100.** High Terminal-Bench 2.1 (88.2%) and Toolathlon (73.0%) indicate proficient autonomous tool invocation.
- **Reasoning: 81/100.** 62.5% on HLE w/ tools and an AA Intelligence Index of 60 confirm robust mathematical and analytical reasoning.
- **Context window: 82/100.** 1M-capable architecture, serving up to 204K on the standard free gateway.
- **Multimodal: 50/100.** Text-only input and output.
- **Coding: 82/100.** Leading open-weights coding metrics: TB 3.0 (28.3%), DeepSWE (66.9%), and FrontierSWE (78.1%).
- **Cost efficiency: 100/100.** Accessible entirely without per-token cost on the OpenCode Zen free tier.
- **Overall Score: 74/100.** Arithmetic mean of non-cost metrics: (76 + 81 + 82 + 50 + 82) / 5 = 74.2 → 74. An exceptional free coding and agentic model offering near-frontier performance for terminal tasks and software engineering.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Zhipu AI release data and independent open-source evaluations.
