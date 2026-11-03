# Qwen 3.5 122B-A10B — findings by Mercury 3

- Source: Alibaba Qwen/Qwen3.5-122B-A10B
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-122B-A10B (queue slug `qwen-3.5-122b-a10b`)
- **Short description:** Alibaba Qwen's middle-size open-weights (Apache 2.0) native multimodal MoE (released 2026-02-23): 122B total/10B active with Gated DeltaNet hybrid attention, 262K native context extensible to ~1M, image/video input — a strong mid-size vision-agent model.
- **Provider / access:** Qwen Cloud / Alibaba Model Studio hosted (`qwen3.5-122b-a10b`), open weights on Hugging Face; 25 providers per models.dev (incl. OpenRouter $0.26/$2.08, SiliconFlow $0.26/$2.08).
- **Release / knowledge:** Released 2026-02-23; knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-122B-A10B` (HF; `qwen3.5-122b-a10b` API; thinking on by default).
- **Context window:** 262,144 tokens native, extensible to ~1,010,000 (YaRN); max output 65,536.
- **Modalities:** text + image + video input, text output; reasoning; tool calls; MTP.
- **Pricing (as of 2026-11-03):** open weights (Apache 2.0); hosted $0.40/$3.20 (Alibaba) to $0.11–$0.29/$0.90–$2.40 on gateways.
- **Architecture:** 122B total / 10B active MoE, 48 layers, 256 experts (8 routed + 1 shared), Gated DeltaNet + Gated Attention hybrid; Apache 2.0, open weights.

### Raw benchmarks found

Agent / tool use (Qwen card / independent):

- BFCL-V4: **72.2%**; TAU2-Bench: **79.5%**; BrowseComp: **63.8%**; BrowseComp-zh: 69.9%; WideSearch: 60.5%; HLE w/ tool: **47.5%**; Seal-0: 44.1%
- DeepPlanning: 24.1%; VITA-Bench: 33.6%; AndroidWorld: 66.4%; OSWorld-Verified: 58.0%; ScreenSpot Pro: 70.4%

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (84.85% independent); SuperGPQA: 67.1%; MMLU-Pro: 86.7%; HLE: 25.3% (CoT); HMMT Feb 2025: 91.4%; IFBench: 76.1%
- AA-LCR: **66.9%**; LongBench v2: 60.2%; no ARC/II figure verified in sources reviewed

Coding:

- SWE-bench Verified: **72.0%**; Terminal Bench 2: 49.4%; LiveCodeBench v6: 78.9%; FullStackBench en: 62.6%; CodeForces: 2100; OJBench: 39.5%

Long context:

- 262K native (~1M extensible); AA-LCR 66.9%; LongBench v2 60.2%.

Multimodal:

- image/video in; MMMU 83.9%; MMMU-Pro 76.9%; MathVision 86.2%; CharXiv (RQ) 77.2%; OCRBench 92.1%; VideoMME 87.3%/83.9%; MLVU 87.3%; TIR-Bench 53.2% (CI).

### Normalized scores (1–100)

- **Tool use: 79/100.** BFCL 72.2%, TAU2 79.5%, BrowseComp 63.8%, HLE w/tools 47.5% — solid; capped by DeepPlanning 24.1% and OSWorld 58%.
- **Reasoning: 80/100.** GPQA 86.6%, MMLU-Pro 86.7%, HMMT 91.4%; capped by HLE 25.3%, LCR 66.9%, and no ARC/II figures.
- **Context window: 80/100.** 262K native (~1M extensible) with moderate LCR 66.9%.
- **Multimodal: 88/100.** Image + video input with strong visual rows (MathVision 86.2%, OCRBench 92.1%, VideoMME 87.3%, AndroidWorld 66.4%); text-only output caps it.
- **Coding: 79/100.** SWE Verified 72%, FullStack 62.6%, LCB 78.9%; capped by TB2 49.4% and OJBench 39.5%.
- **Cost efficiency: 90/100.** Apache 2.0 open weights + $0.40/$3.20 (cheaper on gateways) — excellent value.
- **Overall Score: 81/100.** Mean of (79+80+80+88+79)/5 = 81.2 → 81. A strong open mid-size multimodal agent; HLE and long-context rows are the main caveats.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Qwen official model card, models.dev registry, independent re-runs via HF); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmark rows are Qwen-published; AA/BenchLM do not list this model — flagged.
- Reference URLs:
  - [Qwen3.5-122B-A10B model card (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)
  - [Qwen3.5 blog (Qwen)](https://qwen.ai/blog?id=qwen3.5)
  - [Qwen3.5-122B-A10B — models.dev registry (25 providers)](https://models.dev/models/alibaba/qwen3.5-122b-a10b)
