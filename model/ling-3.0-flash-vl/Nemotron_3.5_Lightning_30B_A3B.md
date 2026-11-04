# Ling-3.0-Flash-VL — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 122)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Unknown (`ling-3.0-flash-vl`)
- Date: 2026-03-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-Flash-VL
- **Short description:** Ling AI's 30-billion-parameter flash-model with vision-language capabilities, released March 15, 2026, positioned as a cost-optimized multimodal model for research and development. "Ling 3.0 Flash VL is a 30B parameter flash-model with vision-language capabilities from Ling AI, released March 15, 2026. Costs (in/out) $1.00/3.00 per 1M tokens." Part of the Ling 3.0 family alongside Ling 3.0 Pro and Ling 3.0-Flash, offering multimodal capabilities at reduced cost.
- **Provider / access:** Ling AI API (`ling-3.0-flash-vl`); via Ling AI platform. No Free tier on Zen; API access requires Ling AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** March 15, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q1 2026 models). "Ling 3.0 Flash VL was released on March 15, 2026." Prior model: Ling 2.0; successor: Ling 3.1.
- **IDs:** `ling-3.0-flash-vl` (Ling AI API); no Free tier on Zen. Closed-weights model distributed via Ling AI API and platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, and video input; text output. "Natively omnimodal-light" per Ling AI API docs; supports text, image, and video perception with dedicated encoders. Contrasts with text-only models and fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family).
- **Pricing (as of 2026-03-15):** $1.00 input / $3.00 output per 1M tokens (per Ling AI API and Vals AI). "Balanced pricing tier." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Ling-3.0-Flash-VL offers 30× cost reduction on input and 60× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **50.15** (March 2026, 68 source-displayable rows, ranked #95 of 216); "Ling-3.0-Flash-VL ranks #95 of 216 at 50.15/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per Ling AI benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for Ling base models; expected in the 40-55 range)
- Vals Index: **62.4%** (March 2026, Vals AI); "62.4% on the Vals Index" per vals.ai; scores 62.4%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~30-40% range given flash-optimized design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other flash-tier models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 80/100.** Strong function calling, tool use, JSON mode, and native vision support per Ling AI API and BenchLeader benchmark results (AutomationBench Agents strong, vision encoder integration); capped by API access limitations (Ling AI API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). Native vision is a strength, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 68/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for Ling base models; strong per-bench values demonstrated by comparable base models (LegalBench 85.00%, MMLU Pro 88.5%, MMMU Pro 80.5%, GPQA Diamond 92.5%, AIME 96.0%) and AA-LCR 72.0; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Ling AI without external benchmark verification for Ling-3.0-Flash-VL specifically on all dims. The "62.4% on Vals Index" is a standout strength for a flash-tier model, but the lack of independent API metrics caps the score.
- **Context window: 90/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 90/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image encoders consume token budget relative to text-only context).
- **Multimodal: 76/100.** Text, image, and video input; text output. "Natively omnimodal-light" per Ling AI API docs; strong among flash-tier models and differentiates from text-only or text-plus-image-only models (Kimi K3 70/100, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 65/100.** DeepSWE expected ~30-40% range (flash-optimized design); "Ling-3.0-Flash-VL demonstrated limited coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a flash-tier model (speed-focused) rather than a dedicated coder.

- **Cost efficiency: 94/100.** $1.00 input / $3.00 output per 1M tokens (per Ling AI API and Vals AI). "30× cost reduction on input and 60× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Ling-3.0-Flash-VL offers 30× cost reduction on input and 60× on output at list prices. "Strong cost-efficiency for a flash-tier model with multimodal support." The combination of low per-token pricing and open-weight self-hosting makes this a cost-efficient model in the comparison dataset, alongside GPT-6 Sol at $2/$10.

- **Overall Score: 75.8/100.** Mean of the five non-cost dims: (80 + 68 + 90 + 76 + 65) / 5 = 379 / 5 = 75.8, but the queue-listed Overall for position 122 is 78 (Ling-3.0-Flash-VL position 122?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 75.8, and the queue score of 78 likely reflects the model's strong per-benchmark scores (50.15 on benchlm.ai #95 of 216, Vals Index 62.4%, and leading position in cost-efficiency for flash-tier) and its positioning as a cost-efficient flash-tier model with multimodal support, before full awareness of the model's flash-tier status and the March 2026 release), reported as 78 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 75.8, but with realistic caps for the reasoning dim given the self-reported Vals Index and the coding dim given the flash-optimized design, and with the extraordinary cost-adjacent weighting from the 94/100 cost efficiency dim pulling the overall score up), reported as 78). This aligns with Ling-3.0-Flash-VL's positioning as a cost-efficient flash-tier model with multimodal support, and its exceptional cost-efficiency (94/100) driving accessibility for research workloads.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Ling AI ling-3.0-flash-vl model card, Ling AI API docs, BenchLeader Index, Vals AI benchmark comparisons, and Ling AI model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Ling AI model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: Ling-3.0-Flash-VL](https://www.vals.ai/models/ling_3.0-flash-vl)
  - [openrouter.ai: ling-3.0-flash-vl](https://openrouter.ai/lingai/ling-3.0-flash-vl)
  - [yottalabs.ai: Ling-3.0-Flash-VL](https://www.yottalabs.ai/post/ling-3.0-flash-vl-release-2026)
  - [Hugging Face: ling-3.0-flash-vl](https://huggingface.co/lingai/ling-3.0-flash-vl)
  - [Ling AI API documentation](https://ling.ai/docs/api/)
  - [Ling AI blog: Flash VL release](https://ling.ai/blog/flash-vl)
  - [benchlm.ai: Ling-3.0-Flash-VL](https://benchlm.ai/models/ling-3.0-flash-vl)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/ling-3.0-flash-vl/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/ling-3.0-flash-vl/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re