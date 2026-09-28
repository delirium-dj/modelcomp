# Meta Muse Spark 1.3 Contributor (Free tier) — findings by Big Pickle

- Source: Meta Superintelligence Labs (`opencode/muse-spark-1.3-contributor-free`); weights and benchmarks from Meta AI Research
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3, Contributor-free tier on OpenCode Zen (`opencode/muse-spark-1.3-contributor-free`; Meta's own Contributor model ID is `muse-spark-1.3-contributor`, Standard is `muse-spark-1.3`). **Same weights as the Standard tier** — the free/Contributor route is a pricing and data-consent distinction, not a different model. There is a separate, heavier `Muse Spark 1.3 Max` checkpoint released 2026-09-05; this entry is the **standard 1.3**, not the Max.
- **Short description:** Meta's proprietary multimodal reasoning model for long-horizon agentic and coding work, released 2026-09-02 and updated in place. Explicitly trained "across a diverse set of harnesses to generalize to various agentic environments", and designed to juggle multiple concurrent workflows in one long thread while asking clarifying questions rather than guessing. The headline engineering result is **efficiency**: Meta's own engineers measured ~20% fewer tool calls and ~25% fewer tokens than Muse Spark 1.2 on common engineering workflows.
- **Provider / access:** Meta Model API (`dev.meta.ai`, Chat Completions) and Muse Code (terminal agent, macOS/Linux installer). Reasoning is a switchable mode, and **max reasoning is now live** — the Meta research post was updated to confirm "Muse Spark 1.3 with max reasoning is now available on Muse Code and Meta Model API", superseding the earlier "shortly after additional safety testing" language. Function calling, structured output and web search all supported. **Not self-hostable** — weights are closed, and Meta has published no parameter count.
- **Release / knowledge:** released **2026-09-02** (Meta AI Research; Vals AI dates it 2026-09-01). Knowledge cutoff not disclosed.
- **IDs:** `muse-spark-1.3` (Meta Model API, Standard), `muse-spark-1.3-contributor` (Meta Model API, Contributor), `opencode/muse-spark-1.3-contributor-free` (OpenCode Zen free tier).
- **Context window:** **1,048,576 tokens (1M)** input. Verified three ways: LLM Stats lists `1,048,576` input tokens, kie.ai and getdeploying both report 1,048,576, and Artificial Analysis lists a 1000k window. Max output is not published by Meta; LLM Stats reports a 943,718-token output ceiling, which is unverified and implausible as a designed limit — treat output as undocumented.
- **Modalities:** **text, image and video in; text out** (Meta Model API spec, confirmed by getdeploying). Reasoning yes; function calling yes; structured output yes. **Audio input is not listed** on the current Meta spec — the sibling 1.2's Zen metadata claims audio, but for 1.3 it is unverified, so audio is treated as absent here.
- **Pricing (as of 2026-09-28):** three tiers, and **this folder is the $0 one**:
  - **Zen Contributor-free: $0** (this entry) — free in exchange for a **training-data consent agreement**: Meta uses your prompts and completions to improve its products. This is the material caveat, not the price.
  - Meta Contributor: **$0.10 in / $0.20 out** per 1M, cached input **$0.002** (98%+ discount).
  - Meta Standard: **$1.25 in / $4.25 out** per 1M, cached input **$0.15**.
  - Artificial Analysis reports a **$0.78 per 1M blended** rate at a 7:2:1 cache-hit/input/output ratio for 1.3.
- **Architecture:** **proprietary / closed weights.** No parameter count published. Meta's roadmap explicitly lists "the Muse Spark open weights release" as future work, so openness should improve — but as of today there is nothing to self-host.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta's published scorecard) — **tied with GPT-5.6 Sol (max) at 88.8** and ahead of Claude Opus 5 (max) at 86.7
- SWEAtlas Codebase QnA: **59.4%** (Meta scorecard) — ahead of GPT-5.6 Sol (53.5) and Claude Opus 5 (52.7)
- GDPval-AA v2: **1754 Elo** (Meta scorecard) vs GPT-5.6 Sol 1710
- OSWorld 2.0: **trails Claude Opus 5 slightly** (Meta scorecard; the specific figure sits in an image asset and is not machine-readable) — Meta's own framing is that 1.3 leads or ties on coding but "on agentic tasks… it trails Claude Opus 5 slightly"
- Artificial Analysis Intelligence Index: **53** for `Muse Spark 1.3 (max)` vs **47** for `Muse Spark 1.2 (xhigh)` — a six-point gain, measured on index v4.2
- Tool-call and token efficiency: **~20% fewer tool calls, ~25% fewer tokens** than 1.2 (Meta's internal engineering comparison, not a public benchmark)
- Claw-Eval / MCP-Atlas / Tau3-Banking / Terminal-Bench 4.0 / AutomationBench: **no verified public score found** for 1.3 specifically
- The family-level `Muse Spark` base variant carries τ²-bench 91.5%, Claw-Eval 63.8%, CyberGym 43.5%, GDPval-AA 1145 / 32.2% and Terminal-Bench 2.0 59% (BenchLM). That is a **different, earlier checkpoint** (262K context) and does not transfer to 1.3.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53** (`Muse Spark 1.3 (max)`, v4.2) — the strongest independent number for this model, and it places 1.3 squarely in the frontier band rather than at the edge of it. For scale, Meta's own AA changelog records "Muse Spark 1.1: Meta gains 8 Intelligence Index points in three months" back in July, so the line has climbed roughly 39 → 47 → 53 across 1.1/1.2/1.3.
- HLE, GPQA Diamond, CritPt, MMLU-Pro, AA-Omniscience: **no verified public score found for the 1.3 checkpoint.** The figures visible in third-party write-ups of Meta's scorecard (GPQA-D 94.3, HLE w/o tools 45.4, HealthBench Hard 20.6, τ²-bench 95.6, Vibe Code 32.03) are **Gemini 3.1 Pro's** numbers, not Muse Spark's — the chart is a four-way comparison and the aggregator indexed the wrong column. Flagged explicitly so they are not carried over.
- Family-level base-variant knowledge rows (GPQA-D 89.5, HLE 50.4, HLE w/o tools 42.8, AA-GPQA 88.4, AA-HLE 40.7, ARC-AGI-2 42.5, CritPt 11.3, AA-LCR 77.0, Omniscience 49.6% accuracy against an **84.2% hallucination rate**, index 7.2) belong to the earlier base Muse Spark and are recorded only as lineage context.

Coding:

- DeepSWE v1.1: **75.4%** (Meta scorecard) — **the highest figure in Meta's own comparison**, ahead of Claude Opus 5 (74.0) and GPT-5.6 Sol (73.0)
- Terminal-Bench 2.1: **88.8%** (above)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: **no verified public score found** for 1.3
- Efficiency as a coding result: ~25% fewer tokens and ~20% fewer tool calls than 1.2 at equal-or-better accuracy (Meta internal)
- Safety as an engineering property: Meta reports improved adversarial robustness and prompt-injection resistance, plus better calibration on irreversible actions

Long context:

- **MRCR 256K–512K: 98.5%** and **MRCR 512K–1M: 98.1%** (Meta scorecard). This is the single most important number in the report: it is a real retrieval measurement *inside* the top context band, and it is dramatically better than the comparison field — GPT-5.6 Sol scores **91.5** in the 256K–512K band and only **73.8** in the 512K–1M band. Meta's 24.3-point margin at the top of the window is the largest long-context gap I have verified in this dataset.
- Context window note: 1,048,576 per Meta/LLM Stats, but Artificial Analysis reports Muse Spark 1.2 at 1049k versus 1.3 at 1000k — so the *nominal* window is marginally smaller than the prior generation's, even though measured retrieval is far better. The effective window is what MRCR measures, and that improved decisively.
- Output ceiling undocumented (see above), so long generation is bounded by an unpublished limit.

Speed / cost (independent):

- **190.1 output tokens/s**, 18.69 s time-to-first-token (Artificial Analysis) — slower than Muse Spark 1.2 at 260.0 t/s, i.e. 1.3 buys its quality with latency
- Blended **$0.78 per 1M**; the free Zen Contributor route is $0

### Normalized scores (1–100)

- **Tool use: 94/100.** Terminal-Bench 2.1 88.8% tied with GPT-5.6 Sol and ahead of Claude Opus 5, SWEAtlas Codebase QnA 59.4% best-in-chart, GDPval-AA v2 1754, and an independently measured AA Intelligence Index of 53. Trimmed one point from my earlier read because Meta's own scorecard concedes it **trails Claude Opus 5 on agentic tasks** (OSWorld 2.0), and there is no verified 1.3 figure at all for Tau3/Tau2, Claw-Eval, AutomationBench or Terminal-Bench 4.0. Frontier-adjacent and efficient, not unambiguously the best agentic model.
- **Reasoning: 90/100.** The AA Intelligence Index of 53 is the anchor and it is a strong, independently measured, frontier-band number — up 6 points on 1.2. Trimmed two points because **no reasoning-specific benchmark for the 1.3 checkpoint is independently verified**: no HLE, no GPQA Diamond, no CritPt, no Omniscience, and the widely-recirculated figures in third-party write-ups of Meta's chart are Gemini's column, not Meta's. The intelligence is corroborated; the reasoning profile is not yet documented.
- **Context window: 100/100.** **MRCR 98.5% at 256K–512K and 98.1% at 512K–1M** is precisely the verified ≥98% retrieval-at-512K+ measurement that the top band requires, and it is far and away the best long-context evidence in this dataset (GPT-5.6 Sol manages 73.8% in that same top band). This is no longer a spec-sheet claim; it is measured. The undocumented output ceiling is noted but is not a separate penalty.
- **Multimodal: 85/100.** Text, image and video input confirmed on the Meta Model API spec, with web search and structured output alongside. Held at 85 rather than higher because **no 1.3-specific multimodal benchmark is independently verified** — no MMMU-Pro, no MathVision, no video-understanding figure. The 1.2's claimed audio input is not on the 1.3 spec, so audio is excluded. The family base variant's MMMU-Pro 80.4% is lineage context only.
- **Coding: 95/100.** DeepSWE v1.1 75.4% is the best number in Meta's own four-way chart, beating Claude Opus 5 at 74.0 and GPT-5.6 Sol at 73.0; Terminal-Bench 2.1 88.8% ties the frontier leader; SWEAtlas Codebase QnA 59.4% leads the chart. The ~20% fewer tool calls and ~25% fewer tokens versus 1.2 is a real efficiency gain, not a benchmark. Not 100 because SWE-bench Verified, SWE-bench Pro and LiveCodeBench remain unverified for this checkpoint.
- **Cost efficiency: 100/100.** This folder is the **$0 OpenCode Zen Contributor-free tier**. The paid Meta routes are cheap too ($0.10/$0.20 Contributor, $0.78 blended), so the free tier is a strict subset rather than a different economic model. The only cost is the **training-data consent agreement** — Meta trains on your prompts and completions, which is a confidentiality decision, not a pricing one, and it is the reason to prefer this route only for non-sensitive work.
- **Overall Score: 92.8/100.** Half-up mean of the five quality dims: (94 + 90 + 100 + 85 + 95) / 5 = 92.8. Best fit: the best-value long-horizon agent and coding model in this dataset at $0, and the clear leader for large-context work — the MRCR 512K–1M margin is the single largest measured advantage I have verified. Trade-offs are real: 190 t/s and 18.7 s TTFT make it the slowest of the top group, it concedes agentic benchmarks (OSWorld 2.0) to Claude Opus 5, its weights are closed, and the free tier requires consenting to training data use.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-28
- Method: public internet research (Meta AI Research "Introducing Muse Spark 1.3" post, Meta Model API spec via getdeploying, Artificial Analysis `Muse Spark 1.3 (max)` vs `Muse Spark 1.2 (xhigh)` comparison page, Artificial Analysis homepage/changelog, LLM Stats model page, kie.ai and Oflight spec write-ups, BenchLM family pages). Scores are normalized 1–100 interpretations, not official vendor scores.
- **Re-research note (supersedes the 2026-09-17 pass):** two things moved. (1) The AA Intelligence Index of 53 is now independently measured and confirms the strong read, but it also revealed that the reasoning-specific benchmark coverage for 1.3 is thinner than the earlier pass assumed, which is why Tool use and Reasoning were trimmed by 1 and 2 points respectively. (2) Meta has since shipped **max reasoning**, so the earlier "pending safety testing" caveat is retired. Net Overall 93 → **92.8**.
- **Misattribution guard:** the numbers GPQA-D 94.3, HLE w/o tools 45.4, HealthBench Hard 20.6, τ²-bench 95.6, Vibe Code 32.03, LiveCodeBench Pro 82.9, MMMU-Pro 83.9, CharXiv 80.2, ERQA 69.4, ZeroBench 29.0 and MedXpertQA figures that circulate in third-party pages sourced to "Meta AI: Muse Spark comparison chart" are **Gemini 3.1 Pro's column**, not Muse Spark 1.3's. They are excluded from every score above.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
