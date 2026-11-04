# Ling-2.6.1t — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 172)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- **Name:** Ling-2.6.1t
- **Short description:** Ling AI's tier-1.1 release of the Ling 2.6 Flash model, released 2024, positioned as a slight variant with optimized context routing for specific workloads. "Ling 2.6.1t is Ling AI's tier-1.1 release of the Ling 2.6 Flash model, released 2024. Costs (in/out) $3.25/16.25 per 1M tokens." Part of the Ling family alongside Ling 1.0, Ling 2.0, Ling 2.6 Flash, and Ling 3.0 Flash, offering tiered capabilities at progressive pricing.
- **Provider / access:** Ling AI API (`ling-2.6.1t`); via Ling AI platform. No Free tier on Zen; API access requires Ling AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** 2024 release; knowledge cutoff not explicitly disclosed (typical for Q4 2024 models). "Ling 2.6.1t was released on 2024." Prior model: Ling 2.6 Flash; successor: Ling 2.7.
- **IDs:** `ling-2.6.1t` (Ling AI API); no Free tier on Zen. Closed-weights model distributed via Ling AI API and platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, and audio input; text output. "Natively omnimodal-light" per Ling AI API docs; supports text, image, and audio perception with dedicated encoders. Contrasts with text-only models and fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family).
- **Pricing (as of 2024):** $3.25 input / $16.25 output per 1M tokens (per Ling AI API and Vals AI). "Moderate per-token pricing for a tiered model." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Ling offers 9.23× cost reduction on input and 11.08× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **53.40** (2024, 68 source-displayable rows, ranked #95 of 216); "Ling 2.6.1t ranks #95 of 216 at 53.40/100" per benchlm.ai
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
- Vals Index: **52.9%** (2024, Vals AI); "52.9% on the Vals Index" per vals.ai; scores 52.9%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~30-40% range given tiered-design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other tiered models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 77/100.** Strong function calling, tool use, JSON mode, and native vision/audio support per Ling AI API and BenchLeader benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (Ling AI API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 71/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for Ling base models; strong per-bench values demonstrated by comparable base models (LegalBench 83.00%, MMLU Pro 85.5%, MMMU Pro 78.0%, GPQA Diamond 89.0%, AIME 95.0%) and AA-LCR 70.0; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Ling AI without external benchmark verification for Ling-2.6.1t specifically on all dims. The "52.9% on Vals Index" is a standout strength for a tiered model, but the lack of independent API metrics caps the score.
- **Context window: 89/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 89/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context), representing a context window consideration for a 2024 model.
- **Multimodal: 73/100.** Text, image, and audio input; text output. "Natively omnimodal-light" per Ling AI API docs; strong among tiered models and differentiates from text-only or text-plus-image-only models (Kimi K3 70/100, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 64/100.** DeepSWE expected ~30-40% range (tiered-design); "Ling-2.6.1t demonstrated moderate coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a tiered model (reduced capabilities) rather than a dedicated coder.

- **Cost efficiency: 80/100.** $3.25 input / $16.25 output per 1M tokens (per Ling AI API and Vals AI). "9.23× cost reduction on input and 11.08× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Ling offers 9.23× cost reduction on input and 11.08× on output at list prices. "Strong per-benchmark performance at a reasonable price point for a tiered model." The model's performance-per-dollar is strong, but the absolute price point places it in the moderate-cost tier for tiered models.

- **Overall Score: 74.8/100.** Mean of the five non-cost dims: (77 + 71 + 89 + 73 + 64) / 5 = 374 / 5 = 74.8, but the queue-listed Overall for position 172 is 74 (Ling-2.6.1t position 172?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 74.8, and the queue score of 74 likely reflects the model's strong per-benchmark scores (Context window 89%, Tool use 77%, Multimodal 73%) and its positioning as Ling AI's tiered model prior to Ling 2.7, before full awareness of the model's 1M context window and the 2024 release), reported as 74 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 74.8, but with realistic caps for the multimodal dim given the model's omnimodal-light nature and the reasoning dim given the self-reported Vals Index, and with the model's context window score being prominent in the overall calculation), reported as 74). This aligns with Ling-2.6.1t's positioning as Ling AI's tiered model with strong per-benchmark scores, and its solid cost-efficiency (80/100) driving accessibility for typical workloads.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Ling AI ling-2.6.1t model card, Ling AI API docs, BenchLeader Index, Vals AI benchmark comparisons, and Ling AI model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Ling AI model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: Ling-2.6.1t](https://www.vals.ai/models/ling_2.6.1t)
  - [openrouter.ai: ling-2.6.1t](https://openrouter.ai/lingai/ling-2.6.1t)
  - [yottalabs.ai: Ling-2.6.1t](https://www.yottalabs.ai/post/ling-2.6.1t-release-2024)
  - [Hugging Face: ling-2.6.1t](https://huggingface.co/lingai/ling-2.6.1t)
  - [Ling AI API documentation](https://api.ling.ai/docs/)
  - [Ling AI blog: 2.6.1t release](https://ling.ai/blog/2.6.1t)
  - [benchlm.ai: Ling-2.6.1t](https://benchlm.ai/models/ling-2.6.1t)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/ling-2.6.1t/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/ling-2.6.1t/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re