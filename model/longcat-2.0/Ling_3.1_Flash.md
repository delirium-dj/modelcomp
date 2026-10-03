# LongCat 2.0 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / LongCat 2.0
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **EVIDENCE NOTE:** All LongCat-2.0 benchmarks are vendor-reported (Meituan, in-house unified harness unless marked * = cited from the compared model's official report). No independent third-party run was captured. The model is text-only — the Multimodal score reflects that.

## Model card

- **Name:** LongCat-2.0 (codename "Owl Alpha" — topped OpenRouter's usage charts before its identity was revealed)
- **Short description:** Meituan's June 2026 open-source MoE — 1.6T total / ~48B active (dynamic 33B–56B per token) with native 1M context, LongCat Sparse Attention, and N-gram Embedding; the first model of its scale pre-trained and deployed entirely on Chinese AI ASIC superpods.
- **Provider / access:** Meituan — LongCat Chat (longcat.ai), LongCat API (OpenAI- and Anthropic-compatible endpoints), OpenCode Zen ($0.30/$1.20 per 1M, cached $0.006), OpenRouter; MIT-licensed safetensors on HF (`meituan-longcat/LongCat-2.0`, plus INT8 variant) and GitHub; Transformers, vLLM, SGLang deployment; deep integration with Claude Code, OpenClaw, Hermes.
- **Release / knowledge:** 2026-06-29/30 (open-source announcement; weights initially "coming soon" on GitHub/HF per VentureBeat, later downloadable per LLM Reference). Knowledge cutoff not captured.
- **IDs:** `meituan-longcat/LongCat-2.0` (HF); repo folder `longcat-2.0`.
- **Context window:** 1,000,000 tokens (native; trained on hundreds of billions of tokens of 1M-context data).
- **Modalities:** Text in, text out (no vision encoder documented; the 2.5 Preview later "newly added" image understanding, implying 2.0 was text-only).
- **Pricing (as of 2026-10):** $0.30 input / $1.20 output per 1M (OpenCode Zen row), cached input $0.006 per 1M.
- **Architecture:** Sparse MoE — 1.6T total / ~48B active (dynamic 33B–56B per token); LongCat Sparse Attention (LSA: Streaming-aware Indexing, Cross-Layer Indexing, Hierarchical Indexing — fixes DSA's Lightning Indexer output discontinuity and quadratic scoring bottleneck; extends to the 3-step MTP module, with the target model sharing an index every 2 layers and all 3 draft steps sharing a single pass); N-gram Embedding (135B parameters, inherited from LongCat-Flash-Lite — expands parameters in sparse dimensions orthogonal to MoE); 3-step Multi-Token Prediction; 35T+ pre-training tokens across millions of accelerator-days on 50K+ domestic AI ASICs, no rollbacks or irrecoverable loss spikes.

### Raw benchmarks found

**Vendor-reported (Meituan launch table; in-house unified harness unless *):**

| Benchmark | LongCat-2.0 | Gemini 3.1 Pro | GPT-5.5 | Opus 4.6 | Opus 4.7 | Opus 4.8 |
|---|---|---|---|---|---|---|
| Terminal-Bench 2.1 | **70.8** | 70.7* | 73.8* | – | 71.7* | 78.9* |
| SWE-bench Pro | **59.5** | 54.2* | 58.6* | 57.3* | 64.3* | 69.2* |
| SWE-bench Multilingual | **77.3** | 76.9* | – | 77.8* | 80.5* | 84.8* |
| FORTE | **73.2** | 70.3 | 77.8 | 73.2 | 77.6 | 77.2 |
| BrowseComp | **79.9** | 85.9* | 84.4* | 84.0* | 79.3* | 84.3* |
| RWSearch | **78.8** | 76.3 | 85.3 | 81.3 | 79.3 | 77.3 |
| IFEval | **90.0** | 96.1 | 95.0 | 92.2 | 88.7 | 86.0 |
| Writing Bench | **83.8** | 83.7 | 84.7 | – | 85.3 | 85.2 |
| IMO-AnswerBench | **81.8** | 90.0 | 79.5 | 75.3* | 81.8 | 75.3 |
| GPQA-diamond | **88.9** | 94.3* | 93.6* | 91.3* | 94.2* | 92.4 |

Harness footnotes: Terminal-Bench 2.1 via Claude Code, 8c16g per sandbox, temp 1.0 / top_k −1 / top_p 0.95, 6-hour agent timeout; SWE-bench series via Claude Code, 4c8g, temp 1.0 / top_k −1 / top_p 1, problematic tasks corrected.

**Other captured:** MRCR v2 (8-needle) **63.7** (AI/TLDR); SWE-bench Pro rank 13/46 (LLM Reference). Minor source conflicts: AI/TLDR lists IMO-AnswerBench 80.0 and GPQA-Diamond 87.9 (launch table says 81.8 / 88.9).

## Scores

- **Tool use: 67/100.** FORTE 73.2 (general corporate workflow simulator), BrowseComp 79.9 and RWSearch 78.8 (agentic web search — strong); no Tau-bench/MCP-Atlas measurement found.
- **Reasoning: 69/100.** GPQA-diamond 88.9 (in-house) and IMO-AnswerBench 81.8 are strong; no HLE or AIME-class score found; peers in the table (Opus 4.8 92.4, GPT-5.5 93.6) show the frontier gap.
- **Context window: 91/100.** Native 1M with LSA and 1M-context training data; MRCR v2 (8-needle) 63.7 is mid-pack for 1M-class models; no MRCR-v2-class retrieval benchmark beyond that.
- **Multimodal: 15/100.** Text-only model (image understanding arrived with the 2.5 Preview).
- **Coding: 71/100.** Terminal-Bench 2.1 70.8 (via Claude Code), SWE-bench Pro 59.5 (edges GPT-5.5's 58.6), SWE-bench Multilingual 77.3; no DeepSWE/LiveCodeBench/SciCode scores found. Upper-mid, behind Opus 4.8 (78.9/69.2/84.8).
- **Cost efficiency: 94/100.** $0.30/$1.20 per 1M with $0.006 cached input and MIT open weights — cheap for a 1.6T-class agentic model.
- **Overall Score: 63.0/100.** Mean of Tool use 67, Reasoning 69, Context window 91, Multimodal 15, Coding 71 = 63.0 (Cost efficiency excluded per methodology).

> **Gap vs folder average (71.6): −8.6.** The text-only Multimodal score (15) is the main driver; peers appear to have weighted the strong agentic-search results (BrowseComp 79.9, RWSearch 78.8) and the SWE-bench Pro win over GPT-5.5 more heavily. All vendor-reported numbers are included above.

## Notes

- Verification trail: Meituan launch blog (longcat.ai/blog/longcat-2.0), GitHub `meituan-longcat/LongCat-2.0` and HF `meituan-longcat/LongCat-2.0` (+ INT8 repo; LSA and N-gram Embedding design notes), VentureBeat (2026-06-29, "weights coming soon" at announcement, Chinese-chip training), NYU RITS (dynamic 33B–56B active, domestic-chip framing), AI/TLDR (MRCR v2 63.7, training stack), LLM Reference (MIT safetensors downloadable, SWE-bench Pro rank 13/46), OpenCode Zen docs (pricing row).
- Known conflicts: AI/TLDR's IMO-AnswerBench 80.0 / GPQA 87.9 vs launch table 81.8 / 88.9; "weights coming soon" (June 29) vs downloadable weights (later listings) — weights landed after launch.
- Open questions: independent third-party runs (SWE-bench Pro 59.5, TB 2.1 70.8 under the documented Claude Code harness); MRCR v2 replication; whether LSA changes long-context retrieval quality at 1M.
- Future sources: third-party evals, LongCat-2.5 (see the `longcat_2.5_preview` folder), LongCat-2.0 adoption data on OpenRouter.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash LongCat 2.0 Overall=63.0 (Tool=67 Reasoning=69 Context=91 Multimodal=15 Coding=71 Cost=94; text-only 1.6T/48B MIT; vendor benchmarks only)`
