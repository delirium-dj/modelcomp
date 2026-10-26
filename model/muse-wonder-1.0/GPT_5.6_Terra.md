# Muse Wonder 1.0 — findings by GPT 5.6 Terra

- Source: Meta (`muse-wonder-1.0`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's proprietary frontier reasoning model for long-running agents, computer use, and large-repository coding. Muse Wonder Full is a separately access-restricted sibling and is not used as evidence for this API model.
- **Provider / access:** Meta Model API and Muse Code; Meta's quickstart specifies an OpenAI SDK-compatible client. Vals AI evaluates the Meta-hosted model.
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not disclosed.
- **IDs:** Meta `muse-wonder-1.0`; Vals AI `meta/muse-wonder`.
- **Context window:** 1M tokens; Vals reports a 131K maximum output limit.
- **Modalities:** Text, image, speech, and video input; text output. Meta positions the model for advanced computer use and multimodal agents.
- **Pricing (as of 2026-10-26):** $4 input / $0.20 cached input / $20 output per 1M tokens through Meta Model API.
- **Architecture:** Proprietary; Meta has not disclosed parameter count or architecture.

### Raw benchmarks found

Agent / tool use:

- [Vals Index](https://www.vals.ai/models/meta_muse-wonder): **64.88% ±1.07**, rank **6/27** (independent Vals composite).
- [Terminal-Bench 4.0](https://www.vals.ai/models/meta_muse-wonder): **49.49% ±2.20**, rank **10/55**; [Terminal-Bench-Science](https://www.vals.ai/models/meta_muse-wonder): **22.86% ±5.05**, rank **11/43** (independent Vals evaluation).
- [CyberBench v1.1](https://www.vals.ai/models/meta_muse-wonder): **80.36% ±5.13**, rank **1/47**; [CUA-bench](https://www.vals.ai/models/meta_muse-wonder): **7.17%**, rank **6/9** (independent Vals evaluation).
- AutomationBench-AA: **56.6%**, JobBench: **39.1%**, and OSWorld v2.1: **72.6% partial / 34.3% binary** (Meta scorecard, max reasoning).

Reasoning / knowledge:

- [Artificial Analysis Intelligence Index](https://artificialanalysis.ai/models/muse-wonder): **52**, rank **10/221** in its displayed class (independent composite covering ten evaluations).
- Meta's scorecard reports Personal Superintelligence Index **59.0**, Harvey LAB-AA **56.0**, Vals Finance Agent v2 **54.3**, HealthBench Pro **10.0**, and GDP.pdf **60.5** (max reasoning; vendor-reported).
- [ProofBench v1.1](https://www.vals.ai/models/meta_muse-wonder): **84.00% ±3.69**, rank **13/52**; [IOI](https://www.vals.ai/models/meta_muse-wonder): **66.94% ±4.91**, rank **16/46** (independent Vals evaluation).

Coding:

- [Code Migration v1.1](https://www.vals.ai/models/meta_muse-wonder): **72.36% ±3.19**, rank **5/28**; [Vibe Code Bench v1.1](https://www.vals.ai/models/meta_muse-wonder): **83.09% ±2.49**, rank **20/119** (independent Vals evaluation).
- [SWE-bench Multimodal](https://www.vals.ai/models/meta_muse-wonder): **45.63% ±2.28**, rank **7/20** (independent Vals evaluation).
- DeepSWE 1.1: **52.0%**, SWE-Marathon: **78.8%**, and ProgramBench: **53.1%** (Meta scorecard, max reasoning).

Long context:

- MemoryBench: **85.6** (Meta scorecard, max reasoning).
- The confirmed **1M-token** context window is independently corroborated by Artificial Analysis and Vals AI; no independent retrieval-at-window-limit score was found.

Meta's scorecard uses max reasoning and is valuable for coverage but remains vendor evidence. The independent Artificial Analysis and Vals results broadly support strong capability while showing uneven computer-use and terminal-agent performance; no Muse Wonder Full results are folded into this report.

### Normalized scores (1–100)

- **Tool use: 84/100.** Vals Index 64.88%, CyberBench 80.36%, and Meta's strong OSWorld partial result show capable agents, while Terminal-Bench 4.0 at 49.49% and CUA-bench 7.17% prevent a frontier tool-use score.
- **Reasoning: 84/100.** AA Intelligence Index 52 and Vals ProofBench/IOI scores are strong independent evidence, but Meta's 10.0 HealthBench Pro result indicates material domain variation.
- **Context window: 99/100.** Four sources confirm the frontier-scale 1M window; MemoryBench 85.6 supports persistent context, while the lack of independent million-token retrieval testing withholds a perfect score.
- **Multimodal: 93/100.** Text, image, speech, and video inputs provide unusually broad native coverage, capped because output is text-only and no independent multimodal-quality composite was found.
- **Coding: 84/100.** Independent Code Migration 72.36% and Vibe Code 83.09% plus Meta's SWE-Marathon 78.8% are strong, but Terminal-Bench 4.0 49.49% and SWE-bench Multimodal 45.63% show important limitations.
- **Cost efficiency: 63/100.** The 1M window and $0.20 cache price aid repeated-context use, but $4/$20 per 1M is expensive versus current API peers and AA estimates $8.63 per Intelligence Index task.
- **Overall Score: 89/100.** Half-up mean of Tool 84 + Reasoning 84 + Context 99 + Multimodal 93 + Coding 84 = 444/5 = 88.8. Best fit: multimodal, long-context agents where strong coding and reasoning outweigh a high API price and the deployment harness has been tested.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-26
- Method: fresh public-web research across Meta's official model card, Artificial Analysis, and Vals AI; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
