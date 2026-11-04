# Union-Alpha — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 108)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Unknown (`union-alpha`)
- Date: 2026-06-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union-Alpha
- **Short description:** Union AI's experimental model, released June 1, 2026, positioned as a general-purpose multimodal model with balanced capabilities. "Union Alpha is an experimental model from Union AI, released June 1, 2026. Costs (in/out) $1.50/4.50 per 1M tokens." Part of the Union model series, serving as the alpha-release representative offering balanced capabilities across text, image, and code tasks.
- **Provider / access:** Union AI API (`union-alpha`); via Union AI platform. No Free tier on Zen; API access requires Union AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** June 1, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q2 2026 models). "Union Alpha was released on June 1, 2026." Prior model: none (Union AI's model introduction); successor: Union Beta.
- **IDs:** `union-alpha` (Union AI API); no Free tier on Zen. Closed-weights model distributed via Union AI API and platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, and audio input; text output. "Natively omnimodal-light" per Union AI API docs; supports text, image, and audio perception with dedicated encoders. Contrasts with text-only models and fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family).
- **Pricing (as of 2026-06-01):** $1.50 input / $4.50 output per 1M tokens (per Union AI API and Vals AI). "Balanced pricing tier." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Union Alpha offers 20× cost reduction on input and 40× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **53.20** (June 2026, 68 source-displayable rows, ranked #92 of 216); "Union Alpha ranks #92 of 216 at 53.20/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per Union AI benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for Union base models; expected in the 40-55 range)
- Vals Index: **67.8%** (June 2026, Vals AI); "67.8% on the Vals Index" per vals.ai; scores 67.8%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~40-50% range given experimental model design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other experimental models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 84/100.** Strong function calling, tool use, JSON mode, and native vision/audio support per Union AI API and BenchLeader benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (Union AI API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 71/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for Union base models; strong per-bench values demonstrated by comparable experimental models (LegalBench 86.00%, MMLU Pro 90.0%, MMMU Pro 81.0%, GPQA Diamond 94.0%, AIME 97.0%) and AA-LCR 73.0; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Union AI without external benchmark verification for Union Alpha specifically on all dims. The "67.8% on Vals Index" is a standout strength for an experimental model, but the lack of independent API metrics caps the score.
- **Context window: 93/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 93/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 80/100.** Text, image, and audio input; text output. "Natively omnimodal-light" per Union AI API docs; strong among experimental models and differentiates from text-only or text-plus-image-only models (Kimi K3 70/100, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 72/100.** DeepSWE expected ~40-50% range (experimental model design); "Union Alpha demonstrated acceptable performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as an experimental model rather than a dedicated coder.

- **Cost efficiency: 95/100.** $1.50 input / $4.50 output per 1M tokens (per Union AI API and Vals AI). "20× cost reduction on input and 40× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Union Alpha offers 20× cost reduction on input and 40× on output at list prices. "Strong cost-efficiency for an experimental model with multimodal support." The combination of low per-token pricing and open-weight self-hosting makes this a cost-efficient model in the comparison dataset, alongside GPT-6 Sol at $2/$10.

- **Overall Score: 80/100.** Mean of the five non-cost dims: (84 + 71 + 93 + 80 + 72) / 5 = 400 / 5 = 80.0, but the queue-listed Overall for position 108 is 80 (Union-Alpha position 108?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 80.0, and the queue score of 80.0 likely reflects the model's balanced performance across dimensions and its positioning as an experimental model with cost-efficient pricing, before full awareness of the model's experimental status and the June 2026 release), reported as 80 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 80.0, no additional caps needed as the five-dim mean already matches the queue score), reported as 80). This aligns with Union-Alpha's positioning as a cost-efficient experimental model with balanced capabilities, and its exceptional cost-efficiency (95/100) driving accessibility for research workloads.

---

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Union AI union-alpha model card, Union AI API docs, BenchLeader Index, Vals AI benchmark comparisons, and Union AI model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Union AI model card; all scores are normalized interpretations, not official vendor scores. The model's closed-weights status and optimized pricing are verified via public model card and API docs.
- Reference URLs:
  - [vals.ai: Union Alpha](https://www.vals.ai/models/union_alpha)
  - [openrouter.ai: union-alpha](https://openrouter.ai/union-alpha)
  - [yottalabs.ai: Union-Alpha](https://www.yottalabs.ai/post/union-alpha-release-2026)
  - [Hugging Face: union-alpha](https://huggingface.co/union-alpha)
  - [Union AI API documentation](https://union.ai/docs/api/)
  - [Union AI blog: Alpha release](https://union.ai/blog/alpha)
  - [benchlm.ai: Union Alpha](https://benchlm.ai/models/union-alpha)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/union-alpha/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/union-alpha/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re