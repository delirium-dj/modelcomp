# Qwen3.5-122B-A10B — findings by MiMo 2.6 Flash

- Source: Alibaba/Qwen (`Qwen/Qwen3.5-122B-A10B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-122B-A10B
- **Short description:** Alibaba's mid-size open-weight MoE reasoning model of the Qwen3.5 generation (~125B total / 10B active parameters per Artificial Analysis); text+image understanding with strong GPQA/MMLU-Pro and SWE-class coding for its cost, aimed at efficient hosted and self-served workloads.
- **Provider / access:** Open weights (Apache 2.0) served by Alibaba Cloud Model Studio / PAI-EAS, DeepInfra, SiliconFlow and OpenRouter; Chat Completions style APIs. Ships reasoning and non-reasoning modes (separately tracked by Artificial Analysis).
- **Release / knowledge:** released 2026-02-24 (Artificial Analysis; LLMReference); knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-122b-a10b` (Model Studio), `deepinfra/qwen3.5-122b-a10b`, `siliconflow/qwen3.5-122b-a10b`, OpenRouter `qwen/qwen3.5-122b-a10b`; weights `Qwen/Qwen3.5-122B-A10B`. No Free ID verified on OpenCode Zen.
- **Context window:** 262,144 tokens (262K, Artificial Analysis model card; some provider tables list 256K); max output not separately published by the vendor.
- **Modalities:** text and image in; text out; reasoning mode yes; JSON / tool use yes (LLMReference capability flags).
- **Pricing (as of 2026-10-21):** Alibaba API $0.40 in / $3.20 out per 1M (Artificial Analysis; blended $0.68 at 7:2:1 cache ratio); cheaper routes from $0.26 / $2.08 (LLMReference tracked providers). Paid; no $0 tier verified.
- **Architecture:** MoE, ~125B total / 10B active at inference (Artificial Analysis); Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (**agent**): **49.4%** (BenchLM mirror)
- OSWorld-Verified: **58%** (BenchLM)
- BrowseComp: **63.8%** (BenchLM)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no standalone public figure found (contributes to the AA Index run)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (BenchLM compare; LLMReference independently lists 85.7%)
- HLE (Humanity's Last Exam): **25.3%** (LLMReference)
- MMLU-Pro: **86.7%** (LLMReference)
- Artificial Analysis Intelligence Index: **16** (reasoning mode, Index v4.3.2 — well above the size-class median of 8; non-reasoning mode 18 estimated; Artificial Analysis)
- BenchLM overall point estimate: **41.7 (#125/211)** (BenchLM model page)
- LCR / MLCR / CritPt / Omniscience: no standalone public figures found

Coding:

- SWE-bench Verified: **72.0%** (LLMReference, BenchLM)
- LiveCodeBench v6: **78.9%** (BenchLM, LLMReference)
- SciCode / AA-SciCode: no standalone public figure found
- DeepSWE: no verified public score found

Long context:

- LongBench v2: **60.2%** (BenchLM)
- No MRCR/RULER figure found

Multimodal:

- MMMU: **83.9%** (BenchLM)
- MMVU: **74.7%** (BenchLM)
- MMMU-Pro: **76.9%** (LLMReference, BenchLM)

Performance notes:

- ~124–142 output tok/s, TTFT ~2.3–2.5 s on Alibaba API (Artificial Analysis); reasoning mode averages ~17K output tokens per Index task (verbose).

### Normalized scores (1–100)

- **Tool use: 66/100.** Terminal-Bench 2.0 49.4% sits in the mid band, OSWorld-Verified 58% and BrowseComp 63.8% are solid; missing Tau3/GDPval/Claw rows keep it under 70.
- **Reasoning: 84/100.** GPQA 86.6% and MMLU-Pro 86.7% are near-frontier; HLE 25.3% is strong for a 10B-active model but below the 40%+ frontier reference, and the AA Index (16, v4.3.2) is size-class-leading rather than absolute-frontier.
- **Context window: 72/100.** 262K native lands in the 200K–500K tier (200K = 70 reference); no public 512K+ retrieval measurement.
- **Multimodal: 72/100.** Image + text input, text output (no video/audio, no non-text out) with strong vision scores (MMMU 83.9%, MMMU-Pro 76.9%) — upper end of the image-in tier.
- **Coding: 76/100.** SWE-bench Verified 72.0% and LiveCodeBench v6 78.9% are strong mid-tier; Terminal-Bench 2.0 49.4% (agentic coding) and missing DeepSWE/SciCode cap it.
- **Cost efficiency: 88/100.** $0.40/$3.20 on Alibaba API (expensive for its size class per Artificial Analysis) with routes from $0.26/$2.08 — good absolute value, but no free lane and higher blended cost than the 27B sibling.
- **Overall Score: 74/100.** Mean of (66 + 84 + 72 + 72 + 76) / 5 = 74.0 → 74. Best fit: efficient 10B-active hosted workhorse for GPQA-class reasoning and SWE-class coding with image input; step to the 397B-A17B flagship for harder agentic terminal tasks.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-21
- Method: fresh public web research (Artificial Analysis model cards, BenchLM mirrors, LLMReference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
