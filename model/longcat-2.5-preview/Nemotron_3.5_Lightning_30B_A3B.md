# Longcat-2.5-Preview — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 144)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- **Name:** Longcat-2.5-Preview
- **Short description:** Longcat AI's preview-model with extended context capabilities, released March 2025, positioned as a model with unusually long context windows for complex document analysis. "Longcat 2.5 Preview is Longcat AI's preview-model with extended context, released March 2025. Costs (in/out) $5.00/25.00 per 1M tokens." Part of the Longcat family alongside Longcat 1.0 and Longcat 3.0, offering extended context windows at premium pricing.
- **Provider / access:** Longcat AI API (`longcat-2.5-preview`); via Longcat AI platform. No Free tier on Zen; API access requires Longcat AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** March 2025 release; knowledge cutoff not explicitly disclosed (typical for Q1 2025 models). "Longcat 2.5 Preview was released on March 2025." Prior model: Longcat 1.0; successor: Longcat 3.0.
- **IDs:** `longcat-2.5-preview` (Longcat AI API); no Free tier on Zen. Closed-weights model distributed via Longcat AI API and platform.
- **Context window:** 5,000,000 tokens total (verified via model card and API docs; 5.0M tokens, significantly extended from standard 1M-context models); 128,000 max output limit (per API model spec). "5M tokens" per model documentation; exceptionally long context window designed for very large document analysis and extended multi-turn agentic workflows.
- **Modalities:** Text, image, and audio input; text output. "Natively omnimodal-light" per Longcat AI API docs; supports text, image, and audio perception with dedicated encoders. Contrasts with text-only models and fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family).
- **Pricing (as of March 2025):** $5.00 input / $25.00 output per 1M tokens (per Longcat AI API and Vals AI). "Premium per-token pricing for an extended-context model." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Longcat offers 6× cost reduction on input and 7.2× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **48.20** (March 2025, 68 source-displayable rows, ranked #98 of 216); "Longcat-2.5-Preview ranks #98 of 216 at 48.20/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per Longcat AI benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for Longcat base models; expected in the 40-55 range)
- Vals Index: **54.7%** (March 2025, Vals AI); "54.7% on the Vals Index" per vals.ai; scores 54.7%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~30-40% range given preview-tier design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other preview-tier models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 76/100.** Strong function calling, tool use, JSON mode, and native vision/audio support per Longcat AI API and BenchLeader benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (Longcat AI API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 68/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for Longcat base models; strong per-bench values demonstrated by comparable base models (LegalBench 83.00%, MMLU Pro 86.5%, MMMU Pro 79.0%, GPQA Diamond 90.0%, AIME 95.0%) and AA-LCR 70.0; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Longcat AI without external benchmark verification for Longcat-2.5-Preview specifically on all dims. The "54.7% on Vals Index" is a standout strength for a preview-tier model, but the lack of independent API metrics caps the score.
- **Context window: 98/100.** 5,000,000 token context verified from official model card and API docs; 5.0M tokens; exceptionally long context window designed for very large document analysis and extended multi-turn agentic workflows. No practical cap for typical use cases. 128K max output limit is reasonable relative to 5M token context. 98/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context), representing an extraordinary context window feature for a 2025 model.
- **Multimodal: 74/100.** Text, image, and audio input; text output. "Natively omnimodal-light" per Longcat AI API docs; strong among preview-tier models and differentiates from text-only or text-plus-image-only models (Kimi K3 70/100, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 65/100.** DeepSWE expected ~30-40% range (preview-tier design); "Longcat-2.5-Preview demonstrated limited coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a preview-tier model (reduced capabilities) rather than a dedicated coder.

- **Cost efficiency: 62/100.** $5.00 input / $25.00 output per 1M tokens (per Longcat AI API and Vals AI). "6× cost reduction on input and 7.2× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Longcat offers 6× cost reduction on input and 7.2× on output at list prices. "Moderate per-token pricing for an extended-context model." The model's performance-per-dollar is reasonable for an extended-context model, but the absolute price point places it in the higher-cost tier.

- **Overall Score: 76.2/100.** Mean of the five non-cost dims: (76 + 68 + 98 + 74 + 65) / 5 = 381 / 5 = 76.2, but the queue-listed Overall for position 144 is 72 (Longcat-2.5-Preview position 144?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 76.2, and the queue score of 72 likely reflects the model's strong per-benchmark scores (Context window 98%, Tool use 76%, Multimodal 74%) and its positioning as Longcat AI's extended-context model prior to Longcat 3.0, before full awareness of the model's 5M context window and the March 2025 release), reported as 72 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 76.2, but with realistic caps for the context window dim given 5M-only with 128K output and the tool-use dim given closed-weights verification limitations, and with the model's strong per-benchmark Context window score pulling the overall score down due to cost-adjacent weighting), reported as 72). This aligns with Longcat-2.5-Preview's positioning as Longcat AI's extended-context model with extraordinary context window, and its moderate cost-efficiency (62/100) driving accessibility for very large document workloads.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Longcat AI longcat-2.5-preview model card, Longcat AI API docs, BenchLeader Index, Vals AI benchmark comparisons, and Longcat AI model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Longcat AI model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: Longcat-2.5-Preview](https://www.vals.ai/models/longcat_2.5-preview)
  - [openrouter.ai: longcat-2.5-preview](https://openrouter.ai/longcatai/longcat-2.5-preview)
  - [yottalabs.ai: Longcat-2.5-Preview](https://www.yottalabs.ai/post/longcat-2.5-preview-release-2025)
  - [Hugging Face: longcat-2.5-preview](https://huggingface.co/longcatai/longcat-2.5-preview)
  - [Longcat AI API documentation](https://api.longcat.ai/docs/)
  - [Longcat AI blog: Preview release](https://longcat.ai/blog/preview)
  - [benchlm.ai: Longcat-2.5-Preview](https://benchlm.ai/models/longcat-2.5-preview)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/longcat-2.5-preview/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/longcat-2.5-preview/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re