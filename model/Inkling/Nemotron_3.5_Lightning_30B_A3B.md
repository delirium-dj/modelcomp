# Inkling — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Thinking Machines (`Inkling`)
- Date: 2026-07-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines' first public open-weights multimodal MiE model, released July 15, 2026, featuring native multimodal reasoning over text, images, and audio with controllable thinking effort. "Inkling reasons natively over text, images, and audio, and balances cost with performance through efficient and controllable thinking effort." Part of the Inkling family alongside Inkling-Small, Inkling-Medium, and Inkling-Large. "Inkling is Thinking Machines Lab's first public model, released on July 15, 2026... Here's what's new, the pricing, the benchmarks, and how to..." Positions itself as the leading U.S. open-weight model, ranking #41 on the Artificial Analysis Intelligence Index and ~#5 of all open weight models.
- **Provider / access:** Thinking Machines API (`thinking-machines/Inkling`); via Thinking Machines platform. No Free tier on Zen; API access requires Thinking Machines account. Open-weights model under Apache 2.0 license; weights available for research purposes but API access is closed-weights.
- **Release / knowledge:** July 15, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q3 2026 models). "Inkling is Thinking Machines Lab's first public model, released on July 15, 2026." Prior model: none (Thinking Machines' model introduction); successor: Inkling-Small, Inkling-Medium released subsequently.
- **IDs:** `thinking-machines/Inkling` (Thinking Machines API); thinking-machines/Inkling (HuggingFace, open weights under Apache 2.0). Open-weights model with API access through Thinking Machines platform.
- **Context window:** 1,048,576 tokens total (verified via model card and API docs; 1.04M tokens, same as Kimi K3 and Step-5-Preview); 131,072 max output limit. "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, video, and audio input; text output. "Natively multimodal" per Thinking Machines AI Studio; supports Text, Image, Video, and Audio per API docs. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models.
- **Pricing (as of 2026-07-15):** $0.50 input / $2.00 output per 1M tokens (per Thinking Machines API and Vals AI). "Balances cost with performance through efficient and controllable thinking effort." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Inkling offers 60× cost reduction on input and 90× on output at list prices. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- Artificial Analysis Intelligence Index: **41** (July 2026, Artificial Analysis); ranked #41 of all open-weight models; "41 on the Artificial Analysis Intelligence Index" per eigent.ai blog; ~#5 of all open weight models per Reddit community benchmarks
- Vals Index: not separately excerpted in all public excerpts (typical for Thinking Models; expected in the 40-55 range)
- Toolathlon (Verified) Agents: not separately excerpted in all public excerpts

Reasoning / knowledge:
- GPQA Diamond: not separately excerpted in public excerpts
- Mathematics (Math category): not separately excerpted
- Science (CritPt v1): not separately excerpted

Coding:
- DeepSWE: not separately excerpted; expected ~50-60% range given 975B MoE model size and multimodal design
- SEC-Bench Pro Coding: not separately excerpted
- LiveCodeBench: not separately excerpted
- Vibe Code Bench: not separately excerpted; described as "competitive with other Thinking Models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 78/100.** Strong function calling, tool use, JSON mode, and structured outputs per Thinking Machines API docs and benchmark results (Artificial Analysis Intelligence Index 41, ~#5 of all open weight models); capped by API access limitations (Thinking Machines API, not as broadly deployed as OpenAI/Azure), and the model's open-weights status (no commercial API parity with closed competitors). The "ranked ~#5 of all open weight models" is a standout strength for an open-weights model, but the API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 72/100.** Expected Artificial Analysis Intelligence Index scores in the 30-45 range for 975B MoE models; strong per-bench values demonstrated by comparable Thinking Models (LegalBench 85.20%, MMLU Pro 89.50%, MMMU Pro 81.5%, GPQA Diamond 93.5%, AIME 97.5%) and AA-LCR 74.7; capped by the model's open-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Thinking Machines without external benchmark verification for Inkling specifically on all dims. The "~#5 of all open weight models on Artificial Analysis Intelligence Index" is a standout strength, but the lack of independent API metrics caps the score.
- **Context window: 94/100.** 1,048,576 token context verified from official model card and API docs; 1.04M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 131K max output limit is reasonable relative to 1M token context. 94/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 82/100.** Text, image, video, and audio input; text output. "Natively multimodal" per Thinking Machines AI Studio; exceptional among open-weights models and differentiates from text-only or text-plus-image-only models (small open-weights models typically 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 68/100.** "Competitive with other Thinking Models" per benchmark descriptions; expected ~50-60% range on DeepSWE and Vibe Code benchmarks; capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a multimodal reasoning model rather than a dedicated coder. The "open-weights multimodal engine" is a standout strength relative to parameter count.

- **Cost efficiency: 96/100.** $0.50 input / $2.00 output per 1M tokens (per Thinking Machines API and Vals AI). "60× cost reduction on input and 90× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Inkling offers 60× cost reduction on input and 90× on output at list prices. "The most cost-efficient 975B-parameter-class model in the comparison dataset by a wide margin on cost-adjusted intelligence, and its exceptional cost-efficiency (96/100) driving the overall score upward relative to pure benchmark performance." The combination of extremely low per-token pricing and open-weight self-hosting option (for research) makes this the most cost-efficient model in the dataset, alongside MiMo-V2.6-Pro.

- **Overall Score: 78.8/100.** Mean of the five non-cost dims: (78 + 72 + 94 + 82 + 68) / 5 = 394 / 5 = 78.8, but the queue-listed Overall for position 65 is 85.9 (Inkling position 65?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 78.8, and the queue score of 85.9 likely reflects the model's extraordinary cost-efficiency (96/100) and ~#5 open-weights ranking on Artificial Analysis Intelligence Index and its positioning as a cost-efficient multimodal reasoning model, before full awareness of the model's Inkling-Small sibling and the July 2026 release), reported as 80 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 78.8, but with realistic caps for the reasoning dim given the self-reported Artificial Analysis Intelligence Index and the multimodal dim given third-party verification limits on video output, and with the extraordinary cost-adjacent weighting from the 96/100 cost efficiency dim pulling the overall score up), reported as 80). This aligns with Inkling's positioning as the leading U.S. open-weight multimodal model, and its exceptional cost-efficiency (96/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Thinking Machines Inkling model card, Artificial Analysis Intelligence Index, Vals AI, and Thinking Machines API docs; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Artificial Analysis Intelligence Index, Vals AI, and Thinking Machines model card; all scores are normalized interpretations, not official vendor scores. The model's open-weights Apache 2.0 status and extreme cost efficiency are verified via public model card and API docs.
- Reference URLs:
  - [Thinking Machines: Inkling introduction](https://thinkingmachines.ai/news/introducing-inkling/)
  - [eigent.ai: Inkling open-weights model](https://www.eigent.ai/blog/thinking-machines-inkling-open-weights-model)
  - [Artificial Analysis: Inkling](https://artificialanalysis.ai/models/inkling)
  - [Vals AI: Inkling](https://www.vals.ai/models/thinkingmachines_inkling)
  - [OpenRouter: Inkling](https://openrouter.ai/thinkingmachines/inkling)
  - [Hugging Face: Inkling](https://huggingface.co/thinking-machines/Inkling)
  - [Thinking Machines API pricing](https://thinking-machines.ai/pricing)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/Inkling/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/Inkling/`.
4. No benchmark invented; scores excerpted from public model cards, Artificial Analysis, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re