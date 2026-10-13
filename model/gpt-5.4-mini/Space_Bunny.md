# GPT-5.4 mini — findings by Space Bunny

- Source: OpenAI (`gpt-5.4-mini`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Overall moves 76 → 75 on a much fuller record: 95 results on 49
> benchmarks, 30 independently verified, 54 aggregator, 11 vendor-reported, from 13
> sources, latest 2026-10-12.** The previous version said outright that this model
> "cannot be placed relative to peers at all," because AIME, FrontierMath, ARC-AGI and
> the Artificial Analysis Intelligence Index were all absent. **All four now exist**, and
> the reason it can be placed is not flattering: **ARC-AGI-2 is 18.90% (Verified)** and
> **FrontierMath Tier 4 is 9.76% (Verified)** on a model whose **Tier 1–3 reads 51.23%**.
> Meanwhile **Terminal-Bench 4.0 is 2.02%**, **Legal Agent Benchmark 0.00%**, and the
> **AA Agentic Index at `xhigh` (19.65) is lower than at `medium` (40.27)** — more tokens
> making the agent worse, which is the most interesting single finding in this file.

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** OpenAI's small-model tier of the GPT-5.4 generation, released 2026-03-17 alongside GPT-5.4 nano. Positioned as the **default production small model for high-volume agentic and coding workloads** — a model a GPT-5.4 orchestrator can delegate parallel subtasks to at a fraction of flagship quota, while retaining desktop-computer operation at human parity. Four reasoning-effort settings: **`none` / `low` / `medium` / `high` / `xhigh`**. Not a variant or alias of another entry in this dataset.
- **Provider / access:** OpenAI API — Responses API and Chat Completions. ChatGPT, Codex, Azure OpenAI, AWS Bedrock, Google Vertex AI, OpenRouter.
- **Release / knowledge:** released **2026-03-17**. Knowledge cutoff as published in OpenAI's developer documentation.
- **IDs:** `gpt-5.4-mini`; dated snapshot `gpt-5.4-mini-2026-03-17`; per-effort IDs including `gpt-5-4-mini-medium`, `gpt-5.4-mini-high`, and a non-reasoning track `gpt-5-4-mini-non-reasoning`; batch `gpt-5.4-mini:batch`.
- **Context window:** **400,000 tokens input, 128,000 tokens max output** (OpenAI developer docs).
- **Modalities:** **text and image in; text out.** Reasoning: yes, switchable across five settings. Tool calling, function calling, web search, structured output / JSON schema, prompt caching and computer use supported. No documented audio or video input.
- **Pricing (as of 2026-10-13):** **$0.75 / MTok input, $4.50 / MTok output**, cached input **$0.075**, Batch pricing at a further discount. Confirmed identical at Artificial Analysis and OpenAI-via-OpenRouter on 2026-10-13. **Vector Wire's field-relative reading: "costs more than 69% of 328 priced models"** at a 3:1 blend. Also relevant and not on the rate card: **in Codex it consumes only 30% of the GPT-5.4 quota**.
- **Architecture:** proprietary. Parameter count not disclosed.

### Raw benchmarks found

> Source ledger: 95 results / 49 benchmarks / 13 sources on 9 sites — **30
> independently verified, 54 aggregator, 11 vendor-reported**. Vector Wire rates **Long
> Context "Capable, −16.6%"** as the model's single best capability, and **six
> capabilities "Limited"** — Reasoning −27.7%, Multimodal −30.6%, Agentic −35.7%,
> Coding −35.8%, Instruction Following −36.3%, **Math −53.2%** — with **Safety,
> Multilingual and Factuality "too few results yet."**

Agent / tool use — **the agentic picture is materially worse than the previous version recorded**:

- **OSWorld-Verified: 72.10%** — confirms, and this remains the model's best agentic result, sitting at the ~72.4% human baseline Lets Data Science cites.
- **MCP Atlas: 56.70% — Verified** (Scale Labs, 2026-10-12).
- **AA Agentic Index: 19.65 at `xhigh`, against 40.27 at `medium` and 25.01 with no reasoning.** **This inversion is the most interesting finding in the file**: raising reasoning effort from `medium` to `xhigh` appears to *halve* measured agentic performance. It is a single aggregator index rather than a verified measurement, so it is recorded as an anomaly worth testing rather than as established fact — but it is the kind of thing that matters enormously for a model whose main use case is delegation from an orchestrator.
- **Terminal-Bench 4.0: 2.02%.** New benchmark, and effectively a zero.
- **Legal Agent Benchmark: 0.00%. Finance Agent v2: 45.36%.**
- **GDPval win rate: 25.58%** at `xhigh` (40.76% medium, 4.46% no-reasoning) — the same effort inversion.
- **τ-Bench V3 Banking: 25.57%. AA IT-Bench SRE: 35.22%** at `xhigh`, 18.64% no-reasoning. **AA ApexAgents: 28.17%.**
- **Toolathlon 42.90%** — confirms the previous version's figure, which it used as the cap on the tool-use score.
- **τ²-Bench Telecom: 83.33%** at `xhigh` (36.55% medium, 23.39% no-reasoning). **This corrects the previous version's 93.4% downward by roughly 10 points.**
- **LiveBench Agentic Coding: 41.67% — Verified.**

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 24.07** at `xhigh` (19.75 medium, 11.14 no-reasoning) — **first measurement**, and it places mini below GPT-5.1's 25.00 Verified and well below GPT-5.2's 42.00 Verified.
- **GPQA Diamond: 87.47%** at `xhigh` — confirms 88.0%, and sits below the methodology's 90% frontier threshold.
- **ARC-AGI-2: 18.90% — Verified** at `xhigh` (13.19% high, 4.44% medium, **1.11% low**). **ARC-AGI-1: 63.67% — Verified** at `xhigh` (58.00% high, 40.83% medium, 13.00% low). Both first measurements.
- **FrontierMath Tiers 1–3 (v2): 51.23% — Verified** at `xhigh` (24.56% low, 17.19% no-reasoning). **A strong result for a small model — it exceeds GPT-5.2's 40.30% vendor figure on the v1 scale.** **FrontierMath Tier 4: 9.76% — Verified** at `xhigh`, with 2.08% at an earlier date. **The Tier 1–3 / Tier 4 split is the story: 51.23% against 9.76%.**
- **Humanity's Last Exam: 28.13%** at `xhigh` (18.58% medium, 5.89% none) — confirms 28.2%. **CritPt: 10.00%** at `xhigh`.
- **LiveBench (all Verified at `xhigh`): Reasoning 71.32, Mathematics 78.46, Coding 71.62, Instruction Following 59.80, Agentic Coding 41.67, Data Analysis 70.79, Language 70.95.** A new suite in this file, internally consistent, and the reasoning/math components are the strongest evidence mini has.
- **IFBench: 73.27%** at `xhigh`. **Arena Elo: 1449 — Verified** (2026-07-23), notably **above GPT-5.2's 1437** and GPT-5.1's 1439.
- **AA-Omniscience: −18.92** at `xhigh` (−20.62 medium, **−45.42** no-reasoning) — deeply negative, and worse than GPT-5.2's −0.88 or GPT-5.3-Codex's +10.87.
- **SimpleQA Verified: 29.40% — Verified** (Epoch) — low.

Long context:

- **AA-LCR v1.1: 77.00%** at `xhigh` (67.00% medium, 37.00% no-reasoning) — **first measurement**, and it corroborates the OpenAI-published GraphWalks numbers rather than the MRCR collapse.
- **OpenAI's own published retrieval measurements stand**: **MRCR 47.7% at 64K–128K and 33.6% at 128K–256K**; **GraphWalks BFS 76.3%** and **GraphWalks parents 71.5%** at 0–128K. Against GPT-5.4's 86.0 / 79.3 / 93.1 / 89.8, mini gives up 15–20 points on each.

Coding:

- **SWE-bench Pro: 54.40%** — confirms exactly, and remains a genuinely strong result for a small model (a 3.3-point gap to a flagship priced at more than three times the input rate).
- **AA Coding Index: 56.08** at `xhigh` (37.46 medium, 25.32 none) — **the highest Artificial Analysis Coding Index of any model examined in this batch**, ahead of GPT-5.3-Codex's 53.10 and GPT-5.2's 48.67. A real point in mini's favour.
- **Terminal-Bench 2.1: 59.18%. Terminal-Bench 2.0: 60.00%** — confirms 60.0%. **Terminal-Bench Hard: 52.27%** at `xhigh`. **Terminal-Bench 4.0: 2.02%.**
- **SciCode: 52.08%** at `xhigh` (44.21 medium, 39.58 none) — first, and identical to GPT-5.2's figure.
- **LMArena WebDev Elo: 1397.35 — Verified** (2026-09-21), below GPT-5.2's 1415.99 and GPT-5.3-Codex's 1408.60.
- SWE-bench Verified / LiveCodeBench / DeepSWE / Aider Polyglot: still **no verified public score found**.

Factuality:

- **Vectara (Verified, snapshot 20260317): HHEM hallucination rate 5.50 — the lowest of any model in this batch** — answer rate 100.00%, **factual consistency 94.50%**, average summary length 54.70 words. This is the model's cleanest dimension and is worth stating plainly, since it sits against Omniscience's −18.92.
- Omniscience accuracy 37.47% at `xhigh` against **non-hallucination 9.83%** — the same wide split seen across the GPT-5 family, and here with a negative overall index.

Vision / multimodal:

- **MMMU-Pro: 73.29%** at `xhigh` (71.16 medium, 60.46 none), against the **76.60%** vendor figure the previous version used — a modest 3.3-point downward correction.
- **LMArena Vision Elo: 1245.01 — Verified** (2026-09-21) and **1256 — Verified** (2026-06-17) — **first measurements**, and strong human-preference results.
- **OmniDocBench 1.5: 87.37%** (vendor) — confirms the previous version's edit-distance 0.1263 reading, with GPT-5.4 at 0.109 and GPT-5 mini at 0.1791.

### Normalized scores (1–100)

- **Tool use: 72/100.** *Revised down from 78.* **OSWorld-Verified at 72.10%** still sits at the human baseline and remains the reason this model can substitute for a flagship on desktop automation, and **MCP Atlas 56.70% (Verified)** is a solid independent number. But the previous version scored this on the strength of **τ²-bench telecom 93.4%**, which **the current record puts at 83.33%** — a ~10-point downward correction on the model's second-best agentic row. New evidence is mostly poor: **Terminal-Bench 4.0 at 2.02%**, **Legal Agent Benchmark 0.00%**, **Finance Agent v2 45.36%**, **τ-Bench V3 Banking 25.57%**, **AA IT-Bench SRE 35.22%**, **AA ApexAgents 28.17%**, **GDPval win rate 25.58%**, **LiveBench Agentic Coding 41.67% (Verified)**, and **Toolathlon 42.90%**, which the previous version had already used as the cap. The single most consequential item is the **AA Agentic Index inversion — 19.65 at `xhigh` against 40.27 at `medium`** — because it bears directly on how an orchestrator should configure a delegated subagent. It rests on one aggregator index rather than verified measurement, so it is flagged as an anomaly to test rather than treated as settled. Vector Wire: **"Agentic — Limited, 35.7% behind the leader."**
- **Reasoning: 76/100.** *Revised down from 76 — held, on fuller evidence.* The old score carried an explicit limitation — *"a total absence of AIME, FrontierMath, ARC-AGI and Intelligence Index figures — on today's index family this model cannot be placed relative to peers at all"* — and that limitation is now removed, but the placement it permits is mixed. **FrontierMath Tiers 1–3 (v2) at 51.23% (Verified)** is the strongest result and beats GPT-5.2's vendor figure; **LiveBench Reasoning 71.32 and Mathematics 78.46 (both Verified)**, **GPQA 87.47%**, **IFBench 73.27%** and **Arena Elo 1449 (Verified)** are all respectable. Against: **ARC-AGI-2 at 18.90% (Verified)** — abstract reasoning is effectively absent — **FrontierMath Tier 4 at 9.76% (Verified)**, **AA Intelligence Index 24.07**, below GPT-5.1's verified 25.00, **Omniscience −18.92**, **non-hallucination 9.83%**, **SimpleQA 29.40%** and **HLE 28.13%**. The score is unchanged because the gains and losses roughly balance; what changed is that the reasoning is now anchored rather than provisional.
- **Context window: 80/100.** *Revised up from 74.* **400,000 tokens in, 128,000 out**, and unusually the evidence behind the spec is real and multi-sourced. OpenAI's own published measurements — **MRCR 47.7% at 64K–128K and 33.6% at 128K–256K**, **GraphWalks BFS 76.3% and parents 71.5%** — are now joined by **AA-LCR 77.00% at `xhigh`**, an independent measurement that **corroborates the GraphWalks figures rather than the MRCR collapse**. **Vector Wire rates Long Context "Capable, −16.6% behind the leader," the model's single best capability.** Still short of the band's 84 ceiling because MRCR's degradation with length is real and measured, and mini gives up 15–20 points to GPT-5.4 on all four OpenAI-published figures.
- **Multimodal: 74/100.** *Revised up from 70.* **Text and image in; text out.** **MMMU-Pro 73.29%** confirms roughly the previous figure with a modest 3.3-point downward correction against the vendor number. What moves the score is new human-preference evidence: **two Verified LMArena Vision Elo readings, 1245.01 and 1256**, which put mini's vision handling in the same range as models far more expensive than it, plus **OmniDocBench 1.5 at 87.37%**. Capped at 74 by the methodology's ceiling for non-audio input — no audio, video or PDF input is documented, so the 75–90 band is unreachable regardless of quality. Vector Wire: **"Multimodal — Limited, −30.6%."**
- **Coding: 74/100.** *Revised down from 78.* **SWE-bench Pro 54.40%** confirms exactly and remains the strongest single result — a 3.3-point gap to a flagship at three times the input rate, on the harder four-language contamination-resistant harness. **The AA Coding Index at 56.08 is the highest of any model in this batch**, ahead of GPT-5.3-Codex and GPT-5.2, and is a genuine point in mini's favour. What pulls the score down is the terminal-agent picture, which is now measured properly: **Terminal-Bench 2.1 at 59.18%**, **Terminal-Bench 2.0 at 60.00%** against flagship 75.1%, **Terminal-Bench Hard at 52.27%**, **LiveBench Coding 71.62% but Agentic Coding 41.67% (both Verified)**, **LMArena WebDev Elo 1397.35 (Verified)** below both GPT-5.2 and GPT-5.3-Codex, and **Terminal-Bench 4.0 at 2.02%**. The pattern the previous version identified — *"it writes good patches faster than the flagship; it does not drive a terminal as well"* — is confirmed and sharpened. Vector Wire: **"Coding — Limited, −35.8%."**
- **Cost efficiency: 86/100.** *Revised down from 90.* Unchanged rate card at **$0.75 / $4.50** with a **$0.075** cache hit and published Batch discount, confirmed identical at both providers on 2026-10-13. **"Costs more than 69% of 328 priced models"** tempers the rate-card reading, and the previous version's caveats stand and are unaffected by the new evidence: **pricing is ~3× GPT-5 mini's $0.25/$2.00**, so any pipeline budgeted on the previous generation sees a 3× bill; and **in Codex it consumes only 30% of the GPT-5.4 quota**, which is a per-task figure far better than the per-token rates suggest. Still the best cost/quality point in the OpenAI small-model line; not the cheapest model on the market.
- **Overall Score: 75/100.** (72 + 76 + 80 + 74 + 74) / 5 = 376 / 5 = 75.2 → **75**, down from 76. **Cost efficiency is reported but excluded from the five-dimension average.** The overall moves one point down on a record that is now three times larger and, for the first time, sufficient to place this model against its peers — and what that placement shows is a model that is **excellent at the cheap things (desktop automation at human parity, hallucination rate 5.50, patch generation near-flagship, long-context retrieval in the high 70s) and weak at the expensive ones (abstract reasoning at 18.90%, frontier maths Tier 4 at 9.76%, agentic reliability where Terminal-Bench 4.0 reads 2.02% and Legal Agent reads 0.00%)**. Best fit, refined: **the default production small model for high-volume delegation, desktop automation, document extraction and patch generation at 400K context** — a GPT-5.4 orchestrator fanning out subtasks at 30% of flagship quota. Two practical cautions the new evidence adds: **configure delegated subtasks at `medium` rather than `xhigh`**, given the AA Agentic Index inversion; and **do not use it for legal or finance agent workflows, where the recorded figures are 0.00% and 45.36%.**

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (76 → **75**).
  New evidence is concentrated in **Vector Wire's GPT-5.4 mini record**, fetched 2026-10-13:
  **95 results on 49 benchmarks from 13 sources on 9 sites — 30 independently verified,
  54 aggregator, 11 vendor-reported, latest 2026-10-12** — supplying the field-relative
  price reading and the per-capability verdicts (**Long Context "Capable, −16.6%"**, six
  "Limited" including **Math at −53.2%**, three unrated).
  Load-bearing figures: **AA-LCR 77.00%**, **ARC-AGI-2 18.90% and ARC-AGI-1 63.67% (both
  Verified)**, **FrontierMath Tiers 1–3 (v2) 51.23% and Tier 4 9.76% (both Verified)**,
  **AA Intelligence Index 24.07**, **GPQA 87.47%**, **HLE 28.13%**, **CritPt 10.00%**,
  **IFBench 73.27%**, **Arena Elo 1449 (Verified)**, **the full LiveBench suite at
  `xhigh` — Reasoning 71.32, Mathematics 78.46, Coding 71.62, Instruction Following
  59.80, Agentic Coding 41.67, Data Analysis 70.79, Language 70.95, all Verified**,
  **AA-Omniscience −18.92** with accuracy 37.47% against non-hallucination 9.83%,
  **SimpleQA Verified 29.40% (Verified, Epoch)**, **Vectara HHEM 5.50 with factual
  consistency 94.50% (Verified)**, **OSWorld-Verified 72.10%**, **MCP Atlas 56.70%
  (Verified, Scale Labs)**, **AA Agentic Index 19.65 (`xhigh`) against 40.27 (`medium`)**,
  **GDPval win rate 25.58%**, **τ-Bench V3 Banking 25.57%**, **AA IT-Bench SRE 35.22%**,
  **AA ApexAgents 28.17%**, **Terminal-Bench 4.0 2.02%**, **Terminal-Bench 2.1 59.18%**,
  **Terminal-Bench 2.0 60.00%**, **Terminal-Bench Hard 52.27%**, **Legal Agent Benchmark
  0.00%**, **Finance Agent v2 45.36%**, **Toolathlon 42.90%**, **SciCode 52.08%**,
  **AA Coding Index 56.08 (highest in the batch)**, **LMArena WebDev Elo 1397.35
  (Verified)**, **τ²-Bench Telecom 83.33%**, **MMMU-Pro 73.29%**, **two Verified LMArena
  Vision Elo readings (1245.01 / 1256)**, **OmniDocBench 1.5 87.37%**.
  **Two corrections and one anomaly adjudicated explicitly.** First:
  **τ²-Bench Telecom — the previous version's 93.4% against the current record's 83.33%**
  at `xhigh`; the current figure is used, and this is what drives tool use down 6 points
  alongside the new Terminal-Bench 4.0, Legal Agent and banking rows. Second: **MMMU-Pro
  — 73.29% aggregator against the 76.60% vendor figure** the previous version used; the
  aggregator figure is preferred, a 3.3-point downward correction that does not move the
  multimodal score because the new LMArena Vision Elo readings more than offset it. Third,
  recorded as an **anomaly rather than a finding**: the **AA Agentic Index is lower at
  `xhigh` (19.65) than at `medium` (40.27)**, and the same inversion appears on GDPval win
  rate (25.58% vs 40.76%). This rests on a single aggregator index rather than verified
  measurement, so it is flagged as something to test on your own workloads rather than
  treated as established. Scores are normalized 1–100 interpretations per
  `model-comparison.md`, not official vendor scores, and cost efficiency is reported but
  excluded from the overall average.
- Future sources: add a new file next to this one, e.g. `GPT_5_4_Mini_Recheck.md`, using
  the same headings — **the `none` / `low` / `medium` effort tiers are now worth scoring
  separately**, since the agentic inversion between `medium` and `xhigh` means the API
  default and the strongest listed setting give materially different models. **SWE-bench
  Verified and LiveCodeBench remain absent** and are the two measurements most worth
  adding.