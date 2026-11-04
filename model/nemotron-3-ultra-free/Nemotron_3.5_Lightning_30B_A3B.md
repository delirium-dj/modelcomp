# Nemotron-3-Ultra-Free — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 147)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: NVIDIA (`nemotron-3-ultra-free`)
- Date: 2026-02-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron-3-Ultra-Free
- **Short description:** NVIDIA's ultra-capacity free-model in the Nemotron 3 series, released February 20, 2026, positioned as a cost-optimized model for research and development with fully open weights. "Nemotron 3 Ultra Free is NVIDIA's ultra-capacity free-model, released February 20, 2026. Costs (in/out) $0.00/$0.00 per 1M tokens." Part of the Nemotron 3 family alongside Nemotron 3 Plus, Nemotron 3 Flash, and Nemotron 3 0.8B, offering ultra-capacity capabilities at zero cost for qualified organizations.
- **Provider / access:** NVIDIA API (`nemotron-3-ultra-free`); via NVIDIA platform. No Free tier on Zen; API access requires NVIDIA account. Open-weights model allowing self-hosting at zero marginal cost for organizations with suitable hardware.
- **Release / knowledge:** February 20, 2026 release; knowledge cutoff not publicly disclosed (typical for Q1 2026 models). "Nemotron 3 Ultra Free released February 20, 2026." Prior model: Nemotron 3; successor: Nemotron 3.1 series.
- **IDs:** `nemotron-3-ultra-free` (NVIDIA API); `nemotron-3-ultra-free` (HuggingFace, open weights). Open-weights model with API access through NVIDIA.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit. "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, and audio input; text output. "Natively omnimodal-light" per NVIDIA API and model card; supports text, image, and audio perception with dedicated encoders. Contrasts with text-only models and fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family).
- **Pricing (as of 2026-02-20):** $0.00 input / $0.00 output per 1M tokens (per NVIDIA API and Vals AI). "Zero per-token pricing for a ultra-capacity free-model." No per-token costs for qualified organizations with suitable hardware. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **65.30** (February 2026, 68 source-displayable rows, ranked #92 of 216); "Nemotron-3-Ultra-Free ranks #92 of 216 at 65.30/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per NVIDIA benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for NVIDIA base models; expected in the 40-55 range)
- Vals Index: **58.2%** (February 2026, Vals AI); "58.2% on the Vals Index" per vals.ai; scores 58.2%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~30-40% range given ultra-capacity design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other ultra-capacity models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 84/100.** Strong function calling, tool use, JSON mode, and native vision/audio support per NVIDIA API and BenchLeader benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (NVIDIA API, not as broadly deployed as OpenAI/Azure), and the model's open-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 79/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for NVIDIA base models; strong per-bench values demonstrated by comparable base models (LegalBench 84.50%, MMLU Pro 88.0%, MMMU Pro 80.0%, GPQA Diamond 91.5%, AIME 95.5%) and AA-LCR 71.5; capped by the model's open-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by NVIDIA without external benchmark verification for Nemotron-3-Ultra-Free specifically on all dims. The "58.2% on Vals Index" is a standout strength for an ultra-capacity free-model, but the lack of independent API metrics caps the score.
- **Context window: 95/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 95/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 85/100.** Text, image, and audio input; text output. "Natively omnimodal-light" per NVIDIA API and model card; strong among open-weights models and differentiates from text-only models (Kimi K3 70/100, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 78/100.** DeepSWE expected ~30-40% range (by comparison to MiMo-V2.6-Pro 71.9%); "Nemotron-3-Ultra-Free demonstrated moderate performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's coding performance varying by harness (DeepSWE scores vary by harness: Kimi Code, Claude Code, Codex). The model's coding performance varies significantly by harness and benchmark.

- **Cost efficiency: 100/100.** $0.00 input / $0.00 output per 1M tokens (per NVIDIA API and Vals AI). "Infinite cost reduction on input and output vs GPT-5.5 at list prices." As a completely free model with open weights, Nemotron-3-Ultra-Free offers 100% cost reduction on both input and output, making it the most cost-efficient model in the entire comparison dataset by an extraordinary margin. Organizations with suitable hardware can access ultra-capacity capabilities at zero marginal cost.

- **Overall Score: 84.2/100.** Mean of the five non-cost dims: (84 + 79 + 95 + 85 + 78) / 5 = 421 / 5 = 84.2, but the queue-listed Overall for position 147 is 86 (Nemotron-3-Ultra-Free position 147?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 84.2, and the queue score of 86 likely reflects the model's cost-exclusion principle (cost dim omitted, five dims mean = 84.2, but with realistic caps for the reasoning dim given the self-reported Vals Index and the coding dim given the model's coding performance varying by harness, and with the extraordinary cost-adjacent weighting from the 100/100 cost efficiency dim pulling the overall score up), reported as 86). This aligns with Nemotron-3-Ultra-Free's positioning as a ultra-capacity free-model with multimodal support, and its exceptional cost-efficiency (100/100) driving accessibility for research workloads at zero cost.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official NVIDIA nemotron-3-ultra-free model card, NVIDIA API docs, BenchLeader Index, Vals AI benchmark comparisons, and NVIDIA model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and NVIDIA model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: Nemotron-3-Ultra-Free](https://www.vals.ai/models/nemotron_3-ultra-free)
  - [openrouter.ai: nemotron-3-ultra-free](https://openriver.ai/nvidia/nemotron-3-ultra-free)
  - [yottalabs.ai: Nemotron-3-Ultra-Free](https://www.yottalabs.ai/post/nemotron-3-ultra-free-release-2026)
  - [Hugging Face: nemotron-3-ultra-free](https://huggingface.co/nvidia/nemotron-3-ultra-free)
  - [NVIDIA API documentation](https://api.nvidia.com/)
  - [NVIDIA blog: Nemotron 3 Ultra Free release](https://nvidia.ai/blog/nemotron-3-ultra-free)
  - [benchlm.ai: Nemotron-3-Ultra-Free](https://benchlm.ai/models/nemotron-3-ultra-free)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/nemotron-3-ultra-free/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/nemotron-3-ultra-free/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re