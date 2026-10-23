# Muse Wonder — findings by GPT-5.6 Sol

- Source: Meta/Muse Wonder 1.0
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder
- **Short description:** Meta's proprietary frontier multimodal reasoning model for personal and professional agents, long-horizon coding, and computer use. Catalog descriptions emphasize Active Memory across conversations and Active Focus for sustained goal completion.
- **Provider / access:** Meta first-party API according to Artificial Analysis; OpenRouter Chat Completions as `meta/muse-wonder`; models.dev also records Requesty `muse-wonder-1.0`, Cloudflare AI Gateway `meta/muse-wonder-1.0`, and other gateway routes.
- **Release / knowledge:** Released 2026-10-12; no verified knowledge cutoff found.
- **IDs:** `meta/muse-wonder-1.0` canonical; `meta/muse-wonder` on OpenRouter; `muse-wonder-1.0` on Requesty. No OpenCode Zen Free ID found.
- **Context window:** 1,048,576 tokens. Maximum output is provider-specific and conflicting: models.dev records 131,072 on Cloudflare and 943,718 on Requesty/OpenRouter, while Artificial Analysis confirms only the 1M total window; do not assume the largest advertised output limit applies everywhere.
- **Modalities:** Text, image, audio, video, and PDF input; text output; reasoning-effort controls, tool calls, and structured output/JSON are cataloged. OpenRouter explicitly advertises tools, tool choice, reasoning effort, and response format.
- **Pricing (as of 2026-10-23):** Meta baseline $4.00 input / $20.00 output / $0.20 cache read per 1M tokens. Artificial Analysis independently reports the same input/output rates and a 95% cache discount; gateway markups can differ.
- **Architecture:** Proprietary; parameter count and weights are not public.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **52**, rank **#10/215** on the model page. The composite includes AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, and Terminal-Bench 4.0, but the public page did not expose exact per-evaluation values.
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA: no separately verifiable exact-model value found.
- Provider performance, not quality: **145.1 output tokens/s**, **25.23 s** time to first token, and **42.46 s** total for the provider-page workload (Artificial Analysis, Meta API).
- Claw-Eval / ClawProBench: no verified public score found.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **52**. Its ten-evaluation composite includes HLE, CritPt, AA-Omniscience, GDP.pdf, and AA-LCR v1.1; individual exact-model values were not available in the public text response.
- GPQA Diamond / standalone HLE / Omniscience Accuracy: no separately verifiable public score found.

Coding:

- The AA Index 52 includes Terminal-Bench 4.0 and SciCode among ten components, but no exact per-component values were exposed.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / DeepSWE: no verified public score found for the exact Muse Wonder ID.

Long context:

- Advertised total window: **1,048,576 tokens** across models.dev catalogs; Artificial Analysis independently reports **1M**.
- AA-LCR v1.1 is included in the Index 52 evaluation suite, but no standalone Muse Wonder retrieval score was exposed; therefore the context score does not receive the 100-point measured-retrieval bonus.

### Cross-source comparison

- [Artificial Analysis](https://artificialanalysis.ai/models/muse-wonder) supplies the only independently measured quality aggregate found: Index 52 and rank #10/215, plus 1M context, modalities, release date, pricing, and first-party performance measurements.
- [Artificial Analysis provider testing](https://artificialanalysis.ai/models/muse-wonder/providers) confirms Meta as the measured provider and reports 145.1 tokens/s, $4.54 average cost per Intelligence Index task, and provider latency figures.
- [OpenRouter](https://openrouter.ai/meta/muse-wonder) confirms a working Chat Completions route and advertises reasoning, tools, structured response format, and sampling controls, but publishes no independent quality score.
- [models.dev](https://models.dev/api.json) corroborates the canonical identity, 2026-10-12 release, $4/$20/$0.20 pricing, 1,048,576 context, broad input modalities, and multiple provider IDs. Its maximum-output values conflict by provider, so they are reported as a range rather than treated as a universal model capability.
- Exact-name searches of Meta's public pages, BenchLM, SWE-bench, Terminal-Bench, and HLE did not produce a separate official model card or another independent exact-model score. Consequently, the normalized quality scores are capped below frontier despite the strong AA aggregate.

### Normalized scores (1–100)

- **Tool use: 82/100.** The AA Index 52 includes several agentic/tool evaluations and OpenRouter confirms native tool controls, but absent per-evaluation Terminal-Bench, GDPval, or Tau scores cap confidence.
- **Reasoning: 86/100.** An AA Index of 52 is close to the methodology's frontier reference, but it remains below the 60+ frontier anchor and lacks standalone HLE, GPQA, and CritPt figures.
- **Context window: 95/100.** The independently corroborated 1M window reaches the 95-point tier; no published 512K+ retrieval percentage supports a higher score.
- **Multimodal: 95/100.** Text, image, PDF, video, and audio input with text output covers every input class in the rubric; no non-text output is advertised.
- **Coding: 82/100.** The AA composite includes SciCode and Terminal-Bench 4.0, but missing standalone results and no exact-ID SWE-bench or LiveCodeBench score cap this dimension.
- **Cost efficiency: 55/100.** $4/$20 per 1M is expensive, slightly above the methodology's $3/$15 reference, partly offset by a $0.20 cache-read rate.
- **Overall Score: 88/100.** Mean of the five non-cost dimensions; best suited to high-end multimodal agents needing million-token context, with benchmark granularity and price as the principal caveats.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-23
- Method: independent public internet research with more than three exact-name searches; compared Artificial Analysis measurements against OpenRouter and models.dev catalogs and retained provider conflicts explicitly. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
