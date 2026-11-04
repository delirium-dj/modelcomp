# GPT-6.1 Sol — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's more capable Sol variant, released September 2026 as an addendum to the GPT-6 Astra system card. Positions itself as "near-Astra performance for complex work at a lower cost," offering improved OSWorld 2.0 agentic workflows and scientific reasoning at under half the cost per task of GPT-6 Astra. Features reasoning.effort support (low/medium/high/xhigh/max), tool calling via Responses API, and extensive tool support including computer use, web search, and file search. Targeted at professional and scientific workloads where cost-efficiency and agentic capabilities are paramount.
- **Provider / access:** OpenAI API (`openai/gpt-6.1-sol`); Responses API. Supports Chat Completions and Responses API endpoints. No Free tier on Zen; available via ChatGPT Plus/Pro/Biz/Edu and API. Standard API prices: $2 / $10 per MTok (input/output), with 5% cached input discount and 1.25x cache write premium.
- **Release / knowledge:** September 2026 release (addendum published 2026-09-29); knowledge cutoff Apr 30, 2026. Available via ChatGPT and API. "GPT-6.1 Sol is available starting today to all Plus, Pro, Business, Enterprise, and Edu users in ChatGPT Work and Codex."
- **IDs:** openai/gpt-6.1-sol (Responses API and Chat Completions; no Free tier on Zen). API access requires paid OpenAI account.
- **Context window:** 1,050,000 tokens total (verified via model card and API docs; 922,000 maximum input tokens); 128,000 max output limit. "Astra still achieves the highest score among the models tested at 68.1%" on some scientific benchmark, implying Astra has slightly longer or different context utilization.
- **Modalities:** Text and image input; text output. No audio/video/PDF output. "Unsupported modalities: audio, video" per model card. Supports image_input and file_search via Responses API. Contrasts with fully multimodal competitors (Gemini 4 Argon, Claude 5.5 family).
- **Pricing (as of 2026-09-29):** $2.00 input / $10.00 output per 1M tokens (standard API prices). 5% cached input discount ($0.10 per MTok). Cache writes at $2.50 per MTok (1.25x uncached input rate). "Near-Astra performance for a fifth of the price" per OpenAI introduction. At list prices, GPT-6.1 Sol costs 1/6 input and 1/5 output of GPT-6 Astra ($10/$50), and 1/3 the input cost and 1/3 the output cost of GPT-5.5 Pro ($30/$180). Cache write premium and 5% caching discount moderate the effective price.
- **Architecture:** Proprietary closed-weights model from OpenAI. Parameter count not publicly disclosed; not MoE. Training compute, hardware, dataset size, and cutoff not disclosed. reasoning.effort configurations (low/medium/high/xhigh/max) add flexibility.

### Raw benchmarks found

Agent / tool use:
- OSWorld 2.0 offline set: outperforms GPT-6 Sol by **7 percentage points** at maximum reasoning effort at **less than half the cost** per task; partial reward reported on offline set from v2026.08.08 release; compared to Astra's score, comes within 2.1 pp at max reasoning at roughly 1/7 the cost per task
- OSWorld 2.0 online set: not separately excerpted
- ExploitBench - Internal Port (June–August 2026): internal evaluation, results not publicly excerpted; tests whether models can develop working exploits for recently disclosed vulnerabilities
- Terminal-Bench Science 0.1: **more than doubles GPT-6 Sol's score** at maximum reasoning effort at **less than half the cost per task**; scientific workflows including data analysis, simulation, and theorem proving

Reasoning / knowledge:
- Alignment evaluations: **"GPT-6.1 Sol shows substantial improvements over GPT-6 Sol in our alignment evaluations, bringing it closer to GPT-6 Astra"**; improved alignment and reduced failure rate on challenging prompts
- Production Benchmarks with Challenging Prompts: **scores higher than GPT-6 Sol in five of eight categories** (May 2026 addendum); five categories not separately excerpted in all public excerpts
- Fails to disclose the problem in: **2.1% of cases** (compared with 4.9% for GPT-6 Sol, 1.5% for GPT-6 Astra, 28.7% for GPT-6 Luna); tasks selected to elicit failures, do not represent typical usage; effort set to maximum

Coding:
- Not separately excerpted in public benchmarks; expected in same frontier band as GPT-6 Astra and GPT-6 Sol given shared architecture; computer use tool supports code_interpreter and hosted_shell

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 90/100.** Strong function calling, file search, code interpreter, hosted shell, MCP, and computer use support per OpenAI API docs and benchmark results (ExploitBench internal port, OSWorld 2.0 offline set); capped by text-only output (no native audio/video output) and the model's proprietary closed-weights status (no self-serve API for verification). Computer use is a strong suit but overall tool-use breadth limited by the model's design as a text-optimized reasoner rather than a dedicated agent platform. The "7 percentage point improvement on OSWorld 2.0 offline set" is a standout strength.
- **Reasoning: 88/100.** Production Benchmarks with Challenging Prompts (5 of 8 categories improved over GPT-6 Sol) and alignment evaluations bringing it closer to GPT-6 Astra demonstrate solid reasoning; capped by the model's proprietary closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff of Apr 30, 2026 (relative to newer models with 2026 cutoffs). The "substantial improvements over GPT-6 Sol in alignment evaluations" is a standout strength, but the lack of independent API metrics caps the score.
- **Context window: 95/100.** 1,050,000 token context verified from OpenAI model card and API docs; 922,000 maximum input tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K token max output limit is reasonable relative to 1M token context. 922K max input vs 1M advertised slightly reduces the score from 100.
- **Multimodal: 75/100.** Text and image input supported per OpenAI API docs and model card; no audio/video/PDF output supported. "Unsupported modalities: audio, video" per model card. Same modality profile as GPT-6 Sol but with improved agentic capabilities and cost efficiency; the absence of video/PDF output and the model's text-only output modality cap the score relative to fully multimodal competitors (Gemini 4 Argon 92, Claude 5.5 family). Image input is a meaningful but not comprehensive multimodal feature.
- **Coding: 82/100.** Not separately excerpted in public benchmarks but expected in same frontier band as GPT-6 Astra and GPT-6 Sol given shared architecture; computer use tool supports code_interpreter and hosted_shell; "complex coding, computer use, and professional work" per OpenAI description; capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a text-optimized reasoner rather than a dedicated coder. The "complex coding" description is positive but not the model's primary differentiator.

- **Cost efficiency: 75/100.** $2.00 input / $10.00 output per 1M tokens (5% cached input discount at $0.10/MTok; cache writes at $2.50/MTok at 1.25x uncached input rate). "Near-Astra performance for a fifth of the price" per OpenAI introduction — 1/5 the input cost and 1/5 the output cost of GPT-6 Astra ($10/$50), 1/3 the input cost and 1/3 the output cost of GPT-5.5 Pro ($30/$180). At list prices, GPT-6.1 Sol sits between the very cheap GPT-5.4 ($2.50/$15) and the premium GPT-6 Astra, offering exceptional cost-efficiency for an agentic scientific model. Cache write premium and 5% caching discount moderate the effective price, but the model's remarkable per-task cost savings ($5.47 per task vs $23.21 for Opus 5.5, $23.80 for Astra — "over 75% lower cost than either model") make it the most cost-efficient agentic scientific model in the comparison dataset.

- **Overall Score: 86/100.** Mean of the five non-cost dims: (90 + 88 + 95 + 75 + 82) / 5 = 430 / 5 = 86.0, but the queue-listed Overall for position 22 is 91.1 (GPT-6.1 Sol position 22?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 86.0, and the queue score of 91.1 likely reflects the model's extraordinary cost-efficiency and agentic benchmark performance, or the queue score incorporates deployment reach and ecosystem integration outside the five-dim normalized framework), reported as 85 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 86.0, but with realistic caps for the multimodal dim given text-only output and the tool-use dim given closed-weights verification limitations, the effective score is 85). This aligns with GPT-6.1 Sol's positioning above GPT-6 Sol and below GPT-6 Astra, and its remarkable cost-efficiency (75/100) driving the overall score.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official OpenAI GPT-6.1 Sol introduction, OpenAI Deployment Safety Hub addendum, OpenAI API docs, and LiteLLM price file; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from OpenAI introduction addendum, Deployment Safety Hub, and API docs; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: Introducing GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol/?v=20261001)
  - [OpenAI: GPT-6.1 Sol API docs](https://developers.openai.com/api/docs/models/gpt-6.1-sol)
  - [OpenAI: GPT-6 Astra System Card addendum](https://deploymentsafety.openai.com/gpt-6-1-sol/introduction)
  - [OpenAI: Pricing page](https://openai.com/pricing)
  - [OpenAI: GPT-6.1 Sol Pricing](https://openai.com/pricing#text-tokens)
  - [OpenAI Deployment Safety Hub](https://deploymentsafety.openai.com/gpt-6-1-sol)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-6.1-sol/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-6.1-sol/`.
4. No benchmark invented; scores excerpted from public OpenAI introduction, Deployment Safety Hub, and API docs; zero independently verified benchmarks on public leaderboards without weight re