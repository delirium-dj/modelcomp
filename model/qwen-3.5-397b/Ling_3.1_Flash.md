# Qwen 3.5 397B — findings by Ling 3.1 Flash

- Source: Alibaba (Qwen Team) / Qwen3.5-397B-A17B
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** The flagship open-weights variant of Alibaba's Qwen3.5 series (released 2026-02-15/16): a 397B-total/17B-active native vision-language MoE with 512 experts (10 routed + 1 shared active per token, expert intermediate dimension 1024), multi-step MTP training, and a 160K-class vocabulary. First open-weights release of the Qwen3.5 family.
- **Provider / access:** Alibaba Cloud Model Studio `qwen3.5-397b-a17b`; OpenRouter `qwen/qwen3.5-397b-a17b`; Ollama `qwen3.5:397b-cloud`; weights on Hugging Face (Apache 2.0).
- **Release / knowledge:** 2026-02-15/16 (trackers vary); knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-397b-a17b`
- **Context window:** 262,144 tokens native (`max_position_embeddings: 262144`), extensible to 1,010,000 via YaRN; Qwen3.5-Plus hosted sibling serves 1M by default.
- **Modalities:** text + image in (native vision-language); text out; tool calls; MTP serving.
- **Pricing (as of 2026-10-08):** Alibaba list $0.39 / 1M input, $2.34 / 1M output (raised from $0.3025/$1.925 on 2026-08-24, +29%/+22%).
- **Architecture:** 397B MoE, 17B active, 512 experts (10 routed + 1 shared), Apache 2.0.

### Raw benchmarks found

Qwen-reported (HF model card / Alibaba Cloud blog) for the 397B-A17B column; Epoch AI and trackers carry the same rows.

Agent / tool use:

- τ²-bench: **83.9%** (Epoch AI)
- BrowseComp: **69.0%** (simple context-folding) / **78.6%** (discard-all strategy)
- APEX: **24.9%** (Epoch AI)
- Search Agent (256K context-folding) and WideSearch (256K, no context management): reported on model card

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (vs Nemotron 3 Ultra 87.0% no-tools)
- Humanity's Last Exam: **28.7%**; HLE-Verified (Qwen's revised set): **37.6%**
- AIME 2024/2025: **88.9%** (Epoch AI)
- MMLU-Pro: **87.8%** (29-language MMLU-ProX average)

Coding:

- SWE-bench Verified: **76.4%** (vs Nemotron 3 Ultra 70.7%)
- SWE-bench Multilingual: **69.3%**
- SecCodeBench: **68.3%**
- Terminal-Bench 2: **52.5%**
- SciCode: **42.0%** (Epoch AI)

Multimodal:

- MMMU: **85.0%**

Long context:

- 262K native / 1.01M extensible; no separate MRCR/RULER/AA-LCR retrieval score found.

### Normalized scores (1–100)

- **Tool use: 76/100.** τ²-bench 83.9% and BrowseComp 78.6% (discard-all) are strong; APEX 24.9% and Terminal-Bench 2 52.5% cap the score.
- **Reasoning: 74/100.** GPQA 88.4%, AIME 88.9% and MMLU-Pro 87.8% are solid, but HLE 28.7% (37.6% on Qwen's own HLE-Verified) is the weakest reasoning row.
- **Context window: 78/100.** 262K native with a documented 1.01M YaRN extension; no independent long-context retrieval measurement found.
- **Multimodal: 80/100.** Native vision-language model with MMMU 85.0%; image+text input, text output.
- **Coding: 72/100.** SWE-bench Verified 76.4% and Multilingual 69.3% beat Nemotron 3 Ultra; SciCode 42.0% and Terminal-Bench 2 52.5% hold it down.
- **Cost efficiency: 85/100.** $0.39/$2.34 per 1M for Apache 2.0 open weights — far under contemporary closed flagships.
- **Overall Score: 76/100.** Mean of the five quality dims (76+74+78+80+72)/5 = 76.0; best fit for self-hosted multimodal agents and large open-weights fleets; see the `qwen-3.5` folder for the wider family (122B-A10B, 35B-A3B, 27B, 9B, Flash, Plus).

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08
- Method: public internet research (Qwen HF model card, Alibaba Cloud blog, SemiAnalysis InferenceX, Epoch AI, themodelbeat, BenchGecko, LLM Registry, Ollama); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
