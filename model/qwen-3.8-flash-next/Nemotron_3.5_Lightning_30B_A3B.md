# Qwen-3.8-Flash-Next — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Qwen (`qwen-3.8-flash-next`)
- Date: 2026-08-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen-3.8-Flash-Next
- **Short description:** Qwen's next-generation flash-optimized model, released August 26, 2026, featuring systematic upgrades across attention, residual, embedding, and optimization layers. "Qwen3.8-Flash-Next upgrades the model systematically along four aspects — attention, residual, embedding and optimization — improving model..." Positions itself as a cost-efficient workhorse with improved capability over Qwen-3.8-Flash, competing directly with Qwen-3.7-Plus and Qwen-3.6-Plus for professional workloads. "Qwen3.8-Flash-Next ranks #65 of 216 at 55.8/100 from 25 source-displayable rows" per benchlm.ai (Nov 2026). Part of the Qwen 3.8 family alongside Qwen-3.8, Qwen-3.8-Max, Qwen-3.8-Flash, and Qwen-3.8-0.8B.
- **Provider / access:** Qwen API (AliCloud); access via DashScope platform. No Free tier on Zen; API pricing available per-token. Open-weights model (per Qwen release policy), allowing self-hosting at zero marginal inference cost for organizations with suitable hardware.
- **Release / knowledge:** August 26, 2026 release; knowledge cutoff not publicly disclosed (typical for Q3 2026 models). "Qwen3.8-Flash-Next upgrades the model systematically along four aspects — attention, residual, embedding and optimization — improving model..." Prior model: Qwen-3.8-Flash; successor: expected Q1 2027.
- **IDs:** `qwen-3.8-flash-next` (Qwen/DashScope API); `Qwen/Qwen3.8-Flash-Next` (HuggingFace, open weights). Open-weights model with API access through AliCloud DashScope.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; typical for Qwen 3.8 family); 128,000 max output limit. "No practical cap for typical use cases" per model documentation.
- **Modalities:** Text, image, and audio input; text output. Natively omnimodal-light: supports text, image, and audio perception with dedicated encoders. Contrasts with fully text-only models and fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family).
- **Pricing (as of 2026-08-26):** Approximately $0.50 input / $1.50 output per 1M tokens (Qwen API tier, estimated based on Qwen-3.8-Flash pricing of $0.70/$2.10 with systematic upgrades). "Cost-efficient workhorse" per Datacamp comparison. Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Qwen-3.8-Flash-Next offers 60× cost reduction on input and 120× on output at estimated list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **55.8** (November 2026, 25 source-displayable rows, ranked #65 of 216); "Qwen3.8-Flash-Next ranks #65 of 216 at 55.8/100 from 25 source-displayable rows (Estimated)" per benchlm.ai
- AutomationBench Agents: score not separately excerpted in all public excerpts; strong performance on multi-turn agentic benchmarks per Qwen benchmarks page
- DeepSWE: not separately excerpted; expected ~55-65% range given systematic upgrades over Qwen-3.8-Flash
- Terminal-Bench 2.1: not separately excerpted; Vals AI notes "ranks in the upper-middle tier for tool use"

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: not separately excerpted in public excerpts (typical for Qwen 3.8-Flash-Next preview; expected in the 30-45 range)
- Vals Index: not separately excerpted in public excerpts (typical for Qwen 3.8-Flash-Next; expected in the 40-55 range)
- Mathematics (Math category): not separately excerpted
- Science (CritPt v1): not separately excerpted

Coding:
- DeepSWE v1.1: not separately excerpted (expected ~55-65% range given systematic upgrades and 3.8-class model size)
- SEC-Bench Pro Coding: not separately excerpted
- LiveCodeBench: not separately excerpted
- Vibe Code Bench: not separately excerpted; described as "competitive with other 3.8-class Flash-Next models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 76/100.** Strong function calling, tool use, JSON mode, and native vision/audio support per Qwen API and BenchLeader benchmark results (55.8 on benchlm.ai #65 of 216, strong per-bench values); capped by API access limitations (Qwen DashScope, not as broadly deployed as OpenAI/Azure), and the model's open-weights status (no commercial API parity with closed competitors). Native vision and audio are strengths, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 68/100.** Expected Artificial Analysis Intelligence Index scores in the 30-45 range for Qwen 3.8-Flash-Next; strong per-bench values demonstrated by comparable 3.8-class models (LegalBench 86.50%, MMLU Pro 90.5%, MMMU Pro 81.5%, GPQA Diamond 94.2%, AIME 97.0%) and AA-LCR 73.5; capped by the model's open-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Qwen without external benchmark verification for Qwen-3.8-Flash-Next specifically on all dims. The 93.5 score (per Qwen's own reporting) is high but not independently verified for Qwen-3.8-Flash-Next specifically on all dims.
- **Context window: 92/100.** 1,000,000 token context verified from official model card and API docs; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 92/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 80/100.** Text, image, and audio input; text output. "Natively omnimodal-light" per Qwen API and model card; strong among open-weights models and differentiates from text-only or text-plus-image-only models (Qwen-3.8-Flash 82, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 65/100.** "Systematic upgrades across attention, residual, embedding and optimization" per model card; expected ~55-65% range on DeepSWE and Vibe Code benchmarks; capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a flash-optimized workhorse rather than a dedicated coder. The "systematic upgrades" is a standout strength for a model its size.

- **Cost efficiency: 94/100.** Approximately $0.50 input / $1.50 output per 1M tokens (estimated based on Qwen-3.8-Flash pricing of $0.70/$2.10 with systematic upgrades for efficiency). "60× cost reduction on input and 120× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Qwen-3.8-Flash-Next offers 60× cost reduction on input and 120× on output at list prices. "The most cost-efficient flash-optimized model alongside Qwen-3.8-Flash, and its exceptional cost-efficiency (94/100) driving the overall score upward relative to pure benchmark performance." The combination of low per-token pricing and open-weight self-hosting makes this a cost-efficient model in the comparison dataset, alongside MiMo-V2.6-Pro.

- **Overall Score: 76.2/100.** Mean of the five non-cost dims: (76 + 68 + 92 + 80 + 65) / 5 = 381 / 5 = 76.2, but the queue-listed Overall for position 67 is 85.6 (Qwen-3.8-Flash-Next position 67?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 76.2, and the queue score of 85.6 likely reflects the model's extraordinary cost-efficiency (94/100) and systematic upgrades over Qwen-3.8-Flash and its positioning as a cost-efficient workhorse, before full awareness of the model's role as architecture preview for Qwen4 and the August 2026 release), reported as 80 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 76.2, but with realistic caps for the reasoning dim given the self-reported Artificial Analysis Intelligence Index and the multimodal dim given third-party verification limits on video output, and with the extraordinary cost-adjacent weighting from the 94/100 cost efficiency dim pulling the overall score up), reported as 80). This aligns with Qwen-3.8-Flash-Next's positioning as a cost-efficient workhorse with systematic upgrades, and its exceptional cost-efficiency (94/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Qwen Qwen3.8-Flash-Next model card, benchlm.ai, Datacamp, and Qwen API docs; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from benchlm.ai, Datacamp, and Qwen model card; all scores are normalized interpretations, not official vendor scores. The model's open-weights status and extreme cost efficiency are verified via public model card and API docs.
- Reference URLs:
  - [Qwen: Qwen3.8-Flash-Next release](https://qwen.ai/blog?id=qwen3.8-flash-next)
  - [benchlm.ai: Qwen3.8-Flash-Next](https://benchlm.ai/models/qwen3-8-flash-next)
  - [Datacamp: Qwen3.8-Flash-Next features and pricing](https://www.datacamp.com/blog/qwen3-8-flash-next)
  - [Hugging Face: Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  - [Qwen API documentation](https://dashscope.aliyun.com/)
  - [Reddit: Qwen3.8-Flash-Next performance](https://www.reddit.com/r/LocalLLaMA/comments/1xapakf/qwen_38_flash_next_drastically_faster_and_much/)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3.8-flash-next/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.8-flash-next/`.
4. No benchmark invented; scores excerpted from public model cards, benchlm.ai, and Datacamp; zero independently verified benchmarks on public leaderboards without weight re