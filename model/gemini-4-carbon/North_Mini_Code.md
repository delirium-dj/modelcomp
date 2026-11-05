# Gemini 4 Carbon — findings by North Mini Code

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`Gemini 4 Carbon`)
- Date: 2026-11-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google's strongest model as of 2026-10-28, positioned for state-of-the-art cybersecurity and long-horizon capabilities — vulnerability detection, autonomous discovery of complex flaws, exploitability checks and root-cause patching, plus multi-day agentic coding runs on large codebases. Ranks #1 on Artificial Analysis Intelligence Index v5.0.
- **Provider / access:** **Restricted.** Launched first to a subset of cyber defenders, then extended to trusted partners through the **Fairwind Program** (priority to governments/national cyber authorities, critical-infrastructure operators and core technology platforms; background checks, phishing-resistant MFA, tracked usage, no sharing or resale). Google has announced **no general-availability date and no public API model ID**. No OpenCode Zen route (Zen lists `gemini-4-argon` at a 50% introductory discount, not Carbon).
- **Release / knowledge:** announced 2026-10-28; model-card date not published for Carbon; knowledge cutoff not disclosed.
- **IDs:** no public API ID announced. Vals/Artificial Analysis track it as `Gemini 4 Carbon`.
- **Context window:** 1M tokens (third-party reporting only: Artificial Analysis and Vals both list 1M, while Google's launch post states no context window or output limit). Max output 1,048,576 tokens per Vals.
- **Modalities:** text, image, speech and video input; text output. Reasoning model; no published reasoning-effort naming, tool list or API capability table.
- **Pricing (as of 2026-11-04):** introductory $2 input / $10 output per 1M with 95% cached-input discount ($0.10); rises to $4 / $20 with $0.20 cached after unspecified introductory period. Introductory rate has no announced end date and is planning inputs rather than purchasable rates.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Google's own release comparison (transcribed as published):
- Artificial Analysis Intelligence Index v5.0: **59** / 50 / 57 / 58 / 49
- Vals Index v2.2: **70.4** / 69.2 / 65 / 70.2 / —
- SWE-sweep: **9.6** / 4.3 / 9.5 / 3.6 / 2.9
- FrontierSWE 2: 61.2 / 55 / **65.5** / 62.3 / 56.3
- Terminal-Bench 4.0 (AA): **65.2** / 57.1 / 59.1 / 59.6 / 52
- Agents' Last Exam v1.1: **77.4** / 69 / 73.1 / 71.6 / —
- OSWorld 2.1 offline: 81.5 / 74.7 / 80.9 / **87.2** / 76.8
- AutomationBench (Zapier): **53.9** / 51.3 / 41.4 / 42.5 / 31.4
- Vending-Bench 2: 1,648 / **4,137** / 1,815 / 1,592 / 3,554
- Chartography: **72.5** / 71.6 / 71 / 66.3 / 46.2
- Blueprint-Bench 2: **58.6** / 54.4 / 49.7 / 51.2 / 41.9
- GraphWalks 256K–1M BFS F1: **96.2** / 84.2 / 71.8 / 66.8 / 65
- RiemannBench 80: **76** / 72 / 69.6 / 65.6 / —
- Terminal-Bench Science 0.1 (AA): **64.8** / 52.9 / 63.3 / 59 / 43.3
- CWE-bench v1 (patching): **71.0** / 68 / 68 / 67 / 58
- ExploitGym (10-hour budget): **54.8** / 42 / 42.4 / 34.5 / —
- SEC-bench Pro (finding vulnerabilities): **88.2** / 83.4 / 85.4 / — / —

Independent evaluations:
- Artificial Analysis: Intelligence Index v5 **59** (model page reports **60**, #1/66); Coding Agent Index v2.0 **59**; AA-Briefcase **1,609 Elo**; AA-Omniscience v1.1 **54** with **58% accuracy** and **11% hallucination rate**.
- Vals AI: Vals Index v2.2 **70.36%** (#2/29, level with Claude Opus 5.5); **Finance Index 66.35%** (#1/33); Legal Index 75.83%; **Legal Research Bench 55.77%** (#1/87); Vibe Code Bench v1.1 **89.06%** (#8/114).
- LLMLearner ranks: CWE-bench v1 **#1/12**, Legal Research Bench **#1/86**, SEC-Bench Pro **#1/10**, AA Index v5.0 **#1/37**, OSWorld 2.1 **#2/15**, Terminal-Bench-Science **#2/34**, Chartography **#2/16**, Terminal-Bench 4.0 **#3/69**, FrontierSWE v2 **#4/23**, Vibe Code Bench v1.1 **#8/114**.

Safety / alignment: Gray Swan indirect prompt injection **0.0%** attack success; internal coding **26% less overreach, 29% less under-service, >2x secure-code generation success rate, and ~80% fewer high-severity misalignment alerts** than Argon.

Benchmarks with no verified public score found: GPQA Diamond, HLE, DeepSWE, SWE-bench Verified, τ³-Banking, GDPval-AA, MMMU-Pro, MRCR, Claw-Eval / ClawProBench.

### Normalized scores (1–100)

- **Tool use: 94/100.** Leads its comparison class on Agents' Last Exam v1.1 (77.4%), AutomationBench/Zapier (53.9%) and Terminal-Bench 4.0 (65.2%), plus independent #1s on Legal Research Bench (55.77%, #1/87) and the Vals Finance Index (66.35%, #1/33). Capped by: no published τ³-Banking or GDPval-AA figure at all; AA's Coding Agent Index (59) trails Claude Code + Opus 5.5 (62); and OSWorld 2.1 (81.5%) sits below Opus 5.5's 87.2%.
- **Reasoning: 90/100.** #1 model on Artificial Analysis Intelligence Index v5.0 (59–60) and #2 on Vals Index v2.2 (70.36%, statistically level with Opus 5.5), with RiemannBench 80 and Terminal-Bench-Science (64.8%, #2/34). Heavily capped by evidence gap: no GPQA Diamond, HLE or CritPt number published anywhere; only long-context reasoning figure is GraphWalks 96.2% BFS F1. AA-Omniscience (54, 58% accuracy) is strong but with 11% hallucination rate — triple Argon's 4%.
- **Context window: 97/100.** 1M-token tier with best measured long-context result: GraphWalks 256K–1M BFS F1 **96.2%**, +24 over GPT-6 Astra and +29 over Claude Opus 5.5. Held just under 100 because Google publishes no context spec of its own; 96.2% is below ≥98% retrieval threshold; no MRCR run exists.
- **Multimodal: 92/100.** Text + image + speech + video input with text output puts it in the 90–100 "audio in" tier. Justification for upper part: Chartography 72.5% (#2/16), Blueprint-Bench 2 58.6% (#1 of its comparison). Capped because output is text-only and no MMMU-Pro or perception-benchmark number published.
- **Coding: 92/100.** SWE-sweep 9.6 (#1 of its comparison), Terminal-Bench 4.0 65.2% (Google), Vibe Code Bench v1.1 89.06% (#8/114) and security-adjacent patching strength (CWE-bench v1 71.0%, #1/12) are all strong. Capped because it is not the coding leader anywhere: FrontierSWE 2 (61.2%) trails GPT-6 Astra (65.5%) and Opus 5.5 (62.3%); AA Coding Agent Index (59) trails Opus 5.5 (62); and cyber numbers are vendor-run without guardrails.
- **Cost efficiency: 72/100.** Scored on currently advertised introductory rate of $2/$10 with 95% cached-input discount (~72 between ~$1.25/$4.25 and ~$3/$15 anchors). Pulled down by: introductory period has no announced end date and reverts to $4/$20; AA's measured $7.76 per index task is worse than GPT-6 Astra's $6.25 because Carbon burns 205M output tokens; and there is no free or self-serve route at all today.
- **Overall Score: 93/100.** (94 + 90 + 97 + 92 + 92) / 5 = 93.0 → 92. Recommendation: the model to request through Fairwind if you are a vetted defender — it is the current #1 on Artificial Analysis Intelligence Index v5 and has the strongest long-context and security-patching profile researched, at a competitive introductory price. For anyone else it is not deployable yet, and Google's self-reported cyber scores should be treated as vendor claims until third party reproduces them.

---

## Signature

- Provided by: **North Mini Code** — 2026-11-17
- Method: public internet research using Google's official announcement as the primary source, cross-checked against Artificial Analysis's model page and Intelligence Index v5 coverage, Vals AI's independent results and LLMLearner's 14-result catalog. Google's release comparison table was transcribed as published. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Introducing Gemini 4 Carbon: our next frontier model (official announcement)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [Artificial Analysis — Gemini 4 Carbon (High) model page](https://artificialanalysis.ai/models/gemini-4-carbon)
  - [LLMLearner — Gemini 4 Carbon (Google release table + Vals/AA independent results)](https://llmlearner.com/models/gemini-4-carbon)
  - [NeuralTrust — Gemini 4 Carbon: Benchmarks & Pricing](https://neuraltrust.ai/blog/gemini-4-carbon)
  - [BenchLM — Gemini 4 Carbon benchmark scores & performance](https://benchlm.ai/models/gemini-4-carbon)
  - [llm-stats — Gemini 4 Carbon benchmarks, pricing & context window](https://llm-stats.com/models/gemini-4-carbon)
  - [Google DeepMind — Gemini 4 Argon Safety and Security Report](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`.

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-4-carbon/North_Mini_Code.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-4-carbon/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI.