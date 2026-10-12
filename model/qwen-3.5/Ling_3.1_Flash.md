# Qwen 3.5 — findings by Ling 3.1 Flash

- Source: Alibaba (Qwen Team) / Qwen3.5-397B-A17B (Qwen 3.5 family flagship)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5
- **Short description:** Alibaba's open-weights Qwen3.5 series (announced Feb 2026), flagship Qwen3.5-397B-A17B: a 397B-total/17B-active native vision-language MoE (512 experts, 10 routed + 1 shared active per token, expert intermediate dim 1024, multi-step MTP). Family variants: 397B-A17B, 122B-A10B, 35B-A3B, 27B, 9B, plus hosted Qwen3.5-Plus and Qwen3.5-Flash.
- **Provider / access:** Alibaba Cloud Model Studio `qwen3.5-397b-a17b`; OpenRouter `qwen/qwen3.5-397b-a17b` (OpenAI-compatible); Ollama `qwen3.5:397b-cloud`; hosted siblings `qwen3.5-plus` / `qwen3.5-flash`.
- **Release / knowledge:** 2026-02-15/16 (trackers vary 02-13→02-17); knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-397b-a17b` (Hugging Face, Apache 2.0).
- **Context window:** 262,144 native, extensible to 1,010,000 via YaRN (config.json `max_position_embeddings: 262144`); Qwen3.5-Plus serves 1M by default.
- **Modalities:** text + image in (native vision-language); text out; tool calls; adaptive tool use on hosted variants; MTP serving.
- **Pricing (as of 2026-10-08):** Alibaba list $0.39 / 1M input, $2.34 / 1M output (raised from $0.3025/$1.925 on 2026-08-24); qwen3.5-plus $0.115/$0.688 (≤128K), tiered up to $0.573/$3.44 (256K–1M).
- **Architecture:** 397B MoE, 17B active, 512 experts (10 routed + 1 shared), Apache 2.0; hybrid linear-attention design in smaller variants (35B-A3B).

### Raw benchmarks found

Qwen-reported (HF model card / Alibaba Cloud blog) for the 397B-A17B column unless noted; Epoch AI and trackers carry the same rows.

Agent / tool use:

- τ²-bench: **83.9%** (themodelbeat/Epoch)
- BrowseComp: **69.0%** (simple context-folding) / **78.6%** (discard-all strategy, DeepSeek-V3.2/Kimi K2.5-style)
- Search Agent (256K context-folding): reported on model card; WideSearch at 256K without context management
- APEX: **24.9%** (Epoch AI)
- τ²-bench (launch table): **86.7%** — 2nd only to Claude Opus 4.5's 91.6%; BFCL-V4: **72.9%**; VITA-Bench: **49.7%**; DeepPlanning: **34.3%**; Tool Decathlon: **38.3%**; MCP-Mark: **46.1%** (11.4pp behind GPT-5.2's 57.5% — the weakest agentic row); AndroidWorld: **66.8%**; ScreenSpot Pro: **65.6%**; OSWorld-Verified: **62.2%**; WideSearch: **74.0%**; BrowseComp-zh: **70.3%**; Seal-0: **46.9%**; HLE w/ tool: **48.3%**; GDPval-AA: **Elo 1,221** (AA — +361 over Qwen3-235B's 860)

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (vs Nemotron 3 Ultra 87.0% no-tools)
- Humanity's Last Exam: **28.7%**; HLE-Verified (Qwen's revised set): **37.6%**
- AIME 2024/2025: **88.9%** (Epoch AI)
- MMLU-Pro: **87.8%** (29-language MMLU-ProX averaged); MMLU-Redux: **94.9%**; SuperGPQA: **70.4%**; IFEval: **92.6%**; IFBench: **76.5%** (best-in-table — beats GPT-5.2's 75.4% and Claude 4.5 Opus's 58.0%); MultiChallenge: **67.6%** (beats GPT-5.2's 57.9%)
- AIME 2026: **91.3%**; HMMT Feb 2025: **94.8%**; HMMT Nov 2025: **92.7%**; IMOAnswerBench: **80.9%**
- AA Intelligence Index: **45** (#3 open weights, behind GLM-5's 50 and Kimi K2.5's 47; +16 over Qwen3-235B's 29); AA-Omniscience Index: **−32** (accuracy 30%, hallucination rate 88% — still high vs K2.5's −11 and GLM-5's −1)

Coding:

- SWE-bench Verified: **76.4%** (vs Nemotron 3 Ultra 70.7%)
- SWE-bench Multilingual: **69.3%**
- SecCodeBench: **68.3%**
- Terminal-Bench 2: **52.5%**
- SciCode: **42.0%** (Epoch AI); LiveCodeBench v6: **83.6%** (6th of 6 in the launch table — behind GPT-5.2's 87.7%, Gemini 3 Pro's 90.7%, Opus's 84.8%, Qwen3-Max's 85.9% and K2.5's 85.0%)

Multimodal:

- MMMU: **85.0%**; MMMU-Pro: **79.0%**; MathVision: **88.6%** (launch-table lead — beats GPT-5.2's 83.0% and Gemini 3 Pro's 86.6%); MathVista (mini): **90.3%**; We-Math: **87.9%**; DynaMath: **86.3%**; ZEROBench: **12** (best in table); ZEROBench_sub: **41.0%**; BabyVision: **52.3%**/43.3%; RealWorldQA: **83.9%**; MMStar: **83.8%**; MMBench EN-DEV: **93.7%**; HallusionBench: **71.4%**; SimpleVQA: **67.1%**; OmniDocBench 1.5: **90.8%** (highest of any tested model); CharXiv (RQ): **80.8%**; MMLongBench-Doc: **61.5%**; CC-OCR: **82.0%**; AI2D: **93.9%**; OCRBench: **93.1%** (beats GPT-5.2's 80.7% by 12+ points); ERQA: **67.5%**; CountBench: **97.2%**; RefCOCO (avg): **92.3%**; ODInW13: **47.0%**; EmbSpatialBench: **84.5%**; RefSpatialBench: **73.6%**; LingoQA: **81.6%**; V*: **95.8%**/91.1%; VideoMME (w/ sub): **87.5%** (w/o: 83.7%); VideoMMMU: **84.7%**; MLVU: **86.7%**; MVBench: **77.6%**; LVBench: **75.5%**; MMVU: **75.4%**; SLAKE: **79.9%**; PMC-VQA: **64.2%**; MedXpertQA-MM: **70.0%**; per DeepLearning.AI, the 397B outperformed GPT-5.2/Claude 4.5 Opus/Gemini 3 Pro on 28 of 44 vision benchmarks

Long context:

- AA-LCR: **68.7%**; LongBench v2: **63.2%** (262K-native reads; 1M via YaRN extension, hosted Plus serves 1M by default)

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench 86.7% (launch-table runner-up), BrowseComp 78.6% (discard-all), GDPval-AA Elo 1,221, WideSearch 74.0% and BFCL-V4 72.9% are strong for the tier; MCP-Mark 46.1% (11.4pp behind GPT-5.2), Tool Decathlon 38.3%, DeepPlanning 34.3%, APEX 24.9% and Terminal-Bench 2 52.5% cap it.
- **Reasoning: 75/100.** GPQA 88.4%, AIME 88.9%, AIME26 91.3%, HMMT Feb 94.8%, MMLU-Redux 94.9% and IFBench 76.5% (best-in-table) are solid, but HLE 28.7% (37.6% on Qwen's own HLE-Verified revision), the AA Intelligence Index of 45 and the AA-Omniscience Index of −32 (88% hallucination rate) hold it below frontier reasoning.
- **Context window: 74/100.** 262K native with a documented 1M YaRN extension (hosted Plus serves 1M by default); the independent retrieval reads now found — AA-LCR 68.7% and LongBench v2 63.2% — are mid-band, capping the score below the 1M-native tier. Revised 78→74 on the AA-LCR/LongBench v2 fills.
- **Multimodal: 80/100.** Native vision-language model with MMMU 85.0%; image+text input, text output.
- **Coding: 72/100.** SWE-bench Verified 76.4% and Multilingual 69.3% beat Nemotron 3 Ultra, but Terminal-Bench 2 52.5% and SciCode 42.0% hold the score down.
- **Cost efficiency: 85/100.** $0.39/$2.34 per 1M for Apache 2.0 open weights — an order of magnitude under contemporary closed flagships; smaller variants go to $0.065/$0.26 (Flash).
- **Overall Score: 77/100.** Mean of the five quality dims (78+75+78+80+72)/5 = 76.6 → 77; best fit for open-weights multimodal agents and cost-sensitive production fleets, with the 27B–122B variants covering edge deployment.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08
- Method: public internet research (Qwen HF model card, Alibaba Cloud Model Studio, SemiAnalysis InferenceX, Epoch AI, themodelbeat, BenchGecko, Ollama); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
