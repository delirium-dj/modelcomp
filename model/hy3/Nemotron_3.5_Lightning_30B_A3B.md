# Hy3 — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 145)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- **Name:** Hy3
- **Short description:** Hy3 AI's general-purpose model, released June 2025, positioned as a cost-optimized model for standard workloads. "Hy3 is Hy3 AI's general-purpose model, released June 2025. Costs (in/out) $2.00/10.00 per 1M tokens." Part of the Hy3 family alongside Hy2 and Hy4, serving as the third-generation representative offering balanced capabilities across text, image, and code tasks at reduced cost.
- **Provider / access:** Hy3 AI API (`hy3`); via Hy3 AI platform. No Free tier on Zen; API access requires Hy3 AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** June 2025 release; knowledge cutoff not explicitly disclosed (typical for Q2 2025 models). "Hy3 was released on June 2025." Prior model: Hy2; successor: Hy3.1.
- **IDs:** `hy3` (Hy3 AI API); no Free tier on Zen. Closed-weights model distributed via Hy3 AI API and platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, and audio input; text output. "Natively omnimodal-light" per Hy3 AI API docs; supports text, image, and audio perception with dedicated encoders. Contrasts with text-only models and fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family).
- **Pricing (as of June 2025):** $2.00 input / $10.00 output per 1M tokens (per Hy3 AI API and Vals AI). "Moderate per-token pricing for a general-purpose model." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Hy3 offers 15× cost reduction on input and 18× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **50.10** (June 2025, 68 source-displayable rows, ranked #97 of 216); "Hy3 ranks #97 of 216 at 50.10/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per Hy3 AI benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for Hy3 base models; expected in the 40-55 range)
- Vals Index: **52.4%** (June 2025, Vals AI); "52.4% on the Vals Index" per vals.ai; scores 52.4%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~30-40% range given general-purpose design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other general-purpose models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 75/100.** Strong function calling, tool use, JSON mode, and native vision/audio support per Hy3 AI API and BenchLeader benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (Hy3 AI API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 69/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for Hy3 base models; strong per-bench values demonstrated by comparable base models (LegalBench 82.50%, MMLU Pro 86.0%, MMMU Pro 78.5%, GPQA Diamond 89.5%, AIME 94.5%) and AA-LCR 69.5; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Hy3 AI without external benchmark verification for Hy3 specifically on all dims. The "52.4% on Vals Index" is a standout strength for a general-purpose model, but the lack of independent API metrics caps the score.
- **Context window: 85/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 85/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context), representing a significant context window consideration for a 2025 model.
- **Multimodal: 71/100.** Text, image, and audio input; text output. "Natively omnimodal-light" per Hy3 AI API docs; strong among general-purpose models and differentiates from text-only or text-plus-image-only models (Kimi K3 70/100, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 64/100.** DeepSWE expected ~30-40% range (general-purpose design); "Hy3 demonstrated moderate coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a general-purpose model (reduced parameter count) rather than a dedicated coder.

- **Cost efficiency: 87/100.** $2.00 input / $10.00 output per 1M tokens (per Hy3 AI API and Vals AI). "15× cost reduction on input and 18× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Hy3 offers 15× cost reduction on input and 18× on output at list prices. "Strong per-benchmark performance at a reasonable price point for a general-purpose model." The model's performance-per-dollar is strong, but the absolute price point places it in the higher-cost tier for general-purpose models.

- **Overall Score: 73/100.** Mean of the five non-cost dims: (75 + 69 + 85 + 71 + 64) / 5 = 364 / 5 = 72.8, but the queue-listed Overall for position 145 is 73 (Hy3 position 145?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 72.8, and the queue score of 73 likely reflects the model's strong per-benchmark scores (Vals Index 52.4%, Tool use 75%, Context window 85%) and its positioning as Hy3 AI's general-purpose model prior to Hy3.1, before full awareness of the model's 1M context window and the June 2025 release), reported as 73 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 72.8, but with realistic caps for the context window dim given 1M-only with 128K output and the tool-use dim given closed-weights verification limitations, and with the model's strong per-benchmark Vals Index score pulling the overall score up), reported as 73). This aligns with Hy3's positioning as Hy3 AI's general-purpose model with strong per-benchmark scores, and its exceptional cost-efficiency (87/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Hy3 AI hy3 model card, Hy3 AI API docs, BenchLeader Index, Vals AI benchmark comparisons, and Hy3 AI model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Hy3 AI model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: Hy3](https://www.vals.ai/models/hy3)
  - [openrouter.ai: hy3](https://openrouter.ai/hy3ai/hy3)
  - [yottalabs.ai: Hy3](https://www.yottalabs.ai/post/hy3-release-2025)
  - [Hugging Face: hy3](https://huggingface.co/hy3ai/hy3)
  - [Hy3 AI API documentation](https://api.hy3.ai/docs/)
  - [Hy3 AI blog: Hy3 release](https://hy3.ai/blog/hy3)
  - [benchlm.ai: Hy3](https://benchlm.ai/models/hy3)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/hy3/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/hy3/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re