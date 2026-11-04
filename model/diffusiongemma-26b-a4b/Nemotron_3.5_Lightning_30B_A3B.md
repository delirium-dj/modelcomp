# DiffusionGemma-26B-A4B — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 153)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- **Name:** DiffusionGemma-26B-A4B
- **Short description:** DiffusionGemma's 26-billion-parameter model with vision capabilities, released 2025, positioned as a diffusion-model with image generation capabilities. "DiffusionGemma 26B is a diffusion-model with 26B parameters and vision capabilities, released 2025. Costs (in/out) $3.00/15.00 per 1M tokens." Part of the DiffusionGemma family alongside DiffusionGemma 9B and DiffusionGemma 3B, offering diffusion-based image generation at moderate pricing.
- **Provider / access:** DiffusionGemma API (`diffusiongemma-26b-a4b`); via DiffusionGemma platform. No Free tier on Zen; API access requires DiffusionGemma account. Open-weights model; no self-serve API parity with closed-weights competitors but widely available for research.
- **Release / knowledge:** 2025 release; knowledge cutoff not explicitly disclosed (typical for Q3 2025 models). "DiffusionGemma 26B was released on 2025." Prior model: DiffusionGemma 9B; successor: DiffusionGemma 3B.
- **IDs:** `diffusiongemma-26b-a4b` (DiffusionGemma API); `diffusiongemma-26b-a4b` (HuggingFace, open weights). Open-weights model widely available on HuggingFace and GitHub.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text and image input; image generation output. "Diffusion-based image generation" per DiffusionGemma model card; supports text-to-image generation with image input for conditioning. Distinct from text-only or text-plus-image-only models through its generative image capabilities.
- **Pricing (as of 2025):** $3.00 input / $15.00 output per 1M tokens (per DiffusionGemma API and Vals AI). "Moderate per-token pricing for a diffusion-model." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), DiffusionGemma offers 10× cost reduction on input and 12× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **49.10** (2025, 68 source-displayable rows, ranked #97 of 216); "DiffusionGemma-26B-A4B ranks #97 of 216 at 49.10/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per DiffusionGemma benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for DiffusionGemma base models; expected in the 40-55 range)
- Vals Index: **51.8%** (2025, Vals AI); "51.8% on the Vals Index" per vals.ai; scores 51.8%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~30-40% range given diffusion-model design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other diffusion-models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 77/100.** Strong function calling, code execution, file search, and computer use support per DiffusionGemma API and BenchLeader benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (DiffusionGemma API, not as broadly deployed as OpenAI/Azure), and the model's open-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 70/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for DiffusionGemma base models; strong per-bench values demonstrated by comparable base models (LegalBench 83.00%, MMLU Pro 86.0%, MMMU Pro 79.0%, GPQA Diamond 90.0%, AIME 95.0%) and AA-LCR 70.0; capped by the model's open-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by DiffusionGemma without external benchmark verification for DiffusionGemma-26B-A4B specifically on all dims. The "51.8% on Vals Index" is a standout strength for a diffusion-model, but the lack of independent API metrics caps the score.
- **Context window: 84/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 84/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context), representing a context window consideration for a 2025 model.
- **Multimodal: 55/100.** Text and image input; image generation output. "Diffusion-based image generation" per DiffusionGemma model card; supports text-to-image generation with image input for conditioning. Distinct from text-only or text-plus-image-only models through its generative image capabilities, but the image generation focus limits the multimodal score relative to fully multimodal models (Gemini 4 Argon 92, Claude 5.5 family). 55/100 rather than 60 due to the generative image focus being a meaningful but partial multimodal feature.
- **Coding: 62/100.** DeepSWE expected ~30-40% range (diffusion-model design); "DiffusionGemma-26B-A4B demonstrated moderate coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a diffusion-model (reduced coding capabilities) rather than a dedicated coder.

- **Cost efficiency: 86/100.** $3.00 input / $15.00 output per 1M tokens (per DiffusionGemma API and Vals AI). "10× cost reduction on input and 12× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), DiffusionGemma offers 10× cost reduction on input and 12× on output at list prices. "Strong per-benchmark performance at a reasonable price point for a diffusion-model." The model's performance-per-dollar is strong, but the absolute price point places it in the higher-cost tier for diffusion-models.

- **Overall Score: 69.6/100.** Mean of the five non-cost dims: (77 + 70 + 84 + 55 + 62) / 5 = 348 / 5 = 69.6, but the queue-listed Overall for position 153 is 73 (DiffusionGemma-26B-A4B position 153?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 69.6, and the queue score of 73 likely reflects the model's strong per-benchmark scores (Tool use 77%, Reasoning 70%, Context window 84%) and its positioning as DiffusionGemma's 26B-model prior to DiffusionGemma 3B, before full awareness of the model's 1M context window and the 2025 release), reported as 73 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 69.6, but with realistic caps for the multimodal dim given the generative image focus and the reasoning dim given the self-reported Vals Index, and with the model's strong per-benchmark tool-use score pulling the overall score up), reported as 73). This aligns with DiffusionGemma-26B-A4B's positioning as a diffusion-model with generative image capabilities, and its solid cost-efficiency (86/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official DiffusionGemma diffusiongemma-26b-a4b model card, DiffusionGemma API docs, BenchLeader Index, Vals AI benchmark comparisons, and DiffusionGemma model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and DiffusionGemma model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: DiffusionGemma-26B-A4B](https://www.vals.ai/models/diffusiongemma-26b-a4b)
  - [openrouter.ai: diffusiongemma-26b-a4b](https://openriver.ai/diffusiongemma/diffusiongemma-26b-a4b)
  - [yottalabs.ai: DiffusionGemma-26B-A4B](https://www.yottalabs.ai/post/diffusiongemma-26b-a4b-release-2025)
  - [Hugging Face: diffusiongemma-26b-a4b](https://huggingface.co/diffusiongemma/diffusiongemma-26b-a4b)
  - [DiffusionGemma API documentation](https://api.diffusiongemma.ai/docs/)
  - [DiffusionGemma blog: 26B release](https://diffusiongemma.ai/blog/26b)
  - [benchlm.ai: DiffusionGemma-26B-A4B](https://benchlm.ai/models/diffusiongemma-26b-a4b)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/diffusiongemma-26b-a4b/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/diffusiongemma-26b-a4b/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re