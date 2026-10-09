# MiMo-V2.6-Distill-Qwen-9B — findings by Step 5 Preview

- Source: Xiaomi MiMo (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`, released 2026-09-21)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B (a research checkpoint, not a mini flagship)
- **Short description:** Xiaomi's deliberately small release in the MiMo-V2.6 family — a supervised fine-tune of **Qwen3.5-9B on 77.4B tokens of MiMo-generated agentic data** (27.2B loss-bearing; code 29.9%, general agent tasks 28.5%, visual coding 27.4%, cybersecurity 14.2%), shipped as "a starting point for open research in agentic reinforcement learning" with its RL environments and training code. It is emphatically not the Pro/Flash experience: on Xiaomi's own numbers the distill gains where the data targeted (SWE-bench Pro 32.0→44.6, TB 2.1 27.0→37.1, AutomationBench 5.0→30.3, JobBench 2.6→18.3) but stays flat where the base was already strong (SWE-V 60.0→61.1). Flash, by comparison, hits TB 2.1 87.6. What it does offer: MIT weights, an 8GB-GPU footprint (Q4_K_M 5.84GB), the Qwen3.5 hybrid attention (every 4th layer full, rest linear — cheap KV cache), 262K configured context and image input — a capable offline assistant, not an autonomous engineer.
- **Provider / access:** Hugging Face (MIT); no hosted API; Ollama/LM Studio/llama.cpp quants (bartowski) and 20+ community finetunes.
- **Release:** 2026-09-21.
- **Context window:** 262,144 tokens configured.
- **Modalities:** Text and image in → text out (vision projector); 9.41B params BF16, 32 layers.
- **Pricing:** open weights (MIT), free.
- **Real-world speed:** ~6 tok/s (16GB M4 MacBook Pro, per Atomic Chat) to 13.7–15.3 tok/s (18GB M3 Pro) — modest.

### Raw benchmarks found

Vendor (MiMo-V2.6 technical report; vs Qwen3.5-9B base in parents):

- SWE-bench Verified (avg@3): **61.1** (60.0); SWE-bench Pro (avg@3): **44.6** (32.0)
- Terminal-Bench 2.1 (avg@1): **37.1** (27.0); Toolathlon-Verified: **35.2** (25.9)
- AutomationBench v1.0.6 (avg@1): **30.3** (5.0); OfficeQA: **19.5** (9.0); JobBench: **18.3** (2.6)
- Internal (not independently reproducible): MiMo Code mini 51.6 (19.5), MiMo Cyber mini 31.3 (5.7), MiMo General mini 62.2 (28.5), MiMo Visual Coding mini 64.0 (61.7)

Third-party:

- ModelCap Index: 54.3 (#102/280, carried from lineage); no independent Artificial Analysis run of this checkpoint
- Field context: sibling Flash scores TB 2.1 87.6 (vendor) / AA Intelligence Index 37.88; Pro 46.32
- eWEEK caveat: Epoch AI classifies SWE-bench Verified and DeepSWE v1.1 as flawed (scoring/contamination), limiting what vendor scores establish

### Normalized scores (1–100)

- **Tool use: 42/100.** TB 2.1 37.1%, Toolathlon 35.2%, AutomationBench 30.3% and JobBench 18.3% are low-mid — real gains over the base (+10 to +25 points) but a fraction of what Flash/Pro achieve.
- **Reasoning: 40/100.** No GPQA/HLE/AIME/math figure was published for the checkpoint; it is a single-purpose agentic SFT of a general 9B, so mid-low on evidence.
- **Context window: 68/100.** 262,144 configured tokens is the 200K–500K band (65–84) with a cheap KV cache, but no retrieval curve is published.
- **Multimodal: 58/100.** Text + image in → text out is the 60–70 band, at its bottom: the vision-coding data helped (internal set 61.7→64.0) but no public vision benchmark exists for the checkpoint.
- **Coding: 45/100.** SWE-V 61.1% and SWE-Pro 44.6% (+12.6 over base) are mid-low; the Research-checkpoint framing means coding is the training target, not a strength at Pro level.
- **Cost efficiency: 97/100.** MIT weights, Q4 at 5.84GB, runs on an 8GB GPU or 16GB Mac — near the methodology's ~$0.1/$0.2 ≈ 97–99 tier, though at 6–15 tok/s.
- **Overall Score: 51/100.** Best-fit recommendation: the offline RL-research sandbox — a free 9B that already does basic tool loops on 8GB hardware and is explicitly built to be RL-trained further; buyers wanting a working agent should use Flash ($0.14/$0.28) instead.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (XiaomiMiMo Hugging Face model card, codersera and HokAI guides, eWEEK coverage, ModelCap); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_V2_7.md`, using the same headings.
