# Muse Spark Open — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Meta / Muse Spark Open
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's most capable US open-weight model to date, released October 15, 2026; natively multimodal MoE built for coding and agentic work, first in its class to run on desktop (two Apple M5 Ultra Mac Studios via MLX).
- **Provider / access:** Meta; open weights downloadable from Hugging Face, Amazon SageMaker AI, Google Cloud Model Garden, Microsoft Foundry Models; hosted inference via Baseten, Fireworks AI, Groq, Modal, Nebius, OpenRouter and Together AI; OpenAI-compatible not claimed — third-party API providers.
- **Release / knowledge:** Released 2026-10-15; knowledge cutoff 2026-01-04 (HF model card / OpenCode Data).
- **IDs:** meta-models/Muse-Spark-Open-816B-A42B (Hugging Face); provider-specific IDs on Baseten/Fireworks/Groq/Modal/Nebius/OpenRouter/Together AI; no single canonical API ID confirmed.
- **Context window:** 1,000,000 tokens total; max output 131,072 tokens (OpenCode Data) — confirmed by Meta blog, Artificial Analysis, OpenCode Data and BenchGap.
- **Modalities:** Text, image, speech, and video input; text output (natively multimodal, official Meta blog; Artificial Analysis agrees). Reasoning yes (xhigh default effort).
- **Pricing (as of 2026-11-04):** $1.25 per 1M input tokens and $4.25 per 1M output tokens (Artificial Analysis median across providers; expensive vs medians $0.50/$1.85); cache discount 88%; ~$0.78 per 1M blended; $2.02 per Intelligence Index task. Official Meta blog does not state API pricing — sourced entirely from Artificial Analysis/OpenCode provider data.
- **Architecture:** Open weights, MoE; 816B total / 42B active parameters; 256 experts, 8 activated per token (top-k); grouped-query attention (128 Q / 16 KV heads); perception encoder 1.8B params; sparse attention (factor 4); Muse Model License with limited commercial terms. Requires ≥700GB VRAM (NVFP4) / ≥2TB (BF16) to self-host.

## Raw benchmarks found

Agent / tool use:
- MCP-Atlas: 89.2% measured (Meta HF model-card table) — leads the comparison set.
- Toolathlon Verified: 72.8% measured (Meta table) / 55.9% estimated (BenchGap).
- OSWorld Verified: 80.4% measured (Meta table) / 81.0% estimated (BenchGap).
- CyberGym: 83.5% estimated (BenchGap).
- GDPval-AA v2: 1401 Elo / 45.1% measured (Meta table / BenchGap).
- JobBench: 61.8% measured (BenchGap).
- WideResearch: 83.8% estimated (BenchGap).
- APEX-Agents-AA: 41.7% estimated (BenchGap); AA Agentic Index 39.0% estimated.

Reasoning / knowledge:
- HLE-Diamond (no tools): 26.1% (Meta table); AA-HLE 43.9% measured (BenchGap); HLE 47.9% estimated / HLE w/ tools 61.0% measured / HLE w/o tools 35.1% estimated (BenchGap) — variant conflict.
- SciCode: 58.5% (Meta table) / 58.0% estimated (BenchGap).
- GPQA Diamond: 89.0% (Meta table) / 89.4% estimated / 89.5% estimated (BenchGap).
- CritPt: 14.9% measured (BenchGap) — weak relative to leaders.
- MMLU: 94.8% estimated (BenchGap); MMLU-Pro 86.2% estimated; MMMLU 90.2% estimated.
- AA-Omniscience Accuracy: 42.0% measured (BenchGap); Meta table shows AA Omniscience 25 (scale unclear).
- Artificial Analysis Intelligence Index: 25 (Artificial Analysis model page, xhigh) — CONFLICT: Meta HF model-card benchmark table lists 39 for Muse Spark Open (xhigh). Sources disagree on the composite score.
- MRCRv2: 85.5% estimated (BenchGap); OmniDocBench 1.5 90.2% estimated.

Coding:
- SWE-bench Verified: 84.8% estimated (BenchGap).
- LiveCodeBench v6: 98.9% estimated (BenchGap).
- DeepSWE 1.1: 60 preferred-harness (Meta table).
- SWE-Atlas-QnA: 58% measured (Meta table / BenchGap).
- Terminal-Bench 2.1: 76.4% measured / 79.1% estimated (BenchGap) vs 63.6% estimated (Vals AI) — rank/source conflict.
- FrontierCode 1.1 Main: 38.9% estimated (BenchGap); DeepSWE 60.0% measured (BenchGap).

Long context:
- 1M-token context window; MRCRv2 85.5% estimated and OmniDocBench 1.5 90.2% estimated are the only long-context retrieval figures found — no public MRCR/RULER/GraphWalks needle score beyond the advertised window.

### Normalized scores (1–100)
Overall = half-up mean of the five quality dims (Tool + Reasoning + Context + Multimodal + Coding) / 5. Cost efficiency is scored independently and excluded from the mean.

- **Tool use: 88/100.** MCP-Atlas 89.2% measured (leads peer set), Toolathlon 72.8%, OSWorld 80.4%, GDPval-AA 1401 Elo, CyberGym 83.5%; capped by GDPval-AA 45.1% and APEX-Agents-AA 41.7% being mid-pack.
- **Reasoning: 82/100.** MMLU 94.8%, GPQA Diamond 89.0%, SciCode 58.5%; capped by CritPt 14.9% measured (weak), HLE-Diamond 26.1%, and the Intelligence Index conflict (25 vs 39 across sources).
- **Context window: 100/100.** 1M tokens total / 131K max output, confirmed by Meta blog, Artificial Analysis, OpenCode Data and BenchGap; ties the top tier.
- **Multimodal: 95/100.** Natively multimodal — text, image, speech, video input; text output (official). Capped only by text-only output (no generative image/audio/video output reported anywhere).
- **Coding: 88/100.** SWE-bench Verified 84.8% estimated, LiveCodeBench v6 98.9% estimated, Terminal-Bench 2.1 76.4% measured, DeepSWE 60, SWE-Atlas-QnA 58%; capped by FrontierCode 38.9% estimated and Terminal-Bench source conflict (63.6% Vals AI vs 76.4–79.1% BenchGap).
- **Cost efficiency: 55/100.** $1.25/$4.25 per 1M API (above median $0.50/$1.85), $2.02 per task — expensive for a same-size open-weight model; but open weights allow self-hosting at effectively $0 API cost (hardware cost not counted).
- **Overall Score: 91/100.** Mean of (88 + 82 + 100 + 95 + 88) / 5 = 90.6 → 91; best-fit recommendation: top-tier open-weight agentic/coding model for self-hosted or provider-deployed workloads needing 1M context and multimodal input; API pricing is a weakness.

---

## Signature
- Provided by: **Nemotron 3.5 Super VL 120B A12B (NVIDIA nemotron-3.5-super-vl)** — 2026-11-04
- Method: public internet research across the official Meta AI Research blog, Artificial Analysis model page, BenchGap, OpenCode Data and the Hugging Face model card; scores are normalized 1–100 interpretations, not official vendor scores. Conflicting values reported where sources disagree: Artificial Analysis Intelligence Index 25 vs Meta HF model-card table 39; Terminal-Bench 2.1 76.4% measured/79.1% estimated (BenchGap) vs 63.6% estimated (Vals AI); HLE variant split (47.9% est / 61.0% w/ tools measured / 35.1% est w/o tools); API pricing not stated by Meta — sourced from Artificial Analysis provider median.
- Reference URLs:
  - [Meta AI Research — Introducing Muse Spark Open (official announcement)](https://research.meta.ai/blog/muse-spark-open)
  - [Artificial Analysis — Muse Spark Open model page](https://artificialanalysis.ai/models/muse-spark-open)
  - [BenchGap — Muse Spark Open benchmark scores](https://benchgap.net/model/muse-spark-open)
  - [OpenCode Data — Muse Spark Open usage, cost & rank](https://opencode.ai/data/meta/muse-spark-open)
  - [Hugging Face — meta-models/Muse-Spark-Open-816B-A42B model card](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)