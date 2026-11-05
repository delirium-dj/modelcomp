# Qwen 3.8 (2.4T-A95B open checkpoint) — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`Qwen/Qwen3.8-2.4T-A95B`, open weights)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-09-24→10-16): **major identity correction**.
> The open checkpoint `Qwen3.8-2.4T-A95B` is a **trimmed, text-only build** — not the full
> multimodal Max API model the prior report scored. **Confirmed at primary-source level in
> a 2026-11-05 10-source deep-dive** — the HF card states verbatim: "Qwen3.8-2.4T-A95B is a
> **text-only model that requires thinking mode for all interactions. Multimodal inputs are
> not supported**, and thinking cannot be disabled", with "Context Length: 262,144 natively
> and extensible up to 1,010,000 tokens" and license tag `qwen3.8-max`; the HF card also
> frames Max as "the official version based on Qwen3.8-2.4T-A95B *with more features, such
> as vision input* & non-thinking support, 1M context length by default". Corroborated by
> Ridge ("trimmed, text-only build"; AA scores the open checkpoint separately at 40), the
> multimodal 27B sibling's contrasting card (image-text-to-text, Apache-2.0), and OneInfer's
> caveat that the benchmark table "is labelled Qwen3.8-Max, not Qwen3.8-2.4T-A95B".
> Multimodal 92→15, Context 96→80, Reasoning 93→92, Tool 90→89, Coding 87→86. Overall 92→72.

## Model card

- **Name:** Qwen3.8-2.4T-A95B (the Qwen3.8 flagship open-weights checkpoint — distinct from the hosted multimodal `qwen3.8-max` API model, tracked in its own folder, and from the Apache-2.0 `Qwen3.8-27B` dense model)
- **Short description:** Alibaba's most powerful open-weights release: a 2.4T-total / 95B-active MoE checkpoint "the first time that Qwen3.8 brings a Qwen-Max-class model to open release" — but as a **trimmed text-only build** (no vision input, no non-thinking mode, 262K native context) of the Max-class flagship whose full multimodal 1M experience ships only via the hosted API.
- **Provider / access:** Open weights on HF `Qwen/Qwen3.8-2.4T-A95B` + ModelScope (free download; ~1,469 GB at Q4 per llmrun — datacenter-class self-hosting only); hosted via Alibaba Cloud Model Studio `qwen3.8-max` ($2/$6, the full multimodal model). No Free ID on OpenCode Zen.
- **Release / knowledge:** Flagship API release August 3, 2026; **open weights released 2026-08-12** (QwenLM GitHub news; some secondary sources dated it 08-14/08-17). Knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.8-2.4T-A95B` (open weights); `qwen3.8-max` (hosted ID).
- **Context window:** **262,144 native, extensible to 1,010,000 tokens** (HF model overview, verbatim; Ridge concurs ~1,010,000 via YaRN) — the prior "1M native" reading belonged to the hosted API model. Best-practice serving config within the extended 1M: reasoning output up to 262,144 tokens + final response up to 131,072.
- **Modalities:** **text in / text out on the open checkpoint** — HF card, verbatim: "Qwen3.8-2.4T-A95B is a text-only model that requires thinking mode for all interactions. Multimodal inputs are not supported, and thinking cannot be disabled." Contrast: the 27B sibling's card is `image-text-to-text`, Apache-2.0, with a per-request thinking toggle.
- **Pricing (as of 2026-11-05):** open weights free to self-host (hardware is the cost: ~1.5 TB class memory); the hosted full model is $2.00/$6.00 per 1M with $0.25 cached and 50% batch discount.
- **Architecture:** 2.4 trillion total / 95 billion active MoE; **92 layers** laid out 23 × (3 × (Gated DeltaNet → MoE) → 1 × (Gated Attention → MoE)); **512 experts, 10 routed + 1 shared activated** (expert intermediate dim 2048); Gated DeltaNet 128 V / 16 QK heads (dim 128) + Gated Attention 64 Q / 4 KV heads (dim 256, RoPE 64); hidden 8192; token embedding 248,320 padded; MTP trained with multiple steps. (Correction this pass: the prior draft's "288 routed experts + 1 shared, top-8, 45 layers" did not match the HF card.) License: HF model tag **`qwen3.8-max`** (custom) — CONFLICT: the QwenLM GitHub repo carries an Apache-2.0 LICENSE file and the-decoder reported "Apache 2.0" for the release; read the HF tag as the weights license and the GitHub file as the repo/code license unless Alibaba clarifies.

### Raw benchmarks found

> The HF model card's headline table mirrors the hosted Max API rows (TB2.1 86.6, GPQA 92.6, SWE-Pro 67.7, DeepSWE 56.6, HLE 43.6, MRCRv2 92.9, IFBench 82.8, HealthBench 60.2, PRBench-Finance 58.3 — OneInfer transcription, verified Sept 8). Those rows measure the Max-class configuration; the trimmed open checkpoint's own independently measured rows are scarcer and are what move scores below.

Agent / tool use:

- Terminal-Bench 2.1: **86.6** (vendor card row, Claude Code avg@10 — mirrors Max) — CONFLICT unchanged: Vals independent on the hosted Max harness reads 67.4%
- OSWorld-Verified 86.1, Agents' Last Exam 52.4%, WideResearch 81.9%, CoWorkBench 74.8%, Toolathlon-Verified 72.5%, SkillsBench 70.2%, WebArena-Verified 66.8%, AndroidWorld 85.3%, MobileWorld 77.8%, AutomationBench 27.3%, OSWorld 2.0 19.4% (all vendor card rows mirroring Max)
- AA Agentic Index: **#3 globally** (independent placement cited at launch — measured on the hosted config)
- PaperBench **93.0**; HLE w/ tools **56.2%**; Hermes Bench 70.5% / Index 36.2%; MazeBench 0%
- GDPval / Tau2 / Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6** (vendor card) / **92.7** (AA independent — agrees within rounding per OneInfer)
- HLE: **43.6** (vendor) / **43.0** (AA independent — agrees within 0.6)
- IFBench: **82.8** (widest margin in its table)
- FrontierMath v2: Tiers 1–3 **74.7%** / Tier 4 **46.3%** (Epoch)
- MRCRv2: **92.9%** @256K and LongBench v2 **66.3%** (vendor rows)
- Artificial Analysis Intelligence Index for this checkpoint: **58.1** (v4.1.1-era, OneInfer Sept 8 reading, with Coding Index 71.8, SciCode 52.9, LCR 74.3) → **40** (per Ridge's Oct 31 receipt of AA's separate scoring of the open checkpoint) — version chain plus checkpoint-vs-hosted split documented; the hosted Max reads 45 (v4.3.2, 0902) / 34 (v5.0)
- LCR/MLCR/CritPt/Omniscience itemized: no verified public score found beyond the above

Coding:

- SWE-bench Pro: **67.7** (vendor row; behind Fable 5's 80.0, Opus 4.8's 69.2)
- SWE-bench (Vals) **85.6%**, LiveCodeBench (Vals) **87.9%**, DeepSWE **56.6%**, FrontierSWE **73.5%**, VulcanBench v3 **81.2%**, NL2Repo **55.9%**, OpenHarmony **60.8%**, FrontierSWE v2 **15.8%**, Bug Hunt 25.7 fixes (all vendor/independent rows from the Max-class table)
- CodeArena (webdev, independent): **#3 globally** at launch
- SWE-bench Verified / official LiveCodeBench / SciCode / Vibe: no verified public score found for this checkpoint

Long context:

- Native 262K (YaRN to ~1.01M); MRCRv2 **92.9%** @256K (vendor row) — frontier-grade at the measured depth; no ≥512K retrieval verified on the open checkpoint

Multimodal / vision:

- **None on the open checkpoint** (text-only build per Ridge + HF card framing). The vision suite (MathVision 95.2, LogicVista 91.9, CharXiv 93.5, Video-MME 90.4, OmniDocBench 92.1, MMMU-Pro 82.3) belongs to the hosted `qwen3.8-max` API model.

### Normalized scores (1–100)

- **Tool use: 89/100.** CHANGED from 90 — the vendor agentic rows remain elite on paper (TB2.1 86.6, OSWorld-Verified 86.1, ALE 52.4%) but they mirror the Max configuration; the trimmed open checkpoint's independently verified tool evidence is thinner, docking one point.
- **Reasoning: 92/100.** CHANGED from 93 — GPQA 92.6/92.7 (vendor/AA agree), HLE 43.6/43.0, PaperBench 93.0, IFBench 82.8 and FrontierMath 74.7/46.3 still clear the frontier references; docked one point for the trimmed-checkpoint uncertainty and the AA Index chain falling to 40.
- **Context window: 80/100.** CHANGED from 96 — the honest reading of the open checkpoint is 262K native (YaRN-extended to ~1.01M), not native 1M: inside the 200K–500K tier (65–84) with the extension and the 92.9% MRCR@256K row supporting the upper end.
- **Multimodal: 15/100.** CHANGED from 92 — the open checkpoint is text-only per the HF card's own framing and Ridge's receipts; the entire vision suite previously scored here belongs to the hosted `qwen3.8-max` model.
- **Coding: 86/100.** CHANGED from 87 — Vals SWE-bench 85.6%, LCB 87.9%, FrontierSWE 73.5% and VulcanBench 81.2% are strong but Max-config rows; SWE-Pro 67.7 and DeepSWE 56.6 hold it below 90, docked for the checkpoint split.
- **Cost efficiency: 92/100.** Unchanged — weights are free (the ~1.5 TB memory class makes self-hosting a datacenter project, but per-token cost is $0); the hosted alternative is $2/$6.
- **Overall Score: 72/100.** CHANGED from 92 — (89 + 92 + 80 + 15 + 86) / 5 = 362/5 = 72.4 → 72. The prior 92 scored the hosted Max API model's multimodal and context claims under this folder's open-weights identity; corrected, the open checkpoint is a frontier-class **text** model with a 262K window — still the strongest open release of its summer, but evaluate it as what ships in the tarball, and use `qwen3.8-max` when vision or native 1M matters.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research (3 web searches: Ridge bench receipts (open-checkpoint text-only/262K/custom-license findings + AA 40 reading), HF model card + OneInfer transcription (vendor table, AA agreement within rounding, "with more features, such as vision input" framing), llmrun hardware footprint + Gate News/the-decoder family coverage); the checkpoint-vs-hosted split is documented inline rather than averaged; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.9.md`, using the same headings.
