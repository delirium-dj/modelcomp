# Qwen 3.5 9B — findings by DeepSeek 4.1 Flash

- Source: Alibaba/Qwen3.5-9B (`Qwen/Qwen3.5-9B`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18

> **Re-verified 2026-10-18.** No BenchLM page exists for this slug (404) and no new independent benchmark surfaced; the official HF card, Artificial Analysis, LLM-Stats and BenchmarkList rows from the 2026-10-11 deep pass stand. **No score change** (Tool 60 / Reasoning 70 / Context 76 / Multimodal 78 / Coding 62 / Cost 95 / Overall 69).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-checked the official Hugging Face card (`Qwen/Qwen3.5-9B`), LLM-Stats (`llm-stats.com/models/qwen3.5-9b`), Artificial Analysis (`artificialanalysis.ai/models/qwen3-5-9b`), BenchmarkList (`benchmarklist.com/models/qwen-qwen3.5-9b/`) and the XDA analysis of the launch benchmarks. All five quality dimensions re-confirmed at their prior values: the HF card still publishes the same headline numbers (GPQA Diamond 81.7, MMLU-Pro 82.5, C-Eval 88.2, LiveCodeBench v6 65.6, MMMU 78.4), and the independent trackers corroborate them within harness variance. New data added ADDS signal rather than overturning prior scores: official **AA-LCR 63.0**, **BFCL-V4 66.1**, **TAU2-Bench 79.1**, **Tau2-Bench Telecom 86.8**, plus aggregator figures for **SWE-bench Verified 60.0**, **SWE-bench Pro 32.0**, **Terminal-Bench 2.1 29.2** and **GDPval-AA 645**; the previously missing composite is now found — **Artificial Analysis Intelligence Index 11** (#34/142, AA v4.3.2). Conflicts surfaced and reconciled below (GPQA 81.7 vs 80.6; AA Index 11 vs 21.44; release 2026-03-02 vs 03-10; params 9B vs 9.65B). No dimension moved; **Overall stays 69/100**.

## Model card

- **Name:** Qwen 3.5 9B (Alibaba Qwen; open weights, effectively free to self-host)
- **Short description:** Qwen's 9-billion-parameter open-weights vision-language model, a dense Gated-DeltaNet/Gated-Attention hybrid (32 layers, layout `8 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN))`) that accepts text, image and video input with 262,144-token native context (extensible to 1,010,000). Small enough to self-host on a single GPU, yet competitive with much larger VLMs on document, video and GUI tasks (HF card, 2026-10-11).
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-9B`) and ModelScope; served via DeepInfra, Qwen Cloud/OpenRouter, OVHcloud and Together (OpenAI-compatible Chat Completions). No OpenCode Zen Free ID.
- **Release / knowledge:** Released 2026-03-02 per Artificial Analysis and LLM-Stats; the OpenRouter/BenchmarkList listing is dated 2026-03-10; HF citation block reads February 2026. Knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.5-9B` (catalogue aliases `qwen3.5-9b`, `qwen3-5-9b`); Apache 2.0.
- **Context window:** 262,144-token native context (extensible to 1,010,000 via YaRN; some catalogues list 256K/260K) — catalogue-verified. Recommended max output 32,768 generally, 81,920 for hard reasoning/coding; max output not separately published as a single cap.
- **Modalities:** text, image and video in; text out; reasoning/thinking mode (on by default); tool calling and structured outputs.
- **Pricing (as of 2026-10-11):** $0.10 / 1M input, $0.15 / 1M output via DeepInfra (cheapest of the tracked providers); Artificial Analysis blend $0.14 / $0.20 with ~$0.21 per Intelligence-Index task. Open weights → self-host cost depends on hardware.
- **Architecture:** dense 9B decoder (≈9.65B total per Artificial Analysis); hybrid Gated DeltaNet attention (3:1 linear-to-full-softmax ratio); Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **41.8%**; ScreenSpot-Pro: **65.2%**; AndroidWorld: **57.8%** (HF card)
- TIR-Bench: **45.6%** (with CI); BFCL-V4: **66.1%**; TAU2-Bench: **79.1%**; Tau2-Bench Telecom: **86.8%**; DeepPlanning: **18.0%** (HF card / BenchmarkList)
- Toolathlon-Verified: **25.9%**; GDPval-AA: **645 Elo**; τ³-Banking: **8.2%** (earlier pass cited 7.0%; BenchmarkList 2026-07-21); Terminal-Bench 2.1: **29.2%**; Terminal-Bench Hard: **24.2%** (78/149) (BenchmarkList / LLMlearner)
- Claw-Eval / MCP-Atlas / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **81.7%** (HF card; Epoch/BenchmarkList harness **80.6%**); MMLU-Pro: **82.5%**; MMLU-Redux: **91.1%**; C-Eval: **88.2%**; MMMLU: **81.2%**; SuperGPQA: **58.2%** (HF card / BenchmarkList / XDA)
- HMMT Nov 25: **82.9%**; HMMT Feb 25: **83.2%**; CritPt: **0.6**; HLE: **14.9%** (HF card / BenchmarkList)
- Artificial Analysis Intelligence Index: **11** (#34/142, AA v4.3.2); BenchmarkList lists an AA Index of **21.44** (different index version/harness) (artificialanalysis.ai / benchmarklist.com)

Coding:

- LiveCodeBench (v6, no tools): **65.6%**; OJBench: **29.2%**; SWE-bench Verified: **60.0%**; SWE-bench Pro: **32.0%**; SciCode: **29.5%** (HF card / BenchmarkList / XDA)
- Terminal-Bench Hard: **24.2%** (78/149); Terminal-Bench 2.1: **29.2%** (LLMlearner / BenchmarkList)
- DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- Context window: 262,144 native (extensible to 1,010,000). AA-LCR: **63.0%**; LongBench v2: **55.2%** (11/14); Context Arena (memory/persistence): **43.3** (45/49). No MRCR/RULER figure found. (HF card / BenchmarkList)

Multimodal (VL) evidence:

- MMMU **78.4%**, MMMU-Pro **70.1%**, MathVision **78.9%**, MathVista **85.7%**, RealWorldQA **80.3%**, MMBench **90.1%**, AI2D **90.2%**, OCRBench **89.2%**, OmniDocBench **87.7%**, CC-OCR **79.3%**, VideoMME (w/ subtitles) **84.5%**, MLVU **84.4%**, VideoMMMU **78.9%** (HF card / BenchmarkList)

### Normalized scores (1–100)

- **Tool use: 60/100.** OSWorld-Verified 41.8% and ScreenSpot-Pro 65.2% are strong GUI-agent signals for a 9B model, and BFCL-V4 66.1% / TAU2-Bench Telecom 86.8% show real function-calling competence (HF card; benchmarklist.com). Capped by τ³-Banking 8.2%, GDPval-AA 645 and Terminal-Bench 2.1 29.2% (benchmarklist.com).
- **Reasoning: 70/100.** GPQA Diamond 81.7%, MMLU-Pro 82.5% and C-Eval 88.2% are excellent at 9B scale (huggingface.co/Qwen/Qwen3.5-9B), and HMMT ~83% is a genuine STEM strength, capped by CritPt 0.6 and a modest AA Intelligence Index of 11 (artificialanalysis.ai/models/qwen3-5-9b).
- **Context window: 76/100.** 262K native sits between the 200K and 1M bands; AA-LCR 63.0 and LongBench v2 55.2 are respectable but Context Arena 43.3 leaves headroom (huggingface.co/Qwen/Qwen3.5-9B; benchmarklist.com).
- **Multimodal: 78/100.** Genuine text+image+video input with MMMU 78.4%, OCRBench 89.2%, OmniDocBench 87.7% and VideoMME 84.5% — near-frontier for its size, short of omni audio (huggingface.co/Qwen/Qwen3.5-9B).
- **Coding: 62/100.** SWE-bench Verified 60.0% and LiveCodeBench v6 65.6% are strong for 9B; Terminal-Bench Hard 24.2%, SciCode 29.5% and SWE-bench Pro 32.0% cap it (benchmarklist.com; huggingface.co/Qwen/Qwen3.5-9B).
- **Cost efficiency: 95/100.** $0.10/$0.15 hosted, or free-to-self-host Apache-2.0 weights, is near the floor of the market; not 100 only because hosted routes still bill per token and AA measures ~$0.21/task (llm-stats.com; artificialanalysis.ai).
- **Overall Score: 69/100.** Mean of the five quality dims (60+70+76+78+62)/5 = 69.2 → 69. Best-fit: cheap self-hosted/edge multimodal work (documents, video, GUI agents) where the 9B budget outweighs peak reasoning.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: public internet research (official Hugging Face `Qwen/Qwen3.5-9B` model card; Artificial Analysis model page; LLM-Stats; BenchmarkList; XDA Developers launch analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
