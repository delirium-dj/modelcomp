# MiMo-V2.6-Distill-Qwen-9B — findings by Space Bunny Alpha

- Source: Xiaomi MiMo / MiMo-V2.6-Distill-Qwen-9B
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** Xiaomi MiMo's 9B agentic SFT checkpoint, released alongside the MiMo-V2.6 Pro/Flash open-weight drops as a starting point for agentic reinforcement-learning research. It is a distillation of Qwen3.5-9B onto MiMo-generated data — not a MiMo MoE model, and not the same thing as MiMo-V2.6-Flash-RL or MiMo-V2.6-Pro-RL.
- **Provider / access:** Open weights only — `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` on Hugging Face. **No hosted inference provider serves it** (HF: "This model isn't deployed by any Inference Provider"), so it is not reachable through any API ID. Serve locally with SGLang (`--reasoning-parser mimo`), vLLM or Docker Model Runner; the checkpoint ships its own tokenizer and MiMo v2.6 chat template.
- **Release / knowledge:** Released with the MiMo-V2.6 series on 2026-09-22 (Xiaomi MiMo news page; MiMo-V2.6 technical report dated 2026-09-21). No knowledge cutoff published.
- **Context window:** The distill's own model card does not restate a context length. It inherits the base architecture's `max_position_embeddings: 262144` from Qwen3.5-9B's `config.json` (verified), which Qwen documents as 262,144 native and extensible to ~1,010,000 with RoPE scaling. Treat **262,144 as the documented ceiling, inherited rather than re-verified for this checkpoint**.
- **Modalities:** Image-Text-to-Text — **image and text input, text output** (HF pipeline tag `image-text-to-text`, loaded via `AutoModelForMultimodalLM` with an `AutoProcessor`). Reasoning: yes, thinking is enabled explicitly via `chat_template_kwargs: {"enable_thinking": True}` and surfaced with `--reasoning-parser mimo`. Tool use: supported (`--tool-call-parser`). Tags include `agentic`, `tool-use`, `distillation`, `supervised-fine-tuning`.
- **Pricing (as of 2026-09-30):** **No API price — there is no hosted route.** Weights are MIT-licensed, so the only cost is self-hosting. Reference local throughput for a 4-bit `oQ4e` quant: Apple M5 (10-core, 32 GB) and M4 Max (40-core, 128 GB), 16K context — prefill 712–1,029 tok/s, generation 23.1–23.9 tok/s (OMLX community benchmark, 2026-09-23).
- **Architecture:** Dense 9B, inherited from Qwen3.5-9B (32 layers, hidden 4096, 248,320 padded token embedding, hybrid Gated DeltaNet + gated attention layout) with a vision encoder. Weights BF16, 55 community quantizations and 11 merges exist.
- **Training data:** Weighted SFT mixture of **77.4B total tokens, 27.2B loss-bearing** — Code 23.2B (29.9%), General 22.0B (28.5%), Visual 21.2B (27.4%), Cyber 11.0B (14.2%).

### Raw benchmarks found

> Every number below is Xiaomi's own evaluation of the released **SFT checkpoint**, as published on the Hugging Face model card and reproduced from the MiMo-V2.6 technical report. Baseline is Qwen3.5-9B, the fine-tune's parent. Rows marked † are Xiaomi-internal evaluation sets and are not independently reproducible. `avg@3` / `avg@1` are the vendor's aggregation over multiple attempts, not the `pass@1` convention used elsewhere in this dataset — treat cross-model comparisons with care.

Coding:

- SWE-bench Verified: **61.1** (avg@3) vs 60.0 base — also published to the HF eval-results leaderboard for `SWE-bench/SWE-bench_Verified`.
- SWE-bench Pro: **44.6** (avg@3) vs 32.0 base — also published to the ScaleAI/SWE-bench_Pro leaderboard.
- Terminal-Bench 2.1: **37.1** (avg@1) vs 27.0 base — also published to the `harborframework/terminal-bench-2.1` leaderboard.
- MiMo Code (mini)†: **51.6** (avg@3) vs 19.5 base.
- LiveCodeBench, SciCode, OJBench, Vibe Code Bench, DeepSWE: **no verified public score found** for this checkpoint.

Tool use / agentic:

- AutomationBench v1.0.6: **30.3** (avg@1) vs 5.0 base — a 6× improvement over its parent.
- Toolathlon-Verified: **35.2** (avg@1) vs 25.9 base — also published to the `hkust-nlp/Toolathlon` leaderboard.
- JobBench: **18.3** (avg@1) vs 2.6 base.
- OfficeQA: **19.5** (avg@1) vs 9.0 base.
- MiMo General (mini)†: **62.2** (avg@1) vs 28.5 base.
- τ³-Banking / τ²-bench, GDPval-AA, Claw-Eval, OSWorld: **no verified public score found**.

Reasoning / knowledge:

- MiMo Cyber (mini)†: **31.3** (avg@3) vs 5.7 base.
- GPQA Diamond, HLE, CritPt, AA-LCR, Artificial Analysis Intelligence Index, LiveBench: **no verified public score found** for this checkpoint. The parent's own figures (Qwen3.5-9B: GPQA Diamond 81.7, MMLU-Pro 82.5, LiveCodeBench v6 65.6) are **Qwen's numbers for Qwen3.5-9B**, not measurements of this distillation, and are deliberately not carried over.

Long context:

- 262,144 tokens inherited from the Qwen3.5-9B architecture (see model card). No MRCR / RULER / GraphWalks / long-context retrieval measurement exists for this checkpoint, and every published benchmark above is short-context.

Multimodal:

- MiMo Visual Coding (mini)†: **64.0** (avg@1) vs 61.7 base — the only visual number, and it is an internal set.
- MMMU / MMMU-Pro / CharXiv: **no verified public score found**. Native image input is verified structurally by the `image-text-to-text` pipeline tag and the documented `AutoProcessor` image path.

### Normalized scores (1–100)

- **Tool use: 52/100.** The SFT produces a real step-change over its parent on agentic work — AutomationBench 30.3 vs 5.0, JobBench 18.3 vs 2.6, MiMo General 62.2 vs 28.5 — and Toolathlon-Verified 35.2 lands in the methodology's mid band. But 30.3 on AutomationBench and 37.1 on Terminal-Bench 2.1 sit below the mid reference (TB2.1 45–60%), and no τ-bench or GDPval figure exists to lift it.
- **Reasoning: 52/100.** Scored on capability evidence plus the Cybersecurity result (MiMo Cyber 31.3, up from 5.7). There is no GPQA Diamond, HLE, CritPt or Intelligence Index measurement for this checkpoint at all, so it cannot be placed above the methodology's mid band of 55–65 by evidence — and the parent's 81.7 GPQA belongs to Qwen3.5-9B, not here.
- **Context window: 72/100.** 262,144 tokens is a verified architectural ceiling inherited from Qwen3.5-9B's config, placing it in the 200K–500K band (65–84) just above the 200K = 70 baseline. It is not higher because the distill card publishes no context figure of its own, no retrieval test exists at any depth, and the local 4-bit runs people actually use are configured at 16K.
- **Multimodal: 64/100.** Native image input is structurally verified (image-text-to-text, `AutoModelForMultimodalLM`, documented image payloads), which is the +image band (60–70). The only visual score is an internal set, and there is no audio, video or non-text output, so it stays below 75.
- **Coding: 65/100.** SWE-bench Verified 61.1 and SWE-bench Pro 44.6 are respectable for a 9B dense model — Pro is up 12.6 points over its parent — and both are on public leaderboards. Terminal-Bench 2.1 at 37.1 and the vendor's own `avg@3` aggregation (rather than `pass@1`) keep it out of the frontier band, where the reference is DeepSWE 74%+, TB2.1 85%+, SciCode 55%+.
- **Cost efficiency: 97/100.** No hosted route exists, so there is no per-token price at all: MIT-licensed weights running locally cost effectively $0 in tokens. A 9B dense model at 4-bit fits a 32 GB laptop and sustains ~23 tok/s generation, so the practical ceiling is near-total — docked by the fact that "free" here means *your own hardware and your own ops*, not a vendor's free tier, and generation speed is roughly 10× slower than a frontier API.
- **Overall Score: 61/100.** (52 + 52 + 72 + 64 + 65) / 5 = 61.0 → **61**. Best fit as a self-hosted 9B agentic/RL research starting point or a private local coding-and-vision executor where data must not leave the machine; not a frontier choice, since every quality score rests on vendor-run evaluations and half of the useful rows are internal sets.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-30
- Method: the Xiaomi MiMo Hugging Face model card for `MiMo-V2.6-Distill-Qwen-9B` (evaluation table, training-data mixture, quickstart), the HF eval-results leaderboard entries, Qwen3.5-9B's `config.json` for the inherited context ceiling, Xiaomi's MiMo-V2.6 news page and technical report, and the OMLX community local-throughput benchmark. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_v2.6_Distill_Independent.md`, using the same headings — ideally once an independent lab evaluates the checkpoint rather than the vendor.