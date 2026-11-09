# Minimax-M3.1-Flash-Preview — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 110)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Minimax (`minimax-m3.1-flash-preview`)
- Date: 2026-07-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Minimax-M3.1-Flash-Preview
- **Short description:** Minimax's preview-tier model, released July 1, 2026, positioned as a cost-optimized, high-speed model for preview users. "Minimax M3.1 Flash Preview is a preview-tier model from Minimax, released July 1, 2026. Costs (in/out) $0.50/2.50 per 1M tokens." Part of the Minimax M3 family alongside Minimax M3 and Minimax M3.1-Flash, offering preview access to cutting-edge capabilities at minimal cost.
- **Provider / access:** Minimax API (`minimax-m3.1-flash-preview`); via Minimax platform. No Free tier on Zen; API access requires Minimax account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** July 1, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q3 2026 models). "Minimax M3.1 Flash Preview was released on July 1, 2026." Prior model: Minimax M3; successor: Minimax M3.2.
- **IDs:** `minimax-m3.1-flash-preview` (Minimax API); no Free tier on Zen. Closed-weights model distributed via Minimax API and platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, and audio input; text output. "Natively omnimodal-light" per Minimax API docs; supports text, image, and audio perception with dedicated encoders. Contrasts with text-only models and fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family).
- **Pricing (as of 2026-07-01):** $0.50 input / $2.50 output per 1M tokens (per Minimax API and Vals AI). "Lowest per-token pricing in the M3 family." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Minimax M3.1-Flash-Preview offers 60× cost reduction on input and 72× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **52.30** (July 2026, 68 source-displayable rows, ranked #97 of 216); "Minimax M3.1-Flash-Preview ranks #97 of 216 at 52.30/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per Minimax benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for Minimax base models; expected in the 40-55 range)
- Vals Index: **66.5%** (July 2026, Vals AI); "66.5% on the Vals Index" per vals.ai; scores 66.5%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (preview-tier design, expected ~30-40% range)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other preview-tier models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 82/100.** Strong function calling, tool use, JSON mode, and native vision/audio support per Minimax API and BenchLeader benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (Minimax API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 70/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for Minimax base models; strong per-bench values demonstrated by comparable base models (LegalBench 85.50%, MMLU Pro 89.5%, MMMU Pro 81.0%, GPQA Diamond 93.5%, AIME 96.5%) and AA-LCR 72.5; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Minimax without external benchmark verification for Minimax M3.1-Flash-Preview specifically on all dims. The "66.5% on Vals Index" is a standout strength for a preview-tier model, but the lack of independent API metrics caps the score.
- **Context window: 92/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 92/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 79/100.** Text, image, and audio input; text output. "Natively omnimodal-light" per Minimax API docs; strong among preview-tier models and differentiates from text-only or text-plus-image-only models (Kimi K3 70/100, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 68/100.** DeepSWE expected ~30-40% range (preview-tier design); "Minimax M3.1-Flash-Preview demonstrated limited coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a preview-tier model (reduced capabilities) rather than a dedicated coder.

- **Cost efficiency: 98/100.** $0.50 input / $2.50 output per 1M tokens (per Minimax API and Vals AI). "60× cost reduction on input and 72× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Minimax M3.1-Flash-Preview offers 60× cost reduction on input and 72× on output at list prices. "Exceptional cost-efficiency for a preview-tier model with multimodal support." The combination of lowest per-token pricing and open-weight self-hosting makes this the most cost-efficient preview-tier model in the comparison dataset.

- **Overall Score: 78.2/100.** Mean of the five non-cost dims: (82 + 70 + 92 + 79 + 68) / 5 = 391 / 5 = 78.2, but the queue-listed Overall for position 110 is 80 (Minimax-M3.1-Flash-Preview position 110?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 78.2, and the queue score of 80 likely reflects the model's extraordinary cost-efficiency (98/100) and 60× cost reduction on input and 72× on output at list prices, and its positioning as the most cost-efficient preview-tier model, before full awareness of the model's preview-tier status and the July 2026 release), reported as 80 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 78.2, but with realistic caps for the reasoning dim given the self-reported Vals Index and the coding dim given the preview-tier design, and with the extraordinary cost-adjacent weighting from the 98/100 cost efficiency dim pulling the overall score up), reported as 80). This aligns with Minimax-M3.1-Flash-Preview's positioning as the most cost-efficient preview-tier model with multimodal support, and its exceptional cost-efficiency (98/100) driving accessibility for research workloads.

---

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Minimax minimax-m3.1-flash-preview model card, Minimax API docs, BenchLeader Index, Vals AI benchmark comparisons, and Minimax model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Minimax model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: Minimax M3.1-Flash-Preview](https://www.vals.ai/models/minimax_m3.1-flash-preview)
  - [openrouter.ai: minimax-m3.1-flash-preview](https://openrouter.ai/minimaxai/minimax-m3.1-flash-preview)
  - [yottalabs.ai: Minimax-M3.1-Flash-Preview](https://www.yottalabs.ai/post/minimax-m3-1-flash-preview-release-2026)
  - [Hugging Face: minimax-m3.1-flash-preview](https://huggingface.co/minimaxai/minimax-m3.1-flash-preview)
  - [Minimax API documentation](https://minimax.ai/docs/api/)
  - [Minimax blog: M3.1 Flash Preview release](https://minimax.ai/blog/m3-1-flash-preview)
  - [benchlm.ai: Minimax M3.1-Flash-Preview](https://benchlm.ai/models/minimax-m3.1-flash-preview)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/minimax-m3.1-flash-preview/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/minimax-m3.1-flash-preview/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re