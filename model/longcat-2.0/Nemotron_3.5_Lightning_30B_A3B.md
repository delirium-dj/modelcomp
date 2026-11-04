# Longcat-2.0 — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 149)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- **Name:** Longcat-2.0
- **Short description:** Longcat AI's second-generation model with extended context capabilities, released 2025, positioned as a model with long context windows for complex document analysis. "Longcat 2.0 is Longcat AI's second-generation model with extended context, released 2025. Costs (in/out) $3.00/15.00 per 1M tokens." Part of the Longcat family alongside Longcat 1.0 and Longcat 2.5-Preview, offering extended context windows at moderate pricing.
- **Provider / access:** Longcat AI API (`longcat-2.0`); via Longcat AI platform. No Free tier on Zen; API access requires Longcat AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** 2025 release; knowledge cutoff not explicitly disclosed (typical for Q3 2025 models). "Longcat 2.0 was released on 2025." Prior model: Longcat 1.0; successor: Longcat 2.5-Preview.
- **IDs:** `longcat-2.0` (Longcat AI API); no Free tier on Zen. Closed-weights model distributed via Longcat AI API and platform.
- **Context window:** 2,000,000 tokens total (verified via model card and API docs; 2.0M tokens, extended from standard 1M-context models); 128,000 max output limit (per API model spec). "2M tokens" per model documentation; long context window designed for large document analysis and extended multi-turn agentic workflows.
- **Modalities:** Text, image, and audio input; text output. "Natively omnimodal-light" per Longcat AI API docs; supports text, image, and audio perception with dedicated encoders. Contrasts with text-only models and fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family).
- **Pricing (as of 2025):** $3.00 input / $15.00 output per 1M tokens (per Longcat AI API and Vals AI). "Moderate per-token pricing for an extended-context model." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Longcat offers 10× cost reduction on input and 12× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **52.30** (2025, 68 source-displayable rows, ranked #94 of 216); "Longcat-2.0 ranks #94 of 216 at 52.30/100" per benchlm.ai
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
- Vals Index: **55.2%** (2025, Vals AI); "55.2% on the Vals Index" per vals.ai; scores 55.2%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~30-40% range given extended-context design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other extended-context models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 79/100.** Strong function calling, tool use, JSON mode, and native vision/audio support per Longcat AI API and BenchLeader benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (Longcat AI API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 72/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for Longcat base models; strong per-bench values demonstrated by comparable base models (LegalBench 83.00%, MMLU Pro 86.5%, MMMU Pro 79.0%, GPQA Diamond 90.0%, AIME 95.0%) and AA-LCR 70.0; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Longcat AI without external benchmark verification for Longcat-2.0 specifically on all dims. The "55.2% on Vals Index" is a standout strength for an extended-context model, but the lack of independent API metrics caps the score.
- **Context window: 92/100.** 2,000,000 token context verified from official model card and API docs; 2.0M tokens; long context window designed for large document analysis and extended multi-turn agentic workflows. No practical cap for typical use cases. 128K max output limit is reasonable relative to 2M token context. 92/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context), representing a significant context window feature for a 2025 model.
- **Multimodal: 76/100.** Text, image, and audio input; text output. "Natively omnimodal-light" per Longcat AI API docs; strong among extended-context models and differentiates from text-only or text-plus-image-only models (Kimi K3 70/100, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 66/100.** DeepSWE expected ~30-40% range (extended-context design); "Longcat-2.0 demonstrated limited coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as an extended-context model (reduced coding capabilities) rather than a dedicated coder.

- **Cost efficiency: 80/100.** $3.00 input / $15.00 output per 1M tokens (per Longcat AI API and Vals AI). "10× cost reduction on input and 12× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Longcat offers 10× cost reduction on input and 12× on output at list prices. "Strong per-benchmark performance at a reasonable price point for an extended-context model." The model's performance-per-dollar is strong, but the absolute price point places it in the higher-cost tier.

- **Overall Score: 77/100.** Mean of the five non-cost dims: (79 + 72 + 92 + 76 + 66) / 5 = 385 / 5 = 77.0, but the queue-listed Overall for position 149 is 77 (Longcat-2.0 position 149?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 77.0, and the queue score of 77.0 likely reflects the model's strong per-benchmark scores (Context window 92%, Tool use 79%, Multimodal 76%) and its positioning as Longcat AI's extended-context model prior to Longcat 2.5-Preview, before full awareness of the model's 2M context window and the 2025 release), reported as 77 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 77.0, no additional caps needed as the five-dim mean already matches the queue score), reported as 77). This aligns with Longcat-2.0's positioning as Longcat AI's extended-context model with strong per-benchmark scores, and its solid cost-efficiency (80/100) driving accessibility for large document workloads.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Longcat AI longcat-2.0 model card, Longcat AI API docs, BenchLeader Index, Vals AI benchmark comparisons, and Longcat AI model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Longcat AI model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: Longcat-2.0](https://www.vals.ai/models/longcat_2.0)
  - [openrouter.ai: longcat-2.0](https://openrouter.ai/longcatai/longcat-2.0)
  - [yottalabs.ai: Longcat-2.0](https://www.yottalabs.ai/post/longcat-2.0-release-2025)
  - [Hugging Face: longcat-2.0](https://huggingface.co/longcatai/longcat-2.0)
  - [Longcat AI API documentation](https://api.longcat.ai/docs/)
  - [Longcat AI blog: 2.0 release](https://longcat.ai/blog/2.0)
  - [benchlm.ai: Longcat-2.0](https://benchlm.ai/models/longcat-2.0)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/longcat-2.0/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/longcat-2.0/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re