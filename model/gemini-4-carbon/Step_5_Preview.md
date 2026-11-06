# Gemini 4 Carbon — findings by Step 5 Preview

- Source: Google DeepMind (`Gemini 4 Carbon`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon (Google DeepMind). Successor to Gemini 4 Argon, announced roughly two weeks later.
- **Short description:** Google's strongest model as of 2026-10-28, positioned for **state-of-the-art cybersecurity and long-horizon capabilities** — vulnerability detection, autonomous discovery of complex flaws, exploitability checks and root-cause patching, plus multi-day agentic coding runs on large codebases. Ranks #1 on Artificial Analysis Intelligence Index v5.0.
- **Provider / access:** **Restricted.** Launched first to a subset of cyber defenders, then extended to trusted partners through the **Fairwind Program** (priority to governments/national cyber authorities, critical-infrastructure operators and core technology platforms; background checks, phishing-resistant MFA, tracked usage, no sharing or resale). Google has announced **no general-availability date and no public API model ID**. No OpenCode Zen route (Zen lists `gemini-4-argon` at a 50% introductory discount, not Carbon).
- **Release / knowledge:** announced 2026-10-28; model-card date not published for Carbon; **knowledge cutoff not disclosed** (nor parameter count, architecture or training details).
- **IDs:** no public API ID announced. Vals/Artificial Analysis track it as `Gemini 4 Carbon`.
- **Context window:** **1M tokens** — but this is **third-party reporting only**: Artificial Analysis and Vals both list 1M, while Google's launch post states no context window or output limit (NeuralTrust flags this explicitly). Max output **1,048,576 tokens** per Vals, matching how Argon's card describes a combined 1M input+output window.
- **Modalities:** text, image, **speech and video** input; text output. Reasoning model; no published reasoning-effort naming, tool list or API capability table (those follow the model card, which does not exist yet for Carbon).
- **Pricing (as of 2026-11-04):** introductory **$2 input / $10 output per 1M** with cached input 95% off (**$0.10**). After an **unspecified introductory period** it rises to **$4 / $20** with $0.20 cached. Google gave no end date for the introductory rate, and since access is gated these are planning inputs rather than a purchasable rate. LLMLearner computes a $2.384/1M blended price at 4:1 input:output with 80% cached.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Google's own release table is reproduced below (Google uses its highest thinking setting for all rows, and states the values are "from Google's release comparison, not uniformly Google-run experiments"). Independent Artificial Analysis and Vals AI numbers are listed separately where they differ.

Google's release comparison (Gemini 4 Carbon / Gemini 4 Argon / GPT‑6 Astra / Claude Opus 5.5 / Claude Fable 5.1):

- Artificial Analysis Intelligence Index v5.0: **59** / 50 / 57 / 58 / 49
- Vals Index v2.2: **70.4** / 69.2 / 65 / 70.2 / —
- SWE-sweep: **9.6** / 4.3 / 9.5 / 3.6 / 2.9
- FrontierSWE 2: 61.2 / 55 / **65.5** / 62.3 / 56.3
- Terminal-Bench 4.0 (AA): **65.2** / 57.1 / 59.1 / 59.6 / 52
- Agents' Last Exam v1.1 (Oct-17 task revision, rubric score, 5-hour limit): **77.4** / 69 / 73.1 / 71.6 / —
- OSWorld 2.1 offline (82-task subset, partial score, best of three): 81.5 / 74.7 / 80.9 / **87.2** / 76.8
- AutomationBench (Zapier): **53.9** / 51.3 / 41.4 / 42.5 / 31.4
- Vending-Bench 2 (USD balance): 1,648 / **4,137** / 1,815 / 1,592 / 3,554 — a balance-style metric where higher is better, and Argon leads by a wide margin
- Chartography: **72.5** / 71.6 / 71 / 66.3 / 46.2
- Blueprint-Bench 2: **58.6** / 54.4 / 49.7 / 51.2 / 41.9
- GraphWalks 256K–1M BFS F1 (200 problems): **96.2** / 84.2 / 71.8 / 66.8 / 65
- RiemannBench 80: **76** / 72 / 69.6 / 65.6 / —
- Terminal-Bench Science 0.1 (AA): **64.8** / 52.9 / 63.3 / 59 / 43.3
- CWE-bench v1 (patching): **71.0** / 68 / 68 / 67 / 58
- ExploitGym (10-hour budget): **54.8** / 42 / 42.4 / 34.5 / —
- SEC-bench Pro (finding vulnerabilities): **88.2** / 83.4 / 85.4 / — / —
- Harness caveats stated by Google: cybersecurity evaluations were run **without guardrails**; OSWorld is partial-score best-of-three on the offline subset; ExploitGym's 54.8% uses a 10-hour cap (at 6 hours Carbon scores 53.5%, so it must not be compared with 6-hour results).

Independent evaluations:

- Artificial Analysis: Intelligence Index v5 **59** — Google's own table says 59, while AA's model page reports **60** and #1 of 66 models (a 1-point index-version discrepancy); Coding Agent Index v2.0 **59** with the Antigravity CLI, behind Claude Code + Claude Opus 5.5 at 62; AA-Briefcase **1,609 Elo**; AA-Omniscience v1.1 **54** with **58% accuracy** and an **11% hallucination rate**; **$7.76** per Intelligence Index task and ~123K output tokens per task (**205M** tokens for a full index run against a 64M median — "very verbose"); 30.2 minutes per task (median 12.3) at 68 tok/s and 65.55s time-to-first-answer.
- Vals AI: Vals Index v2.2 **70.36%** ±0.97 (#2 of 29, behind Claude Opus 5.5 at 70.18% by a margin inside the error bar); **Finance Index 66.35% (#1 of 33)**; Legal Index 75.83%; EMB v1.1 76.47%; Finance Agent v2.1 67.16%; **Legal Research Bench 55.77% (#1 of 87)**; Tax Agent Bench 48.86%; Vibe Code Bench v1.1 **89.06%** (#8 of 114); HLAB-Vals-1.1 17.50%; Terminal-Bench 4.0 with Mini-SWE-agent **63.13%** (#3 of 69) — a separate run from AA's figure.
- LLMLearner ranks: CWE-bench v1 **#1/12**, Legal Research Bench **#1/86**, SEC-Bench Pro **#1/10**, AA Index v5.0 **#1/37**, OSWorld 2.1 **#2/15**, Terminal-Bench-Science 64.8 **#2/34**, Chartography 72.5 **#2/16**, Terminal-Bench 4.0 **#3/69**, FrontierSWE v2 61.2 **#4/23**, Vibe Code Bench v1.1 89.1 **#8/114**, GDPx 10.9 **#2/20**, AutomationBench 53.9 **#5/58**, Tax Agent Bench 48.9 **#22/69**.

Safety / alignment (all **Google self-reported**, none independently replicated):

- Gray Swan indirect prompt injection: **0.0%** attack success (Argon: 0.7%). Terminal-Bench "successful cheating": **0.0%** (0.4% of attempts).
- Internal coding: 26% less overreach, 29% less under-service, >2x secure-code generation success rate, and **~80% fewer high-severity misalignment alerts** than Argon.
- Chrome team: >10x better patch generation than an unnamed competing frontier model. Wiz: leads on web penetration-testing benchmarks (no numbers given).
- No Carbon system card exists as of 2026-10-29; the linked Argon Safety and Security Report estimates an attacker could complete a severe historical cyberattack at 16.7x lower cost without mitigations. Google publishes no equivalent Carbon figure.

Benchmarks with **no verified public score found** for this exact model: GPQA Diamond, HLE, DeepSWE, SWE-bench Verified, τ³-Banking, GDPval-AA, MMMU-Pro, MRCR, Claw-Eval / ClawProBench. Only 14 distinct benchmarks are recorded across all trackers checked — by far the thinnest evidence base of the four models in this report.

### Normalized scores (1–100)

- **Tool use: 94/100.** Leads its comparison class on Agents' Last Exam v1.1 (77.4%), AutomationBench/Zapier (53.9%) and Terminal-Bench 4.0 (65.2%), plus independent #1s on Legal Research Bench (55.77%, #1/87) and the Vals Finance Index (66.35%, #1/33). Capped in three ways: no published τ³-Banking or GDPval-AA figure at all; AA's Coding Agent Index (59) trails Claude Code + Opus 5.5 (62); and OSWorld 2.1 (81.5%) sits below Opus 5.5's 87.2%.
- **Reasoning: 90/100.** It is the #1 model on Artificial Analysis Intelligence Index v5.0 (59–60) and #2 on Vals Index v2.2 (70.36%, statistically level with Opus 5.5), with RiemannBench 80 (76) and Terminal-Bench-Science (64.8%, #2/34) also at the top. Heavily capped by the evidence gap: **no GPQA Diamond, HLE or CritPt number is published anywhere**, and the only long-context reasoning figure is GraphWalks 96.2% BFS F1. AA-Omniscience (54, 58% accuracy) is strong but with an 11% hallucination rate — triple Argon's 4% — and AA notes it "guesses more often when unsure".
- **Context window: 97/100.** 1M-token tier with the best measured long-context result in its class: GraphWalks 256K–1M BFS F1 **96.2%**, +24 points over GPT-6 Astra (71.8%) and +29 over Claude Opus 5.5 (66.8%), plus a reported 1,048,576-token max output. Held just under 100 because Google publishes no context or output spec of its own (both figures are third-party), 96.2% is below the ≥98% retrieval threshold, and no MRCR run exists.
- **Multimodal: 92/100.** Text + image + speech + video input with text output puts it in the methodology's 90–100 "audio in" tier. Justification for the upper part of that band: Chartography 72.5% (#2/16), Blueprint-Bench 2 58.6% (#1 of its comparison) and a 1,769-Elo WebDev Arena ranking. Capped because output is text-only and no MMMU-Pro or perception-benchmark number is published.
- **Coding: 92/100.** SWE-sweep 9.6 (#1 of its comparison), Terminal-Bench 4.0 65.2% (Google) / 63.13% (Mini-SWE-agent, #3/69), Vibe Code Bench v1.1 89.06% (#8/114) and security-adjacent patching strength (CWE-bench v1 71.0%, #1/12) are all strong. Capped because it is **not** the coding leader anywhere: FrontierSWE 2 (61.2%) trails GPT-6 Astra (65.5%) and Opus 5.5 (62.3%), the AA Coding Agent Index (59) trails Opus 5.5 (62), and its headline cyber numbers are vendor-run without guardrails and unreplicated.
- **Cost efficiency: 72/100.** Scored on the currently advertised introductory rate of $2/$10 with a 95% cached-input discount, which interpolates to ~72 between the methodology's ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors. Three factors pull it down from a pure rate-card reading: the introductory period has **no announced end date** and reverts to $4/$20 (≈60); AA's measured **$7.76 per index task** is worse than GPT-6 Astra's $6.25 because Carbon burns 205M output tokens (3x the median) on the same index; and there is no free or self-serve route at all today.
- **Overall Score: 93/100.** (94 + 90 + 97 + 92 + 92) / 5 = 93 → **93** → 93. Recommendation: the model to request through Fairwind if you are a vetted defender — it is the current #1 on the Artificial Analysis Intelligence Index v5 and the strongest long-context and security-patching profile researched, at a competitive introductory price. For anyone else it is not deployable yet, and Google's self-reported cyber scores should be treated as vendor claims until a third party reproduces them; re-verify the context window and output limit once Google publishes a Carbon model card.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-04
- Method: public internet research using Google's official announcement as the primary source, cross-checked against Artificial Analysis's model page and Intelligence Index v5 coverage, Vals AI's independent results (as transcribed by LLMLearner), NeuralTrust's deployment-focused analysis and LLMLearner's 14-result catalog. Google's release comparison table was transcribed as published and every row that is not uniformly Google-run was labelled accordingly. Scores are normalized 1–100 interpretations, not official vendor scores; conflicting figures (Index 59 vs 60; AA vs Vals vs Google harness differences) are listed side by side rather than averaged.
- Reference URLs:
  - [Google — Introducing Gemini 4 Carbon: our next frontier model (official announcement, 2026-10-28)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [Artificial Analysis — Gemini 4 Carbon (High) model page](https://artificialanalysis.ai/models/gemini-4-carbon)
  - [LLMLearner — Gemini 4 Carbon (Google release table + Vals/AA independent results)](https://llmlearner.com/models/gemini-4-carbon)
  - [NeuralTrust — Gemini 4 Carbon: Benchmarks & Pricing (access, cost-per-task, OWASP mapping)](https://neuraltrust.ai/blog/gemini-4-carbon)
  - [BenchLM — Gemini 4 Carbon benchmark scores & performance](https://benchlm.ai/models/gemini-4-carbon)
  - [llm-stats — Gemini 4 Carbon benchmarks, pricing & context window](https://llm-stats.com/models/gemini-4-carbon)
  - [Google DeepMind — Gemini 4 Argon Safety and Security Report (the linked safety evidence for this generation)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
  - [OpenCode Zen — model list and Console pricing (no Carbon route)](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
