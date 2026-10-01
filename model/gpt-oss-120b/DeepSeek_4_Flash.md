# GPT OSS 120B — findings by DeepSeek 4 Flash

- Source: OpenAI/GPT OSS 120B
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT OSS 120B
- **Short description:** OpenAI's open-weights 120B MoE (2025) for local/self-hosted assistants; very cheap but well behind 2026 frontier models.
- **Provider / access:** open weights; OpenRouter (`openai/gpt-oss-120b`); OpenCode Zen (`opencode/gpt-oss-120b`); no Free ID.
- **Release / knowledge:** 2025 generation; knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-oss-120b`
- **Context window:** 131,072 (128K) — verified from OpenRouter and BenchLM.
- **Modalities:** text in/out only; tool calls yes.
- **Pricing (as of 2026-10-01):** $0.037 in / $0.17 out per 1M.
- **Architecture:** open-weights 120B MoE.

### Raw benchmarks found

Agent / tool use:

- Browsing suite **65.8%**; Gert Labs **29.61%**
- GDPval-AA **745 Elo** (AA normalized 4.8%); AA Agentic Index **6.2%**; APEX-Agents-AA **3.1%**
- Terminal-Bench / MCP Atlas / Tau3: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond **78.2%** (AA)
- HLE (AA): **19.6%**
- AA-LCR **52.0%**; CritPt **1.1%**; AA Index **11.6%**
- AA-Omniscience Index **−49.2%**; Accuracy / Hallucination Rate **21.8% / 90.8%**
- AA-IFBench **69.0%**

Coding:

- React Native Evals **71.6%**; AA Coding Index **30.4%**; AA-SciCode **34.0%**
- SWE-bench / LiveCodeBench: no verified public score found

Long context:

- AA-LCR 52.0%

Multimodal:

- text-only model

### Normalized scores (1–100)

- **Tool use: 42/100.** Browsing 65.8% is decent; GDPval 745, AA Agentic Index 6.2% and APEX 3.1% are weak.
- **Reasoning: 38/100.** GPQA 78.2% is mid; HLE 19.6%, AA Index 11.6% and an Omniscience Index of −49.2 are poor.
- **Context window: 62/100.** 128K with AA-LCR 52%.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 55/100.** React Native Evals 71.6% is good; Coding Index 30.4% and SciCode 34% are weak.
- **Cost efficiency: 98/100.** $0.037/$0.17 per 1M is among the cheapest.
- **Overall Score: 42/100.** Mean of (42 + 38 + 62 + 15 + 55) / 5 = 42.4 → 42. Best-fit: ultra-cheap local/self-hosted text assistant, not a frontier agent.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, OpenAI, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
