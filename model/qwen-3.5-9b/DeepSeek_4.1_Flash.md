# Qwen 3.5 9B — findings by DeepSeek 4.1 Flash

- Source: Alibaba/Qwen3.5-9B (`Qwen/Qwen3.5-9B`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B (Alibaba Qwen; open weights, effectively free to self-host)
- **Short description:** Qwen's 9-billion-parameter open-weights vision-language model (released 2026-03-02), a dense Gated-DeltaNet hybrid that accepts text, image and video input with 262K native context. Small enough to self-host, yet competitive with much larger VLMs on document and video tasks.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-9B`) and ModelScope; served via DeepInfra, Qwen Cloud/OpenRouter, OVHcloud and Together (OpenAI-compatible Chat Completions). No OpenCode Zen Free ID.
- **Release / knowledge:** Released 2026-03-02; knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.5-9B` (catalogue aliases `qwen3.5-9b`, `qwen3-5-9b`); Apache 2.0.
- **Context window:** 262,144-token native context (some catalogues list 256K) — catalogue-verified; max output not separately published.
- **Modalities:** text, image and video in; text out; reasoning/thinking mode; tool calling and structured outputs.
- **Pricing (as of 2026-10-01):** $0.10 / 1M input, $0.15 / 1M output via DeepInfra (cheapest of five tracked providers; AA blend $0.14/$0.20). Open weights → self-host cost depends on hardware.
- **Architecture:** dense 9B decoder; hybrid Gated DeltaNet attention (3:1 linear-to-full-softmax ratio); open weights, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **41.8%**; ScreenSpot-Pro: **65.2%**; AndroidWorld: **57.8%** (HF card)
- TIR-Bench: **45.6%** (with CI); Toolathlon-Verified: **25.9%**; τ³-Banking: **7.0%** (HF card / LLMlearner)
- Claw-Eval / MCP-Atlas / SWE Atlas / Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **81.7%**; MMLU-Pro: **82.5%**; C-Eval: **88.2%**; MMMLU: **81.2%** (LLMlearner / Vector Wire)
- CritPt: **0.6**; SuperGPQA: **58.2**; HMMT 2025: **82.9**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (ECI 139 reported)

Coding:

- LiveCodeBench (v6, no tools): **65.6%**; SWE-bench Verified: **60.0%**; SWE-bench Pro: **32.0%** (HF card / Vector Wire)
- Terminal-Bench Hard: **24.2%** (78/149) (LLMlearner)
- SciCode / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- LongBench v2: **55.2%** (11/14); Context Arena (memory/persistence): **43.3** (45/49); no MRCR/RULER figure found.

Additional multimodal (VL) evidence:

- MMMU **78.4%**, MMMU-Pro **70.1%**, MathVision **78.9%**, MathVista **85.7%**, RealWorldQA **80.3%**, MMBench **90.1%**, OCRBench **89.2%**, OmniDocBench **87.7%**, VideoMME (w/ subtitles) **84.5%**, MLVU **84.4%** (HF card)

### Normalized scores (1–100)

- **Tool use: 60/100.** OSWorld-Verified 41.8% and ScreenSpot-Pro 65.2% are strong GUI-agent signals for a 9B model, capped by τ³-Banking 7.0% and a missing Terminal-Bench 2.1.
- **Reasoning: 70/100.** GPQA Diamond 81.7%, MMLU-Pro 82.5% and C-Eval 88.2% are excellent at 9B scale, capped by CritPt 0.6 and no AA/BenchLM index.
- **Context window: 76/100.** 262K native sits between the 200K and 1M bands; LongBench v2 55.2% and Context Arena 43.3 leave headroom.
- **Multimodal: 78/100.** Genuine text+image+video input with MMMU 78.4%, OCRBench 89.2% and VideoMME 84.5% — near-frontier for its size, short of omni audio.
- **Coding: 62/100.** SWE-bench Verified 60.0% and LiveCodeBench 65.6% are strong for 9B; Terminal-Bench Hard 24.2% and SWE-bench Pro 32.0% cap it.
- **Cost efficiency: 95/100.** $0.10/$0.15 hosted, or free-to-self-host Apache-2.0 weights, is near the floor of the market; not 100 only because hosted routes still bill per token.
- **Overall Score: 69/100.** Mean of the five quality dims (60+70+76+78+62)/5 = 69.2 → 69. Best-fit: cheap self-hosted/edge multimodal work (documents, video, GUI agents) where the 9B budget outweighs peak reasoning.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (Hugging Face `Qwen/Qwen3.5-9B` model card, LLM-Stats, Vector Wire, LLMlearner); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
