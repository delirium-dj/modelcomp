# GLM 4.6V Flash — findings by GLM 5.3 Flash

- Source: Z.ai (`zai-org/GLM-4.6V-Flash`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.6V-Flash (vendor style; the lightweight member of the GLM-4.6V series)
- **Short description:** Z.ai's 9B open-weight vision-language model for local deployment and low-latency multimodal work — native function calling, 128K context, strong OCR/chart grounding for its size. Beats Qwen3-VL-8B and GLM-4.1V-9B across almost all tested categories at launch.
- **Provider / access:** Open weights (Hugging Face / ModelScope, MIT); Z.ai Open Platform `zai/glm-4.6v-flash`; served on Z.ai chat. OpenCode Zen id `zhipuai/glm-4.6v-flash`.
- **Release / knowledge:** Released 2025-12-08. Knowledge cutoff not published.
- **IDs:** `zai/glm-4.6v-flash` (Z.ai platform); `zai-org/GLM-4.6V-Flash` (HF); `opencode/zhipuai/glm-4.6v-flash` (Zen).
- **Context window:** 131,072 (128K) in training/production (vendor blog + gateway tables); 16K max generation used in the card's own eval settings. **Meta correction:** this folder's curated meta says "1M tokens" and "text in" — both wrong per every vendor surface found; the real model is a vision-language model with a 128K window.
- **Modalities:** Image + text in; text out (image-text-to-text pipeline). Native function calling (first in the GLM-V series); video frames supported via SGLang serving.
- **Pricing (as of 2026-11-01):** **Free** on Z.ai ($0.00/$0.00 per 1M, gateway tables); the big sibling GLM-4.6V (106B) is $0.30/$0.90. Free MIT weights for self-host. **Meta correction:** the curated "$5/$25 per 1M paid" note matches no vendor surface found.
- **Architecture:** 9B dense VLM (GLM-4.6V series trained with verifiable-rewards RL, no KL/entropy losses); Apache/MIT open weights; vLLM-recommended decoding top_p 0.6, top_k 2, temp 0.8, rep 1.1.

### Raw benchmarks found

(all from the official HF model-index, added 2025-12-08 from the model card)

General VQA / vision:

- MMBench V1.1: **86.9** (CN: 85.9); MMStar: **74.7**; MUIRBENCH: **75.7**; BLINK (Val): **65.5**
- MMMU (Val): **71.1**; MMMU-Pro: **60.6**; VideoMMMU: **70.1**
- MathVista: **82.7**; AI2D: **89.2**; DynaMath: **43.7**; WeMath: **60.0**; ZeroBench (sub): **22.5**

Modal agentic (function-calling agents):

- Flame-React-Eval: **78.8**; WebVoyager: **71.8**; Webquest-SingleQA: **75.1**; Webquest-MultiQA: **53.4**
- Design2Code: **69.8**; AndroidWorld: **42.7**; OSWorld: **21.1**; MMBrowseComp: **7.1**

OCR / charts:

- OCRBench: **84.7**; OCR-Bench v2 (EN): **63.5** (CN: 59.5); ChartQAPro: **62.6**; ChartMuseum: **49.8**; CharXiv (Val-Reasoning): **59.6**

Long context / video / spatial grounding:

- MMLongBench-128K: **63.4**; MMLongBench-Doc: **53.0**; LVBench: **49.5**
- RefCOCO-avg (Val): **85.6**; Ref-L4-test: **87.7**; OmniSpatial: **50.6**; TreeBench: **45.7**

General-text (code, GPQA-class reasoning): no verified public score found — the vendor published only multimodal-board rows for this light SKU.

### Normalized scores (1–100)

- **Tool use: 52/100.** Real agentic rows exist (WebVoyager 71.8, Flame-React 78.8 as a web agent) but OSWorld 21.1, AndroidWorld 42.7 and MMBrowseComp 7.1 show a fragile desktop/browser agent; native function calling is the genuine differentiator at 9B.
- **Reasoning: 43/100.** In-domain multimodal reasoning is solid for the size (MathVista 82.7, MMMU 71.1) but DynaMath 43.7 and ZeroBench 22.5 mark a hard ceiling; no text-mode reasoning benchmark exists to score the general axis.
- **Context window: 48/100.** Verified 128K (not 1M as the meta claims) with usable document retrieval at depth (MMLongBench-128K 63.4, MMLB-Doc 53.0) but only 16K generation in eval settings.
- **Multimodal: 68/100.** The standout axis: MMBench 86.9, AI2D 89.2, OCRBench 84.7, RefCOCO 85.6 — near the top of the 9B class at launch, though grounding/detection (TreeBench 45.7) lags.
- **Coding: 46/100.** Design2Code 69.8 (frontend replication from screenshots) is verified; no general-code benchmark published — scored on the frontend-UI evidence only.
- **Cost efficiency: 99/100.** Free hosted lane on Z.ai plus free MIT weights — the 100 floor is attained only by models with both free lanes and this is effectively that.
- **Overall Score: 51/100.** Mean of the five quality dims (52+43+48+68+46)/5 = 51.4 → 51. Best fit: local/free multimodal understanding, OCR and screenshot-to-UI work at 9B cost — not an agentic or coding model.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (official Z.ai launch blog, Hugging Face model card + model-index, gateway pricing tables, VentureBeat coverage); scores are normalized 1–100 interpretations, not official vendor scores. Curated-meta discrepancies (context, modality, pricing) are flagged rather than silently adopted.
- Reference URLs:
  - [Z.ai blog — GLM-4.6V: Open Source Multimodal Models with Native Tool Use (2025-12-08)](https://z.ai/blog/glm-4.6v)
  - [Hugging Face — zai-org/GLM-4.6V-Flash model card + model-index (36 benchmark rows)](https://huggingface.co/zai-org/GLM-4.6V-Flash)
  - [Zhipu — GLM-4.6V official page (series overview, MIT license)](https://www.zhipuai.cn/en/glm46v)
  - [Z.ai docs — GLM-4.6V developer guide (128K context, function calling)](https://docs.z.ai/guides/vlm/glm-4.6v)
  - [Respan — GLM 4.6V Flash pricing/serving table ($0.00 free lane, 128K)](https://www.respan.ai/models/glm-4.6v-flash)
  - [VentureBeat — GLM-4.6V launch coverage (pricing, MIT, RLVR training)](https://venturebeat.com/technology/z-ai-debuts-open-source-glm-4-6v-a-native-tool-calling-vision-model-for)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
