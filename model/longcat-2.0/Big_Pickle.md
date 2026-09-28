# Meituan LongCat-2.0 — findings by Big Pickle

- Source: Meituan LongCat (GitHub `meituan-longcat/LongCat-2.0`, Hugging Face `meituan-longcat/LongCat-2.0`, LongCat API platform)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0 (Hugging Face `meituan-longcat/LongCat-2.0`; OpenRouter `meituan/longcat-2.0`; chat at `longcat.ai`). Meituan's 1.6T-parameter sparse-MoE model, released 2026-06-29. Distinct checkpoint from `LongCat-2.5-Preview` (tracked separately) — 2.5 is the newer, still-preview successor, and its public record is thinner than this one's.
- **Short description:** Meituan's flagship open-weight text model, positioned for coding, repository-level changes, long-horizon problem solving and agentic workflows. Trained entirely on AI-ASIC superpods across millions of accelerator-days. The interesting engineering is LongCat Sparse Attention (LSA) and a 135B-parameter N-gram Embedding side-path — both aimed at making a 1.6T MoE cheap enough to serve at 1M context.
- **Provider / access:** LongCat's own API platform plus hosted routes (Artificial Analysis lists 2 providers; SiliconFlow FP8 is the one with published performance). OpenRouter slug `meituan/longcat-2.0` (OpenAI Chat Completions, streaming, tools, JSON mode). Self-hostable — MIT weights, GPU and NPU deployment recipes published in the GitHub repo. Deployable on both GPU and NPU platforms.
- **Release / knowledge:** released 2026-06-29 (Artificial Analysis; the GitHub repo says "June 2026"). Knowledge cutoff not disclosed.
- **IDs:** `meituan/longcat-2.0` (OpenRouter), `meituan-longcat/LongCat-2.0` (Hugging Face weights), `LongCat-2.0` (Artificial Analysis slug).
- **Context window:** **1M tokens** (Artificial Analysis technical specifications: "1M tokens, ~1500 A4 pages"). **Caveat:** the only published provider configuration, SiliconFlow FP8, serves a **262k** context window — so the 1M figure is a model capability, not a verified hosted limit. LongCat's own site is the only place the full window is offered.
- **Modalities:** **text in, text out only.** Artificial Analysis states explicitly that LongCat 2.0 does **not** support image input and is **not** multimodal. Reasoning: yes (extended thinking / chain-of-thought; the vendor's own evaluation table is run with **thinking mode off** "for better token efficiency"). Tool calling and JSON mode supported on the hosted routes.
- **Pricing (as of 2026-09-28):** **$0.30 in / $1.20 out per 1M tokens** on LongCat's own API, with a **$0.06 cache-hit** rate (98% discount) and a **$0.18 blended** rate at a 7:2:1 cache-hit/input/output ratio (Artificial Analysis). SiliconFlow FP8 lists a higher **$0.46 blended**. Cost per Artificial Analysis Intelligence Index task: **$0.06**, ranked **#5 of 116** among open-weight models in the >150B class — genuinely cheap to evaluate.
- **Architecture:** sparse MoE, **1.6T total / 48B activated** parameters. **LongCat Sparse Attention (LSA)** replaces the DSA Lightning Indexer with three orthogonal improvements, led by **Hierarchical Indexing** — a coarse-to-fine two-stage scheme (block-level approximate recall, then fine-grained token selection) that shrinks the candidate space per query. **N-gram Embedding** adds 135B parameters in sparse dimensions orthogonal to the MoE, inherited from LongCat-Flash-Lite. **3-step Multi-Token Prediction** module for speculative decoding (the CLI target model shares an index every 2 layers; all 3 draft steps share one pass). MIT license — commercial self-hosting permitted.

### Raw benchmarks found

**Important caveat before the numbers:** every LongCat-2.0 figure below comes from Meituan's own README, measured "in-house under a unified harness" with **thinking mode off**. The comparison columns are cited from *each competing model's own vendor report* (`*` marks those), which means the baselines are not harness-matched. Treat the whole table as directional, not as a controlled comparison. Separately, BenchLM currently carries **0 of 486** benchmark rows for this model and no overall score — there is no independent aggregator covering it.

Agent / tool use:

- FORTE: **73.2** (in-house; Gemini 3.1 Pro 70.3, GPT-5.5 77.8, Claude Opus 4.6 73.2, 4.7 77.6, 4.8 77.2) — competitive with the Claude Opus line on a unified harness
- RWSearch: **78.8** (in-house; Gemini 3.1 Pro 76.3, GPT-5.5 85.3, Claude Opus 4.6 81.3, 4.7 79.3, 4.8 77.3) — beats the newest Opus on real-world search
- BrowseComp: **79.9** (in-house; Gemini 3.1 Pro 85.9, GPT-5.5 84.4, Claude Opus 4.6 84.0, 4.7 79.3, 4.8 84.3) — mid-pack, behind every frontier baseline
- IFEval: **90.0** (in-house; Gemini 3.1 Pro 96.1, GPT-5.5 95.0, Claude Opus 4.6 92.2, 4.7 88.7, 4.8 86.0) — good instruction-following, and the one board where it beats the newest Opus
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- AutomationBench: **no verified public score found** for this checkpoint (note: LongCat-2.5-Preview reports 52.3 under its own harness — that is a different model and must not be carried over)
- Terminal-Bench 2.1: **70.8** (in-house; Gemini 3.1 Pro 70.7, GPT-5.5 73.8, Claude Opus 4.8 78.9)
- OSWorld / Agents' Last Exam / GDPval-AA: **no verified public score found** for this checkpoint

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **19** (v4.3.2, independently measured) — **#28 of 679** overall, **#54 of 116** within its open-weight >150B class, and only modestly above the class median of 18. **Do not mix index versions:** an earlier Artificial Analysis comparison snapshot showed an *estimated* **26** on v4.2; the current measured figure is 19.
- GPQA-diamond: **88.9** (in-house; Gemini 3.1 Pro 94.3, GPT-5.5 93.6, Claude Opus 4.6 91.3, 4.7 94.2, 4.8 92.4) — high absolute number, but every baseline beats it
- IMO-AnswerBench: **81.8** (in-house; Gemini 3.1 Pro 90.0, GPT-5.5 79.5, Claude Opus 4.6 75.3, 4.7 81.8, 4.8 75.3) — ties Opus 4.7, beats GPT-5.5, well behind Gemini 3.1 Pro
- Writing Bench: **83.8** (in-house; Gemini 3.1 Pro 83.7, GPT-5.5 84.7, Claude Opus 4.7 85.3, 4.8 85.2) — statistical tie with the field
- HLE / CritPt / AIME 2025 / MMLU-Pro / AA-Omniscience: **no verified public score found.** With no HLE, CritPt or hallucination-rate figure, the model's factual-grounding profile is simply unmeasured.

Coding:

- SWE-bench Pro: **59.5** (in-house; Gemini 3.1 Pro 54.2, GPT-5.5 58.6, Claude Opus 4.6 57.3, 4.7 64.3, 4.8 69.2) — beats Gemini 3.1 Pro and GPT-5.5, behind Opus 4.7/4.8
- SWE-bench Multilingual: **77.3** (in-house; Gemini 3.1 Pro 76.9, Claude Opus 4.6 77.8, 4.7 80.5, 4.8 84.8) — essentially level with the 2026-era Opus line
- Terminal-Bench 2.1: **70.8** (above)
- LiveCodeBench / SWE-bench Verified / SciCode: **no verified public score found** for this checkpoint
- Terminal-Bench 4.0: **no verified public score found** (this is a current Artificial Analysis Intelligence Index component, so its absence is a real coverage gap)

Long context:

- **1M tokens** claimed, and the architecture is purpose-built for it — LSA's Hierarchical Indexing explicitly targets the quadratic scoring bottleneck that makes 1M-token attention expensive, and the 3-step MTP module shares a single indexer pass across draft steps. That is a coherent engineering story for a large window.
- But **no verified long-context retrieval measurement (MRCR / RULER / GraphWalks at 512K+) is published for this checkpoint**, and there is no AA-LCR figure despite AA-LCR being an Intelligence Index component. BenchLM has zero long-context rows. The 1M claim is currently architectural intent plus a spec sheet, not evidence.
- Served reality: the one published provider config (SiliconFlow FP8) caps context at **262k**, roughly a quarter of the claimed window.

Performance / serving:

- SiliconFlow FP8: **52.4 output tokens/s**, 3.25 s median time to first chunk, **41.43 s** median time to first *answer* token (i.e. ~38 s of that is thinking), 50.98 s total response for 500 tokens (Artificial Analysis)
- Verbosity: 140M output tokens across the Intelligence Index run, **#18 of 116** for conciseness in its class — unremarkable
- End-to-end latency is the practical weak point for agentic loops: a 41 s wait for the first answer token is far slower than frontier API models

### Normalized scores (1–100)

- **Tool use: 76/100.** FORTE 73.2, RWSearch 78.8, BrowseComp 79.9, IFEval 90.0 and Terminal-Bench 2.1 70.8 form a credible agentic profile, and RWSearch 78.8 edges the newest Claude Opus. Held well below 80 because **every number is in-house with thinking off against non-harness-matched vendor baselines**, and because there is no Tau3/Tau2, no AutomationBench, no OSWorld and no GDPval figure for this checkpoint. Nothing here is independently reproduced, and the one independent datapoint that does exist — an Intelligence Index of 19 — is mid-pack.
- **Reasoning: 74/100.** GPQA-diamond 88.9 and IMO-AnswerBench 81.8 are respectable absolute results, and IFEval 90.0 shows clean instruction adherence. But every frontier baseline beats it on GPQA, and there is **no HLE, CritPt, MMLU-Pro or hallucination-rate measurement at all** — the reasoning ceiling is claimed by the vendor rather than demonstrated. The measured Intelligence Index of 19 (#28/679) is the honest anchor, and it is an average-open-weight number, not a frontier one.
- **Context window: 80/100.** 1M tokens is a top-tier spec and LSA + shared-index MTP are a real engineering answer to the long-context cost problem, so this scores well above a bare 256K text model. Held below 90 because no verified retrieval measurement exists at any window length, the only published provider config serves 262k, and AA-LCR is missing. The 1M is documented capability, not demonstrated capability.
- **Multimodal: 15/100.** **Text in, text out — confirmed, not inferred.** Artificial Analysis explicitly states LongCat 2.0 has no image input and is not multimodal. This is the bottom band by construction; any pipeline needing image, audio or video input must route elsewhere.
- **Coding: 79/100.** SWE-bench Pro 59.5 and SWE-bench Multilingual 77.3 are genuinely competitive — the multilingual figure is level with Claude Opus 4.6 and ahead of Gemini 3.1 Pro — and Terminal-Bench 2.1 70.8 is respectable. Held out of the 90+ band by total independent coverage: BenchLM has 0 rows, there is no SWE-bench Verified, no LiveCodeBench, no SciCode and no Terminal-Bench 4.0 figure, and the AA Intelligence Index of 19 does not corroborate the in-house coding numbers. The vendor table says "2026 Opus-class coding"; no independent source agrees yet.
- **Cost efficiency: 87/100.** $0.30 in / $1.20 out with a **$0.06** cache-hit rate (98% discount) is a good shape, and Artificial Analysis ranks it **#5 of 116** for cost per Intelligence Index task at $0.06 — near the front of its class. The $1.20 output rate is the drag: it sits above the ~$0.60/$2.20 (≈92) and close to the $1.25/$4.25 (≈88) reference band, and hosted providers charge more ($0.46 blended on SiliconFlow). MIT weights make the marginal self-hosting cost free, but a 1.6T-parameter footprint limits who can actually take that route.
- **Overall Score: 64.8/100.** Half-up mean of the five quality dims: (76 + 74 + 80 + 15 + 79) / 5 = 64.8. Best fit: a text-only, MIT-licensed, cheap-to-run option for self-hosted coding and search-agent work where you control the serving stack and can run your own evals — the SWE-bench Pro 59.5 and RWSearch 78.8 numbers justify a trial. Not a frontier pick: the independently measured Intelligence Index of 19, the absent multimodal path, and the complete lack of third-party benchmark coverage are the reasons.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-28
- Method: public internet research (Meituan LongCat GitHub repo README, Hugging Face `meituan-longcat` org, Artificial Analysis model and provider pages, BenchLM model page, OpenRouter API docs). Scores are normalized 1–100 interpretations, not official vendor scores. Every LongCat-2.0 benchmark figure originates from Meituan's own in-house harness with thinking mode off; this is stated explicitly rather than presented as independent measurement. Numbers belonging to `LongCat-2.5-Preview` or to earlier LongCat-Flash checkpoints were deliberately excluded.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
