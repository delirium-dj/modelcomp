# GLM-4.6V Flash — findings by Inkling 2 Small

- Source: Z.AI (`glm-4.6v-flash`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.6V Flash
- **Short description:** Z.AI's lightweight vision-language model in the GLM-V family — 9B params, MIT-licensed, optimized for local deployment and low-latency multimodal agents with native function calling (vision-driven tool use). Released 2025-12-07.
- **Provider / access:** Open weights on Hugging Face (`zai-org/GLM-4.6V-Flash`); Z.ai Open Platform API (`docs.z.ai/guides/vlm/glm-4.6v`); chat.z.ai demo; vLLM ≥0.12 / SGLang ≥0.5.6.
- **Release / knowledge:** 2025-12-07; arXiv:2507.01006 (GLM-4.1V-Thinking / 4.5V paper); knowledge cutoff not stated.
- **IDs:** `zai-org/GLM-4.6V-Flash` (HF)
- **Context window:** 128K tokens (trained at 128K; up to 128K multi-document input); max output 16K in eval settings.
- **Modalities:** image + text in (interleaved); text out; native multimodal function calling; vision reasoning yes; video input (≤60s per settings) supported via SGLang path.
- **Pricing (as of 2026-11-10):** MIT open weights — self-host free; hosted API pricing not verified (Z.ai Open Platform page unreachable at research time).
- **Architecture:** glm4v (dense 9B); siblings: GLM-4.6V (106B MoE, glm4v_moe).

### Raw benchmarks found

Agent / tool use:

- Native multimodal function calling (vendor feature claim; no MCP/τ-Bench rows published for Flash)
- ExtractBench (LlamaIndex): **45.19** (HF eval results, extract one-shot structured output, 64K output budget)

Reasoning / knowledge:

- no verified public GPQA/HLE/Index rows for Flash (bench tables published as images for the family; no text-extracted numbers for the 9B SKU)
- Longshot-bench (Video, MBZUAI): **33.82** overall (core perception 26.56, reasoning 38.53)

Coding:

- no verified public coding score found

Long context:

- 128K tokens; no verified public long-context retrieval score found (family targets long-document understanding)

Multimodal:

- ExtractBench: **45.19**; vendor family claim: SoTA visual understanding among comparable scales (unquantified for Flash)
- MMMU-class family rows not published for the 9B SKU in text form

### Normalized scores (1–100)

- **Tool use: 58/100.** Native vision-driven function calling is the headline (images as tool inputs, visual outputs interpreted) — real capability, but zero τ-Bench/MCP/SWE-style agentic rows published for Flash; scored on feature evidence, not leaderboard rows.
- **Reasoning: 48/100.** Provisional — no public GPQA/HLE rows for the 9B SKU; family 4.5V/4.1V-Thinking RL background implies mid-tier reasoning; Longshot reasoning split 38.53 corroborates "limited".
- **Context window: 64/100.** 128K tokens with native multi-document processing; retrieval unmeasured publicly.
- **Multimodal: 63/100.** The product focus: interleaved image-text, vision tool use, video understanding; verified ExtractBench 45.19 (structured extraction), Longshot video 33.82 — good, not SoTA for the size.
- **Coding: 48/100.** Provisional — no verified public coding rows; frontend-replication capability is claimed for the family, not benchmarked for Flash.
- **Cost efficiency: 92/100.** MIT open weights, 9B dense — extremely cheap local multimodal inference.
- **Overall Score: 56/100.** (58 + 48 + 64 + 63 + 48) / 5 = 56.2 → 56. Best fit: local low-latency multimodal agents (document/screen understanding + tool use) on commodity GPUs; verify on your task.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (HF model card + eval results, Z.ai blog links, arXiv:2507.01006); scores are normalized 1–100 interpretations, not official vendor scores. Sparse verified coverage — most rows provisional.
- Reference URLs:
  - [zai-org/GLM-4.6V-Flash — Hugging Face model card](https://huggingface.co/zai-org/GLM-4.6V-Flash)
  - [GLM-4.6V blog — Z.ai](https://z.ai/blog/glm-4.6v)
  - [GLM-4.1V-Thinking / GLM-4.5V / GLM-4.6V paper (arXiv:2507.01006)](https://huggingface.co/papers/2507.01006)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
