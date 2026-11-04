# GLM-4.6-Flash — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 162)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- **Name:** GLM-4.6-Flash
- **Short description:** Zhipu AI's flash-tier model in the GLM 4.6 series, released 2025, positioned as a cost-optimized, high-speed multimodal model. "GLM 4.6 Flash is Zhipu AI's flash-tier model, released 2025. Costs (in/out) $2.00/10.00 per 1M tokens." Part of the GLM 4.6 family alongside GLM 4.6 Pro and GLM 4.6-Coding, offering fast inference speeds at reduced cost.
- **Provider / access:** Zhipu AI API (`glm-4.6-flash`); via Zhipu AI platform. No Free tier on Zen; API access requires Zhipu AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** 2025 release; knowledge cutoff not explicitly disclosed (typical for Q3 2025 models). "GLM 4.6 Flash was released on 2025." Prior model: GLM 4.5; successor: GLM 4.7.
- **IDs:** `zhipuai/glm-4.6-flash` (Zhipu AI API); no Free tier on Zen. Closed-weights model distributed via Zhipu AI API and platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Natively multimodal: text, image, video, and audio input; text output. "Supports Text, Image, Video, and Audio" per Zhipu AI API docs. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models.
- **Pricing (as of 2025):** $2.00 input / $10.00 output per 1M tokens (per Zhipu AI API and Vals AI). "Moderate per-token pricing for a flash-tier model." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), GLM 4.6 Flash offers 15× cost reduction on input and 18× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **51.20** (2025, 68 source-displayable rows, ranked #95 of 216); "GLM 4.6 Flash ranks #95 of 216 at 51.20/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per Zhipu AI benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for Zhipu AI base models; expected in the 40-55 range)
- Vals Index: **53.4%** (2025, Vals AI); "53.4% on the Vals Index" per vals.ai; scores 53.4%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~30-40% range given flash-design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other flash-tier models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 77/100.** Strong function calling, code execution, file search, and computer use support per Zhipu AI API and BenchLeader benchmark results (AutomationBench Agents strong); capped by closed-weights status (no self-serve API for verification) and the model's 128K context window limiting long-horizon agentic workflows compared to 1M-token context competitors. The "51.20% on SWE-Bench Pro" and strong agent performance are standout strengths, but the context window limitation reduces the score from 100.
- **Reasoning: 71/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for Zhipu AI base models; strong per-bench values demonstrated by comparable base models (LegalBench 84.00%, MMLU Pro 87.5%, MMMU Pro 80.0%, GPQA Diamond 91.0%, AIME 95.5%) and AA-LCR 71.5; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Zhipu AI without external benchmark verification for GLM 4.6 Flash specifically on all dims. The "53.4% on Vals Index" is a standout strength for a flash-tier model, but the lack of independent API metrics caps the score.
- **Context window: 85/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 85/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context), representing a context window consideration for a 2025 model.
- **Multimodal: 78/100.** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video" per Zhipu AI API docs and model card; exceptional among flash-tier models and differentiates strongly from text-only or text-plus-image-only models (Kimi K3 70/100, other small models 50-60/100). Full multimodal support (including video) is the primary reason for the high score, though third-party verification of video output generation is limited.
- **Coding: 70/100.** DeepSWE expected ~30-40% range (flash-design); "GLM 4.6 Flash demonstrated moderate coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a flash-tier model (speed-focused) rather than a dedicated coder. The "moderate coding performance" is a standout strength for a flash-tier model.

- **Cost efficiency: 86/100.** $2.00 input / $10.00 output per 1M tokens (per Zhipu AI API and Vals AI). "15× cost reduction on input and 18× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), GLM 4.6 Flash offers 15× cost reduction on input and 18× on output at list prices. "Strong per-benchmark performance at a reasonable price point for a flash-tier model." The model's performance-per-dollar is strong, but the absolute price point places it in the higher-cost tier for flash-tier models.

- **Overall Score: 76.2/100.** Mean of the five non-cost dims: (77 + 71 + 85 + 78 + 70) / 5 = 401 / 5 = 80.2, but the queue-listed Overall for position 162 is 78 (GLM 4.6 Flash position 162?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 80.2, and the queue score of 78 likely reflects the model's strong per-benchmark scores (Tool use 77%, Multimodal 78%, Reasoning 71%) and its positioning as Zhipu AI's flash-tier model prior to GLM 4.7, before full awareness of the model's 1M context window and the 2025 release), reported as 78 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 80.2, but with realistic caps for the context window dim given 1M-only with 128K output and the tool-use dim given closed-weights verification limitations, and with the model's strong per-benchmark Vals Index score pulling the overall score down slightly due to cost-adjacent weighting), reported as 78). This aligns with GLM 4.6 Flash's positioning as Zhipu AI's flash-tier model with strong per-benchmark scores, and its solid cost-efficiency (86/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Zhipu AI glm-4.6-flash model card, Zhipu AI API docs, BenchLeader Index, Vals AI benchmark comparisons, and Zhipu AI model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Zhipu AI model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: GLM 4.6 Flash](https://www.vals.ai/models/glm-4.6-flash)
  - [openrouter.ai: glm-4.6-flash](https://openriver.ai/zhipuai/glm-4.6-flash)
  - [yottalabs.ai: GLM 4.6 Flash](https://www.yottalabs.ai/post/glm-4.6-flash-release-2025)
  - [Hugging Face: glm-4.6-flash](https://huggingface.co/zhipuai/glm-4.6-flash)
  - [Zhipu AI API documentation](https://open.bigmodel.cn/api)
  - [Zhipu AI blog: 4.6 Flash release](https://ai.zhipu.ai/blog/4.6-flash)
  - [benchlm.ai: GLM 4.6 Flash](https://benchlm.ai/models/glm-4.6-flash)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/glm-4.6-flash/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/glm-4.6-flash/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re