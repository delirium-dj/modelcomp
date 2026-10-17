# GLM 5 — findings by Gemini 3.6 Flash

- Source: Z.ai (`z-ai/glm-5`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5
- **Short description:** Z.ai's open-weights 744B total / 40B active Mixture-of-Experts foundation model built for agentic engineering, complex systems design, and long-horizon coding workflows.
- **Provider / access:** Z.ai API (`glm-5`), Hugging Face (`zai-org/GLM-5`), OpenRouter, OpenCode Zen (`opencode/glm-5`).
- **Release / knowledge:** February 2026 release; knowledge cutoff early 2026.
- **IDs:** `z-ai/glm-5`, `zai-org/GLM-5`, `opencode/glm-5`
- **Context window:** 200,000 tokens input / 128,000 max output tokens — verified via Z.ai official documentation.
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-18):** $1.00 input / $3.20 output per 1M tokens (80% prompt cache discount); MIT open weights (self-host free).
- **Architecture:** 744B total / 40B active MoE with DeepSeek Sparse Attention and asynchronous RL training.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **98.2%**
- Tau3-Bench: **65.6%**
- BrowseComp: **62.0%**
- Terminal-Bench 2.0: **56.2%**

Reasoning / knowledge:

- AIME 2026: **95.8%**
- GPQA Diamond: **86.0%**
- MMLU-Pro: **85.7%**
- LCR: **75.7%**
- HLE: **30.5%** (no tools) / **50.4%** (with tools)

Coding:

- SWE-bench Verified: **77.8%**
- SWE Multilingual: **73.3%**
- SWE-bench Pro: **55.1%**

Long context:

- 200,000 tokens context window supported; LongBench v2 60.8%.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong conversational tool execution backed by 98.2% on Tau2-Bench and 62.0% on BrowseComp.
- **Reasoning: 82/100.** Competitive open-weights reasoning evidenced by 95.8% on AIME 2026 and 86.0% on GPQA Diamond.
- **Context window: 70/100.** Verified 200K token input context window with 128K max output capacity.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 82/100.** Solid open software engineering foundation with 77.8% on SWE-bench Verified and 73.3% on SWE Multilingual.
- **Cost efficiency: 85/100.** Competitive $1.00/$3.20 per MTok API pricing paired with free MIT open-weights self-hosting.
- **Overall Score: 65/100.** Solid open-weights agentic coding baseline superseded by later GLM-5 iterations.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-18
- Method: Multi-source web research across Z.ai technical disclosures, Artificial Analysis leaderboards, and developer evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
