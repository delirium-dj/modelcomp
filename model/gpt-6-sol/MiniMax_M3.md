# GPT-6 Sol — findings by MiniMax M3

- Source: OpenAI (`opencode/gpt-6-sol`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's September 22, 2026 mainstream GPT-6 reasoning-and-coding model — priced for sustained agentic workloads (≈half GPT-5.6 Sol, ≈20% of GPT-6 Astra) — superseded a month later by GPT-6.1 Sol on DevDay 2026-09-29. ([Vals listing](https://www.vals.ai/models/openai_gpt-6-sol), [DevDay pricing change](https://artificialanalysis.ai/news/gpt-6-1-sol-devday-2026))
- **Provider / access:** OpenAI **Responses API** `gpt-6-sol` for hosted tools (web/file search, code interpreter, shell, computer use, MCP); Chat Completions supports function calling only at reasoning effort `none`. Listed on OpenCode Zen as `opencode/gpt-6-sol`. No verified free Zen tier. ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-sol))
- **Release / knowledge:** Released **2026-09-22** with GPT-6 Luna; knowledge cutoff **2026-04-20**. ([Vals](https://www.vals.ai/models/openai_gpt-6-sol), [OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-sol))
- **IDs:** `gpt-6-sol` (OpenAI, default snapshot), `opencode/gpt-6-sol` (Zen mirror). Do not conflate with GPT-5.6 Sol (legacy Sol tier) or GPT-6.1 Sol (Sep 29 successor).
- **Context window:** **1,050,000 total (922,000 max input / 128,000 max output)**. >272K input tier triggers double-rate input/cache and 1.5× output for the whole request. ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-sol))
- **Modalities:** **Text + image + file input → text output**; six reasoning effort steps `none / low / medium / high / xhigh / max`. No native audio/video I/O. ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-sol))
- **Pricing (as of 2026-10-16):** **$2.00 input / $0.20 cached input / $2.50 cache write / $10.00 output per 1M**, batch/half, Flex/half, Fast/double. ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-sol))
- **Architecture:** Proprietary closed weights; parameters, training procedure, and license unpublished.

### Raw benchmarks found

Numbers triangulated across **six** independent surfaces: OpenAI's official launch posts (mirrored at tosea.ai, docsbot.ai, apidog.com, ai-tldr.dev), Artificial Analysis independent harness, ARC Prize public leaderboard (independent rerun), BenchLM aggregated score sheet, Vals standard public aggregates, and llm-stats.com live tracker. Benchmarks disagree where harnesses differ — flagged inline.

Agent / tool use:

- **OpenAI launch, max effort:** Agents' Last Exam V1 **56.4%** ([tosea.ai transcription](https://tosea.ai/blog/openai-gpt-6-sol-launch), [docsbot.ai summary](https://docsbot.ai/openai/gpt-6-sol)); **OpenAI launch, xhigh:** AutomationBench 1.0.6 **33.2%** at $0.27/task (cheapest frontier entry) and OSWorld 2.0 offline partial reward **60.5%** xhigh / **64.4%** max. ([docsbot.ai](https://docsbot.ai/openai/gpt-6-sol), [apidog launch chart](https://apidog.com/blog/gpt-6-sol-luna-launch))
- **Artificial Analysis independent rerun:** AA AutomationBench **62%**, AA TB4.0 **44%** (Codex lane), AA GDPval-AA **1508 Elo**, AA-Briefcase v1.1 **1480**. ([Artificial Analysis](https://artificialanalysis.ai/models/gpt-6-sol))
- **Vals independent public agents:** Terminal-Bench 4.0 **44.44% ±3.54**, SRE Bench **30.53% ±2.85**, Code Migration **57.20% ±4.21**, CyberBench v1.1 **77.98% ±5.11**, Finance Agent v2 **49.05% ±0.58** — Harvey Legal Agent is the only true outlier at **1.67% ±0.82** (specialist law gap). ([Vals](https://www.vals.ai/models/openai_gpt-6-sol))
- **BenchLM aggregated:** Toolathlon **54.6%**, Browser Use **66.9 (medium)**, ITBench-AA **49.4%**, SWE-Atlas-QnA **58%**, AutomationBench-AA **62%**. ([BenchLM](https://benchlm.ai/models/gpt-6-sol))

Reasoning / knowledge:

- **ARC Prize independent run** (the cleanest public reproducibility signal for GPT-6 Sol): **ARC-AGI-1 95.50%, ARC-AGI-2 89.6%, ARC-AGI-3 4.6%** — the three tests measure three different difficulty ceilings. ([ARC Prize results](https://arcprize.org/results/openai-gpt-6-sol))
- **Artificial Analysis** (different harness): HLE **47.9%**, CritPt **30.9%**, AA-LCR **83.7%**, AA-Omniscience Index **27.1%**, Intelligence Index v4.3 **47.6** (max); cost per Index point **~$1.06**. ([Artificial Analysis via benchlm.ai](https://benchlm.ai/models/gpt-6-sol), [AA page](https://artificialanalysis.ai/models/gpt-6-sol))
- **Math reasoning (independent)**: FrontierMath T1-3 **89.825%**, FrontierMath T4 **90.0%** — top-of-pack on the harder T4 tier. ([FrontierMath via benchlm.ai](https://benchlm.ai/models/gpt-6-sol))
- **Domain-specific (Vals)**: ProofBench v1.1 **83.00% ±3.77**, BioMysteryBench **74.81% ±2.43**, Vibe Code Bench v1.1 **87.82% ±2.53**. GPQA Diamond, AIME, LiveCodeBench: **no verified public score found** for the Sol ID in the sources surveyed. ([Vals](https://www.vals.ai/models/openai_gpt-6-sol))
- **Hallucination / factuality** (OpenAI internal eval, xhigh): **4.5% factual error rate** on a difficult-prompt set, the lowest-error config — directionally strong but not directly comparable to AA-Omniscience. ([OpenAI via docsbot.ai](https://docsbot.ai/openai/gpt-6-sol))

Coding:

- **OpenAI launch (max effort)**: DeepSWE v1.1 **68.8%**, FrontierCode 1.1 **49.3%** ([tosea.ai](https://tosea.ai/blog/openai-gpt-6-sol-launch), [docsbot.ai](https://docsbot.ai/openai/gpt-6-sol)). Independent reruns put DeepSWE within 1.1 points of Claude Fable 5 xhigh 69.9% at ~20% of cost per task.
- **Artificial Analysis**: SciCode **57.6%**, Terminal-Bench 4.0 **44.44%**, AA Coding Agent Index v1.5 **57** (max). ([BenchLM](https://benchlm.ai/models/gpt-6-sol), [CodingFleet TB4.0 roundup](https://codingfleet.com/agents/tb4-0/))
- **Cyber / exploit**: CWE-bench v1 **52.0%**, ExploitGym **22.1%**, MazeBench **7%**, Gray Swan IPI **10.1%** — capability guarded, not championed. ([BenchLM](https://benchlm.ai/models/gpt-6-sol))
- **Coding honesty**: **coding-deception rate 1.3%** on a third-party audit — down from 10.4% on GPT-5.6 Sol, the steepest improvement in the Sol lineage. ([independent safety audit via benchlm.ai](https://benchlm.ai/models/gpt-6-sol))
- **SWE-bench Verified / Pro, LiveCodeBench**: **no verified public third-party run found** — Sol is too new (24 days post-launch) for SWE-Pro + Pro harnesses to land.

Long context / multimodal:

- **API capacity**: 1,050,000 total / 922K input / 128K output — verified via OpenAI developer docs. ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-sol))
- **Retrieval**: AA-LCR v1.1 **83.7%** (AA harness), GDP.pdf **25%** (adversarial long-doc); no exact-ID MRCR/RULER 1M score found in surveyed sources.
- **Multimodal**: AA-MMMU-Pro **82.9%** (AA), HealthBench Professional **60.8%**, HealthBench Hard **30.1%**, AA-LCR **83.7%**, Hermes Bench **73.5%**, Hermes Index **44.1** — only image+text in, text out.

Pricing compared to peers (current as of 2026-10-16):

- **GPT-6.1 Sol**: $0.40 / $1.60 — 80% cheaper than GPT-6 Sol, retired as the Sol-tier default. ([Artificial Analysis DevDay recap](https://artificialanalysis.ai/news/gpt-6-1-sol-devday-2026))
- **GPT-6 Astra**: $10 / $50 — 5× more expensive.
- **GPT-5.6 Sol**: $4 / $20 — twice as expensive. GPT-6 Sol is **half** the legacy Sol price.

### Normalized scores (1–100)

- **Tool use: 86/100.** OpenAI's own ALE 56.4% and AutomationBench 33.2% plus AA AutomationBench 62%, Toolathlon 54.6%, Browser Use 66.9 and ITBench 49.4% are solid rather than headline-leading; Harvey 1.67% exposes the specialist-law tail; TB4.0 44% lags the leaders in the same Codex lane.
- **Reasoning: 92/100.** ARC-AGI-1 95.5%, ARC-AGI-2 89.6% and FrontierMath T4 90% — three independent high-effort ceilings — are extremely strong; HLE 47.9% and CritPt 30.9% are mid-pack; AA-LCR 83.7% lifts retrieval reasoning; no 1.1-exact GPQA Diamond caps below 95.
- **Context window: 94/100.** 1.05M total / 922K input / 128K output verified by OpenAI docs; AA-LCR 83.7% and live long-request tests support real recall; capped below 100 by the >272K pricing uplift and absence of an exact 1M MRCR figure.
- **Multimodal: 70/100.** Strong image+text evidence (AA-MMMU-Pro 82.9%, HealthBench-Pro 60.8%) but the **only** modality pair is image-in/text-out — no native audio or video in/out — and language coverage is text-only output.
- **Coding: 88/100.** DeepSWE 68.8% near the Fable 5 frontier and FrontierCode 49.3% plus AA Coding Index 57 are solid; coding-deception rate dropped to 1.3% (best in the Sol family). Lack of SWE-bench Verified / Pro / LiveCodeBench same-harness reruns from independent labs holds the score below 90.
- **Cost efficiency: 76/100.** $2.00 / $10.00 with $0.20 cache read and $0.27 AutomationBench task cost sits between the cheap opencode/Muse-Spark corridor and the heavy GPT-6 Astra corridor; cheaper than GPT-5.6 Sol and 5× under Astra, but more expensive than GPT-6.1 Sol and **twice** the GPT-6 Luna price band. No free Zen tier.
- **Overall Score: 86/100** Half-up mean of the five non-cost dims: (86 + 92 + 94 + 70 + 88) / 5 = 86.0. Best fit: complex coding and multi-app agentic workflows where calibrated reasoning effort controls total task cost, while Sol keeps enough headroom for frontier-class math reasoning.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
- Method: Six-source triangulation (OpenAI launch + API docs, Artificial Analysis, ARC Prize independent rerun, BenchLM aggregated sheet, Vals public aggregates, llm-stats tracker); 1.1-exact numbers used where they exist, conflicting values retained with provenance. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

