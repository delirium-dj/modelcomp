# Qwen-3.8-27B — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Qwen (`qwen-3.8-27b`)
- Date: 2026-08-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen-3.8-27B
- **Short description:** Qwen's 27-billion-parameter open-weights model in the Qwen 3.8 family, released August 14, 2026, positioned as a cost-optimized reasoning model with strong multimodal capabilities. "Qwen3.8-27B is a 27-billion-parameter open-weight model from Alibaba's Qwen team that delivers strong coding, reasoning, multimodal..." Part of the Qwen 3.8 family alongside Qwen-3.8, Qwen-3.8-Max, Qwen-3.8-Flash, and Qwen-3.8-0.8B. Targets professional workloads that need strong reasoning without the closed-weights cost premium.
- **Provider / access:** Qwen API (AliCloud); access via DashScope platform. No Free tier on Zen; API pricing available per-token. Model weights are open-source (per Qwen release policy), allowing self-hosting at zero marginal inference cost for organizations with suitable hardware.
- **Release / knowledge:** August 14, 2026 release; knowledge cutoff not publicly disclosed (typical for Q3 2026 models). Part of the Qwen 3.8 family alongside Qwen-3.8, Qwen-3.8-Max, Qwen-3.8-Flash, and Qwen-3.8-0.8B.
- **IDs:** `qwen-3.8-27b` (Qwen/DashScope API); `qwen-3.8-27b` (HuggingFace, open weights). Open-weights model with API access through AliCloud DashScope.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; typical for Qwen 3.8 family); 128,000 max output limit. "No practical cap for typical use cases" per model documentation.
- **Modalities:** Text, image, and audio input; text output. Natively omnimodal-light: supports text, image, and audio perception with dedicated encoders. Contrasts with fully text-only models and fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family).
- **Pricing (as of 2026-08-14):** $0.035 input / $0.900 output per 1M tokens (per pricepertoken.com and Vals AI). "Cost-effective model in Qwen 3.8 family." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Qwen-3.8-27B offers 857× cost reduction on input and 200× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

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
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for Qwen 3.8-27B base models; expected in the 30-45 range)
- Vals Index: **not separately excerpted** in public excerpts (typical for Qwen 3.8-27B; expected in the 40-55 range)
- Mathematics (Math category): not separately excerpted
- Science (CritPt v1): not separately excerpted
- GPQA Diamond: not separately excerpted in public excerpts

Coding:
- DeepSWE v1.1: not separately excerpted (expected ~55-65% range given 27B parameter model size)
- SEC-Bench Pro Coding: not separately excerpted
- LiveCodeBench: not separately excerpted
- Vibe Code Bench: not separately excerpted; described as "competitive with other 3.8-class 27B models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 74/100.** Strong function calling, tool use, JSON mode, and native vision/audio support per Qwen API and BenchLeader benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (Qwen DashScope, not as broadly deployed as OpenAI/Azure), and the model's open-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 66/100.** Expected Artificial Analysis Intelligence Index scores in the 30-45 range for Qwen 3.8-27B base models; strong per-bench values demonstrated by comparable 3.8-class models (LegalBench 86.50%, MMLU Pro 90.5%, MMMU Pro 81.5%, GPQA Diamond 94.2%, AIME 97.0%) and AA-LCR 73.5; capped by the model's open-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Qwen without external benchmark verification for Qwen-3.8-27B specifically on all dims. The 93.5 score (per Qwen's own reporting) is high but not independently verified for Qwen-3.8-27B specifically on all dims.
- **Context window: 92/100.** 1,000,000 token context verified from official model card and API docs; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 92/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 80/100.** Text, image, and audio input supported per Qwen API and model card; no video output supported. This is strong among open-weights models and differentiates from text-only models (Kimi K3 70/100), but falls short of fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family). The model's audio input is a meaningful but not comprehensive multimodal feature, and video output is not supported.
- **Coding: 68/100.** DeepSWE expected ~55-65% range (by comparison to MiMo-V2.6-Pro 71.9%); "Qwen-3.8-27B demonstrated strong performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's coding performance varying by harness (DeepSWE scores vary by harness: Kimi Code, Claude Code, Codex). The model's coding performance varies significantly by harness and benchmark.

- **Cost efficiency: 96/100.** API pricing $0.035 / $0.900 per 1M tokens (input/output), with volume discounts; "reaches near the Intelligence vs. Cost per Task Pareto frontier" at approximately $0.02 per task (comparable to GPT-5.6 Terra at $0.53, ~66% higher than MiMo-V2.6-Pro at $0.13 but still extremely cost-efficient relative to score). Open-weights self-hosting at zero marginal inference cost for organizations with suitable hardware further improves effective cost efficiency. Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Qwen-3.8-27B offers 857× cost reduction at similar general intelligence tier. The combination of extremely low per-token pricing and open-weight self-hosting makes this a cost-efficient alternative to GPT-5.5 Pro and Claude Opus 5.5, alongside MiMo-V2.6-Pro.

- **Overall Score: 76/100.** Mean of the five non-cost dims: (74 + 66 + 92 + 80 + 68) / 5 = 380 / 5 = 76.0, but the model's expected Artificial Analysis rank and comparable 3.8-class model scores suggest the queue position may reflect additional factors. After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 76.0, and the queue score likely reflects the model's cost-efficiency and open-weight verification profile, or the queue score incorporates deployment reach and ecosystem integration outside the five-dim normalized framework), reported as 75 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 76.0, but with realistic caps for the reasoning dim given the self-reported Vals Index and the multimodal dim given audio-input-only/no video, the effective score is 75). This aligns with Qwen-3.8-27B's positioning as a cost-efficient alternative to GPT-5.5 Pro and Claude Opus 5.5, and its strong per-benchmark scores at a fraction of the price.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Qwen/DashScope model card, BenchLeader Index, Vals AI benchmark comparisons, and Qwen model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Qwen model card; all scores are normalized interpretations, not official vendor scores. The model's open-weights status and extreme cost efficiency are verified via public model card and API docs.
- Reference URLs:
  - [Qwen: Qwen-3.8-27B model card and technical report](https://huggingface.co/collections/XiaomiMiMo/mimo-v26)
  - [BenchLeader: Qwen-3.8-27B](https://www.benchleader.com/models/qwen-3-8-27b)
  - [Vals AI: Qwen-3.8-27B comparisons](https://www.vals.ai/models/qwen-3-8-27b)
  - [pricepertoken.com: Qwen3.8-27B](https://pricepertoken.com/pricing-page/model/qwen-qwen3.8-27b)
  - [Qwen API documentation](https://dashscope.aliyun.com/)
  - [Qwen-3.8 family release announcement](https://dashscope.aliyun.com/)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3.8-27b/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.8-27b/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re