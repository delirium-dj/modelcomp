# GLM 4.6 Flash — findings by MiMo 2.6 Flash

- Source: Zhipu AI / Z.ai `glm-4.6-flash` — **identity resolved to `glm-4.6v-flash` (GLM-4.6V-Flash, 9B)**
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6 Flash (`glm-4.6v-flash`) — the **free, lightweight 9B vision-language tier of the GLM-4.6 generation**. **Identity resolution:** no text-only "GLM-4.6-Flash" exists anywhere (Zhipu's text flagship of that generation is the 355B-A32B GLM-4.6, which has no Flash sibling; the Zhipu free-tier Flash line runs GLM-4-Flash → GLM-4.7-Flash → GLM-4.6V-Flash → GLM-5.3-Flash). The only "GLM-4.6 + Flash" SKU in any official catalog is the vision model GLM-4.6V-Flash, so this slug is anchored on it — flagged for the project owner in case the roster intended a different identity.
- **Short description:** Released alongside GLM-4.6V (106B) on 2025-12-08 as the low-latency/local-deployment member of the series; official claim: "SOTA visual understanding accuracy at its parameter scale" and **the first vision model to natively integrate Function Calling into the architecture**,打通「视觉感知 → 可执行行动」 (perception-to-action pipeline for multimodal agents).
- **Provider / access:** open weights (`zai-org/GLM-4.6V-Flash` on Hugging Face, GitHub `zai-org/GLM-V`); **free API tier** on Zhipu BigModel (`glm-4.6v-flash`, docs.bigmodel.cn "免费模型" section); Ollama, LM Studio, Unsloth GGUFs (with chat-template fixes, `--jinja` for llama.cpp), Docker Model Runner; ZenMux lists it as the free version vs the paid GLM-4.6V-FlashX.
- **Release / knowledge:** **2025-12-08** (HF model-index commit, r/LocalLLaMA launch thread, VentureBeat coverage all same-day); knowledge cutoff not published.
- **IDs:** `glm-4.6v-flash` (BigModel/Z.ai API), `zai-org/GLM-4.6V-Flash` (HF).
- **Context window:** **128K** (training-time window raised to 128K; HF, LM Studio, Z.ai docs — all agree). Max output not separately published.
- **Modalities:** image + document/screenshot + **video** input (docs list long-context document and video understanding as a scenario), text out; hybrid thinking toggle (on/off); native vision-based function calling; image+tool-result re-reading in the agent loop (docs.bigmodel.cn).
- **Pricing (as of 2026-10-27):** **free** on the BigModel API tier (its defining property — Zhipu's permanent free model slot, like GLM-4.7-Flash); open weights = zero-per-token self-host; 9B runs locally on consumer GPUs (Ollama ~6–8 GB).
- **Architecture:** 9B dense VLM in the GLM-V family (paper lineage: GLM-4.1V-Thinking / GLM-4.5V scalable-RL multimodal reasoning); exact layer/param breakdown not published.

### Raw benchmarks found

(official HF model-index commit for GLM-4.6V-Flash):

- MMBench V1.1: **86.9**; MMBench V1.1 (CN): **85.9**
- MMStar: **74.7**
- OCRBench: **84.7**; OCR-Bench v2 (EN): **63.5** (CN score in table, not captured)
- BLINK: evaluated (figure in the same commit, not captured in this pass)

Agent / tool use:

- **No Terminal-Bench / Tau / GDPval / Toolathlon figure published for the 9B Flash.** The architecture-level claim is the meaningful one: first vision model with native function calling, marketed for visual shopping agents, frontend replication, and image-mixed content pipelines (docs.bigmodel.cn scenario gallery; VentureBeat).

Reasoning / knowledge:

- No GPQA/MMLU-Pro figure cleanly attributable to the Flash tier in this pass (benchmark tables in aggregator comparisons mix the 106B flagship's numbers); the official eval set for the series covers 20+ multimodal benchmarks incl. MathVista (Z.ai docs) — MathVista figure not isolated for the 9B.

Coding:

- No coding benchmark published for the Flash tier; "frontend replication and multi-round visual development" is a documented use scenario (docs.bigmodel.cn).

Long context:

- 128K window; no MRCR/RULER retrieval figure found.

Known-issues disclosure (GLM-V GitHub model card): the series documentation openly lists inherited limitations (repetitive thinking output, formatting errors were the 4.1V-era complaints; 4.6V "mitigated" but "still has some limitations... which we will fix") — unusually transparent vendor caveats.

### Normalized scores (1–100)

- **Tool use: 62/100.** The native vision function-calling design is a genuine architectural first (perception→action without text detours), and Zhipu markets real agent scenarios — but zero agentic benchmarks exist for the 9B tier, so the score rests on architecture and positioning, not measurements.
- **Reasoning: 58/100.** MMStar 74.7 and hybrid thinking are solid-for-9B, and the family's scalable-RL lineage is real; no general reasoning benchmark (GPQA/MMLU-Pro) is published for the Flash tier, and the composite class is small-model.
- **Context window: 62/100.** 128K is a mid-tier window in late 2026 (below the 256K–1M mainstream of this corpus), with no retrieval measurement published.
- **Multimodal: 80/100.** MMBench 86.9, OCRBench 84.7, MMStar 74.7 with video input and SOTA-at-scale official claims — genuinely strong open 9B vision; held below 90 because it's a 9B (frontier VLMs score far higher on MMMU-class evals), output is text-only, and part of the official table (MathVista, BLINK) wasn't captured in this pass.
- **Coding: 48/100.** No coding benchmark of any kind for this tier; visual frontend-replication scenarios are demos, not measurements — evidence floor.
- **Cost efficiency: 96/100.** Permanently free API tier + Apache-lineage open weights (Z.ai's GLM series is permissively licensed) + 9B local footprint (Ollama/GGUF/Unsloth day-one support) — among the cheapest usable multimodal models in existence; docked only for the compute cost of self-hosting video-length contexts.
- **Overall Score: 62/100.** (62 + 58 + 62 + 80 + 48) / 5 = 62.0 → 62 — best fit: free high-volume multimodal pipelines (OCR, document understanding, screenshot-driven agents) where per-token cost is the binding constraint; not the pick for hard reasoning, long-context retrieval, or coding.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-27
- Method: public internet research — official sources first (Zhipu/Z.ai docs.bigmodel.cn GLM-4.6V-Flash page, docs.z.ai GLM-4.6V overview, zai-org GLM-V GitHub + HF model-index commit with the benchmark table, zhipuai.cn release post), then independent sources (VentureBeat launch coverage, r/LocalLLaMA launch thread, LM Studio/Ollama catalogs, Unsloth GGUF, ZenMux provider page, debuggercafe hands-on, LLMLearner, plainenglish review); the slug→GLM-4.6V-Flash identity resolution is documented above and flagged for the owner. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
