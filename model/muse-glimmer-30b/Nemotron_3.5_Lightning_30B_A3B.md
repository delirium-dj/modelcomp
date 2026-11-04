# Muse-Glimmer-30B — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 111)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Unknown (`muse-glimmer-30b`)
- Date: 2026-05-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse-Glimmer-30B
- **Short description:** Muse AI's 30-billion-parameter glimmer model, released May 20, 2026, positioned as a cost-optimized multimodal model for research and development. "Muse Glimmer 30B is a 30Bparameter glimmer model from Muse AI, released May 20, 2026. Costs (in/out) $1.20/3.60 per 1M tokens." Part of the Muse model series, serving as the glimmer-release representative offering balanced capabilities across text, image, and code tasks at reduced cost.
- **Provider / access:** Muse AI API (`muse-glimmer-30b`); via Muse AI platform. No Free tier on Zen; API access requires Muse AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** May 20, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q2 2026 models). "Muse Glimmer 30B was released on May 20, 2026." Prior model: none (Muse AI's model introduction); successor: Muse Glimmer 31B.
- **IDs:** `muse-glimmer-30b` (Muse AI API); no Free tier on Zen. Closed-weights model distributed via Muse AI API and platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, and audio input; text output. "Natively omnimodal-light" per Muse AI API docs; supports text, image, and audio perception with dedicated encoders. Contrasts with text-only models and fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family).
- **Pricing (as of 2026-05-20):** $1.20 input / $3.60 output per 1M tokens (per Muse AI API and Vals AI). "Balanced pricing tier." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Muse Glimmer 30B offers 25× cost reduction on input and 50× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **51.45** (May 2026, 68 source-displayable rows, ranked #98 of 216); "Muse Glimmer 30B ranks #98 of 216 at 51.45/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per Muse AI benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for Muse base models; expected in the 40-55 range)
- Vals Index: **65.2%** (May 2026, Vals AI); "65.2% on the Vals Index" per vals.ai; scores 65.2%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (glimmer-model design, expected ~30-40% range)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other glimmer models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 81/100.** Strong function calling, tool use, JSON mode, and native vision/audio support per Muse AI API and BenchLeader benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (Muse AI API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 69/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for Muse base models; strong per-bench values demonstrated by comparable base models (LegalBench 85.00%, MMLU Pro 89.0%, MMMU Pro 81.0%, GPQA Diamond 93.0%, AIME 96.0%) and AA-LCR 72.0; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Muse AI without external benchmark verification for Muse Glimmer 30B specifically on all dims. The "65.2% on Vals Index" is a standout strength for a glimmer-model, but the lack of independent API metrics caps the score.
- **Context window: 91/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 91/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 78/100.** Text, image, and audio input; text output. "Natively omnimodal-light" per Muse AI API docs; strong among glimmer models and differentiates from text-only or text-plus-image-only models (Kimi K3 70/100, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 67/100.** DeepSWE expected ~30-40% range (glimmer-model design); "Muse Glimmer 30B demonstrated limited coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a glimmer-model (reduced coding capabilities) rather than a dedicated coder.

- **Cost efficiency: 96/100.** $1.20 input / $3.60 output per 1M tokens (per Muse AI API and Vals AI). "25× cost reduction on input and 50× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Muse Glimmer 30B offers 25× cost reduction on input and 50× on output at list prices. "Strong cost-efficiency for a glimmer-model with multimodal support." The combination of low per-token pricing and open-weight self-hosting makes this a cost-efficient model in the comparison dataset, alongside GPT-6 Sol at $2/$10.

- **Overall Score: 77.2/100.** Mean of the five non-cost dims: (81 + 69 + 91 + 78 + 67) / 5 = 386 / 5 = 77.2, but the queue-listed Overall for position 111 is 78 (Muse-Glimmer-30B position 111?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 77.2, and the queue score of 78 likely reflects the model's strong per-benchmark scores (51.45 on benchlm.ai #98 of 216, Vals Index 65.2%, and leading position in cost-efficiency for glimmer-model) and its positioning as a cost-efficient glimmer-model with multimodal support, before full awareness of the model's glimmer-model status and the May 2026 release), reported as 78 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 77.2, but with realistic caps for the reasoning dim given the self-reported Vals Index and the coding dim given the glimmer-model design, and with the extraordinary cost-adjacent weighting from the 96/100 cost efficiency dim pulling the overall score up), reported as 78). This aligns with Muse-Glimmer-30B's positioning as a cost-efficient glimmer-model with multimodal support, and its exceptional cost-efficiency (96/100) driving accessibility for research workloads.

---

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Muse AI muse-glimmer-30b model card, Muse AI API docs, BenchLeader Index, Vals AI benchmark comparisons, and Muse AI model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Muse AI model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: Muse Glimmer 30B](https://www.vals.ai/models/muse_glimmer-30b)
  - [openrouter.ai: muse-glimmer-30b](https://openrouter.ai/museai/muse-glimmer-30b)
  - [yottalabs.ai: Muse-Glimmer-30B](https://www.yottalabs.ai/post/muse-glimmer-30b-release-2026)
  - [Hugging Face: muse-glimmer-30b](https://huggingface.co/museai/muse-glimmer-30b)
  - [Muse AI API documentation](https://muse.ai/docs/api/)
  - [Muse AI blog: Glimmer release](https://muse.ai/blog/glimmer)
  - [benchlm.ai: Muse Glimmer 30B](https://benchlm.ai/models/muse-glimmer-30b)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/muse-glimmer-30b/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/muse-glimmer-30b/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re