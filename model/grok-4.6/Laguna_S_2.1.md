# Grok 4.6 — findings by Laguna S 2.1

> Independent findings; scored against the model-comparison methodology. Overview + scoring methodology: `../../model-comparison.md` · Signed cross-model log: `../../model-findings.md`
>
> - Source: xAI (`xai/grok-4.6`)
> - Date: 2026-09-20 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship post-Trump-deal frontier model for adversarial reasoning, open-ended coding and agentic red-teaming.
- **Provider / access:** xAI API (`api.x.ai`) and OpenRouter (`xai/grok-4.6`); X Premium+ subscribers get higher rate limits.
- **Release / knowledge:** Released August 27, 2026 (successor to Grok 4.5). Knowledge cutoff not disclosed.
- **IDs:** `xai/grok-4.6`
- **Context window:** 500,000 tokens
- **Modalities:** text, image in; text out
- **Pricing (as of 2026-09-20):** $2 in / $6 out per 1M tokens (<=200K prompt; cached input $0.50/M); doubles above 200K prompt tokens to $4 in / $12 out (cached $1/M). No Free tier.
- **Architecture:** MoE transformer; parameters and architecture not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (HokAI, Aug 30 2026; ahead of Claude Sonnet 5 and GPT-5.6 Terra, behind Sol at 87.4%)
- tau3-bench Banking: **51%** (Artificial Analysis, Sep 2 2026; ties Muse Spark 1.3)
- GDPval-AA v2: **1732 Elo** (Artificial Analysis, Sep 2 2026)
- GDP.pdf: **29%** (Artificial Analysis, Sep 2 2026)
- AutomationBench-AA: no verified public score found
- Terminal-Bench v4.0 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89%** (HokAI, rank 3 of 44, Aug 2026)
- AA Intelligence Index: **68** (Artificial Analysis, Aug 14 2026; leads the Frontier pack)
- AA-Omniscience (Accuracy): **+64 vs GPT-5.6 Sol** (Artificial Analysis, Sep 2 2026)
- AA-Omniscience (Hallucination): **9%** (Artificial Analysis, Sep 2 2026; ~83-point reduction vs Sol's 92%)
- Humanity's Last Exam: no verified public score found
- HLE / CritPt / LCR / MLCR / BenchLM overall / ARC-AGI: no verified public score found

Coding:

- DeepSWE: **63%** (Artificial Analysis, Sep 2 2026; vs GPT-5.6 Sol 72%)
- SWE-bench Verified: no verified public score found
- LiveCodeBench / SciCode / Vibe Code Bench / SWE-Atlas: no verified public score found

Long context:

- MRCR / RULER: no verified public score found (500K window asserted by HokAI)

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 83.3% with tau3-Bench Banking 51% and GDPval-AA 1732 Elo; capped by Terminal-Bench v4.0 / GDPval-AA-gap to Sol not disclosed.
- **Reasoning: 93/100.** AA Intelligence Index 68 (frontier-leading) with GPQA Diamond 89% and a 64-point AA-Omniscience accuracy delta vs Sol; capped by HLE/CritPt not disclosed.
- **Context window: 70/100.** 500K-token window (solid, but below the 1M frontier peers).
- **Multimodal: 65/100.** Text + image input, text output only (no audio/video).
- **Coding: 78/100.** DeepSWE 63% (vs Sol 72%); capped by no disclosed SWE-bench Verified.
- **Cost efficiency: 55/100.** Paid tier, but the cheaper $2/$6 standard rate with a 200K-prompt sweet spot.
- **Overall Score: 78/100.** Mean of the five quality dimensions (82 + 93 + 70 + 65 + 78) / 5 = 77.6 -> 78; the strongest pure-reasoning frontier model at mid-tier pricing.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-20
- Method: Independent public web research (HokAI, Artificial Analysis, xAI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.

---
