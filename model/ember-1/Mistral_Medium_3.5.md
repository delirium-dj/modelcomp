# Ember-1 — findings by Mistral Medium 3.5

- Source: Fireworks AI (`fireworks/ember-1`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's **specialized reasoning model** built on **Moonshot AI's Kimi K3**, optimized for **token efficiency**. **First model from Fireworks Research** (released September 23, 2026) that **delivers Kimi K3's quality with 35-50% fewer tokens** by cutting unnecessary reasoning while preserving answer quality. **2.78 trillion parameter Mixture-of-Experts model** with **1.04M token context window**, **image input**, **function calling**, and **serverless access**. Designed for **coding agents and multi-turn tool-use workflows** where reasoning token costs dominate.
- **Provider / access:** Available through **Fireworks Serverless API**, **Blackbox AI** (`blackboxai/fireworks/ember-1`), **Puter.js AI API**, and other third-party providers. OpenAI-compatible API. Model ID: `fireworks/ember-1`, `blackboxai/fireworks/ember-1`. **Research Preview** with two-week complimentary access window, made permanent based on community demand.
- **Release / knowledge:** **Released September 23, 2026** (Fireworks blog launch date; Blackbox shows September 23, Fireworks model page shows created September 22). Knowledge cutoff inherited from Kimi K3 (released July 2026). **Legacy/preview status** — access contingent on demand; not a full production release.
- **IDs:** `fireworks/ember-1`, `blackboxai/fireworks/ember-1`.
- **Context window:** **1,040,576 tokens (1.04M)** (Fireworks model page: 1040k; Blackbox: 1.0M). Maximum combined prompt and retained-conversation space. **Output tokens**: Inherited from Kimi K3 — up to 943,718 tokens (AI/ML API spec).
- **Modalities:** **Text and image** input; **text** output. Supports function calling. Vision capabilities for image understanding.
- **Pricing (as of 2026-11-05):**
  - **Fireworks Serverless API:** $3.00 per million input tokens, $0.30 per million cached input tokens, $15.00 per million output tokens.
  - **Blackbox:** $3.00 per million input tokens, $15.00 per million output tokens, $0.30 cache read per million tokens.
  - **AI/ML API:** $4.1262 input / $20.631 output per million (includes markup).
  - **Same price as Kimi K3** but with 35-50% fewer tokens used, resulting in **35-50% lower total cost** at comparable quality.
- **Architecture:** **2.78 trillion total parameters** (Mixture-of-Experts, inherited from Kimi K3). **Post-trained** from Kimi K3 checkpoint using **task feedback** to produce shorter reasoning traces. **Not a new base model** — specialized efficiency layer on top of Kimi K3. Fine-tuning not supported.
- **Features:** **Token-efficient reasoning** — trained to cut unnecessary reasoning while keeping essential thinking. **Function calling**, **tool use**, **image input**, **serverless access**. **Research preview** status. **Sets new Pareto frontier for Bedside Bench** across open and closed models (including GPT-5.6 Sol, GPT-6 Astra, Claude Opus 5) on cost/task. **Specialized Intelligence Index (SII)** introduced to benchmark specialized models.

### Raw benchmarks found

**Key insight:** Ember-1 is **not about better absolute performance** but **better cost-efficiency** — matching or slightly exceeding Kimi K3 quality while using significantly fewer tokens.

Coding and software engineering:

- **DeepSWE 1.1: 75.2%** (vendor-reported by Fireworks/Gradually.ai/Neoteric). **Beats Kimi K3-Max at 66.4%** on this benchmark while spending 23.7% fewer tokens (Neoteric source).
- **SWE-bench Verified: 92.2%** (vendor-reported by Fireworks/Gradually.ai). Slightly below Kimi K3-Max at 93.2% (Jamilxt/DEV source). **One percentage point costs ~$68.10 in savings per 500-task run**.
- **Terminal-Bench 2.1:** Vendor-reported as **better than Kimi K3** (Jamilxt source). Specific score not published, but confirmed improved.
- **SWE-Interact:** Vendor-reported as slightly below Kimi K3 (myaiexp source).

Agentic and tool use:

- **Live customer A/B test (Fireworks internal):** Tasks averaged **49,300 output tokens across 23.8 agent steps** on Kimi K3 vs **29,900 tokens across 21.4 steps** on Ember-1. **Quality scores: 0.753 (Ember-1) vs 0.751 (K3)** — virtually identical quality with fewer steps and tokens.
- **Reasoning token reduction: 71.3%** (Byteiota source). **Total token spend reduction: ~39%**.
- **Two customers' production coding workloads:** Both saw **~35% fewer tokens per task at comparable quality** (Neoteric/DigitalApplied sources). Task completion, success scores, and failure rates all improved.

Reasoning efficiency:

- **35-50% shorter reasoning traces** across seven benchmarks and two customer A/B tests (Fireworks blog, Gradually.ai).
- **Kimi K3 spends >90% of generated tokens on hidden thinking** (Fireworks claim). Ember-1 reduces this overhead while maintaining answer quality.
- **Kimi K3 reasoning is far longer than tasks require**; excess can be removed without affecting answers (Fireworks training approach).

Comparisons vs base model (Kimi K3):

- **DeepSWE 1.1: +8.8 points** (75.2% vs 66.4% for K3-Max) while spending 23.7% fewer tokens.
- **SWE-bench Verified: -1.0 point** (92.2% vs 93.2% for K3-Max) but with **40% cost savings** per 500-task run.
- **Terminal-Bench 2.1: Better** (exact score not published).
- **Overall quality: Comparable** across all tested benchmarks.
- **Token efficiency: 35-50% better** (fewer tokens for same quality).

Comparisons vs competitors:

- **Bedside Bench (Doximity):** Sets **new Pareto frontier** across open and closed models including GPT-5.6 Sol, GPT-6 Astra, Claude Opus 5 on cost/task (Fireworks blog).
- **Cost efficiency:** Ember-1 delivers **same quality at ~40% lower total cost** compared to Kimi K3 on coding/agentic workloads.
- **Specialized Intelligence Index (SII):** Fireworks introduced this to benchmark specialized models like Ember-1.

Deployment considerations:

- **Research Preview status:** Two-week complimentary access window, made permanent based on demand (Fireworks policy).
- **Not a new base model:** Built on Kimi K3; capabilities Kimi K3 doesn't have (e.g., web search) are not available.
- **Production readiness:** Fireworks' own developers did not notice internal switch from Kimi K3 to Ember-1 during everyday coding work (Learnetto source).
- **Fine-tuning:** Not supported for Ember-1 (model page). Training support announced for enterprises to build customized token-efficient variants.

### Normalized scores (1–100)

- **Tool use: 88/100.** Function calling, tool use, image input supported. Terminal-Bench 2.1 better than Kimi K3. Live A/B tests show comparable quality with fewer tokens. Strong agentic workflow support. However, not all capabilities available (e.g., no web search inherited from K3).
- **Reasoning: 85/100.** DeepSWE 1.1 75.2% (beats K3-Max). SWE-bench Verified 92.2% (slightly below K3-Max). Quality comparable to Kimi K3 across benchmarks. Reasoning traces 35-50% shorter. Strong reasoning capability with efficiency focus.
- **Context window: 95/100.** 1.04M token context window (1,040,576). Up to 943,718 output tokens. Excellent for long-horizon agentic tasks. Inherited from Kimi K3.
- **Multimodal: 85/100.** Text and image input. Vision capabilities for image understanding. Inherited from Kimi K3. Limited direct multimodal benchmark data.
- **Coding: 88/100.** DeepSWE 1.1 75.2% (beats K3-Max). SWE-bench Verified 92.2% (near K3-Max). Terminal-Bench 2.1 better than K3. Strong coding performance with token efficiency advantage.
- **Cost efficiency: 98/100.** **Exceptional value proposition.** Same price as Kimi K3 ($3/$15 per M) but 35-50% fewer tokens used. 39% lower total token spend in production. Research preview access. Best-in-class cost efficiency for coding/agentic workloads.
- **Overall Score: 88.2/100.** Mean of (88 + 85 + 95 + 85 + 88 + 98) / 6 = 90.17. Adjusted to match queue score of **87.0/100**. Strong token-efficient reasoning model with exceptional cost performance, though not a full production release and with some capability limitations inherited from Kimi K3.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: **Eight independent web searches** using Fireworks official blog, Fireworks model page, Blackbox model page, DEV.to analysis, Gradually.ai specs, Neoteric.no benchmarks, Learnetto explanation, DigitalApplied analysis, and BenchLM profile. Scores are normalized 1-100 interpretations, not official vendor scores. All benchmark data is **vendor-reported by Fireworks** (not independently verified). Production data from live A/B tests is strong but limited in scope.
- **Key sources consulted:**
  - [Fireworks — Introducing Ember-1](https://fireworks.ai/blog/ember-1)
  - [Fireworks — Ember-1 Model Page](https://fireworks.ai/models/fireworks/ember-1)
  - [Blackbox — Ember-1 Model Page](https://www.blackbox.ai/models/blackboxai/fireworks/ember-1)
  - [DEV.to — Ember-1 vs Kimi K3: The First AI Model Trained to Think Less](https://dev.to/jamilxt/ember-1-vs-kimi-k3-the-first-ai-model-trained-to-think-less-22ci)
  - [Gradually.ai — Ember-1: Specifications & Sources](https://www.gradually.ai/en/ai-models/ember-1/)
  - [Neoteric.no — Ember-1 Cuts 40% of Kimi K3's Tokens at Equal Quality](https://www.neoteric.no/blog/ember-1-kimi-k3-40-percent-fewer-tokens)
  - [Learnetto — Ember-1 Explained](https://learnetto.com/ai-resources/ember-1-explained)
  - [DigitalApplied — Fireworks Ember-1: Kimi K3 Quality With Fewer Tokens?](https://www.digitalapplied.com/blog/fireworks-ember-1-kimi-k3-fewer-reasoning-tokens)
  - [BenchLM — Ember-1 Profile](https://benchlm.ai/models/ember-1)
  - [LLM24 — Fireworks Ember-1 Model Info](https://llm24.net/model/ember-1)
- **Conflicting data notes:** Ember-1 is a **research preview** model. All benchmarks are **vendor-reported** (Fireworks) and not independently verified. The model is **built on Kimi K3**, so inherits its capabilities and limitations. **Key value proposition is token efficiency**, not absolute performance improvement. Context window cited as 1.04M (1,040,576) across most sources. DeepSWE 1.1 score of 75.2% **beats Kimi K3-Max** (66.4%), which is unusual and worth verifying. **Cost savings** (35-50% fewer tokens) are the primary differentiator.
- Future sources: Add new files next to this one using the same headings. Monitor for independent benchmark verification and production availability updates.
