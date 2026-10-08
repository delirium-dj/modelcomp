# Qwen 3.5 — findings by Ling 3.1 Flash

- Source: Alibaba (Qwen Team) / Qwen3.5-397B-A17B (Qwen 3.5 family flagship)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5
- **Short description:** Alibaba's open-weights Qwen3.5 series (announced Feb 2026), flagship Qwen3.5-397B-A17B: a 397B-total/17B-active native vision-language MoE (512 experts, 10 routed + 1 shared active per token, expert intermediate dim 1024, multi-step MTP). Family variants: 397B-A17B, 122B-A10B, 35B-A3B, 27B, 9B, plus hosted Qwen3.5-Plus and Qwen3.5-Flash.
- **Provider / access:** Alibaba Cloud Model Studio `qwen3.5-397b-a17b`; OpenRouter `qwen/qwen3.5-397b-a17b` (OpenAI-compatible); Ollama `qwen3.5:397b-cloud`; hosted siblings `qwen3.5-plus` / `qwen3.5-flash`.
- **Release / knowledge:** 2026-02-15/16 (trackers vary 02-13→02-17); knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-397b-a17b` (Hugging Face, Apache 2.0).
- **Context window:** 262,144 native, extensible to 1,010,000 via YaRN (config.json `max_position_embeddings: 262144`); Qwen3.5-Plus serves 1M by default.
- **Modalities:** text + image in (native vision-language); text out; tool calls; adaptive tool use on hosted variants; MTP serving.
- **Pricing (as of 2026-10-08):** Alibaba list $0.39 / 1M input, $2.34 / 1M output (raised from $0.3025/$1.925 on 2026-08-24); qwen3.5-plus $0.115/$0.688 (≤128K), tiered up to $0.573/$3.44 (256K–1M).
- **Architecture:** 397B MoE, 17B active, 512 experts (10 routed + 1 shared), Apache 2.0; hybrid linear-attention design in smaller variants (35B-A3B).

### Raw benchmarks found

Qwen-reported (HF model card / Alibaba Cloud blog) for the 397B-A17B column unless noted; Epoch AI and trackers carry the same rows.

Agent / tool use:

- τ²-bench: **83.9%** (themodelbeat/Epoch)
- BrowseComp: **69.0%** (simple context-folding) / **78.6%** (discard-all strategy, DeepSeek-V3.2/Kimi K2.5-style)
- Search Agent (256K context-folding): reported on model card; WideSearch at 256K without context management
- APEX: **24.9%** (Epoch AI)

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (vs Nemotron 3 Ultra 87.0% no-tools)
- Humanity's Last Exam: **28.7%**; HLE-Verified (Qwen's revised set): **37.6%**
- AIME 2024/2025: **88.9%** (Epoch AI)
- MMLU-Pro: **87.8%** (29-language MMLU-ProX averaged)

Coding:

- SWE-bench Verified: **76.4%** (vs Nemotron 3 Ultra 70.7%)
- SWE-bench Multilingual: **69.3%**
- SecCodeBench: **68.3%**
- Terminal-Bench 2: **52.5%**
- SciCode: **42.0%** (Epoch AI)

Multimodal:

- MMMU: **85.0%** (multimodal understanding)

Long context:

- 262K native / 1M extensible; no separate MRCR/RULER/AA-LCR retrieval score found.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench 83.9% and BrowseComp 78.6% (discard-all) are strong for the tier; APEX 24.9% and Terminal-Bench 2 52.5% cap it.
- **Reasoning: 75/100.** GPQA 88.4%, AIME 88.9% and MMLU-Pro 87.8% are solid, but HLE 28.7% (37.6% on Qwen's own HLE-Verified revision) is the family's weakest reasoning row.
- **Context window: 78/100.** 262K native with a documented 1M YaRN extension (hosted Plus serves 1M by default); no independent long-context retrieval measurement found.
- **Multimodal: 80/100.** Native vision-language model with MMMU 85.0%; image+text input, text output.
- **Coding: 72/100.** SWE-bench Verified 76.4% and Multilingual 69.3% beat Nemotron 3 Ultra, but Terminal-Bench 2 52.5% and SciCode 42.0% hold the score down.
- **Cost efficiency: 85/100.** $0.39/$2.34 per 1M for Apache 2.0 open weights — an order of magnitude under contemporary closed flagships; smaller variants go to $0.065/$0.26 (Flash).
- **Overall Score: 77/100.** Mean of the five quality dims (78+75+78+80+72)/5 = 76.6 → 77; best fit for open-weights multimodal agents and cost-sensitive production fleets, with the 27B–122B variants covering edge deployment.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08
- Method: public internet research (Qwen HF model card, Alibaba Cloud Model Studio, SemiAnalysis InferenceX, Epoch AI, themodelbeat, BenchGecko, Ollama); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
