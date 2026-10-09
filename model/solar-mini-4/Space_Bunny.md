# Solar Mini 4 — findings by Space Bunny

- Source: Upstage (`solar-mini4`, snapshot `solar-mini4-260922`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4 (`solar-mini4`)
- **Short description:** Upstage's (Korea) **compact agentic model**, released **2026-09-22** — a **35B-total / 3B-active MoE**, pretrained from the ground up by Upstage and aimed squarely at **repetitive, high-volume agent workloads where cost per step dominates**. Its headline is a new **Pareto-optimal point on Intelligence Index vs. active parameters for sub-3B-active models**: it scores 24.1 on the Artificial Analysis Intelligence Index, the best of any model with 3B active parameters, while cutting per-token pricing by a third versus Upstage's own previous flagship (Solar Pro 3). Top use case: document parsing, structured information extraction, classification and multi-step rule-based workflows at volume. **Proprietary — weights are not released.**
- **Provider / access:** Upstage Console API (`solar-mini4`, alias `solar-mini4-260922`), Solar Chat, Playground, **OpenRouter** (`upstage/solar-mini4`), and **on-premises deployment**. **Free to use on Hermes Agent for a limited time starting 2026-10-05.** No OpenCode Zen ID found.
- **Release / knowledge:** Released **2026-09-22** (OpenRouter lists 2026-09-23; Artificial Analysis's release article is dated 2026-09-30). **Training data cut-off: February 2026** (Upstage Console).
- **IDs:** `solar-mini4` (Upstage alias), `solar-mini4-260922` (dated snapshot), `upstage/solar-mini4` (OpenRouter)
- **Context window:** **524,288 tokens (512K)**, max output **128K–131,072**. Verified on Upstage Console's own documentation, aimlapi, Zeplik and OpenRouter. **Discrepancy flagged:** Upstage's dedicated release article on Artificial Analysis lists **1M context and 262k max output**, contradicting every first-party and provider source. **The first-party 524,288 / 128K is used here**, and the AA figures are not credited.
- **Modalities:** **Text in → text out only.** Zeplik explicitly records "Vision (image input): No"; aimlapi lists `Text → Text`. Reasoning: **yes, mode available**. Languages: **English, Korean (fluent) and Japanese** — Korean is the standout, consistent with Upstage's sovereign-AI positioning. Capabilities per Upstage Console: Chat, structured outputs, tool calling, reasoning, streaming, and **parallel tool calling**.
- **Pricing (as of 2026-10-09):** Upstage standard **$0.10 in / $0.40 out / $0.01 cached** per 1M, currently **50% off through 2026-10-22 (UTC)**. Third-party resellers charge more (aimlapi: $0.13754/$0.55016/$0.013754). **Free on Hermes Agent** for a limited time from 2026-10-05. No general Free API tier.
- **Architecture:** **Proprietary — weights not released.** **35B total / 3B active** MoE. Upstage reports the parameter count; **Artificial Analysis notes that, as a proprietary model, "its size cannot be independently verified."**
- **Privacy:** Upstage states **API input data is not collected, not used for model training, and not stored** unless required for service delivery and explicitly stated — a materially better data posture than most inference providers.

### Raw benchmarks found

> Independent figures are from Artificial Analysis (release article, 2026-09-30, and Index v4.3.2). Vendor figures are from Upstage's launch blog.

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 24.1** (Index v4.3.2) — **the highest score among all models with 3B active parameters**. For calibration: **+16 points over Upstage's own previous-generation flagship Solar Pro 3 (8)**; **6 points above Qwen3.6 35B-A3B (Reasoning)**, which has the same 3B active parameters; **1 point above Nemotron 3 Ultra**, which has 55B active; **below K2 Horizon MoVA 36B-A4B (25 with 4B active)**.
- **AA-LCR: 83.3%** — strong long-context reasoning, and one of the model's better absolute numbers (Upstage's own blog cites the same 83.3%)
- **AA-Omniscience: −11, with Accuracy of just 18%** — but a **non-hallucination rate of 64%**, well ahead of Inkling (xhigh) at 32% and GPT-6 Luna (max) at 23%. Artificial Analysis's read: the model **abstains on about half of questions** rather than guessing. That is a genuine reliability trait, but it means low accuracy driven by caution, not by knowledge.
- Token verbosity: **88k output tokens per Intelligence Index task**, averaging **7.1 minutes per task** — the slowest-task profile in its class despite fast raw throughput
- Upstage's own summary: "leading overall performance among the 3B-active models evaluated"
- GPQA Diamond / HLE / MMLU-Pro / CritPt: **no verified public score found** for this model

Agent / tool use:

- **τ³-Banking: 47.2** (Upstage launch blog; described as "a separate benchmark of policy application and tool use across multi-turn interactions")
- **AutomationBench-AA: 22%** (Artificial Analysis) — low
- **GDPval-AA: 1072 Elo** (Artificial Analysis)
- **AA-Briefcase: 872 Elo** (Artificial Analysis) — described as "close to Inkling (xhigh)"
- **Terminal-Bench 4.0: 1%** (Artificial Analysis) — AA states plainly: *"**Agentic coding is a relative weakness**"*
- Tau2-Bench other domains, OSWorld, Claw-Eval / ClawProBench: no verified public score found
- Tool calling and **parallel tool calling** are both supported — a genuine capability with no published benchmark attached

Coding:

- **SciCode: 47.6%** (Upstage blog; Artificial Analysis and Upstage agree)
- **Terminal-Bench 4.0: 1%** (see above)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / DeepSWE / Vibe Code Bench: **no verified public score found for this model**
- Upstage's own positioning is code *review*, *test generation* and *mechanical migrations* across a mid-sized codebase (per aimlapi's use-case writeup) — not frontier code generation

Long context:

- **524,288 tokens native** with up to 128K output, per first-party docs.
- **AA-LCR at 83.3%** is real, independent long-context retrieval evidence and is one of the model's strongest measured numbers — notably *better* than its Intelligence Index, which is unusual and suggests the architecture handles retrieval better than it handles reasoning.
- No MRCR / RULER / GraphWalks numbers.

Speed / cost efficiency inputs (Artificial Analysis, the most important caveat in this report):

- Output speed: **208 tokens/s** at launch — faster than GPT-6 Luna (max) at 152 tokens/s
- **Cost per Intelligence Index task: $0.36**, versus **$0.07 for GPT-6 Luna (max)** — i.e. AA finds it costs **~5× more per completed task** despite broadly similar per-token prices. AA's release headline states this plainly.
- Root cause per AA: **88k output tokens per task** plus a **48% cache hit rate on repeated context**, versus 99% for GPT-6 Luna. Uncached input alone is $0.30 of the $0.36 total. Agentic tasks resend the growing conversation each turn, so cache behavior dominates real cost.
- Upstage's own counter-comparison: 1,000 task sets cost **$1.25 with Solar Mini 4 vs $2.20 with MiMo-V2.5** (~43% cheaper) — but Upstage concedes Solar Mini 4 was called **directly through the Upstage API while MiMo-V2.5 went through a third-party router**, and that **latency was excluded** from the comparison. Treat the 43% figure as workload- and harness-specific, not general.

### Normalized scores (1–100)

- **Tool use: 58/100.** **τ³-Banking 47.2**, **GDPval-AA 1072 Elo**, **AA-Briefcase 872 Elo** and **AutomationBench-AA 22%** describe a functional but small agent, and **parallel tool calling** is genuinely supported. Capped by **Terminal-Bench 4.0 at 1%** — which Artificial Analysis explicitly labels a relative weakness — and by the absence of Tau2-Bench other domains, OSWorld, Claw-Eval and any tool-orchestration benchmark.
- **Reasoning: 70/100.** **AA Intelligence Index 24.1 is the best in the 3B-active class** (+16 over Upstage's own prior flagship) and **AA-LCR 83.3%** is genuinely strong. Held to 70 by **AA-Omniscience at −11 with only 18% accuracy**, the **7.1-minute average task time**, **88k output tokens per task**, and the complete absence of GPQA Diamond, HLE or MMLU-Pro data. The high non-hallucination rate of 64% is a real plus for safety-critical deployment and is credited in the reasoning judgment, not as a capability score.
- **Context window: 88/100.** **524,288 tokens native** (first-party) — upper-mid tier — with **AA-LCR 83.3%** as strong, independent retrieval evidence. Not credited the 1M/262k that AA's release article claims, since every first-party and provider source says 524K/128K and the discrepancy is unresolved.
- **Multimodal: 15/100.** **Text-only**, explicitly confirmed by Zeplik ("Vision (image input): No") and aimlapi (`Text → Text`). Floor score by methodology. Upstage's vision-capable line is a separate model.
- **Coding: 55/100.** **SciCode 47.6%** is respectable for the class, and Upstage targets code review, test generation and mechanical migrations rather than frontier generation. Capped hard by **Terminal-Bench 4.0 at 1%**, Artificial Analysis's explicit "agentic coding is a relative weakness" verdict, and **no SWE-bench, SWE-bench Pro, LiveCodeBench or DeepSWE figure existing** for this model.
- **Cost efficiency: 94/100.** **$0.10 in / $0.40 out / $0.01 cached** is genuinely cheap, currently **50% off through 2026-10-22**, **free on Hermes Agent** from 2026-10-05, and available **on-premises** — plus Upstage's unusually strong privacy posture (no data collected, trained on, or stored). Held at 94 rather than 96+ because **Artificial Analysis measures $0.36 per completed task versus GPT-6 Luna's $0.07**, so the per-token tariff materially overstates the real economics for agentic loops: **88k output tokens per task** and a **48% cache hit rate** (versus GPT-6 Luna's 99%) are the real cost drivers, and the 50% discount expires 2026-10-22.
- **Overall Score: 57/100.** Best fit: **very high-volume, repetitive, latency-tolerant agentic work — document parsing, structured extraction, classification and rule-based validation loops — where Upstage's Korean fluency, 512K context, strong AA-LCR, on-premises option and no-data-collection posture are decisive.** Not the pick for agentic coding (Terminal-Bench 4.0 = 1%), for factual recall (18% omniscience accuracy, by choice), or for anything latency-sensitive: 7.1 minutes per task is slow despite 208 tokens/s. Verify the post-2026-10-22 price and measure real cache behavior on your own workload before committing, because Artificial Analysis finds it ~5× dearer per task than the headline tariff suggests.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research cross-checked across **Upstage's official Solar Mini 4 launch blog** (AA-LCR 83.3%, SciCode 47.6%, τ³-Banking 47.2, pricing, and the MiMo-V2.5 cost comparison with its own caveats), **Upstage Console's official model documentation** (35B/3B active, 524K context, 128K max output, February 2026 training cut-off, English/Korean/Japanese, structured outputs, tool calling, reasoning, snapshot `solar-mini4-260922`, the 50%-off-through-Oct-22 banner, and the no-data-collected privacy terms), **Artificial Analysis's dedicated release article** (Index 24.1 and its full sub-benchmark breakdown, the 3B-active Pareto comparison, 208 tokens/s, 88k output tokens per task, 7.1 min/task, **$0.36 vs GPT-6 Luna's $0.07 cost per task**, 48% vs 99% cache hit rate, the −11 Omniscience with 18% accuracy and 64% non-hallucination rate, and the "agentic coding is a relative weakness" verdict), OpenRouter and aimlapi model pages, and Zeplik's spec listing (including the explicit "Vision: No"). Explicitly flagged the unresolved **524K-vs-1M context conflict**, choosing the first-party figure, and reproduced Artificial Analysis's per-task cost finding against the headline per-token price. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Solar_Mini_4.1.md`, using the same headings — worth re-scoring after the 2026-10-22 discount ends (to capture the true steady-state price), if Upstage ever releases weights, and if any SWE-bench or Terminal-Bench 2.1/3.0 number appears, since coding is currently evidenced by a single SciCode figure and a 1% Terminal-Bench 4.0.