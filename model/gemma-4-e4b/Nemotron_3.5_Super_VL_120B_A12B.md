# Gemma 4 E4B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: ai.google.dev/gemma/docs/core/model_card_4 (official Gemma 4 model card), ollama.com/library/gemma4:e4b (official Ollama card + benchmark table), gemmai4.com (benchmark summary), aurigait.com (2026 guide, re-verified Oct 6 2026), codersera.com (review), huggingface.co/google/gemma-4-E4B-it (official HF card), benchlm.ai/models/gemma-4-e4b (aggregator), benchlm.ai comparisons (vs E2B, 12B, 26B A4B, 31B, GPT Realtime 2.1), artificialanalysis.ai/models/gemma-4-e4b
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B (Google DeepMind)
- **Short description:** Open-weight "effective 4B" edge model in the Gemma 4 family (4.5B effective / 8B with embeddings), text+image+audio in → text out; 128K context; Apache 2.0; released April 2026 (model card last updated July 30, 2026 per aurigait re-verification). Built for laptops, single consumer GPUs, and higher-end handsets; per-layer embeddings (PLE) for parameter efficiency.
- **Provider / access:** Google (google/gemma-4-E4B-it on Hugging Face), Ollama (gemma4:e4b), Kaggle, Google AI Studio; open weights, commercial use permitted.
- **Release / knowledge:** Released 2026-04-02; knowledge cutoff not stated in fetched sources.
- **IDs:** `google/gemma-4-E4B-it` (instruct, HF), `google/gemma-4-E4B` (base), `gemma4:e4b` (Ollama).
- **Context window:** 128,000 tokens (official model card; benchlm.ai; Ollama). Verified across sources. (256K is for 12B/26B/31B only — E2B/E4B are 128K.)
- **Modalities:** Text + image + audio in, text out (audio supported on E2B/E4B/12B per official card; larger models are text+image); reasoning yes (configurable thinking); tool calls yes (native function calling); JSON/structured output yes (native system prompt + structured output per July refresh).
- **Pricing (as of 2026-10-16):** Open weights Apache 2.0 (self-host effectively $0); hosted pricing not disclosed in fetched sources. benchlm compare tables list $0.00/$0.00 (open-weight placeholder).
- **Architecture:** 4.5B effective / 8B total with embeddings, 42 layers, 512-token sliding window, 262K vocabulary, Per-Layer Embeddings, dense (not MoE).

### Raw benchmarks found

Official Gemma 4 model card instruction-tuned table (E4B column), corroborated by Ollama, gemmai4, aurigait, codersera, benchlm.ai, Artificial Analysis.

Agent / tool use:

- τ²-bench: **20.8%** (benchlm.ai / Artificial Analysis)
- GDPval-AA: **0.0%** / **177 Elo** (benchlm.ai / Artificial Analysis)
- Native function calling + system prompt supported (feature, no score)

Reasoning / knowledge:

- MMLU Pro: **69.4%** (official model card; benchlm)
- GPQA Diamond: **58.6%** (official model card) / **57.6%** (AA-GPQA Diamond)
- AIME 2026 no tools: **42.5%** (official model card)
- HLE: not found for E4B (reported as "-" for E4B/E2B in official card)
- MRCR v2 8 needle 128k: **25.4%** (official model card)
- CritPt: **0.6%** (benchlm.ai / Artificial Analysis)
- AA-Omniscience: index -19.7%, accuracy 8.6%, hallucination rate 30.9% (benchlm.ai / Artificial Analysis)
- Artificial Analysis Intelligence Index: **8.9** (#..., score 12 per AA model page)

Coding:

- LiveCodeBench v6: **52.0%** (official model card; benchlm)
- Codeforces ELO: **940** (official model card)
- AA Coding Index: **9.4%** (benchlm.ai / Artificial Analysis)
- AA-SciCode: **24.4%** (benchlm.ai / Artificial Analysis)

Multimodal & grounded:

- MMMU Pro: **52.6%** (official model card) / **51.4%** (AA-MMMU-Pro)
- MATH-Vision: **59.5%** (Ollama table)
- MedXPertQA MM: **28.7%** (Ollama table)
- OmniDocBench 1.5: **0.181** (avg edit distance, lower better; Ollama)
- CoVoST speech translation: **35.54** (Ollama)
- FLEURS (lower better): **0.08** (Ollama)

Long context:

- MRCR v2 128k: **25.4%** (official model card); AA-LCR **32.0%** (benchlm); no full-context (beyond 128K) score — E4B caps at 128K.

Instruction following:

- Not isolated for E4B in fetched sources (IFEval not reported).

### Conflicting results noted

- benchlm.ai overall 31.02 vs raw MMLU Pro 69.4 / GPQA 58.6 — the composite is conservative (only 20 of 639 benchmarks covered, per benchlm coverage note).
- AA-Omniscience hallucination rate 30.9% vs accuracy 8.6% — strong refusal tendency on the tiny model (noted in Artificial Analysis discussion).
- E4B vs E2B: E4B leads on every shared benchmark (e.g. GPQA 58.6 vs 43.4, LiveCodeBench 52 vs 44) — consistent, no conflict.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 35/100.** τ²-bench 20.8, GDPval-AA 0.0/177 Elo; native function calling supported but no scored agent benchmarks (Terminal-Bench, BrowseComp, MCP Atlas) found for E4B.
- **Reasoning: 50/100.** MMLU Pro 69.4, GPQA Diamond 58.6, AIME 42.5 are respectable for a 4B-edge model; capped by HLE not found, MRCR 25.4, CritPt 0.6, AA-Omniscience accuracy 8.6.
- **Context window: 65/100.** Declared 128K (half of the 12B+/26B/31B 256K); MRCR 128K 25.4% is weak; no retrieval curve beyond 128K (doesn't exist for this size).
- **Multimodal: 52/100.** Text+image+audio; MMMU Pro 52.6, MATH-Vision 59.5, MedXPertQA MM 28.7, CoVoST 35.54 — solid edge multimodal but below the 12B+/26B/31B tiers.
- **Coding: 45/100.** LiveCodeBench 52.0, Codeforces 940, AA-SciCode 24.4; below the 12B (72.0/1659) and 26B/31B tiers; competent for its size.
- **Cost efficiency: 95/100.** Apache 2.0 open weights (self-host ~$0), 4.5B-effective edge model, runs on consumer hardware/handsets; not counted toward Overall.
- **Overall Score: 49/100.** Half-up mean of (35 + 50 + 65 + 52 + 45) / 5 = 49.4 → 49. Best-fit recommendation: edge/local reasoning and multimodal model where footprint matters; not a frontier generalist.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Gemma 4 model card + Ollama card + gemmai4 + aurigait + codersera + HF card + benchlm.ai + Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
