# Qwen3.8-27B — findings by Step 5 Preview

- Source: Alibaba (`Qwen3.8-27B`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's flagship open-weight dense vision-language model (released 2026-08-13/14, Apache 2.0) — the highest-tier open-weight VL reasoning model in the Qwen3.8 family. A 27B dense model with hybrid Gated DeltaNet + Gated Attention (only 16 of 64 layers run full attention), 262K native context (1M via YaRN), and the generation's standout result: OSWorld-Verified 84.3%, within 0.5 points of Kimi K3 and far above Opus 4.6 Max's 72.7% — a 20-point computer-use jump over Qwen3.6-27B at identical size. Beats Opus 4.6 Max on five of Qwen's own coding/agent rows.
- **Provider / access:** Open weights `Qwen/Qwen3.8-27B` on Hugging Face (Apache 2.0; runs on ~17GB VRAM at Q4_K_M GGUF; #1 trending at launch); QwenCloud / Model Studio `qwen3.8-27b`; OpenRouter `qwen/qwen3.8-27b`; Cerebras, DeepInfra, Together, and 15+ providers.
- **Release / knowledge:** 2026-08-13/14. Knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.8-27B` (HF), `qwen3.8-27b` (Model Studio/OpenRouter).
- **Context window:** 262,144 native (extensible to 1,000,000 via YaRN); hosted QwenCloud endpoint: 1M total, 991,808 max input, 131,072 max output, 262,144 max reasoning.
- **Modalities:** Text, image and video in → text out. Thinking on by default with `reasoning_effort` xhigh/medium/low; `preserve_thinking`; MTP for speculative decoding; function calling, structured output.
- **Pricing (as of 2026-10-09):** Model Studio $0.424 / MTok input, $1.696 output (international tier) / $0.50 / $3.00 (domestic); OpenRouter/OrcaRouter ~$0.33 / $2.40; AA measures $1.01 per Intelligence-Index task on Alibaba Cloud, $0.41–0.60 on cheaper providers.
- **Architecture:** Dense (no MoE routing) 27.78B parameters incl. vision tower; 64 layers, hidden 5120; 16 × (3 × Gated DeltaNet→FFN + 1 × Gated Attention→FFN); MTP trained multi-step; gains over Qwen3.6-27B attributed to alignment/RL on an essentially unchanged core config.

### Raw benchmarks found

Coding (Qwen's own table, Claude Code harness unless noted):

- SWE-bench Pro: **61.7%** (Qwen3.6-27B 53.5, Qwen3.7-Plus 57.6, Opus 4.6 Max 53.4) — #22/58 on BenchmarkList
- Terminal-Bench 2.1 (Terminus): **73.0%** (Qwen3.6 63.4, Qwen3.7-Plus 64.0, Opus 4.6 Max 78.2); BenchmarkList: 79.8% (#36/194)
- DeepSWE v1.1: **42.2%** — more than triple Qwen3.6-27B's 13.3%; #42/52
- LiveCodeBench v6: **90.3%** (#8/50); QwenSWEBench (in-house): 79.0% (Qwen3.6 49.3)
- NL2Repo-Bench: **42.3%** (#19/34); SciCode: **46.6%** (#67/296)
- WebDev Arena: **1597 Elo** (#13/105)

Agentic / multimodal (Qwen's own table):

- OSWorld-Verified: **84.3%** (#7/70; Kimi K3 leads at 84.8; Opus 4.6 Max 72.7; Qwen3.6 63.9)
- AndroidWorld: **81.9%** (beats Opus 4.6 Max's 62.0); WebArena-Verified: **64.8%** (Qwen3.6 48.8)
- ClawEval-MM: **57.4 pass@3 / 56.9 average**; SWE-MM: 38.6%; Vision2Web: 62.9%; RecreationBench: 47.1%
- CoWorkBench (in-house): 70.7%; JobBench: 33.4%; Agents' Last Exam: 20.4 pass@1 / 42.9 score; Toolathlon: 67.1%
- MathVision (with CI): **94.6%**; BabyVision (with CI): **85.6%**; CharXiv RQ (with CI): 90.2%; OmniDocBench 1.5: 91.1%; RealWorldQA: 85.9%; ERQA: 65.5%
- MMMU-Pro: ~81.7 (secondary reporting)

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (vendor) / **90.5%** (AA) — Qwen3.7-Plus 90.3, Opus 4.6 Max 91.3
- HLE: **30.8%** (vendor) / **33.9%** (AA) — Qwen3.7-Plus 34.7, Opus 4.6 Max 40.0
- IFBench: **79.5%** (beats Opus 4.6 Max's 62.5)
- Artificial Analysis Intelligence Index: **34** (xhigh, rebased v4.3.2; 52 at max effort on the older scale); **AA Agentic Index: 51** — above Claude Opus 4.8 at max effort
- AA-LCR / MRCR / RULER: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 74/100.** OSWorld-Verified 84.3% and AndroidWorld 81.9% are genuinely frontier-adjacent computer/mobile use for a 27B open model, with Toolathlon 67.1% and ClawEval-MM 57.4 backing; capped by Agents' Last Exam 20.4 pass@1, CoWorkBench 70.7% (in-house), SWE-MM 38.6% and no published GDPval/APEX numbers.
- **Reasoning: 76/100.** GPQA 89.2–90.5% (AA) and IFBench 79.5% are strong for the size class, and the AA Agentic Index of 51 beats Opus 4.8-max; capped by HLE 30.8–33.9%, SciCode 46.6% and the rebased Intelligence Index of 34 — knowledge depth trails the agentic-multimodal headline.
- **Context window: 78/100.** 262,144-token native window (1M on the hosted endpoint via YaRN) sits in the 200K–500K band; most official evals run at 256K, no AA-LCR/MRCR figure exists, and the hybrid attention that makes the window affordable is engineered evidence rather than measured retrieval.
- **Multimodal: 86/100.** Native text + image + video in → text out is the 75–90 band, and this is the model's strongest dimension: OSWorld 84.3%, MathVision 94.6% (with CI), BabyVision 85.6%, OmniDocBench 91.1% and RealWorldQA 85.9% — the best agentic-vision package in the open-weights class; no audio input or non-text output.
- **Coding: 76/100.** SWE-bench Pro 61.7% (beating Opus 4.6 Max and Qwen3.7-Plus on Qwen's table), LiveCodeBench 90.3% and Terminal-Bench 2.1 73.0–79.8% are frontier-adjacent at 27B; capped by DeepSWE 42.2%, NL2Repo 42.3%, SWE-MM 38.6% and every coding number running on Qwen's own Claude-Code harness.
- **Cost efficiency: 90/100.** $0.33–0.50 / MTok input and $1.70–3.00 output maps just above the methodology's ~$0.60/$2.20 ≈ 92 tier, with Apache-2.0 self-hosting on ~17GB of VRAM as the real cost story and a measured $0.41–1.01 per Index task — roughly a tenth of Opus-class input pricing.
- **Overall Score: 78/100.** Best-fit recommendation: the self-hostable agentic-multimodal pick — class-leading computer use (OSWorld 84.3), SWE-Pro-class coding and 262K context at 27B parameters; pair with a frontier API model for DeepSWE-grade long-horizon coding.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Qwen HF model card, Alibaba Cloud Model Studio docs, Artificial Analysis, BenchmarkList, Qubrid, ARMES, Dell Enterprise Hub, WPS deep dive); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.8.md`, using the same headings.
