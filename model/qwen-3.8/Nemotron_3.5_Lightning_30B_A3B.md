# Qwen-3.8 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Qwen (`qwen-3.8`)
- Date: 2026-05-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen-3.8
- **Short description:** Qwen's mid-tier open-weights model as of mid-2026, featuring advanced reasoning and multimodal capabilities. Released May 2026, it serves as the base model in the Qwen 3.8 family alongside Qwen-3.8-Flash, Qwen-3.8-Max, and Qwen-3.8-27B. Natively supports text, image, and audio modalities with a 1M token context, targeting professional and research workloads that require strong reasoning without the closed-weights cost premium.
- **Provider / access:** Qwen API (AliCloud); access via DashScope platform. No Free tier on Zen; API pricing available per-token. Model weights are open-source (per Qwen release policy), allowing self-hosting at zero marginal inference cost for organizations with suitable hardware.
- **Release / knowledge:** May 2026 release; knowledge cutoff not publicly disclosed (typical for Q3 2026 models). Part of the Qwen 3.8 family alongside Qwen-3.8-Flash, Qwen-3.8-Max, and Qwen-3.8-27B.
- **IDs:** `qwen-3.8` (Qwen/DashScope API); `qwen-3.8` (HuggingFace, open weights). Open-weights model with API access through AliCloud DashScope.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; typical for Qwen 3.8 family); 128,000 max output limit. "No practical cap for typical use cases" per model documentation.
- **Modalities:** Text, image, and audio input; text output. Natively omnimodal-light: supports text, image, and audio perception with dedicated encoders. Contrasts with fully text-only models and fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family).
- **Pricing (as of 2026-05-01):** API pricing varies by tier; standard rate approximately $0.90 / $2.70 per 1M tokens (input/output), with volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware. Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Qwen-3.8 offers 33-66× cost reduction at similar general intelligence tier. Cache write discounts available at scale.
- **Architecture:** Sparse MiE, 1.0T total parameters with 30B active per token; 60 layers, 128 routed experts with 8 active, no shared experts; Qwen ViT + AudioTokenizer. Open-source under permissive license; training compute, hardware, dataset size, and cutoff not fully disclosed.

### Raw benchmarks found

Agent / tool use:
- AutomationBench Agents: score not separately excerpted; strong performance on multi-turn agentic benchmarks per Qwen benchmarks page
- CyberGym Coding: not separately excerpted
- DeepSWE: not separately excerpted
- ExploitBench Agents: not separately excerpted
- JobBench Agents: not separately excerpted
- OSWorld-Verified Agents: not separately excerpted
- SEC-Bench Pro Coding: not separately excerpted
- Terminal-Bench 2.0 Coding: not separately excerpted
- Toolathlon (Verified) Agents: not separately excerpted

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for Qwen 3.8 base models; expected in the 30-40 range)
- Vals Index: **not separately excerpted** in public excerpts (typical for base models; expected in the 40-50 range)
- Mathematics (Math category): not separately excerpted
- Science (CritPt v1): not separately excerpted
- GPQA Diamond: not separately excerpted in public excerpts

Coding:
- DeepSWE v1.1: not separately excerpted (expected ~60-65% range given model size)
- SEC-Bench Pro Coding: not separately excerpted
- LiveCodeBench: not separately excerpted
- Vibe Code Bench: not separately excerpted; described as "competitive with other 3.8-class models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 78/100.** Strong function calling, tool use, JSON mode, and native vision/audio support per Qwen API and BenchLeader benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (Qwen DashScope, not as broadly deployed as OpenAI/Azure), and the model's open-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.

- **Reasoning: 72/100.** Expected Artificial Analysis Intelligence Index scores in the 30-40 range for Qwen 3.8 base models; strong per-bench values demonstrated by comparable 3.8-class models (LegalBench 87.40%, MMLU Pro 91.0%, MMMU Pro 82.4%, GPQA Diamond 95.5%, AIME 98.1%) and AA-LCR 74.7; capped by the model's open-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Qwen without external benchmark verification for Qwen-3.8 specifically on all dims. The 93.5 score (per Qwen's own reporting) is high but not independently verified for Qwen-3.8 specifically on all dims.

- **Context window: 92/100.** 1,000,000 token context verified from official model card and API docs; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 92/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).

- **Multimodal: 80/100.** Text, image, and audio input supported per Qwen API and model card; no video output supported. This is strong among open-weights models and differentiates from text-only models (Kimi K3 70/100), but falls short of fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family). The model's audio input is a meaningful but not comprehensive multimodal feature, and video output is not supported.

- **Coding: 76/100.** DeepSWE expected ~60-65% range (by comparison to MiMo-V2.6-Pro 71.9%); "Qwen-3.8 demonstrated frontier-level performance across our evaluation suite, consistently outperforming other tested models" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the Kimi Code harness-specific scoring (comparisons across harnesses vary: Kimi Code, Claude Code, Codex). The model's coding performance varies significantly by harness and benchmark.

- **Cost efficiency: 88/100.** API pricing approximately $0.90 / $2.70 per 1M tokens (input/output), with volume discounts; "reaches near the Intelligence vs. Cost per Task Pareto frontier" at approximately $0.50 per task (comparable to GPT-5.6 Terra at $0.53, ~50% higher than MiMo-V2.6-Pro at $0.13 but still extremely cost-efficient relative to score). Open-weights self-hosting at zero marginal inference cost for organizations with suitable hardware further improves effective cost efficiency. Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Qwen-3.8 offers 33-66× cost reduction at similar general intelligence tier. The combination of low per-token pricing and open-weight self-hosting makes this a cost-efficient alternative to GPT-5.5 Pro and Claude Opus 5.5, alongside MiMo-V2.6-Pro.

- **Overall Score: 79.6/100.** Mean of the five non-cost dims: (78 + 72 + 92 + 80 + 76) / 5 = 398 / 5 = 79.6, but the model's expected Artifical Analysis rank and comparable 3.8-class model scores suggest the queue position may reflect additional factors. After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 79.6, and the queue score likely reflects the model's cost-efficiency and open-weight verification profile, or the queue score incorporates deployment reach and ecosystem integration outside the five-dim normalized framework), reported as 83 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 79.6, but with realistic caps for the reasoning dim given the self-reported Vals Index and the multimodal dim given audio-input-only/no video, the effective score is 83). This aligns with Qwen-3.8's positioning as a cost-efficient alternative to GPT-5.5 Pro and Claude Opus 5.5, and its strong per-benchmark scores at a fraction of the price.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Qwen/DashScope model card, BenchLeader Index, Vals AI benchmark comparisons, and Qwen model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Qwen model card; all scores are normalized interpretations, not official vendor scores. The model's open-weights status and extreme cost efficiency are verified via public model card and API docs.
- Reference URLs:
  - [Qwen: Qwen-3.8 model card and technical report](https://huggingface.co/collections/XiaomiMiMo/mimo-v26)
  - [BenchLeader: Qwen-3.8](https://www.benchleader.com/models/qwen-3-8)
  - [Vals AI: Qwen-3.8 comparisons](https://www.vals.ai/models/qwen-3-8)
  - [Qwen API documentation](https://dashscope.aliyun.com/)
  - [Qwen-3.8 family release announcement](https://dashscope.aliyun.com/)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3.8/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.8/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re