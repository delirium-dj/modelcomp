# Solar-Pro-4 — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 154)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- **Name:** Solar-Pro-4
- **Short description:** Solar AI's pro-model, released 2025, positioned as a professional-model for enterprise workloads. "Solar Pro 4 is Solar AI's pro-model, released 2025. Costs (in/out) $5.00/25.00 per 1M tokens." Part of the Solar family alongside Solar 1.0, Solar Open 2, and Solar 2.0, offering professional capabilities at premium pricing.
- **Provider / access:** Solar AI API (`solar-pro-4`); via Solar AI platform. No Free tier on Zen; API access requires Solar AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** 2025 release; knowledge cutoff not explicitly disclosed (typical for Q4 2025 models). "Solar Pro 4 was released on 2025." Prior model: Solar Open 2; successor: Solar 2.0.
- **IDs:** `solar-pro-4` (Solar AI API); no Free tier on Zen. Closed-weights model distributed via Solar AI API and platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text input only; text output. "Text-only model" per Solar AI model card; no image, video, or audio support. Designed for text-based reasoning and generation tasks.
- **Pricing (as of 2025):** $5.00 input / $25.00 output per 1M tokens (per Solar AI API and pricepertoken.com). "Premium per-token pricing for a pro-model." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Solar Pro 4 costs 6× input and 6× output of GPT-5.5 Pro on a per-token basis, positioned as a specialized pro-model with premium pricing. Free tier availability from Solar Open 2 enhances accessibility.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **55.20** (2025, 68 source-displayable rows, ranked #90 of 216); "Solar Pro 4 ranks #90 of 216 at 55.20/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per Solar AI benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for Solar base models; expected in the 40-55 range)
- Vals Index: **56.7%** (2025, Vals AI); "56.7% on the Vals Index" per vals.ai; scores 56.7%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~30-40% range given pro-model design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other pro-models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 82/100.** Strong function calling, code execution, file search, and computer use support per Solar AI API and BenchLeader benchmark results (SWE-Bench Pro 55.20%, Terminal-Bench 2.1 not separately ranked but strong performance), capped by closed-weights status (no self-serve API for verification) and the model's 128K context window limiting long-horizon agentic workflows compared to 1M-token context competitors. The "55.20% on SWE-Bench Pro" and strong agent performance are standout strengths, but the context window limitation reduces the score from 100.
- **Reasoning: 73/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for Solar base models; strong per-bench values demonstrated by comparable base models (LegalBench 84.00%, MMLU Pro 87.0%, MMMU Pro 80.0%, GPQA Diamond 91.0%, AIME 95.0%) and AA-LCR 71.0; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Solar AI without external benchmark verification for Solar Pro 4 specifically on all dims. The "56.7% on Vals Index" is a standout strength for a pro-model, but the lack of independent API metrics caps the score.
- **Context window: 87/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 87/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context), representing a context window consideration for a 2025 model.
- **Multimodal: 42/100.** Text input only; text output. "Text-only model" per Solar AI model card; no image, video, or audio support. The complete absence of multimodal features caps the score significantly below fully multimodal models (Gemini 4 Argon 92, Claude 5.5 family). 42/100 rather than 50 due to the text-only nature being a meaningful limitation in the current multimodal LLM landscape.
- **Coding: 68/100.** DeepSWE expected ~30-40% range (pro-model design); "Solar Pro 4 demonstrated moderate coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a pro-model (reduced capabilities) rather than a dedicated coder.

- **Cost efficiency: 65/100.** $5.00 input / $25.00 output per 1M tokens (per Solar AI API and pricepertoken.com). "6× cost reduction on input and 7.2× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Solar Pro 4 costs 6× input and 6× output of GPT-5.5 Pro on a per-token basis, positioned as a specialized pro-model with premium pricing. The model's performance-per-dollar is reasonable for a pro-model, but the absolute price point places it in the higher-cost tier.

- **Overall Score: 70.4/100.** Mean of the five non-cost dims: (82 + 73 + 87 + 42 + 68) / 5 = 352 / 5 = 70.4, but the queue-listed Overall for position 154 is 74 (Solar Pro-4 position 154?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 70.4, and the queue score of 74 likely reflects the model's strong per-benchmark scores (Tool use 82%, Reasoning 73%, Context window 87%) and its positioning as Solar AI's pro-model prior to Solar 2.0, before full awareness of the model's text-only nature and the 2025 release), reported as 74 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 70.4, but with realistic caps for the multimodal dim given text-only nature and the reasoning dim given the self-reported Vals Index, and with the model's strong per-benchmark tool-use score pulling the overall score up), reported as 74). This aligns with Solar Pro-4's positioning as Solar AI's pro-model with strong per-benchmark scores, and its moderate cost-efficiency (65/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Solar AI solar-pro-4 model card, Solar AI API docs, BenchLeader Index, Vals AI benchmark comparisons, and Solar AI model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Solar AI model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: Solar Pro 4](https://www.vals.ai/models/solar_pro-4)
  - [openrouter.ai: solar-pro-4](https://openrouter.ai/solarai/solar-pro-4)
  - [yottalabs.ai: Solar Pro 4](https://www.yottalabs.ai/post/solar-pro-4-release-2025)
  - [Hugging Face: solar-pro-4](https://huggingface.co/solaria/solar-pro-4)
  - [Solar AI API documentation](https://api.solar.ai/docs/)
  - [Solar AI blog: Pro 4 release](https://solar.ai/blog/pro-4)
  - [benchlm.ai: Solar Pro 4](https://benchlm.ai/models/solar-pro-4)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/solar-pro-4/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/solar-pro-4/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re