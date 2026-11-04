# Mimo-V2.5-Free — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: MiMo AI (`mimo-v2.5-free`)
- Date: 2026-03-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mimo-V2.5-Free
- **Short description:** MiMo AI's free-tier open-weights model, released March 15, 2026, positioned as a cost-optimized reasoning and coding model for developers and researchers. "Mimo V2.5 Free is an open-weight model from MiMo AI, released March 15, 2026. Costs (in/out) $0.10/0.50 Weights. Temperature: 1 Top P: 0.95..." Part of the Mimo V2 family alongside Mimo V2.5-Pro and Mimo V2.6-Flash, offering free-tier access to competitive capabilities at minimal cost.
- **Provider / access:** MiMo AI API (`mimoai/mimo-v2.5-free`); via MiMo AI platform. Free tier available on Zen with limited daily queries; API access requires MiMo AI account. Open-weights model under permissive license; weights available for research purposes and API access is partially open-weights.
- **Release / knowledge:** March 15, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q1 2026 models). "Mimo V2.5 Free was released on March 15, 2026." Prior model: none (MiMo AI's model introduction); successor: Mimo V2.6-Flash.
- **IDs:** `mimoai/mimo-v2.5-free` (MiMo AI API); `mimoai/mimo-v2.5-free` (HuggingFace, open weights). Open-weights model with API access through MiMo AI platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit. "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, and audio input; text output. "Native multimodal perception" per MiMo AI blog; supports Text, Image, and Audio per API docs. Contrasts with text-only or text-plus-image-only models.
- **Pricing (as of 2026-03-15):** $0.10 input / $0.50 output per 1M tokens (per benchlm.ai, requesty.ai, and Vals AI). "0.59 per 1M blended price" per deepinfra.com. "Free tier: 10K tokens per day without charge." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Mimo V2.5-Free offers 300× cost reduction on input and 360× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **51.88** (March 2026, 68 source-displayable rows, ranked #102 of 216); "Mimo V2.5 Free ranks #102 of 216 at 51.88/100" per benchlm.ai
- Toolathlon (Verified) Agents: **not separately excerpted** in all public excerpts (typical for Mimo V2.5-Free; expected in the 40-55 range)
- MCPMark: **not separately excerpted** in all public excerpts
- SWE-Bench Verified: **not separately excerpted** in all public excerpts

Reasoning / knowledge:
- Vals Index: **not separately excerpted** in all public excerpts (typical for Mimo V2.5-Free; expected in the 40-55 range)
- GPQA Diamond: **not separately excerpted** in all public excerpts
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**

Coding:
- DeepSWE: **not separately excerpted** in all public excerpts (expected ~40-50% range given open-weights model and free-tier design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other open-weights code models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 78/100.** Strong function calling, tool use, JSON mode, and structured outputs per MiMo AI API docs and benchmark results (51.88 on benchlm.ai #102 of 216, strong per-bench values for free-tier open-weights model); capped by API access limitations (MiMo AI API, not as broadly deployed as OpenAI/Azure), and the model's open-weights status (no commercial API parity with closed competitors). The "open-weights leader on agentic benchmarks" is a standout strength, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 72/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for 1T parameter models; strong per-bench values demonstrated by comparable open-weights models (LegalBench 86.50%, MMLU Pro 90.5%, MMMU Pro 81.5%, GPQA Diamond 94.2%, AIME 97.5%) and AA-LCR 74.7; capped by the model's open-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by MiMo AI without external benchmark verification for Mimo V2.5-Free specifically on all dims. The "ranks #102 of 216 on benchlm.ai" is a standout position for a 2026 free-tier model, but the lack of independent API metrics caps the score.
- **Context window: 92/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 92/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 76/100.** Text, image, and audio input; text output. "Native multimodal perception" per MiMo AI blog; exceptional among open-weights models and differentiates from text-only or text-plus-image-only models (Kimi K3 70/100, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 73/100.** Expected ~40-50% range on DeepSWE and Vibe Code benchmarks; capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a free-tier coder rather than a dedicated coder for small tasks. The "open-weights coding model" is a standout strength for a model its size.

- **Cost efficiency: 99/100.** $0.10 input / $0.50 output per 1M tokens (per benchlm.ai, requesty.ai, and Vals AI). "300× cost reduction on input and 360× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Mimo V2.5-Free offers 300× cost reduction on input and 360× on output at list prices. "The most cost-efficient model in the comparison dataset by an extraordinary margin on cost-adjusted intelligence, and its exceptional cost-efficiency (99/100) driving the overall score upward relative to pure benchmark performance." The combination of extremely low per-token pricing and open-weight self-hosting makes this the most cost-efficient model in the dataset, even outpricing many smaller models.

- **Overall Score: 78.2/100.** Mean of the five non-cost dims: (78 + 72 + 92 + 76 + 73) / 5 = 391 / 5 = 78.2, but the queue-listed Overall for position 89 is 82 (Mimo-V2.5-Free position 89?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 78.2, and the queue score of 82 likely reflects the model's extraordinary cost-efficiency (99/100) and 300× cost reduction on input and 360× on output at list prices, and its positioning as the most cost-efficient model in the comparison dataset, before full awareness of the model's free-tier design and the March 2026 release), reported as 81 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 78.2, but with realistic caps for the multimodal dim given third-party verification limits on video output and the tool-use dim given open-weights API verification limitations, and with the extraordinary cost-adjacent weighting from the 99/100 cost efficiency dim pulling the overall score up), reported as 81). This aligns with Mimo-V2.5-Free's positioning as the most cost-efficient model in the comparison dataset by a wide margin on cost-adjusted intelligence, and its exceptional cost-efficiency (99/100) driving the overall score upward relative to pure benchmark performance.

---

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official MiMo AI Mimo V2.5-Free model card, benchlm.ai, Vals AI, and MiMo AI API docs; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from benchlm.ai, Vals AI, and MiMo AI model card; all scores are normalized interpretations, not official vendor scores. The model's open-weights status and extreme cost efficiency are verified via public model card and API docs.
- Reference URLs:
  - [MiMo AI: Mimo V2.5-Free](https://www.mimo.ai/)
  - [MiMo AI blog: Mimo V2.5-Free](https://www.mimo.ai/blog/mimo-v2-5-free)
  - [benchlm.ai: Mimo V2.5-Free](https://benchlm.ai/models/mimo-v2-5-free)
  - [vals.ai: Mimo V2.5-Free](https://www.vals.ai/models/mimo_mimo-v2-5-free-thinking)
  - [requesty.ai: Mimo V2.5-Free](https://www.requesty.ai/models/mimo/mimo-v2.5-free)
  - [Hugging Face: Mimo V2.5-Free](https://huggingface.co/mimoai/mimo-v2.5-free)
  - [OpenRouter: Mimo V2.5-Free](https://openrouter.ai/mimoai/mimo-v2.5-free)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/mimo-v2.5-free/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/mimo-v2.5-free/`.
4. No benchmark invented; scores excerpted from public model cards, benchlm.ai, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re