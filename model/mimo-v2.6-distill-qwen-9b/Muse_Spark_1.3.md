# MiMo V2.6 Distill Qwen 9B — findings by Muse Spark 1.3

- Source: Xiaomi/MiMo-V2.6-Distill-Qwen-9B (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Distill Qwen 9B
- **Short description:** Xiaomi's 9B agentic SFT checkpoint distilling MiMo-V2.6 data into Qwen3.5-9B; released as the open-research starting point for agentic RL.
- **Provider / access:** HuggingFace `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (self-host via SGLang/vLLM/Transformers); 50+ community quantizations (GGUF, MLX, MXFP8).
- **Release / knowledge:** 2026-09-22 release window (MiMo-V2.6 family release; HF collection updated ~2026-09-27); knowledge cutoff not disclosed
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (base: `Qwen/Qwen3.5-9B`)
- **Context window:** 262,144 total (256K `model_max_length` in tokenizer config; max output split not disclosed)
- **Modalities:** Text and image in (image-text-to-text pipeline, Qwen3VL processor); text out; reasoning yes (MiMo thinking template); tool calls yes (tool-use tag); video/audio tokens present in tokenizer but no measured video/audio eval found
- **Pricing (as of 2026-09-29):** No public per-token API price (open weights, self-host); 9B size servable on a single GPU
- **Architecture:** 9B params (BF16 safetensors), SFT of Qwen3.5-9B on 77.4B-token MiMo mixture (27.2B loss-bearing), MIT license

### Raw benchmarks found

Agent / tool use:

- AutomationBench v1.0.6 (**general agent**): 30.3% avg@1 (vendor SFT eval, via HuggingFace model card; vs Qwen3.5-9B base 5.0%)
- Terminal-Bench 2.1: **37.1%** avg@1 (vendor SFT eval, via HuggingFace model card and eval-results; vs base 27.0%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon-Verified **35.2%** avg@1 (vendor SFT eval, via HuggingFace model card; vs base 25.9%)
- OfficeQA (**general agent, provisional**): 19.5% avg@1 (vs base 9.0%); JobBench **18.3%** avg@1 (vs base 2.6%); MiMo General mini **62.2%** avg@1 internal (vs base 28.5%)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (no AA or BenchLM page — BenchLM lookup 404)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: Verified **61.1%** avg@3 (via HuggingFace eval-results; vs base 60.0%); Pro **44.6%** avg@3 (vs base 32.0%)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: MiMo Code mini **51.6%** avg@3 internal (vs base 19.5%); MiMo Visual Coding mini **64.0%** avg@1 internal (vs base 61.7%); MiMo Cyber mini **31.3%** avg@3 internal (vs base 5.7%)

Long context:

- No long-context retrieval reported (no MRCR / RULER / GraphWalks value at window length found; 256K is tokenizer ceiling only)

### Normalized scores (1–100)

- **Tool use: 52/100.** TB2.1 37.1% with Toolathlon 35.2% and AutomationBench 30.3%, all well above base; capped by JobBench 18.3% and the gap to mid-tier 45%+ TB bands.
- **Reasoning: 55/100.** Only signal is internal MiMo General mini 62.2%; capped by zero verified public GPQA, HLE, LCR, CritPt, or Index scores.
- **Context window: 74/100.** Verified 256K tokenizer ceiling lands just above the 200K = 70 anchor; capped with no measured retrieval score.
- **Multimodal: 68/100.** Image-text-to-text pipeline with measured visual coding 64.0%; capped by the internal-mini status of that eval and text-only output.
- **Coding: 66/100.** SWE-Verified 61.1% with SWE-Pro 44.6% and MiMo Code mini 51.6%; capped by the SWE-Pro gap to frontier and avg@3 vendor harness.
- **Cost efficiency: 95/100.** 9B MIT weights servable on a single GPU with no API toll; capped below 100 with no verified $0 hosted tier.
- **Overall Score: 63/100.** Mean of the five non-cost dims (52+55+74+68+66)/5 = 63.0; best fit as a cheap local agentic starting point, not a frontier coder.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-09-29
- Method: public internet research (HuggingFace model card eval table and eval-results, HuggingFace API, tokenizer config, models.dev lookup); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
