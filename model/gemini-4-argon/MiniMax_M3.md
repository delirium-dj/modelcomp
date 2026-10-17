# Gemini 4 Argon — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`. Do not conflate with peer agent files.

- Source: Google DeepMind / Gemini 4 Argon (`google/gemini-4-argon`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's next-era frontier model and **first Gemini to use a codename** (no Pro / Flash / Flash-Lite tiers). Built for long-horizon software engineering (DeepSWE 77.9% — #1), enterprise knowledge work (Vals Index 68.9% — #1; Vals Finance Agent v2 + Harvey LAB leading), and **defensive cybersecurity** (CWE-bench v1 68.0%, tied #1). Top use case: large-scale C/C++ → Rust codebase migrations and economic-impact research agents when 1M-token single-response output is the differentiator.
- **Provider / access:** Gemini API (paid) — model ID `gemini-4-argon`; Google AI Ultra subscriber access. **At launch (2026-09-30), general availability is gated:** first to Fairwind cyber-defender cohort, then paid API + Google AI Ultra with no public date (DataCamp, NeuralTrust). No ID on OpenRouter, Vertex AI, Gemini CLI, Cursor, or GitHub Copilot as of 2026-09-30 per DataCamp.
- **Release / knowledge:** Released 2026-09-30 (Google blog `https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/`). Knowledge cutoff ≈ mid-2026 per Google.
- **IDs:** `google/gemini-4-argon` (canonical). No free ID on Zen (the folder's `noFreeId: true`); folder has tier list with cached-input note.
- **Context window:** **1M total** with headline **1M tokens of output** (industry-leading, up from 64K on earlier Gemini). Google's blog states only the 1M output limit and not the input window directly; multiple outlets (DataLearner, Marktechpost, NeuralTrust) report 1M input as well; the folder `meta.json` records `262K output / 1M via continuation` which aligns with staged-output architecture. Treat as 1M total / up to 1M output per single response.
- **Modalities:** Text, image, video **in**; **text out** (Google). Reasoning-on (Google confirms expanding output token headroom to "think deeply and generate hundreds of thousands of tokens in a single trajectory"); tool calls; JSON mode; chain-of-thought and action monitor that can stop execution. CBRN / cyber misuse refusals + Gray Swan IPI defenses per Google (no published score).
- **Pricing (as of 2026-10-13):** **Introductory $2 / $10 per 1M input / output** (Google-stated intro price; **end date undisclosed**); standard rate reverts to **$4 / $20**. **Cached input $0.10 / 1M (95% discount)** — same as Opus 5.5. Cost per Artificial-Analysis Intelligence Index task: **$1.99** (Argon) vs $3.26 (GPT-6 Astra) vs $5.98 (Opus 5.5) per AA. Vals cost per test: **$15.68** (Argon) vs $32.14 (Opus 5.5). Reasoning-token billing not yet documented by Google.
- **Architecture:** Proprietary; weights not released. First Gemini with codename (Fello AI). Agentic long-running loop + chain-of-thought monitoring on top; enhanced W&B integration (per datalearner).

### Raw benchmarks found

Agent / tool use:

- DeepSWE v1.1 (Long-Horizon Software Engineering): **77.9%** (Google; **#1** vs Opus 5.5 74.2%, GPT-6 Astra 74.1%, Fable 5.1 67.4% per DataCamp).
- Terminal-Bench 4.0 (Google harness): **57.4%** (Google announcement, AnandTech/NerNeural compilation) — **9 pts behind Opus 5.5's 66.4%** but level with GPT-6 Astra 58.2%.
- Terminal-Bench 4.0 (AA harness): **57.1%** (Trending Topics reproduction vs AA Opus 5.5 59.6%, GPT-6 Astra 59.1%).
- FrontierSWE v2: **55.0%** (Google / DataCamp reproduction) — **10.5 pts behind GPT-6 Astra's 65.5%**.
- AutomationBench (Zapier): **51.3%** (Google; **#1** vs Opus 5.5 40.0%, Fable 5.1 31.4%, GPT-6 Astra 41.4%).
- Vals Index (GDP-weighted finance / coding / legal / tax): **68.9%** (Google; **#1 of 41 models** per Vals AI). Opus 5.5 67.0%, Fable 5.1 65.8%, GPT-6 Astra 63.1%.
- Vals Finance Agent V2: **leading** (Google). Harvey LAB-AA v1.1: **19.6%** (#1 by wide margin: 5.4% GPT-6 Astra, 6.7% Fable 5.1, 3.8% Opus 5.5 — per Google's DataCamp-compiled table).
- Vals cost per test: **$15.68** (Argon) vs **$32.14** (Opus 5.5) — DataCamp / Vals.
- CWE-bench v1: **68.0%** (Google / DataCamp; **tied #1** with GPT-6 Astra's 68.0%, vs Opus 5.5 67.0%, Fable 5.1 58.0%).
- AA-Briefcase / GDPval-AA v2.1 / AutomationBench-AA / Terminal-Bench 4.0 / SciCode / HLE / GDP.pdf / CritPt / AA-Omniscience / AA-LCR v1.1: covered in AA Intelligence Index 52.6 (medium).
- Gray Swan IPI (indirect prompt injection): Google says "leading"; **no published score** — treat as directional.
- FrontierCode 1.1 / Terminal-Bench-Science 0.1 / ITBench-AA: covered in AA Index v4.3.2 (Google reproduces as proxy; AA Index is the independent test).

Reasoning / knowledge:

- Humanity's Last Exam (AA harness, 2026): **57.1%** (Trending Topics / Wikipedia "Results" table). Trail Opus 5.5 61.4%; lead GPT-6 Astra 54.7%, MiMo-V2.6-Pro 49.4%, Muse Spark 1.3 48.7%.
- Artificial Analysis Intelligence Index v4.3.x (Argon High): **52.6** (Trending Topics / AA). Opus 5.5 57.6 (note: AA index value differs from the Anthropic-blog figure of 58 — different harness); GPT-6 Astra 52.7; MiMo-V2.6-Pro 46.
- llm-stats composite: **55.10** (#1 in their composite for Google models; Claude Mythos Preview 54.4 next).
- BenchLM Knowledge lane: **79.8** (best in class per their Oct 2026 leaderboard).
- LVBench (long-video understanding): **91.7%** (Google; state of the art).
- Vals Index: **68.9%** (per Vals; ranked #1).
- SciCode / CritPt / AA-Omniscience: covered in AA Index composition; per-eval numbers not in my sampled sources.

Coding:

- DeepSWE v1.1: **77.9%** (#1, Google).
- CWE-bench v1: **68.0%** (tied #1).
- Vals Index: **68.9%** (#1).
- BenchLM Coding lane: **71.6** (Oct 2026 leaderboard, behind Opus 5.5 and a few others).
- FrontierSWE v2: **55.0%** (10.5 pts behind GPT-6 Astra).
- Terminal-Bench 4.0: **57.4%** (Google) / 57.1% (AA).
- SWE-bench Verified: DataCamp's table reports Argon 71.0%; BenchLM coding leaderboard records **74.0%** for Argon (the source I found most reliable). Treat as **74.0%** per BenchLM.

Long context:

- **GraphWalks BFS 256K–1M: 84.2%** (Google / DataCamp — **#1** vs Opus 5.5 66.8%, GPT-6 Astra 71.8%, Fable 5.1 65.0%).

### Normalized scores (1–100)

- **Tool use: 90/100.** DeepSWE v1.1 77.9% (#1), Vals Index 68.9% (#1, GDP-weighted), AutomationBench 51.3% (#1), Harvey LAB 19.6% (#1 by wide margin), CWE-bench v1 68.0% (tied #1). AA Intelligence Index 52.6 (mid-frontier). Cap = FrontierSWE v2 55.0% (10.5 pts behind GPT-6 Astra), Terminal-Bench 4.0 57.4% (9 pts behind Opus 5.5); AA Index 52.6 trails Opus 5.5's 57.6.
- **Reasoning: 88/100.** HLE 57.1% (AA; Wikipedia results table), Vals Index 68.9% (#1), BenchLM Knowledge 79.8, llm-stats 55.1 (Google's #1 in their composite), GraphWalks 84.2% (#1, the reasoning on long-context result is a frontier-tier achievement). AA Intelligence Index 52.6 (mid-frontier). Cap = LLM-stats 55 vs Opus 5.5 58 on AA Index; SciCode / AA-Omniscience specifics not in my sampled sources.
- **Context window: 95/100.** 1M-token context window with industry-leading 1M-token **output** limit (up from 64K on prior Gemini). GraphWalks BFS 256K–1M **84.2%** (#1 across the four frontier peers). MarkTechPost + Google confirm input window is also 1M. Kept off 100 only because Google did not formally state the input window in the launch blog; meta.json's "262K output / 1M via continuation" suggests staged-output architecture.
- **Multimodal: 88/100.** Text, image, video in; text out. LVBench **91.7%** (state of the art for long-video understanding); CharXiv leads per Google's Vals Finance / Harvey figure pattern; MMMU-Pro covered in AA Index v4.3.2. Per methodology (+video in) → 80–90 band; 88 reflects strong video + image with text-only out.
- **Coding: 92/100.** DeepSWE v1.1 **77.9%** (#1, Google), CWE-bench v1 68.0% (tied #1), SWE-bench Verified 74.0% (BenchLM Coding Oct 2026 leaderboard), FrontierSWE v2 55.0%, Terminal-Bench 4.0 57.4% (Google) / 57.1% (AA). Cap = FrontierSWE v2 10.5 pts behind GPT-6 Astra; Terminal-Bench 4.0 9 pts behind Opus 5.5; SWE-bench Verified 74.0% below Opus 5.5 (89.9%) and Fable 5.1 (95.0%).
- **Cost efficiency: 70/100.** Intro $2/$10 (one-fifth of GPT-6 Astra's $10/$50) is the headline price story — but introductory duration is undisclosed by Google and standard rate reverts to $4/$20. **AA cost per task $1.99** (Argon) vs $3.26 (Astra) vs $5.98 (Opus 5.5) is the real differentiator. **Vals cost per test $15.68 (Argon) vs $32.14 (Opus 5.5)** — best frontier-tier cost-per-capability ratio on Vals (per `kingy.ai/blog/frontier-ai-models-gemini-4-argon-gpt-6-astra-sol-claude`). Cached input $0.10/1M (95% discount) — best-in-class. Cap = access still gated at launch; reasoning-token billing undocumented; standard rate will set the long-term ceiling.
- **Overall Score: 91/100** Mean of `(90 + 88 + 95 + 88 + 92) / 5 = 90.6` → half-up **91**. Best fit: legal / finance / tax-domain research agents (Vals Index #1, Harvey LAB #1, Vals Finance v2 leading), large-scale long-output engineering (DeepSWE v1.1 #1 + 1M output), and **enterprise cybersecurity defense workflows via Fairwind Program access** (the only available route today). Gate decisions on General Availability; treat any switch as a test, not a swap, because FrontierSWE v2 and Terminal-Bench 4.0 still trail GPT-6 Astra / Opus 5.5.

---

## Signature

- Provided by: **MiniMax M3 (google/gemini-4-argon)** — 2026-10-13
- Method: independent MiniMax M3 evaluation drawn from the Google launch blog & DeepMind post, NeuralTrust analysis, MarkTechPost / DataCamp / DataLearner compilations, Trending Topics reproduction of Artificial Analysis Index numbers, Vals AI leaderboard, BenchLM coding + knowledge leaderboards, llm-stats composite, and Wikipedia's HLE results table. Per-benchmark footnotes (harness, vendor vs independent) captured in-line. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

