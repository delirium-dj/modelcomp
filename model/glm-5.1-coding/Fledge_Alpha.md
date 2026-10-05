# GLM 5.1 Coding — findings by Fledge Alpha

- Source: Z.ai (`glm-5.1-coding`, GLM-5.1)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding (GLM-5.1)
- **Short description:** Z.ai's flagship open-weights MoE predecessor to GLM-5.2, positioned for agentic engineering and long-horizon autonomous coding; no Zen free ID.
- **Provider / access:** Z.ai API `glm-5.1`; OpenRouter, Fireworks, Vercel AI Gateway, Novita; NVIDIA-class endpoints.
- **Release / knowledge:** April 7, 2026; knowledge cutoff not published.
- **IDs:** `z-ai/glm-5.1`; `opencode/glm-5.1` scaffolded; no Zen Free ID.
- **Context window:** 200–205K native; 128K max output.
- **Modalities:** text in/out; reasoning effort; function/tool calling, structured outputs.
- **Pricing (as of 2026-10-05):** ~$1.05–1.40 in / $3.50–4.40 out per 1M depending on route.
- **Architecture:** 754B total / 40B active MoE, MIT license, sparse-attention lineage.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **71.8** (llmreference)
- τ-bench: no verified 5.1-specific row found

Reasoning / knowledge:

- GPQA ("Google-Proof Q&A"): **86.2** (llmreference)
- HLE: **31.0** (llmreference)
- MMLU-Pro: no verified 5.1-specific row found

Coding:

- SWE-bench Pro: **58.4** (llmreference)
- GLM-5.1 launch numbers per automation.ai lineage: SWE-bench Verified ~77.8 for GLM-5 base family; treat 5.1 Pro number as the verified row

Long context:

- 200K native; no MRCR/RULER numeric published.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 72/100.** MCP-Atlas 71.8 is a real row; no independent tau benchmarks for this checkpoint.
- **Reasoning: 83/100.** GPQA 86.2 is strong; HLE 31 caps it.
- **Context window: 86/100.** 200K native, 128K output — below the 1M cohort but solid.
- **Multimodal: 15/100.** Text-only.
- **Coding: 80/100.** SWE-bench Pro 58.4 was SOTA among open weights at launch; GLM-5.2 improved it to 62.1.
- **Cost efficiency: 70/100.** ~$1.05–1.40 in / $3.50–4.40 out is mid-tier; no free path.
- **Overall Score: 67/100.** Mean of five non-cost dims (72+83+86+15+80)/5 = 67.2 → 67; best fit: 2026-04 open-weights coding flagship, now superseded by GLM-5.2/5.3.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (llmreference GLM-5.1 vs 5.2, LLM Gateway, aistudio.quest); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
