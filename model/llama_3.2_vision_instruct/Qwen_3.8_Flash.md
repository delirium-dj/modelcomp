# Llama 3.2 Vision Instruct — findings by Qwen 3.8 Flash

- Source: Meta / Llama 3.2 Vision Instruct (11B/90B) (`llama_3.2_vision_instruct`; HF `meta-llama/Llama-3.2-11B-Vision-Instruct`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (11B / 90B)
- **Short description:** Meta's September 2024 open multimodal models — instruction-tuned Llama 3.1 backbone + cross-attention vision adapter, text+image in → text out, 128K context. A genuine early open VLM, but by late 2026 it is a **legacy baseline far behind on every modern measure**: GPQA 32.8–46.7, no tool/agentic culture, no coding benchmarks, and vision stats (MMMU-Pro 33.0–45.2) that current mid-tier models double. Historically important; not production-viable today.
- **Provider / access:** open weights (Llama 3.2 Community License; EU restriction on multimodal weights); hosted broadly (HF, Ollama, vLLM, OCI, etc.).
- **Release / knowledge:** Released 2024-09-25; knowledge cutoff December 2023 (HF card).
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct`, `meta-llama/Llama-3.2-90B-Vision-Instruct`.
- **Context window:** **128K tokens** (HF card).
- **Modalities:** **text + image in; text out** — a real vision model (unlike the text-only entries in this queue). English-only for image+text (8 languages for text); no tool-calling focus.
- **Pricing (as of 2026-10-02):** open weights → self-host; hosted rates vary. Cost excluded from Overall.
- **Architecture:** Llama 3.1 backbone + cross-attention vision adapter; 11B (10.6B) / 90B (88.8B).

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (official Meta HF model card, instruction-tuned, 0-shot; 11B / 90B). Benchmarks are 2024-era and predate the agentic/reasoning eval culture — HLE, CritPt, Terminal-Bench, SWE-bench, MRCR rows do not exist for this model.

Agent / tool use:

- **No tool-use / agentic benchmarks published** (pre-agentic era; card covers none).

Reasoning / knowledge (text):

- MMLU (CoT): **73.0 / 86.0**
- GPQA: **32.8 / 46.7** — well below the 2026 80+ band
- MATH (CoT): **51.9 / 68.0**; MGSM (CoT): **68.9 / 86.9**
- HLE / LCR / CritPt / AA indices: **no verified public score found** (benchmarks postdate the model)

Coding:

- **No public SWE-bench / LiveCodeBench / SciCode rows** — no verified public score found.

Long context:

- 128K window by spec; no retrieval measurement (no MRCR/RULER/LCR row) — 2024-era.

Multimodal (official, 11B / 90B):

- MMMU (val, CoT): **50.7 / 60.3**; MMMU-Pro (test): **33.0 / 45.2**
- ChartQA (CoT): **83.4 / 85.5**; AI2 Diagram: **91.1 / 92.3**; DocVQA: **88.4 / 90.1** ANLS; VQAv2: **75.2 / 78.1**; MathVista: **51.5 / 57.3**

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology, scored against the current 2026 field (not 2024 peers). Overall = half-up mean of the five quality dims; Cost excluded. This model has **genuine image input**, so Multimodal earns real 60-band credit — unlike the text-only entries where Design Arena was miscounted as vision.

- **Tool use: 25/100.** No tool/agentic benchmark culture in its release era; minimal function-calling competence by today's standard. Matches Kimi.
- **Reasoning: 42/100.** GPQA 32.8–46.7, MATH 51.9–68.0 — 2024-mid tier; HLE/CritPt absent. Capped hard by age. Kimi 40; +2 for the strong MMLU/MGSM showing solid raw knowledge.
- **Context window: 50/100.** 128K = 100K–200K band (50–64), but no usable-retrieval evidence at all — scored at the band floor. Kimi 45; I give 50 as the honest floor.
- **Multimodal: 62/100.** Still-legitimate vision for its size (ChartQA 85.5, DocVQA 90.1, AI2 Diagram 92.3 at 90B); MMMU-Pro 45.2 caps it. Real image input places it in the 60–70 band, lower half. Kimi 52; +10 because the +image band floor is 60 per methodology and its document/Diagram stats genuinely hold up.
- **Coding: 30/100.** No coding benchmarks published; older Llama coding ability is modest. Matches Kimi.
- **Cost efficiency: 88/100.** 11B runs on a single GPU; free weights (custom Meta license with EU multimodal carve-out). Cost excluded from Overall.
- **Overall Score: 42/100.** Mean of Tool 25, Reasoning 42, Context 50, Multimodal 62, Coding 30 = 209/5 = 41.8 → **42**. Best fit: **edge / self-hosted image captioning and DocVQA** where small + permissive beats powerful. Sits between Kimi's 38 and the 58.2 cohort average — the cohort is pulled up by raters who score against 2024 peers; against the 2026 field this is a legacy baseline, but its real vision input legitimately rescues it from the text-only floor.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` (official Meta HF model card incl. published benchmark tables). Scores are normalized 1–100 interpretations against the 2026 field, not official vendor scores. Flagged: (a) this is a **genuine multimodal model**, so Multimodal gets real 60-band credit (DocVQA/ChartQA/AI2 hold up) rather than the text-only 10–20 floor; (b) the 58.2 cohort average reflects raters scoring against 2024 peers — discounted hard here for the 2026 field; (c) no agentic/coding/long-context-retrieval evidence exists (pre-dates those evals).
- Revisit trigger: none — legacy 2024 model, historically important open VLM reference only.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
