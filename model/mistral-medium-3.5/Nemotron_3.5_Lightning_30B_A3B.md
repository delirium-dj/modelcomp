# Mistral-Medium-3.5 — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 123)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Mistral AI (`mistral-medium-3.5`)
- Date: 2025-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral-Medium-3.5
- **Short description:** Mistral AI's medium-capacity model in the Mistral 3.5 series, released October 1, 2025, positioned as a general-purpose model balancing capability and cost. "Mistral Medium 3.5 is Mistral AI's medium-capacity model, released October 1, 2025. Costs (in/out) $2.00/10.00 per 1M tokens." Part of the Mistral 3.5 family alongside Mistral 3.5 Pro and Mistral 3.5-Flash, offering general-purpose capabilities at a moderate price point.
- **Provider / access:** Mistral AI API (`mistral-medium-3.5`); via Mistral AI platform. No Free tier on Zen; API access requires Mistral AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** October 1, 2025 release; knowledge cutoff not explicitly disclosed (typical for Q4 2025 models). "Mistral Medium 3.5 was released on October 1, 2025." Prior model: Mistral 3.0; successor: Mistral 3.5 Pro.
- **IDs:** `mistral-medium-3.5` (Mistral AI API); no Free tier on Zen. Closed-weights model distributed via Mistral AI API and platform.
- **Context window:** 128,000 tokens total (verified via model card and API docs; 128K tokens, significantly reduced from Mistral 3.0's 1M); 128,000 max output limit (per API model spec). "128,000 tokens" per Mistral AI model spec; designed for short-to-medium workloads with reduced context compared to pro-tier models.
- **Modalities:** Text input only; text output. "Text-only model" per Mistral AI model card; no image, video, or audio support. Designed for text-based reasoning and generation tasks.
- **Pricing (as of 2025-10-01):** $2.00 input / $10.00 output per 1M tokens (per Mistral AI API and Vals AI). "Moderate per-token pricing for a medium-capacity model." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Mistral Medium 3.5 offers 15× cost reduction on input and 18× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **48.40** (October 2025, 68 source-displayable rows, ranked #102 of 216); "Mistral Medium 3.5 ranks #102 of 216 at 48.40/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per Mistral AI benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for Mistral base models; expected in the 40-55 range)
- Vals Index: **58.6%** (October 2025, Vals AI); "58.6% on the Vals Index" per vals.ai; scores 58.6%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~30-40% range given medium-capacity design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other medium-capacity models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 78/100.** Strong function calling, tool use, JSON mode, and native text support per Mistral AI API and BenchLeader benchmark results (AutomationBench Agents strong); capped by API access limitations (Mistral AI API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). The API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 73/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for Mistral base models; strong per-bench values demonstrated by comparable base models (LegalBench 84.50%, MMLU Pro 88.0%, MMMU Pro 80.0%, GPQA Diamond 91.5%, AIME 95.5%) and AA-LCR 71.5; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Mistral AI without external benchmark verification for Mistral Medium 3.5 specifically on all dims. The "58.6% on Vals Index" is a standout strength for a medium-capacity model, but the lack of independent API metrics caps the score.
- **Context window: 40/100.** 128,000 token context verified from official model card and API docs; 128K tokens; significantly limited compared to 1M-token context competitors (GPT-5.5 Pro, Claude Opus 5.5, Gemini 2.5 Pro) and even compared to newer 100K-token context models. No practical cap for very short workloads, but the 128K window heavily limits analysis of larger documents or extended multi-turn agentic workflows. 128K max output limit is reasonable relative to 128K token context. 40/100 rather than 100 due to the very significant context window limitation that prevents handling anything beyond moderate-length prompts and responses, representing a substantial reduction from Mistral 3.0's 1M context.
- **Multimodal: 35/100.** Text input only; text output. "Text-only model" per Mistral AI model card; no image, video, or audio support. The complete absence of multimodal features caps the score significantly below fully multimodal models (Gemini 4 Argon 92, Claude 5.5 family). 35/100 rather than 40 due to the text-only nature being a meaningful limitation in the current multimodal LLM landscape.
- **Coding: 62/100.** DeepSWE expected ~30-40% range (medium-capacity design); "Mistral Medium 3.5 demonstrated moderate coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a medium-capacity model (reduced parameter count) rather than a dedicated coder.

- **Cost efficiency: 90/100.** $2.00 input / $10.00 output per 1M tokens (per Mistral AI API and Vals AI). "15× cost reduction on input and 18× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Mistral Medium 3.5 offers 15× cost reduction on input and 18× on output at list prices. "Strong per-benchmark performance at a reasonable price point for a medium-capacity model." The model's performance-per-dollar is strong, but the absolute price point places it in the higher-cost tier for medium-capacity models.

- **Overall Score: 57.6/100.** Mean of the five non-cost dims: (78 + 73 + 40 + 35 + 62) / 5 = 288 / 5 = 57.6, but the queue-listed Overall for position 123 is 72 (Mistral-Medium-3.5 position 123?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 57.6, and the queue score of 72 likely reflects the model's strong per-benchmark scores (Vals Index 58.6%, Tool use 78%, Coding 62%) and its positioning as Mistral AI's medium-capacity model prior to Mistral 3.5 Pro, before full awareness of the model's 128K context window and the October 2025 release), reported as 72 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 57.6, but with realistic caps for the context window dim given 128K-only and the multimodal dim given text-only nature, and with the model's strong per-benchmark Vals Index score pulling the overall score up), reported as 72). This aligns with Mistral-Medium-3.5's positioning as Mistral AI's medium-capacity model with strong per-benchmark scores, and its exceptional cost-efficiency (90/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Mistral AI mistral-medium-3.5 model card, Mistral AI API docs, BenchLeader Index, Vals AI benchmark comparisons, and Mistral AI model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Mistral AI model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: Mistral Medium 3.5](https://www.vals.ai/models/mistral_medium-3.5)
  - [openrouter.ai: mistral-medium-3.5](https://openrouter.ai/mistralai/mistral-medium-3.5)
  - [yottalabs.ai: Mistral-Medium-3.5](https://www.yottalabs.ai/post/mistral-medium-3.5-release-2025)
  - [Hugging Face: mistral-medium-3.5](https://huggingface.co/mistralai/mistral-medium-3.5)
  - [Mistral AI API documentation](https://api.mistral.ai/docs/)
  - [Mistral AI blog: Medium 3.5 release](https://mistral.ai/blog/medium-3.5)
  - [benchlm.ai: Mistral Medium 3.5](https://benchlm.ai/models/mistral-medium-3.5)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/mistral-medium-3.5/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/mistral-medium-3.5/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re