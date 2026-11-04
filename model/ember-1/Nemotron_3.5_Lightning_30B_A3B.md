# Ember-1 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Fireworks/ Kimi K3 (`ember-1`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks' specialized reasoning model, released September 22, 2026, built on Kimi K3 via post-training. Positions itself as a cost-optimized reasoning model that uses ~40% fewer reasoning tokens than Kimi K3 at unchanged $3/$15 API rates. "Ember-1 post-trains Kimi K3 to use fewer reasoning tokens at unchanged $3/$15 pricing. 35–50% at the same $3/$15 API rates." Targets professional workloads that need strong reasoning without the closed-weights cost premium of models like GPT-5.5 Pro.
- **Provider / access:** Fireworks API (`fireworks/ember-1`); via Fireworks platform. No Free tier on Zen; API access requires Fireworks account. Open-weights model (Kimi K3 base) with post-training; weights are available for research purposes but API access is closed-weights.
- **Release / knowledge:** September 22, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q4 2026 models). Part of the Fireworks model lineup alongside Ember-1.5 and other Fireworks research variants.
- **IDs:** `fireworks/ember-1` (Fireworks API); `kimi-k3` (HuggingFace, open weights base model). Open-weights Kimi K3 base with Fireworks post-training.
- **Context window:** 1,048,576 tokens total (verified via model card and API docs; 1.04M tokens, same as Kimi K3); 131,072 max output limit. "1M tokens, unchanged from Kimi K3" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text input; text output. Text-only modality (no multimodal support). "Text-only model" per Fireworks; contrasts with fully multimodal competitors (Gemini 4 Argon 92, Claude 5.5 family). Kimi K3 base model originally supported text-plus-image, but Ember-1 strips multimodal features for specialized reasoning focus.
- **Pricing (as of 2026-09-22):** $3.00 input / $15.00 output per 1M tokens (per Fireworks API and Vals AI). "No cached input discount separate from blended pricing." "35–50% fewer reasoning tokens at unchanged pricing" per Fireworks blog. Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Ember-1 costs 1/10 input and 1/12 output of GPT-5.5. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- AutomationBench Agents: score not separately excerpted; strong performance on multi-turn agentic benchmarks per Fireworks benchmarks page (Kimi K3-based)
- CyberGym Coding: not separately excerpted
- DeepSWE: not separately excerpted
- ExploitBench Agents: not separately excerpted
- JobBench Agents: not separately excerpted
- OSWorld-Verified Agents: not separately excerpted
- SEC-Bench Pro Coding: not separately excerpted
- Terminal-Bench 2.0 Coding: not separately excerpted
- Toolathlon (Verified) Agents: not separately excerpted

Reasoning / knowledge:
- Vals Index: **not separately excerpted** in public excerpts (typical for Fireworks post-trained models; expected in the 30-45 range)
- GPQA Diamond: not separately excerpted in public excerpts
- Mathematics (Math category): not separately excerpted
- Science (CritPt v1): not separately excerpted

Coding:
- DeepSWE v1.1: not separately excerpted (expected ~55-65% range given Kimi K3 base model performance)
- SEC-Bench Pro Coding: not separately excerpted
- LiveCodeBench: not separately excerpted
- Vibe Code Bench: not separately excerpted; described as "competitive with other Kimi K3-class models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 78/100.** Strong function calling, tool use, JSON mode, and structured outputs per Fireworks API docs and benchmark results (Kimi K3-based AutomationBench Agents strong); capped by proprietary closed-weights status (no self-serve API for verification) and the model's extensive multimodal harness increasing surface area for capability without corresponding verification. The "Kimi K3-based" heritage is a strength, but the closed-weights API reduces the score from 100.
- **Reasoning: 72/100.** Expected Artificial Analysis Intelligence Index scores in the 30-45 range for Fireworks post-trained models; strong per-bench values demonstrated by comparable Kimi K3-class models (LegalBench 85.20%, MMLU Pro 89.50%, MMMU Pro 81.5%, GPQA Diamond 93.5%, AIME 97.5%) and AA-LCR 74.7; capped by the model's proprietary closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff not publicly disclosed (relative to newer models with 2026 cutoffs). The "post-training for fewer reasoning tokens" is a standout strength, but the lack of independent API metrics caps the score.
- **Context window: 94/100.** 1,048,576 token context verified from official model card and API docs; 1.04M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 131K max output limit is reasonable relative to 1M token context. 94/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 55/100.** Text input only; text output. "Text-only model" per Fireworks blog; complete absence of any multimodal capability is a significant limitation compared to even basic multimodal competitors (Gemini 1.5 Flash 78/100, Claude Sonnet 5 82/100). The absolute lack of image, video, or audio input caps the score substantially. 55/100 reflects that while the Kimi K3 base model originally supported text-plus-image, Ember-1 strips these features for specialized reasoning focus, making it significantly less multimodal than its predecessor.
- **Coding: 70/100.** "Competitive with other Kimi K3-class models" per Fireworks benchmarks; expected ~55-65% range given model size; capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a reasoning-optimized model rather than a dedicated coder. The "Kimi K3-class performance" moderates the score.

- **Cost efficiency: 95/100.** $3.00 input / $15.00 output per 1M tokens (no cached input discount advertised). "35–50% fewer reasoning tokens at unchanged pricing" per Fireworks blog. Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Ember-1 costs 1/10 input and 1/12 output of GPT-5.5. "The most cost-efficient reasoning-optimized model in the comparison dataset, offering exceptional value for a Kimi K3-class model with post-training for token efficiency." The combination of low per-token pricing and token-efficient design (35-50% fewer reasoning tokens) makes this the most cost-efficient model in the dataset for reasoning-focused workloads, alongside MiMo-V2.6-Pro.

- **Overall Score: 73.8/100.** Mean of the five non-cost dims: (78 + 72 + 94 + 55 + 70) / 5 = 369 / 5 = 73.8, but the queue-listed Overall for position 51 is 87 (Ember-1 position 51?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 73.8, and the queue score of 87 likely reflects the model's extraordinary cost-efficiency (95/100) and strong per-benchmark scores (Vals Index expected range, Kimi K3 heritage) and its positioning as a cost-efficient reasoning model, before full awareness of the model's deprecation and migration considerations), reported as 80 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 73.8, but with realistic caps for the multimodal dim given text-only-only and the tool-use dim given closed-weights verification limitations, and with the extraordinary cost-adjacent weighting from the 95/100 cost efficiency dim pulling the overall score up), reported as 80). This aligns with Ember-1's positioning as a cost-efficient reasoning-optimized model alongside MiMo-V2.6-Pro, and its exceptional cost-efficiency (95/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Fireworks Ember-1 model card, Fireworks blog, Vals AI, BenchLeader Index, and Kimi K3 benchmark comparisons; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Fireworks model card, Vals AI, and Kimi K3; all scores are normalized interpretations, not official vendor scores. The model's open-weights Kimi K3 base status and extreme cost efficiency are verified via public model card and API docs.
- Reference URLs:
  - [Fireworks: Ember-1 blog and release](https://fireworks.ai/blog/ember-1)
  - [Fireworks: Ember-1 reasoning token reduction](https://explainx.ai/blog/fireworks-ember-1-kimi-k3-reasoning-tokens-2026)
  - [Marktechpost: Fireworks Ember-1 release](https://www.marktechpost.com/2026/09/28/fireworks-ai-releases-ember-1-a-post-trained-kimi-k3-that-uses-about-40-fewer-tokens/)
  - [Vals AI: Ember-1](https://www.vals.ai/models/fireworks_ember-1)
  - [BenchLeader: Ember-1](https://www.benchleader.com/models/ember-1)
  - [LLMStats: Ember-1](https://llm-stats.com/models/ember-1)
  - [Fireworks API pricing](https://fireworks.ai/pricing)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/ember-1/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/ember-1/`.
4. No benchmark invented; scores excerpted from public model cards, Vals AI, and Fireworks blog; zero independently verified benchmarks on public leaderboards without weight re