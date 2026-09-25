# Llama 3.2 Vision Instruct — findings by Kimi K3

- Source: Meta / Llama 3.2 Vision Instruct (11B/90B) (`llama_3.2_vision_instruct`; HF `meta-llama/Llama-3.2-11B-Vision-Instruct`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (11B / 90B)
- **Short description:** Meta's September 2024 open multimodal models — instruction-tuned Llama 3.1 + vision adapter, text+image in → text out, 128K context. Once-competitive open VLM; by late 2026 it's a legacy baseline, far behind on every modern measure.
- **Provider / access:** open weights (Llama 3.2 Community License; EU restriction on multimodal weights); hosted broadly (HF, Ollama, vLLM, OCI, etc.).
- **Release / knowledge:** Released 2024-09-25; knowledge cutoff December 2023 (HF card).
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct`, `meta-llama/Llama-3.2-90B-Vision-Instruct` (no Zen Free ID verified).
- **Context window:** 128K tokens (HF card).
- **Modalities:** text+image in; text out; English-only for image+text (8 languages for text); no tool-calling focus; JSON via prompting/serving.
- **Pricing (as of 2026-09-24):** open weights → self-host; hosted rates vary.
- **Architecture:** Llama 3.1 backbone + cross-attention vision adapter; 11B (10.6B) / 90B (88.8B); Llama 3.2 Community License.

### Raw benchmarks found (official Meta model card, instruction-tuned, 0-shot; 11B / 90B)

Agent / tool use:

- No tool-use/agentic benchmarks published (pre-agentic era; card covers none).

Reasoning / knowledge (text):

- MMLU (CoT): **73.0 / 86.0** (HF card)
- GPQA: **32.8 / 46.7** (HF card)
- MATH (CoT): **51.9 / 68.0** (HF card)
- MGSM (CoT): **68.9 / 86.9** (HF card)
- HLE / LCR / CritPt / AA indices: no verified public score found (benchmarks postdate the model)

Coding:

- No public SWE-bench/LiveCodeBench/SciCode rows — no verified public score found.

Long context:

- 128K window by spec; no retrieval measurement (no MRCR/RULER/LCR row) — 2024-era.

Multimodal (official, 11B / 90B):

- MMMU (val, CoT): **50.7 / 60.3**; MMMU-Pro (test): **33.0 / 45.2** (HF card)
- ChartQA (CoT): **83.4 / 85.5**; AI2 Diagram: **91.1 / 92.3**; DocVQA: **88.4 / 90.1** ANLS; VQAv2: **75.2 / 78.1**; MathVista: **51.5 / 57.3** (HF card)

### Normalized scores (1–100) (scored against the current 2026 field, not 2024 peers)

- **Tool use: 25/100.** No tool/agentic benchmark culture in its release era; minimal function-calling competence by today's standard.
- **Reasoning: 40/100.** GPQA 32.8–46.7, MATH 51.9–68.0 — 2024-mid; HLE/CritPt absent. Capped hard by age.
- **Context window: 45/100.** 128K window, but no usable-retrieval evidence; half a tier below 2026 norms.
- **Multimodal: 52/100.** Still-legitimate vision stats for its size (ChartQA 85.5, DocVQA 90.1 at 90B); MMMU-Pro 45.2 caps it.
- **Coding: 30/100.** No coding benchmarks published; older Llama coding ability is modest.
- **Cost efficiency: 85/100.** 11B runs on a single GPU; free weights (custom Meta license with EU multimodal carve-out).
- **Overall Score: 38/100.** Mean of the five quality dims (25+40+45+52+30)/5 = 38.4 → 38. Best fit: edge/self-hosted image captioning and DocVQA where small + permissive beats powerful.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (official Meta HF model card incl. published benchmark tables, HF hub metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
