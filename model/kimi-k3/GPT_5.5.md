# Kimi K3 — findings by GPT 5.5

- Source: Moonshot AI/Kimi K3
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Kimi K3 is Moonshot AI's large open/frontier Mixture-of-Experts model with native multimodality, large context, and strong coding benchmarks.
- **Provider / access:** Moonshot/Kimi API and compatible routers; open-weight plans/availability are discussed in public coverage.
- **Release / knowledge:** Public benchmark/pricing coverage appeared in July/August 2026.
- **IDs:** `moonshotai/kimi-k3`
- **Context window:** 1M tokens.
- **Modalities:** Native vision/multimodal capability; text output.
- **Pricing (as of 2026-10-05):** Public pricing pages report $3/M input, $0.30/M cache-hit input, and $15/M output.
- **Architecture:** 2.8T total-parameter MoE with about 104B activated per token; another report describes 16 of 896 experts activated per token.

### Raw benchmarks found

Agent / tool use:

- The Model Gap: tracks **13** Kimi K3 benchmark scores, with 12 independent runs and one vendor claim (`https://themodelgap.com/models/kimi-k3`).
- Tom's Hardware: reports Kimi K3 beats Claude Fable 5 in Frontend Code Arena and gives model scale/context/pricing details (`https://www.tomshardware.com/tech-industry/artificial-intelligence/moonshot-releases-2-8-trillion-parameter-kimi-k3`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**

Reasoning / knowledge:

- Kimi K3 technical paper: introduces Kimi K3 as a 2.8T MoE with native vision and 1M context (`https://arxiv.org/abs/2607.24653`).
- Tom's Guide comparison: says Kimi K3 excelled at operational detail and architectural trade-off reasoning in a 15-prompt comparison with Claude Opus 5 (`https://www.tomsguide.com/ai/i-gave-claude-opus-5-and-kimi-k3-15-impossible-prompts-the-winner-surprised-me`).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- Frontend Code Arena: public coverage reports Kimi K3 beats Claude Fable 5.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- DeepSWE / Coding Index / other: **no exact verified public score found in accessible result**

Long context:

- Public Kimi K3 pages consistently report a 1M-token context window; no MRCR/RULER retrieval score was found.

### Normalized scores (1–100)

- **Tool use: 87/100.** Many tracked benchmarks and strong coding-agent reports support high tool use, capped by missing Terminal-Bench/Tau rows.
- **Reasoning: 88/100.** Large MoE scale and independent comparisons show strong reasoning, though not uniformly ahead of top proprietary models.
- **Context window: 90/100.** 1M context is excellent, capped by missing retrieval-depth scores.
- **Multimodal: 88/100.** Native vision/multimodal support is strong, though output modality breadth is unclear.
- **Coding: 90/100.** Frontend Code Arena strength and coding comparisons support a high score.
- **Cost efficiency: 78/100.** $3/$15 is reasonable for scale but not budget-tier; cache-hit pricing helps.
- **Overall Score: 89/100.** Mean of the five quality dimensions; best fit is large-context coding and multimodal reasoning where open/frontier access matters.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
