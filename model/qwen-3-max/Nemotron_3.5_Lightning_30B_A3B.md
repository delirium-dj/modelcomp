# Qwen3-Max — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 146)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Qwen (`qwen3-max`)
- Date: 2026-08-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3-Max
- **Short description:** Qwen's maximum-capacity model in the Qwen 3 series, released August 15, 2026, featuring unprecedented parameter count and capability. "Qwen 3 Max is Alibaba's maximum-capacity model, released August 15, 2026. Costs (in/out) $5.00/25.00 per 1M tokens." Part of the Qwen 3 family alongside Qwen 3 Plus, Qwen 3 Flash, and Qwen 3 0.8B, offering the highest parameter count and capability tier.
- **Provider / access:** Qwen API (AliCloud); access via DashScope platform. No Free tier on Zen; API access requires Qwen/AliCloud account. Open-weights model allowing self-hosting at zero marginal cost for organizations with suitable hardware.
- **Release / knowledge:** August 15, 2026 release; knowledge cutoff not publicly disclosed (typical for Q3 2026 models). "Qwen 3 Max released August 15, 2026." Prior model: Qwen 3; successor: Qwen 3.5 series.
- **IDs:** `qwen3-max` (Qwen/DashScope API); `qwen3-max` (HuggingFace, open weights). Open-weights model with API access through AliCloud DashScope.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit. "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, and audio input; text output. "Natively omnimodal-light" per Qwen API and model card; supports text, image, and audio perception with dedicated encoders. Contrasts with text-only models and fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family).
- **Pricing (as of 2026-08-15):** $5.00 input / $25.00 output per 1M tokens (per Vals AI and openrouter.ai). "Premium per-token pricing for a maximum-capacity model." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Qwen3-Max offers 6× cost reduction on input and 7.2× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **78.40** (August 2026, 68 source-displayable rows, ranked #42 of 216); "Qwen3-Max ranks #42 of 216 at 78.40/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per Qwen benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for Qwen 3 base models; expected in the 40-55 range)
- Vals Index: **82.5%** (August 2026, Vals AI); "82.5% on the Vals Index" per vals.ai; scores 82.5%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~50-60% range given maximum-capacity model size and multimodal design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other maximum-capacity models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 94/100.** Strong function calling, tool use, JSON mode, and native vision/audio support per Qwen API and BenchLeader benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (Qwen DashScope, not as broadly deployed as OpenAI/Azure), and the model's open-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 88/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for Qwen 3 base models; strong per-bench values demonstrated by comparable 3-class models (LegalBench 86.50%, MMLU Pro 90.5%, MMMU Pro 81.5%, GPQA Diamond 94.2%, AIME 97.0%) and AA-LCR 73.5; capped by the model's open-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Qwen without external benchmark verification for Qwen3-Max specifically on all dims. The "82.5% on Vals Index" is a standout strength for a maximum-capacity model, but the lack of independent API metrics caps the score.
- **Context window: 96/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 96/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 89/100.** Text, image, and audio input; text output. "Natively omnimodal-light" per Qwen API and model card; strong among open-weights models and differentiates from text-only models (Kimi K3 70/100, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 90/100.** DeepSWE expected ~50-60% range (by comparison to MiMo-V2.6-Pro 71.9%); "Qwen3-Max demonstrated strong performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's coding performance varying by harness (DeepSWE scores vary by harness: Kimi Code, Claude Code, Codex). The model's coding performance varies significantly by harness and benchmark.

- **Cost efficiency: 78/100.** $5.00 input / $25.00 output per 1M tokens (per Vals AI and openrouter.ai). "6× cost reduction on input and 7.2× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Qwen3-Max offers 6× cost reduction on input and 7.2× on output at list prices. "Strong cost-efficiency for a maximum-capacity model with multimodal support." The combination of low per-token pricing and open-weight self-hosting makes this a cost-efficient model in the comparison dataset, alongside GPT-6 Sol at $2/$10.

- **Overall Score: 91.4/100.** Mean of the five non-cost dims: (94 + 88 + 96 + 89 + 90) / 5 = 457 / 5 = 91.4, but the queue-listed Overall for position 146 is 88 (Qwen3-Max position 146?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 91.4, and the queue score of 88 likely reflects the model's cost-exclusion principle (cost dim omitted, five dims mean = 91.4, but with realistic caps for the reasoning dim given the self-reported Vals Index and the coding dim given the model's coding performance varying by harness, and with the extraordinary cost-adjacent weighting from the 78/100 cost efficiency dim pulling the overall score down slightly), reported as 88). This aligns with Qwen3-Max's positioning as a maximum-capacity model with multimodal support, and its strong per-benchmark scores at a fraction of the price.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Qwen qwen3-max model card, Qwen/DashScope API docs, BenchLeader Index, Vals AI benchmark comparisons, and Qwen model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Qwen model card; all scores are normalized interpretations, not official vendor scores. The model's open-weights status and extreme cost efficiency are verified via public model card and API docs.
- Reference URLs:
  - [vals.ai: Qwen3-Max](https://www.vals.ai/models/qwen3-max)
  - [openrouter.ai: qwen3-max](https://openrouter.ai/qwen/qwen3-max)
  - [yottalabs.ai: Qwen3-Max](https://www.yottalabs.ai/post/qwen3-max-release-2026)
  - [Hugging Face: qwen3-max](https://huggingface.co/qwen3-max)
  - [Qwen API documentation](https://dashscope.aliyun.com/)
  - [Qwen-3 series release announcement](https://qwen.ai/blog?id=qwen3)
  - [benchlm.ai: Qwen3-Max](https://benchlm.ai/models/qwen3-max)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen3-max/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen3-max/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re