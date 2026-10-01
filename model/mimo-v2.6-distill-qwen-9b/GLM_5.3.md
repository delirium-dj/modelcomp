# MiMo V2.6 Distill Qwen 9B — findings by GLM 5.3

- Source: Xiaomi MiMo (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** Xiaomi MiMo's 9B dense open-weights research checkpoint — a supervised fine-tune of Alibaba's Qwen3.5-9B on MiMo-generated agentic data covering coding, general agent tasks, visual coding, and cybersecurity. Top use case: self-hosted small agentic coding/RL-research base, not a production frontier model.
- **Provider / access:** Hugging Face `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (open weights, MIT); self-host via SGLang quickstart or GGUF quantizations (bartowski Q4_K_M ≈ 5.84 GB, ~12GB+ VRAM for the vision-language GGUF). No hosted API exists.
- **Release / knowledge:** released 2026-09-21 alongside MiMo-V2.6-Pro-RL / Flash-RL; knowledge cutoff not stated
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (self-host only; no Zen Free ID, no paid API ID)
- **Context window:** no context window published for this checkpoint (HokAI, 2026-09-28) — inherits Qwen3.5-9B architecture but Xiaomi does not state a limit; community local-run guides use 8K-token sessions as a starting config
- **Modalities:** text + image in (image-text-to-text task, inherited from the Qwen3.5-9B base); text out; thinking on/off toggle (`enable_thinking`, separated `reasoning_content`); tool-use/conversational tags; no video or audio input
- **Pricing (as of 2026-10-01):** free open weights (MIT, commercial use permitted); no per-token price — you provide the compute on a single modern GPU
- **Architecture:** 9B dense (BF16 safetensors); SFT distillation of Qwen3.5-9B on 77.4B MiMo-generated tokens (27.2B loss-bearing: code 29.9%, general 28.5%, visual 27.4%, cyber 14.2%)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **37.1%** avg@1 (vendor technical report via HF card; base Qwen3.5-9B: 27.0%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathlon-Verified: **35.2%** avg@1 (vendor, HF card; base 25.9%)
- AutomationBench v1.0.6: **30.3%** avg@1 (vendor, HF card; base 5.0%)
- OfficeQA: **19.5%**; JobBench: **18.3%** avg@1 (vendor, HF card)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (no AA or BenchLM page for this ID)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- Internal (non-public) sets: MiMo General (mini) **62.2** (base 28.5) — vendor-internal, not independently verifiable

Coding:

- SWE-bench Verified: **61.1%** avg@3 (vendor technical report via HF card; base Qwen3.5-9B: 60.0%)
- SWE-bench Pro: **44.6%** avg@3 (vendor; base 32.0%)
- LiveCodeBench: **no verified public score found**
- SciCode: **no verified public score found**
- Internal (non-public): MiMo Code (mini) **51.6** (base 19.5)

Long context:

- no long-context retrieval reported; no published context window for this checkpoint

Multimodal:

- Internal (non-public): MiMo Visual Coding (mini) **64.0** (base 61.7); no public vision benchmark (no MMMU / MMMU-Pro score)

### Normalized scores (1–100)

- **Tool use: 48/100.** Terminal-Bench 2.1 37.1%, Toolathlon-Verified 35.2%, and AutomationBench 30.3% (all vendor-reported) sit below the ~45–60% mid band — strong gains over the base model, but a 9B SFT ceiling caps agentic performance.
- **Reasoning: 45/100.** Zero public reasoning benchmarks (GPQA/HLE/LCR all absent); the only signal is the vendor-internal MiMo General (mini) 62.2, which is not independently verifiable — provisional low-mid score.
- **Context window: 40/100.** No context window published for this checkpoint at all; local-run guides default to 8K sessions. Without a verified window, scored conservatively in the <100K band.
- **Multimodal: 62/100.** Text + image input verified (image-text-to-text task inherited from Qwen3.5-9B), text-only output; image-in tier score, capped by zero public vision benchmarks (internal visual-coding set is not verifiable).
- **Coding: 65/100.** SWE-bench Verified 61.1% (avg@3) and SWE Pro 44.6% are excellent for a 9B model but mid-tier in absolute terms (HokAI: bottom third of SWE-V-ranked models, peer median 77.2%); capped by missing LiveCodeBench/SciCode and small-model limits.
- **Cost efficiency: 95/100.** Free MIT open weights with no per-token fee — the only cost is self-hosted compute, and at 9B dense it runs on a single consumer GPU; near-free, discounted slightly for the lack of any hosted/free API.
- **Overall Score: 52/100.** (48 + 45 + 40 + 62 + 65) / 5 = 52. Best fit: research and hobbyist base for agentic RL experimentation or a cheap local coding agent with image input; not a substitute for the RL-trained MiMo-V2.6 flagships.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01 UTC
- Method: public internet research (Hugging Face model card / MiMo-V2.6 technical report, HokAI, local-LLM guides); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
