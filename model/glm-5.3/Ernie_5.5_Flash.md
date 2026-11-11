# GLM-5.3 — findings by Ernie 5.5 Flash

- Source: Z.ai/GLM-5.3 (`glm-5.3`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Z.ai's flagship GLM model (released 2026-08-14) for long-horizon coding, agents and complex project delivery — the full-size sibling of GLM-5.3-Flash, with open weights.
- **Provider / access:** Z.ai API (`glm-5.3`), OpenRouter (`z-ai/glm-5.3`), OpenCode Go, NVIDIA NIM (free), Mistral router (`mistral/zai-glm-5-3`), Empirio Labs, AgentRouter, plus ~90 routes. Open weights.
- **Release / knowledge:** 2026-08-14 (models.dev); knowledge cutoff not published.
- **IDs:** `glm-5.3`, `z-ai/glm-5.3`, `zai-org/GLM-5.3`, `opencode-go/glm-5.3`.
- **Context window:** 1,048,576 tokens (1M on some routes); max output 131,072.
- **Modalities:** text in / text out only (models.dev); reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.40 / $4.40 per 1M input/output; cache read $0.14. The NVIDIA NIM route is free (rate-limited).
- **Architecture:** open-weight MoE (Z.ai; undisclosed size).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (Vals AI run **71.5%**); terminalBench3: **28.3%**
- FrontierSWE: **78.1%**; NL2Repo: **58%**; OpenHarmony Bench v1.0: **60.8%**
- ProgramBench: **19.0%** (weak); sweMarathon: **42.5%**; PostTrain Bench: **39.8%**; Bug Hunt Bench: **19.0 fixes**

Reasoning / knowledge:

- HLE / GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for GLM-5.3
- BenchLM ranks Agentic as its strongest category (#14)
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench (Vals AI): **95.4%**; LiveCodeBench (Vals AI): **80.5%**; VulcanBench v3: **78.3%**
- DeepSWE: **66.9%**; CursorBench 4.0: **42.6%**; FrontierSWE v2: **30.2%**
- FrontierSWE: **78.1%**; NL2Repo: **58%**

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 88.2% is strong and FrontierSWE 78.1% good, but terminalBench3 28.3%, ProgramBench 19.0% and sweMarathon 42.5% show it is not a modern long-horizon agent.
- **Reasoning: 70/100.** No public reasoning benchmark exists for GLM-5.3; the score is a conservative inference from its coding results — low confidence.
- **Context window: 100/100.** 1,048,576 tokens with 131,072 max output.
- **Multimodal: 15/100.** Text-only (models.dev lists text in / text out) — unlike GLM-5.3-Flash, which is natively multimodal.
- **Coding: 85/100.** SWE-bench (Vals) 95.4% and LiveCodeBench 80.5% are excellent, DeepSWE 66.9% decent; FrontierSWE v2 30.2% and ProgramBench 19.0% are weak.
- **Cost efficiency: 88/100.** $1.40/$4.40 per 1M with open weights and a free NIM route.
- **Overall Score: 69.6/100.** Best fit for self-hosted text coding at 1M context; the text-only modality drags the Overall far below GLM-5.3-Flash, which is the better default for most work.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Z.ai GLM-5.3 docs, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GLM-5.3 — Z.ai / Hugging Face](https://huggingface.co/zai-org/GLM-5.3)
  - [GLM-5.3 benchmarks & sources — BenchLM](https://benchlm.ai/models/glm-5-3)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GLM_5.3_v2.md`, using the same headings.