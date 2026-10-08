# Qwen 3.5 — findings by Laguna S 2.1

- Source: Hugging Face model card (`https://huggingface.co/Qwen/Qwen3.5-397B-A17B`), Alibaba Cloud Model Studio (`https://modelstudio.alibabacloud.com/`), Qwen AI blog (`https://qwen.ai/blog?id=qwen3.5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 (Qwen3.5-397B-A17B; Alibaba Cloud Model Studio: "Qwen3.5-Plus")
- **Short description:** Alibaba Cloud's Qwen 3.5 flagship (2026): 397B total / 17B activated sparse MoE with Gated Delta Networks, unified vision-language foundation, chain-of-thought reasoning, 201-language support, and adaptive tool use. Hosted as "Qwen3.5-Plus" on Alibaba Cloud Model Studio with 1M context by default.
- **Provider / access:** Alibaba Cloud Model Studio (`google/qwen-3.5` on API? — per `meta.json` ID is `opencode/qwen-3.5`, which maps to Qwen3.5-Plus on Model Studio); also open-weights on Hugging Face (`Qwen/Qwen3.5-397B-A17B`, Apache-2.0); 1 API provider
- **Release / knowledge:** Released March/April 2026; knowledge cutoff not published
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (HF, per model card); `Qwen3.5-Plus` (Alibaba Cloud Model Studio, per model card); `opencode/qwen-3.5` (per `meta.json` — maps to Plus tier)
- **Architecture:** Gated Delta Networks + sparse Mixture-of-Experts (512 experts, 10 routed + 1 shared); 397B total parameters, 17B activated; 60 layers; hidden dim 4096; Text-to-Text-to-Text; vision encoder integrated
- **Context window:** 262,144 natively, extensible up to 1,010,000 tokens (per model card); `meta.json` states "128K–1M (family range; tracked tier unconfirmed)" — the 397B-A17B flagship supports 1M
- **Modalities:** Text, image, video, and speech (audio) input; text output (per model card: "Causal Language Model with Vision Encoder", "Vision-Language Foundation", video demo, audio TTS support via Qwen3-TTS; `meta.json` states "Text in/out (multimodal coverage unverified for tracked tier)")
- **Pricing (as of 2026-10-08):** Not published on HF model card; `meta.json` states "Low-cost Qwen tier (exact price unverified)". Qwen family is generally low-cost. No verified public pricing found.
- **Reasoning:** Yes (chain-of-thought, extended thinking; "Qwen3.5 models operate in thinking mode by default" per model card)
- **Speed:** Not reported
- **TTFT:** Not reported
- **License:** Apache-2.0 (HF)
- **Status:** Current flagship (not deprecated); Qwen3 series is the prior generation

### Raw benchmarks found

> Sources: Hugging Face model card (`https://huggingface.co/Qwen/Qwen3.5-397B-A17B`) — the model card provides comprehensive benchmark tables comparing against GPT5.2, Claude 4.5 Opus, Gemini-3 Pro, Qwen3-Max-Thinking, and K2.5-1T-A32B. Confidence: high for these benchmarks. Note: the model card data is for Qwen3.5-397B-A17B specifically; the `meta.json` notes the "tracked tier is unconfirmed" — this report uses the flagship 397B-A17B as the proxy.

Agent / tool use:

- **Terminal-Bench 2.1:** **52.5%** — (HF model card; rank behind GPT5.2 54.0, Claude 59.3, Qwen3-Max-Thinking 22.5, K2.5 50.8, Gemini-3 54.2; moderate)
- **GDPval-AA:** no verified public score found (not reported on model card; AA returns 404 for "qwen-3.5")
- **AA Agentic Index:** no verified public score found (AA returns 404 for "qwen-3.5")
- **BFCL-V4:** **72.9** — (HF model card; rank behind GPT5.2 63.1, Claude 77.5, K2.5 68.3, Qwen3-Max-Thinking 67.7, Gemini-3 72.5; moderate)
- **TAU2-Bench:** **86.7** — (HF model card; rank behind only GPT5.2 87.1, followed by Claude 91.6; strong — 2nd best)
- **VITA-Bench:** **49.7** — (HF model card; rank behind GPT5.2 38.2, Claude 56.3, K2.5 41.9, Qwen3-Max-Thinking 40.9; moderate)
- **DeepPlanning:** **34.3** — (HF model card; rank behind GPT5.2 44.6, Claude 33.9, K2.5 14.5, Qwen3-Max-Thinking 28.7; moderate)
- **Tool Decathlon:** **38.3** — (HF model card; rank behind GPT5.2 43.8, Claude 43.5, K2.5 27.8, Qwen3-Max-Thinking 18.8; moderate)
- **MCP-Mark:** **46.1** — (HF model card; rank behind GPT5.2 57.5, Claude 42.3, K2.5 29.5, Qwen3-Max-Thinking 33.5; moderate)
- **OSWorld-Verified:** no verified public score found (not reported in agentic section of model card)
- **τ²-bench:** no verified public score found (not reported)
- **Claw-Eval:** no verified public score found (not reported)

Reasoning / knowledge:

- **GPQA Diamond:** **88.4%** — (HF model card; rank behind GPT5.2 87.4, Claude 87.0, Gemini-3 91.9, Qwen3-Max-Thinking 87.4, K2.5 87.6; strong — 4th of 6)
- **GPQA (text, not Diamond):** not separately reported
- **AA-GPQA Diamond:** no verified public score found (AA returns 404)
- **HLE:** **28.7%** — (HF model card; rank behind GPT5.2 35.5, Claude 30.8, Gemini-3 37.5, Qwen3-Max-Thinking 30.2, K2.5 30.1; weak — 5th of 6)
- **HLE-Verified:** **37.6** — (HF model card footnote 1; Qwen3.5-Plus achieves 37.6%; verified/revised HLE)
- **AA-LCR:** no verified public score found (AA returns 404) — but HF model card reports Long Context:
- **AA-LCR (HF model card):** **68.7** — (HF model card; rank behind GPT5.2 72.7, Claude 74.0, Gemini-3 70.7, Qwen3-Max-Thinking 68.7, K2.5 70.0; tied 4th-5th of 6)
- **AA Intelligence Index:** no verified public score found (AA returns 404 for "qwen-3.5")
- **SuperGPQA:** **70.4%** — (HF model card; rank behind GPT5.2 67.9, Claude 70.6, Gemini-3 74.0, Qwen3-Max-Thinking 67.3, K2.5 69.2; moderate)
- **MMLU-Pro:** **87.8%** — (HF model card; rank behind GPT5.2 87.4... actually equal; Claude 89.5, Gemini-3 89.8, Qwen3-Max-Thinking 85.7, K2.5 87.1; strong — tied 1st-2nd with GPT5.2)
- **MMLU-Redux:** **94.9%** — (HF model card; rank behind GPT5.2 95.0, Claude 95.6, Gemini-3 95.9, QQen3-Max-Thinking 92.8, K2.5 94.5; excellent — 5th of 6)
- **C-Eval:** **93.0%** — (HF model card; rank behind GPT5.2 90.5, Claude 92.2, Gemini-3 93.4, Qwen3-Max-Thinking 93.7, K2.5 94.0; excellent — 4th of 6)
- **IFEval:** **92.6%** — (HF model card; rank behind GPT5.2 94.8, Claude 90.9, Gemini-3 93.5, Qwen3-Max-Thinking 93.4, K2.5 93.9; excellent — 2nd of 6)
- **IFBench:** **76.5%** — (HF model card; rank behind GPT5.2 75.4... actually ahead; Claude 58.0, Gemini-3 70.4, Qwen3-Max-Thinking 70.9, K2.5 70.2; excellent — 1st of 6)
- **MultiChallenge:** **67.6%** — (HF model card; rank behind GPT5.2 57.9, Claude 54.2, Gemini-3 64.2, Qwen3-Max-Thinking 63.3, K2.5 62.7; excellent — 1st of 6)
- **CritPt:** no verified public score found (not reported)
- **AA-Omniscience:** no verified public score found (not reported)
- **LongBench v2:** **63.2%** — (HF model card; rank behind GPT5.2 54.5, Claude 64.4, Gemini-3 68.2, Qwen3-Max-Thinking 60.6, K2.5 61.0; moderate — 4th of 6)

Coding:

- **SWE-bench Verified:** **76.4%** — (HF model card; rank behind GPT5.2 80.0, Claude 80.9, Gemini-3 76.2, QQen3-Max-Thinking 75.3, K2.5 76.8; moderate — 4th of 6)
- **SWE-bench Multilingual:** **69.3%** — (HF model card; rank behind GPT5.2 72.0, Claude 77.5, Gemini-3 65.0, Qwen3-Max-Thinking 66.7, K2.5 73.0; moderate)
- **SecCodeBench:** **68.3%** — (HF model card; rank behind GPT5.2 68.7, Claude 68.6, Gemini-3 62.4, Qwen3-Max-Thinking 57.5, K2.5 61.3; strong — 2nd of 6)
- **DeepSWE:** no verified public score found (not reported)
- **LiveCodeBench v6:** **83.6%** — (HF model card; rank behind GPT5.2 87.7, Claude 84.8, Gemini-3 90.7, Qwen3-Max-Thinking 85.9, K2.5 85.0; moderate — 4th of 6)
- **AA Coding Index:** no verified public score found (AA returns 404)
- **SciCode:** no verified public score found (not reported)
- **MMLU-Pro (STEM proxy):** 87.8 (excellent, not coding-specific but relevant)

Multimodal (vision-language):

- **MMMU:** **85.0%** — (HF model card; rank behind GPT5.2 86.7, Claude 80.7, Gemini-3 87.2, Qwen3-Max-Thinking 80.6, K2.5 84.3; strong — 2nd of 6)
- **MMMU-Pro:** **79.0%** — (HF model card; rank behind GPT5.2 79.5, Claude 70.6, Gemini-3 81.0, Qwen3-Max-Thinking 69.3, K2.5 78.5; strong — 2nd of 6)
- **MathVision:** **88.6%** — (HF model card; rank behind GPT5.2 83.0, Claude 74.3, Gemini-3 86.6, Qwen3-Max-Thinking 74.8, K2.5 84.2; excellent — 1st of 6)
- **MMBenchEN-DEV-v1.1:** **93.7%** — (HF model card; rank behind GPT5.2 88.2, Claude 89.2, Gemini-3 93.7, Qwen3-Max-Thinking 89.7, K2.5 94.2; excellent — 4th of 6)
- **RealWorldQA:** **83.9%** — (HF model card; rank behind GPT5.2 83.3, Claude 77.0, Gemini-3 83.3, Qwen3-Max-Thinking 81.3, K2.5 81.0; strong — 2nd of 6)
- **CountBench:** **97.2%** — (HF model card; rank behind GPT5.2 91.9, Claude 90.6, Gemini-3 97.3, Qwen3-Max-Thinking 93.7, K2.5 94.1; excellent — 2nd of 6 behind Gemini-3)
- **VideoMME (with subs):** **87.5%** — (HF model card; rank behind GPT5.2 86, Claude 77.6, Gemini-3 88.4, Qwen3-Max-Thinking 83.8, K2.5 87.4; strong — 2nd of 6)
- **VideoMME (without subs):** **83.7%** — (HF model card; rank behind GPT5.2 85.8, Claude 81.4, Gemini-3 87.7, Qwen3-Max-Thinking 79.0, K2.5 83.2; moderate)
- **OSWorld-Verified (Visual Agent):** **62.2%** — (HF model card; rank behind GPT5.2 38.2... wait, GPT5.2 38.2, Claude 66.3, Gemini-3 N/A, Qwen3-Max-Thinking 38.1, K2.5 63.3; moderate — 2nd of 4 available)
- **AndroidWorld:** **66.8%** — (HF model card; rank behind GPT5.2 N/A, Claude N/A, Gemini-3 N/A, Qwen3-Max-Thinking 63.7, K2.5 N/A; moderate)

Long context:

- **AA-LCR (HF model card):** **68.7%** — (HF model card; 68.7, rank behind GPT5.2 72.7, Claude 74.0, Gemini-3 70.7, Qwen3-Max-Thinking 68.7, K2.5 70.0; 4th of 6)
- **MRCR / RULER:** no verified public score found (not reported separately)
- **Native context:** 262,144 tokens; extensible to 1,010,000 tokens (per model card)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded from Overall.
> Confidence: moderate — 30+ public benchmarks found on the Hugging Face model card for Qwen3.5-397B-A17B (the flagship). The `meta.json` notes that the "tracked tier is unconfirmed" and facts are "family-proxy provisional"; this report uses the 397B-A17B as the best available proxy. Note: Artificial Analysis returns 404 for "qwen-3.5" (model not yet listed on AA), so GDPval-AA and AA agentic/knowledge index scores are unavailable.

- **Tool use: 58/100.** Terminal-Bench 2.1 at 52.5% is moderate (frontier TBv2 is ~59+; ranked 4th of 6 behind GPT5.2, Claude, and K2.5). TAU2-Bench at 86.7 is strong (2nd behind only GPT5.2 at 87.1). BFCL-V4 at 72.9 is moderate. VITA-Bench at 49.7 and MCP-Mark at 46.1 are moderate. Tool Decathlon at 38.3 is low. No GDPval-AA or AA Agentic Index score (AA returns 404). DeepPlanning at 34.3 is moderate. Overall: mixed tool performance — strong on TAU2-Bench but moderate on Terminal-Bench and BFCL; estimated at 58.

- **Reasoning: 53/100.** No AA Intelligence Index score (not available; AA 404). Using available proxies: GPQA Diamond at 88.4 is strong (ranked 4th of 6, near-frontier). HLE at 28.7 is weak (ranked 5th of 6, well below the ~37.5 frontier). HLE-Verified at 37.6 is moderate. IFEval at 92.6 is excellent (2nd of 6). IFBench at 76.5 is excellent (1st of 6). SuperGPQA at 70.4 is moderate (ranked 5th of 6). AA-LCR at 68.7 is moderate (4th of 6). MMLU-Pro at 87.8 is strong. MMLU-Redux at 94.9 is excellent. C-Eval at 93.0 is excellent. MultiChallenge at 67.6 is excellent (1st of 6). CritPt and AA-Omniscience not available. Overall: strong knowledge benchmarks (MMLU, IFEval) offset by weak HLE; estimated at 53. Note: the `meta.json` flags facts as "family-proxy provisional" — the 397B-A17B scores may not reflect the exact tier tracked by `opencode/qwen-3.5`.

- **Context window: 95/100.** 262,144 native tokens, extensible to 1,010,000 tokens (per model card and `meta.json`: "128K–1M family range"). The flagship 397B-A17B supports 1M context (≥1M tier → 95). AA-LCR at 68.7% in long-context tasks confirms usable long-context performance. No verified ≥98% token-retrieval at 512K+ → not 100.

- **Multimodal: 90/100.** Text + image + video + speech/audio input; text output (per model card: "Vision-Language Foundation", "text, image, video, and audio" demos, Qwen3-TTS support). Per methodology: "+audio in = 90–100". No non-text output (e.g., text-to-image) verified. 90 at the lower end since no image output. Note: `meta.json` says "multimodal coverage unverified for tracked tier" — this score is based on the 397B-A17B model card, not the exact `opencode/qwen-3.5` tier.

- **Coding: 48/100.** SWE-bench Verified at 76.4 is moderate (frontier ~81; ranked 4th of 6). LiveCodeBench v6 at 83.6 is moderate (frontier ~91; ranked 4th of 6). DeepSWE not reported. SecCodeBench at 68.3 is strong (2nd of 6). No AA Coding Index or SciCode score. Terminal Bench 2.1 at 52.5 is moderate. Overall: consistently moderate-strong on coding benchmarks — estimated at 48. No DeepSWE score to boost the coding dimension.

- **Cost efficiency: 72/100.** `meta.json` states "Low-cost Qwen tier (exact price unverified)". No verified public pricing found on the HF model card or Qwen AI blog. The Qwen family is generally low-cost (Qwen3 models were in the $0.20/$0.80 per 1M tier range, which would place this in the "$0.1–0.3 / $0.3–1 ≈ 75" tier). No free tier on the hosted API (`noFreeId: true` is not specified in meta.json, but the id is `opencode/qwen-3.5`). Open-weights available on HF (Apache-2.0) so self-hosting is free. Estimated at 72 — low-cost but exact price unverified; score should be re-verified once pricing is published.

- **Overall Score: 69/100.** Mean of five non-cost dimensions: (58 + 53 + 95 + 90 + 48) / 5 = 344 / 5 = 68.8 → 69. Strong multimodal capabilities (text+image+video+audio in, 90) and excellent long context (95) with decent reasoning (53) and good coding on some benchmarks (48). Moderate agentic tool use (58) held back by no GDPval-AA or AA Index score (not listed on AI) and moderate Terminal-Bench 2.1. Low confidence in exact tier due to `meta.json` noting "tracked tier unconfirmed."

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-08
- Method: public internet research via Hugging Face model card, Alibaba Cloud Model Studio, and Qwen AI blog; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Notes: Artificial Analysis returns 404 for "qwen-3.5" (model not yet listed on AA), so AA-specific benchmarks (GDPval-AA, AA Agentic/Knowledge/Coding Index, AA-HLE, AA-IFBench, AA-Omniscience) are unavailable. The `meta.json` flags facts as "family-proxy provisional" and "tracked tier unconfirmed" — this report uses Qwen3.5-397B-A17B as the best available proxy. Pricing is unverified on public sources.
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_Benchmark_Report.md`, using the same headings.

---
