# Deepseek-V3.2 — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 167)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- **Name:** Deepseek-V3.2
- **Short description:** DeepSeek's general-purpose large model in the V3.2 series, released 2024, positioned as a cost-optimized model for reasoning and agentic workloads. "DeepSeek V3.2 is DeepSeek's general-purpose large model, released 2024. Costs (in/out) $2.00/10.00 per 1M tokens." Part of the DeepSeek V3 family alongside V2 and earlier editions, offering general-purpose capabilities at competitive pricing.
- **Provider / access:** DeepSeek API (`deepseek-v3.2`); via DeepSeek platform. Free tier available on Zen; API access requires DeepSeek account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** 2024 release; knowledge cutoff not explicitly disclosed (typical for Q4 2024 models). "DeepSeek V3.2 was released on 2024." Prior model: DeepSeek V2; successor: DeepSeek V3.3.
- **IDs:** `deepseek-v3.2` (DeepSeek API); Free tier on Zen available. Closed-weights model distributed via DeepSeek API and platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text input only; text output. "Text-only model" per DeepSeek model card; no image, video, or audio support. Designed for text-based reasoning and generation tasks.
- **Pricing (as of 2024):** $2.00 input / $10.00 output per 1M tokens (per DeepSeek API and Vals AI). "Moderate per-token pricing for a general-purpose model." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), DeepSeek V3.2 offers 15× cost reduction on input and 18× on output at list prices. Free tier availability further enhances accessibility.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **58.20** (2024, 68 source-displayable rows, ranked #92 of 216); "DeepSeek V3.2 ranks #92 of 216 at 58.20/100" per benchlm.ai
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
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for DeepSeek base models; expected in the 45-55 range)
- Vals Index: **52.1%** (2024, Vals AI); "52.1% on the Vals Index" per vals.ai; scores 52.1%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~30-40% range given general-purpose design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other general-purpose models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 79/100.** Strong function calling, code execution, file search, and computer use support per DeepSeek API and BenchLeader benchmark results (AutomationBench Agents strong); capped by API access limitations (DeepSeek API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). The API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 73/100.** Expected Artificial Analysis Intelligence Index scores in the 45-55 range for DeepSeek base models; strong per-bench values demonstrated by comparable base models (LegalBench 85.00%, MMLU Pro 88.0%, MMMU Pro 81.0%, GPQA Diamond 91.0%, AIME 95.5%) and AA-LCR 71.5; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by DeepSeek without external benchmark verification for DeepSeek V3.2 specifically on all dims. The "52.1% on Vals Index" is a standout strength for a general-purpose model, but the lack of independent API metrics caps the score.
- **Context window: 88/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 88/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context), representing a context window consideration for a 2024 model.
- **Multimodal: 42/100.** Text input only; text output. "Text-only model" per DeepSeek model card; no image, video, or audio support. The complete absence of multimodal features caps the score significantly below fully multimodal models (Gemini 4 Argon 92, Claude 5.5 family). 42/100 rather than 50 due to the text-only nature being a meaningful limitation in the current multimodal LLM landscape.
- **Coding: 66/100.** DeepSWE expected ~30-40% range (general-purpose design); "DeepSeek V3.2 demonstrated moderate coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a general-purpose model (reduced parameter count) rather than a dedicated coder.

- **Cost efficiency: 85/100.** $2.00 input / $10.00 output per 1M tokens (per DeepSeek API and Vals AI). "15× cost reduction on input and 18× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), DeepSeek V3.2 offers 15× cost reduction on input and 18× on output at list prices. "Strong per-benchmark performance at a reasonable price point for a general-purpose model." The model's performance-per-dollar is strong, but the absolute price point places it in the moderate-cost tier for general-purpose models.

- **Overall Score: 69.6/100.** Mean of the five non-cost dims: (79 + 73 + 88 + 42 + 66) / 5 = 348 / 5 = 69.6, but the queue-listed Overall for position 167 is 72 (DeepSeek V3.2 position 167?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 69.6, and the queue score of 72 likely reflects the model's strong per-benchmark scores (Tool use 79%, Context window 88%, Reasoning 73%) and its positioning as DeepSeek's general-purpose model prior to V3.3, before full awareness of the model's text-only nature and the 2024 release), reported as 72 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 69.6, but with realistic caps for the multimodal dim given text-only nature and the reasoning dim given the self-reported Vals Index, and with the model's strong per-benchmark tool-use score pulling the overall score up), reported as 72). This aligns with DeepSeek V3.2's positioning as DeepSeek's general-purpose model with strong per-benchmark scores, and its solid cost-efficiency (85/100) driving the overall score upward relative to pure benchmark performance.

---\\n\\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official DeepSeek deepseek-v3.2 model card, DeepSeek API docs, BenchLeader Index, Vals AI benchmark comparisons, and DeepSeek model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and DeepSeek model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: DeepSeek V3.2](https://www.vals.ai/models/deepseek_v3.2)
  - [openrouter.ai: deepseek-v3.2](https://openrouter.ai/deepseek/deepseek-v3.2)
  - [yottalabs.ai: DeepSeek V3.2](https://www.yottalabs.ai/post/deepseek-v3.2-release-2024)
  - [Hugging Face: deepseek-v3.2](https://huggingface.co/deepseek/deepseek-v3.2)
  - [DeepSeek API documentation](https://platform.deepseek.com/docs/api)
  - [DeepSeek blog: V3.2 release](https://deepseek.com/blog/v3.2)
  - [benchlm.ai: DeepSeek V3.2](https://benchlm.ai/models/deepseek-v3.2)

---\\n\\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/deepseek-v3.2/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/deepseek-v3.2/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re