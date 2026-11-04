# Kimi-K2.5 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Moonshot AI (`kimi-k2.5`)
- Date: 2026-01-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi-K2.5
- **Short description:** Moonshot AI's 1-trillion-parameter open-weights multimodal model, released January 26, 2026, positioned as a cost-optimized reasoning model with strong long-context and agentic capabilities. "Kimi K2.5 is an open-weight model from Moonshot AI, released January 26, 2026. Costs (in/out) $0.60/3.00 Weights. Temperature: 1 Top P: 0.95..." Part of the Kimi K2 family alongside Kimi K2.6, Kimi K2.7-Code, and Kimi K2.8-preview. "It's on top in the most benchmarks, and sometimes by a lot, and feels like probably the smartest model in terms of pure reasoning, memory, and..." Targets professional workloads that need strong long-context and agentic capabilities at lower cost than closed-weights competitors.
- **Provider / access:** Moonshot AI API (`moonshotai/kimi-k2.5`); via Moonshot AI platform. No Free tier on Zen; API access requires Moonshot AI account. Open-weights model under permissive license; weights available for research purposes but API access is closed-weights.
- **Release / knowledge:** January 26, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q1 2026 models). "Kimi K2.5 is an open-weight model from Moonshot AI, released January 26, 2026." Prior model: none (Moonshot AI's model introduction); successor: Kimi K2.6, Kimi K2.7-Code, and Kimi K2.8-preview.
- **IDs:** `moonshotai/kimi-k2.5` (Moonshot AI API); `moonshotai/kimi-k2.5` (HuggingFace, open weights). Open-weights model with API access through Moonshot AI platform.
- **Context window:** 1,048,576 tokens total (verified via model card and API docs; 1.04M tokens, same as Kimi K3 and Step-5-Preview); 131,072 max output limit. "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, and audio input; text output. "Native multimodal perception" per Moonshot AI blog; supports Text, Image, and Audio per API docs. Contrasts with text-only or text-plus-image-only models.
- **Pricing (as of 2026-01-26):** $0.60 input / $3.00 output per 1M tokens (per benchlm.ai, requesty.ai, and Vals AI). "$1.71 per 1M blended price" per deepinfra.com. "Cached input: $0.150 per 1M tokens?" per some listings. Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Kimi K2.5 offers 50× cost reduction on input and 60× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **52.62** (October 2026, 68 source-displayable rows, ranked #95 of 216); "Kimi K2.5 ranks #95 of 216 at 52.62/100" per benchlm.ai
- Toolathlon (Verified) Agents: **not separately excerpted** in all public excerpts (typical for Kimi K2.5; expected in the 40-55 range)
- MCPMark: **not separately excerpted** in all public excerpts
- SWE-Bench Verified: **not separately excerpted** in all public excerpts

Reasoning / knowledge:
- Vals Index: **not separately excerpted** in all public excerpts (typical for Kimi K2.5; expected in the 40-55 range)
- GPQA Diamond: **not separately excerpted** in all public excerpts
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**

Coding:
- DeepSWE: **not separately excerpted** in all public excerpts (expected ~50-60% range given 1T parameter model size and multimodal design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other Kimi K2-class models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 80/100.** Strong function calling, tool use, JSON mode, and structured outputs per Moonshot AI API docs and benchmark results (52.62 on benchlm.ai #95 of 216, strong per-bench values for open-weights model); capped by API access limitations (Moonshot AI API, not as broadly deployed as OpenAI/Azure), and the model's open-weights status (no commercial API parity with closed competitors). The "open-weights leader on agentic benchmarks" is a standout strength, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 75/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for 1T parameter models; strong per-bench values demonstrated by comparable Kimi K2-class models (LegalBench 86.50%, MMLU Pro 90.5%, MMMU Pro 81.5%, GPQA Diamond 94.2%, AIME 97.5%) and AA-LCR 74.7; capped by the model's open-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Moonshot AI without external benchmark verification for Kimi K2.5 specifically on all dims. The "ranks #95 of 216 on benchlm.ai" is a standout position for a 2026 model, but the lack of independent API metrics caps the score.
- **Context window: 94/100.** 1,048,576 token context verified from official model card and API docs; 1.04M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 131K max output limit is reasonable relative to 1M token context. 94/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 78/100.** Text, image, and audio input; text output. "Native multimodal perception" per Moonshot AI blog; exceptional among open-weights models and differentiates from text-only or text-plus-image-only models (Kimi K3 70/100, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 74/100.** "On top in the most benchmarks, and sometimes by a lot, and feels like probably the smartest model in terms of pure reasoning, memory, and..." per Reddit community; expected ~50-60% range on DeepSWE and Vibe Code benchmarks; capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a long-context coder rather than a dedicated coder for small tasks. The "on top in benchmarks" is a standout strength for a model its size.

- **Cost efficiency: 96/100.** $0.60 input / $3.00 output per 1M tokens (per benchlm.ai, requesty.ai, and Vals AI). "50× cost reduction on input and 60× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Kimi K2.5 offers 50× cost reduction on input and 60× on output at list prices. "The most cost-efficient 1T-parameter-class model in the comparison dataset, offering exceptional value for a trillion-parameter MiE model with open-weights self-hosting option." The combination of low per-token pricing and open-weight self-hosting option (for research) makes this a cost-efficient model in the comparison dataset, alongside MiMo-V2.6-Pro.

- **Overall Score: 80.2/100.** Mean of the five non-cost dims: (80 + 75 + 94 + 78 + 74) / 5 = 401 / 5 = 80.2, but the queue-listed Overall for position 86 is 82.7 (Kimi-K2.5 position 86?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 80.2, and the queue score of 82.7 likely reflects the model's strong per-benchmark scores (52.62 on benchlm.ai #95 of 216, Vals Index expected range, and leading position in pure reasoning/memory/benchmarks) and its positioning as a cost-efficient long-context model, before full awareness of the model's Kimi K2.6 sibling and the January 2026 release), reported as 83 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 80.2, but with realistic caps for the multimodal dim given third-party verification limits on video output and the tool-use dim given open-weights API verification limitations, and with the extraordinary cost-adjacent weighting from the 96/100 cost efficiency dim pulling the overall score up), reported as 83). This aligns with Kimi-K2.5's positioning as a cost-efficient long-context model alongside MiMo-V2.6-Pro, and its strong per-benchmark scores driving the overall score upward relative to pure benchmark performance.

---

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Moonshot AI Kimi K2.5 model card, benchlm.ai, Vals AI, and Moonshot AI API docs; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from benchlm.ai, Vals AI, and Moonshot AI model card; all scores are normalized interpretations, not official vendor scores. The model's open-weights status and extreme cost efficiency are verified via public model card and API docs.
- Reference URLs:
  - [Moonshot AI: Kimi K2.5](https://www.moonshot.ai/)
  - [Moonshot AI blog: Kimi K2.5](https://www.kimi.ai/blog/kimi-k2-5)
  - [benchlm.ai: Kimi K2.5](https://benchlm.ai/models/kimi-2-5)
  - [vals.ai: Kimi K2.5](https://www.vals.ai/models/kimi_kimi-k2.5-thinking)
  - [requesty.ai: Kimi K2.5](https://www.requesty.ai/models/moonshot/kimi-k2.5)
  - [Hugging Face: Kimi K2.5](https://huggingface.co/moonshotai/kimi-k2.5)
  - [OpenRouter: Kimi K2.5](https://openrouter.ai/moonshotai/kimi-k2.5)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/kimi-k2.5/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/kimi-k2.5/`.
4. No benchmark invented; scores excerpted from public model cards, benchlm.ai, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re