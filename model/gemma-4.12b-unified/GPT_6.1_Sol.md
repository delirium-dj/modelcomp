# Gemma 4 12B Unified — findings by GPT 6.1 Sol

- Source: Google DeepMind / `google/gemma-4-12B-it`, encoder-free instruction-tuned model.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Gemma 4 12B Unified. This project uses `gemma-4.12b-unified`; upstream12B is a parameter size, not a separate4.12 version. Assess instruction-tuned **`google/gemma-4-12B-it`**, not base/PT, E4B,26B or31B.[1][2]
- **Short description:** Dense encoder-free multimodal model designed for local laptops, with native image and audio projection into the language backbone. “Unified” does not establish native image/audio generation.[1][2][3]
- **Provider / IDs:** Primary downloadable IT weights, local Transformers/llama.cpp/MLX/LiteRT-LM and cloud deployment options. AA exact weights link matches. External models.dev lists SiliconFlow **`google/gemma-4-12B-it`**, NanoGPT **`gemma-4-12b-it`** and others with different caps/modalities; these are registry claims, not authenticated tests. Guessed OpenRouter12B/12B-it/free records404, so no claimed active free route/Zen ID.[1][3][4][6]
- **Release / knowledge:** **2026-06-03**, primary/AA agree; training cutoff **January2025** in primary card. Configurable thinking on/off via template/system token; recommended temperature1/top-p.95/top-k64, historical thinking retained on tool turns only.[1][2][4]
- **Context window:** Exact config **262,144 positions**, primary **256K**, AA agrees. The model is **not natively128K** despite some secondary summaries. Hosted registry examples: NanoGPT131,072/32,768, Pioneer32,768, SiliconFlow262,144 with an equally large advertised output cap; the latter is not a tested universal maximum generation budget. No primary separate output limit verified.[1][4][5][6]
- **Modalities:** **Text/image/audio/video frames → text**, encoder-free, no native non-text generation. Primary card recommends audio≤30s and video≤60s at1fps; June developer guide separately demonstrates313 frames plus audio over~5min. Preserve those recipe differences rather than calling either a universal tested limit. Audio-translation/transcription capability does not make this general multimodal model a voice-first SKU.[1][3]
- **Pricing (2026-10-21):** AA records hosted **$0.10 input/$0.30 output per1M**, no cache quote. Registry separately lists NanoGPT **$0.05/$0.25/$0.025 cache**, with smaller context/image-only input, and SiliconFlow$0.10/$0.30/text-only. No verified$0 hosted tariff; open downloads require paid hardware/runtime resources.[4][6]
- **Architecture / licence:** Primary **11.95B dense**,48 decoder layers,1024 sliding window, exact model type **`gemma4_unified`**/hidden3840; lightweight **~35M vision projection**, raw16kHz audio projected in40ms chunks, no separate vision/audio transformer towers. **Apache2.0** per publisher/card; BF16 and QAT/MTP artifacts are deployment variants, not independently scored checkpoints here.[1][2][3][5]

### Raw benchmarks found

**Attribution:** Exact **12B Unified IT** column of primary family table; sibling figures excluded. AA **Reasoning UUID `feb02d3b-ff8d-4ed4-b165-13f8d4a7192c`**, June3, exact weight link. Current intelligence composite **estimated**, even though selected individual metrics are measured. No independently verified Vals exact profile found.[1][4]

Agent / tool use:

- Vendor **Tau2 average over3 domains69.0%** versus independent AA **Tau2 36.26%**, **TB2.1 27.34% /GDPval427.31 Elo /IFBench73.54%**. Different harness/configuration, not same-run disagreement to conceal.[1][4]
- No verified exact Tau3-Banking/TB4/Claw-Eval/ClawProBench/Toolathlon/MCP-Atlas/SWE Atlas QnA found; selected missing fields are null, not zeros.[4]

Reasoning / knowledge:

- Vendor **GPQA78.8% /HLE no-tools5.2% /AIME2026 no-tools77.5% /MMLU-Pro77.2% /BigBench Extra Hard53.0% /MMMLU83.4%**.[1]
- Independent AA **GPQA75.25% /HLE15.66% /CritPt0.00% measured**. HLE source/setup differences remain explicit; no AIME2025 figure inferred from2026.[4]
- **AA Index14.185 estimated**, not a complete current measured composite. **Omniscience accuracy15.62% /hallucination80.98% /reliability−52.7167** indicates limited factual coverage/calibration. Distinct denominators; not81% of every output token being false.[4]

Coding / long context / multimodal:

- Vendor **LiveCodeBench v6 72.0% /Codeforces1659 Elo**. No verified exact SWE Verified/Pro, SciCode, DeepSWE or Vibe Code result found; app-building demos are not a broad software-engineering benchmark. TB2.1 further limits coding-agent autonomy.[1][3][4]
- Vendor **MMMU-Pro69.1% /MATH-Vision79.7% /MedXpertQA-MM48.7%**; independent AA **MMMU-Pro69.65%**.[1][4]
- Vendor **OmniDocBench1.5 average edit distance0.164, lower better**, not16.4% accuracy; **CoVoST38.5 /FLEURS0.069 lower better**, both explicitly **excluding Chinese**. Do not erase metric direction/language coverage.[1]
- Vendor **MRCR v2 eight-needle128K cumulative average43.4%**, AA **LCR63.67%**. No near-perfect full262K retention or verified maximum-window MRCR/RULER score found.[1][4]
- AA hosted median **114.90tokens/s /2.24s first chunk**; no complete evaluation token/task-cost total published in selected record. Publisher's “16GB laptop ready” describes optimized deployment, not BF16 weights plus full262K KV cache fitting16GB.[2][3][4]

### Normalized scores (1–100)

- **Tool use: 47/100.** Useful bounded instruction/function behavior, capped by independent Tau2/TB2.1 and low GDPval; vendor69% is not assumed across harnesses.[1][4]
- **Reasoning: 66/100.** Useful small-model science/math, capped by measured CritPt0, weak factual coverage and estimated overall evaluation index.[1][4]
- **Context window: 76/100.** Exact native262,144-position tier; reduced hosted caps and43.4%128K retrieval prevent near-perfect quality claims.[1][5][6]
- **Multimodal: 90/100.** Native audio plus visual/video-frame/document understanding with measured ASR/translation/vision, capped by text-only output, short-recipe limits and missing broad audio robustness tests.[1][3][4]
- **Coding: 64/100.** Useful vendor competitive coding and local demos, capped by absent exact repair/full-app verification and modest terminal completion.[1][3][4]
- **Cost efficiency: 96/100.** Very low reported paid rates and practical quantization/local options, capped by route-cap/modality differences and nonzero self-host costs; no free tariff inferred.[2][4][6]
- **Overall Score: 69/100.** Half-up mean `(47 + 66 + 76 + 90 + 64) / 5 = 68.6`; cost excluded. Best fit: local multimodal understanding/extraction and bounded tasks, not an independently proven long-horizon developer.

### Research trail and sources

Fresh Bing RSS `"Gemma4" "12B" unified benchmark` returned unrelated results; Google exact12B model query an interstitial; DuckDuckGo exact Unified weights query found the actual Google launch/weights/developer guide. Primary full IT card, exact config, June3 launch and encoder-free guide inspected; selected AA Reasoning metrics/estimated flag extracted. Three plausible OpenRouter12B routes and Vals candidate404; external registry entries inspected with exact provider caps. No sibling/peer figures or an “any-to-any” metadata tag used to invent non-text output.

[1]: https://huggingface.co/google/gemma-4-12B-it/raw/main/README.md "Exact Unified IT card:256K, audio/frame recipes,12B-column benchmarks and metric/language caveats"
[2]: https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12B/ "June3 primary launch, Apache2, optimized16GB local positioning and MTP distinction"
[3]: https://developers.googleblog.com/gemma-4-12b-the-developer-guide/ "35M projection/raw-audio architecture, local API and separately scoped5min frame+audio demonstration"
[4]: https://artificialanalysis.ai/models/gemma-4-12b "Exact selected June3 Reasoning, estimated composite, independently measured dimensions, recorded rates/runtime"
[5]: https://huggingface.co/google/gemma-4-12B-it/raw/main/config.json "Exact262144 positions,48-layer dense Unified architecture; not128K native"
[6]: https://models.dev/api.json "Exact external hosted-model registry: provider-specific caps, modality limits and paid rates, not authenticated inference"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches, full primary IT card/config/developer inspection, exact independent evaluator and explicit provider-registry comparison. Scores are normalized1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
