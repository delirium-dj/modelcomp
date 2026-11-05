# Claude Fable 5 — findings by Mistral Large 4

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's Fable-class flagship released 2026-06-22, paired with the restricted Mythos 5 preview; the direct predecessor of Fable 5.1 (2026-09-01). Variant note: distinct from Mythos 5 (restricted, safeguards-relaxed twin) and from Fable 5.1.
- **Provider / access:** Claude API / Claude Platform (`claude-fable-5`), Amazon Bedrock, Google Cloud, Microsoft Foundry; OpenRouter `anthropic/claude-fable-5`. Messages API.
- **Release / knowledge:** Released 2026-06-22 (official "Claude Fable 5 and Claude Mythos 5" announcement); system card published 2026. Knowledge cutoff not restated in reviewed snippets.
- **IDs:** `claude-fable-5` (Claude API); `anthropic/claude-fable-5` (OpenRouter).
- **Context window:** 1,000,000 tokens (Claude 5 family standard, per OpenRouter listing).
- **Modalities:** Text + image in, PDF in, text out; adaptive thinking; tool calls; JSON mode (Claude 5 family).
- **Pricing (as of 2026-11-05):** Fable 5's own list price is not separately restated in the reviewed sources; successor Fable 5.1 is $10/$50 per 1M with $0.25/M cache reads — treat Fable 5 as the same Fable-class band. No free tier.
- **Architecture:** Proprietary, weights not disclosed; Mythos-class training lineage shared with Mythos 5.

### Raw benchmarks found

Official announcement/system card + downstream tables cross-checked against morphllm, BenchLM, OpenRouter, Vals, thezvi; conflicts/gaps noted:

Agent / tool use:

- GDPval-AA: strong (lmcouncil/vals coverage; exact Elo not captured) — no verified exact number cited
- Epoch ECI: **163** (shared with Fable 5.1; GPT-6 Astra 169) (thezvi substack)
- OSWorld / AutomationBench / Claw-Eval: no verified public score found for claude-fable-5

Reasoning / knowledge:

- GPQA Diamond: **~89.4%** (OpenRouter model card snippet) — single-source, flagged
- HLE / LCR / CritPt: no verified public score found
- Artificial Analysis: Fable line strong at launch; exact Fable 5 index not captured (Fable 5.1 readings 53–66 across versions, cited in its report)

Coding:

- SWE-bench Verified: **95%** (morphllm launch table — "Fable 5 (95% SWE-bench Verified)")
- DeepSWE v1.1: independent review cites "DeepSWE ... at 95..."-class figures for the Fable line (llm-stats-ish aggregator) — exact % not captured; no verified number cited
- LiveCodeBench / SciCode: no verified public score found for this exact ID

Long context:

- 1M window (family standard); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 88/100.** Fable-class agent positioning and ECI 163, but few Fable-5-specific tool benchmarks published.
- **Reasoning: 90/100.** ECI 163 (top-tier at release) and GPQA ~89.4% single-source; no HLE/LCR published.
- **Context window: 96/100.** 1M family window in the 95–100 tier; no verified ≥98% retrieval at 512K+.
- **Multimodal: 85/100.** Text/image/PDF in, text out; no audio/video or non-text output.
- **Coding: 93/100.** SWE-bench Verified 95% at launch was among the highest published; fewer harness-specific numbers than newer models.
- **Cost efficiency: 30/100.** Fable-class $10/$50 band (successor pricing); no free tier.
- **Overall Score: 90/100.** Half-up mean of (88 + 90 + 96 + 85 + 93) / 5 = 90.4 → 90. Best fit: June–August 2026 Fable-class workhorse; superseded by Fable 5.1 (2026-09-01) at the same price band.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches + official Anthropic news page fetched, 2026-11-05 UTC); official Anthropic announcement/system card prioritized, cross-checked against morphllm, BenchLM, OpenRouter, Vals, llmlearner, thezvi; scarce exact numbers marked "no verified public score found" rather than invented. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5 and Claude Mythos 5 — Anthropic news (official, 2026-06-22)](https://www.anthropic.com/news/claude-fable-5-and-mythos-5)
  - [Claude Fable — Anthropic product page](https://www.anthropic.com/claude/fable)
  - [Model system cards — Anthropic](https://www.anthropic.com/system-cards)
  - [morphllm — Claude benchmarks 2026 (Fable 5: SWE-bench Verified 95%)](https://www.morphllm.com/claude-benchmarks)
  - [BenchLM — claude-fable](https://benchlm.ai/models/claude-fable)
  - [OpenRouter — anthropic/claude-fable-5 (GPQA ~89.4% snippet)](https://openrouter.ai/anthropic/claude-fable-5)
  - [Vals AI — anthropic_claude-fable-5](https://www.vals.ai/models/anthropic_claude-fable-5)
  - [thezvi substack — Fable 5/5.1 ECI 163 vs Astra 169](https://thezvi.substack.com/p/claude-mythos-51-and-fable-51-capabilities)
  - [DataCamp — Claude Fable 5 blog](https://www.datacamp.com/blog/claude-fable-5)
  - [userightai — claude-fable-5 (released June 22, 2026)](https://www.userightai.com/models/claude-fable-5)
