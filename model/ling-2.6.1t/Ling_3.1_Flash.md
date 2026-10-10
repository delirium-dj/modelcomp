# Ling 2.6 1T — findings by Ling 3.1 Flash

- Source: Ant Group / InclusionAI (`ling-2.6-1t`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 1T
- **Short description:** InclusionAI's open-source trillion-parameter flagship instant (instruct) model, tailored for real-world complex scenarios — coding and daily workflows with "fast thinking" (Contextual Process Redundancy Suppression reward) that cuts output token overhead to roughly a quarter of comparable models. The instant sibling of the Ring 2.6 1T reasoning model; both retrofit from the Ling 2.0 1T base.
- **Provider / access:** Hugging Face `inclusionAI/Ling-2.6-1T` (open-sourced 2026-06-13); OpenRouter `inclusionai/ling-2.6-1t`; technical report arXiv 2606.15079.
- **Release / knowledge:** Released 2026-06-13 (OpenRouter listing 2026-04-23); knowledge cutoff not stated.
- **IDs:** `inclusionAI/Ling-2.6-1T` (HF); `inclusionai/ling-2.6-1t` (OpenRouter). No OpenCode Zen Free ID found.
- **Context window:** 262,144 tokens (hybrid MLA + Linear Attention 7:1; base trained with staged 4K → 32K → 256K extension) — verified on OpenRouter and the HF/base cards.
- **Modalities:** text in; text out; reasoning yes (fast-thinking mode); tool calls yes (agentic coding, tool calling optimized); BFCL-V4 supported.
- **Pricing (as of 2026-10-10):** $0.075 / 1M input, $0.625 / 1M output (BenchmarkList; OpenRouter route) — "roughly a quarter of comparable models" per InclusionAI.
- **Architecture:** fine-grained MoE, ~1T total / ~63B active per token, 80 layers, 256 routed experts + 1 shared (8 active routed), vocab 157,184, Partial RoPE; ~9.6T total training tokens (migration + continued pre-training + mid-training).

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **72.2%** (HF evaluation results — resolved)
- TAU2-Bench / Claw-Eval / BFCL-V4 / PinchBench: ranked "among the top models" (HF card — open-source SOTA claims; exact values not published in the card highlights)
- IFBench: strong (HF card — instruction following under complex constraints; no exact value)
- Terminal-Bench 2.1 / τ³-Banking / GDPval-AA / MCP-Atlas / Toolathon: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **34** (HF card — with ~16M output tokens; "significant generational leap over the previous Ling-1T")
- AIME 2026: leads non-thinking models (HF card — exact value not published in highlights)
- GPQA Diamond: **45.45%** (tech report — **base checkpoint** Ling-2.6-1T-base, not the post-trained model; provisional proxy)
- SimpleQA: **38.26%** (base checkpoint — provisional proxy; up from 20.87 on Ling-2.0-1T-base)
- HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **72.2%** (post-trained, HF evaluation results)
- HumanEval-Plus: **85.98%** (tech report — base checkpoint, provisional proxy)
- LiveCodeBench: **44.27%** (tech report — base checkpoint, provisional proxy)
- DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- MRCR (16K–256K): strong performance claimed (HF card — no exact value); LongBenchv2 **43.54%** and LEval **76.21%** (base checkpoint — provisional proxies); no RULER / GraphWalks number — no verified public score found for MRCR exact value.

### Normalized scores (1–100)

- **Tool use: 72/100.** SWE-bench Verified 72.2% is the one exact agentic number and sits near the frontier band; top-rank claims on TAU2-Bench, Claw-Eval, BFCL-V4, and PinchBench lack published values, and no Terminal-Bench 2.1, GDPval-AA, or MCP-Atlas number exists.
- **Reasoning: 60/100.** The AA Intelligence Index of 34 maps to the mid band (20–35 → 55–65); AIME 2026 leads non-thinking models but no exact value is published, and the only exact GPQA (45.45%) is a base-checkpoint proxy.
- **Context window: 71/100.** 262,144 tokens — the 200K–500K band just above the 200K = 70 anchor; MRCR 16K–256K is claimed strong without an exact value.
- **Multimodal: 15/100.** Text-only model (text in, text out) — the text-only floor band.
- **Coding: 76/100.** SWE-bench Verified 72.2% (post-trained) is strong and near the frontier band; base-checkpoint HumanEval-Plus 85.98% supports it, but no DeepSWE, SciCode, or post-trained LiveCodeBench number exists.
- **Cost efficiency: 96/100.** $0.075/$0.625 per 1M — input far below the $0.47 median for its class, output below the ~$1.94 median; open weights allow free self-hosting.
- **Overall Score: 59/100.** Mean of Tool 72, Reasoning 60, Context 71, Multimodal 15, Coding 76 = 58.8 → 59. Best-fit: token-efficient open-weight instant flagship for coding and agentic daily workflows at a quarter of peer cost; thin published evidence on reasoning breadth.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (inclusionAI/Ling-2.6-1T Hugging Face card, OpenRouter listing, BenchmarkList pricing, arXiv 2606.15079 technical report); scores are normalized 1–100 interpretations, not official vendor scores. Base-checkpoint numbers (GPQA, SimpleQA, HumanEval-Plus, LiveCodeBench, LongBenchv2, LEval) are marked as provisional proxies — the post-trained card publishes only SWE-bench Verified 72.2% and the AA Index 34.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
