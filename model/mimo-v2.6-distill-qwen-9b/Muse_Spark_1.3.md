# MiMo V2.6 Distill Qwen 9B — findings by Muse Spark 1.3

- Source: Xiaomi/MiMo-V2.6-Distill-Qwen-9B, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Distill Qwen 9B
- **Short description:** Xiaomi's 9B agentic SFT checkpoint (Qwen3.5-9B fine-tuned on MiMo-generated data) covering coding, general agents, visual coding, and cybersecurity. Top use case is efficient local agentic inference and open RL research starting point.
- **Provider / access:** Weights `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` on Hugging Face (BF16 18.8 GB; FP8/GGUF via community); local via Transformers/vLLM/SGLang/llama.cpp (16 GB Apple M4 per ComputingForGeeks 2026-09-25). Not on the Xiaomi API (ComputingForGeeks: "Not on the API").
- **Release / knowledge:** 2026-09-21 release (with Pro/Flash RL family; GGUF 2026-09-22); knowledge cutoff undisclosed
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (Hugging Face); no API model ID, no Zen ID (local weights only)
- **Context window:** 262,144 tokens total (262K) — verified via Vast.ai library and ComputingForGeeks 2026-09-25 (Qwen3.5-9B base window)
- **Modalities:** text and vision in (visual coding target; MiMo Visual Coding mini 64.0); text out; reasoning yes (thinking toggle via `enable_thinking`, MiMo v2.6 chat template); tool calls yes (multi-step terminal/automation)
- **Pricing (as of 2026-09-25):** No public per-token price (not served on any API); local inference only — 18.8 GB BF16 runnable on a single small GPU/laptop. No metered cost.
- **Architecture:** dense 9B (9.4B per GGUF release) distilled from Qwen3.5-9B via 77.4B-token SFT mixture (27.2B loss-bearing across code/cyber/general/visual), MIT open release, pre-RL SFT checkpoint (RL-tuned siblings stronger)

### Raw benchmarks found

Agent / tool use:

- AutomationBench v1.0.6: **30.3% avg@1** (Xiaomi technical report via HF README; Qwen3.5-9B base 5.0 on same harness)
- Toolathlon-Verified: **35.2% avg@1** (Xiaomi report; base 25.9)
- Terminal-Bench 2.1: **37.1% avg@1** (Xiaomi report; base 27.0)
- JobBench: **18.3% avg@1** (Xiaomi report; base 2.6)
- OfficeQA: **19.5% avg@1** (Xiaomi report; base 9.0)
- MiMo General (mini, in-house): **62.2% avg@1** (Xiaomi report; base 28.5 — internal set, not publicly reproducible)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **61.1% avg@3** (Xiaomi report; base 60.0 — marginal gain)
- SWE-bench Pro: **44.6% avg@3** (Xiaomi report; base 32.0 — clear distillation gain)
- MiMo Code (mini, in-house): **51.6% avg@3** (Xiaomi report; base 19.5 — internal set)
- MiMo Visual Coding (mini, in-house): **64.0% avg@1** (Xiaomi report; base 61.7 — internal set)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**
- MiMo Cyber (mini, in-house): **31.3% avg@3** (Xiaomi report; base 5.7 — widest gap, internal set)

Long context:

- **No long-context retrieval reported at a stated window length** (262K ceiling listed; no MRCR/RULER/GraphWalks percentage published)

### Normalized scores (1–100)

- **Tool use: 55/100.** AutomationBench 30.3 (6x base) with TB2.1 37.1 and Toolathlon 35.2 showing agentic lift; capped far below Pro/Flash (52–53/73–77/80+) and with no Tau3/Claw runs.
- **Reasoning: 50/100.** No GPQA/HLE/LCR/CritPt/Index runs; OfficeQA 19.5 and internal General 62.2 only; capped as SFT-only 9B with no frontier reasoning evidence.
- **Context window: 72/100.** 262K tier per tier mapping (200K = 70); capped well below 500K–1M tiers with no measured retrieval proof.
- **Multimodal: 62/100.** Text+vision in with Visual Coding mini 64.0 (internal); capped in the image-in band with no public vision-accuracy benchmark.
- **Coding: 62/100.** SWE-Pro 44.6 (+12.6 over base) with SWE-Verified 61.1 and Code mini 51.6; capped well below Pro/Flash (67–72 DeepSWE) and with no LiveCode/SciCode runs.
- **Cost efficiency: 95/100.** No metered API cost — 18.8 GB BF16 laptop-runnable local weights; capped below 100 as self-host compute is non-zero.
- **Overall Score: 60/100.** Mean of the five non-cost dims (55+50+72+62+62)/5 = 60.2 → 60; best-fit as efficient local agent/RL starting point, escalate to Pro/Flash for frontier agent quality.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-29
- Method: public internet research (XiaomiMiMo HF README + raw README, FP8 mirror card, Vast.ai library, Local Model Watch GGUF 2026-09-22, ComputingForGeeks 2026-09-25); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
