# Qwen 3.5 397B — findings by Mercury 3

- Source: Alibaba Qwen/Qwen3.5-397B-A17B
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-397B-A17B (queue slug `qwen-3.5-397b`)
- **Short description:** Alibaba Qwen's large open-weights (Apache 2.0) native multimodal MoE (released 2026-02-15): 397B total/17B active with Gated DeltaNet hybrid attention, 262K native context extensible to ~1M, image/video input, unified vision-language foundation; hosted as Qwen3.5-Plus with 1M context.
- **Provider / access:** Qwen Cloud / Alibaba Model Studio hosted (`qwen3.5-397b-a17b`), open weights on Hugging Face; 39 providers per models.dev (incl. SiliconFlow $0.39/$2.34, AIHubMix $0.164/$0.986).
- **Release / knowledge:** Released 2026-02-15; knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (HF; `qwen3.5-397b-a17b` API; thinking on by default).
- **Context window:** 262,144 tokens native, extensible to ~1,010,000 (YaRN); max output 65,536.
- **Modalities:** text + image + video input, text output; reasoning; tool calls; MTP.
- **Pricing (as of 2026-11-03):** open weights (Apache 2.0); hosted $0.60/$3.60 (Alibaba) to $0.16–$0.45/$1.03–$3.00 on gateways.
- **Architecture:** 397B total / 17B active MoE, 60 layers, 512 experts (10 routed + 1 shared), Gated DeltaNet + Gated Attention hybrid; Apache 2.0, open weights.

### Raw benchmarks found

Agent / tool use (Qwen card / independent):

- BFCL-V4: **72.9%**; TAU2-Bench: **86.7%**; BrowseComp: **78.6%** (discard-all) / 69.0% (folding); HLE w/ tool: **48.3%**; WideSearch: **74.0%**; MCP-Mark: 46.1%; VITA-Bench: 49.7%; Tool Decathlon: 38.3%; DeepPlanning: 34.3%
- Apex Agents: **13.6%** (Mercor/HF independent)

Reasoning / knowledge:

- GPQA Diamond: **88.4%**; SuperGPQA: 70.4%; MMLU-Pro: 87.8%; HLE: **28.7%** (37.6% HLE-Verified); AIME 2026: **91.3%**; HMMT Feb 2025: 94.8%; LongBench v2: 63.2%
- AA-LCR: **68.7%**; no ARC/II figure verified in sources reviewed

Coding:

- SWE-bench Verified: **76.4%**; SWE-bench Multilingual: **69.3%**; SecCodeBench: **68.3%**; Terminal Bench 2: 52.5%; LiveCodeBench v6: 83.6%

Long context:

- 262K native (~1M extensible); AA-LCR 68.7%; LongBench v2 63.2%.

Multimodal:

- image/video in; MMMU 85.0%; MMMU-Pro 79.0%; MathVision 88.6%; CharXiv (RQ) 80.8%; RealWorldQA 83.9%; OCRBench 93.1%; VideoMME 87.5%/83.7%; OSWorld-Verified 62.2%; AndroidWorld 66.8%.

### Normalized scores (1–100)

- **Tool use: 80/100.** BFCL 72.9%, TAU2 86.7%, BrowseComp 78.6%, HLE w/tools 48.3% — solid; capped by DeepPlanning 34.3%, Tool Decathlon 38.3%, and Apex 13.6%.
- **Reasoning: 80/100.** GPQA 88.4%, AIME 91.3%, HMMT 94.8%; capped by HLE 28.7%, LCR 68.7%, and no ARC/II figures.
- **Context window: 80/100.** 262K native (~1M extensible) with moderate LCR 68.7%.
- **Multimodal: 90/100.** Image + video input with top visual scores (MMMU 85%, VideoMME 87.5%, OCRBench 93.1%, AndroidWorld 66.8%); text-only output caps it.
- **Coding: 82/100.** SWE Verified 76.4%, Multilingual 69.3%, SecCodeBench 68.3%, LCB 83.6%; capped by TB2 52.5%.
- **Cost efficiency: 92/100.** Apache 2.0 open weights + $0.60/$3.60 (cheaper on gateways) — excellent value.
- **Overall Score: 82/100.** Mean of (80+80+80+90+82)/5 = 82.4 → 82. A strong open multimodal MoE; HLE and agentic-fringe rows are the main caveats.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Qwen official model card, models.dev registry, Mercor Apex leaderboard via HF); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmark rows are Qwen-published; AA/BenchLM do not list this model — flagged.
- Reference URLs:
  - [Qwen3.5-397B-A17B model card (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)
  - [Qwen3.5 blog (Qwen)](https://qwen.ai/blog?id=qwen3.5)
  - [Qwen3.5-397B-A17B — models.dev registry (39 providers)](https://models.dev/models/alibaba/qwen3.5-397b-a17b)
