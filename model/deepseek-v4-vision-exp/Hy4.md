- Source: DeepSeek/DeepSeek-V4-Flash-Vision-Exp
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash-Vision-Exp
- **Short description:** DeepSeek's 2026-08-21 experimental multimodal vision-understanding model on the DeepSeek API — the first Flash-series model with image input. A distinct model; `deepseek-v4.1-flash`, `deepseek-v4.1-flash-1017` and `deepseek-v4-flash` are separate tracked folders (the older V4-Flash / V4-Flash-Vision-Exp names are routing aliases for V4.1 Flash per its Baike article).
- **Provider / access:** DeepSeek API (Chat Completions, Messages and Responses formats), Files API, DeepSeek Harness with a native image-request adapter.
- **Release / knowledge:** 2026-08-21; knowledge cutoff: no verified public score found.
- **IDs:** `deepseek-v4-flash-vision-exp`. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** (secondary CSDN technical survey); no vendor-verified figure in the retrieved Baike excerpt — reported with provenance.
- **Modalities:** **text and image in, text out**; JPEG / PNG / GIF / WebP; image description, screenshot OCR, chart analysis, mixed image-text input. Images are converted to tokens (max **384 tokens per image**). No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** same as DeepSeek-V4-Flash text pricing; secondary launch coverage quotes **~¥0.001 per image** (max 384 tokens) — labelled secondary, no full rate card.
- **Architecture:** **284B total / 13B active MoE** (secondary CSDN survey, labelled as such); pure-text capability on par with the V4-Flash GA build. Parameter count not vendor-verified in the retrieved primary excerpt.

### Raw benchmarks found

Agent / tool use:

- Multimodal agent benchmarks: outperforms DeepSeek-V4-Flash; multimodal agent capability **close to Claude Opus 4.8** (directional, no exact scores in the retrieved excerpt)
- Files API and native image requests in DeepSeek Harness (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Pure-text capability on par with the V4-Flash GA model (directional)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M window (secondary); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 83/100.** Better multimodal agent benchmarks than the text-only V4-Flash, near-Opus-4.8 multimodal agent standing, and three API formats plus Files API/Harness integration; capped by directional-only comparisons and no scored harness.
- **Reasoning: 81/100.** Text parity with the V4-Flash GA build plus chart/screenshot analysis; capped by no numeric reasoning benchmark for this exact ID.
- **Context window: 89/100.** A 1M-token window (secondary) with cheap image tokenisation (≤384 tokens/image); capped by the figure being secondary and no retrieval benchmark.
- **Multimodal: 88/100.** First DeepSeek Flash model with native image input, four image formats, OCR, chart analysis and mixed image-text prompts; capped by text-only output, no verified audio/video input, and no published multimodal benchmark score.
- **Coding: 79/100.** General coding inherited from the V4-Flash base; capped by zero published coding benchmark scores for this exact ID.
- **Cost efficiency: 95/100.** Text-rate pricing for images (~¥0.001/image secondary), ≤384 tokens per image, and 13B active params (secondary). Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 83, 81, 89, 88, 79 = 84.0 → 84. Best fit: high-volume image/document understanding and multimodal agent workflows at text-model prices; it is an experimental build, so validate stability first.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike DeepSeek-V4-Flash-Vision-Exp article retrieved via public web search excerpt (release, image formats, 384-token image cap, three API formats, Files API, Harness, text parity, agent-benchmark comparisons), plus secondary launch coverage (Tencent Cloud developer article, CSDN survey, Sina) for the ¥0.001/image price, 1M context and 284B/13B MoE — all explicitly labelled secondary. Directional "close to Opus 4.8" claims are not assigned numeric scores. The older `deepseek-v4-flash` / `deepseek-v4-flash-vision-exp` names are routing aliases for V4.1 Flash (per its Baike article) and are not treated as extra models. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [DeepSeek-V4-Flash-Vision-Exp — 百度百科 (retrieved via search excerpt; specs, formats, API)](https://baike.baidu.com/item/DeepSeek-V4-Flash-Vision-Exp/68651898)
  - [DeepSeek 多模态视觉理解模型上线 — 腾讯云开发者社区 (retrieved via search excerpt; pricing)](https://cloud.tencent.com/developer/article/2730373)
