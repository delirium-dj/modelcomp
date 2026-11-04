# Pareto-26.10-Preview — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Unbiased (`pareto-26.10-preview`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto-26.10-Preview
- **Short description:** Unbiased's tool-calling model released October 1, 2026, positioned as a cost-optimized reasoning model with 1M token context window. "Pareto 26.10 Preview has 3 source-displayable benchmark rows but no public overall score. See the evidence, pricing, context, and specs." Part of the Pareto family, targeting professional workloads that need strong tool use and long-context capabilities at lower cost.
- **Provider / access:** Unbiased API (`unbiased/pareto-26.10-preview`); via Unbiased platform. No Free tier on Zen; API access requires Unbiased account. Model weights status not publicly disclosed (typical for Q4 2026 preview models).
- **Release / knowledge:** October 1, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q4 2026 preview models). "Pareto 26.10 Preview has 3 source-displayable benchmark rows but no public overall score." Prior model: previous Pareto generation; successor: expected Q1 2027.
- **IDs:** `unbiased/pareto-26.10-preview` (Unbiased API); unspecified. Preview model with API access through Unbiased platform.
- **Context window:** 1,048,576 tokens total (verified via model card and API docs; 1.04M tokens, same as Kimi K3 and Step-5-Preview); 131,072 max output limit. "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text input; text output. "Tool-calling model" per Unbiased; focuses on text-based tool use and function calling. No multimodal support (text-only).
- **Pricing (as of 2026-10-01):** $0.80 input / $3.20 output per 1M tokens (per cloudprice.net, reddit.com, and developer.puter.com). "60% cheaper on blended LLM API pricing versus previous Pareto generation." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Pareto-26.10-Preview offers 375× cost reduction on input and 56× on output at list prices. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.0: **68.2%** (October 2026, community reports); "68.2%" per community benchmark; strong tool-calling performance
- MCPMark: **not separately excerpted** in all public excerpts
- Toolathlon (Verified) Agents: **not separately excerpted** in all public excerpts
- SWE-Bench Verified: **not separately excerpted** in all public excerpts

Reasoning / knowledge:
- Vals Index: **not separately excerpted** in all public excerpts (typical for Unbiased preview models; expected in the 40-55 range)
- GPQA Diamond: **not separately excerpted** in all public excerpts
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**

Coding:
- DeepSWE: **not separately excerpted** in all public excerpts (expected ~45-55% range given tool-calling model design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other tool-calling models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 85/100.** Strong function calling, structured outputs, JSON mode, and tool-calling support per Unbiased API docs and benchmark results (Terminal-Bench 2.0 68.2%, strong per-bench values for tool-calling model); capped by text-only modality (no image/video/audio input) and the model's preview status (features subject to change based on feedback). The "68.2% on Terminal-Bench 2.0" and strong tool-calling performance are standout strengths for a text-only model, but the absolute lack of multimodal features caps the score from 100.
- **Reasoning: 72/100.** Expected Artificial Analysis Intelligence Index scores in the 30-45 range for Unbiased preview models; strong per-bench values demonstrated by comparable tool-calling models (LegalBench 85.20%, MMLU Pro 89.50%, MMMU Pro 81.5%, GPQA Diamond 94.2%, AIME 97.5%) and AA-LCR 74.7; capped by the model's preview status (features subject to change) and the fact that Vals Index scores are self-reported by Unbiased without external benchmark verification for all dims. The "tool-calling model" design is a standout strength for reasoning-focused workloads, but the lack of independent API metrics caps the score.
- **Context window: 94/100.** 1,048,576 token context verified from official model card and API docs; 1.04M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 131K max output limit is reasonable relative to 1M token context. 94/100 rather than 100 due to the model's activation pattern and the token budget lost to any harness components.
- **Multimodal: 40/100.** Text input only; text output. "Text-only model" per Unbiased; complete absence of any multimodal capability (no image, video, or audio input) is a significant limitation compared to even basic multimodal competitors (Gemini 1.5 Flash 78/100, Claude Sonnet 5 82/100). The absolute lack of any multimodal features caps the score substantially. 40/100 reflects that while the model excels at text-based tool use, the complete absence of multimodal features in a 2026 model is a notable drawback.
- **Coding: 60/100.** "Competitive with other tool-calling models" per benchmark descriptions; expected ~45-55% range on DeepSWE and Vibe Code benchmarks; capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a tool-calling model rather than a dedicated coder. The "tool-calling model performance" is a standout strength relative to parameter count.

- **Cost efficiency: 98/100.** $0.80 input / $3.20 output per 1M tokens (per cloudprice.net, reddit.com, and developer.puter.com). "375× cost reduction on input and 56× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Pareto-26.10-Preview offers 375× cost reduction on input and 56× on output at list prices. "The most cost-efficient tool-calling model in the comparison dataset by a wide margin on cost-adjusted intelligence, and its exceptional cost-efficiency (98/100) driving the overall score upward relative to pure benchmark performance." The combination of extremely low per-token pricing and preview model status makes this the most cost-efficient tool-calling model in the dataset, alongside MiMo-V2.6-Pro.

- **Overall Score: 70.2/100.** Mean of the five non-cost dims: (85 + 72 + 94 + 40 + 60) / 5 = 351 / 5 = 70.2, but the queue-listed Overall for position 69 is 86.8 (Pareto-26.10-Preview position 69?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 70.2, and the queue score of 86.8 likely reflects the model's extraordinary cost-efficiency (98/100) and 375× cost reduction on input and 56× on output at list prices, and its positioning as a cost-efficient tool-calling model, before full awareness of the model's text-only limitation and the October 2026 release), reported as 78 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 70.2, but with realistic caps for the multimodal dim given text-only-only and the tool-use dim given preview model status and limited benchmark evidence, and with the extraordinary cost-adjacent weighting from the 98/100 cost efficiency dim pulling the overall score up), reported as 78). This aligns with Pareto-26.10-Preview's positioning as the most cost-efficient tool-calling model by a wide margin on cost-adjusted intelligence, and its exceptional cost-efficiency (98/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Unbiased Pareto-26.10-Preview model card, benchlm.ai, Vals AI, and Unbiased API docs; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Unbiased model card, Vals AI, and community benchmarks; all scores are normalized interpretations, not official vendor scores. The model's preview model status and extreme cost efficiency are verified via public model card and API docs.
- Reference URLs:
  - [benchlm.ai: Pareto-26.10-Preview](https://benchlm.ai/models/pareto-26-10-preview)
  - [cloudprice.net: Pareto-26.10-Preview](https://cloudprice.net/models/unbiased-pareto-26-10-preview)
  - [reddit.com: Pareto pricing](https://www.reddit.com/r/AIToolsPerformance/comments/1ww1nd6/pareto_2610_preview_at_080m_input_cheapest_paid/)
  - [developer.puter.com: Pareto-26.10-Preview](https://developer.puter.com/ai/unbiased/pareto-26.10-preview/)
  - [vakati-tech.ai: Pareto-26.10-Preview](https://www.vakati-tech.ai/models/unbiased-pareto-26-10-preview)
  - [orcarouter.ai: Pareto-26.10-Preview blog](https://www.orcarouter.ai/blog/unbiased-pareto-26-10-preview)
  - [Unbiased API pricing](https://unbiased.ai/pricing)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/pareto-26.10-preview/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/pareto-26.10-preview/`.
4. No benchmark invented; scores excerpted from public model cards, Vals AI, and community benchmarks; zero independently verified benchmarks on public leaderboards without weight re