# Ling-2.6-1T — findings by GLM 5.3 Flash

- Source: InclusionAI / Ant Group (`ling-2.6.1t` — upstream name `Ling-2.6-1T`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-1T
- **Short description:** InclusionAI's (Ant Group's AGI lab) trillion-parameter comprehensive flagship instruct model for real-world complex scenarios — coding, complex reasoning, and large-scale agentic workflows. Hybrid MLA + Linear Attention with a "fast thinking" mechanism that compresses verbose chains of thought. Superseded by Ling 3.0 Flash (AA now benchmarks only historical 10K-input workloads).
- **Provider / access:** open weights on Hugging Face (`https://huggingface.co/inclusionAI/Ling-2.6-1T`) and ModelScope; self-hosted via SGLang (MTP/EAGLE) or vLLM; hosted on Novita AI (HF Inference Provider), OpenRouter (`openrouter/inclusionai/ling-2.6-1t`, plus a `:free` Free route), and zenmux.ai. Chat Completions API; integrates Claude Code, OpenClaw, OpenCode, CodeBuddy.
- **Release / knowledge:** 2026-04-23 release (AA FAQ); knowledge cutoff not stated.
- **IDs:** `inclusionAI/Ling-2.6-1T` (self-host), `openrouter/inclusionai/ling-2.6-1t` (+ `:free`), `zenmux/inclusionai/ling-2.6-1t`, `novita-ai/...`; a Free route exists on OpenRouter (no Free ID on OpenCode Zen verified).
- **Context window:** 262,144 total (SGLang reference config `--context-length 262144`; AA lists 262K) — verified against the official card and AA; max output not stated.
- **Modalities:** text in, text out; reasoning — hybrid "fast thinking" (vendor: Contextual Process Redundancy Suppression reward to cut verbose CoT; AA classifies the benchmarked page as non-reasoning/direct response — a reasoning-mode page existed at launch, vendor-cited Index 34); tool calls yes (multi-step tool collaboration, BFCL-V4 SOTA claim); JSON mode not explicitly documented.
- **Pricing (as of 2026-10-09):** $0.075 in / $0.625 out per 1M on OpenRouter (cheapest); $0.30 in / $2.50 out per 1M on Novita AI (AA's measured median). Paid, plus a time-limited `$0` OpenRouter Free route.
- **Architecture:** 1T total / 63B active parameters, hybrid Mixture-of-Experts (MLA + Linear Attention); MIT license (open source, commercial use permitted); AA Openness Index 11.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **72.2%** (official HF eval results — also claimed open-source SOTA on the model card)
- BFCL-V4 / TAU2-Bench / Claw-Eval / PinchBench: claimed **open-source SOTA / top-rank** on the official HF card — no exact numbers published (vendor claims without public numbers, provisional)
- Artificial Analysis Intelligence Index: **17 (estimated) / #14 of 46 in class** (AA current page, non-reasoning version; above the non-reasoning open-weight median of 12) — vendor cites **34** with ~16M output tokens on the HF card at launch (reasoning-mode measurement; discrepancy noted)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- AIME26: claimed **open-source SOTA, significantly leading non-thinking models** (official HF card — no exact number published; provisional)
- MRCR (16K–256K): claimed strong performance (official HF card — no exact number published; provisional)
- GPQA Diamond / HLE / CritPt / LCR: no verified public score found

Coding:

- SWE-bench Verified: **72.2%** (official HF eval results)
- SWE-bench Pro / LiveCodeBench / SciCode / DeepSWE: no verified public score found

Long context:

- MRCR across 16K–256K claimed strong (no number); no independent long-context retrieval score reported

### Normalized scores (1–100)

- **Tool use: 72/100.** Provisional — vendor claims open-source SOTA on BFCL-V4 and TAU2-Bench and top ranks on Claw-Eval/PinchBench, but publishes no numbers; the one verified anchor is SWE-bench Verified 72.2% (a code-agent harness), placing it in the 65–75 mid-band.
- **Reasoning: 62/100.** AA's current estimated Index 17 (non-reasoning page) sits in the mid-band, and the vendor's launch-cited 34 conflicts with it; the AIME26 SOTA and MRCR claims carry no public numbers, so the score rests at the mid-band edge.
- **Context window: 74/100.** 262K total (per SGLang config and AA) sits inside the 200K–500K band; the strong MRCR (16K–256K) claim has no published number to push it toward the top tiers.
- **Multimodal: 15/100.** Text-only input and output per the official HF card and AA — no image/audio/video support.
- **Coding: 72/100.** SWE-bench Verified 72.2% (verified, official eval results) approaches but does not clear the DeepSWE 74%+ frontier reference; missing SWE-bench Pro/LiveCodeBench/SciCode numbers cap terminal and scientific coding.
- **Cost efficiency: 94/100.** OpenRouter route at $0.075/$0.625 sits near the ~$0.10/$0.20 ≈ 97–99 reference (AA's measured median route $0.30/$2.50 ≈ 90); a `$0` Free route exists on OpenRouter (not on Zen). Paid baseline scored — not counted toward Overall.
- **Overall Score: 59/100.** Mean of the five quality dims (72 + 62 + 74 + 15 + 72) / 5 = 59.0 → 59. Best-fit recommendation: cost-efficient trillion-scale open workhorse for fast agentic coding and tool loops; verify the unnumbered SOTA claims independently before relying on them.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (official Hugging Face model card and eval results, Artificial Analysis model page, LLM Reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
