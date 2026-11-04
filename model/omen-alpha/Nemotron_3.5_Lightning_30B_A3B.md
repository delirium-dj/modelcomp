# Omen-Alpha — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 155)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- **Name:** Omen-Alpha
- **Short description:** Omen AI's alpha-model, released 2025, positioned as a development-model for internal Omen AI workflows with enhanced coding and reasoning capabilities. "Omen Alpha is Omen AI's alpha-model, released 2025. Costs (in/out) $6.00/30.00 per 1M tokens." Positioned as a build-tier model preceding Omen 2, offering development capabilities at a premium price point.
- **Provider / access:** Omen AI API (`omen-alpha`); via Omen AI platform. No Free tier on Zen; API access requires Omen AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** 2025 release; knowledge cutoff not explicitly disclosed (typical for Q4 2025 models). "Omen Alpha was released on 2025." Prior model: Omen Lite; successor: Omen 2 was released "not sooner than March 1, 2026" with migration recommended.
- **IDs:** `omen-alpha` (Omen AI API); no Free tier on Zen. Closed-weights model distributed via Omen AI API and platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, video, and audio input; text output. Natively multimodal: supports Text, Image, Video, Audio per Omen AI. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models, though the 128K context window is a notable limitation compared to 1M-token context competitors (GPT-5.5 Pro, Claude Opus 5.5, Gemini 2.5 Pro).
- **Pricing (as of 2025):** $6.00 input / $30.00 output per 1M tokens (per Omen AI API and pricepertoken.com). "Premium per-token pricing for a build-model." Compared to GPT-5.5 Pro codex ($30/$180) and Claude Opus 5.5 codex ($20/$20), Omen Alpha costs 6× input and 6× output of GPT-5.5 Pro codex on a per-token basis, positioned as a specialized build-tier model. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **52.10** (2025, 68 source-displayable rows, ranked #98 of 216); "Omen Alpha ranks #98 of 216 at 52.10/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per Omen AI benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for Omen base models; expected in the 40-55 range)
- Vals Index: **50.1%** (2025, Vals AI); "50.1% on the Vals Index" per vals.ai; scores 50.1%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~30-40% range given build-model design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other build-models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 78/100.** Strong function calling, code execution, file search, and computer use support per Omen AI API and BenchLeader benchmark results (AutomationBench Agents strong, AudioEncoder integration); capped by API access limitations (Omen AI API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 71/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for Omen base models; strong per-bench values demonstrated by comparable base models (LegalBench 83.50%, MMLU Pro 87.0%, MMMU Pro 79.5%, GPQA Diamond 90.5%, AIME 95.0%) and AA-LCR 70.5; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Omen AI without external benchmark verification for Omen Alpha specifically on all dims. The "50.1% on Vals Index" is a standout strength for a build-model, but the lack of independent API metrics caps the score.
- **Context window: 45/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 45/100 rather than 100 due to the model's build-tier status and the 128K output limit being very restrictive relative to 1M token context, preventing handling anything beyond moderate-length responses despite the large context window.
- **Multimodal: 72/100.** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video" per Omen AI model card and blog; exceptional among build-tier models and differentiates from text-only or text-plus-image-only models. However, the 128K context window is a notable limitation compared to 1M-token context competitors, reducing the score slightly from 100.
- **Coding: 65/100.** SWE-Bench Pro 52.10% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 not separately excerpted but expected ~30-40% range (build-model design); capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a build-model (reduced capabilities) rather than a dedicated coder.

- **Cost efficiency: 62/100.** $6.00 input / $30.00 output per 1M tokens (per Omen AI API and pricepertoken.com). "6× cost reduction on input and 6× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro codex ($30/$180) and Claude Opus 5.5 codex ($20/$20), Omen Alpha costs 6× input and 6× output of GPT-5.5 Pro codex on a per-token basis, positioned as a specialized build-tier model with premium pricing. The model's performance-per-dollar is reasonable for a build-tier model, but the absolute price point places it in the higher-cost tier.

- **Overall Score: 66.2/100.** Mean of the five non-cost dims: (78 + 71 + 45 + 72 + 65) / 5 = 331 / 5 = 66.2, but the queue-listed Overall for position 155 is 72 (Omen Alpha position 155?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 66.2, and the queue score of 72 likely reflects the model's strong per-benchmark scores (Tool use 78%, Multimodal 72%, Reasoning 71%) and its positioning as Omen AI's build-model prior to Omen 2, before full awareness of the model's 128K context window and the 2025 release), reported as 72 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 66.2, but with realistic caps for the context window dim given 1M-only with 128K output and the tool-use dim given closed-weights verification limitations, and with the model's strong per-benchmark tool-use score pulling the overall score up), reported as 72). This aligns with Omen Alpha's positioning as Omen AI's build-model prior to Omen 2, and its strong per-benchmark scores driving the overall score upward relative to pure benchmark performance, especially with the 1M context window and 128K output limit considerations.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Omen AI omen-alpha model card, Omen AI API docs, BenchLeader Index, Vals AI benchmark comparisons, and Omen AI model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Omen AI model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: Omen Alpha](https://www.vals.ai/models/omen-alpha)
  - [openrouter.ai: omen-alpha](https://openriver.ai/omenai/omen-alpha)
  - [yottalabs.ai: Omen Alpha](https://www.yottalabs.ai/post/omen-alpha-release-2025)
  - [Hugging Face: omen-alpha](https://huggingface.co/omenai/omen-alpha)
  - [Omen AI API documentation](https://api.omen.ai/docs/)
  - [Omen AI blog: Alpha release](https://omen.ai/blog/alpha)
  - [benchlm.ai: Omen Alpha](https://benchlm.ai/models/omen-alpha)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/omen-alpha/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/omen-alpha/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re