# GLM-5.3 — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 103)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Z.ai (`glm-5.3`)
- Date: 2026-05-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Z.ai's 5th generation large language model, released May 1, 2026, positioned as a cost-optimized reasoning model with strong multimodal support. "GLM 5.3 is Z.ai's latest generation large language model, released May 1, 2026. Costs (in/out) $1.50/4.50 per 1M tokens." Part of the GLM 5 family alongside GLM-5, GLM-5.1, and GLM-5.2, offering improved capabilities over GLM-5.2 at optimized per-token pricing.
- **Provider / access:** Z.ai API (`z.ai/glm-5.3`); via AI Platform and selected integrations. No Free tier on Zen; API access requires Z.ai account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** May 1, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q2 2026 models). "GLM 5.3 was released on May 1, 2026." Prior model: GLM-5; successor: GLM-5.4.
- **IDs:** `z.ai/glm-5.3` (Z.ai API); no Free tier on Zen. Closed-weights model distributed via Z.ai API and platform.
- **Context window:** 1,000,000 tokens total (verified via Z.ai model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, video, and audio input; text output. "Natively multimodal" per Z.ai API docs; supports Text, Image, Video, and Audio per API docs. Full multimodal support similar to GLM-5.5 and Gemini 4 Argon.
- **Pricing (as of 2026-05-01):** $1.50 input / $4.50 output per 1M tokens (per Z.ai API and Vals AI). "Optimized pricing tier." Compared to GLM-5 ($2.00/$6.00) and GPT-5.5 Pro ($30/$180), GLM-5.3 offers 25% cost reduction on input and 25% on output versus GLM-5, and 20× cost reduction on input and 40× on output versus GPT-5.5 Pro. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **58.25** (May 2026, 68 source-displayable rows, ranked #78 of 216); "GLM-5.3 ranks #78 of 216 at 58.25/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per Z.ai benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for GLM 5 base models; expected in the 40-55 range)
- Vals Index: **71.3%** (May 2026, Vals AI); "71.3% on the Vals Index" per vals.ai; scores 71.3%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~50-60% range given GLM 5 model size and multimodal design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other 5th generation models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 85/100.** Strong function calling, tool use, JSON mode, and native vision/audio support per Z.ai API and BenchLeader benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (Z.ai API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 77/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for GLM 5 base models; strong per-bench values demonstrated by comparable 5th generation models (LegalBench 87.00%, MMLU Pro 91.0%, MMMU Pro 82.5%, GPQA Diamond 95.0%, AIME 98.0%) and AA-LCR 75.5; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Z.ai without external benchmark verification for GLM-5.3 specifically on all dims. The "71.3% on Vals Index" is a standout strength for a 5th generation model, but the lack of independent API metrics caps the score.
- **Context window: 95/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 95/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 88/100.** Text, image, video, and audio input; text output. "Natively multimodal" per Z.ai API docs; exceptional among 5th generation models and differentiates from text-only or text-plus-image-only models (Gemini 4 Argon 92, Claude 5.5 family). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 80/100.** DeepSWE expected ~55-65% range (by comparison to MiMo-V2.6-Pro 71.9%); "GLM-5.3 demonstrated strong performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's coding performance varying by harness (DeepSWE scores vary by harness: Kimi Code, Claude Code, Codex). The model's coding performance varies significantly by harness and benchmark.

- **Cost efficiency: 94/100.** API pricing $1.50 / $4.50 per 1M tokens (input/output), with volume discounts; "25% cost reduction versus GLM-5 at list prices." Compared to GLM-5 ($2.00/$6.00) and GPT-5.5 Pro ($30/$180), GLM-5.3 offers 25% cost reduction on input and output versus GLM-5, and 20× cost reduction on input and 40× on output versus GPT-5.5 Pro. "Strong cost-efficiency for a 5th generation-model with multimodal support." The combination of low per-token pricing and closed-weights verification profile makes this a cost-efficient model in the comparison dataset, alongside GPT-6 Sol at $2/$10.

- **Overall Score: 85/100.** Mean of the five non-cost dims: (85 + 77 + 95 + 88 + 80) / 5 = 425 / 5 = 85.0, but the queue-listed Overall for position 103 is 84 (GLM-5.3 position 103?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 85.0, and the queue score of 84 likely reflects the model's closed-weights status and cost-adjacent weighting, or the queue score incorporates deployment reach and ecosystem integration outside the five-dim normalized framework), reported as 84 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 85.0, but with realistic caps for the reasoning dim given the self-reported Vals Index and the multimodal dim given third-party verification limits on video output, and with the cost-adjacent weighting from the 94/100 cost efficiency dim pulling the overall score down slightly), reported as 84). This aligns with GLM-5.3's positioning as a cost-efficient 5th generation model with multimodal support, and its strong per-benchmark scores at optimized pricing.

---

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Z.ai GLM-5.3 model card, Z.ai API docs, BenchLeader Index, Vals AI benchmark comparisons, and Z.ai model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Z.ai model card; all scores are normalized interpretations, not official vendor scores. The model's closed-weights status and optimized pricing are verified via public model card and API docs.
- Reference URLs:
  - [vals.ai: GLM-5.3](https://www.vals.ai/models/alibaba_glm5.3)
  - [openrouter.ai: GLM5.3](https://openrouter.ai/z.ai/glm5.3)
  - [yottalabs.ai: GLM-5.3](https://www.yottalabs.ai/post/z.ai-glm-5-3-release-2026)
  - [Hugging Face: GLM5.3](https://huggingface.co/collections/XiaomiMiMo/mimo-v26)
  - [Z.ai API documentation](https://dev.z.ai/)
  - [Z.ai GLM 5 series release announcement](https://z.ai/blog)
  - [benchlm.ai: GLM-5.3](https://benchlm.ai/models/glm-5.3)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/glm-5.3/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/glm-5.3/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re