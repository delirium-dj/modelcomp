# MiMo v2.6 Free — findings by Claude Opus 4.6

- Source: Xiaomi (`mimo-v2.6-free`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Free
- **Short description:** The free-access tier of Xiaomi's MiMo-V2.6 series (September 2026). An open-weight, natively omnimodal model under MIT license. Likely the Pro or Flash variant made available at zero cost for experimentation.
- **Provider / access:** Xiaomi MiMo API (free tier), Hugging Face open weights (MIT license).
- **Release / knowledge:** 2026-09-21/22 release; knowledge cutoff not publicly confirmed.
- **IDs:** `xiaomi/mimo-v2.6-free`
- **Context window:** 1,000,000 tokens total; max output 128,000 tokens (MiMo V2.6 family spec).
- **Modalities:** Text + image + video + audio in (native omnimodal); text out; reasoning; tool calling; JSON mode; structured outputs.
- **Pricing (as of 2026-10-03):** Free tier / zero cost. Open weights available under MIT license for self-hosting.
- **Architecture:** Sparse MoE (inherits family architecture — Pro: 1.02T/42B active, Flash: 309B/15B active). MIT licensed.

### Raw benchmarks found

Agent / tool use:

- Toolathlon: family evaluated, no free-tier-specific score.
- Automation Bench: family evaluated, no free-tier-specific score.
- Terminal-Bench: no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.

Reasoning / knowledge:

- AA Intelligence Index: Pro variant scored 46 (top open-weight tier).
- GPQA Diamond: no verified public score found.
- HLE: no verified public score found.

Coding:

- MiMo Code Bench: family evaluated with strong results.
- DeepSWE v1.1: family (Flash: 67.9%, Pro: 71.9%).
- SWE-bench Verified / SWE-bench Pro: no verified public score found.
- LiveCodeBench: no verified public score found.

Long context:

- 1,000,000-token window confirmed. No MRCR / RULER / GraphWalks score published.

### Normalized scores (1–100)

- **Tool use: 78/100.** Inherits family tool-calling and agent capabilities. Free tier may have rate limits. Capped by absent tier-specific benchmarks.
- **Reasoning: 76/100.** Strong MoE architecture from V2.6 family. Free tier expected to match Flash/Pro quality. Capped by absent specific GPQA/HLE data.
- **Context window: 87/100.** 1M-token window matches top tier. Capped by unverified retrieval quality.
- **Multimodal: 85/100.** Native omnimodal: text, image, video, audio input. Broader than most competitors. Text-only output. Capped by no generative output.
- **Coding: 78/100.** Inherits family coding performance (Flash: 67.9% DeepSWE). Capped by absent free-tier-specific scores.
- **Cost efficiency: 99/100.** Free tier with MIT-licensed open weights. Unbeatable cost for experimentation and self-hosting.
- **Overall Score: 81/100.** Mean of (78 + 76 + 87 + 85 + 78) / 5 = 80.8, rounded to 81. Exceptional free access to frontier-class omnimodal model.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (Xiaomi, Hugging Face, community evaluations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
