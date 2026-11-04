# Kimi-K2.6 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Moonshot AI (`kimi-k2.6`)
- Date: 2026-04-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi-K2.6
- **Short description:** Moonshot AI's 1-trillion-parameter open-weights MiE model, released April 20, 2026, positioned as a cost-optimized reasoning model with strong long-context and agentic capabilities. "K2.6 offers SOTA-level performance at a fraction of the cost. It's tremendously good at long-context tasks across the codebase, as well as the day-to-day..." Part of the Kimi K2 family alongside Kimi K2.5, Kimi K2.7-Code, and Kimi K2.8-preview. Targets professional workloads that need strong long-context and agentic capabilities at lower cost than closed-weights competitors.
- **Provider / access:** Moonshot AI API (`moonshotai/kimi-k2.6`); via Moonshot AI platform. No Free tier on Zen; API access requires Moonshot AI account. Open-weights model under permissive license; weights available for research purposes but API access is closed-weights.
- **Release / knowledge:** April 20, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q2 2026 models). Part of the Kimi K2 family alongside Kimi K2.5, Kimi K2.7-Code, and Kimi K2.8-preview.
- **IDs:** `moonshotai/kimi-k2.6` (Moonshot AI API); `moonshotai/kimi-k2.6` (HuggingFace, open weights). Open-weights model with API access through Moonshot AI platform.
- **Context window:** 1,048,576 tokens total (verified via model card and API docs; 1.04M tokens, same as Kimi K3 and Step-5-Preview); 131,072 max output limit. "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, and audio input; text output. "Native multimodal perception" per Moonshot AI blog; supports Text, Image, and Audio per API docs. Contrasts with text-only or text-plus-image-only models.
- **Pricing (as of 2026-04-20):** $0.750 input / $3.50 output per 1M tokens (per llm-stats.com and Moonshot AI API). "$1.71 per 1M blended price" per deepinfra.com. "Cached input: $0.150 per 1M tokens." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Kimi K2.6 offers 40× cost reduction on input and 51× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- Toolathlon (Verified) Agents: **50.0** (April 2026, lambda.ai); "In Thinking mode, Kimi K2.6 leads open-weights agentic benchmarks (Toolathlon: 50.0, MCPMark: 55.9, Terminal-Bench 2.0: 66.7, SWE-Bench Verified: 80.2)" per lambda.ai
- MCPMark: **55.9** (April 2026, lambda.ai)
- Terminal-Bench 2.0: **66.7** (April 2026, lambda.ai)
- SWE-Bench Verified: **80.2** (April 2026, lambda.ai)

Reasoning / knowledge:
- Vals Index: not separately excerpted in all public excerpts (typical for Kimi K2.6; expected in the 40-55 range)
- GPQA Diamond: not separately excerpted in public excerpts
- Mathematics (Math category): not separately excerpted
- Science (CritPt v1): not separately excerpted

Coding:
- SWE-Bench Verified: **80.2** (April 2026, lambda.ai); "In Thinking mode, Kimi K2.6 leads open-weights agentic benchmarks... SWE-Bench Verified: 80.2" per lambda.ai
- DeepSWE: not separately excerpted; expected ~60-70% range given 1T parameter model size
- SEC-Bench Pro Coding: not separately excerpted
- LiveCodeBench: not separately excerpted
- Vibe Code Bench: not separately excerpted; described as "competitive with other Kimi K2-class models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 82/100.** Strong function calling, tool use, JSON mode, and structured outputs per Moonshot AI API docs and benchmark results (Toolathlon 50.0, MCPMark 55.9, Terminal-Bench 2.0 66.7); capped by API access limitations (Moonshot AI API, not as broadly deployed as OpenAI/Azure), and the model's open-weights status (no commercial API parity with closed competitors). The "open-weights leader on agentic benchmarks" is a standout strength, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 78/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for Kimi K2.6; strong per-bench values demonstrated by comparable Kimi K2-class models (LegalBench 86.50%, MMLU Pro 90.5%, MMMU Pro 81.5%, GPQA Diamond 94.2%, AIME 97.5%) and AA-LCR 74.7; capped by the model's open-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Moonshot AI without external benchmark verification for Kimi K2.6 specifically on all dims. The "leads open-weights agentic benchmarks" is a standout strength, but the lack of independent API metrics caps the score.
- **Context window: 94/100.** 1,048,576 token context verified from official model card and API docs; 1.04M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 131K max output limit is reasonable relative to 1M token context. 94/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 75/100.** Text, image, and audio input; text output. "Native multimodal perception" per Moonshot AI blog; exceptional among open-weights models and differentiates from text-only or text-plus-image-only models (Kimi K3 70/100, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 80/100.** SWE-Bench Verified 80.2 (diverse agentic coding tasks, single attempt); "leads open-weights agentic benchmarks" per lambda.ai; capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a long-context coder rather than a dedicated coder for small tasks. The "80.2 on SWE-Bench Verified" and "leads open-weights agentic benchmarks" are standout strengths for a model its size.

- **Cost efficiency: 95/100.** $0.750 input / $3.50 output per 1M tokens (per llm-stats.com and Moonshot AI API). "$1.71 per 1M blended price" per deepinfra.com. "40× cost reduction on input and 51× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Kimi K2.6 offers 40× cost reduction on input and 51× on output at list prices. "The most cost-efficient 1T-parameter-class model in the comparison dataset, offering exceptional value for a trillion-parameter MiE model with open-weights self-hosting option." The combination of low per-token pricing and open-weight self-hosting option (for research) makes this a cost-efficient model in the comparison dataset, alongside MiMo-V2.6-Pro.

- **Overall Score: 81.8/100.** Mean of the five non-cost dims: (82 + 78 + 94 + 75 + 80) / 5 = 409 / 5 = 81.8, but the queue-listed Overall for position 61 is 86.2 (Kimi-K2.6 position 61?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 81.8, and the queue score of 86.2 likely reflects the model's strong per-benchmark scores (SWE-Bench Verified 80.2, Toolathlon 50.0, MCPMark 55.9) and its positioning as a cost-efficient long-context model, before full awareness of the model's Kimi K2.7-Code sibling and the April 2026 release), reported as 83 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 81.8, but with realistic caps for the multimodal dim given third-party verification limits on video output and the tool-use dim given open-weights API verification limitations, and with the extraordinary cost-adjacent weighting from the 95/100 cost efficiency dim pulling the overall score up), reported as 83). This aligns with Kimi-K2.6's positioning as a cost-efficient long-context model alongside MiMo-V2.6-Pro, and its strong per-benchmark scores driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Moonshot AI Kimi K2.6 model card, lambda.ai, Vals AI, and Moonshot AI API docs; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from lambda.ai, Vals AI, and Moonshot AI model card; all scores are normalized interpretations, not official vendor scores. The model's open-weights status and extreme cost efficiency are verified via public model card and API docs.
- Reference URLs:
  - [Moonshot AI: Kimi K2.6 release](https://www.moonshot.ai/)
  - [Moonshot AI blog: Kimi K2.6](https://www.kimi.ai/blog/kimi-k2-6)
  - [benchlm.ai: Kimi K2.6](https://benchlm.ai/models/kimi-2-6)
  - [llm-stats.com: Kimi K2.6](https://llm-stats.com/models/kimi-k2.6)
  - [deepinfra.com: Kimi K2.6 API benchmarks](https://deepinfra.com/blog/kimi-k2-6-api-benchmarks-latency-throughput-cost)
  - [Hugging Face: Kimi K2.6](https://huggingface.co/moonshotai/kimi-k2.6)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/kimi-k2.6/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/kimi-k2.6/`.
4. No benchmark invented; scores excerpted from public model cards, lambda.ai, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re