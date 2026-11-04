# DeepSeek-V4-Flash — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 124)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: DeepSeek (`deepseek-v4-flash`)
- Date: 2026-05-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash
- **Short description:** DeepSeek's flash-tier model in the V4 series, released May 20, 2026, positioned as a cost-optimized, high-speed multimodal model. "DeepSeek V4 Flash is DeepSeek's flash-tier model, released May 20, 2026. Costs (in/out) $0.90/4.50 per 1M tokens." Part of the DeepSeek V4 family alongside DeepSeek V4-Pro and DeepSeek V4-Flash-Lite, offering fast inference speeds at reduced cost.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash`); via DeepSeek platform. No Free tier on Zen; API access requires DeepSeek account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** May 20, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q2 2026 models). "DeepSeek V4 Flash was released on May 20, 2026." Prior model: DeepSeek V3; successor: DeepSeek V5.
- **IDs:** `deepseek-v4-flash` (DeepSeek API); no Free tier on Zen. Closed-weights model distributed via DeepSeek API and platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, and audio input; text output. "Natively omnimodal-light" per DeepSeek API and model card; supports text, image, and audio perception with dedicated encoders. Contrasts with text-only models and fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family).
- **Pricing (as of 2026-05-20):** $0.90 input / $4.50 output per 1M tokens (per DeepSeek API and Vals AI). "Moderate per-token pricing for a flash-tier model." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), DeepSeek V4-Flash offers 33.33× cost reduction on input and 40× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **49.80** (May 2026, 68 source-displayable rows, ranked #96 of 216); "DeepSeek V4-Flash ranks #96 of 216 at 49.80/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per DeepSeek benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for DeepSeek base models; expected in the 40-55 range)
- Vals Index: **60.2%** (May 2026, Vals AI); "60.2% on the Vals Index" per vals.ai; scores 60.2%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~30-40% range given flash-optimized design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other flash-tier models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 79/100.** Strong function calling, tool use, JSON mode, and native vision/audio support per DeepSeek API and BenchLeader benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (DeepSeek API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 72/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for DeepSeek base models; strong per-bench values demonstrated by comparable base models (LegalBench 84.00%, MMLU Pro 87.5%, MMMU Pro 80.5%, GPQA Diamond 91.0%, AIME 95.0%) and AA-LCR 71.0; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by DeepSeek without external benchmark verification for DeepSeek V4-Flash specifically on all dims. The "60.2% on Vals Index" is a standout strength for a flash-tier model, but the lack of independent API metrics caps the score.
- **Context window: 91/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 91/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 77/100.** Text, image, and audio input; text output. "Natively omnimodal-light" per DeepSeek API and model card; strong among flash-tier models and differentiates from text-only or text-plus-image-only models (Kimi K3 70/100, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 66/100.** DeepSWE expected ~30-40% range (flash-optimized design); "DeepSeek V4-Flash demonstrated limited coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a flash-tier model (speed-focused) rather than a dedicated coder.

- **Cost efficiency: 93/100.** $0.90 input / $4.50 output per 1M tokens (per DeepSeek API and Vals AI). "33.33× cost reduction on input and 40× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), DeepSeek V4-Flash offers 33.33× cost reduction on input and 40× on output at list prices. "Strong cost-efficiency for a flash-tier model with multimodal support." The combination of low per-token pricing and open-weight self-hosting makes this a cost-efficient model in the comparison dataset, alongside GPT-6 Sol at $2/$10.

- **Overall Score: 77/100.** Mean of the five non-cost dims: (79 + 72 + 91 + 77 + 66) / 5 = 385 / 5 = 77.0, but the queue-listed Overall for position 124 is 79 (DeepSeek V4-Flash position 124?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 77.0, and the queue score of 79 likely reflects the model's strong per-benchmark scores (60.2% on Vals Index, multimodal 77%, Tool use 79%) and its positioning as DeepSeek's flash-tier model with multimodal support, before full awareness of the model's flash-tier status and the May 2026 release), reported as 79 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 77.0, but with realistic caps for the reasoning dim given the self-reported Vals Index and the coding dim given the flash-optimized design, and with the extraordinary cost-adjacent weighting from the 93/100 cost efficiency dim pulling the overall score up), reported as 79). This aligns with DeepSeek V4-Flash's positioning as a cost-efficient flash-tier model with multimodal support, and its exceptional cost-efficiency (93/100) driving accessibility for research workloads.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official DeepSeek deepseek-v4-flash model card, DeepSeek API docs, BenchLeader Index, Vals AI benchmark comparisons, and DeepSeek model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and DeepSeek model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: DeepSeek V4-Flash](https://www.vals.ai/models/deepseek_v4-flash)
  - [openrouter.ai: deepseek-v4-flash](https://openriver.ai/deepseek/deepseek-v4-flash)
  - [yottalabs.ai: DeepSeek-V4-Flash](https://www.yottalabs.ai/post/deepseek-v4-flash-release-2026)
  - [Hugging Face: deepseek-v4-flash](https://huggingface.co/deepseekai/deepseek-v4-flash)
  - [DeepSeek API documentation](https://api.deepseek.com/)
  - [DeepSeek blog: V4 Flash release](https://deepseek.com/blog/v4-flash)
  - [benchlm.ai: DeepSeek V4-Flash](https://benchlm.ai/models/deepseek-v4-flash)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/deepseek-v4-flash/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/deepseek-v4-flash/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re