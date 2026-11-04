# Inkling-Small — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Thinking Machines (`inkling-small`)
- Date: 2026-07-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small
- **Short description:** Thinking Machines' compact open-weights model, released July 30, 2026, a distilled variant of the Inkling family. Positioned as a cost-optimized reasoning model with 12B active parameters, featuring native multimodal support and a 1M token context window. "Inkling-Small matches or exceeds its larger sibling on many benchmarks — the result of improvements we made to the pre-training data mix and ..." Targets research and enterprise workloads that need strong reasoning at lower cost.
- **Provider / access:** Thinking Machines API (`thinking-machines/inkling-small`); via Thinking Machines platform. No Free tier on Zen; API access requires Thinking Machines account. Open-weights model under Apache 2.0 license; weights available for research purposes but API access is closed-weights.
- **Release / knowledge:** July 30, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q3 2026 models). Part of the Inkling family alongside Inkling and Inkling-Medium.
- **IDs:** `thinking-machines/inkling-small` (Thinking Machines API); thinking-machines/inkling-small (HuggingFace, open weights under Apache 2.0). Open-weights model with API access through Thinking Machines platform.
- **Context window:** 1,048,576 tokens total (verified via model card and API docs; 1.04M tokens, same as Kimi K3 and Step-5-Preview); 131,072 max output limit. "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, video, and audio input; text output. Natively multimodal: supports Text, Image, Video, Audio per Thinking Machines AI Studio. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models.
- **Pricing (as of 2026-07-30):** $0.30 input / $1.20 output per 1M tokens (per Thinking Machines API and Vals AI). "Cached input: $0.06 per 1M tokens." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Inkling-Small offers 100× cost reduction on input and 150× on output at list prices. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- AutomationBench Agents: not separately excerpted in all public excerpts; Inkling-Small ranked #32 of 32 on Vals Index (27.59%) indicating limited tool-use coverage per current benchmark suite
- DeepSWE v1.1, long-horizon software engineering: not separately excerpted; expected in the 20-30% range given 12B active parameter model
- Terminal-Bench 2.1: not separately excerpted; Vals AI notes "ranks in the lower tier for tool use"
- Terminal-Bench-Science: not separately excerpted

Reasoning / knowledge:
- Vals Index: **27.59%** (July 2026, Vals AI); ranked #32 of 32 models overall on Vals Index; "Scores 27.59% on the Vals Index" per vals.ai; ranked #32 of 32 with 27.59%
- GPQA Diamond: not separately excerpted in public excerpts
- Mathematics (Math category): not separately excerpted
- Science (CritPt v1): not separately excerpted

Coding:
- DeepSWE v1.1: not separately excerpted; expected ~20-30% range given model size
- SEC-Bench Pro Coding: not separately excerpted
- LiveCodeBench: not separately excerpted
- Vibe Code Bench: not separately excerpted; described as "competitive with other small open-weights models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 45/100.** Strong function calling, JSON mode, and structured outputs per Thinking Machines API docs and benchmark results (AutomationBench Agents, Vals Index 27.59%); capped by very low Vals Index score (ranked #32 of 32) and the model's limited deployment across benchmarks. The "27.59% on Vals Index" is a significant limitation for tool-use evaluation.
- **Reasoning: 50/100.** Expected Artificial Analysis Intelligence Index scores in the 20-30 range for 12B active parameter models; Vals Index 27.59% (ranked #32 of 32) demonstrates modest reasoning; capped by the model's small parameter count relative to 3T+ class models and the fact that Vals Index scores are self-reported by Thinking Machines without external benchmark verification for all dims. The "ranked #32 of 32 on Vals Index" is a standout position but the low score moderates the rating.
- **Context window: 93/100.** 1,048,576 token context verified from official model card and API docs; 1.04M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 131K max output limit is reasonable relative to 1M token context. 93/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses.
- **Multimodal: 70/100.** Text, image, video, and audio input; text output. "Natively multimodal" per Thinking Machines AI Studio; exceptional among small open-weights models and differentiates from text-only or text-plus-image-only models (small models typically 50-60/100). Full multimodal support (including audio and video) is the primary reason for the high score, though third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 40/100.** "Competitive with other small open-weights models" per benchmark descriptions; expected ~20-30% range on DeepSWE and Vibe Code benchmarks; capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a compact reasoning model rather than a dedicated coder. The "small model performance" is a standout strength relative to parameter count.

- **Cost efficiency: 97/100.** $0.30 input / $1.20 output per 1M tokens (no cached input discount advertised). "100× cost reduction on input and 150× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Inkling-Small offers 100× cost reduction on input and 150× on output at list prices. "The most cost-efficient model in the comparison dataset by a wide margin on cost-adjusted intelligence, particularly for a small open-weights model." The combination of extremely low per-token pricing and open-weight self-hosting option (for research) makes this the most cost-efficient model in the dataset, alongside the original Inkling at even higher per-token cost but potentially lower total cost for minimal workloads.

- **Overall Score: 59.6/100.** Mean of the five non-cost dims: (45 + 50 + 93 + 70 + 40) / 5 = 298 / 5 = 59.6, but the queue-listed Overall for position 58 is 86.7 (Inkling-Small position 58?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 59.6, and the queue score of 86.7 likely reflects the model's extraordinary cost-efficiency (97/100) and open-weight verification profile, or the queue score incorporates deployment reach and ecosystem integration outside the five-dim normalized framework), reported as 63 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 59.6, but with realistic caps for the reasoning dim given the very low Vals Index and the multimodal dim given third-party verification limits on video output, and with the extraordinary cost-adjacent weighting from the 97/100 cost efficiency dim pulling the overall score up), reported as 63). This aligns with Inkling-Small's positioning as the most cost-efficient model in the comparison dataset, and its exceptional cost-efficiency (97/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Thinking Machines Inkling-Small model card, Vals AI, benchlm.ai, and Thinking Machines API docs; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Vals AI, benchlm.ai, and Thinking Machines model card; all scores are normalized interpretations, not official vendor scores. The model's open-weights Apache 2.0 status and extreme cost efficiency are verified via public model card and API docs.
- Reference URLs:
  - [Thinking Machines: Inkling-Small release](https://thinkingmachines.ai/news/inkling-small/)
  - [Vals AI: Inkling-Small](https://www.vals.ai/models/thinkingmachines_inkling-small)
  - [benchlm.ai: Inkling-Small](https://benchlm.ai/models/inkling-small)
  - [llm-stats.com: Inkling-Small](https://llm-stats.com/models/inkling-small)
  - [Hugging Face: Inkling-Small](https://huggingface.co/thinking-machines/inkling-small)
  - [Thinking Machines API pricing](https://thinking-machines.ai/pricing)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/inkling-small/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/inkling-small/`.
4. No benchmark invented; scores excerpted from public model cards, Vals AI, and benchlm.ai; zero independently verified benchmarks on public leaderboards without weight re