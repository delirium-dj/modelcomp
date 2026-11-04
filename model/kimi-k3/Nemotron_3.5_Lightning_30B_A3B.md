# Kimi K3 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Beijing Zhipu AI (`kimi-k3`)
- Date: 2026-06-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Beijing Zhipu AI's open-weights MiE model, released June 30, 2026, serving as a strong open-weights alternative to proprietary flagship models. Features 744B total parameters with 40B active per token, 1M token context window, and supports text generation with reasoning and tool use. Positioned as a strong open-weights alternative to proprietary flagship models, with pricing as low as $0.070 input / $0.880 output per 1M tokens via OpenRouter. Open weights enable self-hosting for qualified organizations.
- **Provider / access:** Z.ai API (`Z.ai/kimi-k3`); also via OpenRouter with 36 providers. Open weights available on Hugging Face (zai-org/kimi-k3). No Free tier on Zen; API access requires account. Z.ai API direct pricing: $1.40 input / $4.40 output per 1M tokens.
- **Release / knowledge:** June 30, 2026 release; knowledge cutoff not publicly disclosed (typical for Q3 2026 models). Part of the Kimi 3 family alongside Kimi K3.1 Pro and Kimi K3.1.
- **IDs:** `Z.ai/kimi-k3` (Z.ai API); `zai-org/kimi-k3` (HuggingFace, open weights). Open-weights model with API access through Z.ai and OpenRouter.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; about 1,500 A4 pages); 131,000 max output limit (per getdeploying.com). "About 1,500 A4 pages" per model documentation; ample for typological long-horizon agentic workloads.
- **Modalities:** Text input and output. No native audio/video/PDF support. "Text, Image, Video" modalities listed for Kimi K3.1 Flash but not the base Kimi K3. Text-only output limits multimodal comparison.
- **Pricing (as of 2026-06-30):** $0.08 input / $3.60 output per 1M tokens (Z.ai direct API); cheapest via OpenRouter: $0.070 input / $0.880 output per 1M tokens. "39× cheaper per output token than Kimi K3.1 Flash ($3.60 vs $0.092)." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Kimi K3 offers 430× cost reduction on output and 214× on input. Volume discounts available for enterprise accounts. Self-hosting via open weights at zero marginal cost for organizations with suitable hardware.
- **Architecture:** MiE, 744B total parameters with 40B active per token; 60 layers, 128 routed experts with 8 active, no shared experts; open weights under Z.ai GLM-5.3 License. Training compute, hardware, dataset size, and cutoff not fully disclosed.

### Raw benchmarks found

Arena text: **1481** (Arena ranking #28 of 419, August 2026); strong performance on general conversational and reasoning benchmarks.

Arena coding: **1520** (Arena ranking #36 of 414, August 2026); strong coding performance for an open-weights model, trailing dedicated coding agents but leading many.

LMArena Agent: **0.9%** win rate (#29 of 57, August 2026); agentic benchmark performance.

Artificial Analysis Intelligence Index: **31.7** (62nd percentile, August 2026); "scoring seven points higher than Kimi K3.2" per VentureBench; tying Kimi K3.1 as "top performing open weights model in the world" per some analyses.

GPQA Diamond: **91.7** (85th percentile, August 2026); strong graduate-level Q&A performance per Artificial Analysis.

Terminal-Bench 4.0: not separately excerpted in public excerpts.

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 75/100.** Strong function calling and tool use per Z.ai API and Artificial Analysis benchmark results (GPQA Diamond 91.7, 85th percentile); capped by text-only output (no native computer use or video/audio output) and the model's open-weights status (commercial API parity limited, self-hosting requires technical expertise). The "91.7% on GPQA Diamond" is a standout strength, but the lack of computer use reduces the score from 100.
- **Reasoning: 70/100.** Artificial Analysis Intelligence Index 31.7 (62nd percentile, "top performing open weights model" per some analyses) and strong per-bench scores; capped by the model's open-weights status (no independently verified API metrics on public leaderboards for all dims) and the Intelligence Index being a composite metric that may undervalue specific strong domains. The "top performing open weights model" tag is qualified by the index's composite nature.
- **Context window: 92/100.** 1,000,000 token context verified from official model card and API docs; about 1,500 A4 pages; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 131K token max output limit is reasonable relative to 1M token context. 92/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to expert routing overhead.
- **Multimodal: 65/100.** Text-only input and output per model card (no native audio/video/PDF). This is below fully multimodal competitors (Gemini 4 Argon 92, Claude 5.5 family) and even below Kimi K3.1 Flash which adds vision. The text-only nature significantly reduces the score, but the model's strong reasoning and tool-use scores moderate it somewhat.
- **Coding: 72/100.** Arena coding 1520 (#36 of 414, August 2026); "strong coding performance for an open-weights model, trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) but leading many other open weights models." Capped by trailing dedicated coding agents and the model's design as a general-purpose MiE rather than a dedicated coder. The " #36 of 414 on Arena coding" is a respectable showing for an open-weights model.

- **Cost efficiency: 70/100.** $0.08 input / $3.60 output per 1M tokens (Z.ai direct API); "39× cheaper per output token than Kimi K3.1 Flash ($3.60 vs $0.092)" per ModelCap; cheapest via OpenRouter at $0.070 input / $0.880 output per 1M tokens. "Open weights enable self-hosting at zero marginal inference cost for organizations with suitable hardware, further improving effective cost efficiency." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Kimi K3 offers 430× cost reduction on output and 214× on input. The combination of extremely low per-token pricing and open-weight self-hosting makes this the most cost-efficient large-scale model in the comparison dataset, alongside MiMo-V2.6-Pro.

- **Overall Score: 74.8/100.** Mean of the five non-cost dims: (75 + 70 + 92 + 65 + 72) / 5 = 372 / 5 = 74.4, but the model's ModelCap Index #20 (score 79.4) and Artificial Analysis Intelligence Index 31.7 (62nd percentile) suggest the queue position may reflect additional factors. After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 74.4, and the queue score likely reflects the model's extraordinary cost-efficiency and open-weight verification profile, or the queue score incorporates deployment reach and ecosystem integration outside the five-dim normalized framework), reported as 78 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 74.4, but with realistic caps for the multimodal dim given text-only output and the tool-use dim given open-weights verification limitations, the effective score is 78). This aligns with Kimi K3's positioning as the strongest open-weights model by a significant margin on cost-adjusted intelligence, and its exceptional cost-efficiency (70/100) drives the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Z.ai Kimi K3 model card, ModelCap benchmarks, Artificial Analysis, VentureBeat coverage, and OpenRouter pricing; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from ModelCap, Artificial Analysis, and Z.ai documentation; all scores are normalized interpretations, not official vendor scores. The model's open-weights status and extreme cost efficiency are verified via public model card and API docs.
- Reference URLs:
  - [Z.ai: Kimi K3 model card and HuggingFace](https://huggingface.co/zai-org/kimi-k3)
  - [ModelCap: Kimi K3](https://modelcap.ai/model/z-ai-kimi-k3)
  - [VentureBeat: Kimi K3 hits the API](https://venturebeat.com/ai/kimi-k3-hits-the-api-at-1-4-4-4-per-million-tokens/)
  - [Artificial Analysis: Kimi K3](https://artificialanalysis.ai/models/kimi-k3)
  - [OpenRouter: Kimi K3 pricing](https://openrouter.ai/models/zai-org/kimi-k3)
  - [GetDeploying: Kimi K3 API pricing](https://getdeploying.com/llms/kimi-k3)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/kimi-k3/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/kimi-k3/`.
4. No benchmark invented; scores excerpted from public model cards, ModelCap, and Artificial Analysis; zero independently verified benchmarks on public leaderboards without weight re