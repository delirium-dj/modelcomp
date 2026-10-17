# MiMo V2.5 Free — findings by Nemotron 3.5 Super VL 120B A12B

- Source: XiaomiMiMo/MiMo-V2.5 (Hugging Face), Xiaomi MiMo Open Platform API `mimo-v2.5`, accessed via OpenCode Zen free tier
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free (Xiaomi MiMo-V2.5; free access tier on OpenCode Zen)
- **Short description:** Xiaomi's open-weights multimodal MoE model (310B total / 15B active per token) with 1M context and native text+image+video+audio input; agentic coding focus; Video-MME 87.7% via free Zen tier; succeeded by MiMo-V2.6 series.
- **Provider / access:** OpenCode Zen free tier (`opencode/mimo-v2-5-free`, $0 in/out, capped); Xiaomi MiMo Open Platform API (`mimo-v2.5`); Hugging Face checkpoint `XiaomiMiMo/MiMo-V2.5`. Pro sibling is `MiMo-V2.5-Pro` (1.02T/42B, text-only).
- **Release / knowledge:** MiMo-V2.5 series open-sourced April 2026 (Lixx Blog, 2026-04-28); model card last modified 2026-07-09 (HF).
- **IDs:** `XiaomiMiMo/MiMo-V2.5` (HF checkpoint), `mimo-v2.5` (Xiaomi API), `opencode/mimo-v2-5-free` (OpenCode Zen route).
- **Context window:** 1,048,576 tokens (1M) native (Lixx Blog + HF model card); Zen per-model window not published.
- **Modalities:** Text, image, video, and audio in; text out (fully multimodal per Lixx Blog — carries 729M ViT + 261M Audio Transformer); reasoning yes; tool calls supported; JSON mode not explicitly advertised.
- **Pricing (as of 2026-10-17):** Free on OpenCode Zen ($0 in/out, capped tier); paid fallback ~$0.14/$0.28 per 1M (per meta.json, unverified as Xiaomi's list price). Open weights license (MIT).
- **Architecture:** MoE mixture-of-experts; 310B total / 15B active per token; 48 layers (1 dense + 47 MoE); 256 routed experts per MoE layer, 8 experts per token; 4096 hidden dim; Hybrid Attention (sliding window + global); 3-layer MTP speculative decoding; 729M ViT vision encoder + 261M Audio Transformer for multimodal input.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **78.3% estimated ±6.9 pp** (benchgap, MiMo-V2.5, medium confidence)
- SWE-bench Verified: **79.0% estimated ±3.0 pp** (benchgap, high confidence)
- SWE-bench Pro: **56.1% measured** (HF model card eval results; benchgap also lists as measured)
- LiveCodeBench v6: **86.5% estimated ±2.4 pp** (benchgap, low confidence)
- BrowseComp: **81.6% estimated ±6.0 pp** (benchgap, medium confidence)
- OSWorld-Verified: **70.4% estimated ±3.8 pp** (benchgap, medium confidence)
- CyberGym: **41.1% estimated ±10.0 pp** (benchgap, low confidence)

Reasoning / knowledge:
- GPQA Diamond: **85.8% estimated ±1.7 pp** (benchgap, medium confidence) — CONFLICTS with Lixx/Xiaomi HF card figure of 66.7%
- HLE: **32.9% estimated ±9.4 pp** (benchgap, low confidence); AA-HLE **24.0% estimated**
- ARC-Challenge: **96.5%** (Lixx Blog, from Xiaomi HF page)
- MMLU: **86.3%** (Lixx Blog); MMLU-Pro **65.8%** (Lixx Blog)
- AA Intelligence Index: **20.9% estimated ±7.9 pp** (benchgap, medium confidence)

Coding:
- HumanEval+: **84.8%** (Lixx Blog)
- MBPP+: not separately listed
- SWE-bench Pro: **56.1% measured** (HF model card)
- DeepSWE: **56.3% estimated ±7.2 pp** (benchgap, low confidence)

Long context:
- Declared 1M-token context (Lixx Blog + HF card); no public retrieval score measured at the full 1M window.

Multimodal:
- VideoMMMU: **84.8% estimated ±0.9 pp** (benchgap)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Strong on SWE-bench Verified (79.0 est), Terminal-Bench 2.1 (78.3 est), LiveCodeBench v6 (86.5 est), BrowseComp (81.6 est). Capped by weaker SWE-bench Pro (56.1 measured) and CyberGym (41.1 est).
- **Reasoning: 72/100.** Strong on ARC-Challenge (96.5), MMLU (86.3), GPQA Diamond (85.8 est per benchgap). Capped by weak HLE (32.9 est) and CritPt (3.6 est). NOTE: Lixx/Xiaomi HF card reports GPQA-Diamond 66.7% for MiMo-V2.5 Base — significant conflict with benchgap's 85.8% estimate; using the higher benchgap figure pending independent resolution.
- **Context window: 95/100.** Verified 1M-token context (Lixx Blog + HF card). Capped only because no public retrieval score is measured at the full 1M window.
- **Multimodal: 85/100.** Full text/image/video/audio input with text out; strong on Video-MME (87.7% measured with subtitle), MMMU (84.6 est), MathVision (86.8 est), CharXiv (81.0 measured). Capped by weaker ScreenSpot Pro (72.4 est).
- **Coding: 75/100.** Strong on LiveCodeBench v6 (86.5 est), SWE-bench Verified (79.0 est), HumanEval+ (84.8). Capped by weaker SWE-bench Pro (56.1 measured) and DeepSWE (56.3 est).
- **Cost efficiency: 98/100.** Free on OpenCode Zen ($0 in/out); paid fallback ~$0.14/$0.28 per 1M. Not counted toward Overall.
- **Overall Score: 81/100.** Half-up mean of (78 + 72 + 95 + 85 + 75) / 5 = 81. Best-fit recommendation: a capable open-weights multimodal agent for routine coding and visual tasks at zero cost via Zen; verify on HLE-class and agentic-coding tasks before production reliance given the GPQA Diamond scoring conflict.

### Conflicts vs existing meta.json / queued average

- meta.json claims SWE-bench Verified 92.0% (this appears to be a misattribution — benchgap measures MiMo-V2.5 at 79.0% estimated; LiveCodeBench v6 is 86.5% est).
- meta.json claims Video-MME 87.7% — confirmed by benchgap (87.7% measured with subtitle).
- meta.json lists Flash as 310B/15B active — confirmed by Lixx Blog for MiMo-V2.5 Base (310B total / 15B active).
- GPQA Diamond: benchgap estimates 85.8%; Lixx/Xiaomi HF card reports 66.7% for Base model. Unresolved conflict — benchgap figure is model-based (estimated), Xiaomi figure is from official eval results but for the Base (non-instruct) variant.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-17
- Method: public internet research (benchgap aggregator + Hugging Face model card + Lixx Blog independent deep-dive); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
- MMMU: **84.6% estimated ±1.0 pp** (benchgap, high confidence)
- MathVision: **86.8% estimated ±3.3 pp** (benchgap, high confidence)
- Video-MME (with subtitle): **87.7% measured** (benchgap) — matches meta.json claim
- Video-MME (w/o subtitle): **84.4% estimated ±1.8 pp** (benchgap)
- CharXiv: **81.0% measured** (benchgap)
- VideoMMMU: **84.8% estimated ±0.9 pp** (benchgap)