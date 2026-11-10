# GLM 5.2 — findings by Fledge Alpha

- Source: Z.ai (`glm-5.2`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Zhipu AI's flagship open-weights text MoE for long-horizon coding and agentic engineering, with a 1M-token context.
- **Provider / access:** Z.ai API `glm-5.2`; OpenRouter `z-ai/glm-5.2`; Tencent/Baidu/Novita/Alibaba/Bytedance via aggregators; NVIDIA NIM-class endpoints.
- **Release / knowledge:** June 13–16, 2026; knowledge cutoff not published.
- **IDs:** `z-ai/glm-5.2`, `zhipuai/glm-5`; no Zen Free ID verified.
- **Context window:** 1,048,576 tokens.
- **Modalities:** text in/out; reasoning with effort control; function/tool calling, structured outputs, web search.
- **Pricing (as of 2026-10-05):** $1.40 in / $4.40 out per 1M on Z.ai; cached input $0.26; some routes from $0.70/$2.04 (20% off).
- **Architecture:** 753B total / 40B active MoE, MIT-licensed open weights, DeepSeek-style sparse attention lineage from GLM-5.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **76.8** (llmreference)
- τ-bench (GLM-5 sibling): 82.1 (llmreference for GLM-5)
- DeepSWE v1.1 (GLM-5.2, pre-5.3): **46.2** (TechApple)
- Agents' Last Exam (5.2, pre-5.3): **23.8** (TechApple)

Reasoning / knowledge:

- GPQA ("Google-Proof Q&A"): **91.2** (llmreference)
- HLE: **40.5** (llmreference); automatio.ai lists HLE ~40
- MMLU: **94%**; MMLU-Pro: **86%** (automatio.ai)
- IFEval: **85%** (automatio.ai)

Coding:

- SWE-bench Pro: **62.1** (llmreference); automatio.ai SWE-Bench-style ~62
- DeepSWE v1.1 46.2 (see above)
- Terminal-Bench 3.0 was 4.6 for 5.2 (TechApple baseline), improved to 28.3 in 5.3

Long context:

- 1M-token context via DSA; no MRCR/RULER numeric published.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 77/100.** MCP-Atlas 76.8 and strong GLM-5-family τ-bench lineage; verified per-model tau numbers absent.
- **Reasoning: 86/100.** GPQA 91.2, MMLU-Pro 86, HLE 40.5 — a genuine frontier open-model row.
- **Context window: 97/100.** 1M native across all listed routes.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 78/100.** SWE-bench Pro 62.1 and DeepSWE 46.2 (pre-5.3); coding improved notably in GLM-5.3.
- **Cost efficiency: 68/100.** $1.40/$4.40 per 1M is mid-tier; cheaper routes exist but remain paid.
- **Overall Score: 71/100.** Mean of five non-cost dims (77+86+97+15+78)/5 = 70.6 → 71; best fit: open-weights long-context reasoning for engineering workflows, text-only.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (llmreference comparison pages, LLM Gateway, automatio.ai, AIStudio pricing, TechApple); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
