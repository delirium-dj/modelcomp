# Muse Spark Open — findings by DeepSeek 4.1 Flash

- Source: Meta / Muse Spark Open (`meta-models/Muse-Spark-Open-816B-A42B`; hosted as `meta/muse-spark-open` on OpenRouter and `opencode/muse-spark-open` on Zen)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta Superintelligence Labs' open-weights MoE foundation model (released 2026-10-15) — 816B total / 42B active with a 1.8B Perception Encoder, natively multimodal, built for agentic coding and long-horizon repository work. The most capable US open-weight model at release.
- **Provider / access:** Open weights on Hugging Face (`meta-models/Muse-Spark-Open-816B-A42B`, BF16 + NVFP4) under the Muse Model License; served via OpenRouter (`meta/muse-spark-open`), Baseten, and self-host (SGLang, vLLM, TensorRT-LLM, MLX). Requires ≥700GB VRAM (NVFP4) / 2TB (BF16); runs on 2× Mac Studio M5 Ultra (MLX).
- **Release / knowledge:** 2026-10-15. Knowledge cutoff not disclosed.
- **IDs:** `muse-spark-open`; HF repo `meta-models/Muse-Spark-Open-816B-A42B`.
- **Context window:** 1,048,576 (1M) at inference; up to 131,072 max output.
- **Modalities:** text + image + video + audio in; text (JSON) out; reasoning effort low/medium/high/xhigh (default xhigh).
- **Pricing (as of 2026-11-05):** weights are $0 (license conditions apply: "Built with Muse Spark Open" attribution; Model-as-a-Service >$20M revenue requires a separate Meta agreement). Hosted API rates vary by provider; self-host compute is the real cost.
- **Architecture:** Mixture-of-Experts Transformer (62 layers, 256 experts, 8 active/token, GQA 128Q/16KV) + 1.8B perception encoder; multilingual (100+ languages).

### Raw benchmarks found

Agent / tool use (xhigh, vendor model card unless noted):

- **MCP-Atlas 89.2%** (best in Meta's comparison table); **Toolathlon 72.8%**; OSWorld Verified **80.4%**; JobBench **61.8%** (best in table)
- GDPval-AA v2 **1401 Elo** (AA-normalized 45.1%); AA-Briefcase 1278; AA TB2.1 **76.4%** (AA)
- AA AutomationBench 49.7%; GDP.pdf 18.6%; **AA Terminal-Bench 4.0 8.1%** (independent harness — weak); MazeBench 0%
- Safety: StrongREJECT v2 adaptive attack success **0.5%** (best in table); FORTRESS ARS 5.8 / ORS 17.4; 99.2% jailbreak refusal (internal)

Reasoning / knowledge:

- GPQA Diamond **89.0%**; HLE **61.0% w/ tools**; **HLE-Diamond (no tools) 26.1%** (best in table); AA Omniscience **25** (best in table)
- AA-HLE 43.9%; AA-Omniscience index 25.8 / accuracy 42.0% / hallucination 28.0%
- **AA Intelligence Index 24.7%** (current AA read) vs **39** on Meta's card — index-version conflict to surface
- AA-LCR **78.3%**; MLCR-AA 7.8%; CritPt 14.9% (low)

Coding:

- DeepSWE 1.1 **60%**; SWE-Atlas-QnA **58%**; Terminal-Bench 2.1 **76.4%**; AA-SciCode 58.4%; AA Terminal-Bench 4.0 8.1% (weak spot)

Multimodal / long context:

- ZeroBench (tools) **50.0%** (best in table); BabyVision 80.2%; SimpleVQA 73.6%; WorldVQA 49.4%; IntPhys2 68.3%; VideoMMEv2 61.5%; AA-MMMU-Pro 80.9%; Design Arena 1301
- 1M context; AA-LCR 78.3% (no MRCR/GraphWalks row published)

### Normalized scores (1–100)

- **Tool use: 76/100.** MCP-Atlas 89.2%, Toolathlon 72.8%, OSWorld 80.4% and AA TB2.1 76.4% make it a genuinely capable open agentic base; capped by the independent AA Terminal-Bench 4.0 collapse (8.1%), MazeBench 0% and AutomationBench-AA 49.7%.
- **Reasoning: 70/100.** GPQA 89.0% and HLE 61.0% with tools are strong for the open tier, but AA Index 24.7 (v5.0.1), CritPt 14.9% and MLCR-AA 7.8% cap it.
- **Context window: 94/100.** Full 1M window (≥1M band) with 131K output; AA-LCR 78.3% is mid, and no deep-retrieval benchmark (MRCR/RULER/GraphWalks) is published.
- **Multimodal: 86/100.** Text + image + video + audio in, text out — the widest input coverage among tracked open models; strong tools-mode vision rows (ZeroBench 50 best-in-table) but weaker video depth (VideoMME 61.5) and no non-text output.
- **Coding: 68/100.** DeepSWE 60% and TB2.1 76.4% are solid open-tier results; SWE-Atlas 58% and the AA TB4.0 8.1% harness weakness keep it well below frontier coding.
- **Cost efficiency: 92/100.** $0 license on 816B/42B open weights with BF16 + NVFP4 checkpoints; attribution and >$20M MoAAS clauses apply, and serving an 816B model needs serious hardware.
- **Overall Score: 79/100.** (76 + 70 + 94 + 86 + 68) / 5 = 78.8 → 79. Best fit: teams that need self-hostable, multimodal agentic capability with strong tool/safety behavior and can absorb the serving cost of an 816B MoE.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-05
- Method: fresh public internet research (Meta HF model card + eval methodology, BenchLM model page 2026-11-05, Artificial Analysis rows, launch coverage). Vendor-card rows are separated from independent AA rows; the AA-index version conflict (39 vs 24.7), the AA TB4.0 weakness and the license conditions are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Muse Spark Open model card (Hugging Face)](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Meta AI Research — Introducing Muse Spark Open](https://research.meta.ai/blog/muse-spark-open)
  - [BenchLM — Muse Spark Open benchmark scores](https://benchlm.ai/models/muse-spark-open)
  - [Artificial Analysis — Muse Spark Open](https://artificialanalysis.ai/models/muse-spark-open)
  - [OpenRouter — meta/muse-spark-open](https://openrouter.ai/meta/muse-spark-open)
- Future sources: add a new file next to this one, e.g. `Muse_Spark_Open.md`, using the same headings.
