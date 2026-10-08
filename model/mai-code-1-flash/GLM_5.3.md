# MAI-Code-1-Flash — findings by GLM 5.3

- Source: Microsoft AI (`mai-code-1-flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft AI's fast text-only coding model for GitHub Copilot (launched 2026-06-02), trained from the ground up on clean enterprise-grade data with no third-party distillation; built for high-volume iterative development with adaptive thinking and token-efficient solutions. Superseded by MAI-Code-1.1-Flash (the microsoft.ai model page for this ID now renders the 1.1 product).
- **Provider / access:** GitHub Copilot in VS Code (model picker + default auto picker); per-token API via GitHub Copilot at $0.75 in / $4.50 out per 1M, cached input $0.075 (project meta). Project meta lists Zen ID `opencode/mai-code-1-flash` (absent from the live Zen models list when re-checked 2026-10-08 — no Free ID).
- **Release / knowledge:** 2026-06-02 (launch blog, updated 2026-06-08); knowledge cutoff not stated.
- **IDs:** `opencode/mai-code-1-flash` (project meta).
- **Context window:** 256,000 total, 128,000 max output (project meta; BenchLM lists 256K for the family's 1.1 sibling).
- **Modalities:** text in/out only; adaptive thinking (concise on simple tasks, deeper reasoning budget on complex ones); agentic tool use in the Copilot harness; JSON mode not verified.
- **Pricing (as of 2026-10-08):** $0.75 in / $4.50 out per 1M via GitHub Copilot, cached input $0.075 (project meta).
- **Architecture:** proprietary; parameters undisclosed; trained directly with GitHub Copilot production harnesses.

### Raw benchmarks found

> Coverage warning: no independent aggregator tracks MAI-Code-1-Flash — Artificial Analysis has no page and BenchLM tracks only the 1.1 sibling (SWE-bench Verified 72.6%, Terminal-Bench 2.1 62.9%). The 1.0 numbers below are vendor-run from the launch blog; all other comparison tables (SWE-Bench Verified / Multilingual / Terminal Bench 2 pass rates, IF Bench, Advanced IF, Robust IF, τ¹-Bench, math/science/text reasoning) are published as images with no extractable values.

Agent / tool use:

- τ¹-Bench: **beats Claude Haiku 4.5** (exact value in image-only chart — no verified number) (Microsoft launch blog)
- GDPval / Tau3 / Claw-Eval / Terminal-Bench: **no verified public score found**

Reasoning / knowledge:

- Adversarial-reasoning suite (186 questions / 34 categories, inverted classics, impossible tasks): **85.8% adjusted accuracy**, ahead of Claude Haiku 4.5 overall (Microsoft launch blog — vendor's own benchmark; Einstellung traps below 50%)
- GPQA / HLE / AA Intelligence Index: **no verified public score found**

Coding:

- SWE-Bench Pro: **51.2%** vs Claude Haiku 4.5's 35.2% (+16 points; vendor-run in the production harness) (Microsoft launch blog)
- SWE-Bench Verified: beats Claude Haiku 4.5 with up to 60% fewer solution tokens (exact pass rate in image-only chart — no verified number) (Microsoft launch blog)
- SWE-Bench Multilingual / Terminal Bench 2: higher pass rates than Claude Haiku 4.5 (values in image-only charts) (Microsoft launch blog)
- IF Bench: **+28.9 points** over Claude Haiku 4.5; Advanced IF: **+14.5** (absolute values in image-only chart) (Microsoft launch blog)

Multimodal:

- **no verified public score found** — text-only model per project meta (the 1.1 successor added screenshot-to-prototype image input).

Long context:

- 256K window per project meta; no MRCR/RULER/LCR retrieval score published.

### Normalized scores (1–100)

- **Tool use: 62/100.** Purpose-built agentic coding in the production Copilot harness with a claimed τ¹-Bench lead over Haiku 4.5 — but the only agentic evidence is vendor-run and the exact τ¹ value is not extractable; no independent tool benchmark exists for this ID.
- **Reasoning: 68/100.** The 85.8% adversarial-reasoning result is genuinely strong (vendor's own 186-question anti-memorization suite), with claimed math/science wins over Haiku 4.5; capped hard by zero independent measurement and sub-50% Einstellung-trap performance.
- **Context window: 72/100.** 256K sits just above the 200K (=70) tier floor per project meta/family specs; no retrieval-quality measurement exists.
- **Multimodal: 15/100.** Text-only input and output — text-only band; the successor 1.1 added image input, this release did not.
- **Coding: 66/100.** SWE-Bench Pro 51.2% (verified, vendor-run) clears Haiku 4.5's 35.2% by 16 points and the token-efficiency claim is notable, but SWE-V/SWE-Multi/TB2 absolute values are image-only and no independent harness has published a number.
- **Cost efficiency: 87/100.** $0.75/$4.50 per 1M sits between the ~$0.60/$2.20 (~92) and ~$1.25/$4.25 (~88) classes, and the 60%-fewer-tokens efficiency story effectively buys down the price further.
- **Overall Score: 57/100.** (62 + 68 + 72 + 15 + 66) / 5 = 56.6 → 57. Best-fit recommendation: everyday Copilot-native coding where the harness match matters and token efficiency pays — as a standalone API pick, wait for independently measured numbers (the 1.1 successor is the stronger, tracked option).

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (Microsoft launch blog with vendor-run benchmarks, microsoft.ai model page, BenchLM family tracking, project pricing meta); scores are normalized 1–100 interpretations, not official vendor scores. All capability numbers are vendor-run; image-only benchmark tables were not scored.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
