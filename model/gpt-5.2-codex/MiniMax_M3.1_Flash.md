# GPT-5.2 Codex — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-5.2-codex`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's Codex-tuned derivative of GPT-5.2, released as the most advanced agentic coding model yet (announcement 2025-12-18) — built for long-horizon repository work with native context compaction, refactor/migration scale, Windows-native terminal behaviour and the strongest cybersecurity capability OpenAI had shipped. It is a coding specialist, not a general chat model: OpenAI states it is "not intended for deployment in any general-purpose chat application", and by October 2026 it is a **superseded** SKU (Artificial Analysis points users to GPT-5.3 Codex; the API snapshot is `gpt-5.2-codex-20260114`).
- **Provider / access:** OpenAI API — **Responses API only** (`v1/responses`); Chat Completions, Realtime, Batch, Assistants, fine-tuning, image/audio endpoints are all listed "Not supported". Azure AI Foundry (`ai.azure.com/catalog/models/gpt-5.2-codex`) resells the same weights. OpenCode route: `openai/gpt-5.2-codex` (OpenCode Data model page, updated 2026-09-28); OpenRouter route `openai/gpt-5.2-codex` (listing dated 2026-01-14). Codex CLI / IDE / web surfaces for paid ChatGPT users from launch.
- **Release / knowledge:** Announced **2025-12-18** (OpenAI blog + "Addendum to GPT-5.2 System Card", published 2025-12-18). Two other release stamps are in circulation and are recorded as a conflict: Artificial Analysis and OpenCode Data both date the model **2025-12-11**, and the dated API snapshot is `gpt-5.2-codex-20260114` (i.e. API access in mid-January 2026 — OpenAI's post says it was "working towards safely enabling access to GPT-5.2-Codex for API users in the coming weeks"). **Knowledge cutoff: 2025-08-31** (OpenAI model docs, AA, OpenCode Data — all agree).
- **IDs:** `gpt-5.2-codex` (OpenAI model id, also the only listed snapshot) · `gpt-5.2-codex-20260114` (dated snapshot) · `openai/gpt-5.2-codex` (OpenCode / OpenRouter) · `opencode/gpt-5.2-codex` (Zen-style id used by this dataset's `meta.json`). **No free tier on any route found** — paid everywhere.
- **Context window:** **400,000 tokens** total; **272,000 max input**; **128,000 max output** (OpenAI model docs, verbatim; confirmed by Artificial Analysis "400k" and OpenCode Data "Context window 400K / Max output 128K"). Benchable.ai's model card agrees (400K, OpenAI + Azure endpoints).
- **Modalities:** Input: text, image (OpenAI model docs). OpenCode Data additionally lists **pdf** input — a provider-aggregator extension that OpenAI's own docs do not confirm, so PDF input is recorded as unverified. Output: text only. Reasoning: yes (reasoning-effort `low` / `medium` / `high` / `xhigh`; token support). Tool calls: yes — `function_calling`, `web_search`, `hosted_shell`, `skills`. Streaming, structured outputs, prompt caching: supported. No audio, no video, no image output.
- **Pricing (as of 2026-10-21):** **$1.75 in / $0.175 cached / $14.00 out per 1M tokens** (OpenAI model docs; identical on OpenCode Data, Artificial Analysis and benchable.ai). For reference OpenAI's own quick-comparison table lists GPT-5.1-Codex at $1.25 / $0.125 / $10. No free lane, no Zen Free id.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter counts. Built on GPT-5.2 general capabilities plus GPT-5.1-Codex-Max's agentic/terminal strengths; adds **native context compaction** (summarising older context to keep project-level state across multi-session runs) and an RL "user model" trained to preserve user-made edits instead of reverting them.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **64.0%** (vendor-reported via OpenAI's launch, relayed by CometAPI's release analysis 2025-12-22 — vs 62.2% for GPT-5.2 and 58.1% for GPT-5.1-Codex-Max). OpenAI's own announcement claims **state-of-the-art on Terminal-Bench 2.0**, but publishes the chart as an image, so no figure is machine-readable on the primary page. **No Terminal-Bench 2.1 figure for this model was found.**
- Cyber Range (OpenAI Preparedness Framework, official system card Table 7): **combined pass rate 72.7%** over 11 scenarios, 16 trials each — vs **81.8%** for gpt-5.1-codex-max and **63.6%** for gpt-5.2-thinking. First model to solve "Leaked Token"; still fails HTTPS Oracle, Financial Capital and Medium C2.
- CVE-Bench (v1.0, 34 of 40 challenges, blind 0-day prompt, pass@1 over 3 rollouts): "incremental improvement relative to GPT-5.1-Codex-Max and significant gains versus previous models" — **no numeric value published on the web page** (Figure 6 only).
- Professional CTF (pass@12 over 16 rollouts): "GPT-5.2-Codex is the strongest performing model on our Professional CTFs evaluation to date" — **no numeric value published** (Figure 5 only).
- External eval by Irregular (up to 1,000 turns/challenge, xhigh effort, auto-compaction): **79%** Network Attack Simulation, **80%** Vulnerability Research & Exploitation, **49%** Evasion. Cost-per-success: **$5.90** / **$32.80** / **$17.90** respectively. **CyScenarioBench: 0 challenges solved.**
- MLE-bench-30 (n=30, bronze pass@1/n): "GPT-5.2-Codex underperforms relative to GPT-5.1-Codex-Max and exceeds the performance of GPT-5-Thinking" — no numeric value in the web text.
- PaperBench-10 (n=10, pass@1, xhigh, no browsing): "GPT-5.2-Codex exceeds the performance of GPT-5.2-Thinking and GPT-5.1-Codex-Max, setting a new upper bound among our models" — no numeric value in the web text.
- OpenAI PRs (real-world ML research tasks): "scores the same as GPT-5.2-Thinking" — no numeric value.
- SWE-bench Pro (**agentic** proxy, see Coding): 56.4% (CometAPI) / 55.6% (AI Weekly) vendor-reported; **41.04% resolve rate** on Scale AI's *public* leaderboard (OpenCode Data benchmark row, citing `labs.scale.com/leaderboard/swe_bench_pro_public`).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found (AA lists the evaluation as part of its index, but publishes no per-eval number for this model).
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.
- OSWorld / AutomationBench: no verified public score found (AutomationBench-AA is inside AA's index but no per-eval value is published for this model).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **29 (estimated)** — **#99 / 214** in the >$1/M proprietary reasoning class (class median 27). AA flags "independent evaluation forthcoming" and has **deprecated** the model in favour of GPT-5.3 Codex, keeping only the default 10k-input workload live.
- AA output speed **107.8 tokens/s** (#49/186, class median 80.8); **TTFT 76.38 s** at xhigh (class median 3.81 s) — the dominant latency penalty of this SKU.
- OpenAI-Proof Q&A (20 internal research/engineering bottlenecks, pass@1): evaluated, **no numeric value published** (Figure 12 only).
- benchable.ai's own harness (independent, model-specific, 8 benchmarks): **Reasoning 96.0%** (83rd pct), Mathematics 95.0% (87th), Instruction Following 89.0% (95th), Coding 94.0% (87th), Hallucinations/General Knowledge/Ethics 100%, Email Classification 98.0%; overall 100% success rate, 61st-percentile speed.
- GPQA Diamond: no verified public score found.
- HLE: no verified public score found (AA lists HLE inside its index, no per-eval value for this model).
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.
- Multimodal Troubleshooting Virology (350 SecureBio questions): "GPT-5.2-Codex is the highest-performing model on this evaluation. All models exceed the median domain expert baseline of 22.1%" — **no numeric value published** (Figure 1 only).
- ProtocolQA Open-Ended (108 questions, 19 PhD experts): all models underperform both the 54% consensus and 42% median expert baselines — no per-model number published.
- Tacit Knowledge & Troubleshooting (Gryphon Scientific): "GPT-5.2-Codex underperforms GPT-5.1-Codex-Max by four percentage points" — no absolute number published.
- TroubleshootingBench (52 protocols × 3 questions, 12 PhD experts, 80th-pct expert 36.4%): "GPT-5.2-Codex scores similarly to GPT-5.2-Thinking" — no numeric value published.
- MMLU / MMLU-Pro: no verified public score found.

Coding:

- SWE-bench Pro: **56.4%** (CometAPI release analysis, 2025-12-22, vs 55.6% for GPT-5.2 and 50.8% for GPT-5.1) / **55.6%** (AI Weekly alert: "55.6% on SWE-Bench Pro across four languages") / **41.04% resolve rate** (Scale AI public leaderboard, via OpenCode Data). **Conflict logged:** the two vendor-reported figures agree with each other within 0.8 pt but disagree with Scale's public leaderboard by ~15 pt — the vendor numbers are almost certainly the vendor's own harness (and OpenAI publishes the comparison as a chart, not a table), while 41.04% is the independent harness. No SWE-bench **Verified** figure was found for this model.
- Terminal-Bench 2.0: **64.0%** (see Agent / tool use).
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found (SciCode is inside AA's index, no per-eval value published).
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index: no verified public score found.
- OpenAI PRs + PaperBench-10 + MLE-bench-30 (research-engineering proxies, official system card): PaperBench-10 is a **new upper bound among OpenAI's models**; MLE-bench-30 is **below GPT-5.1-Codex-Max**; OpenAI PRs ties GPT-5.2-Thinking.

Long context:

- No MRCR / RULER / GraphWalks / long-context retrieval measurement was found for this exact model, at any window length. The vendor's claim is architectural rather than measured: native context compaction "allows the model to work coherently across multiple context windows" and is credited in the system card for the Cyber Range result (72.7% combined) and the Professional-CTF result. 272,000 max input tokens is the practical input ceiling even though the window is nominally 400,000.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.0 **64.0%** (vendor harness) is above the methodology's mid band (TB2.1 45–60%) and the Cyber Range **72.7%** plus Irregular's 79–80% on network-attack and vulnerability-research suites show real autonomous multi-step tool use. Capped because no Terminal-Bench **2.1**, Tau3, GDPval-AA or Claw-Eval number exists for this model, the model *loses* the Cyber Range to GPT-5.1-Codex-Max (72.7% vs 81.8%), and Irregular's Evasion rate is only 49% with **zero** CyScenarioBench challenges solved.
- **Reasoning: 66/100.** The only independent general index anchor is AA's **29 (estimated)** — above the class median of 27 but with "independent evaluation forthcoming" — and benchable's harness reports 96% reasoning / 95% mathematics accuracy on its own synthetic suite. OpenAI's own research-engineering numbers are qualitative and split: PaperBench-10 is a new upper bound for the lab, but MLE-bench-30 is below GPT-5.1-Codex-Max and OpenAI PRs merely ties GPT-5.2-Thinking. The cap is the total absence of verified GPQA Diamond, HLE, LCR/MRCR, CritPt and Omniscience rows, plus a 2025-08-31 knowledge cutoff.
- **Context window: 76/100.** 400,000 total sits in the methodology's 200K–500K band (65–84) with 272,000 max input and 128,000 max output; the 4-point bonus over a straight 200K reading reflects the 400K ceiling and the 128K output headroom. Capped because **no long-context retrieval measurement exists for this model** and the effective input limit (272K) is 32% below the nominal window.
- **Multimodal: 68/100.** Text + image in, text out (OpenAI model docs) places it in the "+image in = 60–70" band; OpenCode Data additionally claims **PDF** input, which would push it into the 75–90 band but is unconfirmed by OpenAI. Capped at the image band because no MMMU-Pro or any other numeric multimodal score was found for this model, and because output is text-only.
- **Coding: 82/100.** SWE-bench Pro 55.6–56.4% (vendor) with Terminal-Bench 2.0 **64.0%** is a strong agentic-coding profile, and PaperBench-10 is a lab-leading result. The cap is the independent-harness conflict — **41.04%** on Scale AI's public SWE-bench Pro leaderboard is 15 pts below the vendor figure — plus the absence of SWE-bench Verified, DeepSWE, LiveCodeBench, SciCode and Coding Index rows, and the model's status as a coding-only derivative rather than a broad frontier model.
- **Cost efficiency: 63/100.** $1.75 in / $14.00 out per 1M ($0.175 cached) is an expensive card: the output rate is near the $3/$15 ≈ 60 anchor and 3.3× the $4.25 output reference, and the model is explicitly **not intended for conversational deployment**, so the premium buys agentic throughput rather than chat value. No free lane exists on any route.
- **Overall Score: 74/100.** Half-up mean of (78 + 66 + 76 + 68 + 82) / 5 = **74.0**. Best fit: a **specialist long-horizon coding agent** — repository-scale refactors, migrations, terminal automation and defensive-security research inside 400K — not a general assistant and not a value tier, and a dated one, since OpenAI has already shipped GPT-5.3-Codex over it and Artificial Analysis has deprecated the entry.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** - 2026-10-21
- Method: public internet research only — OpenAI's **model documentation page** (`developers.openai.com/api/docs/models/gpt-5.2-codex`: context, output cap, modalities, endpoint support, pricing, rate limits), OpenAI's **launch announcement** (`openai.com/index/introducing-gpt-5-2-codex/`, 2025-12-18) and the **official system-card addendum** on the Deployment Safety Hub (`deploymentsafety.openai.com/gpt-5-2-codex`: Cyber Range table, Irregular external evals, Preparedness results), cross-checked against **Artificial Analysis** (`artificialanalysis.ai/models/gpt-5-2-codex`: Intelligence Index 29 estimated, #99/214, 107.8 t/s, TTFT 76.38 s, deprecation notice), **OpenCode Data** (`opencode.ai/data/openai/gpt-5.2-codex`: model facts, Zen-facing price, SWE-Bench Pro 41.04 resolve rate citing Scale AI's public leaderboard), **benchable.ai** (snapshot date, own 8-benchmark harness, OpenAI + Azure endpoint table), **CometAPI**'s release analysis (SWE-Bench Pro 56.4%, Terminal-Bench 2.0 64.0%) and **AI Weekly**'s alert (SWE-Bench Pro 55.6%). Conflicts recorded: release date 2025-12-11 (AA, OpenCode Data) vs 2025-12-18 announcement vs `gpt-5.2-codex-20260114` API snapshot; SWE-bench Pro 55.6/56.4% vendor-reported vs 41.04% on Scale AI's public leaderboard; PDF input listed by OpenCode Data but absent from OpenAI's own modality list. No peer `model/` findings file was read; the folder's `meta.json` is a `scaffolded` stub ("128K total", "Text in/out", "Standard pricing") and was **not** used as evidence. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.1_Flash_v2.md`, using the same headings.
