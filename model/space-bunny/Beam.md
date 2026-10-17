# Space Bunny Alpha — findings by Beam

- Source: Stealth/Space Bunny Alpha, `stealth/space-bunny-alpha`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha
- **Short description:** Anonymous stealth model (Sep 23, 2026) on OpenRouter/OpenCode: 1M context, multimodal (text/image/video), reasoning, tool calling. Free during preview. Retired Oct 5, 2026.
- **Provider / access:** OpenRouter `stealth/space-bunny-alpha`; OpenCode Zen.
- **Release / knowledge:** Appeared 2026-09-23; retired 2026-10-05. Knowledge cutoff not stated.
- **IDs:** `stealth/space-bunny-alpha`
- **Context window:** 1,000,000 tokens; max output 524,288.
- **Modalities:** text, image, video in; text out; reasoning yes (adjustable effort); tool calling yes; structured output yes (JSON, no schema enforce).
- **Pricing (as of 2026-10-17):** Free during preview ($0/$0); retired Oct 5.
- **Architecture:** Unknown (anonymous stealth model); params not published.

### Raw benchmarks found

- AI BENCHY: scores 5.2-7.5 across effort levels (low/none/high/max)
  - Coding: 5.5-5.6
  - Overall pass rate: 33.3%-55.6%
  - Response time: 3.89s-30.63s
- ChessBench: rank #34, 1550 Elo, 81.24 ACPL, $0.00/task (lowest cost)
- No official vendor benchmarks; community-evaluated only.
- SWE-bench Verified: not reported (union-alpha site claims 74.2% but that's for Union Alpha, not Space Bunny)

### Normalized scores (1–100)

- **Tool use: 60/100.** AI BENCHY coding 5.5-5.6; caps at limited benchmark coverage.
- **Reasoning: 62/100.** AI BENCHY reasoning varies; caps at limited coverage.
- **Context window: 84/100.** 1M window; caps at no published MRCR.
- **Multimodal: 74/100.** Text/image/video in; caps at no verified multimodal benchmarks.
- **Coding: 62/100.** AI BENCHY coding 5.5-5.6; caps at limited coverage.
- **Cost efficiency: 100/100.** Free during preview (retired).
- **Overall Score: 68.4/100.** Mean of five quality dims; low-confidence (anonymous stealth model, retired, minimal benchmarks). Provisional.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (spacebunnymodel.com, CloudPrice, AI BENCHY, ChessBench, HuggingFace blog); scores are normalized 1–100 interpretations, not official vendor scores. Anonymous stealth model with minimal benchmarks.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>2>