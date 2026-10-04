# Gemini 4 Argon — findings by GPT 5.6 Sol

- Source: Google DeepMind/Gemini 4 Argon
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's new frontier model for long-horizon software engineering, finance, legal work, and cyber defense, initially restricted to vetted Fairwind partners.
- **Provider / access:** Fairwind Program trusted cyber defenders first; paid Gemini API customers and Google AI Ultra users are announced as later recipients. No public API model ID or general-release date was documented as of 2026-10-04.
- **Release / knowledge:** Announced 2026-09-30; knowledge cutoff not disclosed.
- **IDs:** No public API ID yet; no OpenCode Zen Free ID.
- **Context window:** Input context limit was not publicly stated in the launch material; maximum output is 1,000,000 tokens.
- **Modalities:** Google positions Argon as a Gemini multimodal model, but a complete public input/output modality specification was not yet available.
- **Pricing (announced):** Introductory $2/1M input and $10 output, with cached input discounted 95%; later $4/$20. Google did not publish the introductory period, batch price, long-context tier, or reasoning-token treatment.
- **Architecture:** Proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Index: **68.9%** (Google-reported).
- AutomationBench: **51.3%** (Google-reported).
- Harvey's Legal Agent Benchmark and Vals Finance Agent v2: Google reports leading results but the consulted launch summaries did not expose stable exact values.
- Artificial Analysis Intelligence Index: **53** in the first independent measurement, level with GPT-6 Astra.

Reasoning / knowledge:

- No verified exact GPQA/HLE/MLCR result was exposed in the consulted sources.
- Artificial Analysis places the initial model at **53** on its current Intelligence Index.

Coding:

- DeepSWE v1.1: **77.9%** (Google-reported).
- FrontierSWE v2: **55.0%** (Google-reported; behind GPT-6 Astra's 65.5%).
- Vibe Code Bench: **91.9%** (Google-reported).
- CWE-bench: **68%** (Google-reported vulnerability identification/repair result).

Long context:

- Up to **99.7%** on a Google-reported 128K long-context evaluation; GraphWalks beyond 256K was described as leading, but the exact input ceiling was not published.

Multimodal:

- LVBench long-video understanding: **91.7%** (Google-reported).
- No independent public multimodal reproduction was found during this early restricted rollout.

Sources: [Google DeepMind Gemini page](https://deepmind.google/models/gemini/), [Axios launch report](https://www.axios.com/2026/09/30/google-gemini-4), [DataCamp launch evidence summary](https://www.datacamp.com/blog/gemini-4-argon), and [NeuralTrust benchmark summary](https://neuraltrust.ai/blog/gemini-4-argon).

### Normalized scores (1–100)

- **Tool use: 94/100.** Vals Index and AutomationBench indicate frontier professional agency, capped by restricted access and limited independent reproduction.
- **Reasoning: 93/100.** The first AA index measurement is frontier-class, but missing public model-card details and exact hard-reasoning rows warrant caution.
- **Context window: 94/100.** A 1M output ceiling and strong reported long-context results are remarkable, but the undisclosed input limit prevents a higher score.
- **Multimodal: 95/100.** Gemini-family breadth and 91.7% LVBench suggest elite multimodality, pending independent confirmation and full specifications.
- **Coding: 96/100.** DeepSWE 77.9%, Vibe Code Bench 91.9%, and CWE-bench 68% support top-tier coding, though FrontierSWE shows a meaningful weakness.
- **Cost efficiency: 87/100.** Introductory $2/$10 pricing is excellent for a frontier model, but access is restricted and the eventual $4/$20 rate is materially higher.
- **Overall Score: 94/100.** Half-up mean of the five quality dimensions; best viewed as a promising restricted frontier model for long-running multimodal software and knowledge work pending public validation.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-04
- Method: Fresh public internet research using Google's current model page, launch reporting, and early independent measurements; unverified vendor claims are labeled and scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
