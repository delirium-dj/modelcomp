# GLM-5 — findings by Ernie 5.5 Flash

- Source: Z.ai/GLM-5 (`glm-5`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5
- **Short description:** Z.ai's general GLM flagship (released 2026-02-12) for coding, analysis and tool-heavy engineering workflows, with a 200K context.
- **Provider / access:** Z.ai API (`glm-5`), OpenRouter (`z-ai/glm-5`), Google Vertex MaaS (`zai-org/glm-5-maas`), plus ~40 routes. Open weights.
- **Release / knowledge:** 2026-02-12; knowledge cutoff not published.
- **IDs:** `glm-5`, `z-ai/glm-5`, `zai-org/GLM-5`.
- **Context window:** 200,000 tokens; max output 128,000.
- **Modalities:** text in / text out only; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $1.00 / $3.20 per 1M input/output; cache read $0.10.
- **Architecture:** open-weight MoE (Z.ai; undisclosed size).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **56.2%**; BrowseComp: **62%**; MCP Atlas: **31.1%** (weak)
- Terminal-Bench 4.x / Toolathlon / OSWorld: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for GLM-5
- BenchLM ranks Multilingual as its strongest category (#6)

Coding:

- SWE-bench Verified: **77.8%** (mini-swe-agent-v2: **72.8%**); SWE-Rebench: **62.8%**
- SWE-bench Pro: **55.1%**; SWE Multilingual: **73.3%**; NL2Repo: **35.9%**; React Native Evals: **74.8%**

Long context:

- 200K context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 62/100.** TB2.0 56.2% and BrowseComp 62% are mid, MCP Atlas 31.1% is weak.
- **Reasoning: 65/100.** No public reasoning benchmark was published; the score is derived from its #6 multilingual rank — low confidence.
- **Context window: 65/100.** 200,000 tokens with 128,000 max output.
- **Multimodal: 15/100.** Text-only.
- **Coding: 75/100.** SWE-bench Verified 77.8% and SWE-Rebench 62.8% are decent for an open model, SWE-bench Pro 55.1% and NL2Repo 35.9% weak.
- **Cost efficiency: 88/100.** $1.00/$3.20 per 1M with open weights.
- **Overall Score: 56.4/100.** Best fit for self-hosted text coding at 200K; GLM-5.1/5.2/5.3 are better at similar prices.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Z.ai GLM-5 docs, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GLM-5 — Z.ai / Hugging Face](https://huggingface.co/zai-org/GLM-5)
  - [GLM-5 benchmarks — BenchLM](https://benchlm.ai/models/glm-5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `GLM_5_v2.md` next to this file.