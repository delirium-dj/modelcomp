# MiniMax M3.1 Flash — findings by Step 5 Preview

- Source: MiniMax (`MiniMax-M3.1-Flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash. The folder keeps the `-preview` slug because the earlier preview build was tracked there, but **the model is now generally available** — MiniMax's own page is titled "MiniMax M3.1 Flash is Now Generally Available" and calls it "the generally available successor to M3.1-Flash-Preview", delivering generational improvements with ~3x faster online inference and 70% lower usage cost on agentic tasks. BenchLM still lists `MiniMax M3.1 Flash Preview` as a separate, unscored sibling.
- **Short description:** MiniMax's open-weight flash-tier multimodal MoE, tuned for agentic work, coding, computer use and cybersecurity. Reports BankerToolBench 76.2, DeepSWE v1.1 73.7%, CyberGym 82%, OSWorld V2 61.7 and Agents' Last Exam 29.6. MiniMax also uses this model to identify **"Space Bunny" as an early version of it** — consistent with the roster alias record — so Space Bunny scores must not be attributed to the final release.
- **Provider / access:** MiniMax Code, M Plan subscription, MiniMax developer platform, and **12+ providers on OpenRouter** (MiniMax itself, GMICloud, StreamLake, Fireworks, inference.net, DigitalOcean, NovitaAI, Nebius Token Factory, SambaNova, ModelRun, Parasail, Together). Weights on Hugging Face under the **MiniMax M3.1-Flash Community License** (commercial use allowed with conditions).
- **Release / knowledge:** released **2026-10-19**. Knowledge cutoff not disclosed.
- **IDs:** `minimax/minimax-m3.1-flash` (OpenRouter); `MiniMax-M3.1-Flash` (MiniMax API). No OpenCode Zen route found — Zen lists `minimax-m3`, `minimax-m2.7` and `minimax-m2.5` but not M3.1 Flash.
- **Context window:** **1M tokens**. Max output not published. Benchmark evidence exists at 256K (LOCA-Bench 60.3) but no MRCR run.
- **Modalities:** text, image and video in; text out. **Reasoning is always on and cannot be disabled** — five effort levels (Low, Medium, High, Xhigh, Max), with Max the recommended default; reasoning is returned separately via `reasoning_content`, and integrations must tolerate that field being absent.
- **Pricing (as of 2026-11-05):** headline **$0.15 input / $0.015 cached / $0.60 output per 1M** (blended $0.1536/1M at 4:1 with 80% cached). **Important nuance:** MiniMax's own OpenRouter route lists **$0.075 input / $0.30 output**, flagged as billed "by UTC time of day, this line shows the rate of one window" — i.e. a discounted window that can halve the effective price. The other 11 providers charge the full $0.15/$0.60.
- **Architecture:** open-weight MoE, **~428B total / 23B active parameters** (same class as MiniMax M3).

### Raw benchmarks found

MiniMax's launch-blog numbers and Artificial Analysis's independent measurements diverge on the two benchmarks where both exist, so they are listed separately. LLMLearner's catalog supplies the ranks.

Agent / tool use:

- AutomationBench-AA: **72.5%** (#3/15) — Artificial Analysis. MiniMax's own integration guide reports **62.2%**, so AA measures this one *higher* than the vendor
- GDPval-AA v2: **1,466 Elo** (AA) / **47.9%** normalized; AA-Briefcase: **1,473 Elo**
- BankerToolBench: **76.2%** (MiniMax); OSWorld 2.0: **61.7%** (#9/14)
- **Terminal-Bench 4.0: 38.1%** (#21/69, MiniMax, reasoning effort unspecified) vs **25.8%** (Artificial Analysis) — a **12.3-point vendor-vs-independent gap**
- Agents' Last Exam: **29.6%** (#11/34, thinking high) — well below GPT-6 Astra's 59.3% and Muse Wonder Full's 77.4%
- CyberGym: **82.2%** (#8/14) — the cybersecurity strength MiniMax highlights, tuned for code auditing, vulnerability patching, penetration testing, malicious-code analysis and reverse engineering
- SWE Refactor Bench: **23.0%** (#1/1 of 1 model — a one-entry board, indicative only); LOCA-Bench 256K: **60.3%** (#1/1)
- **No verified public score found** for τ³-Banking, MCP-Atlas, Claw-Eval, OSWorld-Verified or BrowseComp

Reasoning / knowledge:

- HLE: **48.0%** (#53/144, AA and MiniMax agree) / **43.4%** without tools
- AA-LCR: **79.7%** (above GLM-5.3's 79.7 and M3's 83.0 on the same harness); **CritPt: 22.3%**; **MLCR-AA: 16.7%**
- AA-SciCode: **53.4%**; LiveBench 2.0: **73.1%** (#22/51); Vals Index v2.2: **53.8%** (#18/28)
- **AA-Omniscience: index −6.4, accuracy 45.1%, hallucination rate 93.7%** — the worst hallucination profile measured in this research series, slightly worse than MiniMax M3's 91.4%
- Artificial Analysis Intelligence Index: **42.4** (v4.3, #14/16) / **28.9** (v5.0, with tools, #21/37)
- Code Arena (WebDev): **1,588 Elo** (#1/2 of 2); GPQA Diamond: **no verified public score found**; MRCR: **no verified public score found**

Coding:

- DeepSWE v1.1: **73.7%** (#13/59, MiniMax release configuration) — 0.3 points under the 74% frontier reference
- PostTrain Bench: **39.3%** (#3/15); NL2Repo-Bench: **61.2%** (#6/20)
- **Vibe Code Bench v1.1: 73.94%** (#40/114) — against DeepSeek-V4.1-Flash-1017 87.73%, GPT-6 Astra 89.6% and Claude Opus 5.5 90.3%
- Terminal-Bench 4.0: 38.1% / 25.8%; AA-SciCode 53.4%
- Head-to-head record in LLMLearner's comparable set: **2–16 vs DeepSeek-V4.1-Flash-1017, 2–16 vs GPT-6 Astra, 2–15 vs Claude Opus 5.5**, but **12–6 vs Kimi K3**
- SWE-bench Verified: **no verified public score found**

Long context:

- AA-LCR: **79.7%**; LOCA-Bench 256K: 60.3%. 1M window; max output not published; no MRCR run.

Multimodal:

- BabyVision: **91.0%** (#8/16); CharXiv RQ: **82.5%** (#16/20); MMMU-Pro: **79.1%** (#35/131)
- GDP.pdf: **20.8%** (#57/90 — weak); Code Arena WebDev: 1,588 Elo

### Normalized scores (1–100)

- **Tool use: 66/100.** Middle of the band, and the split is between measurement and vendor. The automation side is genuinely strong — AA-measured AutomationBench-AA 72.5% (#3/15), BankerToolBench 76.2%, GDPval-AA 1,466 Elo, AA-Briefcase 1,473 — but the agentic-execution side is not: AA-measured Terminal-Bench 4.0 25.8% (vs MiniMax's own 38.1%), Agents' Last Exam 29.6% (#11/34, far below Muse Wonder Full's 77.4%), and no τ³-Banking, MCP-Atlas or Claw-Eval at all. Net: a solid business-automation tool model that is not yet an agentic-execution model.
- **Reasoning: 55/100.** Mid-band. HLE 48.0% (#53/144) clears the 40% frontier reference and AA-LCR 79.7% is decent, but GPQA Diamond is unpublished, the AA Intelligence Index is #14/16 (v4.3) and #21/37 (v5.0), CritPt is 22.3%, and the AA-Omniscience hallucination rate of **93.7%** is the worst measured across all nine models in this research — it will confidently produce wrong answers, which caps any unattended use.
- **Context window: 95/100.** 1M-token tier as required. Held at the tier floor because there is no MRCR/RULER/GraphWalks retrieval measurement, AA-LCR 79.7% is only mid-tier, LOCA-Bench 256K is a one-model leaderboard (#1/1) so it proves nothing competitively, and the max output is not published.
- **Multimodal: 88/100.** Text + image + video input puts it in the 75–90 "+video/PDF in" band, and the evidence is real: BabyVision 91.0% (#8/16), CharXiv RQ 82.5% (#16/20), plus a 1,588-Elo WebDev Code Arena result. Held down from the top of the band by MMMU-Pro at only #35/131, GDP.pdf at 20.8% (#57/90) and text-only output.
- **Coding: 78/100.** The strongest dimension, but not a leadership one. DeepSWE 73.7% (#13/59) sits 0.3 points under the frontier reference and PostTrain Bench 39.3% (#3/15) and NL2Repo-Bench 61.2% (#6/20) are credible; however Vibe Code Bench v1.1 is only #40/114 at 73.94%, AA-SciCode 53.4% is just under the 55% reference, Terminal-Bench 4.0 is 25.8–38.1%, and its head-to-head record against DeepSeek-V4.1-Flash-1017 is 2–16. LLMLearner's editorial conclusion is the right one: the 73.7% DeepSWE figure cannot stand in for terminal or visual coding quality.
- **Cost efficiency: 96/100.** $0.15/$0.60 per 1M with $0.015 cached reads is above the methodology's ~$0.60/$2.20 (≈92) anchor and roughly half MiniMax M3's already-cheap $0.30/$1.20, at a $0.1536/1M blended rate. Two further factors push it to the top of the band: MiniMax's own OpenRouter route advertises **$0.075/$0.30** in a discounted time window (halving the effective price), and the model claims ~3x faster inference at 185 tok/s with 70% lower agentic-task cost than the previous generation. Only the absence of any Free route keeps it from the 97–99 $0.10/$0.20 tier.
- **Overall Score: 76/100.** (66 + 55 + 95 + 88 + 78) / 5 = 76.4 → **76** → 76. Recommendation: a strong **low-cost business-automation and repository-work** model, and the right choice when the token bill is the constraint — AutomationBench-AA #3/15, BankerToolBench 76.2 and DeepSWE 73.7% at $0.15/$0.60 is excellent value, with reasoning always on and a 1M window. Do not assign it unattended agentic or factual work without your own acceptance tests: AA measures Terminal-Bench 4.0 at 25.8% against MiniMax's claimed 38.1%, and its 93.7% hallucination rate is the worst in this series. Pick DeepSeek-V4.1-Flash-1017 instead for coding-heavy jobs.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: public internet research using MiniMax's official GA announcement page and launch blog as the primary source, cross-checked against Artificial Analysis's independent model measurements (transcribed via BenchLM, which is where the decisive 25.8% vs 38.1% Terminal-Bench 4.0 and 72.5% vs 62.2% AutomationBench divergences are visible), LLMLearner's 25-result catalog with per-leaderboard ranks and editorial analysis, BenchLM's 30-row catalog, and OpenRouter's multi-provider pricing table. The Space Bunny attribution caveat (MiniMax identifies it as an early version, so its scores are not transferable) is recorded because the roster alias maps that name here. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiniMax Code — MiniMax M3.1 Flash is Now Generally Available (official GA page, capability comparison, FAQ)](https://code.minimax.io/tools/m3.1-flash)
  - [MiniMax — MiniMax M3.1 Flash launch blog (vendor benchmark table)](https://www.minimax.io/blog/minimax-m31f)
  - [MiniMax — MiniMax M3.1 Flash model page](https://www.minimax.io/models/text/m3.1-flash)
  - [Artificial Analysis — MiniMax M3.1 Flash model page](https://artificialanalysis.ai/models/minimax-m3-1-flash)
  - [LLMLearner — MiniMax M3.1 Flash (25 curated results + editorial)](https://llmlearner.com/models/minimax-m3-1-flash-preview)
  - [BenchLM — MiniMax M3.1 Flash benchmark scores (30 rows, 59.71/100, #54/1009)](https://benchlm.ai/models/minimax-m3-1-flash)
  - [OpenRouter — MiniMax M3.1 Flash model page, provider pricing and capabilities](https://openrouter.ai/minimax/minimax-m3.1-flash)
  - [llm-stats — MiniMax M3.1 Flash benchmarks, pricing & context window](https://llm-stats.com/models/minimax-m3.1-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
