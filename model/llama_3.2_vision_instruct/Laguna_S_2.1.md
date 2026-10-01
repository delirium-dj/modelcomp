# Llama 3.2 Vision Instruct — findings by Laguna S 2.1

- Source: Hugging Face model card (`https://huggingface.co/meta-llama/Llama-3.2-90B-Vision-Instruct`), Meta Llama models repository
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (90B)
- **Short description:** Meta's instruction-tuned multimodal Llama 3.2 Vision collection (11B and 90B sizes). The 90B variant uses supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences. Supports text + image input, text output. Released September 25, 2024. Built on the Llama 3.1 text-only model architecture with a separately trained vision adapter using cross-attention layers.
  > Note: the repo `meta.json` lists 128K context and text-only modality. The HuggingFace model card confirms 128K context (correct) but shows text+image input, text output (multimodal — meta.json is incorrect on modality). This file documents the full multimodal model per verified external sources.
- **Provider / access:** Meta Platforms (open weights via HuggingFace: `meta-llama/Llama-3.2-90B-Vision-Instruct`); requires Llama 3.2 Community License agreement; custom commercial license
- **Release / knowledge:** September 25, 2024; knowledge cutoff December 2023
- **IDs:** `meta-llama/Llama-3.2-90B-Vision-Instruct` (HuggingFace); `opencode/llama_3.2_vision_instruct` (project ID)
- **Context window:** 128,000 tokens (verified on HF model card and consistent with `meta.json`)
- **Modalities:** Text and image input, text output (HF model card); reasoning yes (chain-of-thought); tool calls not documented
- **Pricing:** N/A — open weights, self-hosted (Apache-style custom Llama 3.2 Community License)
- **Architecture:** 88.8B total parameters; transformer with GQA (Grouped-Query Attention); vision adapter with cross-attention layers integrating image encoder representations into the core LLM; trained on 6B image-text pairs
- **Training data:** 6B image+text pairs for vision pretraining; over 3M synthetically generated examples for instruction tuning

### Raw benchmarks found

> Sources: HuggingFace model card benchmark tables (official Meta evaluation results, instruction-tuned models). Benchmarks are from the model card published by `meta-llama`. All metrics are accuracy unless noted otherwise, 0-shot or CoT as indicated.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (not reported on HF model card)
- τ²-bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- OSWorld-Verified: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA: **46.7%** — (HF model card, 90B instruction-tuned, 0-shot)
- GPQA Diamond [HF eval]: **46.09** — (HF evaluation results, leaderboard entry)
- MATH (CoT): **68.0%** — (HF model card, 90B instruction-tuned)
- MMLU (CoT): **86.0%** — (HF model card, 90B instruction-tuned, macro_avg/acc)
- MGSM (CoT): **86.9%** — (HF model card, 90B instruction-tuned)
- GSM8K [HF eval]: **93.1** — (HF evaluation results, leaderboard entry)
- HLE: **no verified public score found**
- LCR / MLCR / CritPt: **no verified public score found**
- AA Intelligence Index: **no verified public score found** (model not on AA; 2024 release predates AA v4.3.2)
- BenchLM overall: **no verified public score found** (model not on BenchLM)

Coding:

- SWE-bench Verified: **no verified public score found**
- SWE-bench Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- DeepSWE / Coding Index: **no verified public score found**
- AA-Coding Index: **no verified public score found**

Multimodal:

- MMMU (val, CoT): **60.3%** — (HF model card, 90B instruction-tuned, 0-shot)
- MMMU-Pro, Standard (10 opts, test): **45.2%** — (HF model card)
- MMMU-Pro, Vision (test): **33.8%** — (HF model card)
- MathVista (testmini): **57.3%** — (HF model card)
- ChartQA (test, CoT): **85.5%** — (HF model card, relaxed accuracy)
- AI2 Diagram (test): **92.3%** — (HF model card, accuracy)
- DocVQA (test): **90.1%** — (HF model card, ANLS)
- VQAv2 (test): **78.1%** — (HF model card, accuracy)
- Design Arena / ImageBench: **no verified public score found**
- AA-MMMU-Pro: **no verified public score found**

Long context:

- 128K context window per HF model card; no MRCR / RULER / GraphWalks retrieval score reported

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.

- **Tool use: 15/100.** No agentic benchmarks (TB2.1, τ²-bench, GDPval-AA, OSWorld, Claw-Eval, MCP-Atlas, Toolathon) have verified public scores for this model. No tool-call or agent-harness evaluation is reported on the HuggingFace model card. The model is a vision-language model, not an agentic coding model. Scored in the no-tool-use band (10–20).

- **Reasoning: 48/100.** GPQA at 46.7% is below the ~90%+ 2026 frontier but was competitive when the model was released in September 2024. MATH at 68.0% is decent; MMLU at 86.0% is solid. MGSM at 86.9% and GSM8K at 93.1 show strong mathematical reasoning. However, HLE, LCR, CritPt, and the AA Intelligence Index are all "no verified public score found" — this model (released 2024) predates the 2026 era of comprehensive agentic evaluation. The 2024-era reasoning numbers are respectable but not competitive with 2026 frontier models. Scored in the middle band for its era.

- **Context window: 54/100.** 128K tokens per HF model card and verified by `meta.json` — falls in the 100K–200K tier (50–64 band). No retrieval-at-length benchmark (MRCR/RULER/GraphWalks) found. `meta.json` correctly lists 128K.

- **Multimodal: 85/100.** Text + image input, text output per HF model card (Image-Text-to-Text pipeline). Strong verified multimodal benchmarks on the official model card: VQAv2 at 78.1%, DocVQA at 90.1% (ANLS), ChartQA at 85.5% (relaxed accuracy), AI2 Diagram at 92.3%, MMMU at 60.3%, MMMU-Pro at 45.2%, MathVista at 57.3%. These are among the highest multimodal scores for any open-weights model. The meta.json incorrectly lists text-only modality — the verified external source (HF model card) confirms text+image input.

- **Coding: 40/100.** No SWE-bench, LiveCodeBench, SciCode, DeepSWE, or AA-Coding Index data found. However, GSM8K at 93.1 and MMLU at 86.0% (including code-related MMLU subjects) and MATH at 68.0% indicate the model has coding/math reasoning capability. These are general knowledge benchmarks, not coding-specific agentic benchmarks. Scored in the low-to-mid band — good general reasoning but no verified coding-agent benchmarks.

- **Cost efficiency: 85/100.** Open weights free to self-host under the Llama Community License (not Apache-2.0 permissive); 90B dense needs datacenter-class GPUs and no verified $0 hosted route exists.

- **Overall Score: 48/100.** Mean of five quality dims: (15 + 48 + 54 + 85 + 40) / 5 = 242 / 5 = 48.4 → 48. Llama 3.2 Vision Instruct (90B) is a strong multimodal model with excellent vision benchmarks (VQAv2 78.1%, DocVQA 90.1%, AI2 Diagram 92.3%) and solid 2024-era reasoning (GPQA 46.7%, MATH 68.0%, GSM8K 93.1%), but lacks any agentic tool-use benchmarks and its reasoning is dated relative to 2026 frontier models. Best fit: vision-language tasks, document understanding, and image reasoning. Note: `meta.json` incorrectly lists text-only modality; the HF model card confirms image input support.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-02
- Method: public internet research via HuggingFace model card benchmark tables (official Meta evaluation), Meta Llama model documentation; scores are normalized 1–100 interpretations, not official vendor scores. Artificial Analysis and BenchLM both returned 404 for this model slug (the 2024 release predates those platforms' current tracking).
- Sources cited: `https://huggingface.co/meta-llama/Llama-3.2-90B-Vision-Instruct`
- Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `Llama_3_2_Vision.md`, using the same headings.

---
