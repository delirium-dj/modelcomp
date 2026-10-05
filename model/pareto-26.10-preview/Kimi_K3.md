# Pareto 26.10 Preview — findings by Kimi K3

- Source: Unbiased / Pareto 26.10 Preview (`unbiased/pareto-26.10-preview`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's blended/composite multimodal model — one request is run across a mix of frontier and open-source models and the best result is returned (aimlapi.com). Successor to `pareto-26.9`, in preview since 2026-10-01; slug graduates in place when stable.
- **Provider / access:** OpenCode Zen `opencode/pareto-26.10-preview` (no Zen Free ID); Unbiased API (`pareto-26.10-preview`); OpenRouter `unbiased/pareto-26.10-preview`; Cloudflare AI Gateway (ZDR tier). Chat Completions-style.
- **Release / knowledge:** Preview released 2026-10-01 (Unbiased blog); preview snapshot, expected to improve before freezing; knowledge cutoff not published (composite stack).
- **IDs:** `opencode/pareto-26.10-preview` on Zen; `unbiased/pareto-26.10-preview` on OpenRouter.
- **Context window:** 1,048,576 tokens in (4× the 26.9's 262,144; aimlapi.com); 131,000 max output per Zen metadata.
- **Modalities:** Text + image in; text out (vendor model card); reasoning composite.
- **Pricing (as of 2026-10-05):** $0.80 / $3.20 per 1M (cached input $0.03) — 68% cheaper input than 26.9; full zero-data-retention tier on OpenRouter/Cloudflare traffic.
- **Architecture:** Proprietary composite/blend ("not one set of weights"); architecture undisclosed.

### Raw benchmarks found

All four numbers are Unbiased preliminary vendor runs of 2026-10-01 (published on unbiased.ai blog + model card; transcribed by benchlm.ai). Not independently validated yet.

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** ($0.48 mean cost/task) — vendor preliminary
- DeepSWE v1.1: **69.9%** ($0.24 mean cost/task) — vendor preliminary
- Tau3 / GDPval-AA / Claw-Eval: **no verified public score found**
- lmmarketcap composite: Coding rank #240, composite 40/100 (third-party site, methodology unclear — noted, not used for scoring)

Reasoning / knowledge:

- GPQA-Diamond: **92.4%** ($0.004/task) — vendor preliminary
- Humanity's Last Exam (text-only): **49.9%** ($0.008/task) — vendor preliminary
- LCR / CritPt / Intelligence Index / Omniscience: **no verified public score found**

Coding:

- DeepSWE v1.1: **69.9%** (agentic coding, see above)
- SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found**

Long context:

- No long-context retrieval benchmark (MRCR/RULER/GraphWalks) reported; 1M window is vendor-listed, not retrieval-verified.

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 4.0 at 50.8% is a strong mid-upper agentic number, but it is vendor-preliminary only and Tau3/GDPval/Claw-Eval are missing — capped below the frontier reference band.
- **Reasoning: 92/100.** GPQA 92.4% (frontier ref ≥90%) and HLE text-only 49.9% (frontier ref ≥40%) both clear the 90–100 references; held at 92 because every number is same-day vendor-preliminary with no independent reproduction.
- **Context window: 95/100.** ≥1M tier (95–100); no retrieval-at-length benchmark published, so it sits at the band floor rather than 100.
- **Multimodal: 65/100.** Text + image in, text out → 60–70 band per rubric; no audio/video input.
- **Coding: 84/100.** DeepSWE v1.1 69.9% is just under the 74%+ frontier reference with frontier-beating cost ($0.24/task vs Fable 5's $13.50 at 70.0%); vendor-only evidence caps it below 90.
- **Cost efficiency: 90/100.** $0.80/$3.20 with $0.03 cached sits between the ~$0.60/$2.20 (92) and ~$1.25/$4.25 (88) reference points; ZDR tier adds practical value.
- **Overall Score: 82/100.** Mean of (76 + 92 + 95 + 65 + 84) / 5 = 82.4 → 82. Best fit: long-horizon research/coding with privacy requirements (ZDR) at open-model pricing; re-verify scores once independent evals land.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-05
- Method: public internet research (unbiased.ai blog + model card, benchlm.ai, aimlapi.com, openrouter.ai, lmmarketcap.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
