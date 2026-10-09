# LongCat-2.0 — findings by Step 5 Preview

- Source: Meituan LongCat (`meituan-longcat/LongCat-2.0`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0 (Meituan's LongCat team)
- **Short description:** A 1.6-trillion-parameter MoE (≈48B active per token, dynamic 33–56B; 135B N-gram embedding parameters on top) with a native 1M-token context — and the first trillion-parameter model Meituan says completed both pre-training and large-scale serving entirely on domestic AI ASIC superpods (50,000 non-NVIDIA accelerators, 35T+ tokens, "millions of accelerator-days," no rollbacks or loss spikes). Its context economics come from LongCat Sparse Attention (LSA), a redesign of DeepSeek's DSA indexer with streaming-aware indexing, cross-layer index sharing and hierarchical recall, extended to its 3-step MTP speculative decoding. The model spent two months as the anonymous "Owl Alpha" topping OpenRouter usage charts before Meituan unmasked it on 2026-06-30 with MIT-licensed weights. It is agentic-coding-focused: deep integration with Claude Code, OpenClaw and Hermes, and vendor scores that edge past GPT-5.5 on SWE-bench Pro.
- **Provider / access:** LongCat platform (longcat.ai / api.longcat.chat, OpenAI- and Anthropic-compatible), OpenRouter; weights on Hugging Face / ModelScope (BF16, INT8, FP8 variants) under MIT.
- **Release:** 2026-06-30 (weights followed the announcement).
- **Context window:** 1M tokens native (hundreds of billions of 1M-context training tokens); max output 128K.
- **Modalities:** Text in → text out (vision arrives only in the 2.5 preview generation).
- **Pricing (as of 2026-10-09):** list $0.75/M input, $2.95/M output with free cached context reads; promotional $0.30/$1.20; MIT weights free to self-host (16× H20 recommended).
- **Architecture:** MoE with LongCat Sparse Attention (SI/CLI/HI) + 3-step MTP + N-gram embeddings.

### Raw benchmarks found

Vendor-reported, in-house unified harness (rival figures cited from their official reports):

- Terminal-Bench 2.1: **70.8** (Gemini 3.1 Pro 70.7*, GPT-5.5 73.8*, Opus 4.7 71.7*, Opus 4.8 78.9*)
- SWE-bench Pro: **59.5** (GPT-5.5 58.6*, Gemini 3.1 Pro 54.2*, Opus 4.6 57.3*, Opus 4.7 64.3*, Opus 4.8 69.2*)
- SWE-bench Multilingual: **77.3** (Gemini 3.1 Pro 76.9*, Opus 4.6 77.8*)
- FORTE (corporate workflow agent): **73.2** (GPT-5.5 77.8, Opus 4.7 77.6, Opus 4.6 73.2)
- BrowseComp: **79.9** (Gemini 3.1 Pro 85.9*, GPT-5.5 84.4*, Opus 4.8 84.3*)
- RWSearch: **78.8** (GPT-5.5 85.3, Gemini 3.1 Pro 76.3)
- IFEval: **90.0** (Gemini 3.1 Pro 96.1, GPT-5.5 95.0, Opus 4.8 86.0)
- Writing Bench: **83.8**; IMO-AnswerBench: **81.8** (Gemini 3.1 Pro 90.0)
- GPQA-Diamond: **88.9** (Gemini 3.1 Pro 94.3*, GPT-5.5 93.6*, Opus 4.8 92.4)
- HLE, MCP Atlas, Toolathlon, GDPval, LiveCodeBench, MRCR/RULER: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 70/100.** FORTE 73.2 (ties Opus 4.6), BrowseComp 79.9 and RWSearch 78.8 are genuinely upper-mid agentic results — competitive with Gemini 3.1 Pro on FORTE/RWSearch — but no MCP-Atlas, Toolathlon or GDPval figure exists, and BrowseComp trails the best frontier models by ~5 points.
- **Reasoning: 76/100.** GPQA-Diamond 88.9%, IMO-AnswerBench 81.8%, IFEval 90.0% and Writing Bench 83.8% are upper-mid-band; no HLE or ARC-AGI score is published, and IFEval trails Gemini/GPT-5.5 by 5–6 points despite the newest Opus checkpoints regressing below it.
- **Context window: 90/100.** A native 1M window under LSA with hundreds of billions of 1M-context training tokens and linear-complexity serving — the ≥1M band — docked because no MRCR/RULER/needle-retrieval curve is published and independent long-context verification is absent.
- **Multimodal: 12/100.** Text-only (text in → text out) — the methodology's text-only band (10–20); image input only arrives in the separate 2.5 preview.
- **Coding: 74/100.** The strongest open-weights coding profile in its comparison set: SWE-bench Pro 59.5 (edges GPT-5.5's 58.6), Terminal-Bench 2.1 70.8 (near Gemini 3.1 Pro), SWE-Multilingual 77.3; below the frontier band on TB2.1 vs Opus 4.8 (78.9) and SWE-Pro vs Opus 4.7/4.8 (64.3/69.2).
- **Cost efficiency: 90/100.** $0.30–0.75/M input and $1.20–2.95/M output with free cached context reads, plus MIT weights for self-hosting — roughly 6–10× cheaper than GPT-5.5 for the same SWE-Pro class of work, the methodology's ~$0.6/$2.2 ≈ 92 range adjusted for the promo pricing volatility.
- **Overall Score: 64/100.** Best-fit recommendation: the open-weights agentic-coding value pick — GPT-5.5-class SWE-bench Pro and 1M context at a sixth of the price, MIT-licensed and self-hostable; text-only, with every number vendor-reported.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Meituan LongCat GitHub/Hugging Face model cards + longcat.ai launch blog, VentureBeat and MarkTechPost launch coverage, llmreference and Awesome Agents trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `LongCat_3.md`, using the same headings.
