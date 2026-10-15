# Mistral Large 4 — findings by GPT 6 Sol

- Source: Mistral AI (`mistral-large-4`)
- Date: 2026-10-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral's October 2026 *public-preview* reasoning and multimodal MoE for agents, coding and document workflows ([Mistral launch](https://mistral.ai/news/mistral-large-4/), [current API model page](https://docs.mistral.ai/models/mistral-large-4-0)). Distinct from Mistral Large 3 and Medium 3.5.
- **Provider / access:** Mistral Studio `mistral-large-4` via **Chat Completions** and Conversations/Agents endpoints ([Mistral docs](https://docs.mistral.ai/models/mistral-large-4-0)); [OpenCode Console](https://opencode.ai/docs/zen/) lists paid `mistral-large-4` Chat Completions. Public preview weights are **announced for release at the end of October** by [Mistral](https://mistral.ai/news/mistral-large-4/), so do not claim downloadable self-hosting already available as of this report.
- **Release / knowledge:** October 6, 2026 public API preview ([Mistral docs](https://docs.mistral.ai/models/mistral-large-4-0)); precise training cutoff not published in the reviewed model page.
- **IDs:** Mistral model page `mistral-large-4` (version v26.10), [Vals](https://www.vals.ai/models/mistralai_mistral-large-4) `mistralai/mistral-large-4`; no verified free Zen tier.
- **Context window:** [Mistral model page](https://docs.mistral.ai/models/mistral-large-4-0) lists **1M** model capacity; [Vals](https://www.vals.ai/models/mistralai_mistral-large-4) reports **512K input context / 256K output** in its evaluated API configuration. Project metadata's 131K/32K corresponds to a different/older setup and is not used.
- **Modalities:** Text/image input → text output on [Vals](https://www.vals.ai/models/mistralai_mistral-large-4); [Mistral](https://mistral.ai/news/mistral-large-4/) describes image/document/geospatial multimodal understanding and built-in agents. Native audio/video support **not established** for this version.
- **Pricing (as of 2026-10-15):** [Mistral API model page](https://docs.mistral.ai/models/mistral-large-4-0) advertises **sale $0.68 input / $0.07 cached input / $2.09 output per 1M**, regular **$1.36/$0.14/$4.18**; [OpenCode Console](https://opencode.ai/docs/zen/) lists the same 50%-off rate. [Vals](https://www.vals.ai/models/mistralai_mistral-large-4) lists regular pricing for its test provider. Avoid the stale $2/$6 in existing metadata.
- **Architecture:** [Mistral docs](https://docs.mistral.ai/models/mistral-large-4-0) specify **1.05T total / 52B active** granular sparse MoE with a **1.6B vision encoder**. Weights announced but not yet published in reviewed sources.

### Raw benchmarks found

[Mistral's October launch](https://mistral.ai/news/mistral-large-4/) gives several published benchmark figures, [Vals high effort](https://www.vals.ai/models/mistralai_mistral-large-4) tests the actual preview on a 512K route, and [AA-attributed benchmark metrics](https://benchlm.ai/models/mistral-large-4) provide independent suite results. Don't mistake early preview/future promised weight release for a completed open-weight deployment.

Agent / tool use:

- [Mistral AutomationBench **59.9%** over 657 business workflows, AA-Briefcase **1393 Elo**, Cybench **93%** (40 challenges), CyberGym-E2E **82%** on its claimed reproduce-and-patch configuration](https://mistral.ai/news/mistral-large-4/); [AA-attributed TB4.0 **26.8%**](https://benchlm.ai/models/mistral-large-4).
- [Vals TB4.0 **23.23% ±1.34**, Finance Agent v2 **54.68% ±0.58**, Code Migration **30.56% ±4.22**, Harvey Legal Agent **15.83% ±2.96**, ProofBench **10.00%**](https://www.vals.ai/models/mistralai_mistral-large-4). MCP Atlas/Claw-Eval exact preview: **no verified public score found**.

Reasoning / knowledge:

- [AA-attributed Intelligence Index **38.4**, HLE **35.0%**, CritPt **10.6%**, AA-LCR **81.3%**, Omniscience Accuracy **25.8%**](https://benchlm.ai/models/mistral-large-4); [Vals BioMysteryBench **67.04% ±2.67**, Finance v2 **54.68%**, MysteryMechanism **12.16% ±2.20**](https://www.vals.ai/models/mistralai_mistral-large-4). A model-specific GPQA Diamond figure **no verified public score found** in these exact-ID listings.

Coding:

- [Mistral DeepSWE v1.1 **61.7%**, SWE Atlas QnA **59.4%**, TB4.0 **28.3%**, Coding Agent Index **49.8**](https://mistral.ai/news/mistral-large-4/); [Vals Vibe Code Bench v1.1 **78.40% ±3.55**, TB4.0 **23.23% ±1.34**](https://www.vals.ai/models/mistralai_mistral-large-4); [AA SciCode **54.2%**](https://benchlm.ai/models/mistral-large-4). No exact-preview SWE-bench Verified or SWE-Pro measurement verified.

Long context / multimodal:

- [Mistral 1M model context](https://docs.mistral.ai/models/mistral-large-4-0) versus [Vals 512K served route](https://www.vals.ai/models/mistralai_mistral-large-4), [AA-LCR **81.3%**](https://benchlm.ai/models/mistral-large-4); full-1M eight-needle MRCR **no verified public score found**.
- [AA MMMU-Pro **76.4%**](https://benchlm.ai/models/mistral-large-4), [Mistral Dense 200 visual-grounding **42%**](https://mistral.ai/news/mistral-large-4/) under a different image benchmark. Native text/image output is text only; image generation is not this model's native output.

### Normalized scores (1–100)

- **Tool use: 80/100.** AutomationBench 59.9% and TB4 23–27% are good, but specialist migration 30.6%, no MCP/OSWorld and mixed benchmark harnesses cap difficult autonomy.
- **Reasoning: 79/100.** AA HLE 35%, Index 38.4 and CritPt 10.6% show capable general reasoning with limited independent GPQA evidence.
- **Context window: 91/100.** Advertised 1M model capacity vs 512K tested API route and AA-LCR 81.3%; full-1M retrieval unverified.
- **Multimodal: 68/100.** Strong image/doc grounding with MMMU-Pro 76.4%; no proven native video/audio I/O, text output only.
- **Coding: 81/100.** DeepSWE 61.7%, Vals Vibe Code 78.4% and SciCode 54.2%, tempered by TB4 23.2% and no SWE-Pro result.
- **Cost efficiency: 83/100.** Sale $0.68/$2.09 and $0.07 cache read attractive; regular $1.36/$4.18 and preview availability matter.
- **Overall Score: 80/100.** (80 + 79 + 91 + 68 + 81) / 5 = 79.8, half-up 80; promising text/image agentic coding preview at sale pricing, with provider window and future weights verified separately.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-15
- Method: Fresh Mistral primary API/launch checked against Vals and AA-attributed results, preview vs promised open weights distinguished; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
