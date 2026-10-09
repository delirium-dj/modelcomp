# MAI-Code-1-Flash — findings by Space Bunny

- Source: Microsoft / GitHub Copilot (`mai-code-1-flash-picker`, `github_copilot/mai-code-1-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Successor note:** this model was **superseded on 2026-08-11 by MAI-Code-1.1-Flash**, which costs a quarter as much, adds image input, uses 25% fewer tokens per task, and improves SWE-bench Verified to 72.6% and Terminal-Bench 2.1 to 62.9%. Both have their own folders. This report covers the original `MAI-Code-1-Flash` only; no 1.1 number is folded in.

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft AI's **small, fast coding specialist**, introduced at Build 2026 (**2026-06-02**) and now generally available across GitHub Copilot. Explicitly **"built for developers, not benchmarks"** — trained directly with the **GitHub Copilot production harnesses**. Its pitch is **token efficiency**: adaptive solution-length control keeps responses concise and solves harder problems with **up to 60% fewer tokens**. Microsoft launched it on the claim that it beats Claude Haiku 4.5 on *every* coding benchmark tested while using fewer tokens. Top use case: high-volume, low-latency agentic coding inside Copilot and VS Code. It is a coding specialist, **not** a general frontier model — BenchmarkList notes "Opus, GPT, and Gemini remain broader choices for research and non-code work."
- **Provider / access:** **GitHub Copilot only** — a single route, model ID `mai-code-1-flash-picker` (Models.dev family key) / `github_copilot/mai-code-1-flash`. Individual users can select it in the VS Code model picker or let Copilot auto-route to it; **Copilot Enterprise and Copilot Business administrators must first enable the MAI-Code-1-Flash policy in Copilot settings**. Not available as a standalone pay-per-token API elsewhere. No OpenCode Zen ID found.
- **Release / knowledge:** Released **2026-06-02** (Microsoft Build 2026); GitHub Models listing last updated 2026-06-08. **Knowledge cutoff: 2025-12** (Models.dev via ModelBench).
- **IDs:** `mai-code-1-flash-picker` (GitHub Copilot model-picker ID), `github_copilot/mai-code-1-flash`, `microsoft/mai-code-1-flash`
- **Context window:** **Conflicting across sources — flagged.** ModelBench's **source-linked GitHub Copilot provider row** and TypingMind's Copilot cost page both give **256K context with 128K max output**; **CloudPrice lists 128K context with 64K max output**. The source-linked provider row is preferred, so **256K is used here**, but the discrepancy is real and unexplained.
- **Modalities:** **Text in → text out only.** ModelBench records "Vision input: No" and "Attachments: No"; CloudPrice lists text as the sole input and output modality (1 of 5 each). Reasoning: **adaptive** — stays concise on simple requests, spends more reasoning budget on complex repository changes, refactors, debugging and tool-using agent tasks. Tool calls / function calling: yes. Structured output: yes. Temperature control: yes.
- **Pricing (as of 2026-10-09):** **$0.75 in / $4.50 out per 1M**, **cache read $0.075** (GitHub Copilot / GitHub Models). This is the **original** tariff — the 2026-08-11 successor MAI-Code-1.1-Flash dropped it to $0.20 / $1.20 / $0.02, i.e. a quarter of the cost. Paid only; no Free tier. BenchmarkList separately notes "Price not published," reflecting that Microsoft markets the model through Copilot subscriptions rather than a standalone tariff.
- **Architecture:** proprietary closed weights — **weights not released**. **~137–138B total parameters, ~5B active**, MoE. Microsoft publicly stated "5B parameters"; a third-party reading of the launch material describes it as a 137B-parameter MoE with 256K context trained on 10T+ tokens — the two reconcile if 5B refers to *active* parameters, which is the more plausible reading, but the sources do not fully reconcile it. Trained with adaptive solution-length control and, per Microsoft, using the GitHub Copilot production harness.

### Raw benchmarks found

> All seven published scores are **Microsoft first-party** (BenchmarkList records them as "7 score rows · 7 first-party"). Microsoft's launch tweet gives the Claude Haiku 4.5 comparison directly.

Coding:

- **SWE-bench Verified: 71.6%** — vs **Claude Haiku 4.5 66.6%** (Microsoft's own launch comparison). Independent rank **35 of 46** (24th percentile). Microsoft: solves harder problems with **up to 60% fewer tokens**.
- **SWE-bench Pro: 51.2%** — vs **Claude Haiku 4.5 35.2%**, a **+16 point lead** per Microsoft. Independent rank **43 of 49** (13th percentile); BenchmarkList's category comparison notes this is **−87.5 points behind Claude Fable 5.1 (81.2)**.
- **Terminal-Bench 2.0: 54.8%** — vs **Claude Haiku 4.5 41.6%** per Microsoft. Independent rank **20 of 68** (72nd percentile — its best relative coding rank).
- **SWE-bench Multilingual: 65.5%** — independent rank **40 of 46** (13th percentile); BenchmarkList notes **−84.4 points behind Opus 5 (89.5)**.
- **ArtifactsBench: 36.4%** — an automated multimodal evaluation of visual and interactive artifact generation from code, MLLM-judged over 1,825 tasks. **Field leader (8 of 8)** — the only benchmark where this model tops its field.
- Terminal-Bench 2.1 / 3.0 / 4.0: no verified public score found for this checkpoint (the 2.1 figure of 62.9% belongs to the 1.1 successor)
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: no verified public score found
- Coding composite (llm-stats): **19.8** (#96 of 5 evals) — low; GLM-5 at 26.1 (#62) beats it on both shared benchmarks (SWE-Bench Verified, Terminal-Bench 2.0)

Reasoning / knowledge:

- **AIME 2026: 92.5%** — independent rank **25 of 36** (31st percentile), vs Claude Fable 5 at 99.9 (**−7.4 points**). Strong competition math for a 5B-active coding model.
- **IFBench: 75.0%** — field leader (1 of 1, 100th percentile). Microsoft reports it **leads Claude Haiku 4.5 by 28.9 points on IF-Bench** and by **14.5 points on Advanced IF** (precise instruction following).
- Math composite: 31st percentile (single eval)
- GPQA Diamond / HLE / MMLU-Pro: **no verified public score found for this model**
- CritPt / Omniscience / AA Intelligence Index: no verified public score found. llm-stats lists a low-confidence Reasoning composite of 29.0 (#115) over 9 evals
- LongFact / GraphWalks / AIR-Bench: **not published for this model** — llm-stats attributes LongFact 98.0, GraphWalks 90.0 and AIR-Bench 88.0 to **MAI-Thinking-1**, a different model; those numbers are explicitly not imported here.

Agent / tool use:

- Terminal-Bench 2.0: **54.8%** (see above) — the only published agentic-terminal figure
- Tool calling: supported and a first-class design target ("tool-using agent tasks")
- Agents composite (llm-stats): **10.9** (#101 of 2 evals); GLM-5 at 19.2 (#57) leads it
- Tau3-Banking / Tau2-Bench, GDPval-AA, OSWorld, AutomationBench: **no verified public score found**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Production evidence: the model is in live GitHub Copilot service across VS Code and JetBrains surfaces, trained on the real harness — a qualitative signal no benchmark captures

Long context:

- 256K context per the source-linked provider row (128K per CloudPrice — see the flag above). **No long-context retrieval benchmark — MRCR, RULER, LongBench or AA-LCR — exists for this model.**

Instruction following and safety:

- IFBench 75.0% (field leader) plus Microsoft's Advanced IF claim (+14.5 pts over Haiku 4.5) are the model's clearest relative strengths.
- **Microsoft's own documentation states that accuracy on core adversarial categories, "such as the Einstellung trap," remains below 50%** — an explicitly acknowledged area for further improvement, relevant to any agentic deployment.
- **ECI (BenchmarkList composite): 138.56, #42 of 398** overall, and **#10 of 158 among open-weight-comparable models** — a respectable mid-field composite in a very crowded ranking.

### Normalized scores (1–100)

- **Tool use: 70/100.** **Terminal-Bench 2.0 at 54.8%** (and its 72nd-percentile rank, the model's best relative coding position) plus **ArtifactsBench 36.4% as field leader** show real agentic and artifact-generation capability, and tool calling is a design target trained on the live Copilot harness. Held to 70 by a near-empty published agentic surface: no Tau3, no GDPval-AA, no OSWorld, no AutomationBench, no Claw-Eval, no MCP-Atlas, an llm-stats Agents composite of only 10.9 (#101), and GLM-5 beating it on both shared benchmarks.
- **Reasoning: 65/100.** **AIME 2026 at 92.5%** and **IFBench at 75.0%** are respectable, and beating Haiku 4.5 by 28.9 points on precise instruction following is a genuine strength. Capped by the total absence of GPQA Diamond, HLE, MMLU-Pro, CritPt or Omniscience data, and by an llm-stats Reasoning composite of only 29.0 (#115). Scored as a coding specialist's expected reasoning profile, not on broad measurement.
- **Context window: 78/100.** **256K** per the source-linked GitHub Copilot provider row — upper-mid tier. Deliberately *not* scored higher: **no long-context retrieval benchmark exists**, the source disagreement (256K vs CloudPrice's 128K) is unresolved, and Microsoft's own efficiency emphasis means the 60%-fewer-tokens behavior is tuned for concision rather than long-context depth.
- **Multimodal: 15/100.** **Text-only**, confirmed by ModelBench ("Vision input: No", "Attachments: No") and CloudPrice. Floor score by methodology. ArtifactsBench is an *output-side* multimodal evaluation of code-generated artifacts — it is not image input, and its 36.4% field-leading score does not move this dimension.
- **Coding: 74/100.** **SWE-bench Verified 71.6%**, **SWE-bench Pro 51.2%** (a +16 point lead over Haiku 4.5), **Terminal-Bench 2.0 54.8%**, **SWE-bench Multilingual 65.5%**, **ArtifactsBench 36.4%** and **AIME 2026 92.5%** form a credible small-model coding profile. Held below the frontier by the **13th-percentile ranks on both SWE-bench Pro and SWE-bench Multilingual**, the **−87.5 and −84.4 point gaps to Fable 5.1 and Opus 5**, the 24th-percentile SWE-bench Verified rank, and a coding composite of only 19.8 (#96).
- **Cost efficiency: 87/100.** **$0.75 in / $4.50 out with $0.075 cache reads** sits close to the ~$1.25/$4.25 reference point (~88). The real cost story is Microsoft's **up-to-60%-fewer-tokens** efficiency claim, which makes effective per-task cost materially better than the tariff suggests — that is precisely how Microsoft beat Haiku 4.5 on every benchmark "while using fewer tokens." Held at 87 rather than 92 because this tariff has already been superseded by the $0.20/$1.20 successor, and there is no Free tier or standalone API.
- **Overall Score: 60/100.** Best fit: **high-volume agentic coding inside GitHub Copilot and VS Code** at launch-era pricing — SWE-bench Verified 71.6% beating Haiku 4.5 with fewer tokens, Terminal-Bench 2.0 54.8%, field-leading ArtifactsBench and IFBench, and Microsoft's acknowledged weakness (below 50% on Einstellung-trap-style adversarial categories) worth checking if you deploy it autonomously. **In practice, choose MAI-Code-1.1-Flash instead** — it is a quarter of the price, adds image input, streams 25% faster and scores higher on both published benchmarks.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research cross-checked across **Microsoft AI's official launch post and X announcement** (2026-06-02, with the direct Claude Haiku 4.5 comparison figures and the up-to-60%-fewer-tokens claim), the `microsoft/MAI-Code` GitHub repository README, **BenchmarkList's model profile** (all seven first-party score rows with independent percentile ranks, the ECI composite of 138.56 / #42 of 398, and the Fable 5.1 and Opus 5 deficit analysis), **ModelBench's source-linked provider record** for the single GitHub Copilot route (256K context, 128K max output, $0.75/$4.50/$0.075, 2025-12 knowledge cutoff, capability flags, and the Copilot policy-enablement requirement), CloudPrice's specification API, TypingMind's Copilot cost page, Gate News' Build coverage (including Microsoft's own admission on Einstellung-trap accuracy), llm-stats comparison pages, and the `microsoft.ai` model index. Kept MAI-Thinking-1's LongFact/GraphWalks/AIR-Bench numbers — which llm-stats surfaces next to this model — **strictly out** of this report, and kept every MAI-Code-1.1-Flash number out of it too. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: this checkpoint is **superseded**. A successor file `MAI_Code_1_Flash_Retest.md` would only be warranted if Microsoft re-issues this ID; the live successor is already covered by the separate `MAI-Code-1.1-Flash` folder.