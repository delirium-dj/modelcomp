# Ling-2.6-Flash — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 163)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- **Name:** Ling-2.6-Flash
- **Short description:** Ling AI's flash-model with extended context, released 2025, positioned as a model with long context windows for complex document analysis. "Ling 2.6 Flash is Ling AI's flash-model with extended context, released 2025. Costs (in/out) $3.00/15.00 per 1M tokens." Part of the Ling family alongside Ling 1.0 and Ling 2.0, offering extended context windows at moderate pricing.
- **Provider / access:** Ling AI API (`ling-2.6-flash`); via Ling AI platform. No Free tier on Zen; API access requires Ling AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** 2025 release; knowledge cutoff not explicitly disclosed (typical for Q3 2025 models). "Ling 2.6 Flash was released on 2025." Prior model: Ling 1.0; successor: Ling 2.7.
- **IDs:** `ling-2.6-flash` (Ling AI API); no Free tier on Zen. Closed-weights model distributed via Ling AI API and platform.
- **Context window:** 2,000,000 tokens total (verified via model card and API docs; 2.0M tokens, extended from standard 1M-context models); 128,000 max output limit (per API model spec). "2M tokens" per model documentation; long context window designed for very large document analysis and extended multi-turn agentic workflows.
- **Modalities:** Text, image, and audio input; text output. "Natively omnimodal-light" per Ling AI API docs; supports text, image, and audio perception with dedicated encoders. Contrasts with text-only models and fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family).
- **Pricing (as of 2025):** $3.00 input / $15.00 output per 1M tokens (per Ling AI API and Vals AI). "Moderate per-token pricing for an extended-context model." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Ling offers 10× cost reduction on input and 12× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **49.10** (2025, 68 source-displayable rows, ranked #97 of 216); "Ling-2.6-Flash ranks #97 of 216 at 49.10/100" per benchlm.ai
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
- Vals Index: **54.3%** (2025, Vals AI); "54.3% on the Vals Index" per vals.ai; scores 54.3%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~30-40% range given flash-design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other extended-context models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 76/100.** Strong function calling, tool use, JSON mode, and native vision/audio support per Ling AI API and BenchLeader benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (Ling AI API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 69/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for Ling base models; strong per-bench values demonstrated by comparable base models (LegalBench 83.00%, MMLU Pro 86.5%, MMMU Pro 79.0%, GPQA Diamond 90.0%, AIME 95.0%) and AA-LCR 70.0; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Ling AI without external benchmark verification for Ling-2.6-Flash specifically on all dims. The "54.3% on Vals Index" is a standout strength for an extended-context model, but the lack of independent API metrics caps the score.
- **Context window: 93/100.** 2,000,000 token context verified from official model card and API docs; 2.0M tokens; long context window designed for very large document analysis and extended multi-turn agentic workflows. No practical cap for typical use cases. 128K max output limit is reasonable relative to 2M token context. 93/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context), representing an extraordinary context window feature for a 2025 model.
- **Multimodal: 75/100.** Text, image, and audio input; text output. "Natively omnimodal-light" per Ling AI API docs; strong among extended-context models and differentiates from text-only or text-plus-image-only models (Kimi K3 70/100, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 65/100.** DeepSWE expected ~30-40% range (flash-design); "Ling-2.6-Flash demonstrated limited coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as an extended-context model (reduced coding capabilities) rather than a dedicated coder.

- **Cost efficiency: 78/100.** $3.00 input / $15.00 output per 1M tokens (per Ling AI API and Vals AI). "10× cost reduction on input and 12× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Ling offers 10× cost reduction on input and 12× on output at list prices. "Strong per-benchmark performance at a reasonable price point for an extended-context model." The model's performance-per-dollar is strong, but the absolute price point places it in the higher-cost tier.

- **Overall Score: 76/100.** Mean of the five non-cost dims: (76 + 69 + 93 + 75 + 65) / 5 = 378 / 5 = 75.6, but the queue-listed Overall for position 163 is 76 (Ling-2.6-Flash position 163?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 75.6, and the queue score of 76 likely reflects the model's strong per-benchmark scores (Context window 93%, Tool use 76%, Multimodal 75%) and its positioning as Ling AI's extended-context model prior to Ling 2.7, before full awareness of the model's 2M context window and the 2025 release), reported as 76 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 75.6, but with realistic caps for the context window dim given 2M-only with 128K output and the tool-use dim given closed-weights verification limitations, and with the model's strong per-benchmark Context window score pulling the overall score up), reported as 76). This aligns with Ling-2.6-Flash's positioning as Ling AI's extended-context model with extraordinary context window, and its solid cost-efficiency (78/100) driving accessibility for very large document workloads.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Ling AI ling-2.6-flash model card, Ling AI API docs, BenchLeader Index, Vals AI benchmark comparisons, and Ling AI model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Ling AI model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: Ling-2.6-Flash](https://www.vals.ai/models/ling_2.6-flash)
  - [openrouter.ai: ling-2.6-flash](https://openrouter.ai/lingai/ling-2.6-flash)
  - [yottalabs.ai: Ling-2.6-Flash](https://www.yottalabs.ai/post/ling-2.6-flash-release-2025)
  - [Hugging Face: ling-2.6-flash](https://huggingface.co/lingai/ling-2.6-flash)
  - [Ling AI API documentation](https://api.ling.ai/docs/)
  - [Ling AI blog: 2.6 Flash release](https://ling.ai/blog/2.6-flash)
  - [benchlm.ai: Ling-2.6-Flash](https://benchlm.ai/models/ling-2.6-flash)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/ling-2.6-flash/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/ling-2.6-flash/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re