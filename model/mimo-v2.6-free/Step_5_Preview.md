# MiMo-V2.6-Flash Free — findings by Step 5 Preview

- Source: Xiaomi / OpenCode Zen (`mimo-v2.6-flash-free`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash Free
- **Short description:** The zero-cost OpenCode Zen route for Xiaomi's MiMo-V2.6-Flash (announced 2026-09-21 as a one-week promotion alongside the MiMo-V2.6 launch). Same 309B-total/15B-active MIT-licensed weights as the paid Flash model, but the Zen free route caps context at 200K tokens and output at 32K (vs the paid model's 1M/128K) and is usable only from inside OpenCode (direct unauthenticated calls return HTTP 403 `FreeTierError`). Data collected during the free window may be used to improve the model — the explicit exception to OpenCode's zero-retention policy.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.6-flash-free` (client-only, free during the promotional window); the paid sibling is `xiaomi/mimo-v2.6-flash` ($0.14/$0.28 per MTok); weights `XiaomiMiMo/MiMo-V2.6-Flash-RL` on Hugging Face (MIT).
- **Release / knowledge:** free route 2026-09-21/22; base model 2026-09-21/22. Knowledge cutoff not disclosed.
- **IDs:** `mimo-v2.6-flash-free` (OpenCode Zen), `xiaomi/mimo-v2.6-flash` (paid route).
- **Context window:** **200,000 tokens on the free Zen route** (the underlying model natively supports 1,048,576); max output 32,000 on the route (128K on the paid model).
- **Modalities:** Text and image input listed for the Zen route (base model: text, image, video, audio in → text out); reasoning supported; tool calling supported.
- **Pricing (as of 2026-10-09):** **$0.00 / $0.00 per MTok** (input, output, cache reads all free during the promotion); post-promotion the paid route is $0.14/$0.28 with $0.0028 cache hits. Batch API halves the paid rates.
- **Architecture:** Sparse MoE, 309B total / 15B active per token (inherited); hybrid MSA-style efficiency work by Xiaomi.

### Raw benchmarks found

(No separate benchmark numbers exist for the free route — it is the same weights with a smaller context/output cap. Evidence base = MiMo-V2.6-Flash.)

- Terminal-Bench 2.1: **87.6%** (vendor, #15/194) / **76.40%** (Vals AI Terminus-2 — independent)
- Terminal-Bench 4.0: **28.8%** (vendor) / **24.2%** (Vals, default effort)
- AutomationBench v1.0.6: **52.3%** (vendor — above Claude Opus 5's 50.3 and GPT-5.6 Sol's 45.8)
- Toolathlon-Verified: **73.6%** (vendor); Agents' Last Exam: **27.6%** (vendor)
- OSWorld-Verified: **80.8%** (vendor; Opus 5 83.4, Fable 5 86.0); JobBench: **61.2%** (vendor)
- DeepSWE v1.1: **67.9%** (vendor; #18/52; O-5.5 leads 74.2)
- Artificial Analysis Intelligence Index: **37.9** (independent, 85th pct — Fable 5.1 leads at 65.7)
- AA-LCR: **74.3%** (independent, 78th pct; K3 leads at 88.7%)
- SciCode: **51.3%** (85th pct)
- GPQA Diamond / HLE / MMLU-Pro / SWE-bench: **no vendor-published score** (Xiaomi publishes only agentic rows for Flash; third-party quant evals: MMLU-Pro 76.4%, GPQA-D ~56–86% budget-limited — unofficial)
- Sibling context: MiMo-V2.6-Pro scores 46 on the AA Intelligence Index — the strongest open-weights model per Xiaomi, behind only Claude Fable 5.1 and GPT-6 Astra

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 87.6% (vendor) / 76.4% (Vals), AutomationBench 52.3%, Toolathlon 73.6% and OSWorld-Verified 80.8% sit mid-frontier; capped by Terminal-Bench 4.0 at 28.8%/24.2%, Agents' Last Exam 27.6%, no public GDPval-AA or Claw-Eval, and every agentic number being Xiaomi's own harness.
- **Reasoning: 72/100.** With no vendor GPQA/HLE and only the independent AA Intelligence Index (37.9) plus AA-LCR 74.3% and SciCode 51.3%, the evidence supports a strong mid-tier by proxy — consistent with inheriting K3-adjacent reasoning — but the flagship reasoning suites are unmeasured for this exact model.
- **Context window: 74/100.** The free route caps the 1M-native model at 200,000 tokens with 32K output — squarely the 200K tier of the methodology's banding; AA-LCR 74.3% (measured on the 1M model) supports retention, but the route itself cannot use more than 200K.
- **Multimodal: 70/100.** The base model is omni-modal (text/image/video/audio in → text out) and the Zen route lists text + image; scored at the top of the image-input band with no MMMU-Pro number published for Flash to justify more.
- **Coding: 82/100.** DeepSWE v1.1 67.9% (vendor) is only ~6 points off the Opus-5.5 lead, TB2.1 87.6% (76.4% independent) and third-party HumanEval+ 90.2% / GSM8K 96.4% back it; capped by the 11-point vendor/independent Terminal-Bench spread and the absence of any vendor SWE-bench figure.
- **Cost efficiency: 100/100.** $0.00 per MTok for input, output and cache reads is the methodology's $0 = 100 tier — the route's entire value proposition during the promotional window (with the training-data caveat attached).
- **Overall Score: 76/100.** Best-fit recommendation: a free promotional window on a Pro-adjacent agentic-coding model — best used for evaluation and non-confidential agent workloads inside OpenCode; verify on your own harness given how thin the independent coverage is, and budget for the paid $0.14/$0.28 route afterward.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Xiaomi mimo.mi.com launch/pricing pages + HF model card, OpenCode Zen docs + pi.dev/models.dev catalogs, Vals AI, BenchmarkList, omidsaffari.com free-tier analysis, APISLAND); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_V2.6_Pro.md`, using the same headings.
