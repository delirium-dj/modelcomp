# Gemma 4 E4B — findings by GPT 6.1 Sol

- Source: Google DeepMind, `google/gemma-4-E4B-it`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)

## Model card

- **Identity:** Instruction-tuned E4B, not Base, E2B, Unified12B or26B MoE. **Apache2.0**, dense **4.5B effective /8B including per-layer embeddings**,42layers; effective parameters are not a sparse expert count.[1]
- **Release / cutoff:** AA April3,2026; primary card training cutoff **January2025**. Model weights support Transformers/local inference; exact hosted availability varies.[1][2]
- **Context / modalities:** **128K**, not the family's larger256K models. Text/images/**audio** input, video as frames, text output. Audio≤30seconds; video≤60seconds at1fps per card. General multimodal model, not TTS/STT-first. Thinking/functions/system role supported; sampling1/0.95/top-k64.[1]
- **Price:** AA paid serving reference **$0.02 input/$0.10 output per1M**; no independently confirmed current exact free lane. Guessed OpenRouter exact IDs404 and current NVIDIA catalog lacks exact E4B.[2][3] Free weights do not establish free local compute; cost rating is provisional paid-reference value.

### Raw benchmarks found

- **Primary E4B column:** **GPQA58.6% /MMLU-Pro69.4% /AIME26 42.5% /LCBv6 52.0% /Codeforces940 Elo /τ²42.2%** (average over3).[1]
- **MMMU-Pro52.6%**, MathVision59.5%, **OmniDocBench1.5 edit distance0.181↓**, **FLEURS0.08↓**, CoVoST35.54. Error/distance and translation metrics are not ordinary accuracy percentages.[1]
- **MRCRv2 eight-needle128K average25.4%**: actual long-window test, far from near-perfect retrieval.[1]
- **AA independent reasoning**, UUID`d80eb0f1-f62e-4d31-99d2-7a925eb126b0`: measured Index **8.9091**, **TB2.1 1.8727% /TB4 0% measured /τ²20.7602%**, GDPval−36.44 Elo; AutomationBench0.4615%partial.[2]
- AA **GPQA57.5758% /HLE3.7535% /LCR32% /CritPt0.5714% /SciCode24.4213% /MMMU-Pro51.3873%**. Omniscience accuracy8.5833%/hallucination30.9389%; lower hallucination is not high answer coverage. Missing AA LCB is null, not zero.[2]
- No exact SWE, Claw/MCP or broad independent audio/video replication verified. Primary and independentτ² figures have different conditions and are not averaged together.

### Normalized scores (1–100)

- **Tool use: 25/100.** Very low independent terminal/workflow completion despite basic function support.[2]
- **Reasoning: 44/100.** GPQA~58% but HLE3.75%, weak difficult science/context and limited knowledge coverage.[1][2]
- **Context window: 60/100.** Verified128K tier, with measured weak MRCR rather than inflated retention claims.[1]
- **Multimodal: 75/100.** Real vision/audio/frame-video breadth with moderate perception quality and short-media limits; text output only.[1][2]
- **Coding: 45/100.** Primary LCB52% and independent SciCode24.42%, constrained by repository/terminal weakness.[1][2]
- **Cost efficiency: 98/100.** Provisional very cheap paid serving reference and compact effective compute; no verified free hosted entitlement.[2][3]
- **Overall Score: 50/100.** Half-up mean `(25+44+60+75+45)/5=49.8`; cost excluded.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22Gemma%204%20E4B%22%20benchmark): empty feed.
- [Google](https://www.google.com/search?q=%22Gemma%204%20E4B%22%20model%20benchmark): JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22Gemma%204%20E4B%22%20model%20benchmark): human challenge, not bypassed. Exact primary card and independent record inspected; no peer findings or authenticated inference.

[1]: https://huggingface.co/google/gemma-4-E4B-it/raw/main/README.md
[2]: https://artificialanalysis.ai/models/gemma-4-e4b
[3]: https://integrate.api.nvidia.com/v1/models

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent primary/evaluator research; exact-size columns, metric directions and native versus family context separated. Ratings are interpretations.
