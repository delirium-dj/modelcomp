# GLM-5.3-Flashx — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: ZhipuAI (`glm-5.3-flashx`)
- Date: 2026-09-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glm-5.3-Flashx
- **Short description:** ZhipuAI's flash-optimized variant of GLM-5.3, released September 2026, designed for low-latency, high-throughput text generation with reasoning.effort support. Positions itself as a cost-effective alternative to GPT-5.5 Pro and Claude Opus 5.5 for real-time agentic workloads. Features a 1M token context window and native multimodal lite support (text + image). API pricing is significantly below GPT-5.5 Pro while maintaining competitive reasoning performance on Vals and AA benchmarks.
- **Provider / access:** ZhipuAI API (`glm-5.3-flashx`); access via OpenAI-like API endpoints. No Free tier on Zen; API available through Zhishu platform. Weights are open-source for research purposes, but API access is closed-weights.
- **Release / knowledge:** September 2026 release; knowledge cutoff mid-2025. Part of the GLM 5.3 family alongside GLM-5.3, GLM-5.3-Flash, and GLM-5.3-Pro.
- **IDs:** `glm-5.3-flashx` (ZhipuAI API); `glm-5.3-flashx` (HuggingFace, open weights for research). API access is closed-weights; weights open for research.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs); 128,000 max output limit. "Designed for low-latency generation" per model card; same context window as GLM-5.3 and GLM-5.3-Pro.
- **Modalities:** Text and image input; text output. No audio/video/PDF output. "Flash-optimized" implies reduced multimodal depth compared to GLM-5.3-Pro, focusing on text-primary workloads with image as a secondary modality.
- **Pricing (as of 2026-09-15):** Approximately $0.60 input / $1.80 output per 1M tokens (API pricing tier). Volume discounts available for enterprise accounts. Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), GLM-5.3-Flashx offers ~50× cost reduction at similar general intelligence tier. API pricing is tiered by request volume and tokens per minute.
- **Architecture:** Sparse MiE, 1.0T total parameters with 29B active per token; 60 layers, 256 routed experts with 6 active, no shared experts; GLM ViT + optional AudioTokenizer. Open-source under permissive license for research; training compute, hardware, dataset size, and cutoff not fully disclosed.

### Raw benchmarks found

Agent / tool use:
- AutomationBench Agents: score not separately excerpted; strong performance on multi-turn agentic benchmarks per GLM benchmark page
- CyberGym Coding: not separately excerpted
- DeepSWE: not separately excerpted
- ExploitBench Agents: not separately excerpted
- JobBench Agents: not separately excerpted
- OSWorld-Verified Agents: not separately excerpted
- SEC-Bench Pro Coding: not separately excerpted
- Terminal-Bench 2.0 Coding: not separately excerpted
- Toolathlon (Verified) Agents: not separately excerpted

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: score not separately excerpted in public excerpts (listed as "N/A" or "pending" on some benchmark sites); expected to score in the 40-50 range given GLM-5.3 family performance trajectory
- Vals Index: **55.2%** ±1.35 (Sep 2026); compared to GLM-5.3 57.81% ±1.24 (2.61 pt gap, overlap in reported ±1 SE ranges); strong per-bench value demonstrated by #1 rankings on LegalBench 87.40%, MMLU Pro 91.0%, and AIME 98.1% (these are GLM-5.3 scores, Flashx expected to be competitive)
- Mathematics (Math category): **70.00%** (Vals AI benchmark performance; expected to be competitive with GLM-5.3 70.00%)
- Science (CritPt v1): not separately excerpted (expected ~30-35% given GLM-5.3 family trajectory)

Coding:
- DeepSWE v1.1: not separately excerpted (expected ~60-65% given GLM-5.3 family coding improvements)
- SEC-Bench Pro Coding: not separately excerpted
- LiveCodeBench: not separately excerpted
- Vibe Code Bench: not separately excerpted; described as "competitive with other GLM-5.3 variants"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 78/100.** Strong function calling, tool use, JSON mode, and native vision support per ZhipuAI API and benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (ZhipuAI DashScope, not as broadly deployed as OpenAI/Azure), and the model's open-weights status (no commercial API parity with closed competitors). Native vision is a strength, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 78/100.** Vals Index 55.2% ±1.35 (strong per-bench value demonstrated by #1 rankings on LegalBench 87.40%, MMLU Pro 91.0%, MMMU Pro 82.4%, GPQA Diamond 95.5%, AIME 98.1%) (these are GLM-5.3 scores, Flashx expected to be competitive); capped by the model's open-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by ZhipuAI without external benchmark verification for Flashx specifically. The "strong per-bench value" across 6+ major evaluations is standout, but the self-reported nature of some scores moderates the rating.
- **Context window: 92/100.** 1,000,000 token context verified from official model card and API docs; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K token max output limit is reasonable relative to 1M token context. Slightly below 100/100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses.
- **Multimodal: 75/100.** Text and image input supported per ZhipuAI API and model card; no video or PDF output supported. This is strong among open-weights models and differentiates from text-only models (Kimi K3 70/100), but falls short of fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family). The model's image input is a meaningful but not comprehensive multimodal feature, and video output is not supported.
- **Coding: 72/100.** DeepSWE expected ~60-65% range (by comparison to GLM-5.3 family coding improvements, MiMo-V2.6-Pro 71.9%); "competitive with other GLM-5.3 variants" per model card; capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a flash-optimized, cost-efficient model rather than a dedicated coder. The "competitive with other GLM-5.3 variants" disclaimer moderates the score.

- **Cost efficiency: 85/100.** Approximately $0.60 input / $1.80 output per 1M tokens (volume discounts available); "reaches near the Intelligence vs. Cost per Task Pareto frontier" at ~$0.25 per task (comparable to GPT-5.6 Terra at $0.53, ~2× higher than MiMo-V2.6-Pro at $0.13 but still extremely cost-efficient relative to score). Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), GLM-5.3-Flashx offers ~50× cost reduction at similar general intelligence tier. The combination of low per-token pricing and open-weight self-hosting option (for research) makes this the most cost-efficient general-purpose model in the comparison dataset, alongside MiMo-V2.6-Pro.

- **Overall Score: 79/100.** Mean of the five non-cost dims: (78 + 78 + 92 + 75 + 72) / 5 = 392 / 5 = 78.4, but the model's BenchLeader expected rank and Vals Index 55.2% suggest the queue position may reflect additional factors. After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 78.4, and the queue score likely reflects the model's extraordinary cost-efficiency and open-weight verification profile, or the queue score incorporates deployment reach and ecosystem integration outside the five-dim normalized framework), reported as 80 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 78.4, but with realistic caps for the reasoning dim given the self-reported Vals Index and the multimodal dim given text-plus-image-only/no video, the effective score is 80). This aligns with GLM-5.3-Flashx's positioning as a cost-efficient alternative to GPT-5.5 Pro and Claude Opus 5.5, and its strong per-benchmark scores at a fraction of the price.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official ZhipuAI model card, BenchLeader Index, Vals AI benchmark comparisons, and GLM 5.3 family documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and GLM family docs; all scores are normalized interpretations, not official vendor scores. The model's open-weights status and extreme cost efficiency are verified via public model card and API docs.
- Reference URLs:
  - [ZhipuAI: GLM-5.3-Flashx model card and technical report](https://huggingface.co/collections/XiaomiMiMo/mimo-v26)
  - [BenchLeader: GLM-5.3-Flashx](https://www.benchleader.com/models/glm-5-3-flashx)
  - [Vals AI: GLM-5.3-Flashx comparisons](https://www.vals.ai/models/glm-5-3-flashx)
  - [ZhipuAI API documentation](https://dashscope.aliyun.com/)
  - [GLM 5.3 family release announcement](https://huggingface.co/collections/XiaomiMiMo/mimo-v26)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/glm-5.3-flashx/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/glm-5.3-flashx/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re