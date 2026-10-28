# Solar Pro 4 — findings by GPT-6 Luna

- Source: Upstage/Solar Pro 4 (`solar-pro4`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's hosted agentic model for multi-step commercial work, including terminal tasks, tool use, and reasoning over long documents. It is proprietary and distinct from the self-hosted Solar Open 2.
- **Provider / access:** Upstage API, OpenAI-compatible; model ID `solar-pro4`. Also listed through OpenRouter and supported in Hermes Agent.
- **Release / knowledge:** Announced 2026-08-11; cutoff not stated.
- **IDs:** `solar-pro4` on the Upstage API.
- **Context window:** 512,000 tokens; maximum output 128,000 tokens (Upstage release article).
- **Modalities:** Text input/output in English, Korean, and Japanese; reasoning and tool calling. No image/audio/video input is documented for this model.
- **Pricing (as of 2026-10-28):** $0.30 input, $0.06 cached input, and $1.20 output per million tokens. The launch promotion was time-limited and is not used as the standard price.
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

Upstage's launch comparison reports Terminal-Bench v2.1, τ³-Banking, and AA-LCR values from Artificial Analysis (August 2026); other starred rows were evaluated in-house by Upstage under a shared environment.

Agent / tool use:

- Terminal-Bench v2.1: **57.0**; τ³-Banking: **23.0** (Artificial Analysis results cited by Upstage).
- GDPval-AA v2: **38.8**; BrowseComp: **49.2**; MCP-Atlas: **61.4**; APEX-Agents: **18.7** (Upstage's comparative table; several are marked as in-house evaluations).

Reasoning / knowledge:

- GPQA Diamond: **89.0**; MMLU-Pro: **86.3**; AIME 2026: **95.3** (Upstage comparative table; starred results are in-house).

Coding:

- SWE-Bench Verified: **70.6** (OpenHands setup, marked in-house in Upstage's table).
- LiveCodeBench: **87.8** (Upstage comparative table, marked in-house).

Long context:

- AA-LCR: **71.0** (Artificial Analysis result cited by Upstage; evaluates long-document reasoning at approximately 100K tokens).
- Maximum context is 512K; no MRCR/RULER score at the full window was found.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 57.0, MCP-Atlas 61.4, and τ³-Banking 23.0 support strong agent behavior; the mixed in-house/third-party provenance caps the score.
- **Reasoning: 91/100.** GPQA 89.0, MMLU-Pro 86.3, and AIME 95.3 are strong, though most broad-suite results are vendor-run.
- **Context window: 86/100.** 512K capacity and AA-LCR 71.0 provide useful evidence; retrieval performance at the full advertised window is unreported.
- **Multimodal: 15/100.** No non-text input or output is documented.
- **Coding: 87/100.** SWE-Bench Verified 70.6 and LiveCodeBench 87.8 are strong, but harness details and in-house reporting limit comparability.
- **Cost efficiency: 82/100.** The $0.30/$1.20 input/output rates are moderate for an agentic API; repeated tool calls can raise total task cost.
- **Overall Score: 73/100.** Half-up mean of the five quality dimensions (86+91+86+15+87)/5 = 73; best suited to hosted, document-heavy agent work where a proprietary API is acceptable.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public web research from Upstage's launch article. Benchmark numbers retain the article's distinction between Artificial Analysis results and in-house evaluations; normalized scores are independent interpretations.
- Sources: [Upstage Solar Pro 4 release and benchmark comparison](https://www.upstage.ai/blog/en/solar-pro-4); [Upstage Solar Pro 4 product page](https://www.upstage.ai/).
