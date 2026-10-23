# GLM 4.6V Flash — findings by Qwen 3.8 Flash

- Source: Z.ai / Zhipu (`zai-org/GLM-4.6V-Flash`; curated id `opencode/glm-4.6v-flash`), cross-checked against the GLM-V paper (arXiv 2507.01006), the HF model card, Z.ai's GLM-4.6V launch blog, LM Studio's model page, and r/LocalLLaMA / community comparisons
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6V Flash
- **Short description:** Z.ai's **small, free, open-weights member of the GLM-4.6V multimodal family** — a **dense 9B vision-language model** (LLM backbone `GLM-4-9B-0414`) built for **local / low-latency visual agents**. Where the family flagship `GLM-4.6V` is a 106B-A12B MoE, **Flash distills the same visual-agent skillset (native visual *function calling*, GUI grounding, OCR/chart reading, video & file input) into a 9B that runs free on Z.ai's Flash tier.** Z.ai claims SoTA visual understanding "among models of comparable scale," and community testing puts it **ahead of Qwen3-VL-8B overall**.
- **Provider / access:** open weights (HF `zai-org/GLM-4.6V-Flash`, **MIT**, free to self-host); **free Flash API tier on Z.ai** ($0 in/out/cached); runs in LM Studio / llama.cpp locally.
- **Release / knowledge:** **2025-12-08** (GLM-4.6V family launch; Flash is its 9B sibling).
- **IDs:** `GLM-4.6V-Flash` (9B); flagship `GLM-4.6V` (106B-A12B); lineage `GLM-4.5V`, `GLM-4.1V-9B-Thinking`; successor multimodal `GLM-5.3-Flash` / `GLM-5V-Turbo`.
- **Context window:** **128,000 total** (scaled to 128K in training — the family's context ceiling, well below the 1M tier).
- **Modalities:** **text + image + video + file in**, text out; reasoning/thinking yes; **native visual function calling + visual grounding (GUI/natural-image localization)**.
- **Pricing (as of 2026-10-23):** **free** on the Z.ai Flash tier ($0 input/output/cached); **MIT open weights → free self-host**.
- **Architecture:** dense 9B VLM, AIMv2-Huge vision encoder + 3D-conv adaptation (Qwen2-VL-style), RL post-training with domain verifiers (grounding IoU, GUI action, STEM/math verifiers).

### Raw benchmarks found

> **Provenance caveat (decisive here):** the GLM-V paper's full benchmark table (Table 2) reports the **9B *GLM-4.1V* column and the 106B-A12B *GLM-4.6V* flagship** — **not a dedicated `GLM-4.6V-Flash` 9B row**. Z.ai's own "SoTA among comparable scale" and the "beats Qwen3-VL-8B overall" claim are **vendor/community**, and third-party trackers only carry the *text* GLM-4.6 (BenchAlign #142/227, 39.97, "Estimated"). So the 9B-Flash absolutes below are **size-class context from the family lineage, explicitly not point-measured for this exact checkpoint** — capability dims are discounted accordingly.

Visual / multimodal (family lineage, for scale context):

- 9B-class GLM-V figures: **MMBench V1.1 ~85.8**, **MMMU ~68.0**, **MathVista ~80.7**, **OCRBench ~84.2**, **ChartQAPro ~59.5**, **RefCOCO-avg (grounding) ~85.3**, **CV-Bench ~85.0**, **OmniSpatial ~47.7** — the flagship GLM-4.6V (106B-A12B) posts higher; Flash tracks the 9B tier (vendor claim: best at its scale).

Reasoning / coding / agents (feature-level, not benchmarked for Flash):

- Native **visual function calling** (rigorous structured tool-output protocol), **GUI agents** (action+IoU grounding), **video** understanding, and **long-document/OCR** are design features with reward-trained grounding — **no τ²/SWE-bench absolute published for the 9B Flash**.

### Normalized scores (1–100)

- **Tool use: 72/100.** A genuine standout for a 9B: **native visual function calling + GUI grounding** are first-class, RL-trained features — real agentic tool capability, not an afterthought; docked only for the absence of a τ²-style reproduction on the Flash checkpoint.
- **Reasoning: 66/100.** Solid visual/math reasoning for its size (lineage MMMU ~68 / MathVista ~80), but it's a 9B dense model with modest text-reasoning absolutes and no point-measured Flash numbers — mid, discounted.
- **Context window: 58/100.** **128K** is respectable for a local VLM but the clearest limitation versus the 1M-class field; no retrieval proof; a real ceiling on long-document/video sessions.
- **Multimodal: 82/100.** Its crown: **text+image+video+file in**, strong grounding/OCR/chart reading, and a vendor "SoTA-at-scale" visual story corroborated by community "beats Qwen3-VL-8B" — the broadest and strongest dimension, lightly discounted for vendor-sourced absolutes.
- **Coding: 58/100.** "UI-to-code / visual coding" is a named use case and grounding is code-adjacent, but this is not a competitive code model (no LiveCodeBench/SWE for the 9B); low-mid.
- **Cost efficiency: 100/100.** Literally the best achievable: a **$0 free Flash API tier plus MIT open weights for free self-host** — zero-cost multimodal agenting is its defining economic advantage.
- **Overall Score: 67.2/100.** Half-up mean of the five quality dims (72+66+58+82+58)/5 = 67.2. Best fit: **free / local, latency-sensitive visual agents** — GUI automation, grounding, OCR/chart/document and video understanding — where an MIT 9B that calls tools from vision and costs nothing is the whole point. Held below larger multimodal flagships by its **9B ceiling on reasoning/coding and the 128K context limit**, and because its headline visual numbers are **vendor-claimed at-scale rather than independently point-measured** on the Flash checkpoint.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **GLM-V paper (arXiv 2507.01006)** architecture + Table 2 (confirming `GLM-4.6V-Flash` = dense 9B on GLM-4-9B-0414 + AIMv2-Huge encoder, and that the published benchmark columns are the 9B *GLM-4.1V* and the 106B-A12B *GLM-4.6V*, not a Flash-specific row), the **HF `zai-org/GLM-4.6V-Flash`** card (MIT, 128K, "SoTA visual understanding among models of similar scale"), **Z.ai GLM-4.6V blog** (visual function calling, grounding, video, tool-output protocol), **LM Studio** (9B, 128K, local/low-latency), and community/X comparisons ("GLM-4.6V-Flash 9B beats Qwen3-VL-8B overall"). BenchAlign's #142 / 39.97 "Estimated" is the *text* GLM-4.6 and was **not** used for this VLM. Curated `meta.json` supplies MIT/free/128K and the 4-input modality list. Scores are normalized 1–100 interpretations; because **no independent 9B-Flash benchmark row exists**, multimodal/reasoning/coding are **anchored on the family size-class lineage and discounted as vendor-claimed**, while the free-MIT cost and native visual-tool-use features score on solid evidence.
- Revisit trigger: an independent (Artificial Analysis / OpenBMB / third-party) benchmark row published specifically for `GLM-4.6V-Flash` (MMMU, MathVista, OCRBench, a visual τ²/agent eval), converting the lineage-inferred visual scores into point-exact figures.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
