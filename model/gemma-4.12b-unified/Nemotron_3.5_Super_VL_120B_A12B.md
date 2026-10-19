# Gemma 4 12B Unified — findings by Nemotron 3.5 Super VL 120B A12B

- Source: ai.google.dev/gemma/docs/core/model_card_4 (official Gemma 4 model card), huggingface.co/google/gemma-4-12B / gemma-4-12B-it (official HF cards), ollama.com/library/gemma4:12b (official Ollama card + benchmark table), gemmai4.com/gemma4-12b + benchmark page, benchmarklist.com/models/google-gemma-4-12b-it, benchlm.ai/models/gemma-4-12b (aggregator), benchlm.ai comparisons (vs 31B, E4B, GPT-OSS 20B, MiniCPM5-1B, Qwen3.6-35B-A3B)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified (Google DeepMind)
- **Short description:** The only encoder-free Gemma 4 model (11.95B parameters), text+image+audio+video in → text out; 256K context; Apache 2.0; released 2026-06-03 (Gemma releases page). Projects raw image patches and audio waveforms directly into the LLM embedding space via lightweight linear layers — no separate vision/audio encoders, reducing multimodal latency. Fits roughly a 16GB memory budget (6.7 GB at 4-bit).
- **Provider / access:** Google (google/gemma-4-12B-it instruct on HF), Ollama (gemma4:12b), Kaggle, Google AI Studio; open weights, commercial use permitted.
- **Release / knowledge:** Released 2026-06-03; knowledge cutoff not stated.
- **IDs:** `google/gemma-4-12B-it` (instruct), `google/gemma-4-12B` (base); `gemma4:12b` (Ollama). Case-sensitive (`gemma-4-12B` with capital B).
- **Context window:** 256,000 tokens (official model card; benchlm.ai; benchmarklist). Verified.
- **Modalities:** Text + image + audio + video in, text out (the ONLY Gemma 4 size with video); reasoning yes; tool calls yes (native function calling); JSON/structured output yes (native system prompt).
- **Pricing (as of 2026-10-16):** Open weights Apache 2.0 (self-host effectively $0); hosted/price not published (benchmarklist lists "Price not published").
- **Architecture:** 11.95B parameters, 48 layers, 1024-token sliding window, 262K vocabulary, unified Keys/Values with Proportional RoPE (p-RoPE), encoder-free dense, MTP drafter for speculative decoding.

### Raw benchmarks found

Official Gemma 4 model card instruction-tuned table (12B Unified column), corroborated by Ollama, gemmai4, benchmarklist, benchlm.ai.

Agent / tool use:

- LiveCodeBench v6: **72.0%** (official model card; benchlm)
- Design Arena Website: **1287** (OpenRouter via benchmarklist)
- Native function calling + system prompt supported (feature)

Reasoning / knowledge:

- MMLU Pro: **77.2%** (official model card; benchlm)
- GPQA Diamond: **78.8%** (official model card) / **78.8%** (GPQA-D)
- AIME 2026: **77.5%** (official model card; benchlm)
- HLE w/o tools: **5.2%** (official model card; benchlm)
- HLE with search: not reported for 12B (shown "-")
- MRCR v2 8 needle 128k: **43.4%** (official model card)
- CritPt: **0.0%** (benchlm.ai / Artificial Analysis)
- MMMLU: **83.4%** (official model card; benchlm)
- AA-LCR: **63.7%** (benchlm.ai / Artificial Analysis)
- BigBench Extra Hard: **53.0%** (official model card)

Coding:

- LiveCodeBench v6: **72.0%** — see above
- Codeforces ELO: **1659** (official model card)
- AA Coding Index: **31.0%** (benchlm.ai / Artificial Analysis)

Multimodal & grounded:

- MMMU Pro: **69.1%** (official model card) / **69.7%** (AA-MMMU-Pro)
- MATH-Vision: **79.7%** (official model card; benchlm)
- MedXpertQA MM: **48.7%** (official model card; benchlm)
- OmniDocBench 1.5: **0.164** (avg edit distance, lower better; official model card)
- InfographicVQA: **88.4%** (gemmai4 benchmark page)
- CoVoST speech translation: **38.5** (gemmai4 / official card)
- FLEURS (lower better): **0.069** (official card)

Long context:

- MRCR v2 128k: **43.4%** (official model card); RULER 128K **91.2%** (gemmai4 benchmark page — 12B beats 26B A4B's 89.8 here, one of the few cases a smaller Gemma 4 leads); AA-LCR 63.7%; no score beyond 128K.

Instruction following:

- AA-IFBench: **73.5%** (benchlm.ai / Artificial Analysis)
- IFEval: not isolated for 12B in fetched sources

### Conflicting results noted

- benchlm.ai overall 36.91 (#150/935) vs benchmarklist ECI 119.23 (#144/398) — different composites, both mid-pack; no conflict in raw numbers.
- HLE w/o tools 5.2% is very low — reflects the model's small size / refusal tendency; consistent with the E4B pattern (HLE not reported for smaller sizes).
- RULER 128K: 12B (91.2) > 26B A4B (89.8) — smaller model leads on long-context retrieval; noted per gemmai4.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 58/100.** LiveCodeBench 72.0 (coding-adjacent), native function calling + system prompt; no public Terminal-Bench/BrowseComp/MCP Atlas/τ²-bench score isolated for 12B → moderate confidence.
- **Reasoning: 66/100.** MMLU Pro 77.2, GPQA Diamond 78.8, AIME 77.5, MMMLU 83.4 are strong for 12B; capped by HLE 5.2%, CritPt 0.0, BigBench Extra Hard 53.0.
- **Context window: 85/100.** Declared and verified 256K with RULER 128K 91.2% and MRCR 128K 43.4%; capped because no public retrieval curve beyond 128K and MRCR is modest.
- **Multimodal: 69/100.** The only Gemma 4 size with video; MMMU Pro 69.1, MATH-Vision 79.7, InfographicVQA 88.4, MedXPertQA MM 48.7, CoVoST 38.5 — solid unified multimodal.
- **Coding: 65/100.** LiveCodeBench 72.0, Codeforces 1659; below 26B A4B (77.1/1718) and 31B (80.0/2150) tiers; strong for 12B.
- **Cost efficiency: 90/100.** Apache 2.0 open weights (self-host ~$0), 6.7 GB at 4-bit fits 16GB laptop; not counted toward Overall.
- **Overall Score: 68.6/100.** Half-up mean of (58 + 66 + 85 + 69 + 65) / 5 = 68.6 → 69. Let me recompute: (58+66+85+69+65)=343/5=68.6→69. Best-fit recommendation: strong local multimodal/reasoning model for laptops; video capability unique in the Gemma 4 line; HLE weakness noted.

Correction: recompute carefully. (58 + 66 + 85 + 69 + 65) = 343; 343/5 = 68.6 → 69.

- **Overall Score: 69/100.** Best-fit recommendation: strong local multimodal/reasoning model for laptops; video capability unique in the Gemma 4 line; HLE weakness noted.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Gemma 4 model card + HF/Ollama cards + gemmai4 + benchmarklist + benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
